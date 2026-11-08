import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { IDataResponse, Product } from '@/types'

const getProduct = async (
  id: number,
): Promise<IDataResponse<Product | null>> => {
  try {
    const product = await generalRequest<Product>({
      url: `/products/${id}`,
      method: 'GET',
    })

    if (!product || typeof product !== 'object' || !('id' in product)) {
      throw new Error('Invalid product response')
    }
    return {
      ok: true,
      data: product,
    }
  } catch (error: unknown) {
    return {
      ok: false,
      data: null,
      error: getApiErrorType(error),
    }
  }
}

export default getProduct
