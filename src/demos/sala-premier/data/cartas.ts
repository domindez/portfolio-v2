/**
 * Cartas de cada sala: una muestra de 3–4 secciones sacadas de las cartas QR reales
 * (trivify.es/cartasqr/premier-*, nov. 2026). No es la carta completa.
 */

export interface CartaItem {
	name: string;
	desc?: string;
	/** Un precio, o varios cuando el grupo tiene columnas (null = no se sirve en ese formato). */
	price?: string | (string | null)[];
	badge?: string;
}

export interface CartaGroup {
	title: string;
	/** Columnas de precio (p. ej. barril: ½ pinta / Pinta). */
	columns?: string[];
	note?: string;
	items: CartaItem[];
}

export interface CartaSection {
	id: string;
	title: string;
	intro: string;
	groups: CartaGroup[];
}

export const cartas: Record<string, CartaSection[]> = {
	centro: [
		{
			id: 'cervezas',
			title: 'Cervezas',
			intro: '',
			groups: [
				{
					title: 'De barril',
					columns: ['½ pinta', 'Pinta'],
					items: [
						{ name: 'Estrella Galicia', desc: 'Lager · 5,5º', price: ['3,00', '5,50'] },
						{ name: 'Guinness', desc: 'Irish Stout · 5,6º', price: ['4,00', '7,00'] },
						{ name: 'Brewdog Punk IPA', desc: 'IPA · 5,6º', price: ['3,80', '7,00'] },
						{ name: 'Erdinger', desc: 'Weissbier · 5,7º', price: ['3,50', '6,50'] },
						{ name: 'Brugse Zot', desc: 'Blonde belga · 6º', price: ['3,50', '6,50'] },
						{ name: 'Peroni', desc: 'Lager italiana · 4,7º', price: ['3,50', '6,50'] },
					],
				},
				{
					title: 'Nacionales',
					items: [
						{ name: 'Estrella 1906', desc: '6,5º', price: '4,00' },
						{ name: '1906 Red Vintage', desc: 'Tostada 8,0º', price: '4,00' },
						{ name: '1906 Black Coupage', desc: 'Dunkeel bock 7,2º', price: '4,00' },
						{ name: '1906 La Pelirroja', desc: 'Irish Red Ale 5,0º', price: '4,00' },
						{ name: 'Alhambra 1925', desc: 'Bohemian Pilsener 6,5º Granada', price: '4,00' },
						{ name: 'Estrella Galicia', desc: 'Lager 5,5º Galicia', price: '3,50' },
						{ name: 'Estrella Galicia 0.0%', desc: 'Lager 0,0º Galicia', price: '3,50' },
						{ name: 'Estrella Galicia Tostada 0.0%', desc: 'Tostada 0,0º', price: '3,50' },
						{ name: 'Estrella Sin Gluten', desc: 'Sin gluten 5,5º', price: '3,50' },
						{ name: 'Voll-Damm', desc: 'Oktoberfest-Marzen  7,2º', price: '4,00' },
					],
				},
				{
					title: 'Importadas',
					items: [
						{ name: 'Corona', desc: 'México, Pale Lager 4,6º', price: '4,50' },
						{ name: 'Grolsch Radler', desc: 'Holanda 2º', price: '3,50' },
						{ name: 'Heineken', desc: 'Holanda, 5,0º', price: '4,50' },
						{ name: 'Asahi', desc: 'Japón, 5,5º', price: '4,50' },
					],
				},
				{
					title: 'Belgas',
					items: [
						{ name: 'Straffe Hendrik Tripel', desc: 'Abadía, triple belga. 9%', price: '5,50' },
						{ name: 'Straffe Hendrik Quadrupel', desc: 'Abadía, quadrupel belga 9%', price: '5,50' },
						{ name: 'Blue Moon', desc: 'Witbier Ale 5,4°', price: '5,00' },
						{ name: 'Leffe Blonde', desc: 'Abadía, Blonde 6,6º', price: '5,00' },
						{ name: 'La Chouffe', desc: '8º', price: '5,50' },
						{ name: 'La Chouffe Houblon', desc: 'Belgian Tripel IPA 9º', price: '5,50' },
						{ name: 'La Chouffe Cherry', desc: 'Fruit Beer 8,0º', price: '5,50' },
						{ name: 'Rochefort 10', desc: 'Trappist Strong Ale 9,2º', price: '5,50' },
						{ name: 'Kwak', desc: 'Belgian Strong Ale 8º', price: '5,00' },
						{ name: 'Gulden Draak Imperial Stout', desc: 'Imperial Stout, 12º', price: '5,50' },
						{ name: 'Gulden Draak', desc: 'Belgian Strong Ale 10,5º', price: '5,50' },
						{ name: 'Delirium Tremens', desc: 'Belga 10º Strong Beer', price: '5,00' },
						{ name: 'Tripel Karmeliet', desc: 'Strong Beer, Bélgica, 8,4º', price: '5,00' },
					],
				},
				{
					title: 'Alemanas',
					items: [
						{ name: 'Paulaner', desc: 'Alemania, Weissbier 5,5º', price: '6,50' },
						{ name: 'Weihenstephaner', desc: 'Alemania 7,7º', price: '6,00' },
					],
				},
			],
		},
		{
			id: 'cocteles',
			title: 'Cócteles',
			intro: '',
			groups: [
				{
					title: 'La casa',
					items: [
						{ name: 'Tiki Jungle', desc: 'Ron Santa Teresa, Captain Morgan Black, melocotón, piña, canela y limón', price: '12,50' },
						{ name: 'Pornstar Martini', desc: 'Vodka, fruta de la pasión, vainilla, limón y Passoa', price: '12,50' },
						{ name: 'Mora Julep', desc: 'Jim Beam, mora, jengibre, limón, hierbabuena y soda', price: '12,50' },
						{ name: 'Espresso Martini', desc: 'Vodka, café y licor de café', price: '12,50' },
						{ name: 'Paloma', desc: 'Tequila Don Julio, lima y pomelo', price: '12,50' },
						{ name: 'Mojito', desc: 'Ron, lima, hierbabuena y azúcar', price: '9,50' },
						{ name: 'Aperol Spritz', desc: 'Aperol, cava y soda', price: '9,00' },
					],
				},
				{
					title: 'Sin alcohol',
					items: [
						{ name: 'Mojito sin', price: '7,00' },
						{ name: 'San Francisco', price: '7,00' },
						{ name: 'Pantera Rosa', price: '7,00' },
						{ name: 'Piña colada sin', price: '7,00' },
					],
				},
			],
		},
		{
			id: 'destilados',
			title: 'Destilados',
			intro: '',
			groups: [
				{
					title: 'Whisky',
					items: [
						{ name: 'Jameson', desc: 'Irlanda', price: '8,50' },
						{ name: 'Bushmills 10 años', desc: 'Irlanda', price: '10,00' },
						{ name: 'Talisker 10 años', desc: 'Escocia · Isla de Skye', price: '10,00' },
						{ name: 'Lagavulin', desc: 'Escocia · Islay', price: '16,00' },
						{ name: 'Macallan 12 años', desc: 'Escocia · Speyside', price: '18,00' },
					],
				},
				{
					title: 'Ginebra',
					items: [
						{ name: 'Tanqueray Ten', price: '9,50' },
						{ name: 'Hendrick’s', price: '10,00' },
						{ name: 'Gin Mare', price: '10,00' },
						{ name: 'Roku', price: '9,00' },
						{ name: 'Tanqueray 0,0', desc: 'Sin alcohol', price: '6,50' },
					],
				},
				{
					title: 'Ron',
					items: [
						{ name: 'Diplomático', price: '10,00' },
						{ name: 'Kraken Black Spiced', price: '11,00' },
						{ name: 'Matusalem 15 años', price: '12,00' },
						{ name: 'Zacapa 23', price: '15,00' },
					],
				},
				{
					title: 'Tequila y mezcal',
					columns: ['Chupito', 'Copa'],
					items: [
						{ name: 'Casamigos', price: ['5,00', '12,00'] },
						{ name: 'Don Julio Reposado', price: ['7,00', '14,00'] },
						{ name: 'Patrón', price: ['6,00', '11,00'] },
						{ name: 'Mezcal 7 Misterios', price: ['6,00', '11,00'] },
						{ name: 'José Cuervo', price: ['3,50', '7,50'] },
					],
				},
			],
		},
		{
			id: 'cafes',
			title: 'Cafés y dulces',
			intro: '',
			groups: [
				{
					title: 'Cafés',
					items: [
						{ name: 'Café Solo', price: '2,00' },
						{ name: 'Café con Leche', price: '3,00' },
						{ name: 'Café Irlandés', price: '8,00' },
					],
				},
				{
					title: 'Cafés de cine',
					items: [
						{ name: 'Cinema Paradiso (1988)', desc: 'Café, leche, caramelo, avellana', price: '5,00' },
						{ name: 'Delicatessen (1991)', desc: 'Café, leche, leche condensada, choco-avellana', price: '5,00' },
						{ name: 'Bon apetit (2010)', desc: 'Café, leche, chocolate blanco, choco-avellana', price: '5,00' },
						{ name: 'Charlie y la fábrica de chocolate (2005)', desc: 'Café, leche, crema de chocolate, vainilla', price: '5,00' },
						{ name: 'El secreto de sus ojos', desc: 'Café, caramelo, nata y cacao', price: '5,00' },
						{ name: 'Posdata te quiero (2007)', desc: 'Café, Baileys, caramelo, nata', price: '6,00' },
						{ name: 'Tacones lejanos (1991)', desc: 'Café, Licor 43, chocolate blanco, nata', price: '6,00' },
					],
				},
				{
					title: 'Batidos',
					items: [
						{ name: 'Chocolate Blanco', price: '5,00' },
						{ name: 'Kinder', price: '5,00' },
					],
				},
				{
					title: 'Tés e infusiones',
					items: [
						{ name: 'Verde', price: '2,00' },
						{ name: 'Rojo', price: '2,00' },
						{ name: 'Negro', price: '2,00' },
						{ name: 'Canela', price: '2,00' },
						{ name: 'Té Chai', desc: 'Té negro, trozos de jengibre, cítricos, cardamomo, clavo, anís estrellado, nuez moscada', price: '3,70' },
						{ name: 'Té Marroquí', desc: 'Té negro + té rojo, hierba buena, azúcar moreno', price: '3,70' },
						{ name: 'Roibos Aloha', desc: 'Manzana, hibiscus y jengibre', price: '2,00' },
						{ name: 'Roibos Kalahari', desc: 'Cacao y canela', price: '2,00' },
					],
				},
			],
		},
		{
			id: 'refrescos',
			title: 'Vinos, sidras y refrescos',
			intro: '',
			groups: [
				{
					title: 'Champagne y cava',
					items: [
						{ name: 'Moët & Chandon Impérial', desc: 'Botella', price: '80,00' },
						{ name: 'Aviva', desc: 'Botella', price: '20,00' },
						{ name: 'Freixenet', desc: 'Benjamín', price: '8,00' },
					],
				},
				{
					title: 'Sidras',
					items: [
						{ name: 'Kopparbergs', price: '4,00' },
						{ name: 'Ladrón de Manzanas 4.5º', desc: 'Manzana 33cl.', price: '4,00' },
						{ name: 'Magners', price: '4,00' },
					],
				},
				{
					title: 'Vinos',
					items: [
						{ name: 'Vino Blanco', price: '22,00' },
						{ name: 'Vino Tinto Rioja', price: '22,00' },
						{ name: 'Vino Tinto Ribera Duero', price: '22,00' },
						{ name: 'Vino Rosado', price: '22,00' },
						{ name: 'Moscatel Málaga', price: '14,00' },
						{ name: 'Tinto Limón', price: '4,00' },
					],
				},
				{
					title: 'Refrescos',
					items: [
						{ name: 'Fuze tea', price: '3,50' },
						{ name: 'Aquarius', price: '3,50' },
						{ name: 'Redbull', price: '3,50' },
						{ name: 'Limón&nada', price: '3,50' },
						{ name: 'Ginger Beer', price: '3,50' },
						{ name: 'Tónicas Premium', price: '3,50' },
						{ name: 'Zumo de Frutas', desc: 'Minute Maid: Piña, Melocotón, Naranja o Tomate', price: '3,50' },
						{ name: 'Agua', price: '2,00' },
						{ name: 'Agua gas', price: '2,50' },
						{ name: 'Soda', price: '3,00' },
						{ name: 'Bitter', price: '3,00' },
						{ name: 'Appletiser', price: '4,00' },
						{ name: 'Salitos', price: '3,50' },
						{ name: 'Sprite', price: '3,00' },
						{ name: 'Tónica Schweppes', price: '3,00' },
					],
				},
			],
		},
	],

	teatinos: [
		{
			id: 'cervezas',
			title: 'Cervezas',
			intro: '',
			groups: [
				{
					title: 'De barril',
					items: [
						{ name: 'Estrella Galicia', price: '3,90' },
						{ name: '1906 Reserva', price: '4,50' },
						{ name: 'Erdinger', price: '5,00' },
						{ name: 'Punk IPA', price: '6,00' },
						{ name: 'Guinness', price: '6,00' },
					],
				},
				{
					title: 'Nacionales',
					items: [
						{ name: '1906 Red Vintage', desc: 'Tostada 8,0º', price: '3,90' },
						{ name: 'Alhambra 1925', desc: 'Lager 6,5º Granada', price: '3,90' },
						{ name: 'Estrella Galicia', desc: 'Lager 5,5º Galicia', price: '3,50' },
						{ name: 'Estrella Galicia 0.0%', desc: 'Galicia', price: '3,50' },
						{ name: 'Estrella Galicia 0.0% Tostada', desc: 'Galicia', price: '3,50' },
						{ name: 'Estrella Galicia Sin Gluten', desc: 'Lager Especial 5,5º Malaga', price: '3,50' },
						{ name: 'B-Lemon (Estrella)', price: '3,50' },
						{ name: 'Mahou 5*', desc: 'South Coast Pale ALE 4,5º Málaga', price: '3,50' },
					],
				},
				{
					title: 'Artesanas',
					items: [
						{ name: 'Cannabis Club', desc: 'Lager herbal 4,9º', price: '3,50' },
						{ name: 'Hoppy Flower', desc: 'Doble IPA Artesana', price: '3,50' },
						{ name: 'Brewdog Wingman', desc: 'Session IPA 4,3º', price: '4,00' },
					],
				},
				{
					title: 'Belgas',
					items: [
						{ name: 'Grimbergem Double', desc: 'Abadia 6,7º', price: '3,90' },
						{ name: 'Leffe Blonde', desc: 'Abadia 6,6º', price: '3,90' },
						{ name: 'Judas', desc: 'Strong Ale 8,5º', price: '3,90' },
						{ name: 'La Chouffe', desc: 'Strong Pale Ale 8,5º', price: '4,00' },
						{ name: 'Chouffe Cherry', desc: 'Fruit beer con aroma cereza 8,0º', price: '4,00' },
						{ name: 'Rochefort 10', desc: 'Quadrupel Black 11,3º', price: '4,50' },
						{ name: 'Kwak', desc: 'Belgian Strong Ale 8º', price: '3,90' },
						{ name: 'Gulden Draak', desc: 'Belgian Strong Ale 10,5º', price: '4,50' },
					],
				},
				{
					title: 'Alemanas',
					items: [
						{ name: 'Paulaner Naturtrub', desc: 'Weissbier 5,0º', price: '6,00' },
					],
				},
				{
					title: 'Importadas',
					items: [
						{ name: 'Coronita (México)', desc: 'Pilsner 4,5º', price: '3,90' },
						{ name: 'Salitos (México)', desc: 'Azul - Rosa - Mojito', price: '3,90' },
						{ name: 'Heineken (Holanda)', desc: 'Lager 5,0º', price: '3,90' },
					],
				},
			],
		},
		{
			id: 'cocteles',
			title: 'Cócteles',
			intro: '',
			groups: [
				{
					title: 'La casa',
					items: [
						{ name: 'Mojito de Jägermeister', badge: 'Novedad', price: '8,00' },
						{ name: 'Mangoritiña', desc: 'Tequila Patrón, Cointreau, lima y mango', price: '8,00' },
						{ name: 'Nuestro pequeño secreto', desc: 'Ron, Martini Rosso, zumo de limón y azúcar', price: '8,00' },
						{ name: 'Dark & Stormy', desc: 'Ron Kraken, ginger beer y lima', price: '8,00' },
						{ name: 'Mango Ginger', desc: 'Bombay Dry, mango, lima y jengibre', price: '8,00' },
						{ name: 'Hurricane #4', desc: 'Ron, limón, naranja y fruta de la pasión', price: '8,00' },
						{ name: 'Daiquiris frutales', desc: 'Fresa, mango, plátano, melón, coco o fruta de la pasión', price: '8,00' },
						{ name: 'Sangría', desc: 'Vino tinto, limón, brandy, Licor 43 y vermut', price: '8,00' },
					],
				},
				{
					title: 'De la coctelería',
					items: [
						{ name: 'Mojito', desc: 'Ron, lima, hierbabuena y azúcar moreno', price: '8,00' },
						{ name: 'Piña colada', desc: 'Ron, Malibú, piña y coco', price: '8,00' },
						{ name: 'Margarita', price: '8,00' },
						{ name: 'Whiskey Sour', price: '8,00' },
						{ name: 'Old Fashioned', price: '8,00' },
						{ name: 'Mai Tai', price: '8,00' },
						{ name: 'Long Island Iced Tea', price: '8,00' },
						{ name: 'Aperol Spritz', desc: 'Aperol, soda y cava', price: '8,00' },
					],
				},
				{
					title: 'Mocktails',
					items: [
						{ name: 'Honey Ginger', desc: 'Sirope de miel, ginger beer y lima', price: '7,00' },
						{ name: 'Shanghái', desc: 'Maracuyá, naranja, lima y mango', price: '6,00' },
						{ name: 'Pantera Rosa', desc: 'Piña, coco, nata y almendra', price: '6,00' },
						{ name: 'San Francisco', desc: 'Naranja, melocotón, piña y granadina', price: '6,00' },
						{ name: 'Mojito sin', desc: 'Esencia de ron, hierbabuena, lima y azúcar', price: '6,00' },
					],
				},
			],
		},
		{
			id: 'cafes',
			title: 'Cafés, batidos y tés de cine',
			intro: '',
			groups: [
				{
					title: 'Cafés de cine',
					items: [
						{ name: 'Cinema Paradiso (1988)', desc: 'Café, leche, caramelo, avellana', price: '3,95' },
						{ name: 'Delicatesen (1991)', desc: 'Café, leche, leche condensada, kinder', price: '3,95' },
						{ name: 'Un toque de canela (2003)', desc: 'Café, leche, caramelo, canela', price: '3,95' },
						{ name: 'Bon apetit (2010)', desc: 'Café, leche, chocolate blanco, chocol-avellana', price: '3,95' },
						{ name: 'Charlie y la fábrica de chocolate (2005)', desc: 'Café, leche, crema de brownie, vainilla', price: '4,00' },
						{ name: 'Amelie (2001)', desc: 'Café, leche, caramelo', price: '4,00' },
						{ name: 'El secreto de sus ojos (2009)', desc: 'Café, leche, lotus', price: '4,00' },
						{ name: 'Posdata te quiero (2007)', desc: 'Café, baileys, caramelo, nata', price: '4,50' },
						{ name: 'Tacones lejanos (1991)', desc: 'Café, licor 43, chocolate blanco, nata', price: '4,50' },
						{ name: 'En el nombre del padre (1993)', desc: 'Café, whisky, nata', price: '4,50' },
						{ name: 'El discurso del rey (2010)', desc: 'Café, Frangelico, kinder', price: '4,50' },
					],
				},
				{
					title: 'Batidos',
					items: [
						{ name: 'Huesito', desc: 'Leche, chocolate con avellana, huesito, esencia de vainilla', price: '6,50' },
						{ name: 'Frutos rojos', desc: 'Leche, fresas, frutos rojos', price: '6,50' },
						{ name: 'Chocolate', price: '6,50' },
						{ name: 'Filipinos blancos', price: '6,50' },
						{ name: 'Kinder', price: '6,50' },
						{ name: 'Lotus', price: '6,50' },
					],
				},
				{
					title: 'Chocolates',
					items: [
						{ name: 'Chocolate Negro', desc: 'Un chocolate espeso, con el exquisito amargor del chocolate negro', price: '2,90' },
						{ name: 'Chocolate con Leche', desc: 'Un delicioso chocolate con leche', price: '2,90' },
						{ name: 'Chocolate Blanco', desc: 'Para los amantes del chocolate blanco, un deliciosa taza de chocolate espeso', price: '2,90' },
					],
				},
				{
					title: 'Tés de cine',
					items: [
						{ name: 'Noche Árabe', desc: 'Roibos, canela, figuras de azucar y pétalos de rosa', price: '2,50' },
						{ name: 'Perla Negra', desc: 'Rooibos, pasas, trozos de chocolate y aroma de ron', price: '2,50' },
						{ name: 'Memorias de África', desc: 'Roibos africano, cacao, almendras y aroma de whisky', price: '2,50' },
						{ name: 'Roibos Frutos Rojos', price: '2,20' },
						{ name: 'Cleopatra', desc: 'Té negro, nueces de macadami, chocolate y roma natural', price: '2,50' },
						{ name: 'Sueño de Verano', desc: 'Té verde y negro, naranja y flor de azahar', price: '2,50' },
						{ name: 'Pasión Turca', desc: 'Té negro de ceilán, rosas, almendras, vainilla y cáscara de cítricos', price: '2,50' },
						{ name: 'Love Story', desc: 'Té negro con trocitos de piña, uva, rosas y flor de anciano', price: '2,50' },
						{ name: 'Dulce Invierno', desc: 'Té negro, vainilla, canela, almendra y naranja', price: '2,50' },
						{ name: 'Té Marroquí', desc: 'Té negro, té rojo, hierbabuena y azucar moreno', price: '2,50' },
						{ name: 'Té Moruno', desc: 'Té verde, hierbabuena y azucar moreno', price: '2,50' },
					],
				},
			],
		},
	],

	huelin: [
		{
			id: 'cervezas',
			title: 'Cervezas',
			intro: '',
			groups: [
				{
					title: 'De barril',
					columns: ['Caña', 'Copa', 'Jarra'],
					items: [
						{ name: 'Estrella Galicia', price: ['1,80', '3,00', '3,90'] },
						{ name: '1906', price: [null, '3,90', '4,50'] },
					],
				},
				{
					title: 'Barril a pintas',
					columns: ['½ pinta', 'Pinta'],
					items: [
						{ name: 'Guinness', price: ['4,00', '6,00'] },
						{ name: 'Brewdog Punk IPA', price: ['4,00', '6,00'] },
						{ name: 'Erdinger', price: ['3,00', '5,00'] },
					],
				},
				{
					title: 'Ediciones limitadas',
					items: [
						{ name: '3Monos Tiki God Blood', desc: 'Tropical IPA · 6,5º', price: '7,00' },
						{ name: '3Monos Stoned Terpene Pilots', desc: 'Terpene IPA · 6,5º', price: '7,00' },
						{ name: '3Monos Neon Arcade', desc: 'Blueberry Pilsner · 4,5º', price: '6,00' },
						{ name: '3Monos Mandarina Mecánica', desc: 'Tangerine Pilsner · 4,5º', price: '6,00' },
					],
				},
				{
					title: 'Nacionales',
					items: [
						{ name: '1906', desc: 'Lager 6,5º', price: '3,90' },
						{ name: '1906 La Pelirroja', desc: 'Red Ale Irish 5,0º', price: '3,90' },
						{ name: '1906 Red Vintage', desc: 'Tostada 8,0º', price: '3,90' },
						{ name: '1906 Black Coupage', desc: 'Negra 7,2º', price: '3,90' },
						{ name: 'Alhambra 1925', desc: 'Lager 6,5º Granada', price: '3,90' },
						{ name: 'Alhambra Reserva Roja', desc: 'Granada', price: '3,90' },
						{ name: 'Cruzcampo', desc: 'Lager 4,8º Sevilla', price: '3,50' },
						{ name: 'Estrella Galicia', desc: 'Lager 5,5º Galicia', price: '3,00' },
						{ name: 'Estrella Galicia 0.0%', desc: 'South Coast Pale Ale 4,5º Galicia', price: '3,00' },
						{ name: 'Estrella Galicia 0.0% Tostada', desc: 'Sin alcohol 0,0º Galicia', price: '3,00' },
						{ name: 'Estrella Galicia Sin Gluten', desc: 'Lager Especial 5,5º Galicia', price: '3,00' },
						{ name: 'Mahou 5*', desc: 'South Coast Pale ALE 4,5º', price: '3,50' },
						{ name: 'San Miguel', desc: 'South Coast Pale ALE 4,5º', price: '3,50' },
						{ name: 'Victoria', desc: 'South Coast Pale ALE 4,5º Málaga', price: '3,50' },
					],
				},
				{
					title: 'Importadas',
					items: [
						{ name: 'Asashi (Japón)', price: '3,90' },
						{ name: 'Brugset Zot Blonde (Bélgica)', price: '4,50' },
						{ name: 'Budweiser (EE.UU.)', desc: 'Lager 4,8º', price: '3,90' },
						{ name: 'Corona (México)', desc: 'Pilsner 4,5º', price: '3,90' },
						{ name: 'Desperados (Francia)', desc: 'Shandy 6,0º', price: '3,90' },
						{ name: 'Groslch Limon (Holanda)', desc: 'Shandy 4,5º', price: '3,50' },
						{ name: 'Heineken (Holanda)', desc: 'Lager 5,0º', price: '3,90' },
						{ name: 'Lindemans', desc: 'Fruit Lambic Frambose (Frambuesa) 2,5º', price: '3,90' },
					],
				},
				{
					title: 'Belgas',
					items: [
						{ name: 'Grimbergem Double', desc: 'Abadia 6,7º', price: '3,90' },
						{ name: 'Leffe Blonde', desc: 'Abadia 6,6º', price: '4,00' },
						{ name: 'Judas', desc: 'Strong Ale 8,5º', price: '3,90' },
						{ name: 'La Chouffe', desc: 'Strong Pale Ale 8,5º', price: '5,00' },
						{ name: 'La Chouffe Cherry', desc: 'Lambik 8,0º', price: '5,00' },
						{ name: 'Rochefort 6', desc: 'Strong Ale 6,0º', price: '4,00' },
						{ name: 'Rochefort 8', desc: 'Trappist Strong Ale 9,2º', price: '4,50' },
						{ name: 'Rochefort 10', desc: 'Quadrupel Black 11,3º', price: '5,00' },
						{ name: 'Kwak', desc: 'Belgian Strong Ale 8º', price: '4,00' },
						{ name: 'Gulden Draak', desc: 'Belgian Strong Ale 10,5º', price: '4,50' },
					],
				},
				{
					title: 'Alemanas',
					items: [
						{ name: 'Franziskaner', desc: 'Hefe Weissber 5,0º', price: '5,00' },
						{ name: 'Paulaner Naturtrub', desc: 'Weissbier 5,0º', price: '5,00' },
						{ name: 'Weihensephaner', desc: 'Hefe Weissbier', price: '4,00' },
						{ name: 'Erdinger Weissbier', desc: 'Weissbier 5,3º', price: '4,00' },
						{ name: 'Erdinger Picantus', desc: 'Weissbier 7,3º', price: '4,00' },
					],
				},
			],
		},
		{
			id: 'cocteles',
			title: 'Cócteles',
			intro: '',
			groups: [
				{
					title: 'La casa',
					items: [
						{ name: 'Mojito', desc: 'Ron, lima, hierbabuena, azúcar', price: '6,50' },
						{ name: 'Daiquiri', desc: 'Ron, lima, azúcar', price: '7,00' },
						{ name: 'Daiquiris Frutales', desc: 'Elige entre los sabores: fresa, mango, plátano, melón, coco, fruta de la pasión', price: '7,00' },
						{ name: 'Piña Colada', desc: 'Ron, zumo de piña, coco, nata', price: '6,50' },
						{ name: 'Sex on the Beach', desc: 'Vodka Eristoff, Bols licor melocotón, zumo de naranja, granadina', price: '6,50' },
						{ name: 'Mango Ginger', desc: 'Gin Bombay dry, mango, lima, jengibre', price: '7,00' },
						{ name: 'Dark&Stormy', desc: 'Ron Kraken, Ginger Beer, lima', price: '7,00' },
						{ name: 'Mangoritiña', desc: 'Tequila patrón, triple seco, lima, mango, espuma de piña', price: '7,00' },
						{ name: 'Clover Club', desc: 'Gin Bombay Dry, limón, azúcar, frambuesa, clara de huevo', price: '7,00' },
						{ name: 'Hurricane 4', desc: 'Ron, zumo de limón, zumo de naranja, fruta de la pasión', price: '7,00' },
						{ name: 'Nuestro Pequeño Secreto', desc: 'Ron, Martini rosso, zumo de limón, azúcar, espuma de piña', price: '7,00' },
						{ name: 'Honey Ginger', desc: 'Sirope de miel, Ginger Beer y zumo de lima', price: '7,00' },
						{ name: 'Aperol Spritz', desc: 'Aperol, Soda y Cava', price: '7,00' },
						{ name: 'Sangría', desc: 'Vino Tinto, Limón, Brandy, Licor 43 y Vermut', price: '7,00' },
						{ name: 'Jhonnie & Lemon', desc: 'Johnnie Walker etiqueta negra con limonada', price: '7,00' },
						{ name: 'Pornstar Martini', desc: 'Vodka, Passoa, vainilla, lima, chupito de cava', price: '7,00' },
					],
				},
				{
					title: 'Clásicos',
					items: [
						{ name: 'Margarita', price: '7,00' },
						{ name: 'Bramble', price: '7,00' },
						{ name: 'Whiskey Sour', price: '7,00' },
						{ name: 'Cosmopolitan', price: '7,00' },
						{ name: 'Mai Thai', price: '7,00' },
						{ name: 'Caipirinha', price: '7,00' },
						{ name: 'Bloody Mary', price: '7,00' },
						{ name: 'Long Island Ice Tea', price: '7,00' },
						{ name: 'Old Fashioned', price: '7,00' },
					],
				},
			],
		},
		{
			id: 'para-picar',
			title: 'Para picar',
			intro: '',
			groups: [
				{
					title: 'Del horno',
					items: [
						{ name: 'Pan de ajo', desc: 'Nuestra masa de pizza al horno con ajo, mantequilla y mozzarella fiordilatte', price: '8,90' },
						{ name: 'Bruschetta de la casa', desc: 'Masa al horno con tomate natural, aceite de oliva, albahaca, ajo y orégano', price: '8,90' },
					],
				},
				{
					title: 'Montaditos',
					items: [
						{ name: 'Montadito de lomo', price: '2,50' },
						{ name: 'Montadito de cerdo', price: '2,50' },
						{ name: 'Cresta', price: '2,50' },
					],
				},
			],
		},
		{
			id: 'pizzas',
			title: 'Pizzas',
			intro: '',
			groups: [
				{
					title: 'Al horno',
					items: [
						{ name: 'Margherita', desc: 'Tomate con albahaca, mozzarella fiordilatte y orégano', price: '10,50' },
						{ name: 'Diavola', desc: 'Tomate, mozzarella fiordilatte, pepperoni y orégano', price: '13,90' },
						{ name: 'Carnívora', desc: 'Tomate, mozzarella, boloñesa mixta, pollo, bacón y Parmigiano Reggiano 24 meses', price: '13,90' },
						{ name: 'BBQ', desc: 'Tomate, mozzarella, pollo asado, bacón y salsa barbacoa', price: '13,90' },
						{ name: '5 Formaggi', desc: 'Base blanca, gorgonzola, scamorza ahumada, Parmigiano y queso azul', price: '13,90' },
						{ name: 'Mortadella e Pistacchio', desc: 'Base blanca, pesto de pistacho, tomates secos y mortadela italiana', price: '17,50', badge: 'De la casa' },
					],
				},
			],
		},
		{
			id: 'cafes',
			title: 'Cafés, batidos y tés de cine',
			intro: '',
			groups: [
				{
					title: 'Cafés de cine',
					items: [
						{ name: 'Cinema Paradiso (1988)', desc: 'Café, leche, caramelo, avellana', price: '4,20' },
						{ name: 'Delicatesen (1991)', desc: 'Café, leche, leche condensada, crema de kinder', price: '4,20' },
						{ name: 'Un toque de canela (2003)', desc: 'Café, leche, caramelo, canela', price: '4,20' },
						{ name: 'Bon apetit (2010)', desc: 'Café, leche, crema de Filipinos blancos, sirope de conguitos', price: '4,20' },
						{ name: 'Charlie y la fábrica de chocolate (2005)', desc: 'Café, leche, crema de brownie, vainilla', price: '4,50' },
						{ name: 'Amelie (2001)', desc: 'Café, leche, praliné', price: '4,50' },
						{ name: 'El secreto de sus ojos (2009)', desc: 'Café, leche, crema de toffe', price: '4,50' },
						{ name: 'Posdata te quiero (2007)', desc: 'Café, baileys, caramelo, nata', price: '4,90' },
						{ name: 'Tacones lejanos (1991)', desc: 'Café, licor 43, crema de Filipinos blancos', price: '4,90' },
						{ name: 'En el nombre del padre (1993)', desc: 'Café, whisky, nata', price: '4,90' },
						{ name: 'El discurso del rey (2010)', desc: 'Café, ginebra, Frangelico, crema de kinder', price: '4,90' },
					],
				},
				{
					title: 'Frappés',
					items: [
						{ name: 'Scorsese', desc: 'Café, leche', price: '5,50' },
						{ name: 'Tarantino', desc: 'Café, leche, Bailey\'s', price: '5,50' },
						{ name: 'George Lucas', desc: 'Café, leche, Filipinos blancos', price: '5,50' },
						{ name: 'Monty Phyton', desc: 'Café, leche, caramelo, espéculos', price: '5,50' },
						{ name: 'Almodovar', desc: 'Café, leche, toffe', price: '5,50' },
					],
				},
				{
					title: 'Batidos',
					items: [
						{ name: 'Filipinos blancos', desc: 'Leche, vainilla, Filipinos blancos', price: '6,50' },
						{ name: 'Kinder Bueno', desc: 'Leche, vainilla, caramelo, chocolate, kinder', price: '6,50' },
						{ name: 'Rocher', desc: 'Leche, vainilla, Rocher', price: '6,50' },
						{ name: 'Fresa - Vainilla - Chocolate', desc: 'Leche, vainilla, Fresa - Vainilla - Chocolate', price: '6,50' },
						{ name: 'Conguitos', desc: 'Leche, vainilla, Conguitos', price: '6,50' },
						{ name: 'Huesito', desc: 'Leche, chocolate con avellana, huesito, esencia de vainilla', price: '6,50' },
						{ name: 'Frutos rojos', desc: 'Leche, fresas, frutos rojos', price: '6,50' },
					],
				},
				{
					title: 'Tés de cine',
					items: [
						{ name: 'Noche Árabe', desc: 'Roibos, canela, figuras de azucar y pétalos de rosa', price: '2,90' },
						{ name: 'Perla Negra', desc: 'Rooibos, pasas, trozos de chocolate y aroma de ron', price: '2,90' },
						{ name: 'Memorias de África', desc: 'Roibos africano, cacao, almendras y aroma de whisky', price: '2,90' },
						{ name: 'Cleopatra', desc: 'Té negro, nueces de macadami, chocolate y roma natural', price: '2,90' },
						{ name: 'Sueño de Verano', desc: 'Té verde y negro, naranja y flor de azahar', price: '2,90' },
						{ name: 'Pasión Turca', desc: 'Té negro de ceilán, rosas, almendras, vainilla y cáscara de cítricos', price: '2,90' },
						{ name: 'Love Story', desc: 'Té negro con trocitos de piña, uva, rosas y flor de anciano', price: '2,90' },
						{ name: 'Dulce Invierno', desc: 'Té negro, vainilla, canela, almendra y naranja', price: '2,90' },
						{ name: 'Té Marroquí', desc: 'Té negro, té rojo, hierbabuena y azucar moreno', price: '2,90' },
						{ name: 'Té Moruno', desc: 'Té verde, hierbabuena y azucar moreno', price: '2,90' },
					],
				},
			],
		},
	],

	granada: [
		{
			id: 'cervezas',
			title: 'Cervezas',
			intro: '',
			groups: [
				{
					title: 'De barril',
					columns: ['½ pinta', 'Pinta'],
					items: [
						{ name: 'Guinness', price: ['3,80', '6,00'] },
						{ name: 'Erdinger', price: ['3,80', '6,00'] },
						{ name: 'Brewdog Punk IPA', price: ['3,80', '6,30'] },
						{ name: 'Brugse Zot', price: ['3,80', '6,30'] },
						{ name: '1906', price: ['4,00', null] },
						{ name: 'Budvar', price: ['4,50', null] },
					],
				},
				{
					title: 'En lata',
					items: [
						{ name: 'Happy Flower', desc: 'Doble IPA · 7,5º · sin gluten · Barcelona · 33 cl', price: '7,50' },
						{ name: 'Gilda', desc: 'Hazy IPA · 6,1º · País Vasco · 33 cl', price: '7,00' },
						{ name: 'Chilling Me Softly', desc: 'Cold IPA · 5,8º · País Vasco · 50 cl', price: '8,50' },
						{ name: 'Imparable', desc: 'IPA · 6,8º · País Vasco · 50 cl', price: '8,00' },
					],
				},
				{
					title: 'Nacionales',
					items: [
						{ name: '1906 Red Vintage', desc: 'Tostada 8,0º', price: '4,00' },
						{ name: '1906 Black Coupage', desc: 'Stout 7,2º', price: '4,00' },
						{ name: '1906 Irish Ale', desc: 'Ale 5º', price: '4,00' },
						{ name: 'Aguila sin filtrar', desc: 'Lager 5,5º', price: '4,50' },
						{ name: 'Aguila sin filtrar sin alcohol', desc: 'Lager sin alcohol 0,0º', price: '4,00' },
						{ name: 'Alhambra 1925 reserva', desc: 'Lager 6,5º, Granada', price: '4,00' },
						{ name: 'Dougalls IPA 4 (Sin Gluten)', desc: 'IPA 6º, Cantabria', price: '5,00' },
						{ name: 'Estrella Galicia', desc: 'Lager 5,5º, Galicia', price: '3,00' },
						{ name: 'Estrella Galicia 0.0%', desc: 'Lager, Galicia', price: '3,00' },
						{ name: 'Estrella Galicia 0.0% Tostada', desc: 'Lager, Galicia', price: '3,00' },
						{ name: 'Estrella Galicia Sin Gluten', desc: 'Lager, Galicia', price: '3,00' },
						{ name: 'Voll Damm', desc: 'Oktoberfest-Marzen 7,2º', price: '4,20' },
						{ name: 'Radler', price: '3,50' },
					],
				},
				{
					title: 'Importadas',
					items: [
						{ name: 'Corona', desc: 'Pale Lager 4,6º', price: '4,20' },
						{ name: 'Asahi', desc: 'Japón 5,5º', price: '4,20' },
						{ name: 'Heineken', desc: 'Holanda 5º', price: '4,00' },
						{ name: 'Red Stripe Lager', desc: 'Lager 4,7º, Jamaica', price: '5,00' },
						{ name: 'Judas', price: '4,20' },
						{ name: 'Brewdog Hazy Jane', desc: 'Notas a piña, mango y lima picante 7,2º', price: '5,00' },
					],
				},
				{
					title: 'Belgas',
					items: [
						{ name: 'Satan Red', desc: 'Belga 8%', price: '5,20' },
						{ name: 'Straffe Hendrik Tripel', desc: 'Belga 9%', price: '5,50' },
						{ name: 'Straffe Hendrik Quadrupel', desc: 'Belga 9%', price: '5,50' },
						{ name: 'Blue Moon', desc: 'White ale 5,4º', price: '4,80' },
						{ name: 'Leffe Blonde', desc: 'Abadía 6,6º', price: '4,70' },
						{ name: 'La Chouffe Houblon', desc: 'Belgian Tripel IPA 9º', price: '5,00' },
						{ name: 'La Chouffe Cherry', desc: 'Fruit Beer 8,0º', price: '5,00' },
						{ name: 'Mc Chouffe', desc: 'Strong Ale 8º', price: '5,00' },
						{ name: 'Kwak', desc: 'Belgian Strong Ale 8º', price: '5,00' },
						{ name: 'Gulden Draak', desc: 'Belgian Strong Ale 10,5º', price: '5,00' },
						{ name: 'Chimay', desc: 'Belgium Strong Ale 9,0º', price: '5,00' },
						{ name: 'Duvel', desc: 'Blond 8,5º', price: '5,00' },
						{ name: 'Duvel Triple Hop', desc: 'Belgian Strong Ale 9,5º', price: '5,00' },
						{ name: 'Delirium Tremens', desc: 'Belga 10º Strong Beer', price: '5,00' },
						{ name: 'Tripel Karmeliet', desc: 'Strong Beer 8,4º, Bélgica', price: '5,00' },
					],
				},
				{
					title: 'Alemanas',
					items: [
						{ name: 'Weinhstephaner', desc: 'Hefeweizen 5,4º', price: '5,50' },
						{ name: 'Weinhstephaner Vitus', desc: 'Weizenbock 7,7º', price: '5,50' },
						{ name: 'Paulaner', desc: 'Weissbier 5,5º', price: '5,50' },
						{ name: 'Erdinger Pikantus', desc: 'Weissbräu 7,3º', price: '5,50' },
					],
				},
			],
		},
		{
			id: 'cocteles',
			title: 'Cócteles',
			intro: '',
			groups: [
				{
					title: 'La casa',
					items: [
						{ name: 'La poción del hobbit', desc: 'Dewar’s, Talisker 10 y jengibre', price: '9,00' },
						{ name: 'El secreto del pony pisador', desc: 'Bombay, mango y jengibre', price: '9,50' },
						{ name: 'Maldición de Sauron', desc: 'Bacardí limón, frutos rojos y violeta', price: '9,50' },
						{ name: 'Sueño en el Orient Express', desc: 'Hendrick’s, St-Germain y pepino', price: '11,00' },
						{ name: 'Sed de pirata', desc: 'Bacardí Reserva, azúcar, angostura de naranja y cacao', price: '9,50' },
						{ name: 'Basil Breeze', desc: 'Gin Mare, fresas y sirope de albahaca', price: '12,00' },
						{ name: 'Aviation S&G', desc: 'El gin-tonic 2.0: Gin Mare, licor de hierbas y violeta', price: '12,00' },
					],
				},
				{
					title: 'Clásicos',
					items: [
						{ name: 'Mojito', price: '8,00' },
						{ name: 'Daiquiri', price: '8,50' },
						{ name: 'Margarita', price: '9,00' },
						{ name: 'Whiskey Sour', price: '9,00' },
						{ name: 'Old Fashioned', price: '9,50' },
						{ name: 'Long Island Iced Tea', price: '9,50' },
					],
				},
				{
					title: 'Sin alcohol',
					items: [
						{ name: 'Shanghái', desc: 'Maracuyá, naranja, lima y mango', price: '6,50' },
						{ name: 'Pantera Rosa', desc: 'Piña, coco, nata y almendra', price: '6,50' },
						{ name: 'San Francisco', desc: 'Naranja, melocotón, piña y granadina', price: '6,00' },
					],
				},
			],
		},
		{
			id: 'cafes',
			title: 'Cafés, batidos y chocolates',
			intro: '',
			groups: [
				{
					title: 'Cafés',
					items: [
						{ name: 'Solo', price: '2,00' },
						{ name: 'Con leche', price: '2,50' },
						{ name: 'Cortado', price: '2,50' },
						{ name: 'Americano', price: '2,50' },
						{ name: 'Café manchado', price: '2,50' },
						{ name: 'Café con leche con licor', price: '4,00' },
						{ name: 'Café manchado con licor', price: '4,00' },
						{ name: 'Irlandés', price: '6,00' },
						{ name: 'Bombón', price: '3,50' },
						{ name: 'Capuccino', price: '3,00' },
						{ name: 'Capuccino con nata', price: '3,00' },
						{ name: 'ColaCao', price: '3,00' },
						{ name: 'Infusiones', desc: 'Manzanilla, Menta Poleo, Tila', price: '2,50' },
					],
				},
				{
					title: 'Cafés de cine',
					items: [
						{ name: 'Delicatessen (1991)', desc: 'Leche condensada, choco-avellana', price: '4,50' },
						{ name: 'Un toque de canela (2003)', desc: 'Caramelo, canela', price: '4,50' },
						{ name: 'Bon appetit (2010)', desc: 'Chocolate, chocolate blanco', price: '4,50' },
						{ name: 'Capuchino Charlie y la fábrica de chocolate (2005)', desc: 'Brownie, vainilla', price: '4,50' },
						{ name: 'El secreto de sus ojos (2009)', desc: 'Caramelo', price: '4,50' },
						{ name: 'Café con sonrisas Posdata te quiero (2007)', desc: 'Baileys, caramelo', price: '4,50' },
					],
				},
				{
					title: 'Batidos',
					items: [
						{ name: 'Batido de Oreo', desc: 'Oreo, leche, vainilla, crema', price: '4,80' },
						{ name: 'Batido de Chocolate Blanco', desc: 'Leche, vainilla, choc. blanco', price: '4,80' },
						{ name: 'Batido Kinder', desc: 'Kinder, crema Kinder', price: '4,80' },
						{ name: 'Batido Fresa', price: '4,80' },
					],
				},
				{
					title: 'Chocolates',
					items: [
						{ name: 'Chocolate Negro', desc: 'Amargor intenso', price: '4,00' },
						{ name: 'Chocolate Negro con Tiramisú', price: '4,00' },
						{ name: 'Chocolate Negro con Brownie', price: '4,00' },
						{ name: 'Chocolate con Leche', price: '4,00' },
						{ name: 'Chocolate con Leche y Fresa', price: '4,00' },
						{ name: 'Chocolate Blanco', price: '4,00' },
					],
				},
			],
		},
	],
};
