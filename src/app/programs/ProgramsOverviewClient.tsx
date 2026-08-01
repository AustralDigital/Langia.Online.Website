"use client";

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

function OverviewHeroMedia({ items }: { items: readonly ProgramCardContent[] }) {
  const visibleItems = items.slice(0, 3);

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {visibleItems.map((item, index) => {
        const media = programImages[item.href];

        if (!media) {
          return null;
        }

        return (
          <MediaFrame
            alt=""
            aspectClassName="aspect-[4/3]"
            className={`rounded-[1.5rem] border border-[#0B1F3A]/10 shadow-[0_18px_50px_rgba(11,31,58,0.08)] ${
              index === 0 ? "col-span-2" : ""
            }`}
            imageClassName={`object-cover ${media.position}`}
            key={item.href}
            priority={index === 0}
            sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
            src={media.src}
          >
            <p className="absolute bottom-3 left-3 rounded-full border border-white/70 bg-white/90 px-3.5 py-2 font-heading text-xs font-semibold text-[#0B1F3A] shadow-sm backdrop-blur-md sm:bottom-4 sm:left-4 sm:text-sm">
              {item.name}
            </p>
          </MediaFrame>
        );
      })}
    </div>
  );
}

function ProgramJourneyCard({
  ctaLabel,
  dominant = false,
  item,
}: {
  ctaLabel: string;
  dominant?: boolean;
  item: ProgramCardContent;
}) {
  const media = programImages[item.href];

  if (!media) {
    return null;
  }

  return (
    <article>
      <Link
        className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#0B1F3A]/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#048EFF] focus-visible:ring-offset-4 ${
          dominant ? "bg-[linear-gradient(145deg,#FFFFFF_0%,#EAF6FF_100%)]" : "bg-white"
        }`}
        href={item.href}
      >
        <MediaFrame
          alt=""
          aspectClassName="aspect-[4/3]"
          className="rounded-none"
          imageClassName={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${media.position}`}
          sizes={dominant ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
          src={media.src}
        />
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0068B8]">{item.audience}</p>
          <EditorialHeading as="h2" className="mt-4" size="card">
            {item.name}
          </EditorialHeading>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#52657A]">{item.description}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="border-t border-[#0B1F3A]/14 pt-3 text-base font-semibold leading-6 text-[#0B1F3A]">
                {highlight}
              </li>
            ))}
          </ul>
          <span className="mt-auto flex items-center gap-3 pt-8 text-base font-semibold text-[#0B1F3A]">
            {ctaLabel}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}

function KidsJourneyCard({ ctaLabel, item }: { ctaLabel: string; item: ProgramCardContent }) {
  return (
    <article className="mt-6">
      <Link
        className="group grid overflow-hidden rounded-[2rem] border border-[#F3B737]/35 bg-[linear-gradient(120deg,#FFFFFF_0%,#FFF9EA_100%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#048EFF] focus-visible:ring-offset-4 lg:grid-cols-[1.08fr_0.92fr]"
        href={item.href}
      >
        <div className="relative aspect-[4/5] min-h-0 overflow-hidden bg-[#FFF5D8] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
          <ResponsiveKidsImage
            alt=""
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#765200]">{item.audience}</p>
          <EditorialHeading as="h2" className="mt-5" size="secondary">
            {item.name}
          </EditorialHeading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52657A]">{item.description}</p>
          <div className="mt-7 grid gap-x-6 sm:grid-cols-3">
            {item.highlights.map((highlight) => (
              <p key={highlight} className="border-t border-[#0B1F3A]/16 py-4 text-base font-semibold text-[#0B1F3A]">
                {highlight}
              </p>
            ))}
          </div>
          <span className="mt-6 flex items-center gap-3 text-base font-semibold text-[#0B1F3A]">
            {ctaLabel}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
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
        <div className="relative overflow-hidden rounded-[2rem] border border-[#BBDCF7] bg-[linear-gradient(135deg,#FFFFFF_0%,#E8F5FF_100%)] p-7 shadow-[0_20px_65px_rgba(11,31,58,0.07)] sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[3.5rem] border-[#048EFF]/10"
          />
          <div className="relative grid gap-14 xl:grid-cols-[0.82fr_1.18fr] xl:items-end xl:gap-24">
            <div>
              <SectionHeader body={content.finder.body} eyebrow={content.finder.eyebrow} title={content.finder.title} />
              <div className="mt-9">
                <MarketingButton href={content.finder.href}>{content.finder.cta}</MarketingButton>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-[#CFE5FA] bg-white/85 px-6 py-3 shadow-sm backdrop-blur-sm sm:px-8">
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
            className="border border-[#BBDCF7] shadow-[0_24px_70px_rgba(11,31,58,0.10)]"
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
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="light" language={language} />

      <PageHero
        actions={
          <>
            <MarketingButton href="#comparison">{content.hero.primaryCta}</MarketingButton>
            <MarketingButton href={content.hero.secondaryHref} variant="secondary">
              {content.hero.secondaryCta}
            </MarketingButton>
          </>
        }
        body={content.hero.body}
        eyebrow={content.hero.eyebrow}
        media={<OverviewHeroMedia items={content.programCards} />}
        title={content.hero.title}
      />

      <MarketingSection tone="white">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
            <ProgramJourneyCard ctaLabel={content.cardCtaLabel} dominant item={individualPrograms[0]} />
            <div className="grid gap-6">
              {individualPrograms.slice(1, 3).map((item) => (
                <ProgramJourneyCard ctaLabel={content.cardCtaLabel} item={item} key={item.href} />
              ))}
            </div>
          </div>
          <KidsJourneyCard ctaLabel={content.cardCtaLabel} item={individualPrograms[3]} />
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
