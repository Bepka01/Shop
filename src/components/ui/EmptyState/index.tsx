import style from './style.module.scss'

interface Props {
  title?: string
  className?: string
}

export const EmptyState = ({ title, className }: Props) => {
  return (
    <div
      className={className ? `${style.wrapper} ${className}` : style.wrapper}
    >
      <p className={style.title}>{title}</p>
    </div>
  )
}
