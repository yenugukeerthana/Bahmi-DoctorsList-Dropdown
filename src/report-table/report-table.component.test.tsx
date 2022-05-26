import {openmrsFetch, usePagination} from '@openmrs/esm-framework'
import {render, screen, waitFor} from '@testing-library/react'
import {when} from 'jest-when'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {SWRConfig} from 'swr'
import {reportHeaders} from '../constants'
import {localStorageMock} from '../utils/test-utils'
import ReportTable from './report-table.component'
import {
  mockReportTableResponse,
  mockReportTableErrorResponse,
  mockEmptyReportTableResponse,
} from '../__mocks__/reportTable.mock'

const mockPatientUuid = 'uuid-1'

describe('Paginated Reports Table', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {value: localStorageMock})
    when(openmrsFetch).mockImplementation(() => jest.fn())
    localStorage.setItem('i18nextLng', 'en-us')
  })
  afterEach(() => {
    localStorage.removeItem('i18nextLng'), jest.clearAllMocks()
  })

  it('should display uploaded reports table when call for reports data is successful', async () => {
    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockReturnValue(mockReportTableResponse)
    when(usePagination)
      .calledWith(expect.anything(), 5)
      .mockReturnValue({
        results: [
          {
            id: '1178aaed-e352-48f8-8685-4ae8d17d732e',
            tests: 'Hb1AC',
            url: 'dummy url',
            date: 'May 03, 2022',
            requester: '-',
            file: 'Blood Test.pdf',
            conclusion: 'sample conclusion',
          },
        ],
        goTo: jest.fn(),
        currentPage: 1,
      })

    render(
      <SWRConfig value={{provider: () => new Map()}}>
        <BrowserRouter>
          <ReportTable patientUuid={mockPatientUuid} />
        </BrowserRouter>
      </SWRConfig>,
    )

    await waitFor(() => {
      expect(screen.getByText(/Reports table/i)).toBeInTheDocument()
    })
    expect(screen.getByTitle(/report-table/i)).toBeInTheDocument()
    reportHeaders.map(header => {
      expect(
        screen.getByRole('columnheader', {name: header.header}),
      ).toBeInTheDocument()
    })
    expect(screen.getByRole('cell', {name: 'May 03, 2022'})).toBeInTheDocument()
    expect(screen.getByRole('cell', {name: 'Hb1AC'})).toBeInTheDocument()
    expect(
      screen.getByRole('cell', {name: 'Blood Test.pdf'}),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button').length).toEqual(3)
    expect(screen.getByText(/5 \/ 8 items/i)).toBeInTheDocument()

    expect(
      screen.queryByText(
        /Something went wrong in fetching Report tables\.\.\./i,
      ),
    ).not.toBeInTheDocument()
  })

  it('should display error message when call for reports data is unsuccessful', async () => {
    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockRejectedValueOnce(mockReportTableErrorResponse)

    render(
      <SWRConfig value={{provider: () => new Map()}}>
        <BrowserRouter>
          <ReportTable patientUuid={mockPatientUuid} />
        </BrowserRouter>
      </SWRConfig>,
    )

    await waitFor(() => {
      expect(
        screen.getByText(
          /Something went wrong in fetching Report tables\.\.\./i,
        ),
      ).toBeInTheDocument()
    })
    expect(screen.queryByText('Reports table')).not.toBeInTheDocument()
    expect(screen.queryByText(/1 \/ 1 items/i)).not.toBeInTheDocument()
  })
  it('should not display report table when there is no reports uploaded', async () => {
    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockReturnValue(mockEmptyReportTableResponse)

    render(
      <SWRConfig value={{provider: () => new Map()}}>
        <BrowserRouter>
          <ReportTable patientUuid={mockPatientUuid} />
        </BrowserRouter>
      </SWRConfig>,
    )

    await waitFor(() => {
      expect(screen.queryByText('Reports table')).not.toBeInTheDocument()
    })
    expect(screen.queryByText(/1 \/ 1 items/i)).not.toBeInTheDocument()
    expect(
      screen.queryByText(
        /Something went wrong in fetching Report tables\.\.\./i,
      ),
    ).not.toBeInTheDocument()
  })
})
