import {openmrsFetch, useLayoutType} from '@openmrs/esm-framework'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {SWRConfig} from 'swr'
import {UploadReportProvider} from '../context/upload-report-context'
import {localStorageMock} from '../utils/test-utils'
import {mockLabTestsResponse} from '../__mocks__/selectTests.mock'
import UploadReport from './upload-report'

describe('Upload Report', () => {
  beforeEach(() =>
    Object.defineProperty(window, 'localStorage', {value: localStorageMock}),
  )
  afterEach(() => jest.clearAllMocks())
  it('should close the side panel on click of close button', () => {
    localStorage.setItem('i18nextLng', 'en')
    const close = jest.fn()

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('desktop')

    renderWithContextProvider(
      <UploadReport close={close} header={'Test Header'} />,
    )

    userEvent.click(screen.getByLabelText('close-icon'))

    expect(close).toBeCalled()
  })
  it('should reset the value on click of discard button', async () => {
    localStorage.setItem('i18nextLng', 'en')
    const close = jest.fn()

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('desktop')

    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockResolvedValue(mockLabTestsResponse)

    renderWithContextProvider(
      <SWRConfig value={{provider: () => new Map()}}>
        <UploadReport close={close} header={'Test Header'} />
      </SWRConfig>,
    )

    userEvent.click(
      screen.getByRole('textbox', {
        name: /report date/i,
      }),
    )

    const currentDay: string = getFormatedDate(0)
    userEvent.click(screen.getByLabelText(currentDay))

    expect(
      screen.getByRole('textbox', {
        name: /report date/i,
      }),
    ).toHaveValue(
      new Date(currentDay).toLocaleDateString('en', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    )
    await waitFor(() =>
      userEvent.type(screen.getByRole('searchbox', {name: /search/i}), 'ab'),
    )
    expect(screen.getByRole('searchbox', {name: /search/i})).toHaveValue('ab')

    userEvent.click(screen.getByRole('button', {name: /discard/i}))

    expect(screen.getByRole('searchbox', {name: /search/i})).not.toHaveValue(
      'ab',
    )
    expect(
      screen.getByRole('textbox', {
        name: /report date/i,
      }),
    ).not.toHaveValue(currentDay)
    expect(screen.getByTestId(/selected-tests/i)).toHaveTextContent(
      'Selected Tests ( 0 )',
    )
    expect(screen.getByTestId(/available-tests/i)).toHaveTextContent(/Absolute Eosinphil Count/i)
    expect(screen.getByTestId(/available-tests/i)).toHaveTextContent(/haemoglobin/i)
  })
  it('should not allow user to select future dates', async () => {
    localStorage.setItem('i18nextLng', 'en')
    const close = jest.fn()

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('desktop')

    renderWithContextProvider(
      <UploadReport close={close} header={'Test Header'} />,
    )

    expect(
      screen.getByRole('button', {name: /save and upload/i}),
    ).toBeDisabled()

    userEvent.click(
      screen.getByRole('textbox', {
        name: /report date/i,
      }),
    )

    const currentDay = screen.getByLabelText(getFormatedDate(0))
    const futureDate = screen.getByLabelText(getFormatedDate(1))

    expect(currentDay.className).not.toMatch(/-disabled/i)
    expect(futureDate.className).toMatch(/-disabled/i)
  })
  it('should disable save and upload button until report date, selected test is entered', async () => {
    localStorage.setItem('i18nextLng', 'en')
    const close = jest.fn()
    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockResolvedValue(mockLabTestsResponse)

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('desktop')

    renderWithContextProvider(
      <SWRConfig value={{provider: () => new Map()}}>
        <UploadReport close={close} header={'Test Header'} />
      </SWRConfig>,
    )

    expect(
      screen.getByRole('button', {name: /save and upload/i}),
    ).toBeDisabled()

    userEvent.click(
      screen.getByRole('textbox', {
        name: /report date/i,
      }),
    )

    const currentDay: string = getFormatedDate(0)

    userEvent.click(screen.getByLabelText(currentDay))

    await waitFor(() =>
      expect(screen.queryByText(/loading \.\.\./i)).not.toBeInTheDocument(),
    )

    userEvent.click(
      screen.getByRole('checkbox', {name: /Absolute Eosinphil Count/i}),
    )

    expect(
      screen.getByRole('button', {name: /save and upload/i}),
    ).not.toBeDisabled()
  })
})

function getFormatedDate(addDays: number): string {
  let date = new Date()
  date.setDate(date.getDate() + addDays)

  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
}

function renderWithContextProvider(children) {
  return render(<UploadReportProvider>{children}</UploadReportProvider>)
}
