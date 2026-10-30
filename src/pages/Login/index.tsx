import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'

const Login: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <h1>{t('auth.title')}</h1>
      <p>{t('auth.subtitle')}</p>
    </div>
  )
}

export default Login
