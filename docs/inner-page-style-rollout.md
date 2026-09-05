# Inner page style rollout

The inner pages now follow the established homepage design: floating navigation, inset photography, navy and mist surfaces, gold primary actions, large editorial headings, numbered panels, and spacious rounded image cards. The existing translations, pricing, legal copy, routes, and form submission behavior are retained.

## Coverage

- About, corporate, careers, and contact
- Program overview and all four program detail pages
- English level guidance
- Resources index and all three published articles
- Legal information

Shared composition lives in `src/components/site/MarketingPrimitives.tsx`; program-specific sections live in `src/app/programs/ProgramRoutePrimitives.tsx`. Inner-page layout styles are scoped under `.langia-page` or dedicated component classes in `src/app/globals.css`.

Photographic heroes retain each page's quick facts and use explicit inverse secondary actions. Resources and legal pages use a quieter typographic opening. Program cards keep text on the left and imagery on the right on desktop, then stack on mobile. Forms keep native controls and their existing field errors. The footer retains the earlier removal of the oversized wordmark.

## Validation

- Production build and TypeScript check pass.
- Source and project lint pass with `.visual/**` excluded; existing capture scripts there use CommonJS imports that the project lint rules reject.
- All 15 inner routes checked in English, Spanish, and Portuguese at 390px and 1440px (90 page checks): successful responses, one h1 per page, no horizontal overflow, no overflowing headings or form controls, and no browser page errors.
- Additional checks of 13 representative routes at 320px in Portuguese and 768px in English found no overflowing text or controls.
- Mobile menu open/Escape, FAQ open/close, and empty contact/careers form validation pass. No messages were sent.
- Screenshots and the primary browser report are in `.visual/inner-pages/`.
