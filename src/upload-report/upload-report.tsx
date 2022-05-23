import {
  Button,
  DatePicker,
  DatePickerInput,
  TextArea,
} from 'carbon-components-react'
import dayjs from 'dayjs'
import React, {useEffect, useState} from 'react'
import Overlay from '../overlay'
import SelectTest from '../select-test/select-test'
import {LabTest} from '../types/selectTest'
import styles from './upload-report.scss'
interface UploadReportProps {
  close: () => void
  header: string
}

const UploadReport: React.FC<UploadReportProps> = ({close, header}) => {
  const locale: Object = localStorage.getItem('i18nextLng')
  const currentDate: string = dayjs().format('MM/DD/YYYY')
  const [reportDate, setReportDate] = useState<number>(null)
  const [reportConclusion, setReportConclusion] = useState<string>('')
  const [isDiscardButtonClicked, setIsDiscardButtonClicked] = useState<boolean>(
    false,
  )
  const [selectedTests, setSelectedTests] = useState<Array<LabTest>>([])
  const maxCount: number = 500

  const handleDiscard = () => {
    setIsDiscardButtonClicked(true)
    setReportDate(null)
    setReportConclusion('')
    setSelectedTests([])
  }

  useEffect(() => {
    reportDate === null &&
      selectedTests.length === 0 &&
      reportConclusion === '' &&
      setIsDiscardButtonClicked(false)
  }, [isDiscardButtonClicked])

  const handleSave = () => {
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
        onClick={handleSave}
        size="lg"
        disabled={!reportDate || selectedTests.length === 0}
      >
        {console.log(selectedTests.length, reportDate)}
        Save and Upload
      </Button>
    </div>
  )

  return (
    <Overlay close={close} header={header} buttonsGroup={renderButtonGroup()}>
      <SelectTest
        selectedTests={selectedTests}
        setSelectedTests={setSelectedTests}
        buttonClicked={isDiscardButtonClicked}
      />
      <DatePicker
        className={styles.datePicker}
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
    </Overlay>
  )
}

export default UploadReport
