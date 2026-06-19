"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LOGIN_URL, navigationContent } from "@/content/navigation";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";
import { siteButtonClass } from "@/components/site/buttonStyles";

type SiteNavbarProps = {
  variant?: "dark" | "light";
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
  const { language: storedLanguage } = useSiteLanguage(defaultLanguage);
  const language = languageProp ?? storedLanguage;
  const copy = navigationContent[language];
  const dark = variant === "dark";
  const logo = dark ? "/images/logo-white.svg" : "/images/logo-original.svg";
  const navLinks = [
    { label: copy.programs, href: "/programs", menu: copy.programsMenu },
    { label: copy.about, href: "/about", menu: copy.aboutMenu },
    { label: copy.resources, href: "/blog" },
    { label: copy.contact, href: "/contact" },
  ];

  const shellClass = dark
    ? "absolute inset-x-8 top-4 z-20 sm:inset-x-12 sm:top-6 lg:inset-x-16 xl:inset-x-20"
    : "sticky top-0 z-40 bg-transparent px-4 pb-3 pt-4 shadow-none sm:px-6 sm:pt-5 lg:px-10";

  const navClass = dark
    ? "mx-auto flex max-w-[1180px] items-center justify-between gap-4"
    : "mx-auto flex max-w-[1180px] items-center justify-between gap-4 overflow-visible rounded-[2rem] border border-[#E4EDF7]/90 bg-white/85 px-4 py-3 shadow-[0_18px_55px_rgba(11,31,58,0.10)] backdrop-blur-xl sm:px-5 lg:rounded-full lg:px-4";

  const desktopClass = dark
    ? "hidden min-h-16 items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 shadow-[0_18px_48px_rgba(0,0,0,0.14)] backdrop-blur-2xl lg:flex"
    : "hidden min-h-12 items-center gap-2 lg:flex";

  const linkClass = dark
    ? "rounded-full px-4 py-2 text-sm font-medium !text-white transition hover:bg-white/10 hover:!text-white"
    : "rounded-full px-4 py-2 text-sm font-medium text-[#0B1F3A] transition hover:bg-[#F3F7FB] hover:text-[#048EFF]";

  const loginClass = dark
    ? "inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/15 px-4 text-sm font-semibold !text-white transition hover:bg-white/20"
    : "inline-flex min-h-11 items-center justify-center rounded-full border border-[#D8E6F4] bg-white px-4 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#D7E6F5] hover:bg-[#F3F7FB] hover:text-[#0B1F3A]";

  const menuPanelClass = dark
    ? "border-white/20 bg-[#0B1F3A]/92 shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
    : "border-[#E4EDF7] bg-white shadow-[0_18px_48px_rgba(11,31,58,0.12)]";

  return (
    <header className={shellClass}>
      <nav className={navClass}>
        <Link href="/" className="flex items-center" aria-label={copy.logoAlt}>
          <Image
            src={logo}
            alt={dark ? copy.logoAlt : "Langia"}
            width={272}
            height={104}
            className={dark ? "h-24 w-auto" : "h-16 w-auto sm:h-20"}
            priority={dark}
          />
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
                    <div className={`mb-3 border-b pb-3 ${dark ? "border-white/10" : "border-[#E4EDF7]"}`}>
                      <p className={`font-heading text-sm font-semibold ${dark ? "!text-white" : "text-[#0B1F3A]"}`}>{link.menu.heading}</p>
                      <p className={`mt-1 text-xs leading-5 ${dark ? "!text-white/60" : "text-[#6B7A90]"}`}>{link.menu.description}</p>
                    </div>
                    <div className="grid gap-1">
                      {link.menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`rounded-2xl px-3 py-2.5 transition ${dark ? "hover:bg-white/10" : "hover:bg-[#F3F7FB]"}`}
                        >
                          <span className={`block text-sm font-semibold ${dark ? "!text-white/80 group-hover:!text-white" : "text-[#0B1F3A]"}`}>{item.title}</span>
                          <span className={`mt-1 block text-xs leading-5 ${dark ? "!text-white/55" : "text-[#6B7A90]"}`}>{item.description}</span>
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
            className={siteButtonClass({ variant: dark ? "dark" : "primary" })}
          >
            {copy.primaryCta}
            <Icon name="arrow" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_12px_28px_rgba(0,0,0,0.1)] backdrop-blur-xl lg:hidden ${dark ? "border-white/20 bg-white/12 text-white" : "border-[#E4EDF7] bg-white text-[#0B1F3A]"}`}
          aria-label={open ? copy.closeMenuLabel : copy.mobileMenuLabel}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open ? (
        <div className={`mx-auto mt-3 max-w-[1180px] rounded-[1.75rem] border p-4 backdrop-blur-2xl lg:hidden ${menuPanelClass}`}>
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <div key={link.label} className="grid gap-1">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-3 py-3 text-sm font-semibold ${dark ? "!text-white hover:bg-white/10" : "text-[#0B1F3A] hover:bg-[#F3F7FB]"}`}
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
                        className={`rounded-2xl px-3 py-2 text-sm font-semibold ${dark ? "!text-white/70 hover:bg-white/10 hover:!text-white" : "text-[#42526A] hover:bg-[#F3F7FB] hover:text-[#048EFF]"}`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <a href={LOGIN_URL} onClick={() => setOpen(false)} className={`rounded-2xl px-3 py-3 text-sm font-semibold ${dark ? "!text-white hover:bg-white/10" : "text-[#0B1F3A] hover:bg-[#F3F7FB]"}`}>
              {copy.login}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={siteButtonClass({ variant: dark ? "dark" : "primary" })}
            >
              {copy.primaryCta}
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
