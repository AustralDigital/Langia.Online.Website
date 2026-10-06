# Langia Online Website

Marketing website foundation for Langia, built with Next.js App Router,
TypeScript, Tailwind CSS, and Framer Motion.

## Development

```bash
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
# With a local production server running:
npm run verify:marketing -- http://localhost:3000
```

## Production SEO configuration

Set these environment variables in the production host:

```bash
NEXT_PUBLIC_SITE_URL=https://langia.online
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=google-search-console-token
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

The verification token is only the `content` value supplied by Google, not the
full HTML meta tag. See [docs/seo-launch-checklist.md](docs/seo-launch-checklist.md)
for the external launch steps.

## Homepage method video

When the final “Our Method” video is available, place it in `public/videos/`
or use a hosted asset URL, then set:

```bash
NEXT_PUBLIC_LANGIA_METHOD_VIDEO_URL=/videos/langia-method.mp4
```

The homepage outcomes section uses the original Langia learning image as its
poster. The configured video has native playback controls and loads only on
demand. With no configured video, the optimized photograph remains visible.

## Editorial homepage

Homepage copy for EN/ES/PT lives in `src/content/premium-homepage.ts`. The section
components live in `src/components/home/`; their styles are scoped in
`src/app/premium-home.css` to preserve existing program, contact, legal, and blog
pages. Original generated photographs are committed as optimized WebP assets
under `public/images/langia-editorial/`.

The TailorED interface is an explicitly labeled illustrative composition.
Unapproved testimonials remain in the content model and are not rendered on the
homepage. Professional industry descriptors avoid implying client partnerships.
