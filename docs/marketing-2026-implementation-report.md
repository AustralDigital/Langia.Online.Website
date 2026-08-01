# Langia public marketing remake — implementation report

## 1. Creative direction

The public website has been remade as a bright, outcome-led editorial experience built around “Language for people going places.”

The new system translates the useful qualities of the Avenora reference into Langia without reproducing its layouts: generous white space, emotionally large photography, asymmetrical editorial pacing, refined hospitality and travel energy, strong type, and restrained moments of vivid color. Editorial White and Mist Blue carry most surfaces; Signal Blue, Legacy Blue, and gold provide energy; deep navy is reserved primarily for typography, controls, borders, and small details.

There are no active dark full-width public sections and no navy footer. The homepage’s previous dark hero is no longer rendered.

## 2. Public routes updated

All 16 public routes were migrated:

- `/`
- `/about`
- `/blog`
- `/blog/how-to-choose-the-right-english-program`
- `/blog/how-to-prepare-for-a-language-exam`
- `/blog/what-is-ai-assisted-language-learning`
- `/contact`
- `/corporate`
- `/legal`
- `/programs`
- `/programs/langia-online`
- `/programs/talkin-club`
- `/programs/test-prep`
- `/programs/langia-4-kids-n-teens`
- `/test-your-english-level`
- `/work-with-us`

Contact, Legal, and Test Your English Level remain intentionally typographic because decorative photography did not improve their primary tasks.

## 3. Generated image system

Generation mode: Codex built-in `imagegen`. Twelve responsive masters and two dedicated mobile/desktop companions were generated as premium editorial bitmap photography. The two mobile companions used their matching desktop images as references, but were independently composed rather than mechanically cropped. The editorial avatar is a deterministic code-native SVG.

Production directory: `public/images/marketing-2026/`

Recoverable original generations: `/home/codespace/.codex/generated_images/019fafab-c545-7352-a685-53a22cafba70/`

Full prompt set: [`docs/marketing-2026-image-prompts.md`](./marketing-2026-image-prompts.md)

Machine-readable manifest: [`marketing-2026-image-manifest.internal.json`](./marketing-2026-image-manifest.internal.json)

| Asset | Category | Page and section use |
| --- | --- | --- |
| `home/hero-professional-desktop.webp` | Professional | Homepage desktop hero |
| `home/hero-professional-mobile.webp` | Professional | Homepage mobile and tablet hero |
| `programs/langia-online-global-presentation.webp` | Professional | Homepage outcome story and program card; Programs overview; Langia Online hero |
| `corporate/global-team-presentation.webp` | Professional | Corporate hero; Programs overview corporate path |
| `shared/about-human-led-design.webp` | Professional | About hero, explicitly contextual rather than a staff portrait |
| `shared/independent-educator-remote-work.webp` | Professional | Work With Us hero, explicitly contextual rather than an employee portrait |
| `editorial/ai-assisted-human-outcome.webp` | Professional | Homepage Langia TailorED section; Blog listing; AI-assisted learning article |
| `home/family-travel-independence.webp` | Lifestyle | Homepage “different reasons” outcome story |
| `programs/talkin-club-natural-connection.webp` | Lifestyle | Homepage and Programs overview cards; Talkin’ Club hero |
| `programs/test-prep-campus-readiness.webp` | Lifestyle | Homepage and Programs overview cards; Test Prep hero |
| `programs/kids-family-discovery-desktop.webp` | Lifestyle | Homepage and Programs overview cards; Kids n Teens desktop/tablet hero |
| `programs/kids-family-discovery-mobile.webp` | Lifestyle | Programs overview and Kids n Teens mobile hero |
| `editorial/choose-english-program-destinations.webp` | Lifestyle | Blog listing and “How to choose the right English program” article |
| `editorial/language-exam-next-step.webp` | Lifestyle | Blog listing and “How to prepare for a language exam” article |
| `editorial/langia-editorial-mark.svg` | Brand mark | Blog article author identity without a fictional author portrait |

### Image balance

- Professional outcome photos: 7
- Travel, family, lifestyle, and discovery photos: 7
- Total campaign photos: 14
- Balance: exactly 50% professional / 50% lifestyle
- Editorial SVG: excluded from the photo balance

All accepted generations were inspected at native resolution for brightness, hands, faces, anatomy, embedded text, accidental logos, flags, watermarks, crop safety, and campaign consistency. Runtime assets are WebP at quality 88 with high compression effort. The 14 unreferenced PNG intermediates were removed after verification; the original generations remain recoverable.

## 4. Major page outcomes

- Homepage: bright split hero, exact language-word rotation, two-destination outcome story, concise credibility, visually distinct program choices, bright human-led TailorED composition, secondary three-step process, accessible FAQ, and bright final CTA.
- Programs overview: destination-led program cards, decision comparison, international communication path, and bright CTA hierarchy.
- Langia Online: professional mobility and global presentation identity.
- Talkin’ Club: spontaneous conversation and international connection identity.
- Test Prep: calm campus readiness and milestone identity.
- Kids n Teens: family travel, amusement/destination discovery, parent reassurance, and age-appropriate progress framing without childish motifs.
- Corporate: international communication partnership spanning language training, translation, localization, interpretation, global operations, and cross-border collaboration. Existing company marks carry a visible non-endorsement disclaimer.
- About and Work With Us: bright contextual human imagery that does not claim generated people are founders, employees, or staff.
- Blog: three dedicated editorial covers and a branded author mark, with article metadata and Open Graph images preserved.
- Contact, Legal, and level test: clearer, brighter, task-led typographic compositions without forced imagery.

## 5. Shared design system and tokens

### Exact color tokens

- Editorial White: `#FFFFFF`
- Mist Blue: `#F3F7FB`
- Langia Signal Blue: `#048EFF`
- Legacy Langia Blue: `#1A87FF`
- Langia Gold: `#F3B737`
- Deep Intelligence Navy: `#0B1F3A`
- Muted copy: `#52657A`
- Pale border: `#D8E6F4`

### Shared components updated

- `MarketingSection`: white, mist, and bright signal surfaces only
- `SiteContainer`
- `SectionEyebrow`
- `EditorialHeading`
- `SectionHeader`
- `MarketingButton`
- `PageHero`
- `MediaFrame`
- `FeatureList`
- `ProcessSteps`
- `FAQList`
- `FinalCTA`
- `SiteNavbar`
- `SiteFooter`
- Shared button and icon-button styles
- Localized text/date labels and site-language hook
- Program hero, responsive Kids image, choice, path, TailorED, pricing, and content primitives
- Homepage reveal, hero, outcome, programs, TailorED, process, FAQ, and final compositions

Obsolete `MarketingPageShell` and `PagePlaceholder` components were removed. Obsolete active navy/dark hero, section, and button variants were removed after the routes migrated.

## 6. Functional preservation

- Navigation: all Programs, About, Resources, Contact, Log in, and Start destinations remain wired.
- Dropdowns: desktop menus reveal through keyboard focus as well as hover.
- Mobile menu: focus enters the panel, body scroll locks, Escape closes it, focus returns to the toggle, and desktop breakpoint changes close it.
- Hero rotation: verified as English → Spanish → Portuguese → French with the existing 3.4-second timing and smooth transition. Reduced-motion mode remains stably on the first word.
- Localization: Spanish, Portuguese, and English switching and local-storage persistence remain intact; Portuguese correctly sets `lang="pt-BR"`.
- Forms: Contact and Work With Us localized validation, error associations, first-invalid-field focus, and configuration-safe status behavior pass.
- WhatsApp: existing encoded-message redirect construction remains intact and is used when `NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER` is configured.
- Blog: listing, all three articles, related links, metadata, and Open Graph covers resolve.
- Legal anchors: runtime fragment targets resolve.
- FAQs: keyboard-operable expansion controls and ARIA state remain intact.
- Routing and links: 38 unique internal destinations, including 22 fragment links, pass with no empty or placeholder links.

## 7. Verification results

| Check | Result |
| --- | --- |
| ESLint | Pass |
| TypeScript `tsc --noEmit` | Pass |
| `git diff --check` | Pass |
| Next.js production build | Pass; 19 pages generated, including 16 public routes and three SSG blog articles |
| Responsive route audit | Pass; 16 routes × 8 widths = 128 combinations at 360, 390, 430, 768, 1024, 1280, 1440, and 1920px |
| Route structure | Pass; one main H1 per route, no broken active images, no browser errors |
| Horizontal overflow | Pass at every audited route and width |
| Link and fragment audit | Pass; 38 unique internal links and 22 fragment targets |
| Accessibility | Pass; 16 routes at 390 and 1440px under WCAG 2 A/AA, WCAG 2.1 AA, and WCAG 2.2 AA axe rules |
| Interaction audit | Pass; hero rotation, reduced motion, menus, focus restoration, localization persistence, FAQs, and form validation |
| Visual review | Pass at 390, 768, and 1440px for the homepage and major image-led routes; all generated sources also reviewed at native resolution |
| Dark-surface audit | Pass; no active dark full-width public section or navy footer |
| Image-manifest audit | Pass; all 15 manifest assets exist and the 7/7 photo balance is exact |

## 8. Generated images that merit final human review

No blocking visual defect was found. These assets would still benefit from final brand-owner judgment before launch:

- `home/hero-professional-desktop.webp` and `home/hero-professional-mobile.webp`: confirm final casting and identity continuity meet Langia’s brand preference.
- `corporate/global-team-presentation.webp`: the architectural model gives the collaboration scene a mild design/architecture-sector cue; confirm that specificity is desirable.
- `shared/independent-educator-remote-work.webp`: confirm the laptop-forward contextual composition and independent-educator framing.
- `programs/kids-family-discovery-desktop.webp` and its mobile companion: confirm the original, non-branded attraction feels sufficiently generic and on-brand.

These are subjective brand/legal checks, not anatomy, crop, fake-text, or responsive failures.

## 9. Limitations caused by missing approved business content

- No approved public testimonial quotations or learner identities were found. The remake does not render the temporary testimonial content and does not fabricate replacements.
- No approved founder/team portrait set was available. About and Work With Us use clearly contextual generated imagery instead.
- `NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER` was not configured in the build environment. Both forms therefore show their existing localized configuration warning after valid submission; the redirect activates when the real number is supplied.
- No newsletter backend was present, so no email-submission behavior was invented.
- Existing company marks are not presented as partners or clients; Corporate includes an explicit disclaimer.

## 10. Files modified

### Routes and global application

- `src/app/about/page.tsx`
- `src/app/blog/BlogLocalized.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/contact/ContactPageClient.tsx`
- `src/app/corporate/page.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/legal/page.tsx`
- `src/app/page.tsx`
- `src/app/programs/ProgramRoutePrimitives.tsx`
- `src/app/programs/ProgramsOverviewClient.tsx`
- `src/app/programs/langia-4-kids-n-teens/page.tsx`
- `src/app/programs/langia-online/page.tsx`
- `src/app/programs/page.tsx`
- `src/app/programs/talkin-club/page.tsx`
- `src/app/programs/test-prep/page.tsx`
- `src/app/test-your-english-level/page.tsx`
- `src/app/work-with-us/WorkWithUsClient.tsx`

### Shared components

- `src/components/home/EditorialHomepage.tsx`
- `src/components/site/LocalizedText.tsx`
- `src/components/site/MarketingPrimitives.tsx`
- `src/components/site/SiteFooter.tsx`
- `src/components/site/SiteNavbar.tsx`
- `src/components/site/buttonStyles.ts`
- Removed: `src/components/MarketingPageShell.tsx`
- Removed: `src/components/PagePlaceholder.tsx`

### Content and localization

- `src/content/blog/how-to-choose-the-right-english-program.md`
- `src/content/blog/how-to-prepare-for-a-language-exam.md`
- `src/content/blog/what-is-ai-assisted-language-learning.md`
- `src/content/homepage.ts`
- `src/hooks/useSiteLanguage.ts`

### Assets, documentation, and QA

- All files under `public/images/marketing-2026/` listed in the generated-image table
- `docs/image-replacement-plan.md`
- `docs/marketing-2026-image-prompts.md`
- `docs/marketing-2026-implementation-report.md`
- `scripts/accessibility-audit.cjs`
- `scripts/public-route-audit.cjs`
- `scripts/visual-capture.cjs`
