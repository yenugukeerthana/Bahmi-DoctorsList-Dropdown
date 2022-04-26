import {openmrsFetch, usePagination} from '@openmrs/esm-framework'
import {render, screen, waitFor} from '@testing-library/react'
import {when} from 'jest-when'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {SWRConfig} from 'swr'
import {headers} from '../constants'
import {
  mockEmptyPendingLabOrderResponse,
  mockPendingLabOrdersErrorResponse,
  mockPendingLabOrdersResponse,
} from '../__mocks__/pendingLabOrders.mock'
import PaginatedTable from './paginated-table'

const mockPatientUuid = '1'

describe('Patient lab details', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {value: localStorageMock})
    when(openmrsFetch).mockImplementation(() => jest.fn())
    localStorage.setItem('i18nextLng', 'en-us')
  })
  afterEach(() => {
    localStorage.removeItem('i18nextLng'), jest.clearAllMocks()
  })

  it('should display pending lab orders table when call for orders data is successful', async () => {
    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockReturnValue(mockPendingLabOrdersResponse)
    when(usePagination)
      .calledWith([
        {
          id: 'abc-123',
          testName: 'Routine Blood',
          date: 'April 19, 2022',
          orderedBy: 'Test Orderer'
        }
      ], 5)
      .mockReturnValue({
        results: [
            {
              id: 'abc-123',
              testName: 'Routine Blood',
              date: 'April 19, 2022',
              orderedBy: 'Test Orderer'
            }
          ],
        goTo: jest.fn(),
        currentPage: 1,
      })

    render(
      <SWRConfig value={{provider: () => new Map()}}>
        <BrowserRouter>
          <PaginatedTable patientUuid={mockPatientUuid} />
        </BrowserRouter>
      </SWRConfig>,
    )

    await waitFor(() => {
      expect(screen.getByText(/Pending lab orders/i)).toBeInTheDocument()
    })
    expect(screen.getByTitle(/lab-order-table/i)).toBeInTheDocument()
    headers.map(header => {
      expect(
        screen.getByRole('columnheader', {name: header.header}),
      ).toBeInTheDocument()
    })
    expect(
      screen.getByRole('cell', {name: 'April 19, 2022'}),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('cell', {name: 'Routine Blood'}),
    ).toBeInTheDocument()
    expect(screen.getByRole('cell', {name: 'Test Orderer'})).toBeInTheDocument()
    screen.getByRole('checkbox', {
      name: /select all rows/i,
    })
    expect(
      screen.getAllByRole('checkbox', {
        name: /select all rows/i,
      }).length,
    ).toEqual(1)
    expect(
      screen.getAllByRole('checkbox', {
        name: /select row/i,
      }).length,
    ).toEqual(1)
    expect(screen.getByTestId(/paginate-table/i)).toBeInTheDocument()

    expect(
      screen.queryByText(
        /Something went wrong in fetching pending lab orders\.\.\./i,
      ),
    ).not.toBeInTheDocument()
  })
  it('should display error message when call for orders data is unsuccessful', async () => {
    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockRejectedValueOnce(mockPendingLabOrdersErrorResponse)

    render(
      <SWRConfig value={{provider: () => new Map()}}>
        <BrowserRouter>
          <PaginatedTable patientUuid={mockPatientUuid} />
        </BrowserRouter>
      </SWRConfig>,
    )

    await waitFor(() => {
      expect(
        screen.getByText(
          /Something went wrong in fetching pending lab orders\.\.\./i,
        ),
      ).toBeInTheDocument()
    })
    expect(screen.queryByText('Pending lab orders')).not.toBeInTheDocument()
    expect(screen.queryByTitle(/lab-order-table/i)).not.toBeInTheDocument()
    expect(screen.queryByTestId(/paginate-table/i)).not.toBeInTheDocument()
  })
  it('should not display pending lab orders table when there is no open orders', async () => {
    const mockedOpenmrsFetch = openmrsFetch as jest.Mock
    mockedOpenmrsFetch.mockReturnValue(mockEmptyPendingLabOrderResponse)

    render(
      <SWRConfig value={{provider: () => new Map()}}>
        <BrowserRouter>
          <PaginatedTable patientUuid={mockPatientUuid} />
        </BrowserRouter>
      </SWRConfig>,
    )

    await waitFor(() => {
      expect(screen.queryByText('Pending lab orders')).not.toBeInTheDocument()
    })
    expect(screen.queryByTitle(/lab-order-table/i)).not.toBeInTheDocument()
    expect(screen.queryByTestId(/paginate-table/i)).not.toBeInTheDocument()
    expect(
      screen.queryByText(
        /Something went wrong in fetching pending lab orders\.\.\./i,
      ),
    ).not.toBeInTheDocument()
  })
})

const localStorageMock = (function() {
  let store = {}

  return {
    getItem(key) {
      return store[key]
    },

    setItem(key, value) {
      store[key] = value
    },

    clear() {
      store = {}
    },

    removeItem(key) {
      delete store[key]
    },
  }
})()
