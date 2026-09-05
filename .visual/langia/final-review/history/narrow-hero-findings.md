# Narrow Spanish hero follow-up

**Keyboard regression confirmed; touch access passes.**

Tested the restarted production build at `http://127.0.0.1:4174/es`, Chromium mobile emulation with touch, 360×800. No application files changed.

- The measured hero frame is 910px high. Language/pause controls initially occupy y838–882 and begin below the viewport.
- A genuine touch swipe moves the page to scrollY 225, exposes the controls around y672, and permits successful language selection and pause/resume taps.
- Keyboard Tab from the visible “Ver programas” link initially focuses “Inglés.” The browser then scrolls from 0 to 406px to reveal focus. Within 650ms the support group's scroll animation reaches opacity 0 and sets `inert=true`, ejecting focus to BODY.
- The next Tab jumps to the first Programs CTA. Normal keyboard traversal cannot reach the remaining language selectors or Pause.
- There were no browser console/page errors in this completed narrow test.

This is not a persistent below-fold hit-target problem for touch. It is focus-induced scrolling crossing the support group's exit threshold. The overflowing compact hero needs to preserve access and focus while its controls are being used, or permit natural scrolling to them without triggering their exit.

Evidence: [focus walk with immediate/settled values](narrow-focus-report.json), [touch and dimensions](narrow-hero-report.json), [first control initially receives focus](narrow-hero-first-control-focus.png), [successful touch exposure](narrow-hero-after-touch-swipe.png). The earlier application error surface during rebuild was excluded; the regression above reproduced after production restart.
