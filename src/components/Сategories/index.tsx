import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { getCategories } from '@/api/products.ts'
import { useFetch } from '@/hooks/useFetch'

import { ListRenderer } from '../ListRender/index.tsx'
import { RequestStatus } from '../RequestStatus/index.tsx'

export const Categories: FC = () => {
  const {
    data: categories,
    error,
    loading,
    refetch,
  } = useFetch<string[]>(getCategories)

  const { t } = useTranslation()

  return (
    <>
      <RequestStatus error={error} loading={loading} onRetry={refetch} />
      {!loading && !error && (
        <ListRenderer data={categories} emptyText={t('common.empty')}>
          {(items) => (
            <div>
              {items.map((category) => (
                <p key={category}>{category}</p>
              ))}
            </div>
          )}
        </ListRenderer>
      )}
    </>
  )
}
