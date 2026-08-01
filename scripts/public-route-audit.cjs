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
const widths = [360, 390, 430, 768, 1024, 1280, 1440, 1920];

async function main() {
  const failures = [];

  for (const route of routes) {
    const browser = await chromium.launch({ headless: true });

    for (const width of widths) {
      const page = await browser.newPage({
        viewport: { width, height: width < 768 ? 900 : 1000 },
      });
      const browserErrors = [];

      page.on("pageerror", (error) => browserErrors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") browserErrors.push(message.text());
      });

      const response = await page.goto(`${baseUrl}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });
      await page.waitForTimeout(100);

      const result = await page.evaluate(() => {
        const root = document.documentElement;
        const visible = (element) => {
          const style = window.getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
        };
        const escaped = [...document.querySelectorAll("body *")]
          .filter(visible)
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              tag: element.tagName.toLowerCase(),
              text: (element.textContent ?? "").trim().slice(0, 50),
              left: Math.round(rect.left),
              right: Math.round(rect.right),
            };
          })
          .filter((item) => item.left < -1 || item.right > root.clientWidth + 1)
          .slice(0, 5);
        const brokenImages = [...document.images]
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src);

        return {
          clientWidth: root.clientWidth,
          scrollWidth: root.scrollWidth,
          h1Count: document.querySelectorAll("main h1").length,
          brokenImages,
          escaped,
        };
      });

      if (
        !response ||
        !response.ok() ||
        result.scrollWidth > result.clientWidth ||
        result.h1Count !== 1 ||
        result.brokenImages.length > 0 ||
        browserErrors.length > 0
      ) {
        failures.push({
          route,
          width,
          status: response?.status() ?? null,
          ...result,
          browserErrors: [...new Set(browserErrors)],
        });
      }

      await page.close();
    }

    await browser.close();
  }

  process.stdout.write(`${JSON.stringify({ routes: routes.length, widths, failures }, null, 2)}\n`);
  if (failures.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
