import React from 'react'
import {render, screen} from '@testing-library/react'
import UploadFile from './upload-file'
import userEvent from '@testing-library/user-event'
import {UploadReportProvider} from '../context/upload-report-context'
import {uploadFiles} from '../utils/test-utils/upload-report-helper'

describe('upload file', () => {
  it('should show the file upload box', () => {
    renderWithContextProvider(<UploadFile />)

    const fileInput = screen.getByLabelText(
      'Drag and drop files here or click to upload',
    )
    expect(fileInput).toHaveAttribute('type', 'file')
    expect(fileInput).toHaveAttribute('accept', 'image/jpg,application/pdf')
  })

  it('should show the uploaded file if file is jpg and size is lesser than 5mb and file drop box should not be available', async () => {
    const file = new File(['content'], 'test.jpg', {type: 'image/jpg'})
    renderWithContextProvider(<UploadFile />)

    const fileNameQuery = screen.queryByText('test.jpg')
    expect(fileNameQuery).not.toBeInTheDocument()

    const fileInput = screen.getByLabelText(
      'Drag and drop files here or click to upload',
    ) as HTMLInputElement

    uploadFiles(fileInput, [file])

    expect(fileInput.files.length).toBe(1)

    const fileInputQuery = screen.queryByLabelText(
      'Drag and drop files here or click to upload',
    )
    expect(fileInputQuery).not.toBeInTheDocument()

    const fileName = await screen.findByText('test.jpg')
    expect(fileName).toBeInTheDocument()
  })

  it('should show the error message if file is not pdf or jpg and file drop box should be available to upload valid file', async () => {
    const file = new File(['content'], 'test.png', {type: 'image/png'})
    renderWithContextProvider(<UploadFile />)

    const errorMessageQuery = screen.queryByText(
      'Only files with following extension allowed: pdf, jpg',
    )
    expect(errorMessageQuery).not.toBeInTheDocument()

    const fileInput = screen.getByLabelText(
      'Drag and drop files here or click to upload',
    ) as HTMLInputElement

    uploadFiles(fileInput, [file])

    expect(fileInput.files.length).toBe(1)
    expect(fileInput).toBeInTheDocument()

    const errorMessage = await screen.findByText(
      'Only files with following extension allowed: pdf, jpg',
    )
    expect(errorMessage).toBeInTheDocument()
  })

  it('should show the error message if file size is more than 5 mb and file drop box should be available to upload valid file', async () => {
    const file = new File(['content'], 'test.jpg', {type: 'image/jpg'})
    Object.defineProperty(file, 'size', {value: 5 * 1024 * 1024 + 1})
    renderWithContextProvider(<UploadFile />)

    const errorMessageQuery = screen.queryByText(
      'File size exceeds max limit (5mb)',
    )
    expect(errorMessageQuery).not.toBeInTheDocument()

    const fileInput = screen.getByLabelText(
      'Drag and drop files here or click to upload',
    ) as HTMLInputElement

    uploadFiles(fileInput, [file])

    expect(fileInput.files.length).toBe(1)
    expect(fileInput).toBeInTheDocument()

    const errorMessage = await screen.findByText(
      'File size exceeds max limit (5mb)',
    )
    expect(errorMessage).toBeInTheDocument()
  })

  it('should show drop box again when we remove the uploaded file', async () => {
    const file = new File(['content'], 'test.jpg', {type: 'image/jpg'})
    renderWithContextProvider(<UploadFile />)

    const fileInput = screen.getByLabelText(
      'Drag and drop files here or click to upload',
    ) as HTMLInputElement

    uploadFiles(fileInput, [file])

    expect(fileInput.files.length).toBe(1)
    const dropBoxQuery = screen.queryByLabelText(
      'Drag and drop files here or click to upload',
    )
    expect(dropBoxQuery).not.toBeInTheDocument()

    const fileName = await screen.findByText('test.jpg')
    expect(fileName).toBeInTheDocument()

    const deleteFile = await screen.findByLabelText('Delete file')
    expect(deleteFile).toBeInTheDocument()
    userEvent.click(deleteFile)

    const dropBox = await screen.findByLabelText(
      'Drag and drop files here or click to upload',
    )
    expect(dropBox).toBeInTheDocument()

    const fileNameQuery = await screen.queryByText('test.jpg')
    expect(fileNameQuery).not.toBeInTheDocument()
  })
})

function renderWithContextProvider(children) {
  return render(<UploadReportProvider>{children}</UploadReportProvider>)
}
