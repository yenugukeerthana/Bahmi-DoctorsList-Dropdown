import React from 'react'
import {useTranslation} from 'react-i18next'

const LabEntryApp: React.FC = () => {
  const {t} = useTranslation()
  return <h1>Hello {t('title')}</h1>
}

export default LabEntryApp
