import Image from "next/image";
import { ArrowIcon } from "@/components/site/MarketingPrimitives";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import type { PremiumHomeCopy } from "@/content/premium-homepage";
import { HomeAction, Label, SectionIntro } from "./PremiumPrimitives";

const programPhotos = [
  "/images/langia-editorial/live-learning.webp",
  "/images/langia-editorial/global-team.webp",
];
const methodVideoSource =
  process.env.NEXT_PUBLIC_LANGIA_METHOD_VIDEO_URL?.trim();
export function ProgramCollection({
  copy,
}: {
  copy: PremiumHomeCopy["programs"];
}) {
  return (
    <section id="programs" className="premium-section premium-programs">
      <div className="premium-container">
        <SectionIntro
          label={copy.label}
          title={copy.title}
          body={copy.body}
          action={
            <HomeAction href="/programs" secondary>
              {copy.all}
            </HomeAction>
          }
        />
        <div className="premium-program-grid">
          {copy.items.map((item, index) => (
            <LocalizedLink
              href={item.href}
              key={item.href}
              className={`premium-program ${index < 2 ? "premium-program-featured" : "premium-program-compact"}`}
            >
              {index < 2 ? (
                <div className="premium-program-photo">
                  <Image
                    src={programPhotos[index]}
                    alt={copy.photoAlts[index]}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <span>{item.tag}</span>
                </div>
              ) : (
                <Label>{item.tag}</Label>
              )}
              <div className="premium-program-text">
                <div>
                  <span className="premium-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="premium-arrow">
                  <ArrowIcon />
                </span>
              </div>
              <p>{item.body}</p>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
export function LearningJourney({
  copy,
}: {
  copy: PremiumHomeCopy["journey"];
}) {
  return (
    <section id="process" className="premium-section premium-journey">
      <div className="premium-container">
        <SectionIntro label={copy.label} title={copy.title} body={copy.body} />
        <ol className="premium-steps">
          {copy.steps.map((step, index) => (
            <li key={step.title}>
              <span className="premium-step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function LearningCapabilities({
  copy,
}: {
  copy: PremiumHomeCopy["capabilities"];
}) {
  return (
    <section id="capabilities" className="premium-section">
      <div className="premium-container">
        <SectionIntro label={copy.label} title={copy.title} body={copy.body} />
        <div className="premium-capabilities">
          {copy.groups.map((group) => (
            <article key={group.number}>
              <div className="premium-capability-title">
                <span className="premium-number">{group.number}</span>
                <h3>{group.title}</h3>
              </div>
              <p>{group.body}</p>
              <ul>
                {group.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function GlobalEnglish({
  copy,
}: {
  copy: PremiumHomeCopy["listening"];
}) {
  return (
    <section id="global-english" className="premium-section premium-listening">
      <div className="premium-container premium-listening-grid">
        <div className="premium-listening-copy">
          <Label>{copy.label}</Label>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
          <ul className="premium-accents">
            {copy.accents.map((accent) => (
              <li key={accent}>{accent}</li>
            ))}
          </ul>
          <p className="premium-listening-foot">{copy.foot}</p>
        </div>
        <figure>
          <div className="premium-listening-photo">
            <Image
              src="/images/langia-editorial/global-team.webp"
              alt={copy.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <figcaption>{copy.caption}</figcaption>
          <ul className="premium-listening-tags">
            {copy.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  );
}
export function CareerStatement({
  copy,
}: {
  copy: PremiumHomeCopy["statement"];
}) {
  return (
    <section className="premium-statement">
      <Label>{copy.label}</Label>
      <h2>{copy.title}</h2>
      <div className="premium-actions">
        <HomeAction href="/contact">{copy.cta}</HomeAction>
        <HomeAction href="/corporate" secondary>
          {copy.secondary}
        </HomeAction>
      </div>
    </section>
  );
}
export function LearningOutcomes({
  copy,
}: {
  copy: PremiumHomeCopy["outcomes"];
}) {
  return (
    <section id="outcomes" className="premium-section">
      <div className="premium-container premium-outcomes">
        <div className="premium-outcomes-photo">
          {methodVideoSource ? (
            <video
              controls
              playsInline
              preload="none"
              poster="/images/langia-editorial/live-learning.webp"
              aria-label="Langia TailorED"
            >
              <source src={methodVideoSource} />
            </video>
          ) : (
            <Image
              src="/images/langia-editorial/live-learning.webp"
              alt={copy.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          )}
        </div>
        <div>
          <Label>{copy.label}</Label>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
          <ul>
            {copy.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <HomeAction href="/test-your-english-level" secondary>
            {copy.cta}
          </HomeAction>
        </div>
      </div>
    </section>
  );
}
export function Discovery({ copy }: { copy: PremiumHomeCopy["resources"] }) {
  return (
    <section id="resources-home" className="premium-section premium-discovery">
      <div className="premium-container">
        <SectionIntro label={copy.label} title={copy.title} />
        <div className="premium-discovery-grid">
          {copy.items.map((item, index) => (
            <LocalizedLink href={item.href} key={item.href}>
              <span className="premium-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ArrowIcon />
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
export function HomeQuestions({ copy }: { copy: PremiumHomeCopy["faq"] }) {
  return (
    <section id="faq" className="premium-section">
      <div className="premium-container premium-faq">
        <div>
          <Label>{copy.label}</Label>
          <h2>{copy.title}</h2>
        </div>
        <div>
          {copy.items.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <ArrowIcon />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
