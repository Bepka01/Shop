import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import Categories from '@/components/categories'
import ProductProduct from '@/components/Product'
import Products from '@/components/Products'

import styles from './styles.module.scss'

const Catalog: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.page}>
      <h1>{t('header.catalog')}</h1>
      <Products />
      <ProductProduct id={11} />
      <Categories />
    </div>
  )
}

export default Catalog
