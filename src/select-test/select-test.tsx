import {Dropdown, Search} from 'carbon-components-react'
import React, {useEffect, useState} from 'react'

const SelectTest = ({labTestResults}) => {
  const [searchResults, setSearchResults] = useState<Array<any>>([])

  useEffect(() => {
    searchResults.length == 0 &&
      labTestResults?.data?.results[0]?.setMembers?.map(sample => {
        sample.setMembers.map(tests => {
          tests.conceptClass?.name == 'LabTest' &&
            setSearchResults(searchResults => [...searchResults, tests])
        })
      })
  }, [labTestResults])
  console.log(searchResults)

  return (
    <>
      <h3>Select Tests</h3>
      <Search labelText="search" />

      <Dropdown
        id="default"
        items={searchResults}
        label="Available tests"
        itemToString={item => {
          return item.name?.display?.toString()
        }}
      />
    </>
  )
}

export default SelectTest
