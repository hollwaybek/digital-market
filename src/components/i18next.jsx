import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUZ from '../lang/uz.json';
import translationRU from '../lang/ru.json';

const resources = {
  uz: {
    translation: translationUZ
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'uz',
    debug: true,
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
