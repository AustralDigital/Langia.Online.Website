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
    <footer className="relative min-w-0 overflow-hidden bg-[var(--langia-mist)] pt-16 pb-8 text-[var(--langia-navy)] sm:pt-20 sm:pb-10">
      <div className="min-w-0">
        <div className="mx-auto w-full max-w-[1540px] px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid min-w-0 gap-14 xl:grid-cols-[0.82fr_1.55fr] xl:gap-24">
            <div className="min-w-0">
              <Link
                href="/"
                className="flex w-fit items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]"
                aria-label={copy.logoAlt}
              >
                <Image
                  src="/images/logo-lockup.svg"
                  alt={copy.logoAlt}
                  width={4160}
                  height={1908}
                  className="h-10 w-auto shrink-0 object-contain sm:h-12 lg:h-14"
                />
              </Link>
              <p className="mt-5 max-w-sm text-base leading-7 text-[var(--langia-muted)]">
                {copy.footer.brandLine}
              </p>
              <div className="mt-10 max-w-sm border-t border-[var(--langia-navy)]/12 pt-8">
                <h2 className="font-heading text-xl font-semibold tracking-[-0.025em] text-[var(--langia-navy)]">
                  {copy.footer.contactTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--langia-muted)]">
                  {copy.footer.contactBody}
                </p>
                <Link
                  href="/contact"
                  className={siteButtonClass({ className: "mt-6", size: "sm", variant: "secondary" })}
                >
                  {copy.secondaryCta}
                  <span aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid min-w-0 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:pt-2">
              {copy.footer.columns.map((column) => (
                <div key={column.title} className="min-w-0">
                  <h2 className="font-heading text-base font-semibold text-[var(--langia-navy)]">
                    {column.title}
                  </h2>
                  <div className="mt-4 grid gap-1 text-[15px] leading-6 text-[var(--langia-muted)]">
                    {column.links.map((link) => (
                      <Link
                        key={link.href + link.label}
                        href={link.href}
                        className="inline-flex min-h-11 w-fit items-center rounded-md py-2 !text-[var(--langia-muted)] transition-colors duration-200 hover:!text-[var(--langia-blue-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--langia-mist)]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="min-w-0">
                <h2 className="font-heading text-base font-semibold text-[var(--langia-navy)]">
                  {copy.footer.languageLabel}
                </h2>
                <div className="mt-5 inline-flex rounded-full border border-[var(--langia-border)] bg-white p-1">
                  {supportedLanguages.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => changeLanguage(item)}
                      className={`min-h-11 min-w-11 cursor-pointer rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)] ${
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
                <a
                  href={LOGIN_URL}
                  className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[var(--langia-signal)]/45 font-heading text-base font-semibold !text-[var(--langia-blue-ink)] transition hover:border-[var(--langia-navy)] hover:!text-[var(--langia-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]"
                >
                  {copy.login}
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-[var(--langia-navy)]/12 pt-6 text-sm text-[var(--langia-muted)] sm:flex-row sm:items-center sm:justify-between lg:mt-20">
            <span>Langia Language Solutions LLC. {copy.footer.copyright}</span>
            <span>{copy.footer.brandLine}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
