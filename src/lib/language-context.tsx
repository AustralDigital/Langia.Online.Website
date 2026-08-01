"use client";

import { createContext, type ReactNode } from "react";

import type { SiteLanguage } from "@/lib/language";

export const SiteLanguageContext = createContext<SiteLanguage | null>(null);

export function SiteLanguageProvider({
  children,
  language,
}: {
  children: ReactNode;
  language: SiteLanguage;
}) {
  return (
    <SiteLanguageContext.Provider value={language}>
      {children}
    </SiteLanguageContext.Provider>
  );
}
