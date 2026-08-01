/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE);
const path = require("node:path");

async function main() {
  const [url, outputDir, width = "1440", height = "1000"] = process.argv.slice(2);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: Number(width), height: Number(height) },
    reducedMotion: "no-preference",
  });

  await page.goto(url, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "html{scroll-behavior:auto!important}" });

  const sections = [
    ["hero", "main > section:nth-of-type(1)"],
    ["journey", "#journey"],
    ["credibility", "#credibility"],
    ["programs", "#programs"],
    ["method", "#method"],
    ["process", "#process"],
    ["tailored", "#tailored"],
    ["experiences", "#experiences"],
    ["faq", "#faq"],
    ["final", "main > section:nth-last-of-type(1)"],
  ];

  for (const [name, selector] of sections) {
    const section = page.locator(selector);
    if (!(await section.count())) continue;
    await section.evaluate((element) => {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, top);
    });
    await page.waitForTimeout(1000);
    await page.locator("main").evaluate((main) => {
      main.querySelectorAll('[style*="opacity"]').forEach((element) => {
        if (window.getComputedStyle(element).opacity === "0") {
          element.style.opacity = "1";
          element.style.transform = "none";
        }
      });
    });
    await page.screenshot({ path: path.join(outputDir, `${name}.png`) });
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
