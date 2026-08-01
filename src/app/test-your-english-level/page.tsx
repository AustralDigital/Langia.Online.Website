"use client";

import {
  EditorialHeading,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  PageHero,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { pagesContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage } from "@/lib/language";

export default function TestYourEnglishLevelPage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const content = pagesContent[language].levelTest;

  return (
    <>
      <SiteNavbar variant="light" language={language} />
      <main className="min-h-screen bg-white text-[#0B1F3A]">
        <PageHero
          tone="mist"
          className="bg-[radial-gradient(circle_at_88%_18%,rgba(4,142,255,.18),transparent_30%),linear-gradient(135deg,#F3F7FB_0%,#FFFFFF_100%)]"
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.subtitle}
          actions={
            <>
              <MarketingButton href={content.cta.primaryHref}>
                {content.cta.primaryLabel}
              </MarketingButton>
              {content.cta.secondaryHref && content.cta.secondaryLabel ? (
                <MarketingButton href={content.cta.secondaryHref} variant="secondary">
                  {content.cta.secondaryLabel}
                </MarketingButton>
              ) : null}
            </>
          }
        />

        <MarketingSection tone="white">
          <SiteContainer>
            <ol className="grid border-t border-[#0B1F3A]/18 lg:grid-cols-3">
              {content.blocks.map((block, index) => (
                <li
                  key={block.title}
                  className="border-b border-[#0B1F3A]/18 py-9 sm:py-11 lg:border-r lg:px-10 lg:first:pl-0 lg:last:border-r-0"
                >
                  <span className="text-sm font-semibold tabular-nums text-[var(--langia-blue-ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <EditorialHeading as="h2" className="mt-8 max-w-[17ch]" size="card">
                    {block.title}
                  </EditorialHeading>
                  <p className="mt-5 max-w-sm text-base leading-8 text-[#52657A]">{block.body}</p>
                </li>
              ))}
            </ol>
          </SiteContainer>
        </MarketingSection>

        <FinalCTA
          title={content.cta.title}
          body={content.cta.body}
          primary={{ href: content.cta.primaryHref, label: content.cta.primaryLabel }}
          secondary={
            content.cta.secondaryHref && content.cta.secondaryLabel
              ? { href: content.cta.secondaryHref, label: content.cta.secondaryLabel }
              : undefined
          }
        />
      </main>
      <SiteFooter language={language} />
    </>
  );
}
