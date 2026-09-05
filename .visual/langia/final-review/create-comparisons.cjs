const sharp = require('sharp');
const path = require('path');
const root = __dirname;
const pairs = [
  ['hero','hero_initial_t00-00-00-000.jpg'],
  ['hero-clear','hero_image_only_clear_t00-00-08-100.jpg'],
  ['hero-blur','hero_blur_scale_mid_t00-00-09-000.jpg'],
  ['hero-takeover-mid','white_takeover_mid_t00-00-18-250.jpg'],
  ['program','service01_center_t00-00-25-250.jpg'],
  ['process','panels_phase01_t00-00-39-000.jpg'],
  ['tailored','team_center_t00-00-44-500.jpg'],
  ['stories','testimonials_hero_t00-00-49-000.jpg'],
  ['resources','insights_center_t00-01-07-750.jpg'],
  ['faq','faq_initial_t00-01-00-750.jpg'],
  ['conversion','final_cta_full_t00-01-09-750.jpg'],
  ['footer','footer_final_t00-01-16-000.jpg'],
];
async function combine(a,b,out,w,h){
  const images=await Promise.all([a,b].map(p=>sharp(p).resize(w,h).toBuffer()));
  await sharp({create:{width:w*2,height:h,channels:3,background:'#fff'}}).composite(images.map((input,i)=>({input,top:0,left:i*w}))).jpeg({quality:92}).toFile(path.join(root,'compare',out+'.jpg'));
}
(async()=>{
  for(const[name,ref]of pairs)await combine(path.join(root,'../../reference/keyframes',ref),path.join(root,'desktop',name+'.png'),name,958,473);
  await combine(path.join(root,'history/es-360x800-programs.png'),path.join(root,'responsive-post-fix/es-360x800-regular-programs.png'),'localized-heading-fix',360,800);
  await combine(path.join(root,'history/pt-768x1024-program-4.png'),path.join(root,'responsive-post-fix/pt-768x1024-comparison.png'),'comparison-action-fix',576,768);
  await combine(path.join(root,'history/es-1024x768-conversion-end.png'),path.join(root,'final-contrast/es-1024x768-finale.png'),'finale-contrast-fix',1024,768);
  await combine(path.join(root,'history/es-360x800-hero.png'),path.join(root,'hero-final/es360-initial.png'),'narrow-hero-fix',360,800);
})().catch(e=>{console.error(e);process.exit(1)});
