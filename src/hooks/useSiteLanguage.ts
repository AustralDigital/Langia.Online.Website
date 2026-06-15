"use client";

import { useEffect, useState } from "react";

import {
  defaultLanguage,
  isSiteLanguage,
  languageChangeEventName,
  languageStorageKey,
  notifyLanguageChange,
  type SiteLanguage,
} from "@/lib/language";

type LanguageChangeEvent = CustomEvent<SiteLanguage>;

export function useSiteLanguage(initialLanguage: SiteLanguage = defaultLanguage) {
  const [language, setLanguageState] = useState<SiteLanguage>(initialLanguage);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const storedLanguage = window.localStorage.getItem(languageStorageKey);

        if (isSiteLanguage(storedLanguage)) {
          setLanguageState(storedLanguage);
        }
      } catch {
        setLanguageState(initialLanguage);
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
  }, [initialLanguage]);

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
