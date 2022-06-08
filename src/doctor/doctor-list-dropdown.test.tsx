import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {localStorageMock} from '../utils/test-utils'
import DoctorListDropdown from './doctor-list-dropdown'
import {openmrsFetch} from '@openmrs/esm-framework'
import {mockDoctorNames} from '../__mocks__/doctorNames.mock'
import {UploadReportContext} from '../context/upload-report-context'
// import {DoctorContext} from '../context/doctor-context'

describe('upload file', () => {
  let doctorName: string
  const setDoctorName = (input: string) => {
    doctorName = input
  }
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {value: localStorageMock})

    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockResolvedValue(mockDoctorNames)

    const value = {
      doctorName,
      setDoctorName,
    }
    renderWithContextProvider(<DoctorListDropdown />, value)
  })

  afterEach(() => jest.clearAllMocks())

  it('should show doctor dropdown when doctor list dropdown component is rendered', async () => {
    const selectedButton = screen.getByRole('button', {
      name: /Please select the doctor name/i,
    })

    expect(selectedButton).toBeInTheDocument()
  })

  it('should be able to select dropdown item when clicked on the dropdown and doctor name value should be updated', async () => {
    // should update the doctor name value as per the selected doctor name from the dropdown
    userEvent.click(
      screen.getByRole('button', {
        name: /Please select the doctor name/i,
      }),
    )
    expect(doctorName).toBe(undefined)

    userEvent.click(await screen.findByText('admin - Super User'))
    expect(await screen.findByText(/admin - Super User/i)).toBeInTheDocument()
    expect(doctorName).toBe('admin - Super User')

    userEvent.click(screen.getByText('admin - Super User'))

    userEvent.click(screen.getByText('8-3 - user'))

    expect(screen.getByText(/8-3 - user/i)).toBeInTheDocument()
    expect(doctorName).toBe('8-3 - user')
  })
})

function renderWithContextProvider(children, value) {
  return render(
    <UploadReportContext.Provider value={value}>
      {children}
    </UploadReportContext.Provider>,
  )
}
