import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { getProduct } from '@/services/product'
import type { ApiErrorType, Product } from '@/types'

interface ProductsProps {
  id: number
}

const ProductProduct: FC<ProductsProps> = ({ id }) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<ApiErrorType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const result = await getProduct(id)
        if (result.ok && result.data !== null) {
          setProduct(result.data)
          setError(null)
        } else {
          setProduct(null)
          setError(result.error ?? 'unknown')
        }
      } catch {
        setError('unknown')
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Произошла ошибка: {error}</div>
  }

  if (!product) {
    return <div>Товар не найден</div>
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>Цена: {product.price}$</p>
    </div>
  )
}

export default ProductProduct
