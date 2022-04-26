export interface LabOrders {
  uuid: string
  orderNumber: string
  accessionNumber: any
  patient: GeneralInfo
  concept: GeneralInfo
  action: string
  careSetting: GeneralInfo
  previousOrder: any
  dateActivated: string
  scheduledDate: string
  dateStopped: any
  autoExpireDate: string
  encounter: GeneralInfo
  orderer: GeneralInfo
  orderReason: any
  orderReasonNonCoded: any
  orderType: OrderType
  urgency: string
  instructions: string
  commentToFulfiller: any
  display: string
  links: Array<Links>
  type: string
  resourceVersion: string
}
export interface LabOrdersFetchResponse {
    data: {results :Array<LabOrders>}
  }
interface GeneralInfo {
  uuid: string
  display: string
  links: [Links]
}

interface Links {
  rel: string
  uri: string
}

interface OrderType {
  uuid: string
  display: string
  name: string
  javaClassName: string
  retired: boolean
  description: string
  conceptClasses: Array<GeneralInfo>
  parent: any
  links: Array<Links>
  resourceVersion: string
}
