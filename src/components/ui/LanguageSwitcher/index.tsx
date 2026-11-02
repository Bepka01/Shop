import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: FC = () => {
  const { i18n, t } = useTranslation()

  const changeLanguage = async (language: 'en' | 'ru') => {
    try {
      await i18n.changeLanguage(language)
    } catch (error) {
      console.error('Ошибка при переключении языка:', error)
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        disabled={i18n.language.startsWith('en')}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => changeLanguage('ru')}
        disabled={i18n.language.startsWith('ru')}
      >
        RU
      </button>

      <p>
        {t('language.current')}: {i18n.language}
      </p>
    </div>
  )
}

export default LanguageSwitcher
