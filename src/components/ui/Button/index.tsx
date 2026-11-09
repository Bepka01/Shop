import type { FC, ReactNode } from 'react'

import style from './style.module.scss'

interface Props {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'disabled'
  disabled?: boolean
  onClick?: () => void
}

const Button: FC<Props> = ({ children, variant, ...props }) => {
  return (
    <button className={`${style.button}${style[variant]}`} {...props}>
      {children}
    </button>
  )
}

export default Button
