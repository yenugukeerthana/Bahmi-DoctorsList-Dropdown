import AddFilled16 from '@carbon/icons-react/lib/add/16'
import {ExtensionSlot, usePatient} from '@openmrs/esm-framework'
import { launchPatientWorkspace } from '@openmrs/esm-patient-common-lib'
import {Button} from 'carbon-components-react'
import React, { useCallback } from 'react'
import {RouteComponentProps} from 'react-router-dom'
import Loader from '../loader/loader.component'
import PaginatedTable from '../table/paginated-table'
import styles from './patient-lab-details.scss'

interface PatientParamsType {
  patientUuid: string
}

const PatientLabDetails: React.FC<RouteComponentProps<PatientParamsType>> = ({
  match,
}) => {
  const {patientUuid} = match.params
  const {isLoading, patient, error} = usePatient(patientUuid)
  const handleClick = useCallback(()=> launchPatientWorkspace('upload-report'),[])

  return (
    <main className={styles.chartContainer}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>Something went wrong: {error.message}</div>
      ) : (
        <div>
          <div>
            <aside>
              <ExtensionSlot
                extensionSlotName="patient-header-slot"
                state={{
                  patient,
                  patientUuid: patient.id,
                  hideActionsOverflow: true,
                }}
              />
            </aside>
          </div>
          <br></br>
          <br></br>
          <PaginatedTable patientUuid={patientUuid} />
          <br></br>
          <br></br>
          <Button renderIcon={AddFilled16} 
          onClick={handleClick}
          >Upload Report</Button>
        </div>
      )}
    </main>
  )
}

export default PatientLabDetails
