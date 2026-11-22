import cn from 'classnames'

import style from './style.module.scss'

interface Props {
  title?: string
  className?: string
}

export const EmptyState = ({ title, className }: Props) => {
  return (
    <div className={cn(style.wrapper, className)}>
      {title && <p className={style.title}>{title}</p>}
    </div>
  )
}
