import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { AuthResponse, IDataResponse, LoginCredentials } from '@/types'

export const login = async (
  credentials: LoginCredentials,
): Promise<IDataResponse<AuthResponse | null>> => {
  try {
    const getLogin = await generalRequest<AuthResponse>({
      method: 'POST',
      url: '/auth/login',
      data: credentials,
    })
    return {
      ok: true,
      data: getLogin,
    }
  } catch (error: unknown) {
    return {
      ok: false,
      data: null,
      error: getApiErrorType(error),
    }
  }
}
