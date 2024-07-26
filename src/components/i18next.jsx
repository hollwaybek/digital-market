import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUZ from './locales/uz/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  uz: {
    translation: translationEN
  },
  ru: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'uz',
    debug: true,
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
