import Lenis from 'lenis';

/** Abierto todos los días de 12:00 a 00:30 (hora de Madrid). */
const OPEN = 12 * 60;
const CLOSE = 30; // 00:30 del día siguiente

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

export const getLang = (): 'es' | 'en' => (document.documentElement.dataset.lang === 'en' ? 'en' : 'es');

export function updateOpenStatus() {
	const now = madridMinutes();
	const open = now >= OPEN || now < CLOSE;
	const en = getLang() === 'en';
	let text: string;
	if (open) {
		const left = now >= OPEN ? 24 * 60 + CLOSE - now : CLOSE - now;
		if (left <= 60) text = en ? `Open · last call in ${left} min` : `Abierto · últimas en ${left} min`;
		else text = en ? 'Open now · until 00:30' : 'Abierto ahora · hasta las 00:30';
	} else {
		const until = OPEN - now;
		text = until <= 90 ? (en ? `Opens in ${until} min` : `Abrimos en ${until} min`) : en ? 'Closed · opens at 12:00' : 'Cerrado · abrimos a las 12:00';
	}
	document.querySelectorAll<HTMLElement>('[data-open-status]').forEach((el) => {
		el.dataset.open = String(open);
		const t = el.querySelector('[data-open-text]');
		if (t) t.textContent = text;
	});
}

/** Selector ES/EN: recuerda la elección y avisa al resto de scripts. */
export function initLang() {
	const root = document.documentElement;
	const set = (l: 'es' | 'en') => {
		root.dataset.lang = l;
		root.lang = l;
		try {
			localStorage.setItem('unter-lang', l);
		} catch {
			/* modo privado */
		}
		document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setLang === l)));
		updateOpenStatus();
		window.dispatchEvent(new CustomEvent('unter:lang', { detail: l }));
	};
	document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((b) => b.addEventListener('click', () => set(b.dataset.setLang as 'es' | 'en')));
	set(getLang());
}

export function initNav() {
	const nav = document.querySelector<HTMLElement>('[data-nav]');
	let lastY = window.scrollY;
	const onScroll = () => {
		const y = window.scrollY;
		nav?.classList.toggle('is-scrolled', y > 30);
		if (y > 500 && y > lastY + 4) nav?.classList.add('is-hidden');
		else if (y < lastY - 4 || y <= 500) nav?.classList.remove('is-hidden');
		lastY = y;
	};
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
}

export function initLenis(): Lenis | null {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
	const lenis = new Lenis({ duration: 1.1, smoothWheel: true, touchMultiplier: 1.3 });
	document.documentElement.classList.add('lenis');
	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
		a.addEventListener('click', (e) => {
			const id = a.getAttribute('href');
			if (!id || id === '#') return;
			const target = document.querySelector<HTMLElement>(id);
			if (!target) return;
			e.preventDefault();
			lenis.scrollTo(target, { offset: -70, duration: 1.4 });
		});
	});
	return lenis;
}

export function initCommon() {
	initLang();
	initNav();
	updateOpenStatus();
	setInterval(updateOpenStatus, 60_000);
}
