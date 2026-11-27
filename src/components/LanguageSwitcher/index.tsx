import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import style from './style.module.scss'

const LANGUAGES = ['en', 'ru'] as const

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'ru'

  const handleLanguageChange = (lang: 'en' | 'ru') => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang)
    }
  }

  return (
    <div className={style.switcher} role="group" aria-label="Language switcher">
      {LANGUAGES.map((lang) => {
        const isActive = currentLang === lang

        return (
          <button
            key={lang}
            type="button"
            onClick={() => handleLanguageChange(lang)}
            className={cn(style.button, { [style.active]: isActive })}
          >
            {lang.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
