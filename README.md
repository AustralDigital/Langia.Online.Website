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
npm run build
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
