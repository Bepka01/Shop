import cn from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'

import style from './style.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Container = ({ children, className, ...props }: Props) => {
  return (
    <div className={cn(style.container, className)} {...props}>
      {children}
    </div>
  )
}
