import { useEffect, useState } from 'react'
import type { ZodType } from 'zod'

import { generalRequest } from '@/api'
import { getApiErrorType } from '@/api/errors'
import type { ApiErrorType } from '@/types'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const useFetch = <T>(
  url: string,
  schema: ZodType<T>,
  method: HttpMethod = 'GET',
) => {
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
        const result = await generalRequest<unknown>({
          url,
          method,
        })

        const validatedData = schema.parse(result)

        if (active) {
          setData(validatedData)
        }
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
  }, [url, method, schema, retry])

  const refetch = () => {
    setRetry((prev) => prev + 1)
  }
  return { data, loading, error, refetch }
}
