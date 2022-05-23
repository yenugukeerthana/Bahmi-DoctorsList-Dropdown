import React from 'react'
import {LabTest} from '../types/selectTest'

interface UploadReportContextProps {
  selectedTests: LabTest[]
  setSelectedTests: Function
}
const UploadReportContext = React.createContext<UploadReportContextProps>(null)

function useSelectedTests() {
  const context = React.useContext(UploadReportContext)

  if (!context) {
    throw new Error(
      `useSelectedTests must be used within a Upload Report scope`,
    )
  }
  return {
    selectedTests: context.selectedTests,
    setSelectedTests: context.setSelectedTests,
  }
}

function UploadReportProvider({children}) {
  const [selectedTests, setSelectedTests] = React.useState<LabTest[]>([])

  const value = {
    selectedTests,
    setSelectedTests,
  }
  return (
    <UploadReportContext.Provider value={value}>
      {children}
    </UploadReportContext.Provider>
  )
}

export {UploadReportProvider, useSelectedTests}
