import type { ReactNode } from 'react'

interface Props<T> {
  data: T[] | null
  emptyText: ReactNode
  children: (items: T[]) => ReactNode
}

export const ListRenderer = <T,>({ data, emptyText, children }: Props<T>) => {
  if (!data) return null
  if (data.length === 0) return <p>{emptyText}</p>
  return <>{children(data)}</>
}
