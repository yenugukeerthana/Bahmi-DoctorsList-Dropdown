import {useLayoutType} from '@openmrs/esm-framework'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {localStorageMock} from '../utils/test-utils'
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

    render(<UploadReport close={close} header={'Test Header'} />)

    userEvent.click(screen.getByLabelText('close'))

    expect(close).toBeCalled()
  })
  it('should reset the value on click of discard button', async () => {
    localStorage.setItem('i18nextLng', 'en')
    const close = jest.fn()

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('desktop')

    render(<UploadReport close={close} header={'Test Header'} />)

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

    userEvent.click(screen.getByRole('button', {name: /discard/i}))

    expect(
      screen.getByRole('textbox', {
        name: /report date/i,
      }),
    ).not.toHaveValue(currentDay)
  })
  it('should not allow user to select future dates', async () => {
    localStorage.setItem('i18nextLng', 'en')
    const close = jest.fn()

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('desktop')

    render(<UploadReport close={close} header={'Test Header'} />)

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
  it('should disable save and upload button until report date is entered', async () => {
    localStorage.setItem('i18nextLng', 'en')
    const close = jest.fn()

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('desktop')

    render(<UploadReport close={close} header={'Test Header'} />)

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
