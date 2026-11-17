/**
 * Carta de Shanao Café — extraída de la carta digital actual (cartasTS) y
 * reorganizada para la demo. ES + EN.
 */

export type Tag = 'vegan' | 'gf' | 'new' | 'fav';

export interface Item {
	name: string;
	nameEn?: string;
	desc?: string;
	descEn?: string;
	/** número = precio final · string = suplemento o texto ("+2,75", "Desde 7") */
	price?: number | string;
	tags?: Tag[];
}

export interface Group {
	id: string;
	title: string;
	titleEn: string;
	note?: string;
	noteEn?: string;
	/** Precio común a todo el grupo */
	price?: string;
	/** Columnas de precio (p. ej. tipos de café) */
	columns?: string[];
	rows?: { name: string; nameEn: string; prices: number[] }[];
	items: Item[];
	/** Grupo de "monta el tuyo" (se pinta como chips) */
	builder?: boolean;
}

export interface Section {
	id: string;
	title: string;
	titleEn: string;
	/** La "historia" detrás de los nombres */
	story?: string;
	storyEn?: string;
	color: string;
	ink: string;
	image?: string;
	groups: Group[];
}

const i = (
	name: string,
	desc: string | undefined,
	price: number | string | undefined,
	en?: { n?: string; d?: string },
	tags?: Tag[],
): Item => ({ name, desc, price, nameEn: en?.n, descEn: en?.d, tags });

export const menu: Section[] = [
	{
		id: 'bocadillos',
		title: 'Bocadillos',
		titleEn: 'Sandwiches',
		story: 'Cada combinación lleva el nombre de un árbol.',
		storyEn: 'Every combo is named after a tree.',
		color: '#C8E6A0',
		ink: '#0F1F17',
		image: 'seccion-sandwich',
		groups: [
			{
				id: 'panes',
				title: 'Nuestros panes',
				titleEn: 'Our breads',
				note: 'Elige el pan y luego la combinación o los ingredientes que quieras.',
				noteEn: 'Pick your bread, then a combo or the fillings you like.',
				items: [
					i('Pitufo blanco', 'Receta gallega de 1959, horno de piedra', 1.2, { n: 'White pitufo roll', d: 'Galician recipe from 1959, stone oven' }, ['fav']),
					i('Pitufo integral', undefined, 1.2, { n: 'Wholemeal pitufo roll' }),
					i('Pitufo de avena', undefined, 1.2, { n: 'Oat pitufo roll' }),
					i('Chapata multicereal', undefined, 1.35, { n: 'Multigrain ciabatta' }),
					i('Viena blanca', undefined, 1.9, { n: 'White Vienna bread' }),
					i('Viena multisemillas', 'Chía, lino, sésamo, amapola y girasol', 2.1, { n: 'Multiseed Vienna bread', d: 'Chia, flax, sesame, poppy and sunflower' }),
					i('Viena sin gluten', 'Puede contener trazas (contaminación cruzada)', 2.2, { n: 'Gluten-free Vienna bread', d: 'May contain traces (cross contamination)' }, ['gf']),
					i('Sándwich blanco', undefined, 1.9, { n: 'White sandwich bread' }),
					i('Sándwich multicereal XL', undefined, 2.6, { n: 'XL multigrain sandwich bread' }),
					i('Bagel semillado', undefined, 1.9, { n: 'Seeded bagel' }),
					i('Tostada multicereal', undefined, 1.9, { n: 'Multigrain toast' }),
					i('Croissant semillado', 'Hojaldre 100% vegetal', 2, { n: 'Seeded croissant', d: '100% plant-based puff pastry' }, ['vegan']),
					i('Mini crepe de sarraceno', 'Masa vegana', 2.5, { n: 'Mini buckwheat crepe', d: 'Vegan batter' }, ['vegan', 'gf']),
				],
			},
			{
				id: 'arboles',
				title: 'Combinaciones de la casa',
				titleEn: 'House combos',
				note: 'Precio del pan + suplemento de la combinación.',
				noteEn: 'Bread price + combo supplement.',
				items: [
					i('Olivo', 'Jamón serrano, queso tierno, tomate y AOVE de tomate', '+1,75', { d: 'Serrano ham, mild cheese, tomato and tomato EVOO' }),
					i('Sauce', 'Picadillo de pavo (pavo, champiñones, queso curado y huevo revuelto) con albahaca y mahonesa', '+3,75', { d: 'Turkey hash (turkey, mushrooms, cured cheese and scrambled egg) with basil and mayo' }),
					i('Nogal', 'Pavo y queso curado picado con tomate, canónigos, rúcula, hierbabuena y mayonesa', '+2,95', { d: 'Turkey and cured cheese with tomato, lamb’s lettuce, rocket, mint and mayo' }),
					i('Roble', 'Atún, huevo duro, tomate, espinacas y AOVE de tomate', '+2,05', { d: 'Tuna, boiled egg, tomato, spinach and tomato EVOO' }),
					i('Tola', 'Atún, tomate, pepino, alioli vegano y canónigos', '+2,00', { d: 'Tuna, tomato, cucumber, vegan aioli and lamb’s lettuce' }),
					i('Pinsapo', 'Bacon, queso tierno, tomate, mayonesa y rúcula', '+2,35', { d: 'Bacon, mild cheese, tomato, mayo and rocket' }),
					i('Arce', 'Bacon, queso de cabra, cebolla caramelizada, mayonesa y espinacas', '+2,35', { d: 'Bacon, goat cheese, caramelised onion, mayo and spinach' }),
					i('Maquilishuat', 'Bacon, queso gouda, aguacate triturado, huevo plancha, tomate, rúcula, mayonesa y tabasco', '+4,00', { d: 'Bacon, gouda, smashed avocado, fried egg, tomato, rocket, mayo and tabasco' }, ['fav']),
					i('Secuoya', 'Bacon, aguacate triturado, queso curado, hierbabuena y canónigos', '+2,75', { d: 'Bacon, smashed avocado, cured cheese, mint and lamb’s lettuce' }),
					i('Baobab', 'Salmón ahumado, aguacate, queso de cabra y AOVE de tomate', '+3,50', { d: 'Smoked salmon, avocado, goat cheese and tomato EVOO' }),
					i('Ébano', 'Salmón ahumado, aguacate, queso tierno, tomate, albahaca y AOVE', '+4,10', { n: 'Ebano', d: 'Smoked salmon, avocado, mild cheese, tomato, basil and EVOO' }),
					i('Samán', 'Salmón ahumado, queso Philadelphia, tomate y canónigos', '+2,75', { n: 'Saman', d: 'Smoked salmon, cream cheese, tomato and lamb’s lettuce' }),
					i('Abedul', 'Seitán ahumado, tomate, zanahoria, rúcula, canónigos, AOVE de tomate y sal negra', '+3,00', { d: 'Smoked seitan, tomato, carrot, rocket, lamb’s lettuce, tomato EVOO and black salt' }, ['vegan']),
					i('Abeto', 'Seitán ahumado, tomate, espinacas, AOVE de tomate y sal negra', '+2,40', { d: 'Smoked seitan, tomato, spinach, tomato EVOO and black salt' }, ['vegan']),
					i('Chopo', 'Tofu, aguacate triturado, sal negra y AOVE de tomate', '+2,80', { d: 'Tofu, smashed avocado, black salt and tomato EVOO' }, ['vegan']),
					i('Sabina', 'Tofu, hummus de pimiento, sésamo tostado y AOVE de tomate', '+3,00', { d: 'Tofu, red pepper hummus, toasted sesame and tomato EVOO' }, ['vegan']),
					i('Rockefeller', 'Heura, queso vegano, rúcula, tomate y aguacate triturado', '+4,70', { d: 'Heura, vegan cheese, rocket, tomato and smashed avocado' }, ['vegan']),
					i('Jacaranda', 'Heura, queso vegano, espinacas, hummus de pimiento y AOVE de tomate', '+4,75', { d: 'Heura, vegan cheese, spinach, red pepper hummus and tomato EVOO' }, ['vegan']),
					i('Baniano', 'Queso fresco, pepino, tomate, albahaca, sal y pimienta', '+2,00', { d: 'Fresh cheese, cucumber, tomato, basil, salt and pepper' }),
					i('Ciprés', 'Queso fresco, aguacate triturado, albahaca, sal negra y AOVE de tomate', '+2,10', { n: 'Cypress', d: 'Fresh cheese, smashed avocado, basil, black salt and tomato EVOO' }),
					i('Vegetal chicken', 'Heura, huevo duro, cebolla frita, tomate, canónigos y mahonesa', '+3,95', { d: 'Heura, boiled egg, fried onion, tomato, lamb’s lettuce and mayo' }),
					i('Mixto natural', 'Pavo natural, queso gouda y mantequilla', '+1,60', { n: 'Ham & cheese', d: 'Natural turkey, gouda and butter' }),
					i('Vegetal natural', 'Atún o pavo natural, canónigos, huevo duro, tomate y mayonesa', '+2,20', { n: 'Garden', d: 'Tuna or turkey, lamb’s lettuce, boiled egg, tomato and mayo' }),
					i('Catalana', 'Jamón serrano o pavo natural, tomate y AOVE', '+1,10', { d: 'Serrano ham or turkey, tomato and EVOO' }),
					i('Catalana con queso', 'Jamón serrano, queso curado, tomate y AOVE', '+1,75', { n: 'Catalana with cheese', d: 'Serrano ham, cured cheese, tomato and EVOO' }),
				],
			},
			{
				id: 'monta',
				title: '…o móntalo a tu manera',
				titleEn: '…or build your own',
				note: 'Precio del pan + los ingredientes que añadas.',
				noteEn: 'Bread price + each filling you add.',
				builder: true,
				items: [
					i('Tomate', undefined, 0.35, { n: 'Tomato' }, ['vegan']),
					i('Mermelada', 'Fresa, melocotón, higo o arándanos', 0.35, { n: 'Jam', d: 'Strawberry, peach, fig or blueberry' }, ['vegan']),
					i('Mantequilla', 'Animal o margarina vegana', 0.35, { n: 'Butter', d: 'Dairy or vegan margarine' }),
					i('Mayonesa', undefined, 0.35, { n: 'Mayo' }),
					i('Alioli vegano', undefined, 0.35, { n: 'Vegan aioli' }, ['vegan']),
					i('Canónigos', undefined, 0.35, { n: 'Lamb’s lettuce' }, ['vegan']),
					i('Rúcula', undefined, 0.35, { n: 'Rocket' }, ['vegan']),
					i('Espinacas', undefined, 0.35, { n: 'Spinach' }, ['vegan']),
					i('Albahaca', undefined, 0.35, { n: 'Basil' }, ['vegan']),
					i('Queso Philadelphia', undefined, 0.6, { n: 'Cream cheese' }),
					i('Paté ibérico', undefined, 0.6, { n: 'Iberian pâté' }),
					i('Crema de cacahuete', undefined, 0.6, { n: 'Peanut butter' }, ['vegan']),
					i('Nutella', undefined, 0.6),
					i('Kinder', undefined, 0.6),
					i('Chocolate blanco', undefined, 0.6, { n: 'White chocolate' }),
					i('Pistacho', undefined, 0.6, { n: 'Pistachio cream' }, ['vegan']),
					i('Atún', undefined, 0.65, { n: 'Tuna' }),
					i('Bacon ahumado', undefined, 0.65, { n: 'Smoked bacon' }),
					i('Huevo duro', undefined, 0.65, { n: 'Boiled egg' }),
					i('Queso fresco', undefined, 0.65, { n: 'Fresh cheese' }),
					i('Queso de cabra', undefined, 0.65, { n: 'Goat cheese' }),
					i('Queso gouda', undefined, 0.65, { n: 'Gouda' }),
					i('Queso tierno', undefined, 0.65, { n: 'Mild cheese' }),
					i('Queso curado', undefined, 0.65, { n: 'Cured cheese' }),
					i('Mozzarella vegana', undefined, 0.65, { n: 'Vegan mozzarella' }, ['vegan']),
					i('Jamón serrano Gran Reserva', undefined, 0.75, { n: 'Gran Reserva serrano ham' }),
					i('Pavo natural', '98% pavo', 0.75, { n: 'Natural turkey', d: '98% turkey' }),
					i('Hummus de pimiento', undefined, 0.75, { n: 'Red pepper hummus' }, ['vegan']),
					i('Huevo plancha', undefined, 1, { n: 'Fried egg' }),
					i('Huevo tortilla', undefined, 1, { n: 'Omelette' }),
					i('Aguacate', 'En lonchas o triturado', 1, { n: 'Avocado', d: 'Sliced or smashed' }, ['vegan']),
					i('Picadillo de pavo', 'Pavo y queso curado', 1.5, { n: 'Turkey hash', d: 'Turkey and cured cheese' }),
					i('Picadillo de bacon', 'Bacon y queso curado', 1.5, { n: 'Bacon hash', d: 'Bacon and cured cheese' }),
					i('Tofu', undefined, 1.65, undefined, ['vegan']),
					i('Seitán', undefined, 1.65, { n: 'Seitan' }, ['vegan']),
					i('Heura', undefined, 1.95, undefined, ['vegan']),
					i('Tortilla de picadillo', 'De pavo o de bacon, con queso curado', 2, { n: 'Hash omelette', d: 'Turkey or bacon, with cured cheese' }),
					i('Salmón ahumado', undefined, 2.1, { n: 'Smoked salmon' }),
				],
			},
		],
	},
	{
		id: 'tostas',
		title: 'Tostas y sándwiches',
		titleEn: 'Toasts & sandwiches',
		story: 'Las tostas son pecados capitales. Los sándwiches, piedras preciosas.',
		storyEn: 'Our toasts are deadly sins. Our sandwiches, gemstones.',
		color: '#FFB23F',
		ink: '#0F1F17',
		image: 'seccion-tostas',
		groups: [
			{
				id: 'pecados',
				title: 'Tostas',
				titleEn: 'Toasts',
				items: [
					i('Gula', 'Bacon, serrano, huevo plancha, mayonesa y queso gratinado', 7.5, { n: 'Gluttony', d: 'Bacon, serrano ham, fried egg, mayo and grilled cheese' }),
					i('Lujuria', 'Huevos revueltos con champiñones, aguacate triturado, tomate y sésamo tostado', 7.5, { n: 'Lust', d: 'Scrambled eggs with mushrooms, smashed avocado, tomato and toasted sesame' }, ['fav']),
					i('Ira', 'Tortilla de bacon con queso de cabra, espinacas y mayonesa', 7.5, { n: 'Wrath', d: 'Bacon omelette with goat cheese, spinach and mayo' }),
					i('Envidia', 'Atún, pimiento del piquillo, queso Philadelphia, cebolla frita y rúcula', 7.5, { n: 'Envy', d: 'Tuna, piquillo pepper, cream cheese, fried onion and rocket' }),
					i('Pereza', 'Salmón ahumado, aguacate, huevo plancha, alioli vegano y rúcula', 8.5, { n: 'Sloth', d: 'Smoked salmon, avocado, fried egg, vegan aioli and rocket' }),
				],
			},
			{
				id: 'gemas',
				title: 'Sándwiches',
				titleEn: 'Sandwiches',
				items: [
					i('Cuarzo', 'Salmón, aguacate, queso Philadelphia, albahaca y sésamo', 7.5, { n: 'Quartz', d: 'Salmon, avocado, cream cheese, basil and sesame' }),
					i('Amatista', 'Atún, tomate, pepino, salsa de yogur, cebolla frita y orégano', 6, { n: 'Amethyst', d: 'Tuna, tomato, cucumber, yogurt sauce, fried onion and oregano' }),
					i('Coral', 'Pavo, aguacate triturado, queso fresco, rúcula, pimentón, limón y pimienta', 6, { d: 'Turkey, smashed avocado, fresh cheese, rocket, paprika, lemon and pepper' }),
					i('Rubí', 'Bacon, queso gouda, huevo, mayonesa, espinacas y cebolla frita', 6.5, { n: 'Ruby', d: 'Bacon, gouda, egg, mayo, spinach and fried onion' }),
					i('Zafiro', 'Heura, aguacate, hummus, espinacas, sésamo y limón', 7.5, { n: 'Sapphire', d: 'Heura, avocado, hummus, spinach, sesame and lemon' }, ['vegan']),
				],
			},
		],
	},
	{
		id: 'bowls',
		title: 'Bowls',
		titleEn: 'Bowls',
		story: 'Nuestros smoothie bowls significan «gracias» en otros idiomas.',
		storyEn: 'Our smoothie bowls mean "thank you" in other languages.',
		color: '#FF6F91',
		ink: '#2A0A14',
		image: 'seccion-bowls',
		groups: [
			{
				id: 'smoothie',
				title: 'Smoothie bowls',
				titleEn: 'Smoothie bowls',
				items: [
					i('Arigató', 'Base de yogur natural con espirulina, chía, plátano y mango. Toppings: coco, granola, plátano y arándanos', 9.5, { n: 'Arigato', d: 'Natural yogurt base with spirulina, chia, banana and mango. Toppings: coconut, granola, banana and blueberries' }, ['new', 'fav']),
					i('Shukran', 'Base de yogur natural con matcha, dátiles, plátano y mango. Toppings: chía, granola, plátano y fresas', 9.5, { d: 'Natural yogurt base with matcha, dates, banana and mango. Toppings: chia, granola, banana and strawberries' }, ['new']),
					i('Merci', 'Base de yogur natural con açaí, sésamo, plátano y fresa. Toppings: bayas de goji, granola, plátano y kiwi', 9.5, { d: 'Natural yogurt base with açaí, sesame, banana and strawberry. Toppings: goji berries, granola, banana and kiwi' }, ['new']),
				],
			},
			{
				id: 'bowls-casa',
				title: 'Bowls de la casa',
				titleEn: 'House bowls',
				note: 'La gratitud es una forma de alimentar tu mente.',
				noteEn: 'Gratitude is a way to nourish your mind.',
				items: [
					i('Porridge', 'Leche de almendra, avena, granola con chocolate, plátano, arándano, crema de cacahuete y canela', 8.5, { d: 'Almond milk, oats, chocolate granola, banana, blueberry, peanut butter and cinnamon' }, ['vegan']),
					i('Banani', 'Yogur griego, mermelada de fresa, plátano, granola con chocolate, coco, arándanos y fresas', 7.5, { d: 'Greek yogurt, strawberry jam, banana, chocolate granola, coconut, blueberries and strawberries' }),
					i('Kop Kun Krap', 'Yogur griego, granola, fresa, plátano y cacao rallado', 8, { d: 'Greek yogurt, granola, strawberry, banana and grated cacao' }),
					i('Bowl de fruta', 'Elige 3 frutas y añade yogur, leche condensada o zumo (+1 €)', 5, { n: 'Fruit bowl', d: 'Pick 3 fruits and add yogurt, condensed milk or juice (+€1)' }, ['vegan']),
				],
			},
			{
				id: 'crea-bowl',
				title: 'Crea tu bowl',
				titleEn: 'Create your bowl',
				price: '8,50',
				note: 'Base (leche, bebida vegetal, yogur griego o natural) + granola o avena + hasta 5 ingredientes: frutas, frutos secos, semillas y endulzantes.',
				noteEn: 'Base (milk, plant drink, Greek or natural yogurt) + granola or oats + up to 5 toppings: fruit, nuts, seeds and sweeteners.',
				items: [],
			},
		],
	},
	{
		id: 'crepes-salados',
		title: 'Crepes salados',
		titleEn: 'Savoury crepes',
		story: 'Cada crepe salado es una flor.',
		storyEn: 'Each savoury crepe is a flower.',
		color: '#5B4BDB',
		ink: '#FFFFFF',
		image: 'seccion-crepes-salados',
		groups: [
			{
				id: 'flores',
				title: 'Crepes salados',
				titleEn: 'Savoury crepes',
				note: 'Masa vegana con harina de sarraceno y bebida vegetal: +1 €.',
				noteEn: 'Vegan buckwheat batter with plant drink: +€1.',
				items: [
					i('Lirio', 'Pavo natural, huevo duro, tomate, canónigos, cebolla frita y mayonesa', 9.5, { n: 'Lily', d: 'Turkey, boiled egg, tomato, lamb’s lettuce, fried onion and mayo' }),
					i('Geranio', 'Bacon, champiñones, huevo duro, queso curado y cebolla frita', 9.5, { n: 'Geranium', d: 'Bacon, mushrooms, boiled egg, cured cheese and fried onion' }),
					i('Gardenia', 'Pavo natural, queso gouda y champiñones', 9.5, { d: 'Turkey, gouda and mushrooms' }),
					i('Hortensia', 'Salmón ahumado, aguacate, queso Philadelphia y canónigos', 10.5, { n: 'Hydrangea', d: 'Smoked salmon, avocado, cream cheese and lamb’s lettuce' }),
				],
			},
		],
	},
	{
		id: 'ensaladas',
		title: 'Ensaladas',
		titleEn: 'Salads',
		story: 'Cuatro ensaladas, cuatro elementos.',
		storyEn: 'Four salads, four elements.',
		color: '#1F7A4D',
		ink: '#FFFFFF',
		image: 'seccion-ensaladas',
		groups: [
			{
				id: 'elementos',
				title: 'Ensaladas',
				titleEn: 'Salads',
				items: [
					i('Tierra', 'Rúcula, canónigos, piña, tomate, zanahoria, tofu y sésamo con balsámico de Módena', 11, { n: 'Earth', d: 'Rocket, lamb’s lettuce, pineapple, tomato, carrot, tofu and sesame with Modena balsamic' }, ['vegan']),
					i('Agua', 'Rúcula, canónigos, Heura, champiñones, tomate, zanahoria, cebolla frita y sésamo con balsámico de Módena', 12, { n: 'Water', d: 'Rocket, lamb’s lettuce, Heura, mushrooms, tomato, carrot, fried onion and sesame with Modena balsamic' }, ['vegan']),
					i('Aire', 'Espinacas, manzana, zanahoria, pavo, queso de cabra, nueces y goji con balsámico de frutos del bosque', 10.5, { n: 'Air', d: 'Spinach, apple, carrot, turkey, goat cheese, walnuts and goji with berry balsamic' }),
					i('Fuego', 'Canónigos, fresa, manzana, dátiles, huevo, goji y nueces con balsámico de frutos del bosque', 10.5, { n: 'Fire', d: 'Lamb’s lettuce, strawberry, apple, dates, egg, goji and walnuts with berry balsamic' }),
				],
			},
		],
	},
	{
		id: 'platos',
		title: 'Plato inglés y tapas',
		titleEn: 'English plate & tapas',
		color: '#F2E8D5',
		ink: '#0F1F17',
		image: 'seccion-plato-ingles',
		groups: [
			{
				id: 'plato-ingles',
				title: 'Plato inglés',
				titleEn: 'English plate',
				note: 'Monta tu plato con los ingredientes que quieras.',
				noteEn: 'Build your plate with whatever you like.',
				builder: true,
				items: [
					i('Tomate', undefined, 0.5, { n: 'Tomato' }, ['vegan']),
					i('Albahaca', undefined, 0.5, { n: 'Basil' }, ['vegan']),
					i('Canónigos', undefined, 0.5, { n: 'Lamb’s lettuce' }, ['vegan']),
					i('Rúcula', undefined, 0.5, { n: 'Rocket' }, ['vegan']),
					i('Hierbabuena', undefined, 0.5, { n: 'Mint' }, ['vegan']),
					i('Huevo duro', undefined, 1, { n: 'Boiled egg' }),
					i('Pepino', undefined, 1, { n: 'Cucumber' }, ['vegan']),
					i('Jamón serrano', undefined, 1.5, { n: 'Serrano ham' }),
					i('Pavo natural', undefined, 1.5, { n: 'Natural turkey' }),
					i('Bacon', undefined, 1.5),
					i('Atún', undefined, 1.5, { n: 'Tuna' }),
					i('Champiñones', undefined, 1.5, { n: 'Mushrooms' }, ['vegan']),
					i('Quesos', 'Gouda, tierno, fresco, curado, cabra o mozzarella vegana', 1.5, { n: 'Cheeses', d: 'Gouda, mild, fresh, cured, goat or vegan mozzarella' }),
					i('Huevo plancha', undefined, 2, { n: 'Fried egg' }),
					i('Tortilla', undefined, 2, { n: 'Omelette' }),
					i('Aguacate', undefined, 2, { n: 'Avocado' }, ['vegan']),
					i('Tofu', undefined, 2.5, undefined, ['vegan']),
					i('Seitán', undefined, 2.5, { n: 'Seitan' }, ['vegan']),
					i('Tortilla de picadillo', 'De pavo o bacon con queso curado', 4, { n: 'Hash omelette', d: 'Turkey or bacon with cured cheese' }),
					i('Heura', undefined, 4, undefined, ['vegan']),
					i('Salmón', undefined, 4.5, { n: 'Salmon' }),
				],
			},
			{
				id: 'tapas',
				title: 'Para picar',
				titleEn: 'To share',
				items: [
					i('Queso curado en AOVE', 'Con nueces y dátiles', 4.9, { n: 'Cured cheese in EVOO', d: 'With walnuts and dates' }),
					i('Hummus de pimiento', 'Con bastones de zanahoria y palitos de pan', 5, { n: 'Red pepper hummus', d: 'With carrot sticks and breadsticks' }, ['vegan']),
					i('Dados de tofu ahumado', 'Con alioli vegano', 5.8, { n: 'Smoked tofu bites', d: 'With vegan aioli' }, ['vegan']),
					i('Aceitunas verdes', undefined, 1, { n: 'Green olives' }, ['vegan', 'gf']),
				],
			},
		],
	},
	{
		id: 'dulces',
		title: 'Dulces',
		titleEn: 'Sweets',
		color: '#FFD6E0',
		ink: '#2A0A14',
		image: 'seccion-tartas',
		groups: [
			{
				id: 'crepes-dulces',
				title: 'Crepes, gofres y pancakes',
				titleEn: 'Crepes, waffles & pancakes',
				note: 'Crep 6,50 € · Crep vegano 7 € · Gofre 7 € · Pancake 7 €',
				noteEn: 'Crepe €6.50 · Vegan crepe €7 · Waffle €7 · Pancake €7',
				items: [
					i('Uno', 'Sirope de agave, helado de vainilla y canela', undefined, { n: 'One', d: 'Agave syrup, vanilla ice cream and cinnamon' }),
					i('Dos', 'Mermelada de arándano, manzana y coco', undefined, { n: 'Two', d: 'Blueberry jam, apple and coconut' }),
					i('Tres', 'Yogur griego, arándano, fresa y miel', undefined, { n: 'Three', d: 'Greek yogurt, blueberry, strawberry and honey' }),
					i('Cuatro', 'Dulce de leche, plátano y nueces', undefined, { n: 'Four', d: 'Dulce de leche, banana and walnuts' }),
					i('Cinco', 'Nutella, fresas, nueces y coco', undefined, { n: 'Five', d: 'Nutella, strawberries, walnuts and coconut' }, ['fav']),
					i('Seis', 'Kinder Bueno, manzana, avellana y chocolate', undefined, { n: 'Six', d: 'Kinder Bueno, apple, hazelnut and chocolate' }),
					i('Siete', 'Pistacho, mango y cacahuete', undefined, { n: 'Seven', d: 'Pistachio, mango and peanut' }),
					i('Ocho', 'Chocolate blanco, plátano y almendra', undefined, { n: 'Eight', d: 'White chocolate, banana and almond' }),
				],
			},
			{
				id: 'tartas',
				title: 'Tartas y bollería',
				titleEn: 'Cakes & pastries',
				items: [
					i('Tarta de queso', undefined, 4.5, { n: 'Cheesecake' }),
					i('Tarta tres chocolates', undefined, 4.5, { n: 'Triple chocolate cake' }),
					i('Tarta de manzana', undefined, 4.5, { n: 'Apple cake' }),
					i('Tarta de limón', undefined, 4.5, { n: 'Lemon cake' }),
					i('Tarta de coco y dulce de leche', undefined, 4.5, { n: 'Coconut & dulce de leche cake' }),
					i('Bizcochos y cremas', undefined, 4, { n: 'Sponge & cream cakes' }),
					i('Bizcocho vegano', undefined, 3, { n: 'Vegan sponge cake' }, ['vegan']),
					i('Croissant semillado', undefined, 2, { n: 'Seeded croissant' }, ['vegan']),
					i('Medialunas argentinas', undefined, 2.9, { n: 'Argentinian medialunas' }),
					i('Cookie rellena', 'Con pepitas de chocolate y Nutella', 3.5, { n: 'Stuffed cookie', d: 'Chocolate chips and Nutella' }),
					i('Brownie de Oreo', 'Con cobertura de chocolate', 4, { n: 'Oreo brownie', d: 'Chocolate-coated' }),
					i('Brownie de Oreo con helado', 'Helado de vainilla y cobertura de chocolate', 4.9, { n: 'Oreo brownie à la mode', d: 'Vanilla ice cream and chocolate sauce' }),
				],
			},
		],
	},
	{
		id: 'cafe',
		title: 'Café y té',
		titleEn: 'Coffee & tea',
		color: '#0F1F17',
		ink: '#FAFAF5',
		image: 'seccion-coffee-crunchy',
		groups: [
			{
				id: 'cafes',
				title: 'Cafés',
				titleEn: 'Coffee',
				columns: ['Oro', 'Eco', 'Origen', 'Descaf.'],
				rows: [
					{ name: 'Pequeño', nameEn: 'Small', prices: [1.8, 1.6, 1.4, 1.7] },
					{ name: 'Doble', nameEn: 'Double', prices: [2, 1.8, 1.6, 1.9] },
					{ name: 'Triple', nameEn: 'Triple', prices: [2.4, 2.2, 2, 2.3] },
				],
				note: 'Con leche (entera, desnatada o sin lactosa) +0,20 € · Con bebida vegetal (soja, avena, almendra, avellana, coco) +0,40 €',
				noteEn: 'With milk (whole, skimmed or lactose-free) +€0.20 · With plant drink (soy, oat, almond, hazelnut, coconut) +€0.40',
				items: [],
			},
			{
				id: 'especiales',
				title: 'Café de especialidad',
				titleEn: 'Specialty coffee',
				items: [
					i('Café Chemex', 'Nuestro mejor café de origen filtrado por goteo. Limpio en taza y muy aromático', 5.5, { n: 'Chemex', d: 'Our best single-origin coffee, drip-filtered. Clean cup, very aromatic' }, ['fav']),
					i('Café francés', 'Café de origen filtrado por inmersión. Intenso y con cuerpo', 5.2, { n: 'French press', d: 'Single-origin coffee, immersion brew. Intense and full-bodied' }),
				],
			},
			{
				id: 'cafes-shanao',
				title: 'Cafés Shanao',
				titleEn: 'Shanao coffees',
				items: [
					i('Capuchino', 'Expreso, leche, cacao y crema de leche', 2.5, { n: 'Cappuccino', d: 'Espresso, milk, cacao and milk foam' }),
					i('Bombón', 'Expreso doble y leche condensada', 2.4, { d: 'Double espresso and condensed milk' }),
					i('Latte macchiato', 'Expreso, crema de leche, topping (avellana, caramelo o vainilla) y canela', 2.8, { d: 'Espresso, milk foam, syrup (hazelnut, caramel or vanilla) and cinnamon' }),
					i('Mocca', 'Expreso doble con salsa a elegir y crema de leche', 3.5, { n: 'Mocha', d: 'Double espresso with your choice of sauce and milk foam' }),
					i('Iceberg', 'Helado cremoso sumergido en expreso doble con nata', 4.5, { d: 'Creamy ice cream drowned in a double espresso with whipped cream' }),
					i('Frapuchino frío', 'Expreso, leche, cacao, Nutella y nata', 5.5, { n: 'Iced frappuccino', d: 'Espresso, milk, cacao, Nutella and cream' }),
					i('Coffee Crunchy', 'Café con leche con crujiente. Vegetal +0,20 €', 4, { d: 'Latte with crunchy topping. Plant milk +€0.20' }),
					i('Coffee Cookie', 'Café servido en un vaso de galleta. Con leche 5 €', 4.8, { d: 'Coffee served in a cookie cup. With milk €5' }, ['fav']),
					i('Irlandés', 'Expreso doble, Jameson, azúcar moreno y nata', 5.2, { n: 'Irish coffee', d: 'Double espresso, Jameson, brown sugar and cream' }),
					i('Carajillo', 'Expreso con Baileys, coñac o Jameson', 3.5, { d: 'Espresso with Baileys, brandy or Jameson' }),
				],
			},
			{
				id: 'matcha',
				title: 'Matcha y chai',
				titleEn: 'Matcha & chai',
				items: [
					i('Matcha latte', undefined, 3.5, undefined, ['fav']),
					i('Dirty matcha', 'Matcha, expreso y leche', 4.5, { d: 'Matcha, espresso and milk' }),
					i('Matcha latte de fruta', 'Con hielo y fresa o mango', 5, { n: 'Fruit matcha latte', d: 'Iced, with strawberry or mango' }),
					i('Batido de matcha', 'Matcha, plátano, canela y leche', 5.5, { n: 'Matcha shake', d: 'Matcha, banana, cinnamon and milk' }),
					i('Chai latte', 'Vegetal 3,60 €', 3.4, { d: 'Plant milk €3.60' }),
					i('Dirty chai latte', 'Chai latte con un expreso', 4.2, { d: 'Chai latte with a shot of espresso' }),
					i('Iced chai latte', 'Con helado cremoso de nata', 4.5, { d: 'With creamy ice cream' }),
				],
			},
			{
				id: 'tes',
				title: 'Tés e infusiones',
				titleEn: 'Teas & infusions',
				items: [
					i('Tés e infusiones orgánicos', 'Manzanilla, menta, tila, cola de caballo, rooibos, detox, verde, negro y rojo', 2.5, { n: 'Organic teas', d: 'Chamomile, mint, linden, horsetail, rooibos, detox, green, black and red' }, ['vegan']),
					i('Té moruno', 'Té verde, hierbabuena y azúcar moreno', 3.8, { n: 'Moroccan tea', d: 'Green tea, mint and brown sugar' }, ['vegan']),
					i('Té sirio', 'Té verde, cardamomo, jengibre, hierbabuena, azúcar moreno y leche', 4.1, { n: 'Syrian tea', d: 'Green tea, cardamom, ginger, mint, brown sugar and milk' }),
					i('Té americano', 'Leche, Licor 43, té negro, canela y twist de limón', 4.4, { n: 'American tea', d: 'Milk, Licor 43, black tea, cinnamon and lemon twist' }),
					i('Té vegano', 'Leche de avellana, Cointreau, té negro, canela y naranja', 4.5, { n: 'Vegan tea', d: 'Hazelnut milk, Cointreau, black tea, cinnamon and orange' }, ['vegan']),
					i('Té Happy', 'Té negro especiado, naranja, cacao y leche de almendra y coco', 4.8, { n: 'Happy tea', d: 'Spiced black tea, orange, cacao, almond and coconut milk' }, ['vegan']),
				],
			},
		],
	},
	{
		id: 'zumos',
		title: 'Zumos y batidos',
		titleEn: 'Juices & shakes',
		story: 'Cada zumo te lleva a una isla.',
		storyEn: 'Every juice takes you to an island.',
		color: '#FF8A3D',
		ink: '#2A0F00',
		image: 'seccion-coffee-cookie',
		groups: [
			{
				id: 'islas',
				title: 'Licuados y zumos',
				titleEn: 'Pressed juices',
				price: '5,20',
				note: 'Vitamina para el cuerpo.',
				noteEn: 'Vitamins for the body.',
				items: [
					i('Santorini', 'Manzana, zanahoria, fresa, arándanos y jengibre', undefined, { d: 'Apple, carrot, strawberry, blueberries and ginger' }, ['vegan']),
					i('Maui', 'Mango, plátano y hierbabuena', undefined, { d: 'Mango, banana and mint' }, ['vegan']),
					i('Bali', 'Naranja, zanahoria y remolacha', undefined, { d: 'Orange, carrot and beetroot' }, ['vegan']),
					i('Mauricio', 'Manzana, limón y hierbabuena', undefined, { n: 'Mauritius', d: 'Apple, lemon and mint' }, ['vegan']),
					i('Phuket', 'Piña, naranja y plátano', undefined, { d: 'Pineapple, orange and banana' }, ['vegan']),
					i('Bahamas', 'Naranja, kiwi y fresa', undefined, { d: 'Orange, kiwi and strawberry' }, ['vegan']),
					i('Maldivas', 'Pepino, manzana, jengibre y limón', undefined, { n: 'Maldives', d: 'Cucumber, apple, ginger and lemon' }, ['vegan', 'fav']),
					i('Phi Phi', 'Piña, pepino y miel', undefined, { d: 'Pineapple, cucumber and honey' }),
					i('Samui', 'Manzana, pepino, remolacha y jengibre', undefined, { d: 'Apple, cucumber, beetroot and ginger' }, ['vegan']),
					i('Zumo natural', 'Piña, naranja o manzana', 3.5, { n: 'Fresh juice', d: 'Pineapple, orange or apple' }, ['vegan']),
				],
			},
			{
				id: 'batidos',
				title: 'Batidos',
				titleEn: 'Shakes',
				price: '5,80',
				items: [
					i('Capri', 'Bebida de avena, plátano, sésamo tostado y nueces', undefined, { d: 'Oat drink, banana, toasted sesame and walnuts' }, ['vegan']),
					i('Cíes', 'Bebida de almendra, sésamo, plátano, espinacas y dátiles', undefined, { n: 'Cies', d: 'Almond drink, sesame, banana, spinach and dates' }, ['vegan']),
					i('Lanzarote', 'Bebida de soja, fresas, avena y chocolate', undefined, { d: 'Soy drink, strawberries, oats and chocolate' }, ['vegan']),
					i('Cerdeña', 'Leche, yogur natural, plátano, fresa y avena', undefined, { n: 'Sardinia', d: 'Milk, natural yogurt, banana, strawberry and oats' }),
					i('Lassi de mango', 'Mango, yogur, bebida de coco, cúrcuma, jengibre, cardamomo y miel', 6, { n: 'Mango lassi', d: 'Mango, yogurt, coconut drink, turmeric, ginger, cardamom and honey' }),
					i('Brasil', 'Açaí, bebida de frutos secos, cacahuete y plátano', 6, { n: 'Brazil', d: 'Açaí, nut drink, peanut and banana' }, ['vegan']),
					i('Batido de vainilla', 'Helado de vainilla, bebida de avellana, canela y mucho amor', 5.8, { n: 'Vanilla shake', d: 'Vanilla ice cream, hazelnut drink, cinnamon and lots of love' }),
				],
			},
		],
	},
	{
		id: 'bebidas',
		title: 'Bebidas',
		titleEn: 'Drinks',
		color: '#E8F1FF',
		ink: '#0F1F17',
		groups: [
			{
				id: 'refrescos',
				title: 'Refrescos y más',
				titleEn: 'Soft drinks & more',
				items: [
					i('Agua mineral 50 cl', undefined, 2, { n: 'Still water 50 cl' }),
					i('Agua mineral 2 L', undefined, 3, { n: 'Still water 2 L' }),
					i('Refrescos', undefined, 2.5, { n: 'Soft drinks' }),
					i('Puleva', undefined, 2.5),
					i('Kombucha eco', 'Con ingredientes orgánicos', 4.5, { n: 'Organic kombucha', d: 'Made with organic ingredients' }, ['vegan']),
					i('Estrella Galicia', undefined, 3),
					i('Estrella Galicia Tostada 0,0', undefined, 3.3),
					i('Estrella Galicia 1906', undefined, 3.5),
					i('Estrella Galicia sin gluten', undefined, 3.5, { n: 'Estrella Galicia gluten-free' }, ['gf']),
					i('Grolsch Radler', 'Cerveza con limón', 3.5, { d: 'Beer with lemon' }),
					i('Tinto de verano', 'Vino y Fanta de limón', 4.5, { d: 'Red wine with lemon soda' }),
					i('Copa de vino', 'Tinto, blanco o semi · Botella 18 €', 3.5, { n: 'Glass of wine', d: 'Red, white or semi-sweet · Bottle €18' }),
					i('Vermut', undefined, 3.9, { n: 'Vermouth' }),
					i('Licores', 'Baileys, pacharán, hierbas, café, orujo, Tía María, coñac…', 5, { n: 'Liqueurs', d: 'Baileys, pacharán, herbs, coffee, orujo, Tía María, brandy…' }),
					i('Combinados', undefined, 'Desde 7', { n: 'Mixed drinks' }),
				],
			},
		],
	},
];

export const formatPrice = (p: number | string | undefined, lang: 'es' | 'en' = 'es'): string => {
	if (p === undefined) return '';
	if (typeof p === 'string') return lang === 'en' ? `${p.replace(',', '.')}${/\d$/.test(p) ? ' €' : ''}`.replace('Desde', 'From') : `${p}${/\d$/.test(p) ? ' €' : ''}`;
	const s = p.toFixed(2);
	return lang === 'en' ? `${s} €` : `${s.replace('.', ',')} €`;
};
