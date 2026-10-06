# Langia final homepage correction — design QA

Date: 5 September 2026. This supersedes the previous report, preserved in [.visual/langia/final-review/history/previous-design-qa.md](.visual/langia/final-review/history/previous-design-qa.md).

## Target and evidence

- Source visual truth: [Kora recording](references/Page%20inspiration.mp4), with extracted frames in [.visual/reference/keyframes](.visual/reference/keyframes). The second, current-Langia recording described in the brief was not found; the rendered homepage and code were audited instead. Kora was densely sampled at 0.5-second intervals for the audit.
- Product decisions: [approved architecture](docs/homepage-final-architecture.md). The user's light Langia palette, six choices, and clarification about company logos take precedence over Kora's palette and section count.
- Implementation: production build from this workspace at `http://localhost:4174/en`; Spanish and Portuguese routes checked too.
- Primary comparison: 1918×946 CSS px and source/implementation pixels, deviceScaleFactor 1, signed out, light theme. Combined comparisons uniformly downsample both images to 958×473 and place Kora left, Langia right. No browser chrome is included.
- Final wide screenshots: [desktop](.visual/langia/final-review/desktop). Additional full scenes at 1440×900 and 390×844: [responsive-scenes](.visual/langia/final-review/responsive-scenes). Tablet/narrow phone review covers EN/ES/PT at 768×1024, 1024×768, and 360×800. Reduced motion covers 1280×800 and narrow ES/PT. All use density 1.

## Comparison findings

These are structural translations, not pixel clones. Brand, copy, photos, three onboarding steps, four programs, static personalization facts, and sample stories intentionally differ from Kora. Scroll states are matched by purpose; recorded scroll speed is not a duration target.

| Required surface | Observed result |
| --- | --- |
| Fonts and typography | Existing Plus Jakarta Sans display face and Poppins body face retained. Large editorial headings remain, with medium display weights. Localized Programs clipping was corrected. Body copy, process links, and narrow CTA labels remain legible. |
| Spacing and rhythm | Four stacked text/photo Programs compositions remain generous. Duplicate Corporate/program card, method scenes, proof expansion, comparison cards, and excessive sticky holds were removed. Human motivation now appears on desktop and mobile. Finale and footer scroll in normal flow. |
| Colors and tokens | White #FFFFFF and Mist #F3F7FB dominate; Navy #0B1F3A is primarily text. Signal #048EFF is an accent, with darker blue ink for readable text actions. Gold #F3B737 serves primary conversion actions. Large blue/navy fields and the footer circle are gone. Finale text has measured contrast above the large-text requirement in all four focused captures. |
| Image quality | One stable hero photograph, clearer mobile face crop, one teaching photograph, distinct program/resource/corporate images, and the retained photographic finale. Localized shading replaces the full dark wash. Existing logo assets are preserved. Campaign imagery is not documentary learner proof. |
| Copy and content | Each scene has one role. Workplace logos appear only in the hero; Corporate has one dedicated offering scene. TailorED combines method, benefits, and personalization. Stories are visibly labeled samples, without fabricated names, portraits, ratings, or outcomes. Finale routes are distinct. |

Full-view comparisons: [hero](.visual/langia/final-review/compare/hero.jpg), [clear photograph](.visual/langia/final-review/compare/hero-clear.jpg), [blur](.visual/langia/final-review/compare/hero-blur.jpg), [white takeover](.visual/langia/final-review/compare/hero-takeover-mid.jpg), [Programs](.visual/langia/final-review/compare/program.jpg), [process](.visual/langia/final-review/compare/process.jpg), [TailorED](.visual/langia/final-review/compare/tailored.jpg), [stories](.visual/langia/final-review/compare/stories.jpg), [resources](.visual/langia/final-review/compare/resources.jpg), [FAQ](.visual/langia/final-review/compare/faq.jpg), [finale](.visual/langia/final-review/compare/conversion.jpg), and [footer](.visual/langia/final-review/compare/footer.jpg).

Focused comparisons for narrow hero spacing, localized heading fit, arrow sizing, and finale contrast are in [compare](.visual/langia/final-review/compare). They establish text readability and control geometry beyond the full scenes. Navigation focus, hover-gap, portrait/landscape menu, and footer captures are in [nav-qa](.visual/langia/final-review/nav-qa).

## Comparison history and corrections

1. **Audit — blocked.** P0: the footer circle intercepted both mobile finale buttons. P1: duplicate method/corporate/proof scenes, dark canvases, missing desktop motivation content. P2: invisible scrolled navigation actions, false expansion affordances, unreadable process link, ambiguous finale routes. The [audit](docs/homepage-final-audit.md) records the evidence. Approved consolidation, navigation repairs, circle removal, and a shared button hierarchy address these findings.
2. **First rendered correction — blocked.** The mobile hero crop cut the face, and the white takeover used an empty sheet. The photo now has an explicit crop; the actual motivation section rises over the image. First-pass evidence is preserved in [history](.visual/langia/final-review/history); final hero/human scenes show the corrections.
3. **Hero timing — corrected.** P2: blur started while supporting foreground remained visible. Copy now exits first, logos second, then the clear image transforms before the white page takes over. [Scroll measurements](.visual/langia/final-review/desktop/report.json) and combined comparisons confirm this. Only language names rotate, with pause, focus, and reduced-motion behavior.
4. **Responsive review — blocked, then corrected.** P1: ES/PT hero text collided with logos at 360px. P2: “Programas.” overflowed 35px, and the comparison arrow was oversized. [Earlier findings](.visual/langia/final-review/history/responsive-findings.md). The hero now reserves measured content height; the heading has a smaller mobile floor; the arrow is explicitly 16×16. Post-fix measurements show at least 31.5px foreground/support separation, headings at 320/320px, and a one-line comparison action. [Post-fix evidence](.visual/langia/final-review/responsive-post-fix/report.json).
5. **Finale contrast — corrected.** The first shade adjustment still produced a 2.31:1 minimum against large white text at 1024px. Shading now persists across the desktop heading; stacked layouts shade the upper title area. Final measurements at ES1024, EN390, ES360, and PT768 give minima of 4.28:1, 4.00:1, 4.01:1, and 3.99:1, with zero sampled solid heading pixels below 3:1. Portraits and controls remain clear. [Final contrast evidence](.visual/langia/final-review/final-contrast/report.json).
6. **Narrow hero keyboard — corrected.** At ES360, browser focus-scroll toward controls below the viewport crossed the support exit threshold and removed focus. Controls now sit with the headline actions, within the initial viewport, and exit with that text. Slow keyboard traversal reaches all four languages and Pause at scrollY 0; pause/resume retain focus. Desktop EN1440 and mobile EN390/ES360 keyboard and touch checks all pass without browser errors. [Final hero evidence](.visual/langia/final-review/hero-final/report.json) and [combined before/after](.visual/langia/final-review/compare/narrow-hero-fix.jpg).

## Interaction and build validation

- [Production interaction regression](.visual/langia/final-review/interaction-qa/README.md): zero failures, console errors, or page errors. Twenty actual route activations passed through keyboard and true mobile taps. All three process steps, three sample stories, and five FAQ controls change real state. Closed content and faded hero controls are excluded from focus.
- Both finale actions receive pointer hits and actual taps: individual → `/en/contact`, company → `/en/corporate`. Program and article links open existing meaningful pages.
- [Navigation/footer regression](.visual/langia/final-review/nav-qa/README.md): desktop hover bridge, keyboard/Escape, scrolled Login/Start, mobile focus trap, portrait/landscape menu scrolling, footer links and locale controls. Tested footer targets are at least 44px tall.
- `npm run lint`, targeted lint after corrections, TypeScript through production build, and `git diff --check` pass. Production build generates all 69 static pages successfully.
- At matching English viewports, document height fell from 24,508 to 14,625px on desktop and from 25,512 to 18,279px on mobile (about 40% and 28%), through editing and shorter holds. Browser scenes have no horizontal document overflow. Responsive review covered nine locale/viewport combinations, then targeted same-state rechecks.

## Scope and remaining content

Approved testimonials are still awaited; samples are explicitly labeled and prepared for replacement in [src/content/testimonials.ts](src/content/testimonials.ts). Login's confirmed destination is preserved. Contact delivery depends on the existing WhatsApp configuration; no form was submitted or authentication attempted. Chromium was used; hardware Safari and assistive-technology speech output were not tested. Nothing was deployed.

Checklist: architecture/deduplication complete; light palette complete; functional controls/routes complete; responsive corrections complete; final contrast and narrow keyboard corrections verified. No actionable P0/P1/P2 findings remain in the tested scope.

## Follow-up: logo clipping and section removal

The user requested these small corrections after approving the redesign. The small Langia logos now use the exact original vector artwork with a fitted outer canvas, preserving padding around the complete mark. Header, program cards, finale, and footer use contained image sizing; oversized images inside clipping wrappers are removed. The “Langia in perspective” metrics section is removed from every locale. Homepage photographs are unchanged.

Focused browser checks at 1440×900, 390×844, and 360×800 confirm loaded, contained logos, no horizontal overflow, no metrics section, and no page errors. Screenshots were visually inspected. Targeted ESLint and the production build pass. [Screenshots and measurements](.visual/langia/logo-corrections/report.json).

final result: passed
