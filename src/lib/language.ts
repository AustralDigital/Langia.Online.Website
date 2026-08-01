export const supportedLanguages = ["es", "pt", "en"] as const;

export type SiteLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SiteLanguage = "es";
export const languageStorageKey = "langiaLanguage";
export const languageChangeEventName = "langia-language-change";

export function isSiteLanguage(value: string | null): value is SiteLanguage {
  return supportedLanguages.includes(value as SiteLanguage);
}

export function localizedPath(language: SiteLanguage, path = "/") {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${language}${normalizedPath}`;
}

export function localeFromPathname(pathname: string): SiteLanguage | null {
  const segment = pathname.split("/").filter(Boolean)[0] ?? null;
  return isSiteLanguage(segment) ? segment : null;
}

export function detectBrowserLanguage(): SiteLanguage {
  if (typeof navigator === "undefined") {
    return defaultLanguage;
  }

  const preferences = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const preference of preferences) {
    const language = preference.toLowerCase().split("-")[0];

    if (isSiteLanguage(language)) {
      return language;
    }
  }

  return defaultLanguage;
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
