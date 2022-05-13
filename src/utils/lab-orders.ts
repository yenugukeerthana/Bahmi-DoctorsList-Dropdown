import {openmrsFetch} from '@openmrs/esm-framework'
const s = 'byFullySpecifiedName'
const name = 'Lab+Samples'
const v =
  'custom:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,setMembers:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,setMembers:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,conceptClass:(uuid,name,description),setMembers:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,conceptClass:(uuid,name,description),setMembers:(uuid,name:(display,uuid),names:(display,conceptNameType,name),set,conceptClass:(uuid,name,description))))))'
const locale = localStorage.getItem('i18nextLng')

export const getPendingLabOrdersURL = patientUuid =>
  `/ws/rest/v1/order?patient=${patientUuid}&orderType=Lab Order&v=default`

export const getLabTests = () =>
  `/ws/rest/v1/concept?s=${s}&locale=${locale}&name=${name}&v=${v}`

export const fetcher = url =>
  openmrsFetch(url, {
    method: 'GET',
  })
