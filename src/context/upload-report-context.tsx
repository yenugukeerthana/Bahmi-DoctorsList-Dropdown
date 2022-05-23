import React, {useState} from 'react'

interface UploadReportContextProps {
  selectedFile: File
  setSelectedFile: Function
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

function UploadReportProvider({children}) {
  const [selectedFile, setSelectedFile] = useState<File>()

  const value = {
    selectedFile,
    setSelectedFile,
  }
  return (
    <UploadReportContext.Provider value={value}>
      {children}
    </UploadReportContext.Provider>
  )
}

export {UploadReportProvider, useSelectedFile}
