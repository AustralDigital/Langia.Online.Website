#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require("playwright");

const baseUrl = process.argv[2] ?? "http://127.0.0.1:4173/en";
const outputDir = path.resolve(process.argv[3] ?? ".visual/langia/final-qa");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function settle(page, delay = 300) {
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  await page.waitForTimeout(delay);
}

async function run() {
  await fs.mkdir(outputDir, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ["--disable-dev-shm-usage"] });
  const report = { baseUrl, desktop: {}, mobile: {}, reducedMotion: {}, consoleErrors: [], pageErrors: [] };

  const desktop = await browser.newContext({
    viewport: { width: 1918, height: 946 },
    screen: { width: 1918, height: 946 },
    deviceScaleFactor: 1,
    locale: "en-US",
    timezoneId: "UTC",
    colorScheme: "light",
    reducedMotion: "no-preference",
  });
  const page = await desktop.newPage();
  page.on("console", (message) => { if (message.type() === "error") report.consoleErrors.push(message.text()); });
  page.on("pageerror", (error) => report.pageErrors.push(error.message));
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2200);
  await page.evaluate(() => document.querySelector("nextjs-portal")?.remove());

  report.desktop.dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
  }));
  assert(report.desktop.dimensions.clientWidth === report.desktop.dimensions.scrollWidth, "Desktop has horizontal overflow");

  report.desktop.navInitial = await page.locator("[data-navbar-primary]").boundingBox();
  assert(report.desktop.navInitial && Math.abs(report.desktop.navInitial.x - 30) < 3, "Desktop overlay nav is not at the measured left inset");
  assert(await page.locator("[data-navbar-actions]").isVisible(), "Desktop hero actions should be visible initially");
  await page.evaluate(() => window.scrollTo(0, 180));
  await settle(page, 650);
  report.desktop.heroActionsAfterScroll = await page.locator("[data-navbar-actions]").evaluate((element) => getComputedStyle(element).opacity);
  assert(Number(report.desktop.heroActionsAfterScroll) < 0.05, "Desktop hero actions did not exit after the hero foreground");

  await page.locator("#programs [data-program-card]").first().scrollIntoViewIfNeeded();
  await settle(page);
  report.desktop.programCard = await page.locator("#programs [data-program-card]").first().boundingBox();
  assert(report.desktop.programCard && report.desktop.programCard.width > 1400 && report.desktop.programCard.height >= 620, "Program card proportions are outside the reference range");

  const processPanels = page.locator("#process [data-process-panel]");
  await page.locator("#process [data-process-rail]").scrollIntoViewIfNeeded();
  await processPanels.first().hover();
  await settle(page, 420);
  report.desktop.processWidths = await processPanels.evaluateAll((elements) => elements.map((element) => Math.round(element.getBoundingClientRect().width)));
  assert(report.desktop.processWidths[0] > report.desktop.processWidths[1] * 2.5, "Process panels did not expand to the intended 3:1 ratio");

  const proofPanels = page.locator("#credibility [data-proof-panel]");
  await page.locator("#credibility [data-proof-rail]").scrollIntoViewIfNeeded();
  await proofPanels.first().hover();
  await settle(page, 420);
  report.desktop.proofWidths = await proofPanels.evaluateAll((elements) => elements.map((element) => Math.round(element.getBoundingClientRect().width)));
  assert(report.desktop.proofWidths[0] > report.desktop.proofWidths[1] * 1.8, "Proof panels did not expand to the intended 2:1 ratio");

  const faqButtons = page.locator("#faq button[aria-controls^='home-faq-panel-']");
  await faqButtons.nth(1).click();
  await settle(page, 550);
  report.desktop.faq = {
    first: await faqButtons.nth(0).getAttribute("aria-expanded"),
    second: await faqButtons.nth(1).getAttribute("aria-expanded"),
  };
  assert(report.desktop.faq.first === "false" && report.desktop.faq.second === "true", "FAQ single-open interaction is not working");
  await page.screenshot({ path: path.join(outputDir, "desktop-faq-open.png") });
  await desktop.close();

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    screen: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    locale: "en-US",
    timezoneId: "UTC",
    colorScheme: "light",
  });
  const mobilePage = await mobile.newPage();
  mobilePage.on("console", (message) => { if (message.type() === "error") report.consoleErrors.push(message.text()); });
  mobilePage.on("pageerror", (error) => report.pageErrors.push(error.message));
  await mobilePage.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await mobilePage.waitForTimeout(1800);
  report.mobile.dimensions = await mobilePage.evaluate(() => ({ clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth }));
  assert(report.mobile.dimensions.clientWidth === report.mobile.dimensions.scrollWidth, "Mobile has horizontal overflow");
  const menuButton = mobilePage.locator("header button[aria-controls]").first();
  report.mobile.menuLabel = await menuButton.getAttribute("aria-label");
  assert(report.mobile.menuLabel, "Mobile menu toggle is missing its accessible label");
  await menuButton.click();
  await settle(mobilePage);
  report.mobile.menuOpen = await menuButton.getAttribute("aria-expanded");
  report.mobile.bodyOverflowOpen = await mobilePage.evaluate(() => document.body.style.overflow);
  assert(report.mobile.menuOpen === "true" && report.mobile.bodyOverflowOpen === "hidden", "Mobile menu did not open and lock body scroll");
  await mobilePage.screenshot({ path: path.join(outputDir, "mobile-menu-open.png") });
  await mobilePage.keyboard.press("Escape");
  await settle(mobilePage);
  report.mobile.menuAfterEscape = await menuButton.getAttribute("aria-expanded");
  assert(report.mobile.menuAfterEscape === "false", "Mobile menu did not close with Escape");
  await mobilePage.locator("#programs").scrollIntoViewIfNeeded();
  await settle(mobilePage);
  await mobilePage.screenshot({ path: path.join(outputDir, "mobile-programs.png") });
  await mobile.close();

  const reduced = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: "reduce" });
  const reducedPage = await reduced.newPage();
  await reducedPage.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await reducedPage.waitForTimeout(1200);
  report.reducedMotion.heroHeight = await reducedPage.locator("#top").evaluate((element) => element.offsetHeight);
  assert(report.reducedMotion.heroHeight < 1200, "Reduced-motion hero still uses the long sticky scroll scene");
  await reduced.close();

  assert(report.consoleErrors.length === 0, `Console errors: ${report.consoleErrors.join(" | ")}`);
  assert(report.pageErrors.length === 0, `Page errors: ${report.pageErrors.join(" | ")}`);
  await fs.writeFile(path.join(outputDir, "report.json"), JSON.stringify(report, null, 2));
  await browser.close();
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
