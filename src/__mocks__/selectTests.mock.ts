export const mockLabTestsResponse = {
  data: {
    results: [
      {
        uuid: '8160a011-3f10-11e4-adec-0800271c1b75',
        name: {
          display: 'Lab Samples',
          uuid: '81615942-3f10-11e4-adec-0800271c1b75',
        },
        names: [
          {
            display: 'Lab Samples',
            conceptNameType: 'FULLY_SPECIFIED',
            name: 'Lab Samples',
          },
          {
            display: 'Laboratory',
            conceptNameType: 'SHORT',
            name: 'Laboratory',
          },
        ],
        set: true,
        setMembers: [
          {
            uuid: '23c1ac3f-9aa9-4261-b434-622dab8fe2bd',
            name: {
              display: 'Blood',
              uuid: '10785344-806a-4c0d-87bc-661db187b338',
            },
            names: [
              {
                display: 'Blood',
                conceptNameType: 'FULLY_SPECIFIED',
                name: 'Blood',
              },
            ],
            set: true,
            conceptClass: {
              uuid: '0fb09bcb-47c6-11e4-8125-0800271c1b75',
              name: 'Sample',
              description: 'Lab Samples Concept Class',
            },
            setMembers: [
              {
                uuid: '07a128f7-f596-45d5-a2a9-c447bc9e5112',
                name: {
                  display: 'Absolute Eosinphil Count',
                  uuid: 'fd2ec116-74c9-4d48-86cf-1c7e8aa1a748',
                },
                names: [
                  {
                    display: 'Absolute Eosinphil Count',
                    conceptNameType: 'FULLY_SPECIFIED',
                    name: 'Absolute Eosinphil Count',
                  },
                ],
                set: false,
                conceptClass: {
                  uuid: '33a6291c-8a92-11e4-977f-0800271c1b75',
                  name: 'LabTest',
                  description: 'Lab Tests',
                },
                setMembers: [],
              },
              {
                uuid: 'fe769568-16da-4d9e-9c99-fbed0a8a60f5',
                name: {
                  display: 'Haemoglobin',
                  uuid: 'b8b8c317-43d2-4c4b-a67d-2ef3782c53eb',
                },
                names: [
                  {
                    display: 'Haemoglobin',
                    conceptNameType: 'FULLY_SPECIFIED',
                    name: 'Haemoglobin',
                  },
                ],
                set: false,
                conceptClass: {
                  uuid: '33a6291c-8a92-11e4-977f-0800271c1b75',
                  name: 'LabTest',
                  description: 'Lab Tests',
                },
                setMembers: [],
              },
            ],
          },
        ],
      },
    ],
  },
}

export const mockLabTestsErrorResponse = {
  message: 'Data not found',
  response: {
    status: 404,
    statusText: 'Not Found',
  },
}

export const mockLabTestsPendingResponse = {
  message: 'Data not found',
  response: {
    status: 202,
    statusText: 'Pending',
  },
}

export const mockUploadFileResponse = {
  data: {
    url: '100/76-Patient Document-7baff463-fdaa-43d0-a402-aa948c296958.pdf',
  },
  ok: 'true',
  status: 200,
}

export const mockDiagnosticReportResponse = {
  data: {
    id: 'e950a76d-30b8-4005-b3a6-e8fa2d5888ef',
  },
  ok: 'true',
  status: 200,
}

export const uploadFileRequestBody =
  '{"content":",Y29udGVudA==","encounterTypeName":"Patient Document","fileType":"pdf","format":"pdf","patientUuid":"123"}'

export const diagnosticReportRequestBody =
  '{"resourceType":"DiagnosticReport","status":"final","code":{"coding":[{"code":"07a128f7-f596-45d5-a2a9-c447bc9e5112","display":"Absolute Eosinphil Count"}]},"subject":{"reference":"Patient/123"},"issued":"2022-05-24T18:30:00.000Z","conclusion":"","presentedForm":{"url":"100/76-Patient Document-7baff463-fdaa-43d0-a402-aa948c296958.pdf","title":"test.pdf"}}'
