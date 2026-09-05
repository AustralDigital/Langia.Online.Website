const fs=require('node:fs/promises');
const path=require('node:path');
const sharp=require('/workspaces/Langia.Online.Website/node_modules/sharp');
const {chromium}=require('/workspaces/Langia.Online.Website/node_modules/playwright');
const output='/tmp/langia-final-implementation/responsive-qa/final-contrast';
async function main(){
 const browser=await chromium.launch({headless:true,args:['--disable-dev-shm-usage']});const reports=[];
 for(const [language,width,height]of[['es',1024,768],['en',390,844],['es',360,800],['pt',768,1024]]){
  const context=await browser.newContext({viewport:{width,height}});const page=await context.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));await page.goto('http://127.0.0.1:4174/'+language,{waitUntil:'networkidle'});await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';return document.fonts.ready});
  const y=await page.locator('#conversion').evaluate(el=>{const r=el.getBoundingClientRect();return r.top+scrollY+r.height-innerHeight});await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(700);
  const prefix=`${language}-${width}x${height}`;const box=await page.locator('#conversion h2').boundingBox();const before=await page.screenshot({path:path.join(output,prefix+'-finale.png')});await page.locator('#conversion h2').evaluate(el=>el.style.visibility='hidden');const after=await page.screenshot();
  const original=await sharp(before).removeAlpha().raw().toBuffer({resolveWithObject:true});const background=await sharp(after).removeAlpha().raw().toBuffer({resolveWithObject:true});const linear=c=>{c/=255;return c<=.04045?c/12.92:((c+.055)/1.055)**2.4};const samples=[];
  for(let py=Math.max(0,Math.ceil(box.y));py<Math.min(height,Math.floor(box.y+box.height));py++)for(let px=Math.ceil(box.x);px<Math.min(width,Math.floor(box.x+box.width));px++){const i=(py*width+px)*3;const p=[...original.data.slice(i,i+3)],b=[...background.data.slice(i,i+3)];if(p.every(c=>c>=250)&&p[0]-b[0]>30){const luminance=.2126*linear(b[0])+.7152*linear(b[1])+.0722*linear(b[2]);samples.push({x:px,y:py,background:b,contrast:1.05/(luminance+.05)});}}
  samples.sort((a,b)=>a.contrast-b.contrast);reports.push({prefix,box,samples:samples.length,min:samples[0],p10:samples[Math.floor(samples.length*.1)],median:samples[Math.floor(samples.length*.5)],below3:samples.filter(sample=>sample.contrast<3).length,errors});await context.close();
 }
 await fs.writeFile(path.join(output,'report.json'),JSON.stringify(reports,null,2));console.log(JSON.stringify(reports,null,2));await browser.close();
}
main().catch(error=>{console.error(error);process.exitCode=1});
