// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Demos comerciales de Domindez Studio, servidas en https://demos.domindez.com/<slug>.
 * Proyecto independiente del portfolio (raíz del repo): cada demo es una página
 * propia en src/pages/<slug>/, así que su CSS solo se carga en sus páginas.
 * Sin sitemap: las demos no se indexan (noindex + robots.txt).
 */
export default defineConfig({
	site: 'https://demos.domindez.com',
	compressHTML: true,
	trailingSlash: 'never',
	build: {
		inlineStylesheets: 'auto',
	},
});
