// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Lee la lista de works (slug + img) desde el módulo de contenido.
 * El módulo es TypeScript así que hacemos una extracción regex tolerante
 * para no añadir una dependencia al build.
 */
function readWorks() {
	try {
		const file = resolve(__dirname, 'src/data/content.ts');
		const src = readFileSync(file, 'utf8');
		const blocks = src.split(/\{\s*slug:\s*'([^']+)'/).slice(1);
		const works = [];
		for (let i = 0; i < blocks.length; i += 2) {
			const slug = blocks[i];
			const tail = blocks[i + 1] ?? '';
			const imgMatch = tail.match(/img:\s*'([^']+)'/);
			if (slug && imgMatch) {
				works.push({ slug, img: imgMatch[1] });
			}
		}
		return works;
	} catch {
		return [];
	}
}

const workImages = new Map(
	readWorks().map((w) => [w.slug, `https://domindez.com${w.img}`])
);

export default defineConfig({
	site: 'https://domindez.com',
	compressHTML: true,
	trailingSlash: 'never',
	build: {
		inlineStylesheets: 'auto',
	},
	integrations: [
		sitemap({
			changefreq: 'monthly',
			priority: 0.7,
			lastmod: new Date(),
			entryLimit: 45000,
			filter: (page) =>
				!page.includes('/404') &&
				!page.includes('/api/') &&
				!page.includes('/admin/'),
			customSitemaps: [
				'https://domindez.com/sitemap-images.xml',
			],
			serialize: (item) => {
				const url = new URL(item.url);
				const path = url.pathname.replace(/\/$/, '') || '/';

				let priority = 0.7;
				let changefreq = 'monthly';
				let images = [];

				if (path === '/' || path === '') {
					priority = 1.0;
					changefreq = 'weekly';
					images = [
						{
							url: 'https://domindez.com/og-image.png',
							title: 'Domindez Studio — Diseño y desarrollo web a medida',
							caption: 'Estudio de diseño y desarrollo web en Málaga',
						},
					];
				} else {
					const workMatch = path.match(/^\/works\/([^/]+)$/);
					if (workMatch) {
						const slug = workMatch[1];
						const img = workImages.get(slug);
						priority = 0.8;
						changefreq = 'monthly';
						if (img) {
							images = [{ url: img, title: `Caso de estudio: ${slug}` }];
						}
					} else if (
						path.startsWith('/aviso-legal') ||
						path.startsWith('/politica-')
					) {
						priority = 0.3;
						changefreq = 'yearly';
					}
				}

				return {
					...item,
					changefreq,
					priority,
					images,
				};
			},
		}),
	],
});
