import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import Products from '@/components/Products'
import Button from '@/components/ui/Button'

import styles from './styles.module.scss'

const Catalog: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.page}>
      <h1>{t('header.catalog')}</h1>
      <Products />
      <Button variant="primary">хуй</Button>
    </div>
  )
}

export default Catalog
