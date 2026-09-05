const fs=require('node:fs/promises');
const path=require('node:path');
const {chromium}=require('/workspaces/Langia.Online.Website/node_modules/playwright');
const output='/tmp/langia-final-implementation/responsive-qa/post-fix';
async function main(){
 const browser=await chromium.launch({headless:true,args:['--disable-dev-shm-usage']});
 const report=[];
 for(const language of ['es','pt'])for(const reduced of [false,true]){
  const context=await browser.newContext({viewport:{width:360,height:800},reducedMotion:reduced?'reduce':'no-preference'});
  const page=await context.newPage();
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto('http://127.0.0.1:4174/'+language,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(700);await page.evaluate(()=>document.documentElement.style.scrollBehavior='auto');
  const prefix=`${language}-360x800-${reduced?'reduced':'regular'}`;const states=[];
  for(const y of reduced?[0,120]:[0,120,220,300]){
   await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(400);await page.screenshot({path:path.join(output,`${prefix}-hero-y${y}.png`)});
   states.push(await page.evaluate(()=>{const f=document.querySelector('[data-hero-foreground]'),s=document.querySelector('[data-hero-support]'),l=document.querySelector('[data-workplace-logos]');const a=f.getBoundingClientRect(),b=s.getBoundingClientRect(),c=l.getBoundingClientRect();return{y:scrollY,foreground:{top:a.top,bottom:a.bottom,opacity:getComputedStyle(f).opacity},support:{top:b.top,bottom:b.bottom,opacity:getComputedStyle(s).opacity},logos:{top:c.top,bottom:c.bottom},gap:b.top-a.bottom}}));
  }
  let heading=null;
  if(!reduced){await page.locator('#programs').evaluate(el=>window.scrollTo(0,el.getBoundingClientRect().top+scrollY));await page.waitForTimeout(500);await page.screenshot({path:path.join(output,`${prefix}-programs.png`)});heading=await page.locator('#programs h2').evaluate(el=>({text:el.textContent,scrollWidth:el.scrollWidth,clientWidth:el.clientWidth,fontSize:getComputedStyle(el).fontSize}));}
  report.push({prefix,states,heading,errors});await context.close();
 }
 for(const [language,width,height,section,name]of [['es',1024,768,'#conversion','finale'],['pt',768,1024,'#programs','comparison']]){
  const context=await browser.newContext({viewport:{width,height}});const page=await context.newPage();await page.goto('http://127.0.0.1:4174/'+language,{waitUntil:'networkidle'});await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';return document.fonts.ready});
  const y=await page.locator(section).evaluate(el=>{const r=el.getBoundingClientRect();return r.top+scrollY+r.height-innerHeight});await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(700);await page.screenshot({path:path.join(output,`${language}-${width}x${height}-${name}.png`)});
  if(name==='comparison')report.push({comparison:await page.locator('#programs > div:last-child svg').evaluate(el=>{const r=el.getBoundingClientRect();return{width:r.width,height:r.height}})});
  await context.close();
 }
 await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2));await browser.close();
}
main().catch(error=>{console.error(error);process.exitCode=1});
