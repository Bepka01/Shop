import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useFetch } from '@/hooks/useFetch'
import type { Product } from '@/types'

interface Props {
  category: string
}

export const ProductByCategory: FC<Props> = ({ category }) => {
  const {
    data: products,
    error,
    loading,
    refetch,
  } = useFetch<Product[]>(`/products/category/${encodeURIComponent(category)}`)

  const { t } = useTranslation()

  if (loading) {
    return <div>{t('common.loading')}</div>
  }

  if (error) {
    return (
      <div>
        <p>{t(`errors.${error}`)}</p>
        <button onClick={refetch}>{t('common.retry')}</button>
      </div>
    )
  }

  if (!products) {
    return null
  }

  if (products.length === 0) {
    return <p>{t('common.empty')}</p>
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}
