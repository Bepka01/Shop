import axios from 'axios'

import type { ApiErrorType } from '@/types'

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
