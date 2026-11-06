import axios from 'axios'

import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { IDataResponse, Product } from '@/types'

export const getProducts = async (
  signal?: AbortSignal,
): Promise<IDataResponse<Product[] | null>> => {
  try {
    const products = await generalRequest<Product[]>({
      url: '/products',
      method: 'GET',
      signal,
    })
    if (!Array.isArray(products)) {
      throw new Error('Invalid products response')
    }

    return {
      ok: true,
      data: products,
    }
  } catch (error: unknown) {
    if (axios.isCancel(error)) {
      throw error
    }

    return {
      ok: false,
      data: null,
      error: getApiErrorType(error),
    }
  }
}
