# Navbar and footer implementation verification

Verified the current isolated preview at http://127.0.0.1:4173/en using Playwright Chromium on desktop 1440×900, touch-enabled mobile 390×844, and landscape mobile 844×390. All checks pass; no browser page errors occurred. Results are in `report.json`; the reproducible script is `verify.cjs`.

- Desktop Programs remains open after moving slowly into and pausing 700 ms in the former 12 px hover gap; pointer entry into the submenu works.
- Keyboard Tab enters submenu links. Escape closes the submenu, makes it inert, and restores Programs focus. Following Tab reaches About us, skipping hidden submenu links.
- After scrolling 1800 px, desktop Login and Start remain visible (opacity 1, no transform, pointer events enabled); Login receives visible keyboard focus.
- Mobile opening locks body scrolling and focuses Programs. All 18 tested forward Tab positions stay inside the panel or its toggle. Reverse Tab from the toggle reaches Log in, and forward Tab from Log in returns to the toggle.
- The complete mobile panel scrolls to Start and Log in in portrait and landscape. Actual touch tap of Start navigates to the existing `/en/contact` destination. No form was submitted.
- Escape closes the mobile menu, restores toggle focus, and releases body scrolling.
- Footer has zero top margin, Mist background, and no transformed descendants. The oversized wordmark, 15 navigation links, and three language controls remain. All footer links/buttons have targets at least 44 px tall; mobile has no horizontal overflow.

Visual review found hero text ghosting through the translucent desktop submenu. The menu surface was changed to opaque white and the final capture confirms that the underlying headline is fully concealed.

Representative screenshots: `desktop-hover-bridge.png`, `desktop-keyboard-escape-tab.png`, `desktop-scrolled-login-focus.png`, `mobile-menu-actions-focused.png`, `mobile-landscape-actions.png`, `desktop-footer.png`, and `mobile-footer.png`.
