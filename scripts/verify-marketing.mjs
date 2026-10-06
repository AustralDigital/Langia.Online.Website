import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { resolve } from "node:path";

// HTTP regression checks for the existing marketing routes and localization.
// Browser interactions and visual QA are performed separately in the in-app browser.
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/u, "");
const paths = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/corporate",
  "/legal",
  "/programs",
  "/programs/langia-online",
  "/programs/talkin-club",
  "/programs/test-prep",
  "/programs/langia-4-kids-n-teens",
  "/test-your-english-level",
  "/work-with-us",
];
const locales = ["en", "es", "pt"];
const imagePaths = new Set();
const localLinks = new Set();
let checked = 0;

for (const locale of locales) {
  for (const path of paths) {
    const route = `/${locale}${path}`;
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200, `${route}: HTTP status`);
    const html = await response.text();
    assert.match(
      html,
      new RegExp(`<html[^>]*lang="${locale === "pt" ? "pt-BR" : locale}"`, "u"),
      `${route}: document language`,
    );
    assert.equal(
      (html.match(/<h1(?:\s|>)/gu) ?? []).length,
      1,
      `${route}: exactly one h1`,
    );
    assert.ok(
      html.includes(`href="https://langia.online${route}"`),
      `${route}: canonical URL`,
    );
    assert.match(
      html,
      /<meta name="description" content="[^"]+"/u,
      `${route}: description`,
    );
    assert.match(html, /application\/ld\+json/u, `${route}: structured data`);
    for (const match of html.matchAll(/(?:src|href)="(\/images\/[^"?#]+)"/gu))
      imagePaths.add(match[1]);
    for (const match of html.matchAll(/url=(%2Fimages%2F[^&"\s]+)/gu))
      imagePaths.add(decodeURIComponent(match[1]));
    if (path === "") {
      assert.doesNotMatch(
        html,
        /Sample learner voice|awaiting approved testimonial|Caladan/u,
        `${route}: no unapproved claims or reference branding`,
      );
      assert.match(html, /id="tailored"/u, `${route}: TailorED section`);
      assert.match(html, /id="global-english"/u, `${route}: listening section`);
      for (const match of html.matchAll(/href="(\/[^"?#]*)/gu))
        if (!match[1].startsWith("//") && !match[1].startsWith("/_next/"))
          localLinks.add(match[1]);
      for (const match of html.matchAll(/href="#([^"\s]+)"/gu))
        assert.ok(
          html.includes(`id="${match[1]}"`),
          `${route}: anchor ${match[1]}`,
        );
    }
    checked++;
  }
}
for (const path of imagePaths) await access(resolve("public", `.${path}`));
for (const path of localLinks)
  assert.equal(
    (await fetch(`${base}${path}`)).status,
    200,
    `${path}: linked route`,
  );
for (const path of ["/robots.txt", "/sitemap.xml"])
  assert.equal((await fetch(`${base}${path}`)).status, 200, path);
for (const path of [
  "/about",
  "/contact",
  "/programs",
  "/test-your-english-level",
]) {
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  assert.equal(response.status, 308, `${path}: legacy redirect`);
  assert.equal(
    new URL(response.headers.get("location"), base).pathname,
    `/es${path}`,
    `${path}: legacy locale destination`,
  );
}
assert.equal((await fetch(`${base}/de`)).status, 404, "unsupported locale");
console.log(
  JSON.stringify(
    {
      passed: true,
      localizedRoutes: checked,
      linkedHomepageRoutes: localLinks.size,
      existingImageFiles: imagePaths.size,
      legacyRedirects: 4,
      discoveryFiles: 2,
    },
    null,
    2,
  ),
);
