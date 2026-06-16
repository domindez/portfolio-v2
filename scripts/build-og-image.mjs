import sharp from 'sharp';
import { readFileSync, unlinkSync } from 'node:fs';
import { resolve } from 'node:path';

const svg = readFileSync(resolve('public/google/cover.svg'));
const out = resolve('public/og-image.png');

await sharp(svg, { density: 300 })
	.resize(1200, 675, { fit: 'cover' })
	.png({ compressionLevel: 9, quality: 92 })
	.toFile(out);

try {
	unlinkSync(resolve('public/og-image.jpg'));
} catch {}

console.log('OK ->', out);
