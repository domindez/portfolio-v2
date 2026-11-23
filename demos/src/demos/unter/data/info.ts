import type { Bi } from './beers';

const b = (es: string, en: string): Bi => ({ es, en });

export const info = {
	name: 'Cervecería Untertürkheim',
	short: 'Unter',
	address: 'P.º Marítimo Ciudad de Melilla, 9',
	area: 'La Malagueta · 29016 Málaga',
	phone: '631 807 115',
	phoneAlt: '645 51 73 09',
	instagram: 'https://www.instagram.com/cerveceria.unter_malaga/',
	instagramHandle: '@cerveceria.unter_malaga',
	maps: 'https://www.google.com/maps/search/?api=1&query=Cervecer%C3%ADa+Untert%C3%BCrkheim+Malaga',
	rating: '4,6',
	reviews: 653,
	/** Horario: todos los días 12:00–00:30 */
	open: { from: 12 * 60, to: 24 * 60 + 30 },
	hours: b('Todos los días · 12:00 – 00:30', 'Every day · 12:00 – 00:30'),
	taps: 20,
};

export const toasts = ['Prost!', '¡Salud!', 'Cheers!', 'Santé!', 'Na zdraví!', 'Proost!', 'Skål!', 'Kanpai!', 'Salute!', 'Yamas!', '¡Chin chin!'];

export const timeline = [
	{
		year: 'Stuttgart',
		title: b('Untertürkheim', 'Untertürkheim'),
		text: b(
			'El nombre viene de un barrio de Stuttgart, a orillas del Neckar, entre viñedos y tradición cervecera suaba.',
			'The name comes from a district of Stuttgart on the river Neckar, surrounded by vineyards and Swabian beer tradition.',
		),
	},
	{
		year: '2004',
		title: b('Buenos Aires', 'Buenos Aires'),
		text: b(
			'La primera Untertürkheim abre sus puertas en Argentina. Salchichas, chucrut y cerveza alemana en pleno San Telmo.',
			'The first Untertürkheim opens in Argentina. Sausages, sauerkraut and German beer in the heart of San Telmo.',
		),
	},
	{
		year: '2022',
		title: b('Málaga', 'Málaga'),
		text: b(
			'La aventura cruza el Atlántico y llega a La Malagueta: una casa cervecera frente al mar.',
			'The adventure crosses the Atlantic and lands in La Malagueta: a beer house facing the sea.',
		),
	},
	{
		year: 'Hoy',
		yearEn: 'Today',
		title: b('+200 cervezas', '200+ beers'),
		text: b(
			'20 grifos, más de 200 referencias de 17 países y cuatro años brindando en el paseo marítimo.',
			'20 taps, over 200 beers from 17 countries and four years of toasts on the seafront.',
		),
	},
];

export interface Fiesta {
	id: string;
	when: Bi;
	title: string;
	text: Bi;
	theme: 'okto' | 'deli' | 'chouffe' | 'futbol' | 'patrick';
}

export const fiestas: Fiesta[] = [
	{
		id: 'okto',
		when: b('Septiembre · Octubre', 'September · October'),
		title: 'Oktoberfest',
		text: b('Más de 50 cervezas alemanas, comida típica, premios y mucho Prost.', '50+ German beers, traditional food, prizes and plenty of Prost.'),
		theme: 'okto',
	},
	{
		id: 'deli',
		when: b('Otoño', 'Autumn'),
		title: 'Delirium Party',
		text: b('Una noche entera dedicada a la cerveza del elefante rosa. Sorteos incluidos.', 'A whole night devoted to the pink-elephant beer. Giveaways included.'),
		theme: 'deli',
	},
	{
		id: 'chouffe',
		when: b('Primavera y verano', 'Spring & summer'),
		title: 'Fiesta Chouffe',
		text: b('El duende vuelve a la terraza: Chouffe de barril, premios y sorteos.', 'The gnome is back on the terrace: Chouffe on draught, prizes and raffles.'),
		theme: 'chouffe',
	},
	{
		id: 'futbol',
		when: b('Cada jornada', 'Every matchday'),
		title: 'Fútbol & F1',
		text: b('LaLiga, Premier, Bundesliga, Champions y Fórmula 1 en pantalla. Si no está puesto, lo pedís.', 'LaLiga, Premier League, Bundesliga, Champions League and F1 on screen. Just ask for your match.'),
		theme: 'futbol',
	},
	{
		id: 'patrick',
		when: b('17 de marzo', '17 March'),
		title: 'St. Patrick’s',
		text: b('Guinness de grifo, todo de verde y el trébol en la espuma.', 'Guinness on tap, everything green and a shamrock in the foam.'),
		theme: 'patrick',
	},
];

export const leagues = ['LaLiga', 'Premier League', 'Bundesliga', 'Champions', 'Fórmula 1', 'Mundial 2026'];

export const praise = [
	b('Amplia variedad de cervezas de grifo', 'A huge range of draught beers'),
	b('Ideal para una cerveza en su terraza', 'Perfect for a beer on the terrace'),
	b('Camareros muy majos y atentos', 'Lovely, friendly staff'),
	b('Un sueño para cerveceros', 'A beer lover’s dream'),
];
