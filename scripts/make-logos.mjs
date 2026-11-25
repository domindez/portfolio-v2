// Genera los iconos y logos de public/ a partir de public/favicon.svg,
// que es el mismo dibujo que el logo del header (src/components/Header.astro).
//
// Uso: node scripts/make-logos.mjs

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const out = (name) => fileURLToPath(new URL(`../public/${name}`, import.meta.url));

const BG = '#f5f5f0';
const DARK = '#0a0a0a';
const ACCENT = '#c3ff00';

const source = await readFile(out('favicon.svg'), 'utf8');
const inner = source.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
// La marca sin el rectángulo de fondo
const mark = inner.replace(/<rect[^>]*\/>/, '');

const svg = (size, body) =>
	`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">${body}</svg>`;

const png = (markup) => sharp(Buffer.from(markup)).png({ compressionLevel: 9 }).toBuffer();

// Igual que en el header: esquinas redondeadas y transparentes
const rounded = (size) => png(svg(size, inner));

// Fondo a sangre para los sistemas que aplican su propia máscara.
// `scale` encoge la marca hacia el centro para que no se recorte.
const fullBleed = (size, scale = 1) =>
	png(
		svg(
			size,
			`<rect width="32" height="32" fill="${BG}"/>` +
				`<g transform="translate(16 16) scale(${scale}) translate(-16 -16)">${mark}</g>`,
		),
	);

// Contenedor ICO con imágenes PNG dentro
function ico(images) {
	const header = Buffer.alloc(6 + images.length * 16);
	header.writeUInt16LE(1, 2);
	header.writeUInt16LE(images.length, 4);
	let offset = header.length;
	images.forEach(({ size, data }, i) => {
		const entry = 6 + i * 16;
		header.writeUInt8(size, entry);
		header.writeUInt8(size, entry + 1);
		header.writeUInt16LE(1, entry + 4);
		header.writeUInt16LE(32, entry + 6);
		header.writeUInt32LE(data.length, entry + 8);
		header.writeUInt32LE(offset, entry + 12);
		offset += data.length;
	});
	return Buffer.concat([header, ...images.map(({ data }) => data)]);
}

const wide = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
	<rect width="1200" height="630" fill="${DARK}"/>
	<svg x="100" y="205" width="220" height="220" viewBox="0 0 32 32">${inner}</svg>
	<g font-family="Segoe UI, Arial, sans-serif" fill="${BG}">
		<text x="380" y="335" font-size="112" font-weight="600">Domindez<tspan fill="${ACCENT}" font-size="64">.studio</tspan></text>
		<text x="385" y="410" font-size="32">Diseño y desarrollo web a medida</text>
	</g>
</svg>`;

const files = {
	'favicon.ico': ico(
		await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await rounded(size) }))),
	),
	'favicon-32.png': await rounded(32),
	'icon-192.png': await rounded(192),
	'icon-512.png': await rounded(512),
	'icon-maskable-512.png': await fullBleed(512, 0.78),
	'apple-touch-icon.png': await fullBleed(180),
	'logo.png': await fullBleed(512),
	'logo-square.png': await fullBleed(512),
	'logo-wide.png': await png(wide),
};

for (const [name, data] of Object.entries(files)) {
	await writeFile(out(name), data);
	console.log(name);
}
