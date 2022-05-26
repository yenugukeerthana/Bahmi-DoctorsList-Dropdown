import {usePagination} from '@openmrs/esm-framework'
import {PatientChartPagination} from '@openmrs/esm-patient-common-lib'
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableExpandedRow,
  TableCell,
  Link,
} from 'carbon-components-react'
import React, {useMemo} from 'react'
import useSWR from 'swr'
import {reportHeaders, defaultPageSize} from '../constants'
import {ReportTableFetchResponse} from '../types'
import {fetcher, getReportTableDataURL} from '../utils/lab-orders'
import classes from './report-table.component.scss'

const ReportTable = ({patientUuid}) => {
  let {data: reports, error: reportsTableDataError} = useSWR<
    ReportTableFetchResponse,
    Error
  >(getReportTableDataURL(patientUuid), fetcher)

  if (reports?.data) {
    reports.data = sampleResponse.data
  }

  const rows = useMemo(() => {
    return reports?.data?.entry
      ?.sort((reportEntry1, reportEntry2) => {
        return (
          new Date(reportEntry2.resource.presentedForm[0].creation).getTime() -
          new Date(reportEntry1.resource.presentedForm[0].creation).getTime()
        )
      })
      .map(row => {
        return {
          id: row.resource.id,
          tests: row.resource.code.coding[0].display,
          url: row.resource.presentedForm[0].url,
          date: new Date(
            row.resource.presentedForm[0].creation,
          ).toLocaleDateString(localStorage.getItem('i18nextLng'), {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          }),
          requester: '-',
          file: `${row.resource.presentedForm[0].title}.pdf`,
          conclusion: row.resource.conclusion ? row.resource.conclusion : '',
        }
      })
  }, [reports])

  const {results: paginatedReportsTable, goTo, currentPage} = usePagination(
    rows,
    defaultPageSize,
  )
  return (
    <div title="report-table">
      {reportsTableDataError ? (
        <div>Something went wrong in fetching Report tables...</div>
      ) : (
        rows?.length > 0 && (
          <>
            <h4>Reports table</h4>
            <DataTable rows={paginatedReportsTable} headers={reportHeaders}>
              {({
                rows: dataTableRows,
                headers,
                getHeaderProps,
                getRowProps,
                getTableProps,
                getTableContainerProps,
              }) => (
                <TableContainer {...getTableContainerProps()}>
                  <Table {...getTableProps()} className={classes.reportTable}>
                    <TableHead>
                      <TableRow>
                        <TableExpandHeader id="expand" />
                        {headers.map((header, i) => (
                          <TableHeader
                            id={header.header}
                            key={i}
                            {...getHeaderProps({header})}
                          >
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dataTableRows.map(row => (
                        <React.Fragment key={row.id}>
                          <TableExpandRow {...getRowProps({row})}>
                            {row.cells.map(cell => {
                              return cell.id.endsWith('file') ? (
                                <TableCell key={cell.id}>
                                  <Link
                                    href="https://drive.google.com/file/d/1e1J618HFVr_SpGJD1YxXJpY094B1_g8n/view?usp=sharing"
                                    target={'_blank'}
                                  >
                                    {cell.value}
                                  </Link>
                                </TableCell>
                              ) : (
                                <TableCell key={cell.id}>
                                  {cell.value}
                                </TableCell>
                              )
                            })}
                          </TableExpandRow>
                          <TableExpandedRow colSpan={reportHeaders.length + 1}>
                            <div>{`Report conclusion : ${
                              rows.filter(
                                intialRow => intialRow.id === row.id,
                              )[0]?.conclusion
                            }`}</div>
                          </TableExpandedRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </DataTable>
            <PatientChartPagination
              pageNumber={currentPage}
              pageSize={defaultPageSize}
              currentItems={paginatedReportsTable?.length}
              totalItems={rows?.length}
              onPageNumberChange={({page}) => {
                goTo(page)
              }}
            />
          </>
        )
      )}
    </div>
  )
}

export default ReportTable

const sampleResponse = {
  data: {
    resourceType: 'Bundle',
    id: '1178aaed-e352-48f8-8685-4ae8d17d732e',
    meta: {
      lastUpdated: '2022-05-24T10:46:46.124+00:00',
      tag: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationValue',
          code: 'SUBSETTED',
          display: 'Resource encoded in summary mode',
        },
      ],
    },
    type: 'searchset',
    total: 1,
    link: [
      {
        relation: 'self',
        url:
          'http://openmrs:8080/openmrs/ws/fhir2/R4/Observation?_count=100&_sort=-date&_summary=data&code=5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C5086AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C5087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C5088AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C5092AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C5090AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C5089AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C5242AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C165095AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2C1343AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&subject%3APatient=2ffd8cd4-6c3a-4609-8bbd-36d8f263e61f',
      },
    ],
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
          conclusion: 'Correlate with other findings. inconclusive.',
          presentedForm: [
            {
              contentType: 'application/pdf',
              language: 'en',
              url: '/files/uploaded-doc-uuid',
              hash: '571ef9c5655840f324e679072ed62b1b95eef8a0',
              title: 'Hb1AC',
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
