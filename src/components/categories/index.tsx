import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useFetch } from '@/hooks/useFetch'

const isStringArray = (data: unknown): data is string[] => {
  return Array.isArray(data) && data.every((item) => typeof item === 'string')
}

export const Categories: FC = () => {
  const {
    data: categories,
    error,
    loading,
    refetch,
  } = useFetch<string[]>('/products/categories', 'GET', isStringArray)

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

  if (!categories) {
    return null
  }

  if (categories.length === 0) {
    return <p>{t('common.empty')}</p>
  }
  return (
    <div>
      {categories.map((category) => {
        return <p key={category}>{category}</p>
      })}
    </div>
  )
}
