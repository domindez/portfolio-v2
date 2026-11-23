/**
 * Carta de Begobé.
 * - "Carta Desayunos" (común a los dos locales, PDF del Linktree).
 * - "Cocina non stop" (solo Torremolinos, PDF bilingüe ES/EN del Linktree).
 * Precios del Soho según su carta en sala (foto de Google Maps, dic. 2025).
 */
import { b, type Bi, type VenueId } from './info';

export interface Dish {
	name: Bi;
	desc?: Bi;
	/** Precio único */
	price?: number;
	/** Dos precios (p. ej. pitufo / baguette) */
	prices?: [number, number];
	/** Precio distinto en el Soho */
	soho?: number | [number, number];
	/** Solo en un local */
	only?: VenueId;
	star?: boolean;
	veggie?: boolean;
}

export interface Extra {
	name: Bi;
	price: number;
}

export interface Section {
	id: string;
	group: GroupId;
	title: Bi;
	kicker?: Bi;
	intro?: Bi;
	/** Cabeceras de dos columnas de precio */
	cols?: [Bi, Bi];
	items: (Dish | { head: Bi })[];
	extras?: { title: Bi; items: Extra[] };
	notes?: Bi[];
	only?: VenueId;
	doodle?: string;
}

export type GroupId = 'desayunos' | 'cocina' | 'dulce' | 'bebidas';

export const groups: { id: GroupId; title: Bi; sub: Bi; only?: VenueId; doodle: string }[] = [
	{ id: 'desayunos', title: b('Desayunos y meriendas', 'Breakfast & brunch'), sub: b('Pan del día, tostaricas, huevos y bocadillos', 'Fresh bread, toasts, eggs and sandwiches'), doodle: 'cup' },
	{ id: 'cocina', title: b('Cocina non stop', 'Non-stop kitchen'), sub: b('Para picar, ensaladas, burgers y wraps a cualquier hora', 'Bites, salads, burgers and wraps at any hour'), only: 'torremolinos', doodle: 'burger' },
	{ id: 'dulce', title: b('Dulce y natural', 'Sweet & natural'), sub: b('Gofres, crepes, bagels dulces y yogures', 'Waffles, crêpes, sweet bagels and yoghurt bowls'), doodle: 'waffle' },
	{ id: 'bebidas', title: b('Para beber', 'Drinks'), sub: b('Zumos naturales, batidos, cafés, tés y algo fresquito', 'Fresh juices, shakes, coffee, tea and something cold'), doodle: 'juice' },
];

const PAN: [Bi, Bi] = [b('Pitufo'), b('Baguette')];
const SIDES = b('Acompáñalo con patatas fritas, sweet chips o miniensalada +2,00 €', 'Add French fries, sweet potato fries or a side salad +€2.00');

export const sections: Section[] = [
	/* ======================= DESAYUNOS ======================= */
	{
		id: 'pan',
		group: 'desayunos',
		kicker: b('Elige tu pan y relleno', 'Choose your bread & filling'),
		title: b('Pan del día', 'Fresh rolls'),
		intro: b('Pitufo blanco, integral o multicereales (+0,20 €) o baguette blanca.', 'White, wholemeal or multigrain roll (+€0.20) or white baguette.'),
		cols: PAN,
		doodle: 'bread',
		items: [
			{ name: b('Aceite, tomate, mantequilla o mermelada', 'Olive oil, tomato, butter or jam'), prices: [2, 3.2], veggie: true },
			{ name: b('Pavo y aceite o mantequilla', 'Turkey with olive oil or butter'), prices: [2.3, 3.5] },
			{ name: b('Jamón y queso', 'Ham & cheese'), prices: [2.6, 3.8] },
			{ name: b('Salchichón ibérico y mantequilla', 'Iberian salchichón & butter'), prices: [2.8, 4], soho: [2.6, 3.8] },
			{ name: b('Catalana de serrano, pavo o york', '“Catalana”: tomato & oil with serrano, turkey or ham'), prices: [2.8, 4] },
			{ name: b('Queso curado y tomate', 'Cured cheese & tomato'), prices: [3.2, 4.4], veggie: true },
			{ name: b('Atún o aguacate con tomate', 'Tuna or avocado with tomato'), prices: [3.2, 4.4] },
			{ name: b('Vegetal', 'Vegetal'), desc: b('Atún, huevo duro, tomate, lechuga y mahonesa', 'Tuna, boiled egg, tomato, lettuce and mayonnaise'), prices: [3.6, 4.8], soho: [3.4, 4.6] },
			{ name: b('Tortilla española y mahonesa', 'Spanish omelette & mayonnaise'), prices: [3.5, 4.7], star: true, veggie: true },
			{ name: b('Tomate, pavo y queso fresco', 'Tomato, turkey & fresh cheese'), prices: [3.2, 4.4] },
			{ name: b('Bacon, queso y mayonesa', 'Bacon, cheese & mayonnaise'), prices: [3.5, 4.7] },
		],
		extras: {
			title: b('Extras'),
			items: [
				{ name: b('Pavo o queso en lonchas', 'Turkey or sliced cheese'), price: 0.5 },
				{ name: b('Jamón serrano, queso curado, bacon o aguacate', 'Serrano ham, cured cheese, bacon or avocado'), price: 0.8 },
				{ name: b('Pollo, huevo duro, queso fresco o atún', 'Chicken, boiled egg, fresh cheese or tuna'), price: 1 },
				{ name: b('Salmón', 'Salmon'), price: 2 },
			],
		},
		notes: [b('Hazlo bagel por +1,00 €', 'Make it a bagel for +€1.00')],
	},
	{
		id: 'bolleria',
		group: 'desayunos',
		title: b('Bollería', 'Pastries'),
		intro: b('Y la vitrina del obrador, llena de dulces que cambian cada día.', 'Plus our bakery display, packed with treats that change every day.'),
		doodle: 'croissant',
		items: [
			{ name: b('Croissant'), price: 1.8, veggie: true },
			{ name: b('Croissant con mantequilla y mermelada', 'Croissant with butter & jam'), price: 2.4, veggie: true },
			{ name: b('Croissant mixto', 'Ham & cheese croissant'), price: 2.8, star: true },
		],
	},
	{
		id: 'brunch',
		group: 'desayunos',
		kicker: b('Café y zumo de naranja incluidos', 'Coffee & orange juice included'),
		title: b('Brunch'),
		doodle: 'egg',
		items: [
			{ name: b('Begobé'), desc: b('Pancakes, bacon, 2 huevos revueltos, plátano crujiente, crema de cacahuete y mermelada', 'Pancakes, bacon, 2 scrambled eggs, crispy banana, peanut butter and jelly'), price: 14.5, star: true },
			{ name: b('Avocadito'), desc: b('Tostada de molde especial con aguacate, huevo y jamón serrano + bowl de yogur con muesli y arándanos', 'Special toast with avocado, egg and serrano ham + yoghurt bowl with muesli and cranberries'), price: 13.5 },
			{ name: b('Dulzura', 'Dulzura'), desc: b('Torre de pancakes con queso crema, frutos rojos, miel, kiwi y nueces + parfait de frutas con muesli', 'Pancake tower with cream cheese, red berries, honey, kiwi and walnuts + fruit parfait with muesli'), price: 14.5, veggie: true },
		],
	},
	{
		id: 'tostaricas',
		group: 'desayunos',
		title: b('Tostaricas', 'Tostaricas'),
		intro: b('Nuestras tostas grandes, sobre pan especial.', 'Our big open toasts on special bread.'),
		doodle: 'toast',
		items: [
			{ name: b('Begobé'), desc: b('Tomate, huevo revuelto, jamón serrano, aguacate, parmesano y AOVE', 'Tomato, scrambled egg, serrano ham, avocado, parmesan and extra virgin olive oil'), price: 6.95, star: true },
			{ name: b('Deluxe'), desc: b('Lomo, roquefort, huevo de codorniz y jamón serrano', 'Pork loin, roquefort, quail egg and serrano ham'), price: 6.95 },
			{ name: b('Mole'), desc: b('Guacamole, huevo a la plancha, tomate picado, semillas y AOVE', 'Guacamole, fried egg, diced tomato, seeds and olive oil'), price: 6.95, veggie: true },
			{ name: b('Tono'), desc: b('Atún, tomate en rodajas, huevo duro y pimientos del piquillo', 'Tuna, sliced tomato, boiled egg and piquillo peppers'), price: 6.5 },
			{ name: b('Pescatore'), desc: b('Salmón ahumado, queso fresco de untar, rúcula y aceite de eneldo', 'Smoked salmon, cream cheese, rocket and dill oil'), price: 6.95 },
			{ name: b('Cabra', 'Cabra'), desc: b('Medallones de queso de cabra, mermelada de higos y rúcula', 'Goat cheese medallions, fig jam and rocket'), price: 6.95, veggie: true },
			{ name: b('Manantial'), desc: b('Huevo pochado, guacamole, espinacas frescas, parmesano y chía', 'Poached egg, guacamole, fresh spinach, parmesan and chia seeds'), price: 6.95, veggie: true },
		],
		notes: [SIDES],
	},
	{
		id: 'huevos',
		group: 'desayunos',
		title: b('Huevos', 'Eggs'),
		intro: b('Todos van acompañados de pan especial.', 'All served with special bread.'),
		doodle: 'egg',
		items: [
			{ name: b('Strong'), desc: b('Tortilla suave con pavo, queso, cebollita y espinacas frescas, con tomates cherry', 'Soft omelette with turkey, cheese, onion and fresh spinach, with cherry tomatoes'), price: 6.9, soho: 6.5 },
			{ name: b('Inglés', 'English'), desc: b('Dos huevos a la plancha, 2 salchichas, bacon, beans y tomate', 'Two fried eggs, 2 sausages, bacon, beans and tomato'), price: 7.95, star: true },
			{ name: b('Tortimole'), desc: b('Dos huevos revueltos con pavo, aguacate y queso fresco', 'Scrambled eggs with turkey, avocado and fresh cheese'), price: 6.9 },
			{ name: b('Basic fit'), desc: b('Tortilla con aguacate, tomatito y jamón serrano', 'Omelette with avocado, tomato and serrano ham'), price: 6.9 },
			{ name: b('Huevos rotos con jamón ibérico', 'Broken eggs with Iberian ham'), desc: b('Patatas fritas coronadas con huevos fritos, ajos y tiras de jamón', 'French fries topped with fried eggs, garlic and strips of ham'), price: 13.5, only: 'torremolinos' },
			{ name: b('Huevos rotos con secreto ibérico y pimientos del padrón', 'Broken eggs with Iberian secreto & padrón peppers'), desc: b('Patatas fritas con pimientos del padrón, huevos fritos y tiras de secreto ibérico', 'Fries with padrón peppers, fried eggs and strips of Iberian pork'), price: 15.5, only: 'torremolinos', star: true },
		],
		notes: [b('Ingrediente extra 1,00 €', 'Extra ingredient €1.00')],
	},
	{
		id: 'bagels',
		group: 'desayunos',
		title: b('Sándwiches y bagels', 'Sandwiches & bagels'),
		doodle: 'bagel',
		items: [
			{ name: b('Mixto', 'Ham & cheese toastie'), desc: b('Jamón cocido o pavo, queso y mantequilla', 'Ham or turkey, cheese and butter'), price: 4.5 },
			{ name: b('Bagel vegasano', 'Veggie bagel'), desc: b('Tomate, guacamole, huevo, zanahoria, cebolla crujiente, mayonesa y rúcula', 'Tomato, guacamole, egg, carrot, crispy onion, mayonnaise and rocket'), price: 6.2, soho: 6.5, veggie: true },
			{ name: b('Bagel serrano'), desc: b('Queso crema, rúcula, jamón serrano y tomate', 'Cream cheese, rocket, serrano ham and tomato'), price: 7.2 },
			{ name: b('Bagel aguacate', 'Avocado bagel'), desc: b('Aguacate, bacon, huevo frito y queso edam', 'Avocado, bacon, fried egg and edam cheese'), price: 7.8, star: true },
			{ name: b('Hit'), desc: b('Bacon, queso, tortilla, aguacate, tomate y mayonesa', 'Bacon, cheese, omelette, avocado, tomato and mayonnaise'), price: 7.5 },
			{ name: b('Sándwich especial Begobé', 'Begobé special sandwich'), desc: b('De dos pisos con pollo, bacon, queso, lechuga, tomate, cebolla y mayonesa', 'Double-decker with chicken, bacon, cheese, lettuce, tomato, onion and mayonnaise'), price: 7.9 },
		],
		notes: [SIDES],
	},
	{
		id: 'bocadillos',
		group: 'desayunos',
		kicker: b('Cada uno lleva el nombre de un rincón de Torremolinos', 'Each one is named after a corner of Torremolinos'),
		title: b('Bocadillos gourmet', 'Gourmet baguettes'),
		doodle: 'sandwich',
		items: [
			{ name: b('Carihuela'), desc: b('Paleta ibérica, tortilla francesa, lechuga, tomate y alioli', 'Iberian ham, omelette, lettuce, tomato and aioli'), price: 6.9, soho: 7.9 },
			{ name: b('Los Álamos'), desc: b('Bacon, huevo frito, queso, lechuga, tomate y mahonesa', 'Bacon, fried egg, cheese, lettuce, tomato and mayonnaise'), price: 6.9, soho: 7.9 },
			{ name: b('Bajondillo'), desc: b('Pollo a la plancha, bacon, queso edam, lechuga, tomate y mahonesa', 'Grilled chicken, bacon, edam, lettuce, tomato and mayonnaise'), price: 6.9, soho: 7.9 },
			{ name: b('La Colina'), desc: b('Jugosa carne de cerdo deshilachada con salsa barbacoa, rúcula, pepinillos y mayonesa', 'Pulled pork with BBQ sauce, rocket, pickles and mayonnaise'), price: 8.9, star: true },
			{ name: b('Playamar'), desc: b('Tiras de secreto ibérico, pimiento, jamón serrano y alioli', 'Iberian pork strips, pepper, serrano ham and aioli'), price: 8.9 },
			{ name: b('Pinillo'), desc: b('Pollo a la plancha, jamón serrano, pimientos fritos y alioli', 'Grilled chicken, serrano ham, fried peppers and aioli'), price: 6.9, soho: 7.9 },
			{ name: b('Calvario'), desc: b('Tortilla francesa, paleta ibérica, queso y mahonesa', 'Omelette, Iberian ham, cheese and mayonnaise'), price: 6.9, soho: 7.9 },
			{ name: b('Montemar'), desc: b('Tortilla francesa, aguacate, queso fresco y rúcula', 'Omelette, avocado, fresh cheese and rocket'), price: 6.9, soho: 7.9, veggie: true },
		],
		extras: {
			title: b('Extras'),
			items: [
				{ name: b('Pavo o queso en lonchas', 'Turkey or cheese'), price: 0.5 },
				{ name: b('Jamón serrano, queso curado o bacon', 'Serrano ham, cured cheese or bacon'), price: 0.8 },
				{ name: b('Pollo, huevo duro o queso fresco', 'Chicken, boiled egg or fresh cheese'), price: 1 },
				{ name: b('Salmón', 'Salmon'), price: 2 },
			],
		},
		notes: [SIDES],
	},

	/* ======================= COCINA NON STOP (Torremolinos) ======================= */
	{
		id: 'picar',
		group: 'cocina',
		only: 'torremolinos',
		title: b('Para picar', 'To share'),
		doodle: 'nachos',
		items: [
			{ name: b('Nachos'), desc: b('De maíz, queso fundido y guacamole', 'Corn nachos, melted cheese and guacamole'), price: 9.5, veggie: true },
			{ name: b('Nachos deluxe'), desc: b('Con carne y pico de gallo, guacamole, queso crema y queso fundido', 'With meat and pico de gallo, guacamole, cream cheese and melted cheese'), price: 12.5, star: true },
			{ name: b('Quesadilla'), desc: b('De jamón y queso fundido, con nachos y guacamole', 'Ham and melted cheese, with nachos and guacamole'), price: 8.5 },
			{ name: b('Quesadilla deluxe'), desc: b('De pollo o carne con queso fundido, con nachos y guacamole', 'Chicken or beef with melted cheese, with nachos and guacamole'), price: 9.5 },
			{ name: b('Croquetas (8 uds.)', 'Croquettes (8 pcs)'), desc: b('De pollo o jamón', 'Chicken or Spanish ham'), price: 8 },
			{ name: b('Alitas de pollo', 'Chicken wings'), desc: b('Con nuestra salsa barbacoa', 'With our BBQ sauce'), price: 8.5 },
			{ name: b('Lagrimitas de pollo', 'Breaded chicken strips'), desc: b('Tiras de pollo rebozadas', 'Crispy fried chicken strips'), price: 10.5 },
			{ name: b('Brioche pulled pork (ud.)', 'Pulled pork brioche (each)'), desc: b('Carne de cerdo desmechada con salsa barbacoa', 'Pulled pork with BBQ sauce'), price: 5.5 },
			{ name: b('Brioche tuna style (ud.)', 'Tuna brioche (each)'), desc: b('Atún con pico de gallo y guacamole', 'Tuna with pico de gallo and guacamole'), price: 5.5 },
			{ name: b('Tartar de atún', 'Tuna tartare'), desc: b('Atún fresco marinado con mango y aguacate, wakame y sésamo', 'Marinated fresh tuna with mango and avocado, wakame and sesame'), price: 13.5 },
			{ name: b('Trío de tacos de cochinita pibil', 'Trio of cochinita pibil tacos'), desc: b('Tortillas de trigo con cerdo desmechado, guacamole, plátano macho crujiente, cebolla morada y lima', 'Flour tortillas with pulled pork, guacamole, crispy plantain, red onion and lime'), price: 10.5 },
			{ name: b('Ración de patatas fritas o batata frita', 'French fries or sweet potato fries'), price: 3.5, veggie: true },
			{ name: b('Pan de la casa', 'House bread'), desc: b('Focaccia crujiente con aceitunas, tomate y cebolla · media / entera', 'Crispy focaccia with olives, tomato and onion · half / whole'), prices: [3.5, 4.5], veggie: true },
		],
	},
	{
		id: 'ensaladas',
		group: 'cocina',
		only: 'torremolinos',
		title: b('Ensaladas', 'Salads'),
		doodle: 'leaf',
		items: [
			{ name: b('César de pollo', 'Chicken Caesar'), desc: b('Pollo, mezclum de lechugas, bacon, parmesano, picatostes y salsa césar', 'Chicken, mixed greens, bacon, parmesan, croutons and Caesar dressing'), price: 11.9 },
			{ name: b('Begobé'), desc: b('Lechuga, queso de cabra, manzana, dátiles, nueces y salsa de mostaza y miel', 'Lettuce, goat cheese, apple, dates, walnuts and honey-mustard dressing'), price: 10.5, star: true, veggie: true },
			{ name: b('Touareg'), desc: b('Mezclum, manzana, aguacate, pasas, tiras de pollo, quinoa y salsa de mostaza y miel', 'Mixed greens, apple, avocado, raisins, chicken strips, quinoa and honey-mustard'), price: 11.9 },
			{ name: b('Pasta'), desc: b('Espirales, maíz, aceitunas negras, tomate, queso, atún y huevo duro', 'Fusilli, sweetcorn, black olives, tomato, cheese, tuna and boiled egg'), price: 13.5 },
			{ name: b('Fit'), desc: b('Espinacas frescas, fresas, aguacate, queso de cabra, tiras de pollo y nueces', 'Fresh spinach, strawberries, avocado, goat cheese, chicken strips and walnuts'), price: 11.9 },
		],
	},
	{
		id: 'burgers',
		group: 'cocina',
		only: 'torremolinos',
		title: b('Burgers y platos Begobé', 'Burgers & Begobé plates'),
		doodle: 'burger',
		items: [
			{ name: b('Angus burger'), desc: b('Carne de angus, queso edam, bacon, lechuga, tomate y cebolla crujiente', 'Angus beef, edam, bacon, lettuce, tomato and crispy onion'), price: 12 },
			{ name: b('Ibérica burger', 'Ibérica burger'), desc: b('Carne de angus, queso curado, jamón serrano, lechuga y tomate', 'Angus beef, cured cheese, serrano ham, lettuce and tomato'), price: 12 },
			{ name: b('Begobé burger'), desc: b('Carne de angus, rúcula, crema de queso, nueces, cebollita frita y salsa de arándanos', 'Angus beef, rocket, cream cheese, walnuts, crispy onion and blueberry sauce'), price: 12.5, star: true },
			{ name: b('American crispy burger'), desc: b('Pollo crispy extra crujiente, queso edam, tomate, lechuga y mayonesa', 'Extra-crispy chicken, edam, tomato, lettuce and mayonnaise'), price: 10.5 },
			{ name: b('Trío mini burger', 'Mini burger trio'), desc: b('Pulled pork o atún, lechuga iceberg, mayonesa y cebolla encurtida', 'Pulled pork or tuna, iceberg lettuce, mayonnaise and pickled onion'), price: 12 },
			{ name: b('Atún burger', 'Tuna burger'), desc: b('Carne de atún, lechuga iceberg, tomate y mayonesa', 'Tuna patty, iceberg lettuce, tomato and mayonnaise'), price: 12.5 },
			{ name: b('Basic fit'), desc: b('Pollo y huevo a la plancha con arroz basmati y ensalada', 'Grilled chicken and fried egg with basmati rice and salad'), price: 10.5 },
			{ name: b('Oriental'), desc: b('Wok de noodles con verduritas, gambas, huevo a la plancha, sésamo y soja', 'Noodle wok with vegetables, prawns, fried egg, sesame and soy sauce'), price: 9.5 },
			{ name: b('Finlandés', 'Finnish'), desc: b('Salmón ahumado con arroz basmati, huevo a la plancha y verduras o ensalada', 'Smoked salmon with basmati rice, fried egg and vegetables or salad'), price: 13.5 },
		],
		notes: [SIDES],
	},
	{
		id: 'wraps',
		group: 'cocina',
		only: 'torremolinos',
		title: b('Wraps'),
		doodle: 'wrap',
		items: [
			{ name: b('Mexicano', 'Mexican'), desc: b('Pollo, mix de pimientos, cebollita, guacamole y queso, con patatas fritas', 'Chicken, mixed peppers, onion, guacamole and cheese, with fries'), price: 10.5 },
			{ name: b('Noruego', 'Norwegian'), desc: b('Salmón ahumado, queso de untar, guacamole y rúcula, con patatas fritas', 'Smoked salmon, cream cheese, guacamole and rocket, with fries'), price: 11.5 },
		],
	},

	/* ======================= DULCE Y NATURAL ======================= */
	{
		id: 'gofres',
		group: 'dulce',
		title: b('Gofres y crepes', 'Waffles & crêpes'),
		intro: b('El mismo precio para todos. Topping de fruta +0,50 €.', 'Same price for all. Fruit topping +€0.50.'),
		doodle: 'waffle',
		items: [
			{ name: b('Goloso'), desc: b('Nutella, Kinder, dulce de leche o chocolate blanco', 'Nutella, Kinder, dulce de leche or white chocolate'), price: 4.95, soho: 5.95, star: true, veggie: true },
			{ name: b('Banofy'), desc: b('Plátano con Nutella o crema de cacahuete eco', 'Banana with Nutella or organic peanut butter'), price: 4.95, soho: 5.95, veggie: true },
			{ name: b('Delma'), desc: b('Yogur, miel, frutos rojos y chía', 'Yoghurt, honey, red berries and chia'), price: 4.95, soho: 5.95, veggie: true },
			{ name: b('Oreo'), desc: b('Chocolate blanco y Oreo', 'White chocolate and Oreo'), price: 4.95, soho: 5.95, veggie: true },
			{ name: b('Lotus'), desc: b('Galleta, crema Lotus y chocolate blanco', 'Lotus biscuit, Lotus spread and white chocolate'), price: 4.95, soho: 5.95, veggie: true },
		],
	},
	{
		id: 'bagel-dulce',
		group: 'dulce',
		title: b('Bagels dulces', 'Sweet bagels'),
		doodle: 'bagel',
		items: [
			{ name: b('Nutella, fresas y plátano', 'Nutella, strawberries & banana'), price: 4.75, veggie: true },
			{ name: b('Queso crema, frutos rojos, miel y nueces', 'Cream cheese, red berries, honey & walnuts'), price: 4.95, veggie: true },
		],
	},
	{
		id: 'yogures',
		group: 'dulce',
		title: b('Yogures happy y bowls', 'Happy yoghurts & bowls'),
		doodle: 'bowl',
		items: [
			{ name: b('Bol de frutas', 'Fruit bowl'), desc: b('Frutas de temporada con zumo de naranja natural', 'Seasonal fruit with fresh orange juice'), price: 4.95, veggie: true },
			{ name: b('Temporal'), desc: b('Miel de flores, muesli, frutos secos y canela', 'Honey, muesli, nuts and cinnamon'), price: 4.5, veggie: true },
			{ name: b('Fruiti'), desc: b('Fresas, kiwi, arándanos y mango con ralladura de chocolate', 'Strawberries, kiwi, blueberries and mango with chocolate shavings'), price: 4.95, star: true, veggie: true },
			{ name: b('Bosque'), desc: b('Frutos rojos, plátano, kiwi, nueces y chía', 'Red berries, banana, kiwi, walnuts and chia'), price: 4.95, veggie: true },
			{ name: b('Açaí bowl'), desc: b('Açaí, mango, frutos rojos, muesli y ralladura de chocolate', 'Açaí, mango, red berries, muesli and chocolate shavings'), price: 6.5, only: 'torremolinos', veggie: true },
		],
	},

	/* ======================= BEBIDAS ======================= */
	{
		id: 'zumos',
		group: 'bebidas',
		title: b('Zumos naturales', 'Fresh juices'),
		intro: b('Todos llevan base de zumo de naranja recién exprimido.', 'All made with a freshly squeezed orange juice base.'),
		doodle: 'juice',
		items: [
			{ name: b('Naranja', 'Orange'), desc: b('Pequeño / grande', 'Small / large'), prices: [2.6, 4], star: true },
			{ name: b('Canario'), desc: b('Fresa y plátano', 'Strawberry and banana'), price: 4.95 },
			{ name: b('Tropical'), desc: b('Plátano, mango y piña', 'Banana, mango and pineapple'), price: 4.95 },
			{ name: b('Moraito'), desc: b('Frutos rojos y plátano', 'Red berries and banana'), price: 4.95 },
			{ name: b('Detox'), desc: b('Manzana, limón, jengibre y hierbabuena', 'Apple, lemon, ginger and mint'), price: 4.95 },
			{ name: b('Zamán', 'Zamán'), desc: b('Zanahoria, manzana y limón', 'Carrot, apple and lemon'), price: 4.95 },
			{ name: b('Herbal'), desc: b('Frutos rojos, hierbabuena y jengibre', 'Red berries, mint and ginger'), price: 4.95 },
		],
	},
	{
		id: 'batidos',
		group: 'bebidas',
		title: b('Batidos', 'Shakes'),
		intro: b('Leche especial de soja o avena +0,50 €.', 'Soy or oat milk +€0.50.'),
		doodle: 'shake',
		items: [
			{ head: b('Dulces · con base de leche y azúcar', 'Sweet · milk & sugar base') },
			{ name: b('Kinder Bueno'), desc: b('Con galleta Kinder Bueno', 'With Kinder Bueno biscuit'), price: 5.2 },
			{ name: b('Lotus'), desc: b('Galleta, crema Lotus, chocolate blanco y nata', 'Biscuit, Lotus spread, white chocolate and cream'), price: 5.2, star: true },
			{ name: b('Oreo'), desc: b('Galleta Oreo, chocolate y nata', 'Oreo, chocolate and cream'), price: 5.2 },
			{ head: b('Proteicos', 'Protein') },
			{ name: b('Tabata'), desc: b('Proteína, cacao desgrasado y chocolate negro', 'Protein, defatted cocoa and dark chocolate'), price: 5.2 },
			{ name: b('GAP'), desc: b('Proteína, plátano y crema de cacahuete eco', 'Protein, banana and organic peanut butter'), price: 5.2 },
			{ name: b('Zumba'), desc: b('Proteína de vainilla, manzana y canela', 'Vanilla protein, apple and cinnamon'), price: 5.2 },
			{ name: b('Funcional', 'Functional'), desc: b('Proteína de coco, piña y coco rallado', 'Coconut protein, pineapple and grated coconut'), price: 5.2 },
			{ name: b('Bodypump'), desc: b('Proteína de mango y melocotón, mango y zumo de naranja', 'Mango-peach protein, mango and orange juice'), price: 5.2 },
			{ name: b('Spinning'), desc: b('Proteína de fresa, fresas y zumo de naranja', 'Strawberry protein, strawberries and orange juice'), price: 5.2 },
		],
	},
	{
		id: 'cafe',
		group: 'bebidas',
		title: b('Coffee experience'),
		intro: b('Café doble +0,20 € · leche de soja o avena +0,50 €.', 'Double shot +€0.20 · soy or oat milk +€0.50.'),
		doodle: 'cup',
		items: [
			{ name: b('Café solo', 'Espresso'), price: 1.6 },
			{ name: b('Café con leche', 'Coffee with milk'), price: 1.7, star: true },
			{ name: b('Vaso de leche', 'Glass of milk'), price: 1.5 },
			{ name: b('Cola Cao'), price: 1.8 },
			{ name: b('Americano'), price: 1.7 },
			{ name: b('Capuccino'), desc: b('Café, leche y crema de leche', 'Coffee, milk and milk foam'), price: 2.3 },
			{ name: b('Doble bombón', 'Double bombón'), desc: b('Leche condensada, crema y café', 'Condensed milk, cream and coffee'), price: 2 },
			{ name: b('Latte macchiato'), desc: b('Leche cremada, leche y expreso', 'Steamed milk, milk and espresso'), price: 2.8 },
			{ name: b('Café vienés', 'Viennese coffee'), desc: b('Café, leche y nata', 'Coffee, milk and whipped cream'), price: 3 },
			{ name: b('Café con coñac, anís o Baileys', 'Coffee with brandy, anise or Baileys'), price: 3.1 },
			{ name: b('Affogato'), desc: b('Bola de helado y expreso', 'Scoop of ice cream and espresso'), price: 4.5 },
			{ name: b('Café irlandés', 'Irish coffee'), desc: b('Café, whisky y nata', 'Coffee, whisky and cream'), price: 4.95 },
		],
	},
	{
		id: 'te',
		group: 'bebidas',
		title: b('Tea experience'),
		doodle: 'tea',
		items: [
			{ name: b('Té Happy', 'Happy tea'), desc: b('Cacao, anís, clavo y canela', 'Cocoa, anise, clove and cinnamon'), price: 2.3 },
			{ name: b('Rooibos'), desc: b('Cáscara de naranja y canela', 'Orange peel and cinnamon'), price: 2.3 },
			{ name: b('Frutas del bosque', 'Forest fruits'), desc: b('Frutos rojos', 'Red berries'), price: 2.3 },
			{ name: b('Té canela', 'Cinnamon tea'), price: 2.2 },
			{ name: b('Té moruno', 'Moroccan mint tea'), desc: b('Hierbabuena', 'Mint'), price: 2.2, star: true },
			{ name: b('Té rojo especial', 'Special red tea'), desc: b('Canela y clavo', 'Cinnamon and clove'), price: 2.2 },
			{ name: b('Té verde', 'Green tea'), desc: b('Limón y jengibre', 'Lemon and ginger'), price: 2.2 },
			{ name: b('Infusiones', 'Herbal infusions'), desc: b('Poleo menta, manzanilla o tila', 'Pennyroyal mint, chamomile or linden'), price: 2 },
			{ name: b('Té negro, verde, rojo o rooibos', 'Black, green, red or rooibos tea'), price: 1.9 },
			{ name: b('Té con leche', 'Tea with milk'), price: 2.1 },
			{ name: b('Té americano', 'American tea'), price: 2 },
		],
	},
	{
		id: 'refrescos',
		group: 'bebidas',
		title: b('Refrescos', 'Soft drinks'),
		doodle: 'bottle',
		items: [
			{ name: b('Agua', 'Water'), price: 2 },
			{ name: b('Agua con gas', 'Sparkling water'), price: 2.8 },
			{ name: b('Refrescos', 'Soft drinks'), price: 2.5 },
			{ name: b('Zumos y batidos de botella', 'Bottled juices & shakes'), price: 2.5 },
		],
	},
	{
		id: 'cervezas',
		group: 'bebidas',
		only: 'torremolinos',
		title: b('Cervezas, vinos y vermú', 'Beer, wine & vermouth'),
		doodle: 'wine',
		items: [
			{ head: b('Cerveza', 'Beer') },
			{ name: b('Copa de cerveza', 'Glass of beer'), price: 2.8 },
			{ name: b('Pinta', 'Pint'), price: 4 },
			{ name: b('Clara de limón o casera', 'Shandy (lemon or lemonade)'), price: 2.9 },
			{ name: b('Cruzcampo Especial'), price: 3 },
			{ name: b('Heineken'), price: 3 },
			{ name: b('Heineken 0,0', 'Heineken 0.0'), price: 3 },
			{ name: b('Alcázar'), price: 3.5 },
			{ name: b('Desperados'), price: 4 },
			{ name: b('Sol'), price: 4 },
			{ head: b('Vinos y vermú', 'Wine & vermouth') },
			{ name: b('Ribera del Duero'), price: 3 },
			{ name: b('Rioja'), price: 3 },
			{ name: b('Blanco verdejo o semidulce', 'Verdejo or semi-sweet white'), price: 3 },
			{ name: b('Rosado', 'Rosé'), price: 3 },
			{ name: b('Sangría · copa / jarra', 'Sangria · glass / jug'), prices: [4.5, 12] },
			{ name: b('Martini rojo o blanco', 'Martini rosso or bianco'), price: 4.2 },
		],
	},
];

export const isHead = (i: Dish | { head: Bi }): i is { head: Bi } => 'head' in i;

/** Precio de un plato en un local concreto. */
export function priceFor(d: Dish, venue: VenueId): number | [number, number] | undefined {
	if (venue === 'soho' && d.soho !== undefined) return d.soho;
	return d.prices ?? d.price;
}

export const euro = (n: number) => `${n.toFixed(2).replace('.', ',')} €`;
export const euroShort = (n: number) => (Number.isInteger(n) ? `${n},00` : n.toFixed(2).replace('.', ','));

/** Secciones visibles en un local (y sin los platos exclusivos del otro). */
export function sectionsFor(venue: VenueId): Section[] {
	return sections
		.filter((s) => !s.only || s.only === venue)
		.map((s) => ({ ...s, items: s.items.filter((i) => isHead(i) || !i.only || i.only === venue) }));
}

/** Busca un plato por sección y nombre en ES. */
export function dish(section: string, name: string): Dish {
	const s = sections.find((x) => x.id === section);
	const d = s?.items.find((i): i is Dish => !isHead(i) && i.name.es === name);
	if (!d) throw new Error(`Plato no encontrado: ${section}/${name}`);
	return d;
}
