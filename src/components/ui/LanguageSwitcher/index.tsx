import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (language: 'en' | 'ru') => {
    void i18n.changeLanguage(language)
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
