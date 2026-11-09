import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { IDataResponse, Product } from '@/types'

export const getProductsByCategory = async (
  category: string,
): Promise<IDataResponse<Product[]>> => {
  if (!category.trim()) {
    return {
      ok: false,
      data: [],
      error: 'unknown',
    }
  }
  try {
    const productByCategory = await generalRequest<Product[]>({
      url: `/products/category/${encodeURIComponent(category)}`,
      method: 'GET',
    })

    return {
      ok: true,
      data: productByCategory,
    }
  } catch (error: unknown) {
    return {
      ok: false,
      data: [],
      error: getApiErrorType(error),
    }
  }
}
