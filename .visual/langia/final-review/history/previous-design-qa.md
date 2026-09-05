# Langia homepage — Kora recording design QA

## Comparison target

- Source visual truth: `/workspaces/Langia.Online.Website/references/Page inspiration.mp4` (the available copy of the requested Kora recording).
- Extracted source analysis: `/workspaces/Langia.Online.Website/.visual/reference/ANALYSIS.md` and `/workspaces/Langia.Online.Website/.visual/reference/keyframes/`.
- Rendered implementation: Langia English homepage served locally from this project.
- Primary viewport and state normalization: 1918 × 946 CSS px, 1918 × 946 source and implementation pixels, `deviceScaleFactor: 1`, light color scheme, signed-out state. No resampling or browser chrome was included in the individual captures.
- Reference sampling: 325 sequential frames at 4 fps, plus denser scene samples and named keyframes for each motion transition.
- Final implementation capture set: `/workspaces/Langia.Online.Website/.visual/langia/final/`.
- Final browser report: `/workspaces/Langia.Online.Website/.visual/langia/final-qa/report.json`.

Kora is used only as a structural and motion reference. Langia's logo, palette, typography, localized copy, programs, imagery, and factual proof replace Kora's brand and content intentionally.

## Full-view comparison evidence

- Initial hero, foreground exit, supporting-content exit, image-only hold, blur/scale, and white takeover: `/workspaces/Langia.Online.Website/.visual/compare/iteration-1-hero-initial.jpg`, `iteration-1-hero-support.jpg`, and `iteration-1-hero-blur.jpg`.
- Transformation title and paired-card state: `/workspaces/Langia.Online.Website/.visual/compare/iteration-1-transformation-pair.jpg`.
- Programs/service-card sequence: `/workspaces/Langia.Online.Website/.visual/compare/iteration-3-program.jpg`.
- Four-panel process rail: `/workspaces/Langia.Online.Website/.visual/compare/iteration-3-process.jpg`.
- Team/method and proof/testimonial-role scenes: `/workspaces/Langia.Online.Website/.visual/compare/iteration-3-tailored.jpg` and `iteration-3-proof.jpg`.
- FAQ and insights/resources: `/workspaces/Langia.Online.Website/.visual/compare/iteration-3-faq.jpg` and `iteration-3-resources.jpg`.
- Final CTA and footer takeover: `/workspaces/Langia.Online.Website/.visual/compare/final-conversion.jpg`, `final-footer-takeover.jpg`, and `final-footer.jpg`.

Each comparison image places the source frame and the browser-rendered Langia state in one side-by-side canvas at the same 1918 × 946 state size. The scene-level comparisons make the relevant typography, spacing, crop, controls, card geometry, and section overlap readable, so separate pixel crops were not needed. Intermediate motion was evaluated from the full capture sequences rather than only from beginning/end frames.

## Findings

No actionable P0, P1, or P2 mismatches remain for the requested structure-and-motion objective.

- Fonts and typography: Langia's established heading and body faces are retained, while display scale, line length, optical weight, and wrapping now follow the reference's large editorial hierarchy. Captures show no clipping or cramped UI text at 1918 px or 390 px.
- Spacing and layout rhythm: the desktop navigation sits at the measured 30 px inset; the hero uses a 20 px inset and 30 px radius before reaching its full-bleed state; program cards measure 1480 × 690 px; the page is 25,745 px tall versus the reference's approximately 25.7k px progression. Section pauses, overlaps, sticky holds, radii, and takeover timing are visibly aligned.
- Colors and tokens: all surfaces map to Langia navy, signal blue, mist/cream, white, and gold. Opacity and image-darkening are used for readable overlay text, while active panels retain clear contrast.
- Image quality and asset fidelity: real, high-resolution Langia imagery is used throughout with scene-specific `object-position` and stable aspect ratios. No placeholder boxes, emoji, rasterized text, or invented Kora assets substitute for visible media.
- Copy and content: the page uses coherent Langia copy and factual content. The testimonial-shaped sequence is mapped to verifiable Langia proof rather than fabricated customer quotes, and Kora's service, pricing, and company claims were not copied.
- Icons and controls: existing project button/icon conventions are preserved, aligned within their controls, and remain readable against each surface.
- Behavior and interaction states: hero foreground layers exit in separate phases; the image-only hold precedes the blur/scale and white-page takeover; transformation cards reveal sequentially; five program cards overlap in a sticky stack; process panels expand to an observed 713/239/239/239 px distribution; proof panels expand to 703/373/373 px; FAQ uses one-open accordion behavior; the final CTA holds before the circular footer takeover.
- Responsiveness and accessibility: 390 × 844 mobile captures have no horizontal overflow. The menu has an accessible label, opens with `aria-expanded=true`, locks body scroll, and closes with Escape. Reduced motion replaces the long hero sequence with a 900 px static scene. Focus styles, semantic buttons, alt text, and practical tap targets are preserved.
- Browser health: the final desktop/mobile runs reported zero console errors and zero page errors.

## Comparison history

### Iteration 1 — hero and transformation choreography

- Earlier findings: `[P1]` the hero did not yet distinguish primary-copy exit, supporting-foreground exit, clean image-only hold, blur/scale, and the white-sheet takeover; `[P2]` the transformation title/card pacing and flat-card proportions were too compact.
- Fixes: separated the hero layers and scroll windows, added the clean hold and stronger image scale/blur, changed the takeover edge to a straight white sheet, split the transformation title horizontally, and resized the two cards to the reference-like 500 × 650 px proportions.
- Post-fix visual evidence: `iteration-1-hero-initial.jpg`, `iteration-1-hero-support.jpg`, `iteration-1-hero-blur.jpg`, and `iteration-1-transformation-pair.jpg` in `/workspaces/Langia.Online.Website/.visual/compare/`; intermediate rendered frames are in `/workspaces/Langia.Online.Website/.visual/langia/iteration-1/`.

### Iteration 2 — programs and expanding rails

- Earlier findings: `[P1]` programs read as ordinary cards rather than a long sticky service stack; `[P2]` the process and proof rails did not create a strong enough active-to-inactive width contrast.
- Fixes: rebuilt the programs sequence as five 1480 × 690 px sticky overlapping cards with measured settle/overlap states, then tuned process expansion to about 3:1 and proof expansion to about 2:1 with faster transitions.
- Post-fix visual evidence: `/workspaces/Langia.Online.Website/.visual/langia/iteration-2/`, followed by the focused final comparisons `iteration-3-program.jpg`, `iteration-3-process.jpg`, and `iteration-3-proof.jpg`.

### Iteration 3 — lower-page proportions and footer transition

- Earlier findings: `[P2]` the process media/benefit strip, team-method block, proof scene, FAQ, and resources did not yet preserve the reference's alternating full-scene rhythm; `[P2]` the final CTA released too soon and the footer appeared as a normal block rather than a takeover.
- Fixes: enlarged and separated the lower scenes, centered the FAQ, changed resources to a left-intro/two-card composition, extended the final CTA to a sticky two-viewport hold, and introduced a large circular brand-color wipe followed by a rising light footer surface and oversized wordmark.
- Post-fix visual evidence: `iteration-3-tailored.jpg`, `iteration-3-proof.jpg`, `iteration-3-faq.jpg`, `iteration-3-resources.jpg`, `final-conversion.jpg`, `final-footer-takeover.jpg`, and `final-footer.jpg` in `/workspaces/Langia.Online.Website/.visual/compare/`. The complete final sequence is in `/workspaces/Langia.Online.Website/.visual/langia/final/`.

## Primary interactions and states tested

- Desktop hero at sixteen scroll-progress samples, including every requested intermediate phase.
- Transformation at ten progress samples.
- All five program-card settled and overlap states.
- All four process-panel hover states and all three proof-panel hover states.
- FAQ item switching with `aria-expanded` validation.
- Final CTA start/mid states and six footer takeover stages.
- Mobile menu open/body-lock/Escape behavior and mobile Programs rendering at 390 × 844.
- Reduced-motion rendering at 1280 × 800.
- Desktop document geometry, horizontal overflow, fixed navigation position, console errors, and page errors.

## Verification

- `npx tsc --noEmit` — passed.
- `npm run lint` — passed.
- `npm run build` — passed; 69 pages generated.
- Playwright final QA — passed at 1918 × 946, 390 × 844, and reduced-motion 1280 × 800.

## Open questions

- None blocking. Content differences visible in the side-by-side frames are expected because the brief explicitly requires Langia's branding and content rather than a Kora content clone.

## Follow-up polish

- `[P3]` A device/browser matrix beyond Chromium can be added if cross-browser motion parity is required for release.

final result: passed
