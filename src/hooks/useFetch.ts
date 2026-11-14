import { useCallback, useEffect, useState } from 'react'

import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { ApiErrorType } from '@/types'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ApiErrorType | null>(null)
  const [retry, setRetry] = useState(0)

  useEffect(() => {
    let active = true

    const loadData = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await generalRequest<T>({
          url,
          method: 'GET',
        })

        if (active) setData(result)
      } catch (error: unknown) {
        if (active) {
          setData(null)
          setError(getApiErrorType(error))
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      active = false
    }
  }, [url, retry])

  const refetch = useCallback(() => {
    setRetry((prev) => prev + 1)
  }, [])

  return { data, loading, error, refetch }
}
