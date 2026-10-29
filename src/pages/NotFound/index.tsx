import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'

const NotFound: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <h1>{t('notFound.title')}</h1>
    </div>
  )
}

export default NotFound
