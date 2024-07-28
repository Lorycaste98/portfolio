import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'it',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['common', 'home', 'about', 'work', 'projects', 'skills', 'contact'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
