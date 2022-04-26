import React from 'react'
import {SWRConfig} from 'swr'
import {BrowserRouter, Route} from 'react-router-dom'
import {patientLabDetailsRoute, spaRoot} from './constants'
import PatientLabDetails from './patient-lab-details/patient-lab-details'

const swrConfiguration = {
  // Maximum number of retries when the backend returns an error
  errorRetryCount: 3,
}

const Root: React.FC = () => {
  return (
    <main>
      <SWRConfig value={swrConfiguration}>
        <BrowserRouter basename={spaRoot}>
          <Route
            exact
            path={patientLabDetailsRoute}
            component={PatientLabDetails}
          />
        </BrowserRouter>
      </SWRConfig>
    </main>
  )
}

export default Root
