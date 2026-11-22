import cn from 'classnames'

import style from './style.module.scss'

interface Props {
  message: string
  className?: string
}

export const ErrorMessage = ({ message, className }: Props) => {
  return (
    <div role="alert" className={cn(style.wrapper, className)}>
      <p className={style.message}>{message}</p>
    </div>
  )
}
