import { useEffect, useState } from 'react'

import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { ApiErrorType } from '@/types'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const useFetch = <T>(
  url: string,
  method: HttpMethod = 'GET',
  validator?: (data: unknown) => data is T,
) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ApiErrorType | null>(null)
  const [retry, setRetry] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await generalRequest<unknown>({
          url,
          method,
        })

        if (validator && !validator(result)) {
          throw new Error('Invalid response format')
        }
        setData(result as T)
      } catch (error: unknown) {
        setData(null)
        setError(getApiErrorType(error))
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [url, method, retry, validator])

  const refetch = () => {
    setRetry((prev) => prev + 1)
  }
  return { data, loading, error, refetch }
}
