import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { API_URLS } from '@/constants/index.ts'
import { useFetch } from '@/hooks/useFetch'

import { ListRenderer } from '../ListRender/index.tsx'
import { RequestError } from '../RequestError/index.tsx'

export const Categories: FC = () => {
  const {
    data: categories,
    error,
    loading,
    refetch,
  } = useFetch<string[]>(API_URLS.categories)

  const { t } = useTranslation()

  return (
    <>
      <RequestError error={error} loading={loading} onRetry={refetch} />
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
