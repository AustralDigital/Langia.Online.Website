# SEO launch checklist

The website code already provides localized URLs, canonical URLs, `hreflang`,
structured data, social metadata, redirects, `robots.txt`, and a localized XML
sitemap. The remaining steps require access to Langia's production accounts.

## Before deployment

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin without a trailing slash.
2. Create a Google Search Console domain property for `langia.online` and verify
   it through DNS. If Google also supplies an HTML-tag token, place only its
   `content` value in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
3. Create or select the production GA4 web data stream and set its measurement
   ID as `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`.
4. Confirm the production host redirects HTTP to HTTPS and the `www` hostname
   to the chosen canonical hostname.

## Immediately after deployment

1. Open representative Spanish, Portuguese, and English URLs and confirm that
   their canonical and alternate URLs use the production hostname.
2. Submit `https://langia.online/sitemap.xml` in Google Search Console.
3. Inspect `/es`, `/pt`, `/en`, each main program page, and one article with the
   Search Console URL Inspection tool, then request indexing.
4. Test the home, program, and article URLs with Google's Rich Results Test.
5. Confirm page views and language paths appear in GA4 Realtime without counting
   internal team traffic where practical.

## Ongoing work

- Publish genuinely useful, expert-reviewed resources on a consistent cadence.
- Translate articles only when the translation is complete; each translation
  should receive its own localized URL and matching `hreflang` entry.
- Earn relevant mentions and links from partners, professional associations,
  educators, and communities Langia genuinely works with.
- Review Search Console monthly for indexing, Core Web Vitals, queries, and
  pages with strong impressions but weak click-through rates.
