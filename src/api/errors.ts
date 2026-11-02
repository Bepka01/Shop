import axios from 'axios'

export type ApiErrorType = 'server' | 'network' | 'unknown' | 'cancelled'

export const getApiErrorType = (error: unknown): ApiErrorType => {
  if (axios.isCancel(error)) {
    return 'cancelled'
  }

  if (axios.isAxiosError(error)) {
    if (error.response) {
      return 'server'
    }

    if (error.request) {
      return 'network'
    }
  }

  return 'unknown'
}
