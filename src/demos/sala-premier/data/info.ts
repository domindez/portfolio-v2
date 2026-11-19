/**
 * Datos de Sala Premier.
 * - Salas, direcciones, teléfonos y horarios: salapremier.com (nov. 2026).
 * - Concepto, eventos recurrentes y ofertas: Instagram @salapremiermalaga y Oferplan SUR.
 * - Programación semanal y carta de cócteles: CONTENIDO DE EJEMPLO para la demo
 *   (inspirado en lo que publican, pendiente de validar con el cliente).
 */

export interface Venue {
	id: string;
	name: string;
	city: string;
	area: string;
	address: string;
	phone: string;
	email: string;
	hours: string[];
	maps: string;
}

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const venues: Venue[] = [
	{
		id: 'centro',
		name: 'Premier Centro',
		city: 'Málaga',
		area: 'Centro histórico',
		address: 'C/ Molina Lario 2, esq. Plaza del Siglo',
		phone: '951 015 203',
		email: 'centro@salapremier.com',
		hours: ['Dom–Jue · 12:00h – 02:00h', 'Vie–Sáb · 12:00h – 03:00h'],
		maps: maps('Sala Premier Calle Molina Lario 2 Málaga'),
	},
	{
		id: 'teatinos',
		name: 'Premier Teatinos',
		city: 'Málaga',
		area: 'Teatinos',
		address: 'Avenida Plutarco 63',
		phone: '663 333 218',
		email: 'teatinos@salapremier.com',
		hours: ['Dom–Jue · 15:00h – 02:00h', 'Vie–Sáb · 15:00h – 03:00h'],
		maps: maps('Sala Premier Avenida Plutarco 63 Málaga'),
	},
	{
		id: 'huelin',
		name: 'Premier Huelin',
		city: 'Málaga',
		area: 'Huelin',
		address: 'C/ Río Rocío 16',
		phone: '663 332 014',
		email: 'huelin@salapremier.com',
		hours: ['Dom–Jue · 15:00h – 02:00h', 'Vie–Sáb · 15:00h – 03:00h'],
		maps: maps('Sala Premier Calle Río Rocío 16 Málaga'),
	},
	{
		id: 'granada',
		name: 'Premier Granada',
		city: 'Granada',
		area: 'Mariana Pineda',
		address: 'Plaza de Mariana Pineda 1',
		phone: '615 987 338',
		email: 'granada@salapremier.com',
		hours: ['Lun–Dom · 15:00h – 03:30h'],
		maps: maps('Sala Premier Plaza Mariana Pineda 1 Granada'),
	},
];

/** Programa semanal (índice = getDay(): 0 domingo … 6 sábado). Ejemplo para la demo. */
export interface Show {
	day: number;
	dayName: string;
	when: string;
	title: string;
	detail: string;
	venue: string;
	tag?: string;
}

export const week: Show[] = [
	{ day: 1, dayName: 'Lunes', when: 'Todos los lunes', title: 'Trivial Premier', detail: 'Equipos de 2 a 6 · premio para la mesa ganadora', venue: 'Premier Teatinos · 22:00h', tag: 'Entrada libre' },
	{ day: 2, dayName: 'Martes', when: 'Todos los martes', title: 'Noche de juegos', detail: 'Juegos de mesa de la casa y el cóctel de la semana', venue: 'Todas las salas · desde 19:00h' },
	{ day: 3, dayName: 'Miércoles', when: 'Todos los miércoles', title: 'Trivial de cine', detail: 'Preguntas de cine y series en pantalla grande', venue: 'Premier Centro · 22:00h', tag: 'Entrada libre' },
	{ day: 4, dayName: 'Jueves', when: 'Todos los jueves', title: 'Día de la Cerveza', detail: 'Precios especiales en barril e importación · Intercambio de idiomas a las 21:00h', venue: 'Todas las salas · Idiomas en Premier Centro' },
	{ day: 5, dayName: 'Viernes', when: 'Todos los viernes', title: 'Blues & Hot Jazz', detail: 'Live Blues 20:00h · Hot Jazz 23:00h', venue: 'Premier Huelin', tag: 'En directo' },
	{ day: 6, dayName: 'Sábado', when: 'Todos los sábados', title: '¿Tienes plan?', detail: 'Música, pintas y el ambientazo de siempre hasta el cierre', venue: 'Todas las salas · hasta 03:00h' },
	{ day: 0, dayName: 'Domingo', when: 'Todos los domingos', title: 'Domingo de partido', detail: 'Todos los partidos en pantalla grande, con sonido', venue: 'Todas las salas · desde 15:00h' },
];

export const cocktails = [
	{ name: 'El Padrino', desc: 'Whisky escocés y amaretto sobre un bloque de hielo. Una oferta que no podrás rechazar.', price: '9,00' },
	{ name: 'Desayuno con diamantes', desc: 'Ginebra, limón y cava bien frío, en copa de las de antes.', price: '9,50' },
	{ name: 'Casablanca', desc: 'Ron blanco, coco, piña y lima. Siempre nos quedará Málaga.', price: '8,50' },
	{ name: 'El Gran Lebowski', desc: 'Vodka, licor de café y nata montada a mano. El nota lo aprobaría.', price: '8,50' },
	{ name: 'La naranja mecánica', desc: 'Aperol, naranja sanguina y prosecco. Spritz con banda sonora.', price: '8,00' },
	{ name: 'Lo que el viento se llevó', desc: 'Tequila, frambuesa, lima y ginger beer. Se acaba antes de los créditos.', price: '9,00' },
];

export const offers = [
	{ big: '12,50 €', text: '4 cervezas internacionales', note: 'Con Oferplan SUR' },
	{ big: '45 €', text: 'Botella de primeras marcas + 10 refrescos', note: 'Para la mesa' },
	{ big: 'Jueves', text: 'Día de la Cerveza', note: 'Barril, artesanas e importación' },
];

export const marquee = [
	'Trivial Premier',
	'Día de la Cerveza',
	'Intercambio de idiomas',
	'Live Blues & Hot Jazz',
	'Deportes en pantalla grande',
	'Halloween Premier',
	'St. Patrick’s Day',
	'Juegos de mesa',
];

export const info = {
	name: 'Sala Premier',
	tagline: 'Un pub irlandés de película',
	instagram: 'https://www.instagram.com/salapremiermalaga/',
	instagramHandle: '@salapremiermalaga',
	facebook: 'https://www.facebook.com/Salapremier/',
	followers: 5423,
};
