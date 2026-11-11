import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useFetch } from '@/hooks/useFetch'
import type { Product } from '@/types'

interface Props {
  id: number
}

export const ProductDetails: FC<Props> = ({ id }) => {
  const {
    data: product,
    error,
    loading,
    refetch,
  } = useFetch<Product>(`/products/${id}`)

  const { t } = useTranslation()

  if (loading) {
    return <div>{t('common.loading')}</div>
  }

  if (error) {
    return (
      <div>
        <p>{t(`errors.${error}`)}</p>
        <button onClick={refetch}>{t('common.retry')}</button>
      </div>
    )
  }

  if (!product) {
    return <div>{t('product.notFound')}</div>
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>
        {t('product.price')}: {product.price} {t('common.currency')}
      </p>
    </div>
  )
}
