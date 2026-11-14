import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ProductDetails } from '@/components/Product'

import styles from './styles.module.scss'

const ProductCard: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0) {
    return <p>{t('product.notFound')}</p>
  }
  return (
    <div className={styles.page}>
      <h1>{t('product.title')}</h1>
      <p>
        {t('product.id')}: {id}
      </p>
      <ProductDetails id={Number(id)} />
    </div>
  )
}

export default ProductCard
