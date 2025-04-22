"use client"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n, t } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Cargar el idioma guardado al iniciar
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  // Alternar el estado del menú de idiomas
  const toggleLangMenu = () => {
    setIsLangMenuOpen((prev) => !prev);
  };

  // Cambiar el idioma y cerrar el menú
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLangMenuOpen(false);
  };

  // Tipado explícito del objeto retornado
  return {
    language: i18n.language as string, // Asegura que el tipo sea `string`
    t,
    toggleLangMenu,
    handleLanguageChange,
    isLangMenuOpen,
  };
};