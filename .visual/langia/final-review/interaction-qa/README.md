# Final homepage interaction regression

**PASS — no failures, browser console errors, or page errors.**

Tested the production build at `http://127.0.0.1:4174/en` in Chromium: desktop 1440×900, mobile 390×844 with `isMobile: true` and `hasTouch: true`, and reduced motion 1280×800. The original 4173 preview was unavailable; all reported checks ran against the healthy production server. No application files were edited.

| Area | Verified result |
|---|---|
| Hero | Exactly one hero photograph before/after language rotation. Idle language rotation changes the selected language. Manual selection pauses rotation; Resume restarts it. Keyboard focus on a language control pauses rotation. Each timed observation waited 7.65 seconds. All four manual language controls work on touch. |
| Reduced motion | No automatic language cycling, 800px hero instead of extended scroll section, no redundant pause button. Manual language selection remains functional. |
| Hidden hero controls | After exit, foreground and support groups have `inert` and `aria-hidden=true`; faded controls are excluded from interaction. |
| Process | Exactly three steps. Desktop pointer hover and keyboard activation each select one panel; mobile tap selects one accordion body. Buttons include descriptive step titles. The visible CTA receives a visible focus indicator and readable blue text. Closed process links cannot receive focus on desktop or mobile. |
| Learner Stories | All three selectors change the actual quote, selected state, and active indicator through desktop click/Enter and mobile tap. Each is explicitly labeled “Sample story — awaiting approved testimonial”; attribution remains explicitly sample text and no pretend learner portrait appears. |
| FAQ | All five answers open individually and close again with desktop Enter/Space and mobile tap. `aria-expanded` and answer `aria-hidden` match state. |
| Content destinations | All nine unique program/corporate/resource destinations opened meaningful pages with desktop Enter and mobile tap: 18 successful route activations. |
| Final conversion | Both mobile buttons receive pointer hits and genuine unforced taps. “For myself” opens `/en/contact`; “For my company” opens `/en/corporate`. Each has one arrow. The footer no longer intercepts either action. |

The nine content destinations were:

- `/en/programs/langia-online`
- `/en/programs/talkin-club`
- `/en/programs/test-prep`
- `/en/programs/langia-4-kids-n-teens`
- `/en/programs`
- `/en/corporate`
- `/en/blog`
- `/en/blog/how-to-prepare-for-a-language-exam`
- `/en/blog/what-is-ai-assisted-language-learning`

**20 route activations passed in total.** Screenshot evidence was captured before interactions and inspected, including desktop/mobile hero, process, stories, FAQ, reduced motion, and both mobile final CTA positions.

The learner stories remain explicit placeholders awaiting approved testimonials. This run covers Chromium browser behavior, not hardware Safari or assistive-technology speech output. Navigation/footer had a separate comprehensive regression and were not duplicated here. Forms were not submitted and sign-in was not attempted.

Evidence: [machine-readable results](report.json), [repeatable script](verify.cjs), [mobile individual CTA](mobile-final-cta-0.png), [mobile company CTA](mobile-final-cta-1.png), [desktop process focus](desktop-process.png), [desktop sample story](desktop-learner-stories.png).
