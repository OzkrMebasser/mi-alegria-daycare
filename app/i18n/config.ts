'use client';

import React from 'react'; // ← Asegura esta línea
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useEffect, useState } from 'react';

import { en } from '../../public/locales/en';
import { fr } from '../../public/locales/fr';
import { es } from '../../public/locales/es';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'fr'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}


// "use client";
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import { I18nextProvider } from 'react-i18next';

// import LanguageDetector from 'i18next-browser-languagedetector';
// import { en } from './locales/en';
// import { fr } from './locales/fr';
// import { es } from './locales/es';

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: en },
//       fr: { translation: fr },
//       es: { translation: es },
//     },
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

