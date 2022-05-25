import {openmrsFetch} from '@openmrs/esm-framework'
import {
  Button,
  DatePicker,
  DatePickerInput,
  TextArea,
} from 'carbon-components-react'
import dayjs from 'dayjs'
import {
  useSelectedFile,
  useSelectedTests,
} from '../context/upload-report-context'
import UploadFile from '../upload-file/upload-file'
import {postApiCall, uploadDocumentURL} from '../utils/api-utils'
import React, {useEffect, useState} from 'react'
import Overlay from '../overlay'
import SelectTest from '../select-test/select-test'
import styles from './upload-report.scss'
import { saveDiagnosticReport, uploadFile } from './upload-report.resources'

interface UploadReportProps {
  close: () => void
  header: string
  patientUuid: string
}

const UploadReport: React.FC<UploadReportProps> = ({
  close,
  header,
  patientUuid,
}) => {
  const locale: Object = localStorage.getItem('i18nextLng')
  const currentDate: string = dayjs().format('MM/DD/YYYY')
  const [reportDate, setReportDate] = useState<Date>(null)
  const [reportConclusion, setReportConclusion] = useState<string>('')
  const [isDiscardButtonClicked, setIsDiscardButtonClicked] = useState<boolean>(
    false,
  )
  const {selectedTests, setSelectedTests} = useSelectedTests()
  const maxCount: number = 500
  const {selectedFile, setSelectedFile} = useSelectedFile()

  const handleDiscard = () => {
    setIsDiscardButtonClicked(true)
    setReportDate(null)
    setReportConclusion('')
    setSelectedFile(null)
    setSelectedTests([])
  }

  const saveReport = () => {
    const ac = new AbortController()
    const reader = new FileReader()
    reader.onload = async event => {
      const uploadFileResponse = await uploadFile(patientUuid, event.target.result.toString(), selectedFile.type, ac);
      if(uploadFileResponse.ok){
        const url = uploadFileResponse.data.url
        if(url){
          saveDiagnosticReport(patientUuid, reportDate, selectedTests[0], url, selectedFile.name, reportConclusion, ac).then(
            data => console.log("save successfully!!")
          )
        }
      }
     
    }
    reader.readAsDataURL(selectedFile)

    console.log(
      'Report date',
      reportDate,
      ' Review Comments',
      reportConclusion,
      'Selected Tests',
      selectedTests,
    ),
      close()
  }

  const renderButtonGroup = () => (
    <div className={styles.overlayButtons}>
      <Button onClick={handleDiscard} kind="secondary" size="lg">
        Discard
      </Button>
      <Button
        onClick={saveReport}
        size="lg"
        disabled={!reportDate || !selectedFile || selectedTests.length === 0}
      >
        Save and Upload
      </Button>
    </div>
  )

  return (
    <Overlay close={close} header={header} buttonsGroup={renderButtonGroup()}>
      <SelectTest isDiscardButtonClicked={isDiscardButtonClicked} />
      <DatePicker
        className={styles.datePicker}
        datePickerType="single"
        locale={locale}
        short={true}
        value={reportDate}
        maxDate={currentDate}
        onChange={(selectedDate: Date[]) =>
          setReportDate(selectedDate[0])
        }
        allowInput={false}
      >
        <label id="reportDateLabel">
          <DatePickerInput
            placeholder="mm/dd/yyyy"
            labelText="Report Date"
            id="reportDate"
          />
        </label>
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
          maxLength={maxCount}
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
