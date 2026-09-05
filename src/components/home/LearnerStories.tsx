"use client";

import Image from "next/image";
import { useId, useState } from "react";

import { ArrowIcon, SiteContainer } from "@/components/site/MarketingPrimitives";
import { learnerStoriesContent } from "@/content/testimonials";
import type { SiteLanguage } from "@/lib/language";

export function LearnerStories({ language }: { language: SiteLanguage }) {
  const copy = learnerStoriesContent[language];
  const [selectedId, setSelectedId] = useState(copy.stories[0]?.id);
  const headingId = useId();
  const storyId = useId();
  const activeIndex = Math.max(0, copy.stories.findIndex((story) => story.id === selectedId));
  const activeStory = copy.stories[activeIndex];

  if (!activeStory) return null;

  return (
    <section
      id="learner-stories"
      aria-labelledby={headingId}
      className="bg-[var(--langia-mist)] px-5 py-24 text-[var(--langia-navy)] sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <SiteContainer>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:gap-20 xl:gap-28">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--langia-blue-ink)]">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[var(--langia-brand-signal)]" />
              {copy.eyebrow}
            </p>
            <h2
              id={headingId}
              className="mt-7 max-w-[13ch] font-heading text-[clamp(2.4rem,3.7vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.055em]"
            >
              {copy.title}
            </h2>
            <p className="mt-6 max-w-[32ch] text-base leading-7 text-[var(--langia-muted)]">
              {copy.body}
            </p>

            <div aria-label={copy.selectorLabel} role="group" className="mt-9 border-t border-[var(--langia-border)] lg:mt-12">
              {copy.stories.map((story, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={story.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls={storyId}
                    onClick={() => setSelectedId(story.id)}
                    className={`flex min-h-14 w-full items-center gap-4 border-b border-[var(--langia-border)] py-4 pr-2 text-left text-sm leading-6 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--langia-blue-ink)] ${isActive ? "font-semibold text-[var(--langia-navy)]" : "text-[var(--langia-muted)] hover:text-[var(--langia-navy)]"}`}
                  >
                    <span aria-hidden="true" className={`shrink-0 text-xs tabular-nums ${isActive ? "text-[var(--langia-blue-ink)]" : "text-[var(--langia-muted)]"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{story.topic}</span>
                    {isActive ? <ArrowIcon className="h-4 w-4 shrink-0 text-[var(--langia-blue-ink)]" /> : <span aria-hidden="true" className="w-4 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id={storyId}
            aria-live="polite"
            aria-atomic="true"
            className="relative flex min-w-0 flex-col border-t border-[var(--langia-border)] pt-8 lg:min-h-[32rem] lg:border-t-0 lg:pt-1"
          >
            {activeStory.isPlaceholder ? (
              <p className="w-fit max-w-full border border-[var(--langia-border)] bg-white px-3 py-2 text-xs font-medium leading-5 text-[var(--langia-muted)]">
                {copy.placeholderLabel}
              </p>
            ) : null}
            <figure className="mt-8 flex flex-1 flex-col">
              <span aria-hidden="true" className="h-14 font-heading text-8xl leading-none text-[var(--langia-brand-signal)]">“</span>
              <blockquote className="mt-4 max-w-[27ch] font-heading text-[clamp(1.75rem,2.8vw,3rem)] font-medium leading-[1.25] tracking-[-0.04em]">
                <p>{activeStory.quote}</p>
              </blockquote>
              <figcaption className="mt-9 flex items-center gap-4 lg:mt-auto lg:pt-10">
                {!activeStory.isPlaceholder && activeStory.photo ? (
                  <Image
                    src={activeStory.photo.src}
                    alt={activeStory.photo.alt}
                    width={64}
                    height={64}
                    className="h-16 w-16 shrink-0 rounded-full object-cover"
                  />
                ) : null}
                <div className="text-sm leading-6">
                  {activeStory.isPlaceholder ? (
                    <p className="text-[var(--langia-muted)]">{copy.placeholderAttribution}</p>
                  ) : (
                    <>
                      {activeStory.name ? <p className="font-semibold">{activeStory.name}</p> : null}
                      {activeStory.role ? <p className="text-[var(--langia-muted)]">{activeStory.role}</p> : null}
                    </>
                  )}
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
