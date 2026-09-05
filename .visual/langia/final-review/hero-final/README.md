# Final hero interaction verification

**PASS — the narrow-screen keyboard regression is resolved.**

Tested the production build at `http://127.0.0.1:4174` in Chromium. Initial and interaction screenshots were captured and visually inspected. No application code was edited.

| Case | Initial controls | Keyboard result | Pointer/touch result |
|---|---|---|---|
| Spanish, 360×800, touch | All five controls visible at y621–665; frame 918px | Five normal Tabs, with 650ms settling after each, reach all four languages and Pause. Focus remains visible; scrollY stays 0; foreground never becomes inert. Enter pauses/resumes without losing focus. | Actual taps select Portuguese, resume, then pause, all at scrollY 0. |
| English, 390×844, touch | All five controls visible at y451–495 | All five Tab stops and keyboard pause/resume pass without scrolling or focus loss. | Manual language choice and resume/pause taps pass at scrollY 0. |
| English, 1440×900, pointer | All five controls visible at y532–576 | All five Tab stops and keyboard pause/resume pass without scrolling or focus loss. | Manual language choice and resume/pause clicks pass. |

Every control is inside the foreground group, has a 44×44 target, and receives its own pointer hit. The support group contains no interactive controls. There were **zero failures, console errors, or page errors**.

This scoped check verifies the repositioning fix. The earlier full interaction regression already verified timed autoplay, focus pause, reduced motion, and route behavior; those checks were not needlessly repeated.

Evidence: [JSON results](report.json), [repeatable script](verify.cjs), [Spanish initial screen](es360-initial.png), [Spanish pause focus](es360-pause-focus.png), [Spanish manual language choice](es360-manual-choice.png), [English mobile](en390-initial.png), [English desktop](en1440-initial.png).
