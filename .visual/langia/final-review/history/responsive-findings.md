# Responsive visual QA

Tested the current production build at http://127.0.0.1:4174 for EN, ES, and PT at 1024×768, 768×1024, and 360×800. Captured each main scene, all four program cards, desktop sticky takeover states, and one ES reduced-motion hero. Screenshots were opened and inspected. No application code was edited.

## Findings

1. **P1 — Mobile hero layers collide in ES/PT at 360×800.** In ES, the primary CTA (y493–541) crosses the company strip’s top rule (y527), and the secondary CTA appears over its heading. PT’s secondary CTA also touches the company heading. The reduced-motion ES scene reproduces the problem. Give compact hero content enough flow height or reserve a minimum hero height based on foreground plus support content. Preserve the image choreography outside that flow. Evidence: `es-360x800-hero.png`, `pt-360x800-hero.png`, `es-360x800-reduced-hero.png`.

2. **P2 — Localized Programs heading is horizontally clipped at 360px.** ES and PT render “Programas.” at a 4rem minimum in a 320px column. Its measured scrollWidth is 355px, so the final portion is clipped by page overflow handling. Reduce the compact font floor or make this heading fluid to its available width. Evidence: `es-360x800-programs.png`, `pt-360x800-programs.png`; exact DOM measurements are in `report.json`.

3. **P2 — Photographic finale heading loses contrast over pale buildings.** White heading text crosses bright sky/building areas at tablet widths and on narrow mobile. Strengthen the localized image shade behind that text while keeping the portrait legible. Evidence: `es-1024x768-conversion-end.png`, `pt-768x1024-conversion-end.png`, `es-360x800-conversion-end.png`.

4. **P2 — Oversized Programs comparison arrow forces unnecessary wrapping.** The concluding comparison link supplies ArrowIcon with a className containing transitions but no width/height, replacing the icon’s default sizing. Add `h-4 w-4 shrink-0` to that instance. Evidence: lower right of `pt-768x1024-program-4.png`.

## Passing observations

- No horizontal document overflow in any of the nine locale/viewport cases. The only measured heading overflow is the ES/PT Programs title at 360px.
- No browser page errors in the nine cases.
- At 1024×768, program cards remain 620px high at y118 and end at y738. Their text CTAs fit at y634–682. All localized titles and body copy fit within their cards.
- At 768px and 360px, program cards use normal flow rather than sticky positioning. The text and image CTAs remain visible, and portrait crops retain their subjects.
- Long localized process and TailorED headings wrap without clipping. The process switches to its stacked accordion at tablet portrait width.
- Final individual/company actions fit as two columns on tablet and stack at 360px. No footer surface overlaps these controls in the captured states.
- The new learner-story section retains clear selection labels and an explicit localized placeholder notice at all tested widths.

These findings were sent to the root agent for implementation. Screenshots document the pre-fix production build; a new capture is needed to verify subsequent fixes.
