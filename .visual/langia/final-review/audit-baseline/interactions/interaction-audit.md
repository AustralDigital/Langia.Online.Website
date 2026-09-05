# Langia homepage: interaction audit, 2026-09-05

Read-only browser inspection. No application files changed. Evidence was captured before interactions and inspected visually.

## Runtime qualification

The pre-existing server at http://127.0.0.1:3000/en served HTML and JS but did not hydrate: no React props/fiber on controls, slide clicks did not update state, scroll handlers did not run, and HMR WebSocket handshakes failed. These are environment failures, not proof every component is broken. Interaction conclusions below use the parent's unchanged-source isolated Webpack preview at http://127.0.0.1:4173/en, where React hydration, HMR, scroll effects, and handlers worked. No application console/page errors were recorded during the healthy state/route test runs.

Desktop 1440×900, mobile 390×844 with isMobile:true and hasTouch:true. No forms submitted, credentials entered, authentication attempted, or external messages sent.

## Confirmed defects

1. **Critical: mobile final CTA actions blocked by footer.** Both Get started and Contact team fail genuine Playwright tap. The decorative aria-hidden blue circle from the footer intercepts pointer events, after a 2.2-second settle and throughout five-second tap retries. Removing the circle/negative overlap is a conversion fix as well as the requested design correction. Evidence: mobile-blockers-report.json, final-primary-tap.png, final-secondary-tap.png.
2. **High: invisible desktop process link text.** Active white CTA pills can render white text and white SVG on white. Computed foreground/background are both rgb(255,255,255), including the final TailorED Start now action. Keyboard Enter still follows meaningful routes, so this is a styling/accessibility defect rather than a no-op. Evidence: supplement-report.json, desktop-process-link-3.png, process-active.png. Source's global unlayered anchor inheritance overrides ordinary text utility classes.
3. **High: invisible focus targets.** Desktop navbar Log in and Start remain tabbable after their cluster transitions to opacity:0 and y:-4. Mobile closed process panels keep their inner Learn more anchors tabbable despite opacity:0 and a zero-height clipped parent. Evidence: states-report.json, hidden-navbar-login-focus.png, mobile-closed-panel-focus.png.
4. **High: mobile FAQ action clips horizontally.** The gold “Frequently asked questions” action cannot shrink within the side-by-side support row; its right end exceeds the 390px screen. Its label is also wrong: the link goes to /en/contact while positioned under the FAQ, beside “Before you begin.” Evidence: mobile-faq.png.
5. **Medium: navbar dropdown mouse gap.** Programs hover opens the menu, but pausing the pointer in the 12px gap between parent link and panel dismisses it. A deliberate slow move is interrupted. Keyboard Tab reaches submenu links; Escape does not dismiss desktop dropdowns. Evidence: nav-programs-open.png, nav-gap.png, states-report.json.
6. **Medium: mobile menu permits focus behind overlay.** Opening focuses Programs and locks body scroll; Escape closes and restores toggle focus correctly. But Tab after the menu's Log in proceeds to the hero Start now, View programs, and carousel dots behind the open panel. Evidence: states-report.json/mobileMenuFocusWalk, mobile-menu-escaped-focus.png.
7. **Medium: five fake personalization controls.** Context, Current level, Communicative goal, Teacher guidance, and Progress all use plus signs and hover into white pill shapes. Each is a DIV with no role, tabindex, or click handler, and clicking every row reveals/navigates nothing. Remove misleading action styling or supply approved content-driven disclosure behavior. Evidence: fake-personalization-row.png, states-report.json/fakeSignals.
8. **Medium: proof tiles make false disclosure promises.** Three real buttons change aria-pressed, panel width/color/font size and +/−, but no additional information appears. The same metric is visible in every state and appears again in the metrics section. Remove disclosure symbols/interaction when consolidating duplicated metrics. Evidence: proof-active.png, mobile-proof.png, states-report.json/proof.
9. **Medium: process control names omit the useful title.** Desktop controls expose “Step 101”, “Step 202”, “Step 303”, and “0404”; actual step headings sit outside each button. The button should include the step title in its accessible name. Mobile controls already contain titles.
10. **Medium: insufficient text contrast.** Axe flagged one contrast category with 26 nodes: personalization text approx 2.11–3.32:1, inactive process numbers 2.84:1, muted proof labels 4.09:1, blue transformation small label 4.24:1. This reinforces replacing the saturated blue canvas. Automated contrast cannot conclusively measure every photographic overlay; manual review still needed.
11. **Low: duplicated arrows/inconsistent CTA styles.** Final Get started has two SVG arrows because MarketingButton adds one alongside an explicit ArrowIcon. Contact team has one. Process links use browser-default outlines while other actions use designed rings. All inspected native buttons have cursor:default; anchors have cursor:pointer. Evidence: final-cta-arrows.png, supplement-report.json.
12. **Hero motion accessibility.** Dot click/Enter/tap works. Cycling continues while a carousel dot has keyboard focus (7.6-second observation). Pointer hover pauses; there is no explicit pause control. Preserve only the approved language/photo strategy and account for focused users.

## Behaviors confirmed working

- Four hero slide buttons update aria-pressed with click, Enter, and true touch tap.
- All four desktop process panels expand on hover and keyboard focus/Space. Their level-guidance/programs/contact links navigate meaningfully with Enter. Mobile light accordion equivalents open with tap and their links navigate with tap.
- Process state remained stable while stationary and pointer outside rail for 8.5 seconds. No process autoplay exists in current code; its section headline itself is ordinary flow, not sticky.
- Three proof buttons change selected state with hover, keyboard, and tap (interaction's informational purpose remains weak).
- All five FAQ buttons open/close via click/Enter and tap; single-open logic works.
- Mobile menu opens, scroll-locks, closes with Escape, and restores focus to its toggle.
- ES/PT/EN footer controls work with desktop Enter and mobile tap, navigating /es, /pt, /en and setting html lang es, pt-BR, en.
- Login actual click reaches https://langia-tailored-v2.vercel.app/sign-in, title “Langia TailorEd”, genuine username/email and password sign-in form. Visible copy says this is a private platform with administrator-provided access. No self-serve enrollment was demonstrated. Evidence: login-report.json, login-destination.png.

## Destinations and business ambiguity

All homepage anchors use real hrefs. Fifteen distinct internal destinations were opened from homepage controls and showed meaningful headings: /en, /en/programs, all four program detail routes, /en/about, /en/corporate, /en/legal, /en/work-with-us, /en/blog, /en/contact, /en/test-your-english-level, and the two article routes displayed on the homepage. No placeholder URLs were found. #programs scrolls to the Programs section. No social links exist on the current homepage.

Navbar Start, hero Start now, TailorED Start now, personalization Learning direction, FAQ's mislabeled action, both final actions, and footer Talk to Langia converge on /en/contact. The two final labels therefore do not represent two different paths. /en/contact is a contact form, not enrollment. The form source hands off to a configured WhatsApp number; end-to-end submission/configuration was deliberately not tested. Ask the owner to resolve the intended conversion path and do not invent a signup URL.

## Evidence and limits

- states-report.json: every state control, mobile menu focus walk, selected-state changes, fake rows, axe output, console errors.
- supplement-report.json: all process CTAs, desktop keyboard locale switching, computed process link styling, final arrow count.
- links-report.json: per-anchor desktop hover/focus/click/Enter and mobile tap outcomes, route surfaces, errors. link-inventory.csv offers the same per-anchor outcome inventory.
- mobile-blockers-report.json: full actual mobile footer interception errors. Kids image link had a four-second timeout during reveal in bulk run; fresh test after 2.5s settling successfully navigated on first tap, so no persistent broken route is inferred.
- External login was opened by desktop navbar click; separate mobile login placements were inspected for href/semantics but not tapped. Authentication and message delivery were not exercised. Only Chromium was tested. Mobile hardware Safari and assistive-technology speech output were not tested. Dynamic focus was tested using DOM focus/keyboard and visual screenshots.

Completed coverage: 53 anchor instances inventoried per viewport (51 internal/hash links and two placements of the same external login). All 51 desktop internal/hash anchors passed both real click and keyboard Enter. Mobile internal/hash anchors were tapped; the two final CTA anchors were reproducibly blocked by the footer, and one image-animation timing failure passed a fresh first-tap retest after settling. Four additional process CTA instances were verified separately on each viewport. All 24 native button variants, including desktop/mobile process variants and menu toggle, were exercised in their applicable viewports. The five faux personalization rows were clicked and confirmed no-op. The login surface was opened via an actual navbar anchor click. No app console or page errors occurred in healthy-preview testing.
