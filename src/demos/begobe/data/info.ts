/**
 * Begobé Coffee & Kitchen — datos de los dos locales.
 * Fuentes: Linktree @begobetorremolinos, Instagram @begobe.coffee, fichas de Google Maps
 * y el dossier de cumpleaños en PDF.
 */

export interface Bi {
	es: string;
	en: string;
}
export const b = (es: string, en: string = es): Bi => ({ es, en });

export type VenueId = 'torremolinos' | 'soho';

export interface Venue {
	id: VenueId;
	name: string;
	short: string;
	area: Bi;
	address: string;
	postal: string;
	city: string;
	/** Minutos desde medianoche (hora de Madrid) */
	open: number;
	close: number;
	hours: string;
	phone?: string;
	rating: number;
	reviews: number;
	maps: string;
	tagline: Bi;
	perks: Bi[];
	/** Qué carta tiene */
	offer: Bi;
}

export const venues: Venue[] = [
	{
		id: 'torremolinos',
		name: 'Begobé Torremolinos',
		short: 'Torremolinos',
		area: b('Centro de Torremolinos', 'Central Torremolinos'),
		address: 'Av. Palma de Mallorca, 9',
		postal: '29620',
		city: 'Torremolinos',
		open: 8 * 60,
		close: 22 * 60 + 30,
		hours: '8:00 – 22:30',
		phone: '667 61 54 26',
		rating: 4.1,
		reviews: 947,
		maps: 'https://www.google.com/maps/search/?api=1&query=Cafeter%C3%ADa+Begob%C3%A9+Torremolinos+Av.+Palma+de+Mallorca+9',
		tagline: b('Tu cafetería de confianza en el corazón de Torremolinos', 'Your go-to café in the heart of Torremolinos'),
		perks: [b('Cocina non stop'), b('Parque de bolas', 'Ball pit for kids'), b('Salón amplio y terraza', 'Big lounge & terrace'), b('Para llevar y a domicilio', 'Takeaway & delivery')],
		offer: b('Desayunos, comida, merienda y cena', 'Breakfast, lunch, snacks & dinner'),
	},
	{
		id: 'soho',
		name: 'Begobé Soho Málaga',
		short: 'Soho Málaga',
		area: b('Barrio del Soho, Málaga', 'Soho district, Málaga'),
		address: 'C. Tomás Heredia, 9',
		postal: '29001',
		city: 'Málaga',
		open: 8 * 60,
		close: 19 * 60 + 30,
		hours: '8:00 – 19:30',
		rating: 4.7,
		reviews: 540,
		maps: 'https://www.google.com/maps/search/?api=1&query=Begob%C3%A9+Soho+M%C3%A1laga+Calle+Tom%C3%A1s+Heredia',
		tagline: b('Desayunos y meriendas a dos pasos del puerto', 'Breakfast & afternoon treats steps from the port'),
		perks: [b('Desayunos y meriendas', 'Breakfast & afternoon snacks'), b('Sofá corrido con enchufes', 'Long sofa with plugs'), b('Bollería y tostas', 'Pastries & toasts'), b('En pleno Soho', 'Right in Soho')],
		offer: b('Desayunos, brunch y meriendas', 'Breakfast, brunch & afternoon snacks'),
	},
];

export const venueById = (id: string) => venues.find((v) => v.id === id) ?? venues[0];

export const info = {
	name: 'Begobé Coffee & Kitchen',
	motto: b('Nos va lo natural · Rico y Sano', 'We like it natural · Tasty & wholesome'),
	instagram: 'https://www.instagram.com/begobe.coffee/',
	handle: '@begobe.coffee',
	whatsapp: '34667615426',
	phone: '667 61 54 26',
};

/** Fiestas de cumpleaños (dossier oficial, Torremolinos). */
export const birthday = {
	parkWeek: 180,
	parkWeekend: 200,
	cakeKg: 21.5,
	notice: 2,
	window: '12:00 – 20:30',
	kidsMenus: [
		{ name: b('Lagrimitas + patatas + fruta', 'Chicken strips + fries + fruit'), price: 9 },
		{ name: b('Sándwich mixto + patatas + fruta', 'Ham & cheese toastie + fries + fruit'), price: 8.5 },
		{ name: b('Sándwich de Nocilla + fruta', 'Chocolate spread sandwich + fruit'), price: 8.5 },
		{ name: b('Croissant mixto + patatas + fruta', 'Ham & cheese croissant + fries + fruit'), price: 9 },
	],
	share: [
		{ name: b('Empanadas al kilo', 'Empanadas by the kilo'), note: b('Pollo curry, boloñesa o atún con pisto', 'Curry chicken, bolognese or tuna & ratatouille'), price: '14,85 €/kg' },
		{ name: b('Saladitos', 'Savoury bites'), note: b('Atún, sobrasada, paté, jamón, queso, salmón', 'Tuna, sobrasada, pâté, ham, cheese, salmon'), price: '14,30 €/kg' },
		{ name: b('Tortilla de patatas', 'Spanish omelette'), note: b('Al kilo, como la de la vitrina', 'By the kilo, just like in the display'), price: '12,50 €/kg' },
	],
	steps: [
		{ t: b('Reserva', 'Book'), d: b('Día, hora de llegada y una pequeña señal', 'Day, arrival time and a small deposit') },
		{ t: b('Comida', 'Food'), d: b('Menús infantiles, picoteo y la carta para los mayores', 'Kids menus, sharing platters and the full menu for grown-ups') },
		{ t: b('Tarta', 'Cake'), d: b('Elegís sabores de nuestro recetario o nos traéis una foto', 'Pick flavours from our recipe book or bring us a photo') },
		{ t: b('¡A disfrutar!', 'Enjoy!'), d: b('Parque de bolas y un camarero pendiente de vosotros', 'Ball pit and a waiter looking after you') },
	],
};

export interface Review {
	text: Bi;
	author: string;
	venue: VenueId;
	lang: 'es' | 'en';
}

/** Reseñas reales de Google (fragmentos). */
export const reviews: Review[] = [
	{ text: b('Un cumpleaños precioso en Begobé Torremolinos. Celebramos el de nuestra hija de 5 años y no podemos estar más contentos.', 'A lovely birthday at Begobé Torremolinos. We celebrated our 5-year-old’s party and couldn’t be happier.'), author: 'Bernardo R.', venue: 'torremolinos', lang: 'es' },
	{ text: b('La comida más rica de Torremolinos. Perfecto para desayunar, hacer brunch, comer o cenar. Toda la bollería se hornea allí mismo.', 'The tastiest food in Torremolinos! Amazing for breakfast, brunch, lunch and dinner. All their pastry is baked on the spot.'), author: 'Vladimir M.', venue: 'torremolinos', lang: 'en' },
	{ text: b('Cafetería muy agradable, se está muy a gusto dentro. Café muy rico y bollería de vicio: las galletitas de avellana están riquísimas.', 'A really pleasant café, so cosy inside. Great coffee and irresistible pastries — the hazelnut cookies are delicious.'), author: 'Cristina F.', venue: 'soho', lang: 'es' },
	{ text: b('Todo muy rico, la atención impecable y todos muy, muy amables. Recomendadísimo.', 'Everything was delicious, the service spotless and everyone so, so kind. Highly recommended.'), author: 'Gabriela C.', venue: 'soho', lang: 'es' },
];

export const reviewTags = [
	b('“Variedad de dulces, zumos, batidos y sobre todo bocadillos”', '“Loads of pastries, juices, shakes and above all sandwiches”'),
	b('“Raciones grandes y muy ricas”', '“Big, delicious portions”'),
	b('“Muy buenas tostas y bollería”', '“Great toasts and pastries”'),
	b('“Panes variados para llevar”', '“All kinds of bread to take home”'),
];
