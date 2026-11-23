/**
 * Papulinos — carta digital (versión reducida para la demo).
 *
 * Los platos se han transcrito de las cartas oficiales de cada local
 * (carta_pI.jpg, carta_pIII.jpg, carta_pIV.jpg en papulinos.com).
 * Esas cartas NO publican precios: los de aquí son orientativos (nivel de un
 * asador malagueño en 2026), para la demo.
 * Los postres no aparecen en las cartas pero sí en las reseñas.
 */
import { b, type Bi, type VenueId } from './info';

export interface Dish {
	name: Bi;
	desc?: Bi;
	price: number;
	/** Precio por cada 100 g (carnes al peso) */
	per100?: boolean;
	/** Precio por unidad */
	unit?: boolean;
	forTwo?: boolean;
	star?: boolean;
	spicy?: boolean;
	veggie?: boolean;
	/** Solo en estos locales; si falta, en los tres */
	at?: VenueId[];
}
export interface Head {
	head: Bi;
}
export type Entry = Dish | Head;

export interface Section {
	id: string;
	title: Bi;
	kicker: Bi;
	intro?: Bi;
	items: Entry[];
	notes?: Bi[];
	at?: VenueId[];
}

const I: VenueId = 'malasana';
const III: VenueId = 'santa-paula';
const IV: VenueId = 'don-cristian';

const d = (es: string, en: string, price: number, extra: Partial<Dish> & { desc?: Bi } = {}): Dish => ({ name: b(es, en), price, ...extra });
const head = (es: string, en: string): Head => ({ head: b(es, en) });

export const sections: Section[] = [
	{
		id: 'ensaladas',
		kicker: b('Para empezar', 'To start'),
		title: b('Ensaladas', 'Salads'),
		items: [
			d('Cogollos a la cordobesa', 'Cordoba-style lettuce hearts', 9, { star: true, desc: b('En cuartos, aliñados con ajo, aceite y pimientos asados', 'Quartered, dressed with garlic, olive oil and roasted peppers') }),
			d('Ensalada de la casa', 'House salad', 10, { desc: b('Lechuga, tomate, maíz, remolacha, zanahoria y atún', 'Lettuce, tomato, sweetcorn, beetroot, carrot and tuna') }),
			d('Ensalada especial', 'Special salad', 11.5, { at: [I], desc: b('Lechuga, tomate, manzana, palmito, espárragos, nueces, pasas y salsa rosa', 'Lettuce, tomato, apple, palm heart, asparagus, walnuts, raisins and Marie Rose sauce') }),
			d('Ensalada mixta', 'Mixed salad', 10.5, { at: [III], desc: b('Lechuga, cebolla, tomate, huevo, atún, pimiento asado, pepino y zanahoria', 'Lettuce, onion, tomato, egg, tuna, roasted pepper, cucumber and carrot') }),
			d('Ensalada de queso de cabra', 'Goat’s cheese salad', 13, { at: [III, IV], veggie: true, desc: b('Rulo de cabra, lechugas, cherry, picatostes, nueces, pasas y cebolla caramelizada', 'Goat’s cheese log, leaves, cherry tomatoes, croutons, walnuts, raisins and caramelised onion') }),
			d('Ensalada de naranja con bacalao', 'Orange & salt cod salad', 12.5, { at: [IV], desc: b('Naranja, bacalao y cebolleta', 'Orange, salt cod and spring onion') }),
			d('Tomate aliñado', 'Dressed tomato', 7.5, { veggie: true, desc: b('Con ajo y perejil', 'With garlic and parsley') }),
			d('Tomate con atún', 'Tomato with tuna', 9, { at: [I, III] }),
		],
	},
	{
		id: 'entrantes',
		kicker: b('Para compartir', 'To share'),
		title: b('Entrantes', 'Starters'),
		items: [
			d('Porra de la casa', 'House porra', 8, { desc: b('La sopa fría antequerana, con su guarnición', 'Thick cold tomato soup from Antequera, with toppings') }),
			d('Gazpacho con guarnición', 'Gazpacho with toppings', 6.5, { at: [I, IV] }),
			d('Migas caseras', 'Homemade migas', 10, { star: true }),
			d('Anchoa del Cantábrico', 'Cantabrian anchovy', 4, { unit: true, desc: b('Sobre tosta con tomate triturado y aceite de oliva', 'On toast with crushed tomato and olive oil') }),
			d('Pimiento del piquillo relleno de rabo de toro', 'Piquillo pepper stuffed with oxtail', 4.5, { unit: true, at: [I, IV] }),
			d('Tartar de salchichón de Málaga', 'Málaga salchichón tartare', 11, { at: [I, IV] }),
			d('Surtido de croquetas caseras', 'Homemade croquette platter', 12.5, { at: [III, IV], desc: b('Pollo y jamón, choco y carabinero (8 uds)', 'Chicken & ham, cuttlefish and red prawn (8 pcs)') }),
			d('Tortita de bacalao', 'Salt cod fritter', 3, { unit: true, at: [III] }),
			d('Pulpo a la gallega', 'Galician-style octopus', 22, { at: [I, IV] }),
			d('Langostinos al pil pil', 'Prawns pil pil', 17, { at: [I] }),
			d('Berenjenas con miel de caña', 'Aubergine with cane honey', 11, { at: [IV], veggie: true }),
			d('Revuelto de setas con jamón y langostinos', 'Scrambled eggs with mushrooms, ham & prawns', 15, { at: [IV] }),
			d('Steak tartar', 'Steak tartare', 23.5, { at: [IV], desc: b('De solomillo de añojo', 'Made with yearling beef sirloin') }),
			head('Ibéricos y quesos', 'Ibérico & cheese'),
			d('Queso de oveja curado', 'Cured sheep’s cheese', 15, { desc: b('Curado en manteca de cerdo ibérico', 'Cured in Ibérico pork lard') }),
			d('Lomito ibérico', 'Ibérico pork loin', 18.5),
			d('Surtido ibérico', 'Ibérico platter', 22.5, { at: [I], desc: b('Chorizo, salchichón, lomito y queso', 'Chorizo, salchichón, loin and cheese') }),
		],
	},
	{
		id: 'brasa-entrantes',
		kicker: b('Directos de la parrilla', 'Straight off the grill'),
		title: b('Entrantes a la brasa', 'Grilled starters'),
		items: [
			d('Chorizo criollo', 'Criollo sausage', 6, { star: true }),
			d('Chorizo jalapeño', 'Jalapeño sausage', 6.5, { spicy: true }),
			d('Morcilla de Burgos', 'Burgos black pudding', 6),
			d('Pata de pulpo a la brasa', 'Grilled octopus leg', 25.5, { at: [I, IV] }),
		],
	},
	{
		id: 'carnes',
		kicker: b('Lo nuestro desde 1984', 'Our thing since 1984'),
		title: b('Carnes a la brasa', 'Grilled meats'),
		intro: b('Carne seleccionada, brasa de carbón y el punto que tú nos digas.', 'Hand-picked meat, charcoal embers and cooked exactly how you like it.'),
		items: [
			head('Cerdo', 'Pork'),
			d('Presa ibérica de Jabugo', 'Jabugo Ibérico presa', 23, { star: true }),
			d('Costilla de cerdo', 'Pork ribs', 15),
			d('Costillitas al infierno', '“Hell’s” baby ribs', 15.5, { spicy: true, at: [I, III] }),
			d('Solomillo de cerdo', 'Pork tenderloin', 16.5),
			d('Brocheta de solomillo de cerdo', 'Pork tenderloin skewer', 15.5),
			d('Solomillo de cerdo en salsa', 'Pork tenderloin in sauce', 19, { at: [IV], desc: b('A la pimienta, al roquefort, a la malagueña o al strogonoff', 'Pepper, Roquefort, Málaga-style or stroganoff') }),
			d('Codillo en su jugo al horno', 'Oven-roasted pork knuckle', 18),
			d('¼ cochinillo segoviano al horno', '¼ Segovian roast suckling pig', 56, { forTwo: true, star: true }),
			head('Vacuno', 'Beef'),
			d('Chuletón de añojo', 'Yearling beef T-bone', 7.5, { per100: true, star: true }),
			d('Cube roll argentino', 'Argentinian cube roll', 6.5, { per100: true, desc: b('Lomo alto', 'Prime rib') }),
			d('Entrecot de añojo', 'Yearling beef entrecôte', 25.5, { desc: b('Unos 330 g', 'Approx. 330 g') }),
			d('Solomillo de añojo', 'Yearling beef sirloin', 29.5),
			d('Brocheta de solomillo de añojo', 'Beef sirloin skewer', 26.5),
			d('Rabo de toro al vino tinto', 'Oxtail in red wine', 22),
			d('Carrillada de Angus al Pedro Ximénez', 'Angus cheek in Pedro Ximénez', 19.5, { at: [I, IV] }),
			head('Cordero lechal', 'Milk-fed lamb'),
			d('Chuletitas de lechal', 'Milk-fed lamb chops', 25),
			d('Pierna al horno', 'Roast leg', 29, { at: [I, III] }),
			d('Paletilla al horno', 'Roast shoulder', 31.5, { at: [I, III] }),
			head('Pollo y pavo', 'Chicken & turkey'),
			d('Pinchitos de pollo', 'Chicken pinchitos', 11.5, { star: true, at: [I, III] }),
			d('Brocheta de pollo', 'Chicken skewer', 12.5),
			d('Pechuga de pollo', 'Chicken breast', 11.5),
			d('Alitas (5 uds)', 'Wings (5 pcs)', 10),
			d('Filete de pavo aliñado', 'Marinated turkey fillet', 11.5, { at: [I] }),
			head('Chivo', 'Kid goat'),
			d('Patita de chivo en su jugo al horno', 'Roast kid goat leg in its juices', 24.5, { at: [I, III] }),
		],
	},
	{
		id: 'pescados',
		kicker: b('Del mar a la parrilla', 'From the sea to the grill'),
		title: b('Pescados', 'Fish'),
		items: [
			d('Pez espada a la brasa', 'Grilled swordfish', 19, { at: [I, III] }),
			d('Lomo de atún a la brasa', 'Grilled tuna loin', 22.5, { at: [III] }),
			d('Bacalao a la riojana', 'Rioja-style salt cod', 22, { at: [IV] }),
			d('Brocheta de salmón con langostinos', 'Salmon & prawn skewer', 21, { at: [IV], desc: b('Con piña y manzana', 'With pineapple and apple') }),
		],
	},
	{
		id: 'hamburguesas',
		kicker: b('A la brasa, claro', 'Chargrilled, of course'),
		title: b('Hamburguesas', 'Burgers'),
		items: [
			d('Vaca gallega', 'Galician beef', 17, { star: true, at: [I, III], desc: b('Queso cheddar, tomate, lechuga y cebolla caramelizada', 'Cheddar, tomato, lettuce and caramelised onion') }),
			d('Cochinillo', 'Suckling pig', 18, { at: [III], desc: b('Alioli, rúcula, tomate y mozzarella fresca', 'Aioli, rocket, tomato and fresh mozzarella') }),
			d('Queso de cabra', 'Goat’s cheese', 15.5, { at: [III], desc: b('Cerdo, queso de cabra, cebolla caramelizada y nueces', 'Pork, goat’s cheese, caramelised onion and walnuts') }),
			d('Mexicana', 'Mexican', 15, { at: [III], spicy: true, desc: b('Cerdo, cheddar, cebolla frita y alioli', 'Pork, cheddar, crispy onion and aioli') }),
			d('Pollo', 'Chicken', 14, { at: [I, III], desc: b('Cheddar, lechuga, tomate y cebolla caramelizada', 'Cheddar, lettuce, tomato and caramelised onion') }),
			d('Soja', 'Soy', 14, { at: [I], veggie: true, desc: b('Hamburguesa vegetal con cheddar y cebolla caramelizada', 'Plant-based patty with cheddar and caramelised onion') }),
			d('Hamburguesa gourmet a la parrilla', 'Gourmet grilled burger', 18.5, { at: [IV] }),
		],
		notes: [b('En Santa Paula, todas con patatas fritas y salsa.', 'At Santa Paula they all come with fries and a sauce.')],
	},
	{
		id: 'pizzas',
		kicker: b('Solo en Santa Paula', 'Santa Paula only'),
		title: b('Pizzas al horno', 'Oven-baked pizzas'),
		at: [III],
		items: [
			d('Prosciutto', 'Prosciutto', 14, { desc: b('Tomate, orégano, mozzarella y jamón york', 'Tomato, oregano, mozzarella and cooked ham') }),
			d('Diavola', 'Diavola', 14.5, { spicy: true, desc: b('Tomate, orégano, mozzarella y salami picante', 'Tomato, oregano, mozzarella and spicy salami') }),
			d('Merlín', 'Merlín', 15, { star: true, desc: b('Mozzarella, jamón york, huevo cocido y ajo', 'Mozzarella, cooked ham, boiled egg and garlic') }),
			d('4 quesos', '4 cheeses', 15, { veggie: true, desc: b('Mozzarella, azul, parmesano y provolone', 'Mozzarella, blue cheese, parmesan and provolone') }),
			d('Tonno', 'Tonno', 14.5, { desc: b('Mozzarella, atún y cebolla', 'Mozzarella, tuna and onion') }),
			d('Lasaña de carne', 'Beef lasagne', 14.5),
		],
	},
	{
		id: 'infantil',
		kicker: b('Para los peques', 'For the little ones'),
		title: b('Menú infantil', 'Kids’ menu'),
		at: [IV],
		items: [
			d('Nuggets de pollo con patatas fritas', 'Chicken nuggets with fries', 10),
			d('Croquetas de pollo y jamón con patatas fritas', 'Chicken & ham croquettes with fries', 10),
			d('Pinchito de pollo con patatas fritas', 'Chicken pinchito with fries', 10.5),
		],
	},
	{
		id: 'guarnicion',
		kicker: b('La otra estrella', 'The other star'),
		title: b('Guarniciones y salsas', 'Sides & sauces'),
		items: [
			d('Patata asada con alioli casero', 'Baked potato with homemade aioli', 5, { star: true }),
			d('Patatas a lo pobre', 'Poor man’s potatoes', 5, { at: [I] }),
			d('Patatas fritas', 'Fries', 4.5, { at: [III, IV] }),
			d('Pan', 'Bread', 1.5),
			head('Salsas', 'Sauces'),
			d('A la pimienta', 'Pepper', 3.5),
			d('Queso azul', 'Blue cheese', 3.5),
			d('Malagueña', 'Málaga-style', 3.5, { at: [IV] }),
		],
	},
	{
		id: 'postres',
		kicker: b('De la casa', 'Homemade'),
		title: b('Postres', 'Desserts'),
		items: [
			d('Tarta de queso', 'Cheesecake', 7.5, { star: true, desc: b('La receta de siempre', 'Our recipe since forever') }),
			d('Arroz con leche', 'Rice pudding', 6),
			d('Natillas', 'Custard', 6),
			d('Flan de café', 'Coffee flan', 6),
			d('Crema catalana', 'Crema catalana', 6.5),
		],
		notes: [b('Pregunta también por los postres del día.', 'Ask about today’s desserts too.')],
	},
];

export const isHead = (e: Entry): e is Head => 'head' in e;

const servedAt = (v: VenueId) => (x: { at?: VenueId[] }) => !x.at || x.at.includes(v);

/** Secciones de un local, sin platos de otros locales ni cabeceras vacías. */
export function sectionsFor(v: VenueId): Section[] {
	return sections
		.filter(servedAt(v))
		.map((s) => {
			const kept = s.items.filter((e) => isHead(e) || servedAt(v)(e));
			const items = kept.filter((e, i) => !isHead(e) || (kept[i + 1] && !isHead(kept[i + 1])));
			const notes = s.id === 'hamburguesas' && v !== 'santa-paula' ? undefined : s.notes;
			return { ...s, items, notes };
		})
		.filter((s) => s.items.some((e) => !isHead(e)));
}

/** Busca un plato por nombre (ES) dentro de una sección. */
export function dish(sectionId: string, name: string): Dish {
	const s = sections.find((x) => x.id === sectionId);
	const found = s?.items.find((e): e is Dish => !isHead(e) && e.name.es === name);
	if (!found) throw new Error(`Plato no encontrado: ${sectionId} / ${name}`);
	return found;
}

export const euro = (n: number) => `${n.toFixed(2).replace('.', ',').replace(',00', '')} €`;
export const euroFull = (n: number) => `${n.toFixed(2).replace('.', ',')} €`;
