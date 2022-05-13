import {openmrsFetch} from '@openmrs/esm-framework'
import {labOrderUuid} from '../constants'

export const getPendingLabOrdersURL = patientUuid =>
  `/ws/rest/v1/order?patient=${patientUuid}&orderType=Lab Order&v=default`

export const fetcher = url =>
  openmrsFetch(url, {
    method: 'GET',
  })
