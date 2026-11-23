/**
 * Datos de Sala Premier.
 * - Salas, direcciones, teléfonos y horarios: salapremier.com (nov. 2026).
 * - Concepto, eventos recurrentes y ofertas: Instagram @salapremiermalaga y Oferplan SUR.
 * - Calendario semanal: cartas QR de cada sala (trivify.es/cartasqr, nov. 2026).
 * - Cócteles "de película" de la home: CONTENIDO DE EJEMPLO para la demo.
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

/**
 * Calendario semanal real de cada sala (cartas QR de trivify.es, nov. 2026).
 * day = getDay(): 0 domingo … 6 sábado.
 */
export interface SalaEvent {
	day: number;
	venue: string;
	title: string;
	time: string;
	detail: string;
	note?: string;
}

export const events: SalaEvent[] = [
	// Premier Centro
	{ day: 2, venue: 'centro', title: 'Pasapalabra', time: '22:00h', detail: 'Ven a jugar y llévate la botella y el bote acumulado.' },
	{ day: 3, venue: 'centro', title: 'Trivial', time: '22:00h', detail: 'Demuestra lo que sabes y compite por la botella.' },
	{ day: 4, venue: 'centro', title: 'Día de la Cerveza', time: '11:00 – 21:00h', detail: 'Pintas de Estrella, Erdinger y Guinness a 4 €.' },
	{ day: 4, venue: 'centro', title: 'Intercambio de idiomas', time: '20:00h', detail: 'Con Málaga Tandem Club. Todos los niveles, todos los idiomas.' },
	{ day: 0, venue: 'centro', title: 'Bingo', time: '22:00h', detail: 'El domingo se canta línea en Molina Lario.' },
	// Premier Teatinos
	{ day: 1, venue: 'teatinos', title: 'Día de la Cerveza', time: 'Hasta las 21:00h', detail: 'Toda la cerveza de barril al 50 %.', note: 'Excepto vísperas de festivo' },
	{ day: 2, venue: 'teatinos', title: 'Martes de Mojitos', time: 'Hasta las 20:00h', detail: 'Mojitos desde 5 €.', note: 'Excepto vísperas de festivo' },
	{ day: 2, venue: 'teatinos', title: 'Trivial', time: '20:00h', detail: 'Demuestra lo que sabes y compite por la botella.' },
	{ day: 3, venue: 'teatinos', title: 'Pasapalabra', time: '20:00h', detail: 'Vente a jugar y llévate el bote acumulado.' },
	// Premier Huelin
	{ day: 2, venue: 'huelin', title: 'Trivial', time: '20:00h', detail: 'Demuestra lo que sabes y compite por la botella.' },
	{ day: 4, venue: 'huelin', title: 'Día de la Cerveza', time: 'Hasta las 21:00h', detail: 'Cañas a 0,50 € y jarras a 2 €.', note: 'Excepto festivos y vísperas' },
	{ day: 5, venue: 'huelin', title: 'Pasapalabra', time: '20:00h', detail: 'Vente a jugar y llévate el bote acumulado.' },
	// Premier Granada
	{ day: 3, venue: 'granada', title: 'Trivial', time: '20:00h', detail: 'Demuestra lo que sabes y compite por la botella.' },
	{ day: 0, venue: 'granada', title: 'Pasapalabra', time: '20:00h', detail: 'Vente a jugar y llévate el bote acumulado.' },
];

/** Semana empezando en lunes. */
export const weekDays = [
	{ day: 1, name: 'Lunes' },
	{ day: 2, name: 'Martes' },
	{ day: 3, name: 'Miércoles' },
	{ day: 4, name: 'Jueves' },
	{ day: 5, name: 'Viernes' },
	{ day: 6, name: 'Sábado' },
	{ day: 0, name: 'Domingo' },
];

/** Texto para las noches sin función especial. */
export const freeNight = 'Sin función especial: pintas, música y ambiente hasta el cierre.';

export const eventTypes = ['Trivial', 'Pasapalabra', 'Día de la Cerveza', 'Intercambio de idiomas', 'Bingo', 'Martes de Mojitos'];

export const venueShort = (id: string) => venues.find((v) => v.id === id)?.name.replace('Premier ', '') ?? id;

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
	'Trivial',
	'Pasapalabra',
	'Día de la Cerveza',
	'Intercambio de idiomas',
	'Bingo de domingo',
	'Martes de Mojitos',
	'Halloween Premier',
	'St. Patrick’s Day',
];

export const info = {
	name: 'Sala Premier',
	tagline: 'Un pub de película',
	instagram: 'https://www.instagram.com/salapremiermalaga/',
	instagramHandle: '@salapremiermalaga',
	facebook: 'https://www.facebook.com/Salapremier/',
	followers: 5423,
};
