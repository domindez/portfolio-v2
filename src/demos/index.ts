/**
 * Registro de demos comerciales (/demo/[slug]).
 *
 * Cada demo es un diseño a medida para un negocio concreto. Para añadir una:
 *   1. Crea src/demos/<slug>/ con su página (y opcionalmente su carta).
 *   2. Regístrala aquí.
 * Las rutas no se enlazan desde la web, llevan noindex y están fuera del sitemap.
 */
import ShanaoHome from './shanao/ShanaoHome.astro';
import ShanaoCarta from './shanao/ShanaoCarta.astro';

export interface Demo {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Page: (props: any) => any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Carta?: (props: any) => any;
}

export const demos: Record<string, Demo> = {
	shanao: { name: 'Shanao Café', Page: ShanaoHome, Carta: ShanaoCarta },
};
