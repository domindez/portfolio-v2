// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
		}),
	],
});
