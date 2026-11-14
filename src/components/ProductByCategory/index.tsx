import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useFetch } from '@/hooks/useFetch'
import type { Product } from '@/types'

import { ListRenderer } from '../ListRender.tsx'

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

  return (
    <ListRenderer data={products} emptyText={t('common.empty')}>
      {(items) => (
        <ul>
          {items.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </ListRenderer>
  )
}
