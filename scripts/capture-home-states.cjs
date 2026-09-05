#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.argv[2] ?? "http://127.0.0.1:4173/en";
const outputDir = path.resolve(process.argv[3] ?? ".visual/langia/current");
const viewport = {
  width: Number(process.argv[4] ?? 1918),
  height: Number(process.argv[5] ?? 946),
};

const stickyStates = [
  {
    selector: "#top",
    prefix: "hero",
    progress: [0, 0.03, 0.055, 0.1, 0.14, 0.19, 0.21, 0.23, 0.34, 0.55, 0.68, 0.72, 0.82, 0.9, 0.96, 1],
  },
  {
    selector: "#transformation",
    prefix: "transformation",
    progress: [0, 0.1, 0.18, 0.26, 0.36, 0.46, 0.56, 0.7, 0.84, 1],
  },
];

const sectionStates = [
  ["#credibility", "credibility"],
  ["#programs", "programs"],
  ["#process", "process"],
  ["#tailored", "tailored"],
  ["#metrics", "metrics"],
  ["#corporate-home", "corporate"],
  ["#resources-home", "resources"],
  ["#faq", "faq"],
  ["#conversion", "conversion"],
  ["footer", "footer"],
];

async function settle(page, delay = 180) {
  await page.evaluate(
    () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
  );
  await page.waitForTimeout(delay);
}

async function screenshot(page, name) {
  const file = path.join(outputDir, `${name}.png`);
  await page.screenshot({ path: file, animations: "allow" });
  return file;
}

async function run() {
  await fs.mkdir(outputDir, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage"],
  });
  const context = await browser.newContext({
    viewport,
    screen: viewport,
    deviceScaleFactor: 1,
    locale: "en-US",
    timezoneId: "UTC",
    colorScheme: "light",
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2200);
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
    document.querySelector("nextjs-portal")?.remove();
  });
  await settle(page, 350);

  const metrics = {
    baseUrl,
    viewport,
    page: await page.evaluate(() => ({
      scrollHeight: document.documentElement.scrollHeight,
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    })),
    captures: [],
    interactions: [],
    consoleErrors,
    pageErrors,
  };

  for (const state of stickyStates) {
    const locator = page.locator(state.selector);
    if (!(await locator.count())) continue;
    const geometry = await locator.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY,
        height: element.offsetHeight,
        travel: Math.max(1, element.offsetHeight - window.innerHeight),
      };
    });
    for (const progress of state.progress) {
      if (state.selector === "#top") {
        await page.evaluate(() => {
          document.querySelector("#top button[aria-pressed]")?.click();
        });
      }
      const y = geometry.top + geometry.travel * progress;
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await settle(page);
      const name = `${state.prefix}-p${String(Math.round(progress * 100)).padStart(3, "0")}`;
      const file = await screenshot(page, name);
      metrics.captures.push({ name, selector: state.selector, progress, y, file, geometry });
    }
  }

  for (const [selector, prefix] of sectionStates) {
    const locator = page.locator(selector).first();
    if (!(await locator.count())) continue;
    const geometry = await locator.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return { top: rect.top + window.scrollY, height: element.offsetHeight };
    });
    for (const [suffix, offset] of [["start", 0], ["mid", 0.46]]) {
      const y = Math.min(
        Math.max(0, metrics.page.scrollHeight - viewport.height),
        geometry.top + Math.max(0, geometry.height - viewport.height) * offset,
      );
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await settle(page, 240);
      const name = `${prefix}-${suffix}`;
      const file = await screenshot(page, name);
      metrics.captures.push({ name, selector, offset, y, file, geometry });
    }
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await settle(page);
  const programCards = page.locator("#programs [data-program-card]");
  const programCount = await programCards.count();
  const programTops = [];
  for (let index = 0; index < programCount; index += 1) {
    programTops.push(await programCards.nth(index).evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return rect.top + window.scrollY;
    }));
  }
  for (let index = 0; index < programCount; index += 1) {
    for (const [suffix, delta] of [["settled", 80], ["overlap", viewport.height * 0.48]]) {
      const y = Math.min(metrics.page.scrollHeight - viewport.height, programTops[index] - 118 + delta);
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await settle(page, 260);
      const name = `program-card-${index + 1}-${suffix}`;
      const file = await screenshot(page, name);
      metrics.interactions.push({ name, file, y });
    }
  }

  const processPanels = page.locator("#process [data-process-panel]");
  if (await processPanels.count()) {
    await page.locator("#process [data-process-rail]").scrollIntoViewIfNeeded();
    for (let index = 0; index < await processPanels.count(); index += 1) {
      await processPanels.nth(index).hover();
      await settle(page, 780);
      const name = `process-panel-${index + 1}`;
      const file = await screenshot(page, name);
      metrics.interactions.push({ name, file });
    }
  }

  const proofPanels = page.locator("#credibility [data-proof-panel]");
  if (await proofPanels.count()) {
    await page.locator("#credibility [data-proof-rail]").scrollIntoViewIfNeeded();
    for (let index = 0; index < await proofPanels.count(); index += 1) {
      await proofPanels.nth(index).hover();
      await settle(page, 420);
      const name = `proof-panel-${index + 1}`;
      const file = await screenshot(page, name);
      metrics.interactions.push({ name, file });
    }
  }

  const faqButtons = page.locator("#faq button[aria-controls^='home-faq-panel-']");
  if (await faqButtons.count()) {
    await page.locator("#faq").scrollIntoViewIfNeeded();
    for (let index = 0; index < Math.min(3, await faqButtons.count()); index += 1) {
      await faqButtons.nth(index).click();
      await settle(page, 520);
      const name = `faq-item-${index + 1}`;
      const file = await screenshot(page, name);
      metrics.interactions.push({ name, file });
    }
  }

  const footer = page.locator("footer").first();
  if (await footer.count()) {
    const geometry = await footer.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return { top: rect.top + window.scrollY, height: element.offsetHeight };
    });
    const offsets = [-0.8 * viewport.height, -0.5 * viewport.height, -0.22 * viewport.height, 0, Math.max(0, geometry.height - viewport.height) * 0.5, Math.max(0, geometry.height - viewport.height)];
    for (let index = 0; index < offsets.length; index += 1) {
      const y = Math.min(metrics.page.scrollHeight - viewport.height, Math.max(0, geometry.top + offsets[index]));
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await settle(page, 260);
      const name = `footer-stage-${index + 1}`;
      const file = await screenshot(page, name);
      metrics.interactions.push({ name, file, y });
    }
  }

  await fs.writeFile(path.join(outputDir, "capture.json"), JSON.stringify(metrics, null, 2));
  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
