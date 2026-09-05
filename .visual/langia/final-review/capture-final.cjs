const fs = require('fs');
const { chromium } = require('/workspaces/Langia.Online.Website/node_modules/playwright');
const dir = '/workspaces/Langia.Online.Website/.visual/langia/final-review';
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1918, height: 946 }, deviceScaleFactor: 1 });
  const errors = []; page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('http://127.0.0.1:4174/en', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => Object.keys(document.querySelector('#top button')).some(k => k.startsWith('__reactProps')));
  await page.getByRole('button', {name: 'Pause language rotation'}).click();
  async function capture(name, y) {
    await page.evaluate(top => scrollTo({ top, behavior: 'instant' }), y);
    await page.waitForFunction(() => [...document.images].filter(i => {const r=i.getBoundingClientRect();return r.width>0&&r.height>0&&r.top<innerHeight&&r.bottom>0}).every(i => i.complete && i.naturalWidth > 0), null, { timeout: 20000 }).catch(() => {});
    await page.waitForTimeout(750);
    await page.screenshot({path:`${dir}/desktop/${name}.png`});
    return page.evaluate(() => ({y:scrollY,foreground:document.querySelector('[data-hero-foreground]').style.opacity,support:document.querySelector('[data-hero-support]').style.opacity,filter:document.querySelector('#top img').parentElement.style.filter,whiteTop:document.querySelector('#transformation').getBoundingClientRect().top}));
  }
  const distance = await page.locator('#top').evaluate(el => el.offsetHeight-innerHeight);
  const motion = [];
  for(const [name, progress] of [['hero',0],['hero-copy-exit',.13],['hero-logos',.25],['hero-clear',.405],['hero-blur',.56],['hero-takeover-start',.64],['hero-takeover-mid',.86],['hero-takeover-end',1.1]]) motion.push({name,progress,...await capture(name,distance*progress)});
  for(const [name,selector] of [['human','#transformation'],['program','#programs [data-program-card]'],['process','#process'],['tailored','#tailored'],['stories','#learner-stories'],['metrics','#metrics'],['corporate','#corporate-home'],['resources','#resources-home'],['faq','#faq'],['conversion','#conversion']]) {
    const y=await page.locator(selector).first().evaluate(el=>el.getBoundingClientRect().top+scrollY-(el.hasAttribute('data-program-card')?118:96));
    await capture(name,y);
  }
  await capture('footer',await page.evaluate(()=>document.documentElement.scrollHeight-innerHeight));
  fs.writeFileSync(`${dir}/desktop/report.json`,JSON.stringify({viewport:{width:1918,height:946,density:1},errors,motion,geometry:await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight}))},null,2));
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
