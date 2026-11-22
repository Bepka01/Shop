import { API_URLS } from '@/constants'
import type { Product } from '@/types'

import { generalRequest } from './client'

export const getProducts = (): Promise<Product[]> =>
  generalRequest<Product[]>({
    url: API_URLS.products,
    method: 'GET',
  })

export const getProductById = (id: number): Promise<Product> =>
  generalRequest<Product>({
    url: API_URLS.productDetails(id),
    method: 'GET',
  })

export const getCategories = (): Promise<string[]> =>
  generalRequest<string[]>({
    url: API_URLS.categories,
    method: 'GET',
  })

export const getProductsByCategory = (category: string): Promise<Product[]> =>
  generalRequest<Product[]>({
    url: API_URLS.productByCategory(category),
    method: 'GET',
  })
