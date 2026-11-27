import cn from 'classnames'
import { forwardRef, type InputHTMLAttributes } from 'react'

import style from './style.module.scss'

type InputVariant = 'default' | 'search'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  variant?: InputVariant
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { type = 'text', label, error, variant = 'default', className, ...props },
    ref,
  ) => {
    return (
      <div className={cn(style.wrapper, style[variant], className)}>
        {label && <label className={style.label}>{label}</label>}
        <input
          className={cn(style.input, style[`input_${variant}`], {
            [style.inputError]: Boolean(error),
          })}
          ref={ref}
          type={type}
          {...props}
        />
        {error && <span className={style.error}>{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
