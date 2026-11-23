import sharp from 'sharp';
const W=1200,H=630;
const bg=await sharp('src/assets/demos/unter/terraza-pretzel.jpg')
  .resize(W,H,{fit:'cover',position:'centre'}).blur(4).modulate({brightness:.55,saturation:1.1}).toBuffer();
const logo=await sharp('src/assets/demos/unter/medallon.png').resize(250).toBuffer();
const overlay=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs><radialGradient id="v" cx="50%" cy="45%" r="75%"><stop offset="0" stop-color="#0c2416" stop-opacity=".35"/><stop offset="1" stop-color="#07170d" stop-opacity=".92"/></radialGradient></defs>
<rect width="${W}" height="${H}" fill="url(#v)"/>
<rect y="${H-2}" width="${W}" height="2" fill="#c9a45c"/>
<text x="600" y="400" text-anchor="middle" font-family="Georgia, serif" font-weight="400" font-size="96" letter-spacing="-1" fill="#f7f2e7">Untertürkheim</text>
<text x="600" y="462" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="38" fill="#e4cb94">Cervecería alemana frente al mar</text>
<text x="600" y="530" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" letter-spacing="6" fill="#c9a45c">+200 CERVEZAS · 20 GRIFOS · LA MALAGUETA</text>
</svg>`);
await sharp(bg).composite([{input:overlay},{input:logo,left:Math.round((W-250)/2),top:60}])
  .jpeg({quality:86,mozjpeg:true}).toFile('public/demo-og/unter.jpg');
console.log('ok');
