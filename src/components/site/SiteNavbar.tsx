"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import { LOGIN_URL, navigationContent } from "@/content/navigation";
import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";
import { siteButtonClass } from "@/components/site/buttonStyles";

type SiteNavbarProps = {
  variant?: "overlay" | "light";
  language?: SiteLanguage;
};

function Icon({ name }: { name: "menu" | "close" | "arrow" }) {
  const common = {
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg {...common}>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function SiteNavbar({
  variant = "light",
  language: languageProp,
}: SiteNavbarProps) {
  const [open, setOpen] = useState(false);
  const mobilePanelId = useId();
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const { language: storedLanguage } = useSiteLanguage(defaultLanguage);
  const language = languageProp ?? storedLanguage;
  const copy = navigationContent[language];
  const overlay = variant === "overlay";
  const navLinks = [
    { label: copy.programs, href: "/programs", menu: copy.programsMenu },
    { label: copy.about, href: "/about", menu: copy.aboutMenu },
    { label: copy.resources, href: "/blog" },
    { label: copy.contact, href: "/contact" },
  ];

  const shellClass = overlay
    ? "absolute inset-x-3 top-3 z-30 sm:inset-x-5 sm:top-5 lg:inset-x-8"
    : "pointer-events-none fixed inset-x-3 top-3 z-40 sm:inset-x-5 sm:top-5 lg:inset-x-8";

  const navClass = `pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between gap-3 overflow-visible rounded-[1.5rem] border bg-white/90 px-4 py-2.5 shadow-[0_18px_48px_rgba(11,31,58,0.11)] backdrop-blur-2xl sm:rounded-full sm:px-5 sm:py-3 xl:px-6 ${
    overlay ? "border-white/75" : "border-[var(--langia-border)]/90"
  }`;
  const desktopClass = "hidden min-h-14 items-center gap-2.5 xl:flex";
  const linkClass =
    "inline-flex min-h-12 items-center rounded-full px-5 py-2.5 text-[0.95rem] font-medium !text-[var(--langia-navy)] transition hover:bg-[var(--langia-mist)] hover:!text-[var(--langia-blue-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/35";
  const loginClass =
    "inline-flex min-h-14 items-center justify-center rounded-full border border-[var(--langia-border)] bg-white px-5 text-[0.95rem] font-semibold text-[var(--langia-navy)] transition hover:border-[var(--langia-signal)]/35 hover:bg-[var(--langia-mist)] hover:text-[var(--langia-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/35";
  const menuPanelClass =
    "border-[var(--langia-border)] bg-white/96 text-[var(--langia-navy)] shadow-[0_18px_48px_rgba(11,31,58,0.12)]";
  const mobileLoginClass =
    "border-[var(--langia-border)] bg-white text-[var(--langia-navy)] hover:border-[var(--langia-signal)]/35 hover:bg-[var(--langia-mist)] hover:text-[var(--langia-navy)] focus-visible:ring-[var(--langia-signal)]/40 focus-visible:ring-offset-white";

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        menuToggleRef.current?.focus();
      }

      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const previousBodyOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      mobilePanelRef.current
        ?.querySelector<HTMLElement>('a[href], button:not([disabled])')
        ?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    }

    function handleDesktopChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setOpen(false);
      }
    }

    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [open]);

  return (
    <header className={shellClass}>
      <nav className={navClass}>
        <Link
          href="/"
          className="flex min-h-12 shrink-0 items-center focus-visible:rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/40 sm:min-h-14"
          aria-label={copy.logoAlt}
        >
          <span className="relative block h-12 w-32 overflow-hidden sm:h-14 sm:w-36">
            <Image
              src="/images/logo-original.svg"
              alt={copy.logoAlt}
              width={272}
              height={104}
              className="absolute left-1/2 top-1/2 h-[5.125rem] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-24"
              priority
            />
          </span>
        </Link>

        <div className={desktopClass}>
          <div className="flex items-center gap-1 px-2">
            {navLinks.map((link) => (
              <div key={link.label} className="group relative">
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
                {link.menu ? (
                  <div className={`invisible absolute left-0 top-full z-30 mt-3 w-[22rem] rounded-[1.5rem] border p-4 opacity-0 backdrop-blur-2xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${menuPanelClass}`}>
                    <div className="mb-3 border-b border-[var(--langia-border)] pb-3">
                      <p className="font-heading text-sm font-semibold text-[var(--langia-navy)]">
                        {link.menu.heading}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[var(--langia-muted)]">
                        {link.menu.description}
                      </p>
                    </div>
                    <div className="grid gap-1">
                      {link.menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-2xl px-3 py-2.5 transition hover:bg-[var(--langia-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/35"
                        >
                          <span className="block text-sm font-semibold text-[var(--langia-navy)]">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-[var(--langia-muted)]">
                            {item.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <a href={LOGIN_URL} className={loginClass}>
            {copy.login}
          </a>
          <Link
            href="/contact"
            className={siteButtonClass({
              variant: "navigation",
              size: "lg",
            })}
          >
            {copy.primaryCta}
            <Icon name="arrow" />
          </Link>
        </div>

        <button
          ref={menuToggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--langia-border)] bg-white text-[var(--langia-navy)] shadow-[0_12px_28px_rgba(11,31,58,0.1)] backdrop-blur-xl transition hover:bg-[var(--langia-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/40 sm:h-14 sm:w-14 xl:hidden"
          aria-label={open ? copy.closeMenuLabel : copy.mobileMenuLabel}
          aria-controls={mobilePanelId}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open ? (
        <div
          ref={mobilePanelRef}
          id={mobilePanelId}
          className={`pointer-events-auto mx-auto mt-3 flex max-h-[calc(100dvh-7rem)] max-w-[1440px] flex-col rounded-[1.75rem] border p-4 backdrop-blur-2xl xl:hidden ${menuPanelClass}`}
        >
          <div className="grid min-h-0 gap-2 overflow-y-auto overscroll-contain pr-1">
            {navLinks.map((link) => (
              <div key={link.label} className="grid gap-1">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-sm font-semibold text-[var(--langia-navy)] hover:bg-[var(--langia-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/35"
                >
                  {link.label}
                </Link>
                {link.menu ? (
                  <div className="grid gap-1 pl-3">
                    {link.menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="min-h-11 rounded-2xl px-3 py-2 text-sm font-semibold text-[var(--langia-muted)] hover:bg-[var(--langia-mist)] hover:text-[var(--langia-blue-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]/35"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-3 grid shrink-0 gap-3 border-t border-[var(--langia-border)] pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={siteButtonClass({
                variant: "navigation",
                className: "w-full",
              })}
            >
              {copy.primaryCta}
              <Icon name="arrow" />
            </Link>
            <a
              href={LOGIN_URL}
              onClick={() => setOpen(false)}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full border px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${mobileLoginClass}`}
            >
              {copy.login}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
