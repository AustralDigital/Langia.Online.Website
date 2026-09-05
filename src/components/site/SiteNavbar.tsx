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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const desktopMenuId = useId();
  const mobilePanelId = useId();
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const { language: storedLanguage } = useSiteLanguage(defaultLanguage);
  const language = languageProp ?? storedLanguage;
  const copy = navigationContent[language];
  const isOverlay = variant === "overlay";
  const navLinks = [
    { label: copy.programs, href: "/programs", menu: copy.programsMenu },
    { label: copy.about, href: "/about", menu: copy.aboutMenu },
    { label: copy.resources, href: "/blog" },
    { label: copy.contact, href: "/contact" },
  ];

  const shellClass = isOverlay
    ? "pointer-events-none fixed left-0 right-0 top-3 z-[80] w-full px-3 sm:top-5 sm:px-5 xl:top-7 xl:px-[30px]"
    : `pointer-events-none fixed left-1/2 z-[80] w-[calc(100%-1.5rem)] -translate-x-1/2 transition-[top] duration-700 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[calc(100%-2.5rem)] xl:w-auto ${scrolled ? "top-2 sm:top-3" : "top-3 sm:top-5"}`;
  const floatingSurface = scrolled
    ? "border-[var(--langia-border)] shadow-[0_14px_38px_rgba(11,31,58,.11)]"
    : "border-white/75 shadow-[0_18px_48px_rgba(11,31,58,.09)]";
  const navClass = isOverlay
    ? `pointer-events-auto mx-auto flex w-full items-center justify-between gap-3 overflow-visible rounded-full border bg-white/94 px-3 py-2 backdrop-blur-2xl transition-[border-color,box-shadow,background-color] duration-700 sm:px-4 xl:mx-0 xl:max-w-none xl:rounded-none xl:border-transparent xl:bg-transparent xl:p-0 xl:shadow-none xl:backdrop-blur-none ${floatingSurface}`
    : `pointer-events-auto mx-auto flex w-full items-center justify-between gap-3 overflow-visible rounded-full border bg-white/94 px-3 py-2 backdrop-blur-2xl transition-[border-color,box-shadow,background-color] duration-700 sm:px-4 xl:w-max ${floatingSurface}`;
  const primaryClusterClass = isOverlay
    ? `contents xl:flex xl:w-max xl:items-center xl:gap-1 xl:rounded-full xl:border xl:bg-white/94 xl:px-2 xl:py-1.5 xl:backdrop-blur-2xl ${floatingSurface}`
    : "contents";
  const desktopClass = `hidden items-center xl:flex ${isOverlay ? "min-h-11" : "min-h-14"}`;
  const linkClass = `inline-flex min-h-12 items-center rounded-full px-5 py-2.5 text-[0.95rem] font-medium !text-[var(--langia-navy)] transition-colors duration-200 hover:bg-[var(--langia-mist)] hover:!text-[var(--langia-blue-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)] ${isOverlay ? "xl:min-h-11 xl:px-4 xl:py-2 xl:text-[0.875rem]" : ""}`;
  const loginClass = `inline-flex min-h-12 items-center justify-center rounded-full px-5 text-[0.9rem] font-semibold !text-[var(--langia-navy)] transition-colors duration-200 hover:bg-[var(--langia-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)] ${isOverlay ? "xl:min-h-11 xl:px-4 xl:text-[0.875rem]" : ""}`;
  const desktopActionsClass = isOverlay
    ? `hidden items-center gap-1.5 rounded-full border bg-white/94 p-1.5 backdrop-blur-2xl xl:flex ${floatingSurface}`
    : "hidden items-center gap-1.5 xl:flex";
  const menuPanelClass =
    "border-[var(--langia-border)] bg-white text-[var(--langia-navy)] shadow-[0_18px_48px_rgba(11,31,58,0.12)]";
  const mobileLoginClass =
    "border-[var(--langia-border)] bg-white text-[var(--langia-navy)] hover:border-[var(--langia-signal)]/35 hover:bg-[var(--langia-mist)] hover:text-[var(--langia-navy)] focus-visible:ring-[var(--langia-signal)] focus-visible:ring-offset-white";

  useEffect(() => {
    let frame = 0;
    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => setScrolled(window.scrollY > 72));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current && menuToggleRef.current?.offsetParent !== null) {
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
        return;
      }

      if (event.key === "Tab") {
        const panelLinks = Array.from(
          mobilePanelRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex="0"]',
          ) ?? [],
        );
        const focusableElements = [menuToggleRef.current, ...panelLinks].filter(
          (element): element is HTMLElement => element !== null,
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement;

        if (!focusableElements.includes(activeElement as HTMLElement)) {
          event.preventDefault();
          (event.shiftKey ? lastElement : firstElement)?.focus();
        } else if (event.shiftKey && activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
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
    <header className={shellClass} data-variant={variant}>
      <nav className={navClass}>
        <div data-navbar-primary className={primaryClusterClass}>
          <Link
            href="/"
            className={`flex min-h-12 shrink-0 items-center focus-visible:rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)] sm:min-h-14 ${isOverlay ? "xl:min-h-11" : ""}`}
            aria-label={copy.logoAlt}
          >
            <span className={`block h-12 w-32 shrink-0 sm:h-14 sm:w-36 ${isOverlay ? "xl:h-11 xl:w-28" : ""}`}>
              <Image
                src="/images/logo-lockup.svg"
                alt={copy.logoAlt}
                width={4160}
                height={1908}
                className="h-full w-full object-contain"
                priority
              />
            </span>
          </Link>

          <div className={desktopClass}>
            <div className="flex items-center gap-1 px-2">
              {navLinks.map((link, index) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.menu ? link.href : null)}
                  onMouseLeave={(event) => {
                    if (!event.currentTarget.contains(document.activeElement)) {
                      setOpenDropdown(null);
                    }
                  }}
                  onFocus={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setOpenDropdown(link.menu ? link.href : null);
                    }
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setOpenDropdown(null);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape" && openDropdown === link.href) {
                      event.preventDefault();
                      event.currentTarget.querySelector<HTMLAnchorElement>("a[href]")?.focus();
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className={linkClass}
                    aria-expanded={link.menu ? openDropdown === link.href : undefined}
                    aria-controls={link.menu ? `${desktopMenuId}-${index}` : undefined}
                  >
                    {link.label}
                  </Link>
                  {link.menu ? (
                    <div
                      id={`${desktopMenuId}-${index}`}
                      inert={openDropdown !== link.href}
                      className={`absolute left-0 top-full z-30 w-[22rem] pt-3 ${openDropdown === link.href ? "visible" : "invisible"}`}
                    >
                      <div className={`rounded-[1.5rem] border p-4 backdrop-blur-2xl ${menuPanelClass}`}>
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
                              className="rounded-2xl px-3 py-2.5 transition-colors duration-200 hover:bg-[var(--langia-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]"
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
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-navbar-actions className={desktopActionsClass}>
          <a href={LOGIN_URL} className={loginClass}>
            {copy.login}
          </a>
          <Link
            href="/contact"
            className={siteButtonClass({
              variant: "navigation",
              size: "md",
              className: `min-h-12 px-5 shadow-none ${isOverlay ? "xl:min-h-11 xl:px-4" : ""}`,
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
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[var(--langia-border)] bg-white text-[var(--langia-navy)] shadow-[0_12px_28px_rgba(11,31,58,0.1)] backdrop-blur-xl transition-colors duration-200 hover:bg-[var(--langia-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)] sm:h-14 sm:w-14 xl:hidden"
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
          className={`pointer-events-auto mx-auto mt-3 max-h-[calc(100dvh-7rem)] max-w-[1440px] overflow-y-auto overscroll-contain rounded-[1.75rem] border p-4 backdrop-blur-2xl xl:hidden ${menuPanelClass}`}
        >
          <div className="grid gap-2 pr-1">
            {navLinks.map((link) => (
              <div key={link.label} className="grid gap-1">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-sm font-semibold text-[var(--langia-navy)] hover:bg-[var(--langia-mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]"
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
                        className="min-h-11 rounded-2xl px-3 py-2 text-sm font-semibold text-[var(--langia-muted)] hover:bg-[var(--langia-mist)] hover:text-[var(--langia-blue-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--langia-signal)]"
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
