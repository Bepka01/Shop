import { useTheme } from '@/hooks/useTheme'

import style from './style.module.scss'

export const Theme = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className={style.theme} onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
