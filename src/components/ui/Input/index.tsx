import { forwardRef, type InputHTMLAttributes } from 'react'

import style from './style.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', label, error, className, ...props }, ref) => {
    return (
      <div className={`${style.wrapper} ${className ?? ''}`}>
        {label && <label className={`${style.label}`}>{label}</label>}
        <input
          className={`${style.input} ${error ? style.inputError : ''}`}
          ref={ref}
          type={type}
          {...props}
        />
        {error && <span className={`${style.error}`}>{error}</span>}
      </div>
    )
  },
)
