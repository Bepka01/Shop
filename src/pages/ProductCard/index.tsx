import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ProductDetails } from '@/components/ProductDetails'

import styles from './styles.module.scss'

const ProductCard: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  const productId = Number(id)

  return (
    <div className={styles.page}>
      <h1>{t('product.title')}</h1>
      <p>
        {t('product.id')}: {id}
      </p>
      <ProductDetails id={Number(productId)} />
    </div>
  )
}

export default ProductCard
