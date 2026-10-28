import type { FC } from 'react'

import styles from './styles.module.scss'

const NotFound: FC = () => {
  return (
    <div className={styles.page}>
      <h1>Not Found</h1>
    </div>
  )
}

export default NotFound
