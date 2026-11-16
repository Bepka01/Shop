import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { API_URLS } from '@/constants/index.ts'
import { useFetch } from '@/hooks/useFetch'
import type { Product } from '@/types'

import { ListRenderer } from '../ListRender/index.tsx'
import { ProductList } from '../ProductList/index.tsx'
import { RequestError } from '../RequestError/index.tsx'

export const Products: FC = () => {
  const {
    data: products,
    loading,
    error,
    refetch,
  } = useFetch<Product[]>(API_URLS.products)

  const { t } = useTranslation()

  return (
    <>
      <RequestError error={error} loading={loading} onRetry={refetch} />

      {!loading && !error && (
        <ListRenderer data={products} emptyText={t('common.empty')}>
          {(items) => <ProductList arr={items} />}
        </ListRenderer>
      )}
    </>
  )
}
