import {LabOrdersFetchResponse} from '../types'

export const mockPendingLabOrdersResponse: LabOrdersFetchResponse = {
  data: {
    results: [
      {
        uuid: 'abc-123',
        orderNumber: 'ORD-378',
        accessionNumber: null,
        patient: {
          uuid: 'efg-321',
          display: 'Test Patient',
          links: [
            {
              rel: 'self',
              uri:
                'http://openmrs:8080/openmrs/ws/rest/v1/patient/efg-321',
            },
          ],
        },
        concept: {
          uuid: 'dummy-456',
          display: 'Routine Blood',
          links: [
            {
              rel: 'self',
              uri:
                'http://openmrs:8080/openmrs/ws/rest/v1/concept/dummy-456',
            },
          ],
        },
        action: 'NEW',
        careSetting: {
          uuid: 'dummy-102490u',
          display: 'Outpatient',
          links: [
            {
              rel: 'self',
              uri:
                'http://openmrs:8080/openmrs/ws/rest/v1/caresetting/dummy-102490u',
            },
          ],
        },
        previousOrder: null,
        dateActivated: '2022-04-19T11:15:28.000+0000',
        scheduledDate: null,
        dateStopped: null,
        autoExpireDate: '2022-04-19T12:15:28.000+0000',
        encounter: {
          uuid: '8767-sfdvf',
          display: 'Consultation 04/19/2022',
          links: [
            {
              rel: 'self',
              uri:
                'http://openmrs:8080/openmrs/ws/rest/v1/encounter/8767-sfdvf',
            },
          ],
        },
        orderer: {
          uuid: 'dathb-76897',
          display: 'Test Orderer',
          links: [
            {
              rel: 'self',
              uri:
                'http://openmrs:8080/openmrs/ws/rest/v1/provider/dathb-76897',
            },
          ],
        },
        orderReason: null,
        orderReasonNonCoded: null,
        orderType: {
          uuid: 'lab-order-13987',
          display: 'Lab Order',
          name: 'Lab Order',
          javaClassName: 'org.openmrs.Order',
          retired: false,
          description: 'An order for laboratory tests',
          conceptClasses: [
            {
              uuid: 'fdc-986789-po',
              display: 'LabTest',
              links: [
                {
                  rel: 'self',
                  uri:
                    'http://openmrs:8080/openmrs/ws/rest/v1/conceptclass/fdc-986789-po',
                },
              ],
            },
          ],
          parent: null,
          links: [
            {
              rel: 'self',
              uri:
                'http://openmrs:8080/openmrs/ws/rest/v1/ordertype/lab-order-13987',
            },
          ],
          resourceVersion: '1.10',
        },
        urgency: 'ROUTINE',
        instructions: null,
        commentToFulfiller: null,
        display: 'Routine Blood',
        links: [
          {
            rel: 'self',
            uri:
              'http://openmrs:8080/openmrs/ws/rest/v1/order/dummy-i-1233e',
          },
        ],
        type: 'order',
        resourceVersion: '1.10',
      },
    ],
  },
}

export const mockPendingLabOrdersErrorResponse = {
    message: 'Data not found',
    response: {
      status: 404,
      statusText: 'Not Found',
    },
  }
export const mockEmptyPendingLabOrderResponse ={
    data:{
        results:[]
    }
}