/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE);

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const routes = [
  "/",
  "/about",
  "/blog",
  "/blog/how-to-choose-the-right-english-program",
  "/blog/how-to-prepare-for-a-language-exam",
  "/blog/what-is-ai-assisted-language-learning",
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
const widths = [390, 1440];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    reducedMotion: "reduce",
    viewport: { width: widths[0], height: 900 },
  });
  const failures = [];

  for (const route of routes) {
    for (const width of widths) {
      await page.setViewportSize({ width, height: width < 768 ? 900 : 1000 });
      await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle", timeout: 30000 });
      await page.evaluate(async () => {
        await document.fonts.ready;
        const step = Math.max(window.innerHeight * 0.8, 600);
        const bottom = document.documentElement.scrollHeight - window.innerHeight;

        for (let top = 0; top < bottom; top += step) {
          window.scrollTo(0, top);
          await new Promise((resolve) => window.setTimeout(resolve, 24));
        }

        window.scrollTo(0, bottom);
        await new Promise((resolve) => window.setTimeout(resolve, 50));
        window.scrollTo(0, 0);
      });
      await page.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
      const result = await page.evaluate(async () => {
        const audit = await window.axe.run(document, {
          runOnly: {
            type: "tag",
            values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"],
          },
        });
        return audit.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          help: violation.help,
          nodes: violation.nodes.slice(0, 5).map((node) => ({
            target: node.target,
            summary: node.failureSummary,
          })),
        }));
      });

      if (result.length > 0) failures.push({ route, width, violations: result });
    }
  }

  await browser.close();
  process.stdout.write(`${JSON.stringify({ routes: routes.length, widths, failures }, null, 2)}\n`);
  if (failures.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
