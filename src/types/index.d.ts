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
  data: {results: Array<LabOrders>}
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

interface ReportPresentedForm {
  contentType: string
  language: string
  url: string
  hash: string
  title: string
  creation: Date
}

interface ReportCoding {
  system: string
  code: string
  display: string
}
interface ReportCode {
  coding: Array<ReportCoding>
}
interface ReportResource {
  resourceType: string
  id: string
  meta: Meta2
  status: string
  code: Code
  presentedForm: Array<ReportPresentedForm>
}
interface ReportEntry {
  fullUrl: string
  resource: Resource
}
export interface ReportTableFetchResponse {
  data: {
    resourceType: string
    id: string
    entry: Array<ReportEntry>
  }
}
