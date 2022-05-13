import React from 'react'
import styles from './home-button.scss'
import Home24 from '@carbon/icons-react/lib/home/24'
import {homePath} from '../constants'
import {HeaderGlobalAction} from 'carbon-components-react'

const HomeButton = () => {
  return (
    <HeaderGlobalAction
      aria-label="Home"
      className={styles.headerGlobalBarButton}
      onClick={() => {
        window.location.href = homePath
      }}
    >
      <Home24 className={styles.home} />
    </HeaderGlobalAction>
  )
}

export default HomeButton
