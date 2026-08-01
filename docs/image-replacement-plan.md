# Langia marketing image system

The 2026 public-site remake now uses a complete, production-ready photography campaign rather than the legacy `/images/Home/Home*.png` library. Existing legacy files remain in the repository for rollback and historical reference. Approved company identity marks keep their existing `/images/Home/Home-Companies` paths.

## Production source of truth

- Asset metadata, placements, ratios, crop guidance, alt text, and generation notes:
  [`marketing-2026-image-manifest.internal.json`](./marketing-2026-image-manifest.internal.json)
- Final generation prompt set and campaign guardrails:
  [`docs/marketing-2026-image-prompts.md`](./marketing-2026-image-prompts.md)
- Runtime format: optimized WebP plus one code-native SVG editorial mark.
- Campaign balance: 7 professional and 7 lifestyle production photos.

## Responsive strategy

- The homepage and Kids n Teens heroes use independently composed desktop and mobile companions.
- All other campaign photographs use centrally safe responsive masters with route-specific `object-position` values.
- Editorial covers use 16:9 masters, program and supporting imagery use 4:3 masters, and portrait companions use independently generated portrait compositions rather than blind crops.

Contact, Legal, and Test Your English Level remain intentionally typographic. Their content does not benefit from decorative stock imagery, and omitting it preserves clarity and credibility.
