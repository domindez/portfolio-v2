import type { ImageMetadata } from 'astro';
import imgFachada from '../../../assets/demos/sala-premier/fachada-centro.jpg';
import imgVentana from '../../../assets/demos/sala-premier/ventana-reloj.jpg';
import imgAmb4 from '../../../assets/demos/sala-premier/ambiente-4.jpg';
import imgAmb5 from '../../../assets/demos/sala-premier/ambiente-5.jpg';

export const venuePhotos: Record<string, { img: ImageMetadata; alt: string }> = {
	centro: { img: imgFachada, alt: 'Fachada iluminada de Premier Centro con la Catedral de Málaga al fondo' },
	teatinos: { img: imgAmb4, alt: 'Pareja brindando junto al piano en Premier Teatinos' },
	huelin: { img: imgVentana, alt: 'Rincón con ventana redonda y reloj antiguo en Premier Huelin' },
	granada: { img: imgAmb5, alt: 'Dos amigas en un palco tapizado de Premier Granada' },
};
