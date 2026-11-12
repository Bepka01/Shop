import type { FC, ReactNode } from 'react'

import style from './style.module.scss'

interface Props {
  children: ReactNode
  className?: string
  variant: 'primary' | 'secondary' | 'disabled'
  disabled?: boolean
  onClick?: () => void
}

const Button: FC<Props> = ({
  children,
  variant,
  onClick,
  className,
  disabled,
  ...props
}) => {
  const isDisabled = disabled || variant === 'disabled'

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${style.button} ${style[variant]} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
