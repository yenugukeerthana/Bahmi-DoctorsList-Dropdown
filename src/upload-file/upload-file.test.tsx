import React from 'react'
import {act, render, screen, waitFor} from '@testing-library/react'
import UploadFile from './upload-file'
import userEvent from '@testing-library/user-event'
import {UploadReportProvider} from '../context/upload-report-context'

describe('upload file', () => {
  it('should show the file upload box', () => {
    renderWithContextProvider(<UploadFile />)

    const fileInput = screen.getByLabelText(
      'Drag and drop files here or click to upload',
    )
    expect(fileInput).toHaveAttribute('type', 'file')
    expect(fileInput).toHaveAttribute('accept', 'image/jpg,application/pdf')
  })
})

function renderWithContextProvider(children) {
  return render(<UploadReportProvider>{children}</UploadReportProvider>)
}
