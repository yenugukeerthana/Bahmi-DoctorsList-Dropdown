import {useLayoutType} from '@openmrs/esm-framework'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Button} from 'carbon-components-react'
import React from 'react'
import {localStorageMock} from '../utils/test-utils'
import Overlay from './index'

describe('Overlay', () => {
  afterEach(() => jest.clearAllMocks())
  it('should show close icon when layout is desktop', () => {
    const close = jest.fn()

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('desktop')

    render(<Overlay close={close} header={'Test Header'} />)

    expect(screen.getByLabelText(/close-icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/close-icon/i).getElementsByTagName('svg')).toBeTruthy()

    userEvent.click(screen.getByLabelText(/close-icon/i))

    expect(close).toBeCalled()
  })
  it('should show arrow icon when layout is not desktop', () => {
    const close = jest.fn()

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('tablet')

    render(<Overlay close={close} header={'Test Header'} />)

    expect(screen.getByLabelText(/arrow-icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/arrow-icon/i).getElementsByTagName('svg')).toBeTruthy()

    userEvent.click(screen.getByLabelText(/arrow-icon/i))

    expect(close).toBeCalled()
  })
  it('should render children and button group when passed', () => {
    const children = <h1> Overlay Children </h1>
    const buttonsGroup = <Button>Overlay Button Group</Button>

    const mockedLayout = useLayoutType as jest.Mock
    mockedLayout.mockReturnValue('tablet')

    render(
      <Overlay
        close={jest.fn()}
        header={'Test Header'}
        children={children}
        buttonsGroup={buttonsGroup}
      />,
    )

    expect(screen.getByText(/overlay children/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', {name: /overlay button group/i}),
    ).toBeInTheDocument()
  })
})
