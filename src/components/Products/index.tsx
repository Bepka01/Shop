import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useFetch } from '@/hooks/useFetch'
import type { Product } from '@/types'

import { ListRenderer } from '../ListRender.tsx'

export const Products: FC = () => {
  const {
    data: products,
    loading,
    error,
    refetch,
  } = useFetch<Product[]>('/products')

  const { t } = useTranslation()

  if (loading) {
    return <p>{t('common.loading')}</p>
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
