/**
 * Cocina de la Cervecería Untertürkheim.
 * Precios de la carta digital real; traducciones de su carta impresa.
 */
import type { Bi } from './beers';

export interface Dish {
	name: Bi;
	desc?: Bi;
	price: number;
	/** Puede adaptarse a vegano */
	vegan?: boolean;
	veggie?: boolean;
	/** Marca de la casa */
	star?: boolean;
}

export interface FoodSection {
	id: string;
	kicker: Bi;
	title: Bi;
	intro?: Bi;
	dishes: Dish[];
	notes?: Bi[];
	/** Sub-bloque opcional (p. ej. tablas dentro de picar) */
	extra?: { title: Bi; dishes: Dish[] };
}

const b = (es: string, en: string): Bi => ({ es, en });

export const picar: FoodSection = {
	id: 'picar',
	kicker: b('Tapas', 'Tapas'),
	title: b('Para *picar*', 'Bar *bites*'),
	intro: b(
		'Lo de siempre con la caña: salchichas alemanas, quesos, ibéricos y un bretzel con mantequilla.',
		'The classics to go with your beer: German sausages, cheeses, Iberian cold cuts and a buttered pretzel.',
	),
	dishes: [
		{ name: b('Aceitunas', 'Olives'), price: 2, veggie: true },
		{ name: b('Aceitunas picantes', 'Spicy olives'), price: 2.5, veggie: true },
		{ name: b('Gilda', 'Gilda'), desc: b('Aceituna, piparra y anchoa', 'Olive, chilli pepper and anchovy skewer'), price: 3 },
		{ name: b('Mojama', 'Mojama'), desc: b('Lomo de atún en salazón', 'Salt-cured tuna loin'), price: 5.8 },
		{ name: b('Boquerones con pimiento del piquillo', 'Anchovies with piquillo peppers'), price: 5 },
		{ name: b('Ensaladilla alemana', 'German potato salad'), price: 3.3, star: true, veggie: true },
		{ name: b('Queso gouda', 'Gouda cheese'), price: 4.2, veggie: true },
		{ name: b('Queso maasdam', 'Maasdam cheese'), price: 4.7, veggie: true },
		{ name: b('Queso azul', 'Blue cheese'), price: 5.2, veggie: true },
		{ name: b('Queso manchego', 'Manchego cheese'), price: 5.5, veggie: true },
		{ name: b('Queso de cabra con mermelada de frutos rojos', 'Goat cheese with berry jam'), price: 6.8, veggie: true },
		{ name: b('Queso con arándanos', 'Blueberry cheese'), price: 8.3, veggie: true },
		{ name: b('Salchichón ibérico', 'Iberian salchichón'), price: 3.9 },
		{ name: b('Paté casero', 'Homemade pâté'), price: 3.9 },
		{ name: b('Jamón ibérico', 'Iberian ham'), price: 8.5 },
		{ name: b('Salchicha alemana “Bockwurst”', 'German sausage “Bockwurst”'), price: 5.2, star: true },
		{ name: b('Salchicha picante “Bratwurst Scharf”', 'Spicy sausage “Bratwurst Scharf”'), price: 5.2 },
		{ name: b('Salchichas Núremberg', 'Nuremberg sausages'), price: 5.2 },
		{ name: b('Salchicha vegana', 'Vegan sausage'), price: 5.2, veggie: true },
		{ name: b('Lomo de cerdo', 'Pork loin'), price: 6.2 },
		{ name: b('Panceta asada', 'Roast pork belly'), price: 6.6 },
		{ name: b('Bretzel con mantequilla', 'Pretzel with butter'), price: 3, star: true, veggie: true },
		{ name: b('Patatas al horno con alioli o brava', 'Baked potatoes with alioli or brava sauce'), price: 5.3, veggie: true },
	],
	extra: {
		title: b('Tablas para compartir', 'Boards to share'),
		dishes: [
			{
				name: b('Variedad de fiambres y quesos', 'Cold cuts & cheese board'),
				desc: b(
					'Gouda, manchego, maasdam, salchichón ibérico, paté casero y jamón ibérico',
					'Gouda, manchego, maasdam, Iberian salchichón, homemade pâté and Iberian ham',
				),
				price: 27,
			},
			{
				name: b('Variedad de fiambres grillados', 'Grilled sausage & meat board'),
				desc: b(
					'Salchicha alemana, salchicha picante, Núremberg, lomo de cerdo y panceta asada',
					'German sausage, spicy sausage, Nuremberg, pork loin and roast pork belly',
				),
				price: 25,
				star: true,
			},
		],
	},
	notes: [b('Servicio de pan extra 1,00 € · Mermelada extra para quesos 0,40 €', 'Extra bread 1.00 € · Extra jam for cheeses 0.40 €')],
};

export const platos: FoodSection = {
	id: 'platos',
	kicker: b('Desde las 12:00', 'From 12:00'),
	title: b('Platos *de la casa*', 'House *plates*'),
	intro: b(
		'Cocina alemana sin complicaciones, hecha para acompañar una buena cerveza.',
		'No-nonsense German cooking, made to go with a good beer.',
	),
	dishes: [
		{ name: b('Currywurst', 'Currywurst'), desc: b('Con patatas horneadas', 'With baked potatoes'), price: 10.5, vegan: true, star: true },
		{ name: b('Salchicha', 'Sausage'), desc: b('Con ensalada verde, tomates cherry, aceitunas negras y chía', 'With green salad, cherry tomatoes, black olives and chia'), price: 11, vegan: true },
		{ name: b('Variedad de salchichas', 'Sausage platter'), desc: b('Alemana, picante y Núremberg con patatas horneadas', 'German, spicy and Nuremberg sausages with baked potatoes'), price: 18, star: true },
		{ name: b('Codillo de cerdo', 'Pork knuckle'), desc: b('Con salsa de cerveza y mostaza, y patatas horneadas', 'With beer & mustard sauce and baked potatoes'), price: 15, star: true },
		{ name: b('Lomo de cerdo', 'Pork loin'), desc: b('Con ensaladilla alemana', 'With German potato salad'), price: 14.5 },
		{ name: b('Hamburguesa', 'Burger'), desc: b('Medallón mixto (200 g) con tomate, queso edam, lechuga y cebolla caramelizada, con patatas horneadas', 'Beef & pork patty (200 g) with tomato, edam, lettuce and caramelised onion, with baked potatoes'), price: 15.5 },
		{ name: b('Hamburguesa vegetariana', 'Veggie burger'), desc: b('Medallón vegano (120 g) con tomate, queso edam, lechuga y cebolla caramelizada, con patatas horneadas', 'Vegan patty (120 g) with tomato, edam, lettuce and caramelised onion, with baked potatoes'), price: 14.5, vegan: true, veggie: true },
	],
	notes: [b('* Puede adaptarse a opción vegana · Servicio de pan 1,00 €', '* Can be made vegan · Bread service 1.00 €')],
};

export const postres: FoodSection = {
	id: 'postres',
	kicker: b('Postres', 'Desserts'),
	title: b('Para *terminar*', 'To *finish*'),
	dishes: [
		{ name: b('Strudel de manzana', 'Apple strudel'), desc: b('Con helado de nata, lluvia de canela y nuez', 'With cream ice cream, cinnamon and walnuts'), price: 6, star: true, veggie: true },
		{ name: b('Brownie', 'Brownie'), desc: b('Con helado de nata y salsa de chocolate', 'With cream ice cream and chocolate sauce'), price: 6, veggie: true },
		{ name: b('Tarta de queso', 'Cheesecake'), desc: b('Con frutos rojos', 'With red berries'), price: 6, veggie: true },
	],
};

export const foodSections = [picar, platos, postres];
