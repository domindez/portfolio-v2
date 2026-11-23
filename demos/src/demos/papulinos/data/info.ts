/**
 * Papulinos — datos del negocio y de sus tres locales.
 * Fuentes: papulinos.com, Instagram @restaurantespapulinos, Google y Tripadvisor (nov. 2026).
 */

export interface Bi {
	es: string;
	en: string;
}
export const b = (es: string, en: string = es): Bi => ({ es, en });

export type VenueId = 'malasana' | 'santa-paula' | 'don-cristian';

export interface Venue {
	id: VenueId;
	name: string;
	short: string;
	area: Bi;
	address: string;
	postal: string;
	phone: string;
	maps: string;
	since?: number;
	/** Turnos en minutos desde medianoche (hora de Madrid) */
	shifts: [number, number][];
	/** Días cerrados (0 = domingo … 6 = sábado) */
	closed: number[];
	hours: Bi;
	rating: string;
	reviews: number;
	ratingSource: string;
	tagline: Bi;
	blurb: Bi;
	perks: Bi[];
	/** Nota que encabeza la carta del local */
	cartaNote: Bi;
}

const h = (hh: number, mm = 0) => hh * 60 + mm;

export const venues: Venue[] = [
	{
		id: 'malasana',
		name: 'Papulinos Malasaña',
		short: 'Malasaña',
		area: b('La Trinidad', 'La Trinidad'),
		address: 'C/ Malasaña, 42',
		postal: '29009',
		phone: '952 28 38 49',
		maps: 'https://maps.app.goo.gl/GX4aGBd9bvGuhfKV6',
		since: 1984,
		shifts: [
			[h(13), h(16, 30)],
			[h(20, 30), h(23, 30)],
		],
		closed: [],
		hours: b('Todos los días · 13:00–16:30 y 20:30–23:30', 'Every day · 1–4:30 pm & 8:30–11:30 pm'),
		rating: '4,4',
		reviews: 2777,
		ratingSource: 'Google',
		tagline: b('El original, con su patio andaluz', 'The original, with its Andalusian patio'),
		blurb: b(
			'Donde empezó todo en 1984. Mantiene la estética del primer día: patio con mesas rústicas, techo de madera, pérgola de cañizo y paredes de caserío andaluz.',
			'Where it all began in 1984. It keeps the look of day one: a patio with rustic tables, a wooden ceiling, a reed pergola and whitewashed Andalusian walls.',
		),
		perks: [b('Patio andaluz cubierto', 'Covered Andalusian patio'), b('Cochinillo y cordero al horno', 'Roast suckling pig & lamb'), b('Chivo en su jugo', 'Kid goat in its juices')],
		cartaNote: b('Los platos se sirven sin guarnición: acompáñalos con nuestra patata asada con alioli.', 'Dishes come without sides: pair them with our baked potato and aioli.'),
	},
	{
		id: 'santa-paula',
		name: 'Papulinos Santa Paula',
		short: 'Santa Paula',
		area: b('Santa Paula · junto a la Misericordia', 'Santa Paula · by Misericordia beach'),
		address: 'C/ Correo de Andalucía, 4',
		postal: '29004',
		phone: '952 06 77 77',
		maps: 'https://maps.app.goo.gl/SjuRwAGWkLjbpUS79',
		shifts: [
			[h(12, 30), h(16, 30)],
			[h(20), h(23, 30)],
		],
		closed: [2, 3],
		hours: b('Jue a lun · 12:30–16:30 y 20:00–23:30 · mar y miér cerrado', 'Thu–Mon · 12:30–4:30 pm & 8–11:30 pm · closed Tue & Wed'),
		rating: '4,4',
		reviews: 965,
		ratingSource: 'Google',
		tagline: b('La gran terraza, con brisa de mar', 'The big terrace, with a sea breeze'),
		blurb: b(
			'A dos pasos de la playa de la Misericordia. Lo mejor de cada Papulinos y algo que Malasaña perdió con los años: una gran terraza al aire libre para comer a la brasa con la brisa del mar.',
			'A short walk from Misericordia beach. The best of every Papulinos, plus something Malasaña lost over the years: a big open-air terrace for grilled meat with a sea breeze.',
		),
		perks: [b('Gran terraza al aire libre', 'Big open-air terrace'), b('Hamburguesas y pizzas al horno', 'Burgers & oven-baked pizzas'), b('Croquetas caseras', 'Homemade croquettes')],
		cartaNote: b('Los platos se sirven sin guarnición: acompáñalos con patata asada o patatas fritas.', 'Dishes come without sides: add a baked potato or fries.'),
	},
	{
		id: 'don-cristian',
		name: 'Papulinos Don Cristian',
		short: 'Don Cristian',
		area: b('Junto a El Corte Inglés', 'Next to El Corte Inglés'),
		address: 'C/ Don Cristian, 41',
		postal: '29007',
		phone: '952 27 95 40',
		maps: 'https://maps.app.goo.gl/ZXPeQaFEXAuKskJH8',
		since: 2017,
		// Horario pendiente de confirmar con el local (no está publicado)
		shifts: [
			[h(13), h(16, 30)],
			[h(20, 30), h(23, 30)],
		],
		closed: [],
		hours: b('Todos los días · 13:00–16:30 y 20:30–23:30', 'Every day · 1–4:30 pm & 8:30–11:30 pm'),
		rating: '4,6',
		reviews: 53,
		ratingSource: 'Tripadvisor',
		tagline: b('Parrilla y cocina, salón y terraza', 'Grill & kitchen, dining room & terrace'),
		blurb: b(
			'El más joven de la casa, desde 2017. Une nuestras carnes a la parrilla con entrantes y platos más elaborados, en un salón amplio y una terraza preparada también para los días de mal tiempo.',
			'The youngest of the family, since 2017. Our grilled meats plus more elaborate starters and dishes, in a roomy dining room and a terrace ready for bad-weather days too.',
		),
		perks: [b('Guarnición incluida', 'Sides included'), b('Solomillos en salsa y revueltos', 'Sirloin in sauce & scrambles'), b('Menú infantil', 'Kids’ menu')],
		cartaNote: b('Todos los platos van acompañados de guarnición.', 'All dishes come with a side.'),
	},
];

export const venueById = (id: string) => venues.find((v) => v.id === id) ?? venues[0];

export const tel = (phone: string) => `tel:+34${phone.replace(/\s/g, '')}`;

/** Datos serializables para el estado "abierto / cerrado" en el cliente. */
export const hoursAttr = (v: Venue) => JSON.stringify({ s: v.shifts, c: v.closed });

export const info = {
	name: 'Papulinos',
	since: 1984,
	instagram: 'https://www.instagram.com/restaurantespapulinos/',
	facebook: 'https://www.facebook.com/papulinos.restaurante',
	email: 'info@papulinos.com',
	award: b('El mejor restaurante asador', 'Best grill restaurant'),
	awardBy: 'Premios PrimerPlato.com 2014',
	payments: ['Sodexo Pass', 'Edenred', 'Chèque Déjeuner'],
};

export const reviews: { q: Bi; who: string; venue: VenueId; src: string }[] = [
	{ q: b('La carne asada está muy buena y la patata asada es deliciosa.', 'The grilled meat is great and the baked potato is delicious.'), who: 'Francisco', venue: 'malasana', src: 'Google' },
	{ q: b('Todo un clásico de la zona.', 'A true local classic.'), who: 'Diego', venue: 'santa-paula', src: 'Google' },
	{ q: b('Relajado, tranquilo y bonito.', 'Relaxed, quiet and lovely.'), who: 'Cliente de Google', venue: 'malasana', src: 'Google' },
	{ q: b('La mejor sangría de mi vida.', 'The best sangria of my life.'), who: 'María Dolores', venue: 'malasana', src: 'Google' },
];

export const timeline: { year: string; title: Bi; text: Bi; venue?: VenueId }[] = [
	{
		year: '1984',
		title: b('Se enciende la primera brasa', 'The first fire is lit'),
		text: b(
			'Papulinos abre en la calle Malasaña, en la Trinidad: un patio andaluz con pérgola de cañizo, mesas rústicas y una parrilla que ya no se apagaría.',
			'Papulinos opens on calle Malasaña, in La Trinidad: an Andalusian patio with a reed pergola, rustic tables and a grill that would never go out.',
		),
		venue: 'malasana',
	},
	{
		year: 'III',
		title: b('Santa Paula, con terraza junto al mar', 'Santa Paula, with a terrace by the sea'),
		text: b(
			'Junto a la playa de la Misericordia llega Papulinos Santa Paula, pensado para parecerse al original y recuperar la gran terraza al aire libre.',
			'By Misericordia beach comes Papulinos Santa Paula, designed to feel like the original and bring back the big open-air terrace.',
		),
		venue: 'santa-paula',
	},
	{
		year: '2017',
		title: b('Don Cristian: parrilla y cocina', 'Don Cristian: grill & kitchen'),
		text: b(
			'Papulinos Don Cristian abre en la zona de El Corte Inglés y suma a la brasa entrantes y platos más elaborados, con salón amplio y terraza.',
			'Papulinos Don Cristian opens near El Corte Inglés, adding starters and more elaborate dishes to the grill, with a roomy dining room and a terrace.',
		),
		venue: 'don-cristian',
	},
	{
		year: '2026',
		title: b('Tres casas, el mismo fuego', 'Three houses, the same fire'),
		text: b(
			'Más de 40 años después seguimos igual: buena carne, brasa de verdad, la patata asada de siempre y un equipo que te trata como en casa.',
			'Over 40 years later we haven’t changed: good meat, real embers, the same baked potato as always and a team that treats you like family.',
		),
	},
];
