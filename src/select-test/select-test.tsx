import {MultiSelect, Search} from 'carbon-components-react'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import {fetcher, getLabTests} from '../utils/lab-orders'
import styles from './select-test.scss'

const SelectTest = () => {
  const [searchResults, setSearchResults] = useState<Array<any>>([])
  const [selectedTests, setSelectedTests] = useState<Array<any>>([])
  const [totalTest, setTotalTest] = useState<Array<any>>([])

  const {data: labTestResults, error: labTestResultsError} = useSWR<any, Error>(
    getLabTests,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    },
  )

  useEffect(() => {
    searchResults.length === 0 &&
      labTestResults?.data?.results[0]?.setMembers?.map(sample => {
        sample.setMembers.map(tests => {
          tests.conceptClass?.name == 'LabTest' &&
            (setSearchResults(searchResults => [...searchResults, tests]),
            setTotalTest(totalTest => [...totalTest, tests]))
        })
      })
  }, [labTestResults])

  const handleSearch = e => {
    const temp = [
      ...totalTest.filter(test =>
        test.name?.display
          ?.toLowerCase()
          .includes(e.target.value?.toLowerCase()),
      ),
    ]

    const tests = [
      ...temp.filter(item =>
        selectedTests.find(
          element => element?.name?.display !== item?.name?.display,
        ),
      ),
    ]
    setSearchResults(tests.length > 0 ? [...tests] : [...totalTest])
  }

  const handleClear = () => {
    const tests = [
      ...totalTest.filter(item =>
        selectedTests.find(
          element => element?.name?.display !== item?.name?.display,
        ),
      ),
    ]
    setSearchResults([...tests])
  }

  const handleSelect = selectedtemsArray => {
    const lengthOfSelectedTest = selectedtemsArray?.selectedItems?.length - 1
    setSelectedTests([...selectedtemsArray?.selectedItems])
    setSearchResults([
      ...searchResults.filter(
        item =>
          selectedtemsArray?.selectedItems[lengthOfSelectedTest]?.name
            ?.display !== item?.name?.display,
      ),
    ])
  }

  const handleUnSelect = selectedItemsArray => {
    const lengthOfSelectedItem = selectedItemsArray?.selectedItems?.length - 1
    setSearchResults(searchResults => [
      ...searchResults,
      selectedItemsArray?.selectedItems[lengthOfSelectedItem],
    ])

    setSelectedTests([
      ...selectedTests.filter(
        item =>
          item?.name?.display !==
          selectedItemsArray?.selectedItems[lengthOfSelectedItem]?.name
            ?.display,
      ),
    ])
  }

  return (
    <>
      <h3>Select Tests</h3>
      <Search
        labelText="search"
        onChange={handleSearch}
        onClear={handleClear}
      />

      <div className={styles.comboBox}>
        <MultiSelect
          id="carbon-multiselect-example"
          itemToString={item => item?.name?.display?.toString()}
          items={searchResults}
          onChange={selectedItem => handleSelect(selectedItem)}
          titleText={`Available tests (${totalTest.length})`}
          light
        />

        <MultiSelect
          id="default"
          size={'xl'}
          light
          items={selectedTests}
          titleText={`Selected tests (${selectedTests.length})`}
          itemToString={item => item?.name?.display?.toString()}
          onChange={selectedItem => handleUnSelect(selectedItem)}
          open={selectedTests.length > 0 ? true : false}
        />
      </div>
    </>
  )
}

export default SelectTest
