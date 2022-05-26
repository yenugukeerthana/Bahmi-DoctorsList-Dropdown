import {ReportTableFetchResponse} from '../types'

export const mockReportTableResponse: ReportTableFetchResponse = {
  data: {
    resourceType: 'Bundle',
    id: '1178aaed-e352-48f8-8685-4ae8d17d732e',
    entry: [
      {
        fullUrl:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation/7102ba1d-34e2-486f-b156-8c39f8596724',
        resource: {
          resourceType: 'DiagnosticReport',
          id: '7102ba1d-34e2-486f-b156-8c39f8596724',
          meta: {
            lastUpdated: '2022-05-24T10:46:45.000+00:00',
            tag: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
                code: 'SUBSETTED',
                display: 'Resource encoded in summary mode',
              },
            ],
          },
          status: 'final',
          code: {
            coding: [
              {
                code: '5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                display: 'Systolic blood pressure',
              },
              {
                system: 'http://snomed.info/sct',
                code: '271649006',
                display: 'Systolic blood pressure',
              },
            ],
          },
          subject: {
            reference: 'Patient/2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
            type: 'Patient',
            display: 'Test Test (OpenMRS ID: 10005V1)',
          },
          encounter: {
            reference: 'Encounter/c14df2f3-a3b3-41fe-93c9-1563ea0fa504',
            type: 'Encounter',
          },
          effectiveDateTime: '2022-05-24T10:46:45+00:00',
          issued: '2022-05-24T10:46:45.000+00:00',
          valueQuantity: {value: 34.0, unit: 'mmHg'},
          conclusion: 'Correlate with other findings. inconclusive.',
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'MP Report',
              creation: '2022-05-20T20:00:00+11:00',
            },
          ],
        },
      },
      {
        fullUrl:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation/7102ba1d-34e2-486f-b156-8c39f8596724',
        resource: {
          resourceType: 'DiagnosticReport',
          id: '7102ba1d-34e2-486f-b156-8c39f8596725',
          meta: {
            lastUpdated: '2022-05-24T10:46:45.000+00:00',
            tag: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
                code: 'SUBSETTED',
                display: 'Resource encoded in summary mode',
              },
            ],
          },
          status: 'final',
          code: {
            coding: [
              {
                code: '5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                display: 'Platelets',
              },
              {
                system: 'http://snomed.info/sct',
                code: '271649006',
                display: 'CRP',
              },
            ],
          },
          subject: {
            reference: 'Patient/2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
            type: 'Patient',
            display: 'Test Test (OpenMRS ID: 10005V1)',
          },
          encounter: {
            reference: 'Encounter/c14df2f3-a3b3-41fe-93c9-1563ea0fa504',
            type: 'Encounter',
          },
          effectiveDateTime: '2022-05-24T10:46:45+00:00',
          issued: '2022-05-24T10:46:45.000+00:00',
          valueQuantity: {value: 34.0, unit: 'mmHg'},
          referenceRange: [
            {
              high: {value: 115.0},
              type: {
                coding: [
                  {
                    system:
                      'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
                    code: 'normal',
                  },
                ],
              },
            },
            {
              low: {value: 0.0},
              high: {value: 150.0},
              type: {
                coding: [
                  {
                    system: 'http://fhir.openmrs.org/ext/obs/reference-range',
                    code: 'absolute',
                  },
                ],
              },
            },
          ],
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'Report2',
              creation: '2022-05-19T20:00:00+11:00',
            },
          ],
        },
      },
      {
        fullUrl:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation/7102ba1d-34e2-486f-b156-8c39f8596724',
        resource: {
          resourceType: 'DiagnosticReport',
          id: '7102ba1d-34e2-486f-b156-8c39f8596726',
          meta: {
            lastUpdated: '2022-05-24T10:46:45.000+00:00',
            tag: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
                code: 'SUBSETTED',
                display: 'Resource encoded in summary mode',
              },
            ],
          },
          status: 'final',
          code: {
            coding: [
              {
                code: '5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                display: 'Hb1AC',
              },
              {
                system: 'http://snomed.info/sct',
                code: '271649006',
                display: 'Systolic blood pressure',
              },
            ],
          },
          subject: {
            reference: 'Patient/2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
            type: 'Patient',
            display: 'Test Test (OpenMRS ID: 10005V1)',
          },
          encounter: {
            reference: 'Encounter/c14df2f3-a3b3-41fe-93c9-1563ea0fa504',
            type: 'Encounter',
          },
          effectiveDateTime: '2022-05-24T10:46:45+00:00',
          issued: '2022-05-24T10:46:45.000+00:00',
          valueQuantity: {value: 34.0, unit: 'mmHg'},
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'Report3',
              creation: '2022-05-23T20:00:00+11:00',
            },
          ],
        },
      },
      {
        fullUrl:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation/7102ba1d-34e2-486f-b156-8c39f8596724',
        resource: {
          resourceType: 'DiagnosticReport',
          id: '7102ba1d-34e2-486f-b156-8c39f8596744',
          meta: {
            lastUpdated: '2022-05-24T10:46:45.000+00:00',
            tag: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
                code: 'SUBSETTED',
                display: 'Resource encoded in summary mode',
              },
            ],
          },
          status: 'final',
          code: {
            coding: [
              {
                code: '5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                display: 'Malaria Parasites (Rapid kit)',
              },
              {
                system: 'http://snomed.info/sct',
                code: '271649006',
                display: 'Systolic blood pressure',
              },
            ],
          },
          subject: {
            reference: 'Patient/2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
            type: 'Patient',
            display: 'Test Test (OpenMRS ID: 10005V1)',
          },
          encounter: {
            reference: 'Encounter/c14df2f3-a3b3-41fe-93c9-1563ea0fa504',
            type: 'Encounter',
          },
          effectiveDateTime: '2022-05-24T10:46:45+00:00',
          issued: '2022-05-24T10:46:45.000+00:00',
          valueQuantity: {value: 34.0, unit: 'mmHg'},
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'Report 4',
              creation: '2022-05-14T20:00:00+11:00',
            },
          ],
        },
      },
      {
        fullUrl:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation/7102ba1d-34e2-486f-b156-8c39f8596724',
        resource: {
          resourceType: 'DiagnosticReport',
          id: '7102ba1d-34e2-486f-b156-8c39f8596727',
          meta: {
            lastUpdated: '2022-05-24T10:46:45.000+00:00',
            tag: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
                code: 'SUBSETTED',
                display: 'Resource encoded in summary mode',
              },
            ],
          },
          status: 'final',
          code: {
            coding: [
              {
                code: '5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                display: 'Fasting Blood Sugar',
              },
              {
                system: 'http://snomed.info/sct',
                code: '271649006',
                display: 'Systolic blood pressure',
              },
            ],
          },
          subject: {
            reference: 'Patient/2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
            type: 'Patient',
            display: 'Test Test (OpenMRS ID: 10005V1)',
          },
          encounter: {
            reference: 'Encounter/c14df2f3-a3b3-41fe-93c9-1563ea0fa504',
            type: 'Encounter',
          },
          effectiveDateTime: '2022-05-24T10:46:45+00:00',
          issued: '2022-05-24T10:46:45.000+00:00',
          valueQuantity: {value: 34.0, unit: 'mmHg'},
          conclusion: 'Sample Conclusion',
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'Pharmacogenetics Report',
              creation: '2022-05-22T20:00:00+11:00',
            },
          ],
        },
      },
      {
        fullUrl:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation/7102ba1d-34e2-486f-b156-8c39f8596724',
        resource: {
          resourceType: 'DiagnosticReport',
          id: '7102ba1d-34e2-486f-b156-8c39f8596728',
          meta: {
            lastUpdated: '2022-05-24T10:46:45.000+00:00',
            tag: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
                code: 'SUBSETTED',
                display: 'Resource encoded in summary mode',
              },
            ],
          },
          status: 'final',
          code: {
            coding: [
              {
                code: '5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                display: 'Malaria Parasite',
              },
              {
                system: 'http://snomed.info/sct',
                code: '271649006',
                display: 'Systolic blood pressure',
              },
            ],
          },
          subject: {
            reference: 'Patient/2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
            type: 'Patient',
            display: 'Test Test (OpenMRS ID: 10005V1)',
          },
          encounter: {
            reference: 'Encounter/c14df2f3-a3b3-41fe-93c9-1563ea0fa504',
            type: 'Encounter',
          },
          effectiveDateTime: '2022-05-24T10:46:45+00:00',
          issued: '2022-05-24T10:46:45.000+00:00',
          valueQuantity: {value: 34.0, unit: 'mmHg'},
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'Pharmacogenetics Report 4',
              creation: '2022-05-16T20:00:00+11:00',
            },
          ],
        },
      },
      {
        fullUrl:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation/7102ba1d-34e2-486f-b156-8c39f8596724',
        resource: {
          resourceType: 'DiagnosticReport',
          id: '7102ba1d-34e2-486f-b156-8c39f8596729',
          meta: {
            lastUpdated: '2022-05-24T10:46:45.000+00:00',
            tag: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
                code: 'SUBSETTED',
                display: 'Resource encoded in summary mode',
              },
            ],
          },
          status: 'final',
          code: {
            coding: [
              {
                code: '5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                display: 'ESR',
              },
              {
                system: 'http://snomed.info/sct',
                code: '271649006',
                display: 'Systolic blood pressure',
              },
            ],
          },
          subject: {
            reference: 'Patient/2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
            type: 'Patient',
            display: 'Test Test (OpenMRS ID: 10005V1)',
          },
          encounter: {
            reference: 'Encounter/c14df2f3-a3b3-41fe-93c9-1563ea0fa504',
            type: 'Encounter',
          },
          effectiveDateTime: '2022-05-24T10:46:45+00:00',
          issued: '2022-05-24T10:46:45.000+00:00',
          valueQuantity: {value: 34.0, unit: 'mmHg'},
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'Pharmacogenetics Report 5',
              creation: '2022-05-10T20:00:00+11:00',
            },
          ],
        },
      },
      {
        fullUrl:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation/7102ba1d-34e2-486f-b156-8c39f8596724',
        resource: {
          resourceType: 'DiagnosticReport',
          id: '7102ba1d-34e2-486f-b156-8c39f8596730',
          meta: {
            lastUpdated: '2022-05-24T10:46:45.000+00:00',
            tag: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
                code: 'SUBSETTED',
                display: 'Resource encoded in summary mode',
              },
            ],
          },
          status: 'final',
          code: {
            coding: [
              {
                code: '5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                display: 'Systolic blood pressure',
              },
              {
                system: 'http://snomed.info/sct',
                code: '271649006',
                display: 'Haemoglobin',
              },
            ],
          },
          subject: {
            reference: 'Patient/2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
            type: 'Patient',
            display: 'Test Test (OpenMRS ID: 10005V1)',
          },
          encounter: {
            reference: 'Encounter/c14df2f3-a3b3-41fe-93c9-1563ea0fa504',
            type: 'Encounter',
          },
          effectiveDateTime: '2022-05-24T10:46:45+00:00',
          issued: '2022-05-24T10:46:45.000+00:00',
          valueQuantity: {value: 34.0, unit: 'mmHg'},
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'Report',
              creation: '2022-05-23T20:00:00+11:00',
            },
          ],
        },
      },
    ],
  },
}

export const mockReportTableErrorResponse = {
  message: 'Data not found',
  response: {
    status: 404,
    statusText: 'Not Found',
  },
}
export const mockEmptyReportTableResponse = {
  data: {
    resourceType: 'Bundle',
    id: '1178aaed-e352-48f8-8685-4ae8d17d732e',
    entry: [],
  },
}
