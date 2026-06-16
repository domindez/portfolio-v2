export interface Work {
	slug: string;
	link: string;
	img: string;
	title: string;
	category: string;
	description: string;
	stack: string[];
	year: string;
}

export const works: Work[] = [
	{
		slug: 'gottan',
		link: 'https://gottangrill.com',
		img: '/works/gottan.webp',
		title: 'Gottan Grill',
		category: 'Restauración',
		description:
			'Web de la hamburguesería galardonada con la mejor burger de España y Europa en 2024. Diseño atrevido y rendimiento top.',
		stack: ['astro', 'ts', 'tailwind'],
		year: '2024',
	},
	{
		slug: 'hotel-nogalera',
		link: 'https://hotelnogalera.com/',
		img: '/works/nogalera.webp',
		title: 'Hotel Nogalera',
		category: 'Hostelería',
		description: 'Web del hotel con motor de reservas integrado y panel de gestión interno.',
		stack: ['astro', 'ts', 'tailwind'],
		year: '2024',
	},
	{
		slug: 'zerobil',
		link: 'https://www.zerobil.com',
		img: '/works/zerobil.webp',
		title: 'Zerobil',
		category: 'SaaS',
		description:
			'Plataforma de facturación, CRM y contabilidad con IA para autónomos y pequeñas empresas.',
		stack: ['next', 'react', 'mongo', 'ts', 'openai'],
		year: '2024',
	},
	{
		slug: 'bsmash',
		link: 'https://bsmash.es',
		img: '/works/bsmash.webp',
		title: 'BSmash',
		category: 'Restauración',
		description: 'Web con menú digital propio, reservas y pedidos a domicilio.',
		stack: ['astro', 'tailwind', 'ts'],
		year: '2023',
	},
	{
		slug: 'roadhouse',
		link: 'https://roadhousegroup.es/es',
		img: '/works/roadhouse.webp',
		title: 'Grupo RoadHouse',
		category: 'Restauración',
		description: 'Web del grupo con menús digitales, reservas y delivery multi-sede.',
		stack: ['astro', 'ts', 'css'],
		year: '2023',
	},
	{
		slug: 'barmanager',
		link: 'https://barmanager.app',
		img: '/works/barmanager.webp',
		title: 'Barmanager.app',
		category: 'SaaS',
		description:
			'Plataforma para gestionar bares y restaurantes con Stripe, reservas y pedidos integrados.',
		stack: ['next', 'react', 'firebase', 'mongo', 'ts', 'azure'],
		year: '2024',
	},
	{
		slug: 'dak-burger',
		link: 'https://dakburger.es/',
		img: '/works/dak.webp',
		title: 'Dak Burger',
		category: 'Restauración',
		description: 'Web con menú digital, sistema de delivery y reservas.',
		stack: ['react', 'ts', 'next', 'css'],
		year: '2023',
	},
	{
		slug: 'critical-miss',
		link: 'https://criticalmiss.app',
		img: '/works/criticalmiss.webp',
		title: 'Critical Miss',
		category: 'Web App',
		description:
			'Compendio de reglas de D&D con herramientas para crear personajes y lanzar dados virtuales.',
		stack: ['astro', 'ts', 'tailwind', 'react'],
		year: '2024',
	},
	{
		slug: 'hotel-nch',
		link: 'https://www.hotelnch.com/',
		img: '/works/nch.webp',
		title: 'Hotel NCH',
		category: 'Hostelería',
		description: 'Web con motor de reservas integrado.',
		stack: ['wordpress', 'js', 'css'],
		year: '2022',
	},
	{
		slug: 'asador-ovidio',
		link: 'https://www.asadorovidio.es/',
		img: '/works/ovidio.webp',
		title: 'Asador Ovidio',
		category: 'Restauración',
		description: 'Web del prestigioso asador con menú digital y reservas.',
		stack: ['astro', 'ts', 'css'],
		year: '2023',
	},
	{
		slug: 'moneyz',
		link: 'https://www.moneyz.app',
		img: '/works/moneyz.webp',
		title: 'Moneyz',
		category: 'Fintech',
		description: 'Tracker de portfolios de inversión con visualizaciones claras y directas.',
		stack: ['next', 'supabase', 'tailwind', 'react', 'ts'],
		year: '2024',
	},
	{
		slug: 'politichance',
		link: 'https://politichance.com',
		img: '/works/politichance.webp',
		title: 'Politichance',
		category: 'Plataforma',
		description: 'Mercados de predicción política y económica en tiempo real.',
		stack: ['astro', 'tailwind', 'ts'],
		year: '2024',
	},
	{
		slug: 'seixis',
		link: 'https://www.seixis.es/',
		img: '/works/seixis.webp',
		title: 'Seixis',
		category: 'E-commerce',
		description: 'Web de las cheesecakes más virales de España con pedidos a domicilio.',
		stack: ['astro', 'ts', 'css'],
		year: '2023',
	},
	{
		slug: 'trivify',
		link: 'https://trivify.es',
		img: '/works/trivify.webp',
		title: 'Trivify',
		category: 'Plataforma',
		description: 'Plataforma de trivials con CRM propio y marketing por email.',
		stack: ['react', 'js', 'mongo', 'electron', 'express'],
		year: '2022',
	},
	{
		slug: 'maria-contreras',
		link: 'https://mariacontreraspsicologa.com/',
		img: '/works/mariacontreras.webp',
		title: 'María Contreras',
		category: 'Profesional',
		description: 'Web profesional para consulta de psicología.',
		stack: ['astro', 'ts', 'css'],
		year: '2024',
	},
	{
		slug: 'pluviometria',
		link: 'https://domindez.github.io/pluviometria-castillodelocubin/',
		img: '/works/pluviometria.webp',
		title: 'Pluviometría Castillo',
		category: 'Datos',
		description: 'Web que automatiza la recolección de datos de una estación meteorológica.',
		stack: ['react', 'js', 'css', 'mongo'],
		year: '2022',
	},
	{
		slug: 'tombolator',
		link: 'https://tombolator.com',
		img: '/works/tombolator.webp',
		title: 'Tombolator',
		category: 'Plataforma',
		description: 'Plataforma para crear y jugar tómbolas digitales con gestión de premios.',
		stack: ['next', 'ts', 'react', 'mongo', 'firebase'],
		year: '2023',
	},
	{
		slug: 'playabingo',
		link: 'https://playabingo.com',
		img: '/works/playabingo.webp',
		title: 'Playabingo',
		category: 'Plataforma',
		description: 'Bingo online multijugador para eventos y reuniones.',
		stack: ['astro', 'ts', 'react'],
		year: '2023',
	},
	{
		slug: 'apartamentos',
		link: '#',
		img: '/works/apartamentos.webp',
		title: 'Apartamentos Luz',
		category: 'Hostelería',
		description: 'Web de apartamentos turísticos con motor de reservas y galería inmersiva.',
		stack: ['astro', 'ts', 'tailwind'],
		year: '2024',
	},
	{
		slug: 'placeholder',
		link: '#',
		img: '/works/placeholder.webp',
		title: 'Estudio Marca',
		category: 'Branding',
		description: 'Identidad digital completa para estudio de arquitectura boutique.',
		stack: ['astro', 'css', 'ts'],
		year: '2023',
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
			'Daniel transformó nuestra presencia online. La web no solo se ve increíble, sino que hemos triplicado las reservas online en tres meses.',
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
	{ name: 'Vue', category: 'Frameworks' },
	{ name: 'Svelte', category: 'Frameworks' },
	{ name: 'Express', category: 'Frameworks' },
	{ name: 'Hono', category: 'Frameworks' },

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
	{ name: 'Stripe', category: 'IA & APIs' },
	{ name: 'Resend', category: 'IA & APIs' },
	{ name: 'Twilio', category: 'IA & APIs' },
	{ name: 'SendGrid', category: 'IA & APIs' },

	{ name: 'Git', category: 'Herramientas' },
	{ name: 'VS Code', category: 'Herramientas' },
	{ name: 'Figma', category: 'Herramientas' },
	{ name: 'Linear', category: 'Herramientas' },
	{ name: 'Notion', category: 'Herramientas' },
	{ name: 'Vite', category: 'Herramientas' },
	{ name: 'Turborepo', category: 'Herramientas' },
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
