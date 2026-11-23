/**
 * Promesa que se resuelve cuando la página ya tiene sus fuentes (o a los 1,5 s como máximo).
 * La crea el script inline de DemoLayout, que mantiene la página invisible hasta entonces.
 * Cada demo hace `await fontsReady()` al principio de su script principal para que las
 * animaciones de entrada arranquen justo cuando la página se hace visible.
 */
export function fontsReady(): Promise<void> {
	return (window as unknown as { demoFontsReady?: Promise<void> }).demoFontsReady ?? Promise.resolve();
}
