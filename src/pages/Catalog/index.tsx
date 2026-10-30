import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'

const Catalog: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.page}>
      <h1>{t('header.catalog')}</h1>
    </div>
  )
}

export default Catalog
