"use client";

import Image from "next/image";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";

import { SiteFooter } from "@/components/site/SiteFooter";
import {
  ArrowIcon,
  EditorialHeading,
  FeatureList,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  MediaFrame,
  PageHero,
  SectionEyebrow,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { pagesContent, type ProgramCardContent, type ProgramsOverviewContent } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";
import {
  PROGRAM_IMAGE_PATHS,
  ResponsiveKidsImage,
} from "./ProgramRoutePrimitives";

const programImages: Partial<Record<string, { src: string; position: string }>> = {
  "/programs/langia-online": { src: PROGRAM_IMAGE_PATHS.langiaOnline, position: "object-center" },
  "/programs/talkin-club": { src: PROGRAM_IMAGE_PATHS.talkinClub, position: "object-center" },
  "/programs/test-prep": { src: PROGRAM_IMAGE_PATHS.testPrep, position: "object-center" },
  "/programs/langia-4-kids-n-teens": { src: PROGRAM_IMAGE_PATHS.kidsDesktop, position: "object-center" },
  "/corporate": { src: PROGRAM_IMAGE_PATHS.corporate, position: "object-center" },
};

function getProgramsOverview(language: SiteLanguage): ProgramsOverviewContent {
  const content = pagesContent[language].programs.overview ?? pagesContent.es.programs.overview;

  if (!content) {
    throw new Error("Programs overview content is missing.");
  }

  return content;
}

function ProgramJourneyCard({ ctaLabel, item, index }: { ctaLabel: string; item: ProgramCardContent; index: number }) {
  const media = programImages[item.href];
  if (!media) return null;

  return (
    <article>
      <Link className="program-journey group" href={item.href}>
        <div className="program-journey-copy">
          <SectionEyebrow>{item.audience}</SectionEyebrow>
          <span className="mt-8 text-xs font-semibold tabular-nums text-[var(--langia-blue-ink)]">{String(index + 1).padStart(2, "0")}</span>
          <EditorialHeading as="h2" className="mt-5 max-w-[16ch]" size="secondary">{item.name}</EditorialHeading>
          <p className="mt-6 max-w-lg text-base leading-8 text-[var(--langia-muted)]">{item.description}</p>
          <ul className="mt-7 w-full max-w-lg divide-y divide-[var(--langia-border)] border-y border-[var(--langia-border)]">
            {item.highlights.map((highlight) => <li key={highlight} className="py-3 text-sm font-medium">{highlight}</li>)}
          </ul>
          <span className="home-text-action mt-7 !text-[var(--langia-blue-ink)]">{ctaLabel}<ArrowIcon /></span>
        </div>
        <div className="program-journey-media">
          {item.href === "/programs/langia-4-kids-n-teens" ? <ResponsiveKidsImage alt="" /> : <Image src={media.src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />}
        </div>
      </Link>
    </article>
  );
}

function ComparisonSection({ content }: { content: ProgramsOverviewContent }) {
  const headers = content.comparison.headers;

  return (
    <MarketingSection id="comparison" tone="mist">
      <SiteContainer>
        <SectionHeader
          body={content.comparison.body}
          eyebrow={content.comparison.eyebrow}
          title={content.comparison.title}
        />

        <div className="mt-14 hidden overflow-hidden rounded-[1.5rem] border border-[#0B1F3A]/14 bg-white shadow-[0_18px_55px_rgba(11,31,58,0.06)] xl:block">
          <table className="w-full border-collapse text-left text-base">
            <thead className="border-b border-[var(--langia-signal)] bg-[var(--langia-signal)] text-sm font-semibold uppercase tracking-[0.1em] text-white">
              <tr>
                <th className="px-5 py-5">{headers.program}</th>
                <th className="px-5 py-5">{headers.bestFor}</th>
                <th className="px-5 py-5">{headers.format}</th>
                <th className="px-5 py-5">{headers.focus}</th>
                <th className="px-5 py-5">{headers.practice}</th>
                <th className="px-5 py-5">{headers.nextStep}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0B1F3A]/12">
              {content.comparison.rows.map((row) => (
                <tr key={row.program} className="align-top">
                  <th className="px-5 py-6 font-heading text-lg font-semibold text-[#0B1F3A]">{row.program}</th>
                  <td className="px-5 py-6 leading-7 text-[#52657A]">{row.bestFor}</td>
                  <td className="px-5 py-6 leading-7 text-[#52657A]">{row.format}</td>
                  <td className="px-5 py-6 leading-7 text-[#52657A]">{row.focus}</td>
                  <td className="px-5 py-6 leading-7 text-[#52657A]">{row.practice}</td>
                  <td className="px-5 py-6">
                    <Link className="inline-flex items-center gap-2 font-semibold text-[#0B1F3A] hover:text-[#0068B8]" href={row.href}>
                      {row.nextStep}
                      <ArrowIcon />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:hidden">
          {content.comparison.rows.map((row) => (
            <article key={row.program} className="border-t border-[#0B1F3A]/18 pt-6">
              <h3 className="font-heading text-2xl font-medium tracking-[-0.03em] text-[#0B1F3A]">{row.program}</h3>
              <dl className="mt-6 grid gap-x-6 sm:grid-cols-2">
                {[
                  [headers.bestFor, row.bestFor],
                  [headers.format, row.format],
                  [headers.focus, row.focus],
                  [headers.practice, row.practice],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-[#0B1F3A]/12 py-4">
                    <dt className="text-sm font-semibold uppercase tracking-[0.1em] text-[#52657A]">{label}</dt>
                    <dd className="mt-2 text-base leading-7 text-[#0B1F3A]">{value}</dd>
                  </div>
                ))}
              </dl>
              <Link className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-[#0B1F3A] hover:text-[#0068B8]" href={row.href}>
                {row.nextStep}
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function FinderSection({ content }: { content: ProgramsOverviewContent }) {
  return (
    <MarketingSection tone="mist">
      <SiteContainer>
        <div className="rounded-[2rem] bg-white p-7 sm:p-10 lg:p-14">
          <div className="relative grid gap-14 xl:grid-cols-[0.82fr_1.18fr] xl:items-end xl:gap-24">
            <div>
              <SectionHeader body={content.finder.body} eyebrow={content.finder.eyebrow} title={content.finder.title} />
              <div className="mt-9">
                <MarketingButton href={content.finder.href}>{content.finder.cta}</MarketingButton>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-[var(--langia-mist)] px-6 py-3 sm:px-8">
              <FeatureList items={content.programCards.slice(0, 4).map((item) => item.name)} />
            </div>
          </div>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function CorporateSection({ content }: { content: ProgramsOverviewContent }) {
  const corporateCard = content.programCards[4];

  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-16 xl:grid-cols-[0.86fr_1.14fr] xl:items-center xl:gap-24">
          <div>
            <SectionHeader body={content.corporate.body} eyebrow={content.corporate.eyebrow} title={content.corporate.title} />
            <div className="mt-10 border-t border-[#0B1F3A]/16 pt-7">
              <SectionEyebrow>{corporateCard.audience}</SectionEyebrow>
              <EditorialHeading as="h3" className="mt-5" size="card">
                {corporateCard.name}
              </EditorialHeading>
              <p className="mt-4 max-w-xl text-base leading-8 text-[#52657A]">{corporateCard.description}</p>
              <div className="mt-6">
                <FeatureList items={corporateCard.highlights} />
              </div>
            </div>
            <div className="mt-9">
              <MarketingButton href={content.corporate.href}>{content.corporate.cta}</MarketingButton>
            </div>
          </div>
          <MediaFrame
            alt=""
            aspectClassName="aspect-[4/3]"

            imageClassName="object-cover object-center"
            sizes="(min-width: 1280px) 55vw, 100vw"
            src={PROGRAM_IMAGE_PATHS.corporate}
          >
            <span
              aria-hidden="true"
              className="absolute bottom-5 left-5 h-2.5 w-16 rounded-full bg-[#048EFF]"
            />
          </MediaFrame>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

export function ProgramsOverviewClient() {
  const { language } = useSiteLanguage(defaultLanguage);
  const content = getProgramsOverview(language);
  const individualPrograms = content.programCards.slice(0, 4);

  return (
    <main className="langia-page min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="overlay" language={language} />

      <PageHero
        actions={
          <>
            <MarketingButton href="#comparison">{content.hero.primaryCta}</MarketingButton>
            <MarketingButton href={content.hero.secondaryHref} variant="inverse">
              {content.hero.secondaryCta}
            </MarketingButton>
          </>
        }
        body={content.hero.body}
        eyebrow={content.hero.eyebrow}
        image={{ src: "/images/marketing-2026/home/hero-carousel-ferry-v3.png", alt: "" }}
        facts={individualPrograms.map((item) => item.name)}
        title={content.hero.title}
      />

      <MarketingSection tone="white">
        <SiteContainer>
          <div className="grid gap-6">
            {individualPrograms.map((item, index) => <ProgramJourneyCard key={item.href} item={item} index={index} ctaLabel={content.cardCtaLabel} />)}
          </div>
        </SiteContainer>
      </MarketingSection>

      <ComparisonSection content={content} />
      <FinderSection content={content} />
      <CorporateSection content={content} />

      <FinalCTA
        body={content.finalCta.body}
        primary={{ href: content.finalCta.primaryHref, label: content.finalCta.primaryCta }}
        secondary={{ href: content.finalCta.secondaryHref, label: content.finalCta.secondaryCta }}
        title={content.finalCta.title}
      />

      <SiteFooter />
    </main>
  );
}
