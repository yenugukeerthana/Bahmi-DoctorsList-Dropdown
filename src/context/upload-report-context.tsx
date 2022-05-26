import React, {useState} from 'react'
import {LabTest} from '../types/selectTest'

interface UploadReportContextProps {
  selectedFile: File
  setSelectedFile: Function
  selectedTests: LabTest[]
  setSelectedTests: Function
}
const UploadReportContext = React.createContext<UploadReportContextProps>(null)

function useSelectedFile() {
  const context = React.useContext(UploadReportContext)

  if (!context) {
    throw new Error(`useSelectedFile must be used within a Upload Report scope`)
  }
  return {
    selectedFile: context.selectedFile,
    setSelectedFile: context.setSelectedFile,
  }
}

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
  const [selectedFile, setSelectedFile] = useState<File>()
  const [selectedTests, setSelectedTests] = React.useState<LabTest[]>([])

  const value = {
    selectedFile,
    setSelectedFile,
    selectedTests,
    setSelectedTests,
  }

  return (
    <UploadReportContext.Provider value={value}>
      {children}
    </UploadReportContext.Provider>
  )
}

export {UploadReportProvider, useSelectedTests, useSelectedFile}
