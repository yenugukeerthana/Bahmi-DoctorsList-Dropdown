import {
  Accordion,
  AccordionItem,
  Checkbox,
  Search,
} from 'carbon-components-react'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import {useSelectedTests} from '../context/upload-report-context'
import Loader from '../loader/loader.component'
import {LabTest} from '../types/selectTest'
import {fetcher, getLabTests} from '../utils'
import styles from './select-test.scss'

const SelectTest = ({isDiscardButtonClicked}) => {
  const [searchResults, setSearchResults] = useState<Array<LabTest>>([])
  const [totalTests, setTotalTests] = useState<Array<LabTest>>([])
  const [searchValue, setSearchValue] = useState<string>()
  const [isAvailableTestsClicked, setIsAvailableTestsClicked] = useState<
    boolean
  >(true)
  const {selectedTests, setSelectedTests} = useSelectedTests()

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
    isDiscardButtonClicked && setSearchValue('')
  }, [isDiscardButtonClicked])

  useEffect(() => {
    if (
      searchResults.length === 0 &&
      selectedTests.length === 0 &&
      !searchValue
    )
      setSearchResults(totalTests)
  }, [searchValue, searchResults, selectedTests])

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
        test.name.display.toLowerCase().includes(searchValue.toLowerCase()),
      )
      filterSearchResults(filteredTests)
    } else {
      filterSearchResults(totalTests)
    }
  }, [searchValue])

  const filterSearchResults = (labTests: Array<LabTest>) => {
    if (selectedTests.length > 0) {
      const tests = []
      for (let filteredTest of labTests) {
        let isSelectedTestPresent = true
        for (let selectedTest of selectedTests) {
          if (filteredTest?.name?.display !== selectedTest?.name?.display)
            isSelectedTestPresent = false
          else {
            isSelectedTestPresent = true
            break
          }
        }
        if (!isSelectedTestPresent) tests.push(filteredTest)
      }
      setSearchResults(tests)
    } else setSearchResults([...labTests])
  }

  const handleClear = () => {
    if (selectedTests.length > 0) {
      filterSearchResults(totalTests)
    } else setSearchResults([...totalTests])
  }

  const handleSelect = (selectedTest: LabTest) => {
    setSelectedTests([...selectedTests, selectedTest])
    setSearchResults(
      searchResults.filter(
        (availableTest: LabTest) =>
          availableTest?.name?.display !== selectedTest?.name?.display,
      ),
    )
  }

  const updateSearchResultOnUnselect = (unselectedTest: LabTest) =>
    (unselectedTest.name.display
      .toLowerCase()
      .includes(searchValue?.toLowerCase()) ||
      !searchValue) &&
    setSearchResults(searchResults => [...searchResults, unselectedTest])

  const handleUnselect = (unselectedTest: LabTest) => {
    updateSearchResultOnUnselect(unselectedTest)
    setSelectedTests(
      selectedTests?.filter(
        (selectedTest: LabTest) =>
          selectedTest.name.display !== unselectedTest.name.display,
      ),
    )
  }

  const showSearchCount = () => {
    if (searchResults.length > 0) {
      return (
        <>
          {searchResults.length} items matching "
          <p className={styles.bold}>{searchValue}</p>"
        </>
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
      return <div className={'bx--label'}>You have not selected any tests</div>
    return (
      <div>
        {selectedTests.map((selectedTest, index) => (
          <Checkbox
            id={selectedTest.name.uuid}
            checked={true}
            key={`${selectedTest.name.uuid}${index}`}
            labelText={selectedTest.name.display}
            onChange={() => handleUnselect(selectedTest)}
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
      <p className={'bx--label'}>Select Tests</p>
      <div className={styles.searchTests}>
        <p className={'bx--label'}>Search</p>
        <Search
          labelText="search"
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value)
          }}
          placeholder="Search by lab test name"
          onClear={handleClear}
        />
      </div>

      <Accordion>
        <AccordionItem
          className={isAvailableTestsClicked && styles.accordionItem}
          data-testid="available-tests"
          title={`Available Tests ( ${totalTests.length -
            selectedTests.length} )`}
          open={isAvailableTestsClicked}
          children={renderSearchResults()}
          onClick={() => setIsAvailableTestsClicked(!isAvailableTestsClicked)}
        />

        <AccordionItem
          data-testid="selected-tests"
          title={`Selected Tests ( ${selectedTests.length} )`}
          open={true}
          children={renderSelectedTests()}
        />
      </Accordion>
    </>
  )
}

export default SelectTest
