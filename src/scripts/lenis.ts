import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function initLenis() {
	if (lenisInstance) return lenisInstance;

	const lenis = new Lenis({
		duration: 1.2,
		easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		orientation: 'vertical',
		smoothWheel: true,
		wheelMultiplier: 1,
		touchMultiplier: 1.4,
		infinite: false,
	});

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	document.documentElement.classList.add('lenis');

	// Anchor links
	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
		link.addEventListener('click', (e) => {
			const href = link.getAttribute('href');
			if (!href || href === '#') return;
			const target = document.querySelector(href);
			if (!target) return;
			e.preventDefault();
			lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.5 });
		});
	});

	lenisInstance = lenis;
	return lenis;
}
