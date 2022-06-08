import React, {useMemo, useState} from 'react'
import useSWR from 'swr'
import {DoctorsResponse} from '../types'
import {fetcher, getDoctorsURL} from '../utils/lab-orders'
import {Dropdown} from 'carbon-components-react'
// import {useDoctorName} from '../context/doctor-context'
import {useDoctorName} from '../context/upload-report-context'

const DoctorListDropdown = () => {
  const {data: doctorList, error: DoctorListError} = useSWR<
    DoctorsResponse,
    Error
  >(getDoctorsURL, fetcher)

  const {doctorName, setDoctorName} = useDoctorName()

  const [items, setItems] = useState([])

  useMemo(() => {
    let arr = []
    doctorList?.data?.results?.map(row => {
      arr.push(row.display)
    })
    setItems(arr)
  }, [doctorList])

  return (
    <div>
      {DoctorListError ? (
        <div>Something went wrong in fetching Doctor Names...</div>
      ) : (
        <Dropdown
          id="doctor-list-dropdown"
          title="doctor list"
          items={items}
          label="Please select the doctor name"
          onChange={({selectedItem}) => setDoctorName(selectedItem)}
          selectedItem={doctorName}
        ></Dropdown>
      )}
    </div>
  )
}

export default DoctorListDropdown
