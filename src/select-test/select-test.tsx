import {
  Accordion,
  AccordionItem,
  Checkbox,
  Search,
} from 'carbon-components-react'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import {fetcher, getLabTests} from '../utils/lab-orders'

const SelectTest = () => {
  const [searchResults, setSearchResults] = useState<Array<any>>([])
  const [selectedTests, setSelectedTests] = useState<Array<any>>([])
  const [totalTest, setTotalTest] = useState<Array<any>>([])
  const [searchValue, setSearchValue] = useState<string>()

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

  useEffect(() => {
    if (searchValue) {
      const filteredTests = totalTest.filter(test =>
        test.name?.display?.toLowerCase().includes(searchValue.toLowerCase()),
      )
      filterUnselectedTests(filteredTests)
    } else {
      setSearchResults([...totalTest])
    }
  }, [searchValue])

  const filterUnselectedTests = filteredTests => {
    if (selectedTests.length > 0) {
      const tests = filteredTests.filter(item =>
        selectedTests.find(
          element => element?.name?.display !== item?.name?.display,
        ),
      )
      setSearchResults([...tests])
    } else setSearchResults([...filteredTests])
  }

  const handleClear = () => {
    if (selectedTests.length > 0) {
      const tests = totalTest.filter(item =>
        selectedTests.find(
          element => element?.name?.display !== item?.name?.display,
        ),
      )
      setSearchResults([...tests])
    } else setSearchResults([...totalTest])
  }

  const handleSelect = selectedItem => {
    setSelectedTests([...selectedTests, selectedItem])
    setSearchResults(
      searchResults.filter(
        selectedResult => selectedResult.name.uuid !== selectedItem.name.uuid,
      ),
    )
  }

  const handleUnSelect = selectedTest => {
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
    if (searchResults.length > 0)
      return (
        <p>
          {searchResults.length} items matching "{searchValue}"
        </p>
      )
    return 'No matching tests found'
  }

  const renderSearchResults = () => {
    return (
      <div>
        <div>{searchValue && showSearchCount()}</div>

        {searchResults.map((searchResult, index) => (
          <Checkbox
            id={searchResult.name.uuid}
            key={`${searchResult.name.uuid}${index}`}
            labelText={searchResult.name.display}
            onChange={() => handleSelect(searchResult)}
          />
        ))}
      </div>
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

  return (
    <>
      <h3>Select Tests</h3>
      <Search
        labelText="search"
        value={searchValue}
        onChange={e => {
          setSearchValue(e.target.value)
        }}
        onClear={handleClear}
      />

      <Accordion>
        <AccordionItem
          title={`Available Tests ( ${totalTest.length} )`}
          open={true}
          children={renderSearchResults()}
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
