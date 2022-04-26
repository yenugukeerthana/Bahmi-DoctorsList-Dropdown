import {Type, validators} from '@openmrs/esm-framework'
import {spaRoot, patientLabDetailsPath} from './constants'
export const configSchema = {
  search: {
    patientResultUrl: {
      _default: spaRoot + patientLabDetailsPath,
      _description:
        'Where clicking a patient result takes the user. Accepts template parameter ${patientUuid}',
      _validators: [validators.isUrlWithTemplateParameters(['patientUuid'])],
    },
  },
}
