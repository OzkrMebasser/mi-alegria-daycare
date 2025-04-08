"use client";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { useEffect, useState } from "react";

import { en } from "../public/locales/en";
import { fr } from "../public/locales/fr";
import { es } from "../public/locales/es";


i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
          en: { translation: en },
          es: { translation: es },
          fr: { translation: fr },
        },
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: {
      escapeValue: false,
    },
 
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

export default I18nProvider;
