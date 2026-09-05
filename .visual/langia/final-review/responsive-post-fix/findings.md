# Post-fix responsive verification

Verified production build at http://127.0.0.1:4174. All targeted screenshots were inspected and geometry measured. No code changes made.

- **Fixed:** ES/PT hero foreground and company strip maintain at least 31.6px of separation at 360×800 in regular and reduced-motion modes. Regular motion was captured at y0, 120, 220, and 300; the full logo strip and its controls become visible on scroll. Reduced motion preserves the same gap through normal page scrolling.
- **Fixed:** Both localized “Programas.” headings now fit their 320px column: scrollWidth=clientWidth=320, font-size 53.6px.
- **Fixed:** PT 768×1024 comparison arrow now measures exactly 16×16px; the label remains on one line.
- **Remaining:** ES 1024×768 finale heading still loses contrast at its right edge. A same-frame screenshot comparison with and without the heading finds a minimum 2.31:1 contrast for opaque white glyph pixels, below the 3:1 large-text threshold. The worst sampled point is x389,y419 over RGB166,171,178. Of 6,936 opaque heading pixels, 1,634 are below 3:1. Extend the stronger shade through the full left heading width before fading toward the portrait. For stacked mobile/tablet layouts, shade the whole title area vertically so the heading's right-hand words receive sufficient coverage.

Evidence: `es-1024x768-finale.png`, `finale-contrast.json`, and `report.json`. No page errors occurred during the targeted hero checks.
