import type { ApiErrorType } from '../ApiError'

export interface IDataResponse<T> {
  data: T
  ok: boolean
  message?: string
  fullError?: unknown
  error?: ApiErrorType
}
