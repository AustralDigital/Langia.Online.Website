import { useId, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import type { PremiumHomeCopy } from "@/content/premium-homepage";
import { HomeAction, Label, SectionIntro } from "./PremiumPrimitives";

export function TailoredShowcase({
  copy,
}: {
  copy: PremiumHomeCopy["tailored"];
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  function navigateTabs(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % copy.tabs.length;
    else if (event.key === "ArrowLeft")
      next = (index + copy.tabs.length - 1) % copy.tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = copy.tabs.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  }
  return (
    <section id="tailored" className="premium-section premium-tailored">
      <div className="premium-container">
        <SectionIntro
          label={copy.label}
          title={copy.title}
          body={copy.body}
          action={
            <HomeAction href="/about" secondary>
              {copy.cta}
            </HomeAction>
          }
        />
        <div className="tailored-stage">
          <div className="tailored-context">
            <Image
              src="/images/logo-white.svg"
              alt="Langia"
              width={180}
              height={75}
              className="tailored-logo"
            />
            <p className="tailored-name">TailorED</p>
            <Label>{copy.contextLabel}</Label>
            <ul>
              {copy.context.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="tailored-interface">
            <div className="tailored-interface-top">
              <span>{copy.example}</span>
              <span>{copy.level}</span>
            </div>
            <div className="tailored-profile">
              <Label>{copy.profile}</Label>
              <h3>{copy.goal}</h3>
              <p>{copy.industry}</p>
            </div>
            <div
              className="tailored-tabs"
              role="tablist"
              aria-label={copy.example}
            >
              {copy.tabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  id={`${id}-tab-${index}`}
                  aria-selected={active === index}
                  aria-controls={`${id}-panel-${index}`}
                  tabIndex={active === index ? 0 : -1}
                  onKeyDown={(event) => navigateTabs(event, index)}
                  onClick={() => setActive(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
            {copy.tabs.map((tab, index) => (
              <div
                key={tab}
                role="tabpanel"
                id={`${id}-panel-${index}`}
                aria-labelledby={`${id}-tab-${index}`}
                hidden={active !== index}
                className="tailored-panel"
              >
                <Label>{copy.panelLabels[index]}</Label>
                <h4>{copy.panelTitles[index]}</h4>
                <p>{copy.panelBodies[index]}</p>
                <div className="tailored-language">
                  <span>{copy.vocabulary}</span>
                  <ul>
                    {copy.terms.map((term) => (
                      <li key={term}>{term}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="tailored-teacher">
              <Image src="/images/favicon.svg" alt="" width={28} height={28} />
              <p>{copy.teacher}</p>
            </div>
          </div>
        </div>
        <p className="tailored-example-note">{copy.previewNote}</p>
        <div className="tailored-human">
          <h3>{copy.human}</h3>
          <p>{copy.humanBody}</p>
        </div>
      </div>
    </section>
  );
}
