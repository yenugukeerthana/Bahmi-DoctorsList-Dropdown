import {
  Button,
  DatePicker,
  DatePickerInput,
  TextArea,
} from 'carbon-components-react'
import dayjs from 'dayjs'
import React, {useState} from 'react'
import Overlay from '../overlay'
import styles from './upload-report.scss'
interface UploadReportProps {
  close: () => void
  header: string
}

const UploadReport: React.FC<UploadReportProps> = ({close, header}) => {
  const locale: Object = localStorage.getItem('i18nextLng')
  const currentDate: string = dayjs().format('MM/DD/YYYY')
  const [reportDate, setReportDate] = useState<number>(null)
  const [reportConclusion, setReportConclusion] = useState<string>()
  const maxCount: number = 500

  const handleDiscard = () => {
    setReportDate(null)
    setReportConclusion('')
  }

  const handleSave = () => {
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
      <Button onClick={handleSave} size="lg" disabled={!reportDate}>
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
        allowInput = {false}
      >
        <DatePickerInput
          placeholder="mm/dd/yyyy"
          labelText="Report Date"
          id="reportDate"
        />
      </DatePicker>

      <TextArea
        labelText={'Report Conclusion'}
        maxCount={maxCount}
        enableCounter={true}
        required={true}
        value={reportConclusion}
        onChange={e => setReportConclusion(e.target.value)}
      />
    </Overlay>
  )
}

export default UploadReport
