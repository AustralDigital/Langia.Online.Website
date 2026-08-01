"use client";

import {
  EditorialHeading,
  FeatureList,
  FinalCTA,
  MarketingButton,
  MarketingSection,
  MediaFrame,
  PageHero,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { pagesContent, type AboutPageContent, type PageBlock } from "@/content/pages";
import { useSiteLanguage } from "@/hooks/useSiteLanguage";
import { defaultLanguage, type SiteLanguage } from "@/lib/language";

function getContent(language: SiteLanguage): AboutPageContent {
  const content = pagesContent[language].about.aboutPage;

  if (!content) {
    throw new Error("About page content is missing.");
  }

  return content;
}

const aboutImageAlt: Record<SiteLanguage, string> = {
  es: "Colaboración humana en el diseño de una experiencia de aprendizaje de idiomas",
  pt: "Colaboração humana no desenho de uma experiência de aprendizagem de idiomas",
  en: "People collaborating on a human-led language learning experience",
};

function EditorialList({ items }: { items: readonly PageBlock[] }) {
  return (
    <div className="border-t border-[#0B1F3A]/16">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`grid gap-5 border-b border-[#0B1F3A]/16 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-7 ${
            index % 2 === 1 ? "lg:ml-14" : "lg:mr-14"
          }`}
        >
          <span className="pt-1 text-sm font-semibold tabular-nums text-[var(--langia-blue-ink)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <EditorialHeading as="h3" size="card">
              {item.title}
            </EditorialHeading>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#52657A]">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Hero({ language, page }: { language: SiteLanguage; page: AboutPageContent }) {
  return (
    <PageHero
      tone="mist"
      eyebrow={page.hero.eyebrow}
      title={page.hero.title}
      body={page.hero.body}
      actions={
        <>
          <MarketingButton href="/contact">{page.hero.primaryCta}</MarketingButton>
          <MarketingButton href="/programs" variant="secondary">
            {page.hero.secondaryCta}
          </MarketingButton>
        </>
      }
      media={
        <div>
          <MediaFrame
            src="/images/marketing-2026/shared/about-human-led-design.webp"
            alt={aboutImageAlt[language]}
            aspectClassName="aspect-[5/4] sm:aspect-[16/11]"
            imageClassName="object-cover object-center"
            className="ring-1 ring-[#0B1F3A]/8"
            sizes="(min-width: 1024px) 57vw, 100vw"
            priority
          />
          <ul className="mt-6 grid grid-cols-2 border-y border-[#0B1F3A]/16">
            {page.hero.quickFacts.map((fact, index) => (
              <li
                key={fact}
                className={`flex min-h-16 items-center py-4 text-base font-semibold leading-6 text-[#0B1F3A] ${
                  index % 2 === 0 ? "pr-4" : "border-l border-[#0B1F3A]/16 pl-4"
                } ${index < 2 ? "border-b border-[#0B1F3A]/16" : ""}`}
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}

function Origin({ page }: { page: AboutPageContent }) {
  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader eyebrow={page.origin.eyebrow} title={page.origin.title} />
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#52657A]">{page.origin.body}</p>
            <ol className="mt-12 grid border-y border-[#0B1F3A]/16 sm:grid-cols-2">
              {page.origin.timeline.map((item, index) => (
                <li
                  key={item.year}
                  className={`py-7 ${index === 0 ? "border-b border-[#0B1F3A]/16 sm:border-b-0 sm:pr-8" : "sm:border-l sm:pl-8"}`}
                >
                  <p className="font-heading text-4xl font-medium tracking-[-0.05em] text-[#048EFF]">{item.year}</p>
                  <p className="mt-3 text-base font-semibold leading-7 text-[#0B1F3A]">{item.label}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function NarrativeSection({
  body,
  eyebrow,
  items,
  title,
  tone,
}: {
  body: string;
  eyebrow: string;
  items: readonly PageBlock[];
  title: string;
  tone: "white" | "mist";
}) {
  return (
    <MarketingSection tone={tone}>
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <SectionHeader eyebrow={eyebrow} title={title} body={body} />
          <EditorialList items={items} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function AiSection({ page }: { page: AboutPageContent }) {
  return (
    <MarketingSection
      tone="mist"
      className="overflow-hidden bg-[radial-gradient(circle_at_88%_14%,rgba(4,142,255,.2),transparent_32%),linear-gradient(135deg,#EAF6FF_0%,#F3F7FB_55%,#FFFFFF_100%)]"
    >
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
          <SectionHeader eyebrow={page.ai.eyebrow} title={page.ai.title} body={page.ai.body} />
          <FeatureList items={page.ai.bullets} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Values({ page }: { page: AboutPageContent }) {
  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <SectionHeader eyebrow={page.values.eyebrow} title={page.values.title} />
        <div className="mt-16 lg:ml-auto lg:max-w-[880px]">
          <EditorialList items={page.values.items} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function Presence({ page }: { page: AboutPageContent }) {
  return (
    <MarketingSection tone="mist">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-24">
          <SectionHeader eyebrow={page.presence.eyebrow} title={page.presence.title} body={page.presence.body} />
          <div>
            <ul className="grid grid-cols-2 border-y border-[#0B1F3A]/16">
              {page.presence.languages.map((language, index) => (
                <li
                  key={language}
                  className={`flex min-h-24 items-center py-5 font-heading text-2xl font-medium tracking-[-0.035em] text-[#0B1F3A] ${
                    index % 2 === 0 ? "pr-5" : "border-l border-[#0B1F3A]/16 pl-5"
                  } ${index < 2 ? "border-b border-[#0B1F3A]/16" : ""}`}
                >
                  {language}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-l-2 border-[#048EFF] pl-5 text-base font-semibold leading-8 text-[#0B1F3A]">
              {page.presence.locationNote}
            </p>
          </div>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

function NotSection({ page }: { page: AboutPageContent }) {
  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeader eyebrow={page.not.eyebrow} title={page.not.title} body={page.not.body} />
          <ol className="border-t border-[#0B1F3A]/16">
            {page.not.items.map((item, index) => (
              <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[#0B1F3A]/16 py-6">
                <span className="text-sm tabular-nums text-[var(--langia-blue-ink)]">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-heading text-xl font-medium leading-7 tracking-[-0.025em] text-[#0B1F3A] sm:text-2xl">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

export default function AboutPage() {
  const { language } = useSiteLanguage(defaultLanguage);
  const content = getContent(language);

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">
      <SiteNavbar variant="light" language={language} />
      <Hero language={language} page={content} />
      <Origin page={content} />
      <NarrativeSection
        eyebrow={content.why.eyebrow}
        title={content.why.title}
        body={content.why.body}
        items={content.why.cards}
        tone="mist"
      />
      <NarrativeSection
        eyebrow={content.difference.eyebrow}
        title={content.difference.title}
        body={content.difference.body}
        items={content.difference.cards}
        tone="white"
      />
      <AiSection page={content} />
      <Values page={content} />
      <Presence page={content} />
      <NotSection page={content} />
      <FinalCTA
        title={content.finalCta.title}
        body={content.finalCta.body}
        primary={{ href: "/contact", label: content.finalCta.primaryCta }}
        secondary={{ href: "/programs", label: content.finalCta.secondaryCta }}
      />
      <SiteFooter />
    </main>
  );
}
