import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { IDataResponse, Product } from '@/types'

export const getProducts = async (): Promise<
  IDataResponse<Product[] | null>
> => {
  try {
    const products = await generalRequest<Product[]>({
      url: '/products',
      method: 'GET',
    })
    if (!Array.isArray(products)) {
      throw new Error('Invalid products response')
    }

    return {
      ok: true,
      data: products,
    }
  } catch (error: unknown) {
    return {
      ok: false,
      data: null,
      error: getApiErrorType(error),
    }
  }
}
