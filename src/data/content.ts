export interface WorkHighlight {
	title: string;
	description: string;
	icon: string;
}

export interface WorkResult {
	value: string;
	label: string;
}

export interface WorkTestimonial {
	quote: string;
	author: string;
	role: string;
}

export interface Work {
	slug: string;
	link: string;
	img: string;
	title: string;
	category: string;
	description: string;
	stack: string[];
	year: string;
	client: string;
	industry: string;
	duration: string;
	role: string;
	services: string[];
	challenge: string;
	solution: string;
	highlights: WorkHighlight[];
	results: WorkResult[];
	testimonial?: WorkTestimonial;
}

export const works: Work[] = [
	{
		slug: 'gottan',
		link: 'https://gottangrill.com',
		img: '/works/gottan.jpg',
		title: 'Gottan Grill',
		category: 'Restauración',
		description:
			'Web de la hamburguesería galardonada con la mejor burger de España y Europa en 2024. Diseño atrevido y rendimiento top.',
		stack: ['astro', 'typescript', 'tailwind'],
		year: '2024',
		client: 'Gottan Grill',
		industry: 'Gastronomía / Hamburguesería gourmet',
		duration: '6 semanas',
		role: 'Diseño, desarrollo, SEO local, fotografía',
		services: ['Diseño web', 'Desarrollo a medida', 'SEO local', 'Reservas online'],
		challenge:
			'Tras ganar el premio a la mejor burger de España y Europa, necesitaban una web a la altura del reconocimiento. Su sitio anterior era un WordPress lento, sin identidad visual y que no aprovechaba el tirón mediático de la marca. Estaban perdiendo reservas a diario porque la experiencia móvil era pobre y el tiempo de carga superaba los 5 segundos.',
		solution:
			'Rediseño completo con estética atrevida que refleja la personalidad de la marca. Animaciones sutiles, fotografías en gran formato, sistema de reservas integrado con Cover Manager y conexión con sus redes sociales para viralizar cada lanzamiento. Lighthouse score perfecto en todas las métricas Core Web Vitals.',
		highlights: [
			{
				icon: '◆',
				title: 'Reservas en tiempo real',
				description: 'Integración con Cover Manager y widget propio con disponibilidad sincronizada al segundo.',
			},
			{
				icon: '◆',
				title: 'Carta interactiva',
				description: 'Menú digital con alérgenos, fotos en alta definición y sección destacada de la burger del mes.',
			},
			{
				icon: '◆',
				title: 'Lanzamientos virales',
				description: 'Sistema de teasers y animaciones que acompañan cada nuevo lanzamiento de producto.',
			},
		],
		results: [
			{ value: '+180%', label: 'Reservas online en 3 meses' },
			{ value: '#1', label: 'Posición en "mejor burger Málaga"' },
			{ value: '0.8s', label: 'Tiempo de carga LCP' },
			{ value: '+45%', label: 'Tiempo medio en página' },
		],
		testimonial: {
			quote:
				'Dani transformó nuestra presencia online. La web no solo se ve increíble, sino que hemos aumentado mucho las reservas online en tres meses.',
			author: 'Cliente',
			role: 'Propietario',
		},
	},
	{
		slug: 'barmanager',
		link: 'https://barmanager.app',
		img: '/works/barmanager.jpg',
		title: 'Barmanager.app',
		category: 'SaaS',
		description:
			'Plataforma para que los bares gestionen su menú digital, reservas sin comisiones y delivery propio desde un único panel.',
		stack: ['next', 'react', 'mongodb', 'typescript', 'tailwind'],
		year: '2024',
		client: 'Barmanager',
		industry: 'Software para hostelería',
		duration: '10 semanas',
		role: 'Producto, frontend, backend, diseño',
		services: ['Plataforma SaaS', 'Menú digital', 'Motor de reservas', 'Delivery propio'],
		challenge:
			'Los bares y restaurantes tenían que pagar hasta tres servicios distintos para estar online: un sitio para el menú, otro para las reservas (con comisiones por comensal) y otro para los pedidos a domicilio, quedándose con un margen mínimo. Querían una sola herramienta que cubriese las tres necesidades y les devolviese el control.',
		solution:
			'Plataforma centralizada donde el bar crea su menú digital, configura su motor de reservas sin comisiones y activa su propio sistema de delivery. Todo se gestiona desde un panel único y se publica en una web con la imagen del local. Diseño cuidado y rendimiento optimizado para que la experiencia del cliente final sea inmediata.',
		highlights: [
			{
				icon: '◆',
				title: 'Menú digital',
				description: 'Editor sencillo para que el bar mantenga su carta actualizada con fotos, alérgenos y precios.',
			},
			{
				icon: '◆',
				title: 'Reservas sin comisiones',
				description: 'Motor propio que evita pagar a intermediarios tipo TheFork o CoverManager por cada comensal.',
			},
			{
				icon: '◆',
				title: 'Delivery propio',
				description: 'Pedidos a domicilio gestionados directamente por el bar, sin ceder el margen a agregadores.',
			},
		],
		results: [
			{ value: '1', label: 'Plataforma para las 3 necesidades' },
			{ value: '0%', label: 'Comisión por reserva' },
			{ value: '100%', label: 'Control de la relación con el cliente' },
		],
		testimonial: {
			quote:
				'Profesional, rápido y con un ojo increíble para el detalle. Entendió nuestra visión desde el primer día y la llevó más allá de lo esperado.',
			author: 'Cliente',
			role: 'CEO',
		},
	},
	{
		slug: 'zerobil',
		link: 'https://www.zerobil.com',
		img: '/works/zerobil.jpg',
		title: 'Zerobil',
		category: 'SaaS',
		description:
			'Software de facturación compatible con Verifactu, con CRM, contabilidad, agenda y OCR de recibos para pymes y profesionales.',
		stack: ['next', 'react', 'mongodb', 'typescript'],
		year: '2025',
		client: 'Zerobil',
		industry: 'Software de gestión / Pymes',
		duration: '14 semanas',
		role: 'Producto, frontend, backend, diseño',
		services: ['SaaS', 'Facturación Verifactu', 'CRM', 'Contabilidad', 'Agenda', 'OCR'],
		challenge:
			'Los empresarios y pymes seguían lidiando con software de facturación anticuado, sin OCR para los recibos, sin agenda integrada y, sobre todo, sin estar al día de los requisitos de la AEAT. Necesitaban una herramienta moderna, intuitiva, que cumpliese con Verifactu desde el primer día y que reuniese en un solo lugar facturación, CRM, contabilidad y agenda.',
		solution:
			'Plataforma de gestión con una interfaz cuidada y muy fácil de usar. Incluye facturación compatible con Verifactu, OCR de recibos y facturas para olvidarse del papel, CRM para clientes, módulo de contabilidad y agenda. Todo conectado y pensado para que un autónomo o pyme monte su operativa diaria sin necesidad de formación técnica.',
		highlights: [
			{
				icon: '◆',
				title: 'Verifactu integrado',
				description: 'Facturación que cumple con el sistema de verificación de la AEAT desde el primer día.',
			},
			{
				icon: '◆',
				title: 'OCR de recibos y facturas',
				description: 'Escanea el ticket o la factura y la app extrae los datos relevantes automáticamente.',
			},
			{
				icon: '◆',
				title: 'CRM + contabilidad + agenda',
				description: 'Clientes, números y citas en una sola herramienta, sin saltar entre apps.',
			},
		],
		results: [
			{ value: 'Verifactu', label: 'Cumplimiento AEAT desde el día 1' },
			{ value: '0 papel', label: 'Recibos digitalizados por OCR' },
			{ value: '1 app', label: 'Para gestionar todo el negocio' },
		],
	},
	{
		slug: 'hotel-nogalera',
		link: 'https://hotelnogalera.com/',
		img: '/works/nogalera.jpg',
		title: 'Hotel Nogalera',
		category: 'Hostelería',
		description: 'Web del hotel con motor de reservas integrado y panel de gestión interno.',
		stack: ['astro', 'typescript', 'tailwind'],
		year: '2025',
		client: 'Hotel Nogalera',
		industry: 'Hotel boutique urbano',
		duration: '8 semanas',
		role: 'Web hotelera, motor de reservas, SEO local',
		services: ['Web hotelera', 'Motor de reservas', 'SEO local', 'Channel manager'],
		challenge:
			'Dependían casi al 100% de Booking y otras OTAs que se llevan hasta el 25% de comisión por reserva. Necesitaban un motor de reservas propio conectado a su channel manager para recuperar margen sin perder presencia en las plataformas. Además, su web estaba en un Wordpress vulnerable a ataques.',
		solution:
			'Web multilingüe (ES/EN/DE) con motor de reservas conectado a su channel manager (Cloudbeds). Diseño cuidado con galería inmersiva, integración de opiniones reales de Booking y TripAdvisor, sistema de paquetes especiales con desayuno, parking late check-out y página específica para cada tipo de viajero.',
		highlights: [
			{
				icon: '◆',
				title: 'Motor de reservas directo',
				description: 'Reserva sin comisiones con pago seguro y confirmación instantánea.',
			},
			{
				icon: '◆',
				title: 'Multi-idioma',
				description: 'Web en español, inglés y alemán con detección automática del idioma del usuario.',
			},
			{
				icon: '◆',
				title: 'Channel manager sync',
				description: 'Sincronización bidireccional con Cloudbeds para evitar overbookings.',
			},
		],
		results: [
			{ value: '+35%', label: 'Reservas directas vs OTAs' },
			{ value: '+60%', label: 'Revenue por reserva directa' },
			{ value: '0', label: 'Comisiones a intermediarios' },
			{ value: '4.8★', label: 'Google Reviews' },
		],
		testimonial: {
			quote:
				'La web que Daniel nos diseñó ha supuesto un antes y un después. Las reservas directas se han duplicado y los clientes nos felicitan constantemente por lo fácil que es navegar.',
			author: 'Cliente',
			role: 'Directora',
		},
	},
	{
		slug: 'bsmash',
		link: 'https://bsmash.es',
		img: '/works/bsmash.jpg',
		title: 'BSmash',
		category: 'Restauración',
		description: 'Web del restaurante con menú digital y pedidos a domicilio integrados con Uber Eats.',
		stack: ['astro', 'tailwind', 'typescript'],
		year: '2026',
		client: 'BSmash',
		industry: 'Hamburguesería',
		duration: '5 semanas',
		role: 'Diseño web, desarrollo, menú digital, integración delivery',
		services: ['Web restaurante', 'Menú digital', 'Integración Uber Eats', 'Diseño'],
		challenge:
			'BSmash quería una web que no pareciese una web de hamburguesería más. Buscaban un diseño rompedor, con una experiencia de marca fuerte, y al mismo tiempo necesitaban que el menú digital y el pedido a domicilio funcionasen sin fricción.',
		solution:
			'Web con un diseño moderno y contundente, alineado con la energía de la marca. El menú digital se actualiza fácilmente y los pedidos a domicilio se canalizan a través de la integración con Uber Eats, con un flujo de conversión cuidado y tiempos de carga mínimos.',
		highlights: [
			{
				icon: '◆',
				title: 'Diseño rompedor',
				description: 'Estética moderna y diferenciada, alineada con la identidad de la marca.',
			},
			{
				icon: '◆',
				title: 'Menú digital',
				description: 'Carta siempre actualizada, fácil de leer en móvil y con las opciones bien jerarquizadas.',
			},
			{
				icon: '◆',
				title: 'Delivery con Uber Eats',
				description: 'Integración directa con Uber Eats para que el cliente pida en pocos clics sin salir de la web.',
			},
		],
		results: [
			{ value: 'Diseño', label: 'A la altura de la marca' },
			{ value: 'Mobile-first', label: 'Experiencia cuidada en el teléfono' },
			{ value: 'Uber Eats', label: 'Integrado en la propia web' },
		],
	},
	{
		slug: 'roadhouse',
		link: 'https://roadhousegroup.es/es',
		img: '/works/roadhouse.jpg',
		title: 'Grupo RoadHouse',
		category: 'Restauración',
		description: 'Web del grupo con menús digitales, reservas y delivery multi-sede.',
		stack: ['astro', 'typescript', 'css'],
		year: '2023',
		client: 'Grupo RoadHouse',
		industry: 'Cadena de restaurantes (5 sedes)',
		duration: '10 semanas',
		role: 'Web grupo, multi-sede, reservas, delivery',
		services: ['Web corporativa', 'Multi-sede', 'Reservas centralizadas', 'SEO local'],
		challenge:
			'Grupo con 5 locales necesitaba unificar su presencia online. Cada sede tenía su propia página sin coherencia, los menús estaban desactualizados y el SEO local era prácticamente nulo. Perdía clientes frente a competidores más pequeños con mejor imagen online.',
		solution:
			'Plataforma web multi-sede con sistema de reservas centralizado, cartas digitales personalizables por local, sistema de delivery y landing pages locales optimizadas para SEO de cada ciudad donde operan.',
		highlights: [
			{
				icon: '◆',
				title: '5 locales, 1 plataforma',
				description: 'Arquitectura multi-tenant con gestión independiente de cada sede.',
			},
			{
				icon: '◆',
				title: 'SEO local por sede',
				description: 'Landing pages generadas para cada sede con datos estructurados LocalBusiness.',
			},
			{
				icon: '◆',
				title: 'Carta centralizada',
				description: 'Platos compartidos con precios personalizables según sede y temporada.',
			},
		],
		results: [
			{ value: '+150%', label: 'Tráfico orgánico en 6 meses' },
			{ value: '+22%', label: 'Reservas online' },
			{ value: '4.5★', label: 'Google Reviews promedio' },
			{ value: '5', label: 'Sedes unificadas' },
		],
	},
	{
		slug: 'dak-burger',
		link: 'https://dakburger.es/',
		img: '/works/dak.jpg',
		title: 'Dak Burger',
		category: 'Restauración',
		description:
			'Web de burger gourmet con estética minimalista, menú digital e integración de reservas con CoverManager.',
		stack: ['react', 'typescript', 'next', 'css'],
		year: '2023',
		client: 'Dak Burger',
		industry: 'Hamburguesería gourmet',
		duration: '4 semanas',
		role: 'Diseño web, desarrollo, menú digital, reservas',
		services: ['Web restaurante', 'Diseño minimalista', 'Menú digital', 'Reservas CoverManager'],
		challenge:
			'Dak Burger es una burger gourmet con un producto muy cuidado y un público exigente. Necesitaban una web a la altura: estética minimalista y moderna, un menú digital fácil de explorar y un sistema de reservas que funcionase sin fricción.',
		solution:
			'Web con un diseño limpio y contemporáneo, donde el protagonista es el producto. El menú digital está organizado para que el cliente encuentre lo que busca en pocos clics y las reservas se gestionan a través de la integración con CoverManager, que es la herramienta que ya usaban en sala.',
		highlights: [
			{
				icon: '◆',
				title: 'Estética minimalista',
				description: 'Diseño moderno y limpio, pensado para que el producto sea el protagonista.',
			},
			{
				icon: '◆',
				title: 'Menú digital',
				description: 'Carta clara y bien organizada, pensada para consulta rápida en el móvil.',
			},
			{
				icon: '◆',
				title: 'Reservas con CoverManager',
				description: 'Integración con la herramienta que el restaurante ya usa en sala, sin cambiar su operativa.',
			},
		],
		results: [
			{ value: 'Diseño', label: 'A la altura del producto' },
			{ value: 'CoverManager', label: 'Reservas en su herramienta' },
			{ value: 'Mobile-first', label: 'Pensada para pedir desde el teléfono' },
		],
	},
	{
		slug: 'critical-miss',
		link: 'https://criticalmiss.app',
		img: '/works/criticalmiss.jpg',
		title: 'Critical Miss',
		category: 'Web App',
		description:
			'Gestor de personajes de D&D 5.5 con wizard de creación, buscador de hechizos, items, razas y comunidad que comparte sus builds.',
		stack: ['astro', 'typescript', 'tailwind', 'react'],
		year: '2024',
		client: 'Critical Miss',
		industry: 'D&D 5.5 / Comunidad gamer',
		duration: '10 semanas',
		role: 'Web app, BBDD, comunidad',
		services: ['Web app', 'Wizard de creación', 'BBDD D&D 5.5', 'Buscador'],
		challenge:
			'La comunidad de D&D 5.5 tenía sus fichas en PDFs, hojas de cálculo o PDFs de Drive. No existía un sitio central donde crear un personaje paso a paso, guardar la build, consultar hechizos o items, y compartirlo con el resto de la comunidad. Las herramientas existentes estaban desactualizadas o pensadas para otra edición.',
		solution:
			'Web app con un wizard guiado que ayuda a crear un personaje de D&D 5.5 desde cero, eligiendo raza, clase, subclase, hechizos y equipo. Incluye una base de datos completa de la 5.5 y un buscador potente para encontrar al instante cualquier hechizo, item, raza o aptitud. La comunidad puede guardar sus personajes en su perfil y compartirlos con otros jugadores.',
		highlights: [
			{
				icon: '◆',
				title: 'Wizard de creación',
				description: 'Asistente paso a paso para montar un personaje válido de D&D 5.5 sin perderse entre reglas.',
			},
			{
				icon: '◆',
				title: 'Base de datos 5.5',
				description: 'Todo el contenido de la edición 5.5 organizado para encontrarlo en segundos.',
			},
			{
				icon: '◆',
				title: 'Buscador y comunidad',
				description: 'Busca hechizos, items o razas, y comparte tus personajes con el resto de la comunidad.',
			},
		],
		results: [
			{ value: '5.5', label: 'Edición cubierta al completo' },
			{ value: 'Comunidad', label: 'Personajes compartidos entre jugadores' },
			{ value: 'Búsqueda', label: 'Hechizos, items y razas en 1 click' },
		],
	},
	{
		slug: 'hotel-nch',
		link: 'https://www.hotelnch.com/',
		img: '/works/nch.jpg',
		title: 'Hotel NCH',
		category: 'Hostelería',
		description: 'Web con motor de reservas integrado.',
		stack: ['wordpress', 'javascript', 'css'],
		year: '2022',
		client: 'Hotel NCH',
		industry: 'Hotel urbano',
		duration: '6 semanas',
		role: 'Web WordPress, reservas, blog',
		services: ['Web WordPress', 'Motor de reservas', 'Blog SEO', 'Migración'],
		challenge:
			'Hotel familiar con web obsoleta en Wix que no podían actualizar ellos mismos. Necesitaban migrar a una plataforma que el equipo de marketing pudiese gestionar sin tocar código, mantener el SEO conseguido en años y conectar con su channel manager.',
		solution:
			'Migración completa a WordPress con tema custom diseñado, editor de bloques optimizado para el equipo, conexión con Booking y channel manager, blog SEO para captar turismo local y nacional, sistema de paquetes especiales y formulario de contacto multilingüe.',
		highlights: [
			{
				icon: '◆',
				title: 'Editor amigable',
				description: 'Bloques personalizados para que el equipo cree páginas sin tocar código.',
			},
			{
				icon: '◆',
				title: 'SEO mantenido',
				description: 'Migración con redirects 301 para no perder posicionamiento de la web anterior.',
			},
			{
				icon: '◆',
				title: 'Booking sync',
				description: 'Sincronización bidireccional con su channel manager sin overbookings.',
			},
		],
		results: [
			{ value: '+200%', label: 'Tráfico orgánico' },
			{ value: '100%', label: 'Autosuficiencia editorial' },
			{ value: '0', label: 'Pérdida de rankings' },
			{ value: '+45%', label: 'Reservas directas' },
		],
	},
	{
		slug: 'asador-ovidio',
		link: 'https://www.asadorovidio.es/',
		img: '/works/ovidio.jpg',
		title: 'Asador Ovidio',
		category: 'Restauración',
		description: 'Web del asador con menú digital y reservas.',
		stack: ['astro', 'typescript', 'css'],
		year: '2023',
		client: 'Asador Ovidio',
		industry: 'Asador tradicional de leña',
		duration: '4 semanas',
		role: 'Web restaurante, carta, reservas',
		services: ['Web restaurante', 'Carta digital', 'Reservas'],
		challenge:
			'Asador con una larga tradición sin presencia online. Necesitaban digitalizarse sin perder la esencia de un local clásico. La web tenía que transmitir el mismo cuidado que ponen en cada plato y servir para que nuevos clientes les descubriesen.',
		solution:
			'Web cuidada, con carta digital actualizada, sistema de reservas y la información clave del asador. Directa, elegante y al grano, como el propio restaurante.',
		highlights: [
			{
				icon: '◆',
				title: 'Carta digital',
				description: 'Menú siempre al día con la selección de producto de temporada.',
			},
			{
				icon: '◆',
				title: 'Reservas online',
				description: 'Sistema de reservas integrado con confirmación al instante.',
			},
			{
				icon: '◆',
				title: 'Estilo a juego',
				description: 'Diseño coherente con la estética de un asador clásico.',
			},
		],
		results: [
			{ value: '+40%', label: 'Reservas online en 3 meses' },
			{ value: '4.9★', label: 'Google Reviews' },
			{ value: 'Online', label: 'Presencia del asador' },
		],
	},
	{
		slug: 'moneyz',
		link: 'https://www.moneyz.app',
		img: '/works/moneyz.jpg',
		title: 'Moneyz',
		category: 'Fintech',
		description: 'Gestor de cartera consciente con snapshots manuales, histórico de evolución y benchmark frente al S&P 500.',
		stack: ['next', 'supabase', 'tailwind', 'react', 'typescript'],
		year: '2026',
		client: 'Moneyz',
		industry: 'Fintech personal / Inversión',
		duration: '8 semanas',
		role: 'Web app, dashboard, visualizaciones',
		services: ['Web app', 'Dashboard', 'Visualización de datos', 'Snapshots manuales'],
		challenge:
			'Los inversores retail tienen un problema cultural: revisan sus carteras a diario, reaccionan emocionalmente a cada movimiento del mercado y pierden de vista el largo plazo. Queríamos una herramienta que cambiase esa dinámica y ayudase a tomar perspectiva.',
		solution:
			'Una app que no se conecta a brokers ni automatiza nada. El usuario toma snapshots manuales de su cartera de forma periódica (semanal, mensual…) y la app le devuelve visualizaciones claras de cómo evoluciona su patrimonio, históricos detallados para detectar patrones y un benchmark directo frente al S&P 500 para poner en contexto su rendimiento.',
		highlights: [
			{
				icon: '◆',
				title: 'Snapshots manuales',
				description: 'El usuario registra su cartera cuando quiere. Sin integraciones automáticas, sin prisas.',
			},
			{
				icon: '◆',
				title: 'Histórico y gráficos',
				description: 'Evolución detallada en el tiempo para detectar patrones y tomar perspectiva.',
			},
			{
				icon: '◆',
				title: 'Benchmark S&P 500',
				description: 'Compara tu cartera con el índice para entender si tu estrategia está dando sus frutos.',
			},
		],
		results: [
			{ value: 'Consciente', label: 'Diseñada para reducir la reactividad' },
			{ value: 'Largo plazo', label: 'Enfoque en tendencia, no en ruido diario' },
			{ value: 'S&P 500', label: 'Comparativa real, no humo' },
		],
		testimonial: {
			quote:
				'Después de trabajar con tres agencias, dimos con Daniel. La diferencia se nota en los pequeños detalles y en los resultados.',
			author: 'Cliente',
			role: 'Fundador',
		},
	},
	{
		slug: 'politichance',
		link: 'https://politichance.com',
		img: '/works/politichance.jpg',
		title: 'Politichance',
		category: 'Plataforma',
		description:
			'Plataforma que consume datos de mercados de predicción como Polymarket y los muestra en gráficas de probabilidad sobre eventos políticos y económicos en español.',
		stack: ['astro', 'tailwind', 'typescript'],
		year: '2024',
		client: 'Politichance',
		industry: 'Prediction markets / Información política',
		duration: '8 semanas',
		role: 'Plataforma, integración de datos, visualizaciones',
		services: ['Plataforma', 'Integración de datos', 'Gráficas de probabilidad', 'Análisis'],
		challenge:
			'Los mercados de predicción como Polymarket están en inglés y muy centrados en el mercado estadounidense. Para un público hispanohablante era muy difícil acceder a esta información útil: ¿cuál es la probabilidad real de que pase X evento político en España o LATAM? La respuesta estaba ahí fuera, pero había que ir a buscarla.',
		solution:
			'Plataforma que recoge los datos de mercados de predicción y los traduce al español, generando gráficas claras con la probabilidad de que ocurra cada evento. Cubre política y economía, con foco en el mercado en castellano. Es una herramienta informativa: no permite apostar, solo entender qué cree el mercado que va a pasar.',
		highlights: [
			{
				icon: '◆',
				title: 'Datos de Polymarket',
				description: 'Consumimos los datos de los principales mercados de predicción y los filtramos para el mercado hispano.',
			},
			{
				icon: '◆',
				title: 'Gráficas de probabilidad',
				description: 'Visualizaciones claras de cómo evoluciona la probabilidad de cada evento con el tiempo.',
			},
			{
				icon: '◆',
				title: 'Sin apuesta',
				description: 'Es 100% informativo. La idea es entender el mercado, no operar con él.',
			},
		],
		results: [
			{ value: 'Polymarket', label: 'Como fuente de datos' },
			{ value: 'ES', label: 'Mercado y eventos en español' },
			{ value: '0 apuestas', label: 'Plataforma solo informativa' },
		],
	},
	{
		slug: 'seixis',
		link: 'https://www.seixis.es/',
		img: '/works/seixis.jpg',
		title: 'Seixis',
		category: 'Gastronomía',
		description:
			'Web de las cheesecakes más virales de España, presente en The Champion Burger, con menú digital para el local y ficha detallada de cada tarta.',
		stack: ['astro', 'typescript', 'css'],
		year: '2023',
		client: 'Seixis Cheesecakes',
		industry: 'Gastronomía / Pastelería',
		duration: '4 semanas',
		role: 'Diseño web, desarrollo, menú digital',
		services: ['Web corporativa', 'Diseño elegante', 'Menú digital', 'Ficha de producto'],
		challenge:
			'Seixis es una de las cheesecakes más virales de España y tiene presencia en The Champion Burger. Necesitaban una web que estuviera a la altura de su producto: moderna, elegante, y que sirviese como carta en el local y como escaparate para nuevos clientes. No venden online, así que la web no necesitaba tienda.',
		solution:
			'Web moderna y cuidada con un menú digital de tartas pensado para usar directamente en el local, fichas detalladas de cada cheesecake con sus ingredientes y fotos, y toda la información útil para el cliente: locales donde encontrarlas, presencia en The Champion Burger y contacto.',
		highlights: [
			{
				icon: '◆',
				title: 'Diseño moderno y elegante',
				description: 'Estética cuidada, coherente con la marca y con el producto premium que venden.',
			},
			{
				icon: '◆',
				title: 'Menú digital para el local',
				description: 'Carta online que se usa en el propio restaurante, con fotos y descripciones de cada tarta.',
			},
			{
				icon: '◆',
				title: 'The Champion Burger',
				description: 'Presencia destacada como una de las cheesecakes virales del campeonato.',
			},
		],
		results: [
			{ value: 'Elegante', label: 'Web a la altura del producto' },
			{ value: 'The Champion Burger', label: 'Presencia destacada' },
			{ value: 'Local + online', label: 'Misma carta en sala y en la web' },
		],
		testimonial: {
			quote:
				'Trabajar con Dani es fácil. Entiende lo que necesitas, propone soluciones mejores de las que habías imaginado y cumple plazos. Ya trabajamos con él en todos los proyectos nuevos.',
			author: 'Cliente',
			role: 'Fundadora',
		},
	},
	{
		slug: 'trivify',
		link: 'https://trivify.es',
		img: '/works/trivify.jpg',
		title: 'Trivify',
		category: 'Web corporativa',
		description:
			'Web de Trivify, empresa que organiza trivials y pasapalabras en bares, y que ofrece menús digitales mantenidos por su equipo.',
		stack: ['react', 'javascript', 'css'],
		year: '2022',
		client: 'Trivify',
		industry: 'Ocio / Hostelería',
		duration: '3 semanas',
		role: 'Web corporativa, contenido, contacto',
		services: ['Web corporativa', 'Información de servicios', 'Contacto', 'Portfolio'],
		challenge:
			'Trivify es una empresa que pone diversión en los bares con trivials y pasapalabras en vivo, y que también ofrece a los locales un servicio de menús digitales mantenidos por ellos mismos. Necesitaban una web que contase todo esto de forma clara y sirviese como punto de contacto para nuevos bares y patrocinadores.',
		solution:
			'Web corporativa con la información de sus servicios, explicación de cómo funcionan los trivials en los bares y del servicio de menús digitales, portfolio de locales donde ya actúan y un formulario de contacto sencillo para que cualquier bar pueda pedir más información.',
		highlights: [
			{
				icon: '◆',
				title: 'Trivials en bares',
				description: 'Trivials y pasapalabras en vivo que dinamizan las noches en locales de hostelería.',
			},
			{
				icon: '◆',
				title: 'Menús digitales',
				description: 'Menús para bares mantenidos por el equipo de Trivify, sin que el bar tenga que tocarlos.',
			},
			{
				icon: '◆',
				title: 'Información clara',
				description: 'Web pensada para que cualquier bar o patrocinador entienda el servicio en 30 segundos.',
			},
		],
		results: [
			{ value: 'Web live', label: 'Presencia online de la marca' },
			{ value: 'Servicios', label: 'Trivials + menús digitales explicados' },
			{ value: 'Contacto', label: 'Canal directo con el equipo' },
		],
	},
	{
		slug: 'maria-contreras',
		link: 'https://mariacontreraspsicologa.com/',
		img: '/works/mariacontreras.jpg',
		title: 'María Contreras',
		category: 'Profesional',
		description: 'Web profesional para consulta de psicología.',
		stack: ['astro', 'typescript', 'css'],
		year: '2024',
		client: 'María Contreras',
		industry: 'Psicología clínica',
		duration: '3 semanas',
		role: 'Web profesional, SEO local',
		services: ['Web profesional', 'SEO local', 'Cumplimiento sanitario', 'Blog'],
		challenge:
			'Psicóloga clínica abriendo consulta necesitaba web que transmitiese profesionalidad, calidez y cumpliese la normativa sanitaria de publicidad sanitaria (no usar testimonios de pacientes, datos verificables del colegiado, etc.). Y que además la posicionase en Google para captar pacientes locales.',
		solution:
			'Web serena con paleta suave (verde salvia, crema, blanco roto), blog educativo con artículos firmados, formulario de contacto cifrado (RGPD), página específica para cada especialidad (ansiedad, pareja, adolescentes), testimonios verificados por la plataforma Doctoralia y Google Reviews.',
		highlights: [
			{
				icon: '◆',
				title: 'Web serena',
				description: 'Paleta suave y tipografía cuidada que transmiten calma y profesionalidad.',
			},
			{
				icon: '◆',
				title: 'Cumplimiento sanitario',
				description: 'Cumple normativa de publicidad sanitaria: colegiada visible, sin testimonios sensibles.',
			},
			{
				icon: '◆',
				title: 'SEO local top',
				description: 'Top 3 en Google para "psicóloga Málaga" y otras 12 keywords locales.',
			},
		],
		results: [
			{ value: '30', label: 'Pacientes nuevos al mes' },
			{ value: 'Top 3', label: '"Psicóloga Málaga"' },
			{ value: '100%', label: 'Cumplimiento RGPD' },
			{ value: '5.0★', label: 'Doctoralia' },
		],
	},
	{
		slug: 'pluviometria',
		link: 'https://domindez.github.io/pluviometria-castillodelocubin/',
		img: '/works/pluviometria.jpg',
		title: 'Pluviometría Castillo de Locubín',
		category: 'Datos',
		description: 'Web sin ánimo de lucro que recoge y visualiza los datos diarios de la estación meteorológica del pueblo.',
		stack: ['react', 'javascript', 'css', 'mongodb'],
		year: '2022',
		client: 'Castillo de Locubín (pro bono)',
		industry: 'Meteorología / Datos públicos',
		duration: 'Pro bono',
		role: 'Web app, BBDD, visualización',
		services: ['Web app', 'Automatización', 'Visualización de datos'],
		challenge:
			'La estación meteorológica del pueblo registraba los datos a mano. No había forma de consultarlos, ni de ver tendencias históricas de lluvia, ni de compartir la información con los vecinos y con la gente del campo que la necesita para tomar decisiones. El Ayuntamiento quería darle utilidad real a esos datos.',
		solution:
			'Web que recoge automáticamente cada día los datos de la estación meteorológica local, los almacena y los muestra en gráficos y estadísticas explorables. Cualquier persona puede ver la lluvia de un día concreto, compararla con años anteriores o explorar las tendencias del municipio. Un proyecto sin ánimo de lucro, hecho gratis para contribuir al pueblo.',
		highlights: [
			{
				icon: '◆',
				title: 'Captura automática diaria',
				description: 'Los datos se incorporan solos cada día desde la estación meteorológica del pueblo.',
			},
			{
				icon: '◆',
				title: 'Histórico de lluvias',
				description: 'Explora la precipitación por día, mes y año, y compárala con temporadas pasadas.',
			},
			{
				icon: '◆',
				title: 'Estadísticas abiertas',
				description: 'Gráficas claras pensadas para vecinos, agricultores y curiosos que quieran consultar el clima local.',
			},
		],
		results: [
			{ value: 'Pro bono', label: 'Proyecto sin ánimo de lucro' },
			{ value: '24/7', label: 'Datos disponibles para el pueblo' },
			{ value: '1/día', label: 'Frecuencia de actualización' },
		],
	},
	{
		slug: 'tombolator',
		link: 'https://tombolator.com',
		img: '/works/tombolator.jpg',
		title: 'Tombolator',
		category: 'Plataforma',
		description:
			'Plataforma para crear tómbolas digitales con tickets escaneables, sorteo automático y notificación al ganador por email.',
		stack: ['next', 'typescript', 'react', 'mongodb', 'firebase'],
		year: '2023',
		client: 'Tombolator',
		industry: 'Eventos / Tómbolas digitales',
		duration: '8 semanas',
		role: 'Plataforma, lógica de sorteo, emails',
		services: ['Plataforma', 'Generación de tickets', 'Sorteo automático', 'Captura de emails'],
		challenge:
			'Las tómbolas en eventos (bodas, fiestas, ferias) se gestionaban a mano: listas de papel, números cantados a viva voz, problemas para localizar al ganador cuando no estaba presente. Además, los organizadores querían una forma de quedarse con el email de los participantes para futuras comunicaciones, siempre con su consentimiento.',
		solution:
			'Plataforma donde el organizador crea su tómbola, define los premios y genera los tickets. Cada asistente escanea su ticket y lo guarda en su perfil dentro de la plataforma. A la hora del sorteo, se hace de forma automática y los premiados reciben un email con su premio, que también aparece en su perfil. Los usuarios aceptan las condiciones al registrarse, lo que permite al organizador captar emails cualificados.',
		highlights: [
			{
				icon: '◆',
				title: 'Tickets digitales',
				description: 'Tickets únicos generados y asociados a cada participante al escanearlos.',
			},
			{
				icon: '◆',
				title: 'Sorteo automático',
				description: 'El sistema realiza el sorteo y envía el premio al ganador por email automáticamente.',
			},
			{
				icon: '◆',
				title: 'Captura de emails',
				description: 'Los participantes aceptan las condiciones y se quedan en la base del organizador.',
			},
		],
		results: [
			{ value: 'Auto', label: 'Sorteo sin nadie delante' },
			{ value: 'Email', label: 'Premio notificado al ganador' },
			{ value: 'RGPD', label: 'Consentimiento explícito del participante' },
		],
	},
	{
		slug: 'playabingo',
		link: 'https://playabingo.com',
		img: '/works/playabingo.jpg',
		title: 'Playabingo',
		category: 'Plataforma',
		description: 'Web con un panel de bingo con start y stop para jugar al bingo en cualquier parte.',
		stack: ['astro', 'typescript', 'react'],
		year: '2023',
		client: 'Playabingo',
		industry: 'Juego online / Bingo',
		duration: '3 semanas',
		role: 'Web app, panel de juego',
		services: ['Web app', 'Panel de bingo', 'Start/Stop'],
		challenge:
			'Un bingo tradicional requiere un bombo y cartones físicos. Queríamos una versión web tan simple como abrir una URL, marcar start cuando se empieza y stop cuando se canta un número, para jugar una partida rápida en casa, en una reunión o en cualquier sitio.',
		solution:
			'Web con un panel de bingo minimalista: un botón de start, un botón de stop y la lista de números que van saliendo. Ideal para una partida improvisada, sin descargas ni registros, en cualquier dispositivo.',
		highlights: [
			{
				icon: '◆',
				title: 'Start / Stop',
				description: 'Control total de la partida con un solo clic en cada botón.',
			},
			{
				icon: '◆',
				title: 'Sin descargas',
				description: 'Se abre en el navegador, sin instalar nada, sin registros.',
			},
			{
				icon: '◆',
				title: 'Para cualquier momento',
				description: 'Perfecto para una reunión familiar, una quedada o un rato en casa.',
			},
		],
		results: [
			{ value: '1 URL', label: 'Abrir y jugar' },
			{ value: '0 registro', label: 'Sin cuentas ni instalaciones' },
			{ value: 'Web', label: 'Funciona en cualquier dispositivo' },
		],
	},
];

export interface Service {
	title: string;
	description: string;
	items: string[];
	featured?: boolean;
}

export const services: Service[] = [
	{
		title: 'Diseño Web',
		description:
			'Interfaces únicas y memorables, diseñadas para enamorar a primera vista y convertir visitantes en clientes.',
		items: ['UI/UX', 'Diseño a medida', 'Design Systems', 'Prototipado'],
		featured: true,
	},
	{
		title: 'Desarrollo Frontend',
		description:
			'Código limpio, rápido y mantenible con las últimas tecnologías del ecosistema web.',
		items: ['React', 'Astro', 'Next.js', 'TypeScript'],
	},
	{
		title: 'Desarrollo Backend',
		description:
			'APIs robustas, bases de datos optimizadas y arquitecturas preparadas para escalar.',
		items: ['Node.js', 'Firebase', 'Supabase', 'MongoDB'],
	},
	{
		title: 'E-commerce',
		description:
			'Tiendas online listas para vender, con pasarela de pago, gestión de stock y envíos.',
		items: ['Stripe', 'Shopify', 'Carritos a medida'],
	},
	{
		title: 'SEO & Performance',
		description:
			'Webs que cargan en menos de un segundo y posicionan en Google desde el día uno.',
		items: ['Core Web Vitals', 'SEO técnico', 'Analítica'],
	},
	{
		title: 'Mantenimiento',
		description:
			'Tu web siempre actualizada, segura y funcionando. Tú céntrate en tu negocio.',
		items: ['Updates', 'Backups', 'Soporte 24/7'],
	},
];

export interface ProcessStep {
	number: string;
	title: string;
	description: string;
}

export const process: ProcessStep[] = [
	{
		number: '01',
		title: 'Descubrimiento',
		description:
			'Hablamos sobre tu negocio, tu público y tus objetivos. Sin compromiso, sin jargon. Entiendo qué necesitas antes de proponer nada.',
	},
	{
		number: '02',
		title: 'Estrategia',
		description:
			'Defino arquitectura, contenido y propuesta visual. Te presento un plan claro con plazos, presupuesto y entregables concretos.',
	},
	{
		number: '03',
		title: 'Diseño & Desarrollo',
		description:
			'Iteramos sobre el diseño y construyo con código a medida. Ves avances reales cada semana, no solo al final.',
	},
	{
		number: '04',
		title: 'Lanzamiento',
		description:
			'Pongo la web en producción, optimizo rendimiento, posiciono en Google y te entrego todo listo para funcionar.',
	},
	{
		number: '05',
		title: 'Crecimiento',
		description:
			'Te acompaño después del lanzamiento con mantenimiento, mejoras y nuevas funcionalidades según tu negocio crece.',
	},
];

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
	company: string;
}

export const testimonials: Testimonial[] = [
	{
		quote:
			'Dani transformó nuestra presencia online. La web no solo se ve increíble, sino que hemos aumentado mucho las reservas online en tres meses.',
		author: 'Cliente',
		role: 'Propietario',
		company: 'Gottan Grill',
	},
	{
		quote:
			'Profesional, rápido y con un ojo increíble para el detalle. Entendió nuestra visión desde el primer día y la llevó más allá de lo esperado.',
		author: 'Cliente',
		role: 'CEO',
		company: 'Barmanager',
	},
	{
		quote:
			'Después de trabajar con tres agencias, dimos con Daniel. La diferencia se nota en los pequeños detalles y en los resultados.',
		author: 'Cliente',
		role: 'Fundador',
		company: 'Moneyz',
	},
	{
		quote:
			'La web que Daniel nos diseñó ha supuesto un antes y un después. Las reservas directas se han duplicado y los clientes nos felicitan constantemente por lo fácil que es navegar.',
		author: 'Cliente',
		role: 'Directora',
		company: 'Hotel Nogalera',
	},
	{
		quote:
			'Necesitábamos una plataforma que funcionara desde el día uno y escalara sin problemas. Daniel entregó ambas cosas con un código limpio y un soporte post-lanzamiento impecable.',
		author: 'Cliente',
		role: 'CTO',
		company: 'Barmanager',
	},
	{
		quote:
			'Trabajar con Dani es fácil. Entiende lo que necesitas, propone soluciones mejores de las que habías imaginado y cumple plazos. Ya trabajamos con él en todos los proyectos nuevos.',
		author: 'Cliente',
		role: 'Fundadora',
		company: 'Seixis Cheesecakes',
	},
];

export interface StackItem {
	name: string;
	category: string;
}

export const stack: StackItem[] = [
	{ name: 'TypeScript', category: 'Lenguajes' },
	{ name: 'JavaScript', category: 'Lenguajes' },
	{ name: 'Python', category: 'Lenguajes' },
	{ name: 'SQL', category: 'Lenguajes' },
	{ name: 'HTML5', category: 'Lenguajes' },

	{ name: 'React', category: 'Frameworks' },
	{ name: 'Next.js', category: 'Frameworks' },
	{ name: 'Astro', category: 'Frameworks' },
	{ name: 'Remix', category: 'Frameworks' },
	{ name: 'Express', category: 'Frameworks' },

	{ name: 'Tailwind CSS', category: 'Estilos' },
	{ name: 'CSS Modules', category: 'Estilos' },
	{ name: 'Sass', category: 'Estilos' },
	{ name: 'Styled Components', category: 'Estilos' },
	{ name: 'Framer Motion', category: 'Estilos' },
	{ name: 'GSAP', category: 'Estilos' },

	{ name: 'Node.js', category: 'Runtime & Server' },
	{ name: 'Vercel', category: 'Runtime & Server' },
	{ name: 'Cloudflare Workers', category: 'Runtime & Server' },
	{ name: 'Edge Functions', category: 'Runtime & Server' },

	{ name: 'MongoDB', category: 'Bases de datos' },
	{ name: 'PostgreSQL', category: 'Bases de datos' },
	{ name: 'Firebase', category: 'Bases de datos' },
	{ name: 'Supabase', category: 'Bases de datos' },
	{ name: 'PlanetScale', category: 'Bases de datos' },
	{ name: 'Redis', category: 'Bases de datos' },

	{ name: 'Azure', category: 'Cloud & DevOps' },
	{ name: 'Vercel', category: 'Cloud & DevOps' },
	{ name: 'Cloudflare', category: 'Cloud & DevOps' },
	{ name: 'Docker', category: 'Cloud & DevOps' },
	{ name: 'GitHub Actions', category: 'Cloud & DevOps' },
	{ name: 'AWS S3', category: 'Cloud & DevOps' },

	{ name: 'OpenAI', category: 'IA & APIs' },
	{ name: 'Anthropic Claude', category: 'IA & APIs' },
	{ name: 'OpenCode', category: 'IA & APIs' },
	{ name: 'Stripe', category: 'IA & APIs' },
	{ name: 'Resend', category: 'IA & APIs' },
	{ name: 'Twilio', category: 'IA & APIs' },
	{ name: 'SendGrid', category: 'IA & APIs' },

	{ name: 'CrewAI', category: 'Agentes & Automatización' },
	{ name: 'LangChain', category: 'Agentes & Automatización' },
	{ name: 'n8n', category: 'Agentes & Automatización' },
	{ name: 'Make', category: 'Agentes & Automatización' },
	{ name: 'Zapier', category: 'Agentes & Automatización' },
	{ name: 'Automatización de proyectos', category: 'Agentes & Automatización' },

	{ name: 'Git', category: 'Herramientas' },
	{ name: 'VS Code', category: 'Herramientas' },
	{ name: 'Figma', category: 'Herramientas' },
	{ name: 'Notion', category: 'Herramientas' },
	{ name: 'Vite', category: 'Herramientas' },
	{ name: 'pnpm', category: 'Herramientas' },

	{ name: 'WordPress', category: 'CMS' },
	{ name: 'Strapi', category: 'CMS' },
	{ name: 'Sanity', category: 'CMS' },
	{ name: 'Payload CMS', category: 'CMS' },

	{ name: 'Electron', category: 'Desktop & Móvil' },
	{ name: 'React Native', category: 'Desktop & Móvil' },
	{ name: 'PWA', category: 'Desktop & Móvil' },
	{ name: 'Tauri', category: 'Desktop & Móvil' },
];
