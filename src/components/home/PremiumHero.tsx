import Image from "next/image";
import type { PremiumHomeCopy } from "@/content/premium-homepage";
import { HomeAction, Label } from "./PremiumPrimitives";

export function PremiumHero({ copy }: { copy: PremiumHomeCopy["hero"] }) {
  return (
    <section className="premium-hero" aria-labelledby="home-title">
      <Image
        src="/images/langia-editorial/hero.webp"
        alt={copy.alt}
        fill
        priority
        sizes="100vw"
        quality={90}
        className="premium-hero-photo"
      />
      <div className="premium-hero-shade" />
      <div className="premium-hero-content">
        <Label>{copy.label}</Label>
        <h1 id="home-title">
          {copy.lines.map((line, index) => (
            <span key={line}>
              {line}
              {index < copy.lines.length - 1 ? " " : null}
            </span>
          ))}
        </h1>
        <p className="premium-hero-description">{copy.body}</p>
        <div className="premium-actions">
          <HomeAction href="/contact">{copy.primary}</HomeAction>
          <HomeAction href="#programs" secondary>
            {copy.secondary}
          </HomeAction>
        </div>
      </div>
      <div className="premium-hero-bottom">
        <p>{copy.note}</p>
        <p>{copy.languages}</p>
      </div>
    </section>
  );
}
export function ProfessionalWorld({
  copy,
}: {
  copy: PremiumHomeCopy["trust"];
}) {
  return (
    <section
      className="premium-trust premium-container"
      aria-label={copy.label}
    >
      <div>
        <Label>{copy.label}</Label>
        <p className="premium-small">{copy.note}</p>
      </div>
      <ul>
        {copy.industries.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
    </section>
  );
}
