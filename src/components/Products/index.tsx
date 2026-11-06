import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getProducts } from '@/services/products'
import type { ApiErrorType, Product } from '@/types'

const Products: FC = () => {
  const [error, setError] = useState<ApiErrorType | null>(null)
  const [loading, setLoading] = useState(true)
  const [retry, setRetry] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    const controller = new AbortController()

    const loadProducts = async () => {
      try {
        const result = await getProducts(controller.signal)

        if (controller.signal.aborted) return

        if (result.ok && result.data !== null) {
          setProducts(result.data)
          setError(null)
        } else {
          setProducts([])
          setError(result.error ?? 'unknown')
        }
      } catch {
        if (!controller.signal.aborted) {
          setProducts([])
          setError('unknown')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      controller.abort()
    }
  }, [retry])

  return (
    <>
      {loading && <p>{t('common.loading')}</p>}

      {error && (
        <div>
          <p>{t(`errors.${error}`)}</p>
          <button
            onClick={() => {
              setError(null)
              setLoading(true)
              setRetry((prev) => prev + 1)
            }}
          >
            {t('common.retry')}
          </button>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <p>{t('common.empty')}</p>
      )}

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Products
