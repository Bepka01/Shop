import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getProducts } from '@/services/products'
import type { Product } from '@/types'

const Products: FC = () => {
  const [error, setError] = useState(false)
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

        if (result.ok) {
          setProducts(result.data)
          setError(false)
        } else {
          setError(true)
        }
      } catch {
        if (!controller.signal.aborted) {
          setError(true)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    void loadProducts()

    return () => {
      controller.abort()
    }
  }, [retry])

  return (
    <>
      {loading && <p>{t('common.loading')}</p>}

      {error && (
        <div>
          <p>{t('common.error')}</p>
          <button
            onClick={() => {
              setError(false)
              setLoading(true)
              setRetry((prev) => prev + 1)
            }}
          >
            {t('common.retry')}
          </button>
        </div>
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
