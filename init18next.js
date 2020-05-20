import { initReactI18next } from "react-i18next";
import i18next from 'i18next';
import languages from "./resources"

i18next
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: 'en',
    resources: languages,
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
  });