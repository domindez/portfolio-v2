/**
 * Begobé — utilidades compartidas por la home y la carta.
 * Todas las clases que se añaden a <html> llevan el prefijo "bgb-" (ver CLAUDE.md).
 */

export type Lang = 'es' | 'en';

/** Horario por local, en minutos desde medianoche (hora de Madrid). */
const HOURS: Record<string, { open: number; close: number; label: string }> = {
	torremolinos: { open: 8 * 60, close: 22 * 60 + 30, label: '22:30' },
	soho: { open: 8 * 60, close: 19 * 60 + 30, label: '19:30' },
};

export function madridMinutes(): number {
	const parts = new Intl.DateTimeFormat('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
	const h = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
	const m = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
	return (h % 24) * 60 + m;
}

export const getLang = (): Lang => (document.documentElement.dataset.lang === 'en' ? 'en' : 'es');

export function isOpen(venue: string, now = madridMinutes()): boolean {
	const h = HOURS[venue];
	return !!h && now >= h.open && now < h.close;
}

/** Pinta "Abierto · hasta las 22:30" en cada [data-open-status][data-venue]. */
export function updateOpenStatus() {
	const now = madridMinutes();
	const en = getLang() === 'en';
	document.querySelectorAll<HTMLElement>('[data-open-status]').forEach((el) => {
		const h = HOURS[el.dataset.venue ?? ''];
		if (!h) return;
		const open = now >= h.open && now < h.close;
		let text: string;
		if (open) {
			const left = h.close - now;
			text = left <= 45 ? (en ? `Open · closes in ${left} min` : `Abierto · cierra en ${left} min`) : en ? `Open now · until ${h.label}` : `Abierto · hasta las ${h.label}`;
		} else {
			const until = (h.open - now + 1440) % 1440;
			text = until <= 60 ? (en ? `Opens in ${until} min` : `Abrimos en ${until} min`) : en ? 'Closed · opens at 8:00' : 'Cerrado · abrimos a las 8:00';
		}
		el.dataset.open = String(open);
		const t = el.querySelector('[data-open-text]');
		if (t) t.textContent = text;
	});
}

/** Selector ES/EN: recuerda la elección y avisa al resto de scripts. */
export function initLang(onChange?: (l: Lang) => void) {
	const root = document.documentElement;
	const set = (l: Lang) => {
		root.dataset.lang = l;
		root.lang = l;
		try {
			localStorage.setItem('begobe-lang', l);
		} catch {
			/* modo privado */
		}
		document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setLang === l)));
		updateOpenStatus();
		onChange?.(l);
		window.dispatchEvent(new CustomEvent('bgb:lang', { detail: l }));
	};
	document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((b) => b.addEventListener('click', () => set(b.dataset.setLang as Lang)));
	set(getLang());
}

/** Barra: sombra al bajar y se esconde al hacer scroll hacia abajo. */
export function initNav() {
	const nav = document.querySelector<HTMLElement>('[data-nav]');
	if (!nav) return;
	if (nav.hasAttribute('data-solid')) return;
	let lastY = window.scrollY;
	const onScroll = () => {
		const y = window.scrollY;
		nav.classList.toggle('is-scrolled', y > 20);
		if (document.documentElement.classList.contains('bgb-menu-open')) return;
		if (y > 420 && y > lastY + 4) nav.classList.add('is-hidden');
		else if (y < lastY - 4 || y <= 420) nav.classList.remove('is-hidden');
		lastY = y;
	};
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
}

/** Menú móvil a pantalla completa. */
export function initMenu() {
	const root = document.documentElement;
	const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
	const panel = document.querySelector<HTMLElement>('[data-menu]');
	if (!btn || !panel) return;
	const set = (open: boolean) => {
		root.classList.toggle('bgb-menu-open', open);
		if (open) document.querySelector('[data-nav]')?.classList.remove('is-hidden');
		btn.setAttribute('aria-expanded', String(open));
		panel.toggleAttribute('inert', !open);
		panel.setAttribute('aria-hidden', String(!open));
	};
	set(false);
	btn.addEventListener('click', () => set(!root.classList.contains('bgb-menu-open')));
	panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
	document.addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
	window.matchMedia('(min-width: 1001px)').addEventListener('change', (e) => e.matches && set(false));
}

/** Desplegable "Ver carta" para elegir local. */
export function initPickers() {
	document.querySelectorAll<HTMLElement>('[data-picker]').forEach((wrap) => {
		const btn = wrap.querySelector<HTMLButtonElement>('[data-picker-btn]');
		if (!btn) return;
		const set = (open: boolean) => {
			wrap.classList.toggle('is-open', open);
			btn.setAttribute('aria-expanded', String(open));
		};
		btn.addEventListener('click', (e) => {
			e.stopPropagation();
			set(!wrap.classList.contains('is-open'));
		});
		document.addEventListener('click', (e) => !wrap.contains(e.target as Node) && set(false));
		document.addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
	});
}

export function initCommon() {
	initLang();
	initNav();
	initMenu();
	initPickers();
	updateOpenStatus();
	setInterval(updateOpenStatus, 60_000);
}

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
