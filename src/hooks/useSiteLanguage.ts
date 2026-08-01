"use client";

import { useContext, useEffect, useState } from "react";

import {
  defaultLanguage,
  detectBrowserLanguage,
  isSiteLanguage,
  languageChangeEventName,
  languageStorageKey,
  notifyLanguageChange,
  type SiteLanguage,
} from "@/lib/language";
import { SiteLanguageContext } from "@/lib/language-context";

type LanguageChangeEvent = CustomEvent<SiteLanguage>;

export function useSiteLanguage(initialLanguage: SiteLanguage = defaultLanguage) {
  const routeLanguage = useContext(SiteLanguageContext);
  const [storedLanguage, setLanguageState] = useState<SiteLanguage>(routeLanguage ?? initialLanguage);
  const language = routeLanguage ?? storedLanguage;

  useEffect(() => {
    if (routeLanguage) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      try {
        const storedLanguage = window.localStorage.getItem(languageStorageKey);
        const nextLanguage = isSiteLanguage(storedLanguage)
          ? storedLanguage
          : detectBrowserLanguage();

        setLanguageState(nextLanguage);

        if (!storedLanguage) {
          window.localStorage.setItem(languageStorageKey, nextLanguage);
        }
      } catch {
        setLanguageState(detectBrowserLanguage());
      }
    });

    function handleStorage(event: StorageEvent) {
      if (event.key === languageStorageKey && isSiteLanguage(event.newValue)) {
        setLanguageState(event.newValue);
      }
    }

    function handleLanguageChange(event: Event) {
      const nextLanguage = (event as LanguageChangeEvent).detail;

      if (isSiteLanguage(nextLanguage)) {
        setLanguageState(nextLanguage);
      }
    }

    window.addEventListener("storage", handleStorage);
    window.addEventListener(languageChangeEventName, handleLanguageChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(languageChangeEventName, handleLanguageChange);
    };
  }, [initialLanguage, routeLanguage]);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  }, [language]);

  function setLanguage(nextLanguage: SiteLanguage) {
    setLanguageState(nextLanguage);

    try {
      window.localStorage.setItem(languageStorageKey, nextLanguage);
    } catch {
      // The UI can still update when localStorage is unavailable.
    }

    notifyLanguageChange(nextLanguage);
  }

  return { language, setLanguage };
}
