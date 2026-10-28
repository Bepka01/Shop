import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: 'en' | 'ru') => {
    void i18n.changeLanguage(language)
  }

  return (
    <div>
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

        <p>Текущий язык: {i18n.language}</p>
      </div>
      )
    </div>
  )
}

export default LanguageSwitcher
