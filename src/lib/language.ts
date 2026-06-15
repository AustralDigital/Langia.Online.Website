export const supportedLanguages = ["es", "pt", "en"] as const;

export type SiteLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SiteLanguage = "es";
export const languageStorageKey = "langiaLanguage";
export const languageChangeEventName = "langia-language-change";

export function isSiteLanguage(value: string | null): value is SiteLanguage {
  return supportedLanguages.includes(value as SiteLanguage);
}

export function notifyLanguageChange(language: SiteLanguage) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent<SiteLanguage>(languageChangeEventName, {
      detail: language,
    }),
  );
}
