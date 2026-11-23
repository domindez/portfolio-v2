/**
 * Cervezas de la Cervecería Untertürkheim (Málaga).
 * Volcado de su carta digital real (trivify.es/cartasqr/unterturkheim).
 */

export type Lang = 'es' | 'en';
export interface Bi {
	es: string;
	en: string;
}

/* ---------------------------------------------------------
   GRIFOS
   --------------------------------------------------------- */
export interface Tap {
	id: string;
	name: string;
	abv: string;
	/** Precios 25cl / 33cl / 50cl / 1L (null = no se sirve) */
	prices: [number | null, number | null, number | null, number | null];
	style: Bi;
	country: string; // código de país (ver countries)
	/** Color del líquido y de la espuma */
	color: string;
	foam?: string;
	/** Color del tirador */
	handle: string;
	haze?: boolean;
}

export const tapSizes = ['25cl', '33cl', '50cl', '1L'] as const;

export const taps: Tap[] = [
	{ id: 'aguila', name: 'El Águila', abv: '5,5%', prices: [3, 3.8, 5.4, 10], style: { es: 'Lager sin filtrar', en: 'Unfiltered lager' }, country: 'ES', color: '#f0a92c', handle: '#b3261e', haze: true },
	{ id: 'paulaner-lager', name: 'Paulaner Lager', abv: '4,9%', prices: [null, 5, 6.4, 12], style: { es: 'Münchner Hell', en: 'Munich Helles' }, country: 'DE', color: '#f4c04a', handle: '#e9e4d6' },
	{ id: 'paulaner-trigo', name: 'Paulaner Trigo', abv: '5,5%', prices: [null, 5, 6.4, 12], style: { es: 'Hefeweizen', en: 'Hefeweizen' }, country: 'DE', color: '#efa634', handle: '#e9e4d6', haze: true },
	{ id: 'guinness', name: 'Guinness', abv: '4,2%', prices: [4.6, null, 7.7, 14.5], style: { es: 'Irish stout', en: 'Irish stout' }, country: 'IE', color: '#1c0f0a', foam: '#efe1c4', handle: '#121212' },
	{ id: 'hop-house', name: 'Hop House 13', abv: '5,0%', prices: [4.2, 5.4, 6.8, 12.7], style: { es: 'Lager lupulada', en: 'Hoppy lager' }, country: 'IE', color: '#e99b2a', handle: '#1f5d3a' },
	{ id: 'brewdog-ipa', name: 'Brewdog IPA', abv: '5,6%', prices: [4.3, 5.6, 7, 13], style: { es: 'IPA', en: 'IPA' }, country: 'UK', color: '#e48d22', handle: '#1d6fb8', haze: true },
	{ id: 'peroni', name: 'Peroni', abv: '5,0%', prices: [null, 4.8, 6.2, 11.7], style: { es: 'Lager italiana', en: 'Italian lager' }, country: 'IT', color: '#f6c85a', handle: '#13306b' },
	{ id: 'chouffe-blonde', name: 'Chouffe Blonde', abv: '8,0%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Belgian strong blonde', en: 'Belgian strong blonde' }, country: 'BE', color: '#eda233', handle: '#c4231c', haze: true },
	{ id: 'mc-chouffe', name: 'Mc Chouffe', abv: '8,0%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Belgian strong amber', en: 'Belgian strong amber' }, country: 'BE', color: '#8f3b16', handle: '#c4231c' },
	{ id: 'chouffe-cherry', name: 'Chouffe Cherry', abv: '8,0%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Afrutada de cereza', en: 'Cherry fruit beer' }, country: 'BE', color: '#86152a', foam: '#f3cfd3', handle: '#c4231c' },
	{ id: 'duvel-666', name: 'Duvel 6,66', abv: '6,66%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Belgian blond ale', en: 'Belgian blond ale' }, country: 'BE', color: '#f2bd47', handle: '#b11d24' },
	{ id: 'vedett-ipa', name: 'Vedett IPA', abv: '5,5%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Belgian IPA', en: 'Belgian IPA' }, country: 'BE', color: '#eaa43a', handle: '#2a2a2a', haze: true },
	{ id: 'brugse-zot', name: 'Brugse Zot Blonde', abv: '6,0%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Belgian blonde', en: 'Belgian blonde' }, country: 'BE', color: '#f0b23f', handle: '#d9a520' },
	{ id: 'delirium', name: 'Delirium Tremens', abv: '8,5%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Belgian strong blonde', en: 'Belgian strong blonde' }, country: 'BE', color: '#f3c552', handle: '#5b8fd6', haze: true },
	{ id: 'guillotine', name: 'La Guillotine', abv: '8,0%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Belgian strong ale', en: 'Belgian strong ale' }, country: 'BE', color: '#eeb13e', handle: '#3d3d3d' },
	{ id: 'paranoia', name: 'Paranoia', abv: '5,6%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Hazy hoppy IPA', en: 'Hazy hoppy IPA' }, country: 'BE', color: '#f2b44a', handle: '#7a3fb0', haze: true },
	{ id: 'gulden-draak', name: 'Gulden Draak', abv: '10,5%', prices: [4.4, 5.8, 7.5, 14], style: { es: 'Belgian strong dark', en: 'Belgian strong dark' }, country: 'BE', color: '#5a1e0d', foam: '#ecd9b8', handle: '#e7e2d6' },
	{ id: 'pilsner-urquell', name: 'Pilsner Urquell', abv: '4,4%', prices: [null, 4.6, 6, 11.5], style: { es: 'Pilsner checa', en: 'Czech pilsner' }, country: 'CZ', color: '#f2b330', handle: '#1f6b3c' },
	{ id: 'staropramen', name: 'Staropramen sin filtrar', abv: '5,0%', prices: [null, 4.6, 6, 11.5], style: { es: 'Lager sin filtrar', en: 'Unfiltered lager' }, country: 'CZ', color: '#eda53a', handle: '#8b1b21', haze: true },
];

export const sampler = {
	name: { es: 'Sample Chouffe', en: 'Chouffe sampler' },
	desc: {
		es: 'Chouffe Blonde, Mc Chouffe, Chouffe Cherry, Vedett IPA y Duvel 6,66. Cinco copitas de 12 cl.',
		en: 'Chouffe Blonde, Mc Chouffe, Chouffe Cherry, Vedett IPA and Duvel 6.66. Five 12 cl glasses.',
	},
	price: 13,
};

/* ---------------------------------------------------------
   PAÍSES
   --------------------------------------------------------- */
export interface Country {
	/** Fondo CSS con la bandera (franjas y forma básica) */
	flag: string;
	code: string;
	name: Bi;
	/** Dos colores para la chapa */
	colors: [string, string];
}

export const countries: Country[] = [
	{ code: 'DE', name: { es: 'Alemania', en: 'Germany' }, colors: ['#1a1a1a', '#e3b512'], flag: 'linear-gradient(180deg,#1a1a1a 0.00% 33.33%,#dd0000 33.33% 66.67%,#ffce00 66.67% 100.00%)' },
	{ code: 'BE', name: { es: 'Bélgica', en: 'Belgium' }, colors: ['#e3b512', '#c8202f'], flag: 'linear-gradient(90deg,#1a1a1a 0.00% 33.33%,#fdda24 33.33% 66.67%,#ef3340 66.67% 100.00%)' },
	{ code: 'ES', name: { es: 'España', en: 'Spain' }, colors: ['#c8202f', '#f2c230'], flag: 'linear-gradient(180deg,#c60b1e 0 25%,#ffc400 25% 75%,#c60b1e 75%)' },
	{ code: 'CZ', name: { es: 'Rep. Checa', en: 'Czechia' }, colors: ['#1d4f9c', '#f4f1ea'], flag: 'linear-gradient(90deg,#11457e 0 30%,transparent 30%),linear-gradient(180deg,#fff 0 50%,#d7141a 50%)' },
	{ code: 'UK', name: { es: 'Reino Unido', en: 'United Kingdom' }, colors: ['#1d3a7a', '#c8202f'], flag: 'linear-gradient(90deg,transparent 42%,#c8102e 42% 58%,transparent 58%),linear-gradient(180deg,transparent 42%,#c8102e 42% 58%,transparent 58%),linear-gradient(90deg,transparent 34%,#fff 34% 66%,transparent 66%),linear-gradient(180deg,transparent 34%,#fff 34% 66%,transparent 66%),#012169' },
	{ code: 'NL', name: { es: 'Holanda', en: 'Netherlands' }, colors: ['#e05a1c', '#1d3a7a'], flag: 'linear-gradient(180deg,#ae1c28 0.00% 33.33%,#ffffff 33.33% 66.67%,#21468b 66.67% 100.00%)' },
	{ code: 'IT', name: { es: 'Italia', en: 'Italy' }, colors: ['#1d7a3e', '#c8202f'], flag: 'linear-gradient(90deg,#009246 0.00% 33.33%,#ffffff 33.33% 66.67%,#ce2b37 66.67% 100.00%)' },
	{ code: 'US', name: { es: 'EE. UU.', en: 'USA' }, colors: ['#1d3a7a', '#c8202f'], flag: 'linear-gradient(#3c3b6e,#3c3b6e) 0 0/48% 54% no-repeat,repeating-linear-gradient(180deg,#b22234 0 14.3%,#fff 14.3% 28.6%)' },
	{ code: 'FR', name: { es: 'Francia', en: 'France' }, colors: ['#1d3a7a', '#f4f1ea'], flag: 'linear-gradient(90deg,#0055a4 0.00% 33.33%,#ffffff 33.33% 66.67%,#ef4135 66.67% 100.00%)' },
	{ code: 'MX', name: { es: 'México', en: 'Mexico' }, colors: ['#1d7a3e', '#f4f1ea'], flag: 'linear-gradient(90deg,#006847 0.00% 33.33%,#ffffff 33.33% 66.67%,#ce1126 66.67% 100.00%)' },
	{ code: 'JP', name: { es: 'Japón', en: 'Japan' }, colors: ['#f4f1ea', '#c8202f'], flag: 'radial-gradient(circle,#bc002d 0 30%,#fff 31%)' },
	{ code: 'AR', name: { es: 'Argentina', en: 'Argentina' }, colors: ['#7fb6e2', '#f4f1ea'], flag: 'radial-gradient(circle,#f6b40e 0 11%,transparent 12%),linear-gradient(180deg,#74acdf 0.00% 33.33%,#ffffff 33.33% 66.67%,#74acdf 66.67% 100.00%)' },
	{ code: 'AT', name: { es: 'Austria', en: 'Austria' }, colors: ['#c8202f', '#f4f1ea'], flag: 'linear-gradient(180deg,#ed2939 0.00% 33.33%,#ffffff 33.33% 66.67%,#ed2939 66.67% 100.00%)' },
	{ code: 'DK', name: { es: 'Dinamarca', en: 'Denmark' }, colors: ['#c8202f', '#f4f1ea'], flag: 'linear-gradient(90deg,transparent 30%,#fff 30% 44%,transparent 44%),linear-gradient(180deg,transparent 43%,#fff 43% 57%,transparent 57%),#c8102e' },
	{ code: 'GR', name: { es: 'Grecia', en: 'Greece' }, colors: ['#2d64b3', '#f4f1ea'], flag: 'linear-gradient(90deg,transparent 18%,#fff 18% 28%,transparent 28%) 0 0/46% 46% no-repeat,linear-gradient(180deg,transparent 40%,#fff 40% 60%,transparent 60%) 0 0/46% 46% no-repeat,linear-gradient(#0d5eaf,#0d5eaf) 0 0/46% 46% no-repeat,repeating-linear-gradient(180deg,#0d5eaf 0 11.1%,#fff 11.1% 22.2%)' },
	{ code: 'IN', name: { es: 'India', en: 'India' }, colors: ['#e9862a', '#1d7a3e'], flag: 'radial-gradient(circle,#06038d 0 9%,transparent 10%),linear-gradient(180deg,#ff9933 0.00% 33.33%,#ffffff 33.33% 66.67%,#138808 66.67% 100.00%)' },
	{ code: 'VN', name: { es: 'Vietnam', en: 'Vietnam' }, colors: ['#c8202f', '#f2c230'], flag: 'radial-gradient(circle,#ffcd00 0 22%,#da251d 23%)' },
	{ code: 'IE', name: { es: 'Irlanda', en: 'Ireland' }, colors: ['#1d7a3e', '#e9862a'], flag: 'linear-gradient(90deg,#169b62 0.00% 33.33%,#ffffff 33.33% 66.67%,#ff883e 66.67% 100.00%)' },
];

export const countryByCode = Object.fromEntries(countries.map((c) => [c.code, c]));

/* ---------------------------------------------------------
   BOTELLAS
   Formato compacto: "Nombre|precio|estilo|formato|grado"
   --------------------------------------------------------- */
const raw: Record<string, string[]> = {
	DE: [
		'Andechs Weissbier|6.00|Trigo Rubia|50cl|5,5%',
		'Andechs Hell|6.00|Lager|50cl|5,9%',
		'Augustinerbräu Helles|6.20|Lager|50cl|5,2%',
		'Augustinerbräu Weissbier|6.20|Trigo Rubia|50cl|5,4%',
		'Augustinerbräu Edelstoff|6.20|Lager|50cl|5,6%',
		'Beck’s|5.00|Lager|33cl|5,0%',
		'Erdinger Urweisse|6.20|Trigo Rubia|50cl|4,9%',
		'Erdinger Weissbier|6.20|Trigo Rubia|50cl|5,3%',
		'Erdinger Pikantus|6.20|Trigo Negra Fuerte|50cl|7,3%',
		'Franziskaner|6.20|Trigo Rubia|50cl|5,0%',
		'Früh|5.00|Kölsch|33cl|4,8%',
		'Hofbräu Münchner Weisse|6.00|Trigo Rubia|50cl|5,1%',
		'Hofbräu Schwarze Weisse|6.00|Trigo Negra|50cl|5,1%',
		'Hacker-Pschorr|6.20|Lager|50cl|5,5%',
		'König Ludwig|6.00|Trigo Rubia|50cl|5,5%',
		'Krombacher Pils 0,0|5.00|Pils sin Alcohol|33cl|0,0%',
		'Krombacher Pils|5.00|Pils|33cl|4,8%',
		'Krombacher Weizen Alkoholfrei|6.00|Trigo Rubia sin Alcohol|50cl|0,5%',
		'Krombacher Radler|5.00|Radler con Limón|33cl|2,5%',
		'Krombacher Weizen|6.00|Trigo Rubia|50cl|5,3%',
		'Schlenkerla Rauchbier Lagerbier|6.50|Lager Ahumada|50cl|4,3%',
		'Schlenkerla Rotbier|6.50|Red Lager Ahumada|50cl|4,6%',
		'Schlenkerla Märzen|6.50|Märzen Ahumada|50cl|5,1%',
		'Schlenkerla Weizen|6.50|Trigo Ahumada|50cl|5,2%',
		'Schlenkerla Urbock|6.50|Bock Madurada|50cl|6,5%',
		'Schlenkerla Doppelbock|6.50|Doppelbock Madurada|50cl|8,0%',
		'Schneider Weisse Helle Weisse|6.20|Trigo Rubia|50cl|5,2%',
		'Schneider Weisse Original|6.20|Trigo Rubia|50cl|5,4%',
		'Schneider Weisse Festweisse|6.20|Trigo Rubia|50cl|6,2%',
		'Schneider Weisse Aventinus|6.20|Trigo Doppelbock|50cl|8,2%',
		'Schneider Weisse Hopfenweisse|6.20|Trigo Lupulizada|50cl|8,2%',
		'Warsteiner|5.00|Pilsner|33cl|4,8%',
		'Weihenstephaner sin Alcohol|6.20|Trigo sin Alcohol|50cl|0,5%',
		'Weihenstephaner Hefeweissbier Dunkel|6.20|Trigo Negra|50cl|5,4%',
		'Weihenstephaner 1516 Kellerbier|6.20|Lager sin Filtrar|50cl|5,6%',
		'Weihenstephaner Korbinian|6.20|Doppelbock|50cl|7,4%',
		'Weihenstephaner Vitus|6.20|Trigo Bock|50cl|7,7%',
	],
	AR: ['Quilmes|5.00|Lager|33cl|4,9%'],
	AT: ['Samichlaus Classic|8.20|Doppelbock|33cl|14,0%'],
	BE: [
		'Duvel|6.00|Belgian Strong Blonde Ale|33cl|8,5%',
		'Duvel 6,66|6.00|Belgian Blond Ale|33cl|6,66%',
		'Duvel Tripel Hop Citra|6.00|Belgian IPA|33cl|9,5%',
		'Duvel Tripel Hop Cashmere|6.00|Belgian IPA|33cl|9,5%',
		'Duvel (75 cl)|14.50|Belgian Strong Blonde Ale|75cl|8,5%',
		'Duvel Imperial Blonde|6.30|Belgian Strong Blonde Ale|33cl|10,0%',
		'Fomo|6.00|Belgian Blonde Ale sin Gluten|33cl|6,7%',
		'Fourchette|6.00|Belgian Strong Blonde Ale|33cl|7,5%',
		'Chouffe sin Alcohol|6.00|Belgian Ale sin Alcohol|33cl|0,0%',
		'Chouffe Framboise|6.00|Afrutada de Frambuesa|33cl|7,0%',
		'Chouffe Blonde|6.00|Belgian Strong Blonde Ale|33cl|8,0%',
		'Mc Chouffe|6.00|Belgian Strong Amber Ale|33cl|8,0%',
		'Chouffe Cherry|6.00|Afrutada de Cereza|33cl|8,0%',
		'Chouffe IPA Houblon|6.00|Belgian IPA|33cl|9,0%',
		'Maredsous Blonde|5.60|Blonde de Abadía|33cl|6,0%',
		'Maredsous Brune|5.60|Strong Brown Ale de Abadía|33cl|8,0%',
		'Vedett Extra White|5.00|Belgian White|33cl|4,7%',
		'Affligem Blond|6.00|Blond de Abadía|33cl|6,8%',
		'Affligem Tripel|6.00|Strong Ale de Abadía|33cl|9,0%',
		'Averbode|6.00|Tripel de Abadía|33cl|7,5%',
		'Barbar Blonde|6.50|Belgian Blonde Ale con Miel|33cl|8,0%',
		'Blanche de Namur|5.20|Trigo|33cl|4,5%',
		'Bourgogne des Flandres|5.80|Roja Tostada|33cl|5,0%',
		'Brugse Zot Dubbel|5.80|Belgian Brown Ale|33cl|7,5%',
		'Bush Triple|6.00|Belgian Strong Blonde Ale|33cl|10,5%',
		'Bush Caractère|6.00|Belgian Strong Amber Ale|33cl|12,0%',
		'Carolus Classic|6.00|Belgian Strong Dark Ale|33cl|8,5%',
		'Carolus Tripel|6.00|Belgian Strong Blonde Ale|33cl|9,0%',
		'Carolus Whisky Infused|6.80|Strong Ale con Whisky|33cl|11,7%',
		'Carolus Hopsinjoor|6.00|Belgian IPA|33cl|8,0%',
		'Charles Quint Blond|6.00|Belgian Blonde Ale|33cl|8,5%',
		'Charles Quint Ruby Red|6.00|Belgian Strong Ale|33cl|8,5%',
		'Chimay Dorée|6.00|Blonde Trapense|33cl|4,8%',
		'Chimay Roja|6.00|Brown Ale Trapense|33cl|7,0%',
		'Chimay Triple|6.00|Tripel Trapense|33cl|8,0%',
		'Chimay Azul|6.40|Strong Dark Ale Trapense|33cl|9,0%',
		'Chimay 150|6.40|Strong Blond Ale Trapense|33cl|10,0%',
		'Chimay Première (75 cl)|15.00|Brown Ale Trapense|75cl|7,0%',
		'Chimay Triple 500 años (75 cl)|15.00|Tripel Trapense|75cl|8,0%',
		'Chimay Grande Réserve 2021 (75 cl)|16.00|Strong Dark Ale Trapense|75cl|9,0%',
		'Cuvée des Trolls|5.80|Belgian Ale sin Filtrar|33cl|7,0%',
		'Corsendonk Pater|6.00|Dubbel|33cl|7,5%',
		'Corsendonk Agnus|6.00|Tripel|33cl|7,5%',
		'Delirium Argentum|6.30|IPA|33cl|7,0%',
		'Delirium Nocturnum|6.30|Belgian Strong Dark Ale|33cl|8,5%',
		'Delirium Red|6.30|Afrutada de Cereza|33cl|8,5%',
		'Delirium Tremens|6.30|Belgian Strong Blonde Ale|33cl|8,5%',
		'De Garre|6.50|Tripel|33cl|11,0%',
		'Duchesse Cherry|6.80|Flanders Red Ale|33cl|6,8%',
		'Duchesse Chocolate Cherry|6.80|Flanders Red Ale|33cl|6,8%',
		'Grimbergen Ambrée|5.80|Belgian Amber Ale|33cl|6,5%',
		'Grimbergen Blonde|5.80|Belgian Blonde Ale|33cl|6,7%',
		'Gulden Draak Classic|6.00|Belgian Strong Dark Ale|33cl|10,5%',
		'Gulden Draak 9000|6.00|Amber Quadrupel|33cl|10,5%',
		'Gulden Draak Smoked|6.50|Strong Ale Ahumada|33cl|10,5%',
		'Gulden Draak Fire|6.50|Strong Ale Picante|33cl|10,5%',
		'Gulden Draak Brewmaster|6.50|Madurada en Barrica|33cl|10,5%',
		'Gulden Draak Imperial Stout|6.50|Imperial Stout|33cl|12,0%',
		'Hoegaarden|5.50|Trigo|33cl|4,9%',
		'Judas|5.50|Belgian Strong Ale|33cl|8,5%',
		'Kasteel Tropical|6.20|Afrutada Tropical|33cl|7,0%',
		'Kasteel Rouge|6.20|Afrutada de Cereza|33cl|8,0%',
		'Kasteel Framboise|6.20|Afrutada de Frambuesa|33cl|7,0%',
		'Kasteel Chocolate Quad|6.20|Dark Strong Ale|33cl|11,0%',
		'Kasteel Cuvée|6.20|Belgian Strong Ale|33cl|11,0%',
		'Kasteel Tripel|6.20|Tripel|33cl|11,0%',
		'Kwak Amber|6.50|Belgian Strong Amber Ale|33cl|8,4%',
		'Kwak Amber (75 cl)|15.00|Belgian Strong Amber Ale|75cl|8,4%',
		'La Corne du Bois des Pendus Blonde|6.50|Belgian Pale Ale|33cl|5,9%',
		'La Corne du Bois des Pendus Tripel|6.50|Tripel|33cl|10,0%',
		'La Corne du Bois des Pendus Quadruple|6.50|Quadrupel|33cl|12,0%',
		'Leffe Brune|5.80|Brown Ale de Abadía|33cl|6,5%',
		'Leffe Blonde|5.80|Blonde Ale de Abadía|33cl|6,6%',
		'Leffe Triple|5.80|Strong Ale de Abadía|33cl|8,5%',
		'Liefmans Fruitesse|5.20|Lámbica Afrutada|25cl|3,8%',
		'Lindemans Framboise|5.90|Lámbica de Frambuesa|25cl|2,5%',
		'Lindemans Pêcheresse|5.90|Lámbica de Melocotón|25cl|2,5%',
		'Lindemans Kriek|5.90|Lámbica de Cereza|25cl|3,5%',
		'Lindemans Apple|5.90|Lámbica de Manzana|25cl|3,5%',
		'Lindemans Faro|5.90|Lámbica Dulce y Ácida|25cl|4,5%',
		'Lindemans Gueuze|5.90|Lámbica Ácida|25cl|5,0%',
		'Martin’s IPA|5.80|IPA|33cl|6,9%',
		'Mongozo Mango|6.00|Afrutada sin Gluten|33cl|3,6%',
		'Mongozo Coconut|6.00|Afrutada sin Gluten|33cl|3,6%',
		'Mongozo Banana|6.00|Afrutada sin Gluten|33cl|3,6%',
		'Mongozo Pilsener|6.00|Pilsner sin Gluten|33cl|5,0%',
		'Mort Subite Kriek|5.50|Lámbica de Cereza|25cl|4,0%',
		'Orval|6.50|Belgian Ale Trapense|33cl|6,2%',
		'Paranoia sin Alcohol|6.30|Hazy IPA sin Alcohol|33cl|0,3%',
		'Paranoia|6.30|Hazy IPA|33cl|5,6%',
		'Piraat|6.00|Belgian Strong Ale|33cl|10,5%',
		'Piraat Triple Hop|6.00|IPA|33cl|10,5%',
		'Saison Dupont|6.00|Saison|33cl|6,5%',
		'Rasta Trolls|6.00|Ale con Ron y Manzana|33cl|7,0%',
		'Satan Red|6.20|Belgian Ale|33cl|8,0%',
		'Stella Artois|5.00|Lager|33cl|5,0%',
		'Straffe Hendrik Tripel|6.20|Belgian Strong Blonde Ale|33cl|9,0%',
		'Straffe Hendrik Quadrupel|6.50|Belgian Strong Brown Ale|33cl|11,0%',
		'St. Bernardus Pater 6|5.90|Dark Ale de Abadía|33cl|6,7%',
		'St. Bernardus Prior 8|5.90|Dubbel de Abadía|33cl|8,0%',
		'St. Bernardus Tripel|5.90|Tripel de Abadía|33cl|8,0%',
		'St. Bernardus Abt 12|5.90|Quadrupel de Abadía|33cl|10,0%',
		'Tempelier|5.80|Ámbar Fuerte|33cl|7,5%',
		'Rochefort 6|6.50|Strong Amber Ale Trapense|33cl|7,5%',
		'Rochefort 8|6.50|Strong Dark Ale Trapense|33cl|9,2%',
		'Rochefort 10|6.50|Strong Dark Ale Trapense|33cl|11,3%',
		'Tripel d’Anvers|6.00|Belgian Strong Blonde Ale|33cl|8,0%',
		'Tripel Karmeliet|6.00|Belgian Strong Blonde Ale|33cl|8,4%',
		'Troubadour Magma|6.00|IPA|33cl|9,0%',
		'Waterloo Triple Blond|6.00|Belgian Blonde Ale|33cl|8,0%',
		'Waterloo Double Dark|6.00|Belgian Dark Strong Ale|33cl|8,0%',
		'Westmalle Dubbel|6.50|Dubbel Trapense|33cl|7,0%',
		'Westmalle Tripel|6.50|Tripel Trapense|33cl|9,5%',
		'Westmalle Tripel (75 cl)|16.00|Tripel Trapense|75cl|9,5%',
		'Westvleteren 12|20.00|Quadrupel Trapense|33cl|10,2%',
	],
	DK: ['Carlsberg|5.00|Pilsner|33cl|5,0%'],
	ES: [
		'Alhambra Especial|4.00|Lager|33cl|5,4%',
		'Alhambra Reserva 1925|4.20|Amber Lager|33cl|6,4%',
		'Alhambra Reserva Roja|4.50|Doppelbock|33cl|7,2%',
		'Amstel Oro 0,0|4.00|Tostada sin Alcohol|33cl|0,0%',
		'Cruzcampo 0,0|4.00|Lager sin Alcohol|33cl|0,0%',
		'Cruzcampo Radler|4.00|Radler Cítrica|33cl|2,0%',
		'Cruzcampo Especial|4.00|Lager|33cl|5,6%',
		'Cruzcampo sin Gluten|4.00|Lager sin Gluten|33cl|5,6%',
		'El Águila sin Filtrar|4.20|Lager sin Filtrar|33cl|5,5%',
		'El Alcázar|4.20|Pilsner|33cl|6,0%',
		'Estrella Galicia 0,0|4.00|Tostada sin Alcohol|33cl|0,0%',
		'Estrella Galicia|4.00|Lager|33cl|5,5%',
		'Mahou 0,0|4.00|Tostada sin Alcohol|33cl|0,0%',
		'Mahou Cinco Estrellas|4.00|Lager|33cl|5,5%',
		'Victoria Málaga|4.00|Pilsner|33cl|4,8%',
	],
	US: [
		'Blue Moon|5.00|Belgian Wheat Ale|33cl|5,4%',
		'Budweiser|5.00|Lager|33cl|4,8%',
		'Lagunitas IPA|5.20|IPA|35,5cl|6,2%',
	],
	FR: [
		'La Goudale Blonde|6.50|Blonde Ale|33cl|7,2%',
		'La Goudale IPA|6.50|IPA|33cl|7,2%',
		'La Goudale Grand Cru|6.50|Strong Blonde Ale|33cl|7,9%',
	],
	GR: ['Mythos|5.00|Lager|33cl|5,0%'],
	NL: [
		'Heineken 0,0|4.20|Lager sin Alcohol|33cl|0,0%',
		'Heineken|4.20|Lager|33cl|5,0%',
		'La Trappe Blond|5.80|Blonde Trapense|33cl|6,5%',
		'La Trappe Isid’or|5.80|Amber Ale Trapense|33cl|7,0%',
		'La Trappe Dubbel|5.80|Dubbel Trapense|33cl|7,0%',
		'La Trappe Quadrupel|5.80|Quadrupel Trapense|33cl|10,0%',
	],
	IN: ['Cobra|5.00|Lager|33cl|4,8%'],
	IT: [
		'Birra Moretti|5.20|Lager|33cl|4,5%',
		'Ichnusa Non Filtrata|5.50|Lager sin Filtrar|33cl|5,5%',
		'Peroni Nastro Azzurro|5.20|Lager|33cl|5,0%',
	],
	JP: ['Asahi Super Dry|5.00|Lager|33cl|5,2%', 'Kirin Ichiban|5.00|Lager|33cl|5,0%'],
	MX: ['Corona Cero|5.00|Lager sin Alcohol|33cl|0,0%', 'Corona|5.00|Lager|33cl|4,5%', 'Sol|5.00|Lager|33cl|4,2%'],
	UK: [
		'Brewdog Hazy Jane|5.80|New England IPA|33cl|5,0%',
		'Brewdog Punk IPA|5.80|IPA|33cl|5,4%',
		'Brewdog Elvis Juice|5.80|American IPA|33cl|6,5%',
		'Crabbie’s Ginger|6.50|Ginger Beer|50cl|4,0%',
		'Samuel Smith Organic Chocolate Stout|6.50|Stout Vegana|35,5cl|5,0%',
		'Samuel Smith Imperial Stout|6.50|Imperial Stout|35,5cl|7,0%',
		'Tennent’s 1885 Lager|5.90|Lager|33cl|5,0%',
		'Tennent’s Extra|5.90|Strong Lager|33cl|9,0%',
		'Tennent’s Scotch Ale|5.90|Strong Ale|33cl|9,0%',
		'Trooper (Iron Maiden)|6.60|Premium Ale|50cl|4,7%',
	],
	CZ: ['Kozel Dark|5.50|Oscura|50cl|3,8%', 'Kozel Lager|5.50|Lager|50cl|4,6%', 'Budvar|5.00|Lager|33cl|5,0%'],
	VN: ['Saigon|5.00|Lager|35,5cl|4,9%'],
};

/* Traducción de estilos al inglés (los nombres ya vienen medio en inglés) */
const styleDict: [RegExp, string][] = [
	[/Trigo Rubia sin Alcohol/g, 'Alcohol-free wheat'],
	[/Trigo sin Alcohol/g, 'Alcohol-free wheat'],
	[/Trigo Negra Fuerte/g, 'Strong dark wheat'],
	[/Trigo Negra/g, 'Dark wheat'],
	[/Trigo Rubia/g, 'Wheat beer'],
	[/Trigo Ahumada/g, 'Smoked wheat'],
	[/Trigo Doppelbock/g, 'Wheat doppelbock'],
	[/Trigo Lupulizada/g, 'Hopped wheat'],
	[/Trigo Bock/g, 'Wheat bock'],
	[/^Trigo$/g, 'Wheat beer'],
	[/Red Lager Ahumada/g, 'Smoked red lager'],
	[/Lager Ahumada/g, 'Smoked lager'],
	[/Märzen Ahumada/g, 'Smoked Märzen'],
	[/Strong Ale Ahumada/g, 'Smoked strong ale'],
	[/Strong Ale Picante/g, 'Spicy strong ale'],
	[/Bock Madurada/g, 'Aged bock'],
	[/Doppelbock Madurada/g, 'Aged doppelbock'],
	[/Madurada en Barrica/g, 'Barrel-aged'],
	[/Pils sin Alcohol/g, 'Alcohol-free pils'],
	[/Radler con Limón/g, 'Lemon radler'],
	[/Radler Cítrica/g, 'Citrus radler'],
	[/Lager sin Filtrar/g, 'Unfiltered lager'],
	[/Belgian Ale sin Filtrar/g, 'Unfiltered Belgian ale'],
	[/Belgian Ale sin Alcohol/g, 'Alcohol-free Belgian ale'],
	[/Hazy IPA sin Alcohol/g, 'Alcohol-free hazy IPA'],
	[/Lager sin Alcohol/g, 'Alcohol-free lager'],
	[/Tostada sin Alcohol/g, 'Alcohol-free amber'],
	[/Lager sin Gluten/g, 'Gluten-free lager'],
	[/Pilsner sin Gluten/g, 'Gluten-free pilsner'],
	[/Afrutada sin Gluten/g, 'Gluten-free fruit beer'],
	[/Belgian Blonde Ale sin Gluten/g, 'Gluten-free Belgian blonde'],
	[/Afrutada de Frambuesa/g, 'Raspberry fruit beer'],
	[/Afrutada de Cereza/g, 'Cherry fruit beer'],
	[/Afrutada Tropical/g, 'Tropical fruit beer'],
	[/Lámbica Afrutada/g, 'Fruit lambic'],
	[/Lámbica de Frambuesa/g, 'Raspberry lambic'],
	[/Lámbica de Melocotón/g, 'Peach lambic'],
	[/Lámbica de Cereza/g, 'Cherry lambic'],
	[/Lámbica de Manzana/g, 'Apple lambic'],
	[/Lámbica Dulce y Ácida/g, 'Sweet & sour lambic'],
	[/Lámbica Ácida/g, 'Sour lambic'],
	[/Belgian Blonde Ale con Miel/g, 'Belgian blonde with honey'],
	[/Strong Ale con Whisky/g, 'Whisky-infused strong ale'],
	[/Ale con Ron y Manzana/g, 'Ale with rum & apple'],
	[/Roja Tostada/g, 'Red amber ale'],
	[/Ámbar Fuerte/g, 'Strong amber'],
	[/Stout Vegana/g, 'Vegan stout'],
	[/^Oscura$/g, 'Dark lager'],
	[/ de Abadía/g, ' (abbey)'],
	[/ Trapense/g, ' (Trappist)'],
	[/Blonde Trapense/g, 'Blonde (Trappist)'],
];
export const styleEn = (s: string) => styleDict.reduce((acc, [re, to]) => acc.replace(re, to), s);

/** Categorías para filtrar */
export type BeerCat = 'trigo' | 'trapense' | 'abadia' | 'ipa' | 'afrutada' | 'fuerte' | 'oscura' | 'lager' | 'sin';
export const beerCats: { id: BeerCat; name: Bi }[] = [
	{ id: 'lager', name: { es: 'Lager y pils', en: 'Lager & pils' } },
	{ id: 'trigo', name: { es: 'De trigo', en: 'Wheat' } },
	{ id: 'trapense', name: { es: 'Trapenses', en: 'Trappist' } },
	{ id: 'abadia', name: { es: 'De abadía', en: 'Abbey' } },
	{ id: 'fuerte', name: { es: 'Belgas fuertes', en: 'Strong Belgian' } },
	{ id: 'ipa', name: { es: 'IPA', en: 'IPA' } },
	{ id: 'oscura', name: { es: 'Negras y stouts', en: 'Dark & stout' } },
	{ id: 'afrutada', name: { es: 'Afrutadas y lámbicas', en: 'Fruit & lambic' } },
	{ id: 'sin', name: { es: 'Sin alcohol / sin gluten', en: 'Alcohol / gluten free' } },
];

function categorize(style: string, abv: number): BeerCat[] {
	const s = style.toLowerCase();
	const c: BeerCat[] = [];
	if (/sin alcohol|sin gluten/.test(s) || abv < 0.6) c.push('sin');
	if (/trigo|wheat|white|weiss/.test(s)) c.push('trigo');
	if (/trapense/.test(s)) c.push('trapense');
	if (/abadía/.test(s)) c.push('abadia');
	if (/ipa/.test(s)) c.push('ipa');
	if (/afrutada|lámbica|flanders|cereza|frambuesa|ginger/.test(s)) c.push('afrutada');
	if (/stout|dark|negra|oscura|brown|dubbel|quad|nocturnum/.test(s)) c.push('oscura');
	if (/lager|pils|kölsch|märzen|radler|helles|amber lager/.test(s) && !c.includes('sin')) c.push('lager');
	if (/strong|tripel|triple|quadrupel|doppelbock/.test(s) || abv >= 8) c.push('fuerte');
	return [...new Set(c)];
}

export interface Bottle {
	name: string;
	price: number;
	style: Bi;
	size: string;
	abv: string;
	country: string;
	cats: BeerCat[];
}

export const bottles: Bottle[] = Object.entries(raw).flatMap(([country, rows]) =>
	rows.map((row) => {
		const [name, price, style, size, abv] = row.split('|');
		const abvNum = parseFloat(abv.replace(',', '.'));
		return {
			name,
			price: Number(price),
			style: { es: style, en: styleEn(style) },
			size: size.replace(',', '.'),
			abv,
			country,
			cats: categorize(style, abvNum),
		};
	}),
);

/** Países con botellas, ordenados por número de referencias */
export const bottleCountries = countries
	.map((c) => ({ ...c, count: bottles.filter((b) => b.country === c.code).length }))
	.filter((c) => c.count > 0)
	.sort((a, b) => b.count - a.count);

export const totalBeers = bottles.length + taps.length;

export const euro = (n: number) => n.toFixed(2).replace('.', ',') + ' €';
