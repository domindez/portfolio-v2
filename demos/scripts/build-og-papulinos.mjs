// Genera public/demo-og/papulinos.jpg (1200×630) a partir de scripts/og-papulinos/og.html.
// Requiere Chrome instalado (CHROME_PATH para otra ruta) y `sharp`.
import { execFileSync } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const png = join(mkdtempSync(join(tmpdir(), 'og-')), 'og.png');
execFileSync(chrome, [
	'--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
	'--window-size=1200,630', '--virtual-time-budget=4000',
	`--screenshot=${png}`, pathToFileURL(resolve('scripts/og-papulinos/og.html')).href,
]);
await sharp(png).jpeg({ quality: 84, mozjpeg: true }).toFile('public/demo-og/papulinos.jpg');
console.log('ok');
