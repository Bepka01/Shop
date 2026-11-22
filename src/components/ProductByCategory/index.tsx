import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { getProductsByCategory } from '@/api'
import { useFetch } from '@/hooks/useFetch'

import { ListRenderer } from '../ListRender/index.tsx'
import { ProductList } from '../ProductList/index.tsx'
import { RequestStatus } from '../RequestStatus/index.tsx'

interface Props {
  category: string
}

export const ProductByCategory: FC<Props> = ({ category }) => {
  const fetchByCategory = useCallback(
    () => getProductsByCategory(category),
    [category],
  )

  const { t } = useTranslation()

  const { data: products, error, loading, refetch } = useFetch(fetchByCategory)

  return (
    <>
      <RequestStatus error={error} loading={loading} onRetry={refetch} />
      {!loading && !error && (
        <ListRenderer data={products} emptyText={t('common.empty')}>
          {(items) => <ProductList items={items} />}
        </ListRenderer>
      )}
    </>
  )
}
