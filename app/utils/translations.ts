import { useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import enTranslations from "../translations/en.json";
import deTranslations from "../translations/de.json";

type Language = "en" | "de";
type TranslationRecord = {
  [key: string]: string | TranslationRecord;
};

const translations = {
  en: enTranslations as TranslationRecord,
  de: deTranslations as TranslationRecord,
};

export function useTranslations() {
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = (searchParams.get("lang") as Language) || "en";
    setCurrentLanguage(lang);
  }, [location.search]);

  function t(key: string): string {
    const keys = key.split(".");
    let value: string | TranslationRecord = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key; // Return the key if translation is not found
      }
    }
    
    return typeof value === "string" ? value : key;
  }

  return {
    t,
    currentLanguage,
  };
} 