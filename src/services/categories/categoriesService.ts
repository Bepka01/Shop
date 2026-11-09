import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { IDataResponse } from '@/types'

export const getCategories = async (): Promise<IDataResponse<string[]>> => {
  try {
    const result = await generalRequest<string[]>({
      url: '/products/categories',
      method: 'get',
    })

    return {
      ok: true,
      data: result,
    }
  } catch (error: unknown) {
    return {
      ok: false,
      data: [],
      error: getApiErrorType(error),
    }
  }
}
