"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { localeFromPathname, localizedPath } from "@/lib/language";

type LocalizedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children?: ReactNode;
  };

function localizeHref(href: LinkProps["href"], pathname: string): LinkProps["href"] {
  const language = localeFromPathname(pathname);

  if (!language || typeof href !== "string") return href;
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (localeFromPathname(href)) return href;

  const [pathAndQuery, hash] = href.split("#", 2);
  const localized = localizedPath(language, pathAndQuery || "/");
  return hash === undefined ? localized : `${localized}#${hash}`;
}

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const pathname = usePathname();
  return <Link href={localizeHref(href, pathname)} {...props} />;
}
