import {
  Button,
  DatePicker,
  DatePickerInput,
  TextArea,
} from 'carbon-components-react'
import React, {useState} from 'react'
import Overlay from '../overlay'

interface UploadReportProps {
  closeWorkspace(): void
  patientUuid: string
}
interface OverlayProps {
  close: () => void
  header: string
  buttonsGroup?: React.ReactElement
}

const UploadReport: React.FC<OverlayProps> = ({close, header}) => {
  const locale: Object = localStorage.getItem('i18nextLng')
  const currentDate: string = new Date().toLocaleDateString(locale.toString())
  const [reportDate, setReportDate] = useState<number>()
  const [reviewComments, setReviewComments] = useState<string>()

  console.log(reportDate)

  const handleDiscard = () => {
    setReportDate(undefined)
    setReviewComments('')
  }

  const handleSave = () =>
    console.log('Report date', reportDate, ' Review Comments', reviewComments)

  const renderButtonGroup = () => (
    <>
      <Button onClick={handleDiscard} kind="secondary" size="lg">
        Discard
      </Button>
      <Button onClick={handleSave} size="lg">
        Save and Upload
      </Button>
    </>
  )

  return (
    <>
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
        >
          <DatePickerInput
            placeholder="mm/dd/yyyy"
            labelText="Report Date"
            id="reportDate"
          />
        </DatePicker>

        <TextArea
          labelText={'Review Comments'}
          maxCount={10}
          enableCounter={true}
          value={reviewComments}
          onChange={e => setReviewComments(e.target.value)}
        />
      </Overlay>
    </>
  )
}

export default UploadReport
