import type { FC } from 'react'

import style from './style.module.scss'

type LoaderSize = 'sm' | 'md' | 'lg'

interface Props {
  label?: string
  centered?: boolean
  size?: LoaderSize
  className?: string
}

export const Loader: FC<Props> = ({
  size = 'md',
  centered,
  label,
  className,
  ...props
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`${style.wrapper} ${centered ? style.centered : ''} ${className ?? ''}`}
      {...props}
    >
      <span className={`${style.spinner} ${style[size]}`} aria-hidden="true" />
      {label && <span className={style.label}>{label}</span>}
    </div>
  )
}
