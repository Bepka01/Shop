import type { ButtonHTMLAttributes, FC } from 'react'

import style from './style.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  align?: 'center' | 'left'
  isLoading?: boolean
}

export const Button: FC<Props> = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className,
  align = 'center',
  type = 'button',
  ...props
}) => {
  const isDisabled = disabled || isLoading
  return (
    <button
      {...props}
      disabled={isDisabled}
      type={type}
      className={`${style.button} ${style[variant]} ${style[align]} ${className ?? ''}`}
    >
      {children}
    </button>
  )
}
