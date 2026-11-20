import style from './style.module.scss'

interface Props {
  message: string
  className: string
}

export const ErrorMessag = ({ message, className }: Props) => {
  return (
    <div
      role="alert"
      className={className ? `${style.wrapper} ${className}` : style.wrapper}
    >
      <p className={style.message}>{message}</p>
    </div>
  )
}
