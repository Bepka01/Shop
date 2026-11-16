import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { API_URLS } from '@/constants'
import { useFetch } from '@/hooks/useFetch'
import type { Product } from '@/types'

import { RequestError } from '../RequestError/index.tsx'

interface Props {
  id: number
}

export const ProductDetails: FC<Props> = ({ id }) => {
  const {
    data: product,
    error,
    loading,
    refetch,
  } = useFetch<Product>(API_URLS.productDetails(id))

  const { t } = useTranslation()

  if (!product) {
    return <div>{t('product.notFound')}</div>
  }

  return (
    <div>
      <RequestError error={error} loading={loading} onRetry={refetch} />
      {!loading && !error && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} width={200} />
          <p>{product.description}</p>
          <p>
            {t('product.price')}: {product.price} {t('common.currency')}
          </p>
        </div>
      )}
    </div>
  )
}
