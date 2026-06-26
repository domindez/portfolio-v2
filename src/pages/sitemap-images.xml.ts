import type { APIRoute } from 'astro';
import { works } from '../data/content';

const SITE = 'https://domindez.com';

const staticImages: { loc: string; title: string; caption?: string }[] = [
	{
		loc: `${SITE}/`,
		title: 'Domindez Studio — Diseño y desarrollo web a medida',
		caption: 'Estudio boutique de diseño y desarrollo web en Málaga, España',
	},
	{
		loc: `${SITE}/og-image.png`,
		title: 'Domindez Studio — Open Graph image',
		caption: 'Imagen principal usada al compartir Domindez Studio en redes',
	},
	{
		loc: `${SITE}/logo-square.png`,
		title: 'Logo de Domindez Studio',
		caption: 'Logotipo cuadrado (512x512) usado como logo de la organización',
	},
	{
		loc: `${SITE}/me.webp`,
		title: 'Daniel Domínguez, fundador de Domindez Studio',
		caption: 'Foto del fundador para la entidad Person del schema.org',
	},
];

export const GET: APIRoute = () => {
	const now = new Date().toISOString();
	const workImages = works.map((w) => ({
		loc: `${SITE}/works/${w.slug}`,
		title: `${w.title} — Caso de estudio`,
		caption: w.description,
		image: `${SITE}${w.img}`,
	}));

	const urlSet = [
		...staticImages.map((img) =>
			[
				'  <url>',
				`    <loc>${escapeXml(img.loc)}</loc>`,
				`    <image:image>`,
				`      <image:loc>${escapeXml(img.loc)}</image:loc>`,
				`      <image:title>${escapeXml(img.title)}</image:title>`,
				img.caption
					? `      <image:caption>${escapeXml(img.caption)}</image:caption>`
					: '',
				'    </image:image>',
				'  </url>',
			]
				.filter(Boolean)
				.join('\n'),
		),
		...workImages.map((w) =>
			[
				'  <url>',
				`    <loc>${escapeXml(w.loc)}</loc>`,
				`    <image:image>`,
				`      <image:loc>${escapeXml(w.image)}</image:loc>`,
				`      <image:title>${escapeXml(w.title)}</image:title>`,
				`      <image:caption>${escapeXml(w.caption)}</image:caption>`,
				'    </image:image>',
				'  </url>',
			].join('\n'),
		),
	].join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <lastmod>${now}</lastmod>
${urlSet}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
