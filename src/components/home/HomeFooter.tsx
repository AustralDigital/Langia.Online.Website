import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { LOGIN_URL, navigationContent } from "@/content/navigation";
import type { PremiumHomeCopy } from "@/content/premium-homepage";
import {
  localeFromPathname,
  localizedPath,
  supportedLanguages,
  type SiteLanguage,
} from "@/lib/language";
import { HomeAction, Label } from "./PremiumPrimitives";

export function HomeFooter({
  copy,
  language,
  onLanguageChange,
}: {
  copy: PremiumHomeCopy["footer"];
  language: SiteLanguage;
  onLanguageChange: (language: SiteLanguage) => void;
}) {
  const navigation = navigationContent[language];
  const pathname = usePathname();
  const router = useRouter();
  function changeLanguage(next: SiteLanguage) {
    onLanguageChange(next);
    const current = localeFromPathname(pathname);
    const rest = current
      ? pathname.replace(new RegExp(`^/${current}(?=/|$)`, "u"), "") || "/"
      : "/";
    router.push(localizedPath(next, rest));
  }
  return (
    <footer className="premium-footer">
      <div className="premium-container">
        <div className="premium-footer-top">
          <div>
            <Label>Langia Language Solutions</Label>
            <h2>{copy.title}</h2>
            <HomeAction href="/contact">{copy.cta}</HomeAction>
          </div>
          <div className="premium-footer-links">
            {navigation.footer.columns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((link) => (
                  <LocalizedLink key={link.href} href={link.href}>
                    {link.label}
                  </LocalizedLink>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="premium-footer-language">
          <p>{copy.brand}</p>
          <div role="group" aria-label={copy.language}>
            {supportedLanguages.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={language === item}
                onClick={() => changeLanguage(item)}
                lang={item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a href={LOGIN_URL}>{navigation.login}</a>
        </div>
        <div className="premium-footer-brand">
          <Image
            src="/images/logo-white.svg"
            alt="Langia"
            width={1200}
            height={500}
            sizes="90vw"
          />
        </div>
        <div className="premium-footer-bottom">
          <p>{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
