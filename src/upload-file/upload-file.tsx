import React, {useEffect, useState} from 'react'
import {
  FileUploaderDropContainer,
  FileUploaderItem,
} from 'carbon-components-react'
import {useSelectedFile} from '../context/upload-report-context'

const UploadFile = () => {
  const maxFileSize: number = 5242880
  const validFileTypes = ['image/jpg', 'application/pdf']
  const fileSizeErrorMessage = 'File size exceeds max limit (5mb)'
  const fileFormatErrorMessage =
    'Only files with following extension allowed: pdf, jpg'

  const [errorMessage, setErrorMessage] = useState(null)
  const [showDragDropBox, setShowDragDropBox] = React.useState(true)
  const {selectedFile, setSelectedFile} = useSelectedFile()

  useEffect(() => {
    if (!selectedFile) setShowDragDropBox(true)
  }, [selectedFile])

  const validateFile = (file: File) => {
    if (validFileTypes.indexOf(file.type) == -1) return fileFormatErrorMessage

    if (file.size > maxFileSize) return fileSizeErrorMessage
  }

  const onAddFiles = (evt, {addedFiles}) => {
    evt.stopPropagation()
    if (addedFiles[0]) {
      const error = validateFile(addedFiles[0])
      if (error) {
        setErrorMessage(error)
        return
      }

      setShowDragDropBox(false)
      setErrorMessage(null)
      setSelectedFile(addedFiles[0])
    }
  }

  const dragDropBox = (
    <FileUploaderDropContainer
      accept={validFileTypes}
      labelText="Drag and drop files here or click to upload"
      onAddFiles={onAddFiles}
    />
  )

  return (
    <div>
      <div>{showDragDropBox ? dragDropBox : null}</div>
      {selectedFile && (
        <div aria-label="uploaded file">
          <FileUploaderItem
            name={selectedFile.name}
            status="edit"
            iconDescription="Delete file"
            onDelete={() => {
              setSelectedFile(null)
              setShowDragDropBox(true)
            }}
          />
        </div>
      )}
      {errorMessage && (
        <div aria-label="error mesage" style={{color: 'red'}}>
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default UploadFile
