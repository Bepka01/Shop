import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { getProducts } from '@/api/products.ts'
import { useFetch } from '@/hooks/useFetch'
import type { Product } from '@/types'

import { ListRenderer } from '../ListRender/index.tsx'
import { ProductList } from '../ProductList/index.tsx'
import { RequestStatus } from '../RequestStatus/index.tsx'

export const Products: FC = () => {
  const {
    data: products,
    loading,
    error,
    refetch,
  } = useFetch<Product[]>(getProducts)

  const { t } = useTranslation()

  return (
    <>
      <RequestStatus error={error} loading={loading} onRetry={refetch} />

      {!loading && !error && (
        <ListRenderer data={products} emptyText={t('common.empty')}>
          {(items) => <ProductList arr={items} />}
        </ListRenderer>
      )}
    </>
  )
}
