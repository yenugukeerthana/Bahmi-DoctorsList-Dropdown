import {openmrsFetch} from '@openmrs/esm-framework'
const s = 'byFullySpecifiedName'
const name = 'Lab+Samples'
const v =
  'custom:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,setMembers:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,setMembers:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,conceptClass:(uuid,name,description),setMembers:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,conceptClass:(uuid,name,description),setMembers:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,conceptClass:(uuid,name,description))))))'
const locale = localStorage.getItem('i18nextLng')

export const getPendingLabOrdersURL = (patientUuid: string) =>
  `/ws/rest/v1/order?patient=${patientUuid}&orderType=Lab Order&v=default`

export const getLabTests = () =>
  `/ws/rest/v1/concept?s=${s}&locale=${locale}&name=${name}&v=${v}`

export const uploadDocumentURL =
  '/ws/rest/v1/bahmnicore/visitDocument/uploadDocument'

export const saveDiagnosticReportURL = '/ws/fhir2/R4/DiagnosticReport'

export const fetcher = (url: string) =>
  openmrsFetch(url, {
    method: 'GET',
  })

export const postApiCall = (url, data, abortController) => {
  return openmrsFetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
    signal: abortController.signal,
  })
}
