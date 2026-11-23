import sharp from 'sharp';
const W = 1200,
	H = 630;
const A = 'src/assets/demos/begobe';

// Foto en arco a la derecha
const AW = 430,
	AH = 560;
const archMask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${AW}" height="${AH}"><path d="M0 ${AW / 2}A${AW / 2} ${AW / 2} 0 0 1 ${AW} ${AW / 2}V${AH - 26}q0 26-26 26H26q-26 0-26-26z" fill="#fff"/></svg>`);
const arch = await sharp(`${A}/tosta-huevos.jpg`)
	.resize(AW, AH, { fit: 'cover', position: 'centre' })
	.composite([{ input: archMask, blend: 'dest-in' }])
	.png()
	.toBuffer();

const round = 190;
const roundMask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${round}" height="${round}"><circle cx="${round / 2}" cy="${round / 2}" r="${round / 2}" fill="#fff"/></svg>`);
const batido = await sharp(`${A}/batidos.jpg`)
	.resize(round, round, { fit: 'cover' })
	.composite([{ input: roundMask, blend: 'dest-in' }])
	.png()
	.toBuffer();

const logo = await sharp(`${A}/logo-stack-navy.png`).resize({ height: 150 }).toBuffer();

const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<defs><pattern id="d" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="4.6" fill="#2b5cab"/></pattern>
<linearGradient id="f" x1="0" y1="0" x2="1" y2="1"><stop offset=".3" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<mask id="m"><rect width="${W}" height="${H}" fill="url(#f)"/></mask></defs>
<rect width="${W}" height="${H}" fill="#f6efe3"/>
<path d="M${W - 470} ${60 + 215}A215 215 0 0 1 ${W - 40} ${60 + 215}V${H - 20}H${W - 470}z" fill="url(#d)" mask="url(#m)" opacity=".8"/>
<text x="72" y="300" font-family="Georgia, serif" font-size="70" fill="#0a475c">Tu cafetería</text>
<text x="72" y="376" font-family="Georgia, serif" font-size="70" fill="#0a475c">de <tspan font-style="italic" fill="#e8742a">confianza</tspan></text>
<path d="M172 394c60-10 130-12 210-6" stroke="#0a475c" stroke-width="4" fill="none" stroke-linecap="round"/>
<text x="74" y="458" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#4b5d62">Panadería · Cafetería · Cocina non stop</text>
<rect x="72" y="500" width="412" height="52" rx="26" fill="#0a475c"/>
<text x="278" y="534" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" letter-spacing="2" fill="#fffaf1">TORREMOLINOS · SOHO MÁLAGA</text>
</svg>`);

await sharp(bg)
	.composite([
		{ input: logo, left: 72, top: 52 },
		{ input: arch, left: W - AW - 60, top: 40 },
		{ input: batido, left: W - AW - 150, top: H - round - 30 },
	])
	.jpeg({ quality: 86, mozjpeg: true })
	.toFile('public/demo-og/begobe.jpg');
console.log('ok');
