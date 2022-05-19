import {
  Accordion,
  AccordionItem,
  Checkbox,
  Search,
} from 'carbon-components-react'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import Loader from '../loader/loader.component'
import {LabTest} from '../types/selectTest'
import {fetcher, getLabTests} from '../utils'
import styles from './select-test.scss'

const SelectTest = () => {
  const [searchResults, setSearchResults] = useState<Array<LabTest>>([])
  const [selectedTests, setSelectedTests] = useState<Array<LabTest>>([])
  const [totalTests, setTotalTests] = useState<Array<LabTest>>([])
  const [searchValue, setSearchValue] = useState<string>()
  const [isAvailableTestsClicked, setIsAvailableTestsClicked] = useState<
    boolean
  >(true)

  const {data: labTestResults, error: labTestResultsError} = useSWR<any, Error>(
    getLabTests,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    if (searchResults.length == 0 && !searchValue) setSearchResults(totalTests)
  }, [searchResults, searchValue])

  useEffect(() => {
    searchResults.length === 0 &&
      labTestResults?.data?.results[0]?.setMembers?.map(sample => {
        sample.setMembers.map(tests => {
          tests.conceptClass?.name == 'LabTest' &&
            (setSearchResults(searchResults => [...searchResults, tests]),
            setTotalTests(totalTest => [...totalTest, tests]))
        })
      })
  }, [labTestResults])

  useEffect(() => {
    if (searchValue) {
      const filteredTests = totalTests.filter(test =>
        test.name?.display?.toLowerCase().includes(searchValue.toLowerCase()),
      )
      filterUnselectedTests(filteredTests)
    } else {
      filterUnselectedTests(totalTests)
    }
  }, [searchValue])

  const filterUnselectedTests = (labTests: Array<LabTest>) => {
    if (selectedTests.length > 0) {
      const tests = []
      for (let filteredTest of labTests) {
        let isSelectedTestPresent = false
        for (let selectedTest of selectedTests) {
          if (filteredTest?.name?.display !== selectedTest?.name?.display)
            isSelectedTestPresent = true
          else {
            isSelectedTestPresent = false
            break
          }
        }
        if (isSelectedTestPresent) tests.push(filteredTest)
      }
      console.log(tests)
      setSearchResults(tests)
    } else setSearchResults([...labTests])
  }

  const handleClear = () => {
    if (selectedTests.length > 0) {
      filterUnselectedTests(totalTests)
    } else setSearchResults([...totalTests])
  }

  const handleSelect = (selectedItem: LabTest) => {
    setSelectedTests([...selectedTests, selectedItem])
    setSearchResults(
      searchResults.filter(
        selectedResult => selectedResult.name.uuid !== selectedItem.name.uuid,
      ),
    )
  }

  const handleUnSelect = (selectedTest: LabTest) => {
    if (
      selectedTest.name.display
        .toLowerCase()
        .includes(searchValue?.toLowerCase())
    )
      setSearchResults(searchResults => [...searchResults, selectedTest])

    setSelectedTests(
      selectedTests.filter(
        item => item?.name?.display !== selectedTest?.name?.display,
      ),
    )
  }

  const showSearchCount = () => {
    if (searchResults.length > 0) {
      return (
        <p>
          {searchResults.length} items matching "
          <p className={styles.bold}>{searchValue}</p>"
        </p>
      )
    }
    return 'No matching tests found'
  }

  const renderSearchResults = () => {
    return (
      <>
        <div className={searchValue && styles.searchValue}>
          {searchValue && showSearchCount()}
        </div>

        {searchResults.map((searchResult, index) => (
          <Checkbox
            id={searchResult.name.uuid}
            key={`${searchResult.name.uuid}${index}`}
            labelText={searchResult.name.display}
            onChange={() => handleSelect(searchResult)}
          />
        ))}
      </>
    )
  }

  const renderSelectedTests = () => {
    if (selectedTests.length == 0)
      return <div>You have not selected any tests</div>
    return (
      <div>
        {selectedTests.map((selectedTest, index) => (
          <Checkbox
            id={selectedTest.name.uuid}
            checked={true}
            key={`${selectedTest.name.uuid} ${index}`}
            labelText={selectedTest.name.display}
            onChange={() => handleUnSelect(selectedTest)}
          />
        ))}
      </div>
    )
  }

  if (labTestResultsError)
    return <h3>Something went wrong in fetching Lab Tests</h3>
  if (!labTestResultsError && !labTestResults) return <Loader />
  return (
    <>
      <h3>Select Tests</h3>
      <div className={styles.searchTests}>
        <Search
          labelText="search"
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value)
          }}
          onClear={handleClear}
        />
      </div>

      <Accordion>
        <AccordionItem
          className={isAvailableTestsClicked && styles.accordionItem}
          title={`Available Tests ( ${totalTests.length} )`}
          open={isAvailableTestsClicked}
          children={renderSearchResults()}
          onClick={() => setIsAvailableTestsClicked(!isAvailableTestsClicked)}
        ></AccordionItem>

        <AccordionItem
          title={`Selected Tests ( ${selectedTests.length} )`}
          open={true}
          children={renderSelectedTests()}
        ></AccordionItem>
      </Accordion>
    </>
  )
}

export default SelectTest
