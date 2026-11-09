import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { getCategories } from '@/services/categories'
import type { ApiErrorType } from '@/types'

const Categories: FC = () => {
  const [categories, setCategory] = useState<string[]>([])
  const [error, setError] = useState<ApiErrorType | null>(null)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const result = await getCategories()

        if (result.ok && result.data !== null) {
          setCategory(result.data)
          setError(null)
        } else {
          setCategory([])
          setError(result.error ?? 'unknown')
        }
      } catch {
        setCategory([])
        setError('unknown')
      }
    }
    loadCategories()
  }, [])

  if (error) {
    return <p>Произошла ошибка: {error}</p>
  }

  return (
    <div>
      {categories.map((category) => {
        return <p key={category}>{category}</p>
      })}
    </div>
  )
}

export default Categories
