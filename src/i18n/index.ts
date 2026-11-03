import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ru from './locales/ru.json'

type Language = 'en' | 'ru'

const getInitialLanguage = (): Language => {
  const savedLanguage = localStorage.getItem('language')

  if (savedLanguage === 'en' || savedLanguage === 'ru') {
    return savedLanguage
  }

  return 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
})

const updateDocumentLanguage = (language: string) => {
  const currentLanguage: Language = language.startsWith('en') ? 'en' : 'ru'

  document.documentElement.lang = currentLanguage
}

updateDocumentLanguage(i18n.language)

i18n.on('languageChanged', (language) => {
  const currentLanguage: Language = language.startsWith('en') ? 'en' : 'ru'

  localStorage.setItem('language', currentLanguage)
  updateDocumentLanguage(currentLanguage)
})

export default i18n
