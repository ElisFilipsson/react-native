import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    resources: {
      en: {
        home: {
          title: 'Welcome',
          introduction: 'This text comes from i18next and is provided in english.',
        },
        history: {
          title: 'History',
          introduction: 'This text on page two.',
        },
        common: {
          currentLanguage: 'The current language is "{{lng}}"',
          actions: {
            toggleToGerman: 'Deutsch',
            toggleToEnglish: 'English',
            goToPage2: 'Open page 2',
          },
          infoText: '<0><0>Eins </O><1>Zwei </1><2>Drei </2><3>Vier </3><4>Fünf</4></O>',
        },
      },
    },
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
  });

export default i18n;