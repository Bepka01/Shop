import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import Products from '@/components/Products'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Loader } from '@/components/ui/Loader'

import styles from './styles.module.scss'

const Catalog: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.page}>
      <h1>{t('header.catalog')}</h1>
      <Products />
      <Button align="center" variant="primary">
        Смотреть каталог
      </Button>
      <Button align="left" variant="secondary">
        Sign in
      </Button>

      <Input />
      <Loader size="sm" />
    </div>
  )
}

export default Catalog
