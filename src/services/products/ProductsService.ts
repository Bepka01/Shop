import axios from 'axios'

import { generalRequest } from '@/api'
import type { Product, RequestResult } from '@/types'

export const getProducts = async (
  signal?: AbortSignal,
): Promise<RequestResult<Product[]>> => {
  try {
    const products = await generalRequest<Product[]>({
      url: '/products',
      method: 'GET',
      signal,
    })

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
      data: [],
    }
  }
}
