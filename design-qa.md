# Langia editorial homepage — design QA

Date: 6 October 2026. Previous report preserved in [September QA](docs/qa/2026-09-05-design-qa.md).

## Target and evidence

- Source visual truth: the previously built Caladan recreation, at `C:/Users/juanf/Documents/Codex/2026-09-29/https-caladan-template-webflow-io-https-2/outputs/caladan-site`. The homepage source, spacing rules, reconstruction blueprint, and rendered proof were inspected.
- Source captures: `proof/home-production-local.jpg` and `proof/home-mobile-local.jpg` under that project.
- Implementation: final production build at `http://localhost:3002/en`, signed out. EN/ES/PT routes reviewed.
- Implementation captures: [desktop](docs/qa/langia-editorial/desktop.jpg), [mobile](docs/qa/langia-editorial/mobile.jpg), [TailorED detail](docs/qa/langia-editorial/tailored-desktop.jpg).
- Combined comparison inputs: `../caladan-langia-desktop-comparison.jpg` and `../caladan-langia-mobile-comparison.jpg` in the local work directory. Source is on the left; Langia is on the right. These reference composites are review evidence only and are not website assets.
- Desktop viewport: 1440 × 1000 CSS px. Both reference and implementation screenshots are 1425 × 990 raster px. Mobile viewport: 390 × 844 CSS px. Both screenshots are 375 × 812 raster px. Browser capture excludes the scrollbar and uses its own screenshot scaling; equal raster dimensions were retained, without asymmetric resizing.
- State: resting hero; closed navigation. Additional section captures cover TailorED, programs, journey, capabilities, global English, statement, outcomes, resources, FAQ, and footer.
- Full-page screenshot export is unavailable in this browser. The entire page was reviewed through successive viewport captures. Focused TailorED and program views were inspected at readable size.

## Findings

No actionable P0/P1/P2 issues remain in the reviewed implementation.

| Required surface | Review result |
| --- | --- |
| Fonts and typography | Plus Jakarta Sans display type and Poppins body copy use the existing next/font setup. Oversized medium-weight headings, restrained tracking, and concise copy preserve hierarchy. All three locales fit narrow layouts; no clipped headings or truncated controls were observed. The families intentionally follow Langia rather than Caladan. |
| Spacing and layout rhythm | Inset photographic hero and white floating navigation lead into split headings, generous section gaps, a 2+3 programs grid, numbered capability rows, photography, FAQ, and a restrained dark footer. Desktop padding is 124px; mobile sections use 72px and intentional stacked layouts. The reference's large inquiry form becomes two focused Langia actions. |
| Colors and tokens | Deep Navy #0B1F3A, Signal Blue #048EFF, Mist Blue #F3F7FB, and white define the page. Gold is limited to a small hero marker. Blue-filled actions use navy text; darker blue ink is used for small labels on light backgrounds. Native focus states remain visible. |
| Images and assets | Three original editorial photographs were generated for Langia and committed as optimized 1536 × 1024 WebP files. Subjects, hands, crop tolerance, compression, and desktop/mobile framing were inspected. Existing Langia logo assets are retained. No Caladan photo, logo, or proprietary asset is shipped. The TailorED composition is original and explicitly labeled illustrative. |
| Copy and content | Original EN/ES/PT copy centers “English for people going places.” Live teachers lead; AI supports preparation and practice. Industry descriptors imply no client partnership. Aspirational learning outcomes replace unapproved testimonials. The existing level route is labeled as guidance rather than presented as an interactive test. |

## Comparison history and corrections

1. Initial visual review found a P2 mobile hero crop that cut the subject's face. The narrow-screen object position was adjusted. Revised phone captures show the professional within the intentional background crop.
2. Initial navigation review found a P1 unreadable CTA caused by a pre-existing important text-color utility. The editorial variant now uses a dedicated button class. Final desktop and mobile menu checks confirm readable navy/white treatment.
3. Final combined desktop and mobile comparison classified brand palette, original photography, CTA structure, localized text, five programs, and TailorED UI as intentional differences required by this brief. No further P0/P1/P2 issue was found.

## Functional and responsive verification

- Lint, TypeScript, and the production build passed; 69 pages generated.
- Production HTTP checks passed for 39 localized marketing routes, 41 unique homepage-linked destinations, 19 referenced image files, four legacy redirects, sitemap, and robots.
- [Responsive measurements](docs/qa/langia-editorial/responsive-checks.json) cover EN/ES/PT at 320px, 768px, and 1024px, with no horizontal overflow. Desktop 1440px and mobile 390px were visually reviewed throughout the page.
- TailorED click and ArrowRight keyboard transitions select and expose the correct tab panels. Native FAQ disclosure expands correctly.
- Mobile navigation opens, confines keyboard focus, dismisses with Escape, and returns focus to its toggle. Existing menu routes and login destination are preserved.
- The skip link moves focus to the main content. Footer language switching changes the route, document language, and rendered copy.
- Primary contact navigation and seven required-field validation states were checked. No external WhatsApp message was submitted.
- Browser console inspection reported no errors in the final local production render. All visible homepage images loaded.
- Reduced-motion CSS disables decorative transitions. Main content is server rendered; images reserve layout geometry and load responsively through Next/Image.

## Open questions and practical limits

- Approved customer testimonials and client logos were not available. Existing draft testimonial content stays unrendered; professional categories and outcomes provide an honest substitute.
- The TailorED UI is a marketing example, not a live student record or embedded TailorED application.
- Field Core Web Vitals require real traffic; no field-score claim is made. The Vercel preview was visually and functionally reviewed after the branch push; see the deployed verification below.

## Implementation checklist

- [x] Original Langia identity and generated final image assets.
- [x] Modular sections and maintainable localized copy.
- [x] Existing routes, contact mechanisms, analytics hooks, metadata, and login link retained.
- [x] Desktop/mobile visual review and key interaction checks.
- [x] Lint, types, production build, route and asset checks.

## Deployed verification

Vercel deployed the GitHub branch successfully. The protected preview was inspected through the authenticated browser session after the user signed in. No deployment protection setting was changed, and no temporary share URL was created.

- Desktop 1440 × 1000 and mobile 390 × 844: homepage render and responsive geometry passed; no horizontal overflow.
- All homepage images loaded through the deployed Next/Image optimizer.
- TailorED click/keyboard panels, FAQ, mobile menu and Escape focus return, EN/ES/PT switching, localized document languages, canonical metadata, contact navigation, and seven required-field validation states passed.
- No Langia application console errors were observed. Earlier Vercel/GitHub login errors were outside the application and resolved through the user signing in.
- A small follow-up preserves an actual space between the display heading line spans for plain-text extraction, without changing its visible layout.

final result: passed
