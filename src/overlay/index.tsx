import React from 'react'
import {ArrowLeft16, Close16} from '@carbon/icons-react'
import {Button, Header} from 'carbon-components-react'
import styles from './overlay.scss'
import {useLayoutType} from '@openmrs/esm-framework'

interface OverlayProps {
  close: Function
  header: string
  buttonsGroup?: React.ReactElement
}

const Overlay: React.FC<OverlayProps> = ({
  children,
  close,
  header,
  buttonsGroup,
}) => {
  const isDesktop = useLayoutType() === 'desktop'

  return (
    <div
      className={isDesktop ? styles.desktopOverlay : styles.tabletOverlay}
      aria-label="overlay"
    >
      {isDesktop ? (
        <div className={styles.desktopHeader}>
          <div className={styles.headerContent}>{header}</div>
          <Button
            className={styles.closeButton}
            onClick={() => close()}
            kind="ghost"
            hasIconOnly
            aria-label="close-icon"
          >
            <Close16 />
          </Button>
        </div>
      ) : (
        <Header
          className={styles.tabletOverlayHeader}
          aria-label="overlay-header"
        >
          <Button onClick={() => close()} hasIconOnly aria-label="arrow-icon">
            <ArrowLeft16 onClick={close} />
          </Button>
          <div className={styles.headerContent}>{header}</div>
        </Header>
      )}
      <div className={styles.overlayContent}>{children}</div>
      <div className={styles.buttonsGroup}>{buttonsGroup}</div>
    </div>
  )
}

export default Overlay
