import sharp from 'sharp';
const W=1200,H=630;
const bg=await sharp('src/assets/demos/sala-premier/fachada-centro.jpg')
  .resize(W,H,{fit:'cover',position:'north'}).blur(7).modulate({brightness:.5,saturation:1.05}).toBuffer();
const logo=await sharp('src/assets/demos/sala-premier/wordmark.png').resize({width:700}).toBuffer();
const lm=await sharp(logo).metadata();
const overlay=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs>
<radialGradient id="v" cx="50%" cy="46%" r="70%"><stop offset="0" stop-color="#0d0909" stop-opacity=".25"/><stop offset="1" stop-color="#0d0909" stop-opacity=".88"/></radialGradient>
<linearGradient id="l" x1="0" x2="1"><stop offset="0" stop-color="#d1a650" stop-opacity="0"/><stop offset=".5" stop-color="#d1a650"/><stop offset="1" stop-color="#d1a650" stop-opacity="0"/></linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#v)"/>
<rect x="22" y="22" width="${W-44}" height="${H-44}" fill="none" stroke="#d1a650" stroke-opacity=".85" stroke-width="1.5"/>
<rect x="30" y="30" width="${W-60}" height="${H-60}" fill="none" stroke="#d1a650" stroke-opacity=".4" stroke-width="1"/>
<rect x="380" y="418" width="440" height="1.5" fill="url(#l)"/>
<text x="600" y="486" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="44" fill="#f7ecd6">Un pub de película</text>
<text x="600" y="540" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="19" letter-spacing="7" fill="#d1a650">MÁLAGA · GRANADA · CUATRO SALAS</text>
</svg>`);
await sharp(bg).composite([{input:overlay},{input:logo,left:Math.round((W-lm.width)/2),top:90}])
  .jpeg({quality:86,mozjpeg:true}).toFile('public/demo-og/sala-premier.jpg');
console.log('ok');
