import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import styles from './styles.module.scss'

const ProductCard: FC = () => {
  const { id } = useParams()
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <h1>{t('product.title')}</h1>
      <p>
        {t('product.id')}: {id}
      </p>
    </div>
  )
}

export default ProductCard
