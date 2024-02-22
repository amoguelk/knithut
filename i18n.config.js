/* eslint-disable import/no-extraneous-dependencies */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, es } from './translations';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safe from xss
  },
});

export default i18n;
