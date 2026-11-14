import type { FC, ReactNode } from 'react'

import style from './style.module.scss'

interface Props {
  children: ReactNode
  className?: string
  variant: 'primary' | 'secondary' | 'disabled'
  disabled?: boolean
}

const Button: FC<Props> = ({
  children,
  variant,
  className,
  disabled,
  ...props
}) => {
  const isDisabled = disabled || variant === 'disabled'

  return (
    <button
      disabled={isDisabled}
      className={`${style.button} ${style[variant]} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
