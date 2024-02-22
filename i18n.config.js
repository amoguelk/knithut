/* eslint-disable import/no-extraneous-dependencies */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, es } from './translations';
import languageDetectorPlugin from './src/_utils/languageDetectorPlugin';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
    react: {
      useSuspense: false, // in case you have any suspense related errors
    },
  });

export default i18n;
