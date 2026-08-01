"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { LOGIN_URL, navigationContent } from "@/content/navigation";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, localeFromPathname, localizedPath, supportedLanguages, type SiteLanguage } from "@/lib/language";
import { siteButtonClass } from "@/components/site/buttonStyles";

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function SiteFooter({
  language: languageProp,
  onLanguageChange,
}: {
  language?: SiteLanguage;
  onLanguageChange?: (language: SiteLanguage) => void;
} = {}) {
  const { language: storedLanguage, setLanguage: setStoredLanguage } = useSiteLanguage(defaultLanguage);
  const language = languageProp ?? storedLanguage;
  const setLanguage = onLanguageChange ?? setStoredLanguage;
  const copy = navigationContent[language];
  const pathname = usePathname();
  const router = useRouter();

  function changeLanguage(nextLanguage: SiteLanguage) {
    setLanguage(nextLanguage);
    const currentLanguage = localeFromPathname(pathname);

    if (currentLanguage) {
      const rest = pathname.replace(new RegExp(`^/${currentLanguage}(?=/|$)`, "u"), "") || "/";
      router.push(localizedPath(nextLanguage, rest));
    }
  }

  return (
    <footer className="min-w-0 bg-[var(--langia-white)] px-5 pb-5 pt-8 text-[var(--langia-navy)] sm:px-8 sm:pb-8 sm:pt-10 lg:px-12 lg:pb-12 lg:pt-12">
      <div className="relative mx-auto w-full max-w-[1360px] overflow-hidden rounded-[2rem] border border-[var(--langia-border)] bg-[var(--langia-mist)] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full border-[3.5rem] border-[var(--langia-signal)]/8" />
        <div className="grid min-w-0 gap-12 xl:grid-cols-[0.9fr_1.45fr] xl:gap-20">
          <div className="min-w-0">
            <Link
              href="/"
              className="flex w-fit items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/40"
              aria-label={copy.logoAlt}
            >
              <Image
                src="/images/logo-original.svg"
                alt={copy.logoAlt}
                width={272}
                height={104}
                className="h-20 w-auto sm:h-24 lg:h-28"
              />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-7 text-[var(--langia-muted)]">
              {copy.footer.brandLine}
            </p>
            <div className="mt-9 max-w-sm">
              <h2 className="font-heading text-base font-semibold text-[var(--langia-navy)]">
                {copy.footer.contactTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--langia-muted)]">
                {copy.footer.contactBody}
              </p>
              <Link
                href="/contact"
                className={siteButtonClass({ className: "mt-5", size: "sm", variant: "navigation" })}
              >
                {copy.secondaryCta}
                <span aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-[var(--langia-navy)]">
                {copy.footer.languageLabel}
              </p>
              <div className="inline-flex rounded-full border border-[var(--langia-border)] bg-white p-1 shadow-[0_8px_24px_rgba(11,31,58,0.04)]">
                {supportedLanguages.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => changeLanguage(item)}
                    className={`min-h-11 rounded-full px-3 py-1.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/45 ${
                      item === language
                        ? "bg-[var(--langia-navy)] text-white"
                        : "text-[var(--langia-muted)] hover:bg-[var(--langia-mist)] hover:text-[var(--langia-navy)]"
                    }`}
                    aria-pressed={item === language}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {copy.footer.columns.map((column) => (
              <div key={column.title} className="min-w-0">
                <h2 className="font-heading text-base font-semibold text-[var(--langia-navy)]">
                  {column.title}
                </h2>
                <div className="mt-5 grid gap-3.5 text-[15px] leading-6 text-[var(--langia-muted)]">
                  {column.links.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="w-fit !text-[var(--langia-muted)] transition hover:!text-[var(--langia-blue-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/40"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="min-w-0">
              <a
                href={LOGIN_URL}
                className="inline-flex min-h-11 items-center gap-2 border-b border-[var(--langia-signal)]/45 font-heading text-base font-semibold !text-[var(--langia-blue-ink)] transition hover:border-[var(--langia-navy)] hover:!text-[var(--langia-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/40"
              >
                {copy.login}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-[var(--langia-navy)]/12 pt-6 text-sm text-[var(--langia-muted)]">
          Langia Language Solutions LLC. {copy.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
