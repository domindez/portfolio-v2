import Lenis from 'lenis';

/** Abierto todos los días 8:00–20:30 (hora de Madrid). */
const OPEN = 8 * 60;
const CLOSE = 20 * 60 + 30;

function madridMinutes(): number {
	const parts = new Intl.DateTimeFormat('es-ES', {
		timeZone: 'Europe/Madrid',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	}).formatToParts(new Date());
	const h = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
	const m = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
	return (h % 24) * 60 + m;
}

export function updateOpenStatus() {
	const now = madridMinutes();
	const open = now >= OPEN && now < CLOSE;
	const lang = document.documentElement.dataset.lang === 'en' ? 'en' : 'es';
	let text: string;
	if (open) {
		const left = CLOSE - now;
		if (lang === 'en') text = left <= 60 ? `Open now · closes in ${left} min` : 'Open now · until 20:30';
		else text = left <= 60 ? `Abierto · cierra en ${left} min` : 'Abierto ahora · hasta las 20:30';
	} else {
		text = lang === 'en' ? 'Closed · opens at 8:00' : 'Cerrado · abrimos a las 8:00';
	}
	document.querySelectorAll<HTMLElement>('[data-open-status]').forEach((el) => {
		el.dataset.open = String(open);
		const t = el.querySelector('[data-open-text]');
		if (t) t.textContent = text;
	});
}

export function initShanaoCommon(): Lenis | null {
	updateOpenStatus();
	setInterval(updateOpenStatus, 60_000);

	// Nav: estado "scrolled" + se oculta al bajar y aparece al subir
	const nav = document.querySelector<HTMLElement>('[data-nav]');
	let lastY = window.scrollY;
	const onScroll = () => {
		const y = window.scrollY;
		nav?.classList.toggle('is-scrolled', y > 20);
		if (y > 400 && y > lastY + 4) nav?.classList.add('is-hidden');
		else if (y < lastY - 4 || y <= 400) nav?.classList.remove('is-hidden');
		lastY = y;
	};
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce) return null;

	const lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.3 });
	const raf = (t: number) => {
		lenis.raf(t);
		requestAnimationFrame(raf);
	};
	requestAnimationFrame(raf);
	document.documentElement.classList.add('lenis');

	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
		a.addEventListener('click', (e) => {
			const id = a.getAttribute('href');
			if (!id || id === '#') return;
			const target = document.querySelector<HTMLElement>(id);
			if (!target) return;
			e.preventDefault();
			lenis.scrollTo(target, { offset: -90, duration: 1.4 });
		});
	});
	return lenis;
}
