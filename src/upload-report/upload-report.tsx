import {openmrsFetch} from '@openmrs/esm-framework'
import {
  Button,
  DatePicker,
  DatePickerInput,
  TextArea,
} from 'carbon-components-react'
import dayjs from 'dayjs'
import React, {useState} from 'react'
import {useSelectedFile} from '../context/upload-report-context'
import Overlay from '../overlay'
import UploadFile from '../upload-file/upload-file'
import {uploadDocumentURL} from '../utils/lab-orders'
import styles from './upload-report.scss'

interface UploadReportProps {
  close: () => void
  header: string
  patientUuid: string
}

const postApiCall = async (url, data) => {
  console.log('data: ' + data)
  return await openmrsFetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

const removeBase64 = fileData => {
  const searchStr = ';base64'
  return fileData.substring(
    fileData.indexOf(searchStr) + searchStr.length,
    fileData.length,
  )
}

const fileType = file => {
  return file.type.split('/')[1]
}

const requestBody = (fileData, file, patientUuid) => {
  const data = {
    content: removeBase64(fileData),
    encounterTypeName: 'Patient Document',
    fileType: fileType(file),
    format: fileType(file),
    patientUuid: patientUuid,
  }
  return data
}

const handleFileUpload = async (file: File, patientUuid: string) => {
  const reader = new FileReader()
  reader.onload = async event => {
    const fileData = event.target.result.toString()

    const {fileUrl} = (
      await postApiCall(
        uploadDocumentURL,
        requestBody(fileData, file, patientUuid),
      )
    ).data
  }
  reader.readAsDataURL(file)
}

const UploadReport: React.FC<UploadReportProps> = ({
  close,
  header,
  patientUuid,
}) => {
  const locale: Object = localStorage.getItem('i18nextLng')
  const currentDate: string = dayjs().format('MM/DD/YYYY')
  const [reportDate, setReportDate] = useState<number>(null)
  const [reportConclusion, setReportConclusion] = useState<string>('')
  const maxCount: number = 500
  const {selectedFile, setSelectedFile} = useSelectedFile()

  const handleDiscard = () => {
    setReportDate(null)
    setReportConclusion('')
    setSelectedFile(null)
  }

  const handleSave = () => {
    handleFileUpload(selectedFile, patientUuid)
    console.log(
      'Report date',
      reportDate,
      ' Review Comments',
      reportConclusion,
    ),
      close()
  }

  const renderButtonGroup = () => (
    <div className={styles.overlayButtons}>
      <Button onClick={handleDiscard} kind="secondary" size="lg">
        Discard
      </Button>
      <Button
        onClick={handleSave}
        size="lg"
        disabled={!reportDate || !selectedFile}
      >
        Save and Upload
      </Button>
    </div>
  )

  return (
    <Overlay close={close} header={header} buttonsGroup={renderButtonGroup()}>
      <DatePicker
        datePickerType="single"
        locale={locale}
        short={true}
        value={reportDate}
        maxDate={currentDate}
        onChange={(selectedDate: Date[]) =>
          setReportDate(Date.parse(selectedDate[0].toString()))
        }
        allowInput={false}
      >
        <DatePickerInput
          placeholder="mm/dd/yyyy"
          labelText="Report Date"
          id="reportDate"
        />
      </DatePicker>
      <div style={{paddingTop: '1rem'}}>
        <TextArea
          labelText={
            <>
              Report Conclusion{' '}
              <span
                className={styles.counter}
                id="counter"
              >{`${reportConclusion?.length}/${maxCount}`}</span>
            </>
          }
          maxCount={maxCount}
          required={true}
          value={reportConclusion}
          onChange={e => setReportConclusion(e.target.value)}
        />
      </div>
      <br />
      <div>
        <UploadFile />
      </div>
    </Overlay>
  )
}

export default UploadReport
