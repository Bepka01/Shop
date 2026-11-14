import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useFetch } from '@/hooks/useFetch'

import { ListRenderer } from '../ListRender.tsx'

export const Categories: FC = () => {
  const {
    data: categories,
    error,
    loading,
    refetch,
  } = useFetch<string[]>('/products/categories')

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
    <ListRenderer data={categories} emptyText={t('common.empty')}>
      {(items) => (
        <div>
          {items.map((category) => (
            <p key={category}>{category}</p>
          ))}
        </div>
      )}
    </ListRenderer>
  )
}
