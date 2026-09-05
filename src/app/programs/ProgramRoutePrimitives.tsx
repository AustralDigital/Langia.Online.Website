import { getImageProps } from "next/image";
import type { ReactNode } from "react";

import {
  EditorialHeading,
  FAQList,
  MarketingSection,
  SectionEyebrow,
  SectionHeader,
  SiteContainer,
} from "@/components/site/MarketingPrimitives";

type ContentBlock = {
  title: string;
  body: string;
};

export const PROGRAM_IMAGE_PATHS = {
  corporate: "/images/marketing-2026/corporate/global-team-presentation.webp",
  kidsDesktop: "/images/marketing-2026/programs/kids-family-discovery-desktop.webp",
  kidsMobile: "/images/marketing-2026/programs/kids-family-discovery-mobile.webp",
  langiaOnline: "/images/marketing-2026/programs/langia-online-global-presentation.webp",
  talkinClub: "/images/marketing-2026/programs/talkin-club-natural-connection.webp",
  testPrep: "/images/marketing-2026/programs/test-prep-campus-readiness.webp",
} as const;

export function ResponsiveKidsImage({
  alt,
  className = "object-cover object-center",
  priority = false,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const commonImageProps = {
    alt,
    className,
    priority,
    sizes: "(min-width: 1024px) 50vw, 100vw",
    style: {
      height: "100%",
      inset: 0,
      objectFit: "cover" as const,
      position: "absolute" as const,
      width: "100%",
    },
  };
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    ...commonImageProps,
    height: 2000,
    src: PROGRAM_IMAGE_PATHS.kidsMobile,
    width: 1600,
  });
  const { props: desktopImageProps } = getImageProps({
    ...commonImageProps,
    height: 1800,
    src: PROGRAM_IMAGE_PATHS.kidsDesktop,
    width: 2400,
  });

  return (
    <picture>
      <source media="(max-width: 639px)" srcSet={mobileSrcSet} />
      <img {...desktopImageProps} alt={alt} />
    </picture>
  );
}

export function EditorialBlockGrid({
  columns = 3,
  items,
}: {
  columns?: 2 | 3 | 4;
  items: readonly ContentBlock[];
}) {
  const columnClass = {
    2: "lg:grid-cols-2",
    3: "sm:grid-cols-2 xl:grid-cols-3",
    4: "sm:grid-cols-2 xl:grid-cols-4",
  }[columns];

  return (
    <div className={`editorial-blocks grid gap-x-8 gap-y-12 ${columnClass}`}>
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="border-t border-[#0B1F3A]/18 pt-6">
          <span className="text-sm tabular-nums text-[#0068B8]">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-5 max-w-[19ch] font-heading text-2xl font-medium leading-tight tracking-[-0.035em] text-[#0B1F3A]">
            {item.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#52657A]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function ChoiceGrid({
  cards,
  label,
}: {
  cards: readonly (ContentBlock & { bestFor: string })[];
  label: string;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <article
          key={card.title}
          className={`flex min-h-full flex-col rounded-[1.5rem] border border-[#0B1F3A]/14 bg-white p-6 sm:p-8 ${
            cards.length % 2 === 1 && index === cards.length - 1 ? "sm:col-span-2 xl:col-span-1" : ""
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0068B8]">{label}</p>
          <h3 className="mt-4 font-heading text-3xl font-medium tracking-[-0.04em] text-[#0B1F3A]">{card.title}</h3>
          <p className="mt-5 text-base leading-8 text-[#52657A]">{card.body}</p>
          <p className="mt-7 border-t border-[#0B1F3A]/14 pt-5 text-base font-semibold leading-7 text-[#0B1F3A]">
            {card.bestFor}
          </p>
        </article>
      ))}
    </div>
  );
}

export function TailoredFeatureSection({
  features,
  includesEyebrow,
  includesTitle,
  tailored,
}: {
  features: readonly ContentBlock[];
  includesEyebrow: string;
  includesTitle: string;
  tailored: { eyebrow: string; title: string; body: string };
}) {
  return (
    <MarketingSection tone="mist">
      <SiteContainer>
        <div className="overflow-hidden rounded-[2rem] bg-white">
          <div className="grid xl:grid-cols-[0.8fr_1.2fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="relative">
                <SectionHeader body={tailored.body} eyebrow={tailored.eyebrow} title={tailored.title} />
                <div className="mt-12 rounded-[1.5rem] bg-[var(--langia-mist)] p-6">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1F3A]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F3B737]" />
                    Langia TailorED
                  </div>
                  <div className="mt-5 flex gap-2" aria-hidden="true">
                    {[0, 1, 2, 3].map((step) => (
                      <span
                        key={step}
                        className={`h-1.5 flex-1 rounded-full ${step < 3 ? "bg-[#048EFF]" : "bg-[#D9E7F3]"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--langia-navy)] p-7 text-white sm:p-10 lg:p-14">
              <SectionEyebrow className="!text-white [&>span]:!bg-white" inverse>
                {includesEyebrow}
              </SectionEyebrow>
              <EditorialHeading as="h3" className="mt-7 max-w-[17ch]" inverse size="secondary">
                {includesTitle}
              </EditorialHeading>
              <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <article key={`${feature.title}-${index}`} className="border-t border-white/30 py-6">
                    <span className="text-sm tabular-nums text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-4 font-heading text-xl font-medium leading-tight tracking-[-0.025em] text-white">
                      {feature.title}
                    </h4>
                    <p className="mt-3 text-base leading-7 text-white">{feature.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}

export function LevelPath({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  return (
    <ol className="grid gap-x-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {items.map((item, index) => (
        <li key={item} className="border-t border-[#0B1F3A]/18 py-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0068B8]">
            {label} {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-heading text-xl font-medium leading-tight tracking-[-0.025em] text-[#0B1F3A]">
            {item}
          </h3>
        </li>
      ))}
    </ol>
  );
}

export function LabelGrid({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-7 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item} className="flex min-h-20 items-center gap-4 border-t border-[#0B1F3A]/18 py-5 text-base font-semibold leading-6 text-[#0B1F3A]">
          <span className="text-sm tabular-nums text-[#0068B8]">{String(index + 1).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PaymentNotes({
  items,
}: {
  items: readonly ContentBlock[];
}) {
  return (
    <div className="grid gap-x-10 lg:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="border-t border-[#0B1F3A]/18 py-6">
          <h3 className="font-heading text-2xl font-medium tracking-[-0.03em] text-[#0B1F3A]">{item.title}</h3>
          <p className="mt-4 text-base leading-8 text-[#52657A]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function PricingCard({
  badge,
  children,
  title,
}: {
  badge?: ReactNode;
  children: ReactNode;
  title: ReactNode;
}) {
  return (
    <article className="pricing-card flex min-h-full flex-col rounded-[1.5rem] border border-[#0B1F3A]/14 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h3 className="font-heading text-3xl font-medium tracking-[-0.04em] text-[#0B1F3A]">{title}</h3>
        {badge ? (
          <span data-pricing-badge className="rounded-full bg-[#F3B737]/18 px-3 py-2 text-sm font-semibold text-[#765200]">{badge}</span>
        ) : null}
      </div>
      {children}
    </article>
  );
}

export function PricingDefinitionList({
  items,
}: {
  items: readonly { label: string; value: string }[];
}) {
  return (
    <dl className="mt-7 border-t border-[#0B1F3A]/14">
      {items.map((item) => (
        <div key={`${item.label}-${item.value}`} className="grid gap-2 border-b border-[#0B1F3A]/14 py-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-baseline">
          <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-[#52657A]">{item.label}</dt>
          <dd className="font-heading text-lg font-semibold text-[#0B1F3A] sm:text-right">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FAQSection({
  eyebrow,
  items,
  title,
}: {
  eyebrow: string;
  items: readonly ContentBlock[];
  title: string;
}) {
  return (
    <MarketingSection tone="white">
      <SiteContainer>
        <div className="grid gap-14 xl:grid-cols-[0.72fr_1.28fr] xl:gap-24">
          <SectionHeader eyebrow={eyebrow} title={title} />
          <FAQList items={items} />
        </div>
      </SiteContainer>
    </MarketingSection>
  );
}
