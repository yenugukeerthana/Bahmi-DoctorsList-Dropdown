import {
  Button,
  DatePicker,
  DatePickerInput,
  TextArea,
} from 'carbon-components-react'
import dayjs from 'dayjs'
import React, {useState} from 'react'
import {
  useSelectedFile,
  useSelectedTests,
} from '../context/upload-report-context'
import Overlay from '../overlay'
import SelectTest from '../select-test/select-test'
import UploadFile from '../upload-file/upload-file'
import {saveDiagnosticReport, uploadFile} from './upload-report.resources'
import styles from './upload-report.scss'
// import {useDoctorName} from '../context/doctor-context'
import {useDoctorName} from '../context/upload-report-context'

import DoctorListDropdown from '../doctor/doctor-list-dropdown'

interface UploadReportProps {
  close: Function
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
  const {doctorName, setDoctorName} = useDoctorName()

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
    setDoctorName(null)
  }

  const saveReport = () => {
    const ac = new AbortController()
    const reader = new FileReader()
    reader.onload = async event => {
      const uploadFileResponse = await uploadFile(
        patientUuid,
        event.target.result.toString(),
        selectedFile.type,
        ac,
      )
      if (uploadFileResponse.ok) {
        const url = uploadFileResponse.data.url
        if (url) {
          const diagnosticReportResponse = await saveDiagnosticReport(
            patientUuid,
            reportDate,
            selectedTests[0],
            url,
            selectedFile.name,
            reportConclusion,
            ac,
          )
          if (diagnosticReportResponse.ok) {
            close(true)
          }
        }
      }
    }
    reader.readAsDataURL(selectedFile)
  }

  const renderButtonGroup = () => (
    <div className={styles.overlayButtons}>
      <Button onClick={handleDiscard} kind="secondary" size="lg">
        Discard
      </Button>
      <Button
        onClick={saveReport}
        size="lg"
        disabled={
          !reportDate ||
          !selectedFile ||
          !doctorName ||
          selectedTests.length === 0
        }
      >
        Save and Upload
      </Button>
    </div>
  )

  return (
    <Overlay close={close} header={header} buttonsGroup={renderButtonGroup()}>
      <SelectTest isDiscardButtonClicked={isDiscardButtonClicked} />
      <br />
      <UploadFile />
      <DatePicker
        className={styles.datePicker}
        datePickerType="single"
        locale={locale}
        short={true}
        value={reportDate}
        maxDate={currentDate}
        onChange={(selectedDate: Date[]) => setReportDate(selectedDate[0])}
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
      <br></br>
      <DoctorListDropdown />
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
    </Overlay>
  )
}

export default UploadReport
