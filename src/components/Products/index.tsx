import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { api } from '@/api/client'
import { getApiErrorType } from '@/api/errors'

interface ProductType {
  id: number
  title: string
}

const Products: FC = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    const controller = new AbortController()

    api
      .get<ProductType[]>('/products', { signal: controller.signal })
      .then((response) => setProducts(response.data))
      .catch((error: unknown) => {
        const errorType = getApiErrorType(error)

        if (errorType === 'cancelled') return

        console.error(t(`errors.${errorType}`))
      })
    return () => {
      controller.abort()
    }
  }, [t])

  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>
      })}
    </ul>
  )
}

export default Products
