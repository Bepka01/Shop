import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { getProductById } from '@/api/products.ts'
import { useFetch } from '@/hooks/useFetch'
import type { Product } from '@/types'

import { RequestStatus } from '../RequestStatus/index.tsx'

interface Props {
  id: number
}

export const ProductDetails: FC<Props> = ({ id }) => {
  const fetchProductById = useCallback(() => getProductById(id), [id])
  const {
    data: product,
    error,
    loading,
    refetch,
  } = useFetch<Product>(fetchProductById)

  const { t } = useTranslation()

  return (
    <div>
      <RequestStatus error={error} loading={loading} onRetry={refetch} />
      {!loading &&
        !error &&
        (product ? (
          <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} width={200} />
            <p>{product.description}</p>
            <p>
              {t('product.price')}: {product.price} {t('common.currency')}
            </p>
          </div>
        ) : (
          <div>{t('product.notFound')}</div>
        ))}
    </div>
  )
}
