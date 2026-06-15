"use client";

import Image from "next/image";
import Link from "next/link";

import { navigationContent } from "@/content/navigation";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, supportedLanguages } from "@/lib/language";

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

export function SiteFooter() {
  const { language, setLanguage } = useSiteLanguage(defaultLanguage);
  const copy = navigationContent[language];

  return (
    <footer className="bg-white px-4 pb-4 pt-20 sm:px-6 lg:px-10">
      <div className="mx-auto rounded-[3rem] bg-gradient-to-br from-[#0B1F3A] via-[#081A2F] to-[#06243F] p-8 text-white shadow-[0_30px_100px_rgba(11,31,58,0.22)] sm:p-10 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.35fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center" aria-label="Langia">
              <Image
                src="/images/logo-white.svg"
                alt={copy.logoAlt}
                width={272}
                height={104}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-8 text-white/70">
              {copy.footer.brandLine}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {copy.footer.columns.map((column) => (
              <div key={column.title}>
                <h2 className="font-heading text-sm font-semibold text-white">{column.title}</h2>
                <div className="mt-5 grid gap-3 text-sm text-white/60">
                  {column.links.map((link) => (
                    <Link key={link.href + link.label} href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold text-white">{copy.updates}</h2>
            <div className="mt-5 flex rounded-full border border-white/15 bg-white/10 p-1">
              <input
                aria-label={copy.emailPlaceholder}
                placeholder={copy.emailPlaceholder}
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/45"
              />
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#048EFF] text-white transition hover:bg-[#F3B737]">
                <ArrowIcon />
              </span>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-white">{copy.footer.languageLabel}</p>
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-xl">
                {supportedLanguages.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLanguage(item)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${item === language ? "bg-white text-[#0B1F3A]" : "text-white/65 hover:text-white"}`}
                    aria-pressed={item === language}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          Langia Language Solutions LLC. {copy.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
