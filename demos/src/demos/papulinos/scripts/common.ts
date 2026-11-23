/**
 * Papulinos — utilidades compartidas por la home y la carta.
 * Todas las clases que se añaden a <html> llevan el prefijo "pp-" (ver CLAUDE.md).
 */

export type Lang = 'es' | 'en';

export const getLang = (): Lang => (document.documentElement.dataset.lang === 'en' ? 'en' : 'es');
export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Minutos desde medianoche y día de la semana en Madrid. */
export function madridNow(): { min: number; day: number } {
	const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', weekday: 'short', hour12: false }).formatToParts(new Date());
	const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return { min: (Number(get('hour')) % 24) * 60 + Number(get('minute')), day: Math.max(0, days.indexOf(get('weekday'))) };
}

interface Hours {
	s: [number, number][];
	c: number[];
}
const hhmm = (m: number) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
const DAYS = {
	es: ['el domingo', 'el lunes', 'el martes', 'el miércoles', 'el jueves', 'el viernes', 'el sábado'],
	en: ['on Sunday', 'on Monday', 'on Tuesday', 'on Wednesday', 'on Thursday', 'on Friday', 'on Saturday'],
};

/** Calcula el estado de un local: abierto/cerrado y el texto a mostrar. */
export function statusFor(h: Hours, lang: Lang, now = madridNow()): { open: boolean; text: string } {
	const en = lang === 'en';
	const openToday = !h.c.includes(now.day);
	if (openToday) {
		const cur = h.s.find(([a, z]) => now.min >= a && now.min < z);
		if (cur) {
			const left = cur[1] - now.min;
			return { open: true, text: left <= 45 ? (en ? `Open · closes in ${left} min` : `Abierto · cierra en ${left} min`) : en ? `Open · until ${hhmm(cur[1])}` : `Abierto · hasta las ${hhmm(cur[1])}` };
		}
		const next = h.s.find(([a]) => a > now.min);
		if (next) {
			const until = next[0] - now.min;
			return { open: false, text: until <= 60 ? (en ? `Opens in ${until} min` : `Abrimos en ${until} min`) : en ? `Closed · opens at ${hhmm(next[0])}` : `Cerrado · abrimos a las ${hhmm(next[0])}` };
		}
	}
	// Próximo día abierto
	for (let i = 1; i <= 7; i++) {
		const day = (now.day + i) % 7;
		if (h.c.includes(day)) continue;
		const at = hhmm(h.s[0][0]);
		const when = i === 1 ? (en ? 'tomorrow' : 'mañana') : DAYS[lang][day];
		return { open: false, text: en ? `Closed · opens ${when} at ${at}` : `Cerrado · abrimos ${when} a las ${at}` };
	}
	return { open: false, text: en ? 'Closed' : 'Cerrado' };
}

/** Pinta el estado en cada [data-open-status][data-hours]. */
export function updateOpenStatus() {
	const lang = getLang();
	const now = madridNow();
	document.querySelectorAll<HTMLElement>('[data-open-status]').forEach((el) => {
		let h: Hours;
		try {
			h = JSON.parse(el.dataset.hours ?? '');
		} catch {
			return;
		}
		const st = statusFor(h, lang, now);
		el.dataset.open = String(st.open);
		const t = el.querySelector('[data-open-text]');
		if (t) t.textContent = st.text;
	});
}

/** Selector ES/EN: recuerda la elección y avisa al resto de scripts. */
export function initLang() {
	const root = document.documentElement;
	const set = (l: Lang) => {
		root.dataset.lang = l;
		root.lang = l;
		try {
			localStorage.setItem('papulinos-lang', l);
		} catch {
			/* modo privado */
		}
		document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setLang === l)));
		updateOpenStatus();
		window.dispatchEvent(new CustomEvent('pp:lang', { detail: l }));
	};
	document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((b) => b.addEventListener('click', () => set(b.dataset.setLang as Lang)));
	set(getLang());
}

/** Barra: siempre visible; solo marca una sombra al bajar. */
export function initNav() {
	const nav = document.querySelector<HTMLElement>('[data-nav]');
	if (!nav) return;
	const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
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
		root.classList.toggle('pp-menu-open', open);
		btn.setAttribute('aria-expanded', String(open));
		panel.toggleAttribute('inert', !open);
		panel.setAttribute('aria-hidden', String(!open));
	};
	set(false);
	btn.addEventListener('click', () => set(!root.classList.contains('pp-menu-open')));
	panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
	document.addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
	window.matchMedia('(min-width: 1001px)').addEventListener('change', (e) => e.matches && set(false));
}

/** Desplegables "Ver la carta". */
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
			const willOpen = !wrap.classList.contains('is-open');
			document.querySelectorAll('[data-picker].is-open').forEach((o) => o !== wrap && o.classList.remove('is-open'));
			set(willOpen);
		});
		document.addEventListener('click', (e) => !wrap.contains(e.target as Node) && set(false));
		document.addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
	});
}

/** Aparición suave de los elementos [data-reveal]. */
export function initReveal() {
	const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
	if (!('IntersectionObserver' in window) || reducedMotion()) {
		els.forEach((el) => el.classList.add('is-in'));
		return;
	}
	const io = new IntersectionObserver(
		(entries) =>
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add('is-in');
					io.unobserve(e.target);
				}
			}),
		{ rootMargin: '0px 0px -8% 0px' },
	);
	els.forEach((el) => io.observe(el));
}

/** Chispas de brasa que suben en un <canvas data-embers>. */
export function initEmbers() {
	const canvas = document.querySelector<HTMLCanvasElement>('[data-embers]');
	if (!canvas || reducedMotion()) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	let w = 0;
	let h = 0;
	const dpr = Math.min(window.devicePixelRatio || 1, 2);
	const resize = () => {
		w = canvas.clientWidth;
		h = canvas.clientHeight;
		canvas.width = w * dpr;
		canvas.height = h * dpr;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	};
	resize();
	window.addEventListener('resize', resize);
	type P = { x: number; y: number; vx: number; vy: number; r: number; life: number; max: number; hue: number; ph: number };
	const count = w < 700 ? 22 : 46;
	const spawn = (p?: P): P => {
		const x = (w < 700 ? Math.random() : 0.3 + Math.random() * 0.7) * w;
		return Object.assign(p ?? ({} as P), {
			x,
			y: h * (0.9 + Math.random() * 0.2),
			vx: (Math.random() - 0.3) * 0.25,
			vy: -(0.35 + Math.random() * 0.7),
			r: 0.6 + Math.random() * 1.1,
			life: 0,
			max: 260 + Math.random() * 280,
			hue: 8 + Math.random() * 26,
			ph: Math.random() * 100,
		});
	};
	const ps: P[] = Array.from({ length: count }, () => {
		const p = spawn();
		p.life = Math.random() * p.max;
		p.y = h - (p.life / p.max) * h * 0.8;
		return p;
	});
	let visible = true;
	new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(canvas);
	let t = 0;
	const tick = () => {
		requestAnimationFrame(tick);
		if (!visible || document.hidden) return;
		t += 1;
		ctx.clearRect(0, 0, w, h);
		for (const p of ps) {
			p.life += 1;
			p.x += p.vx + Math.sin((p.life + p.ph) / 30) * 0.4;
			p.y += p.vy;
			const k = p.life / p.max;
			if (k >= 1 || p.y < -10) {
				spawn(p);
				continue;
			}
			// Nace de golpe, se apaga poco a poco y parpadea como una brasa
			const fade = k < 0.08 ? k / 0.08 : Math.pow(1 - k, 1.4);
			const flick = 0.75 + 0.25 * Math.sin((t + p.ph * 5) / 5);
			const a = fade * flick;
			// Del amarillo anaranjado al rojo oscuro al enfriarse
			const light = 70 - k * 30;
			ctx.fillStyle = `hsla(${p.hue}, 100%, ${light}%, ${a * 0.18})`;
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.r * 2.6, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = `hsla(${p.hue + 8}, 100%, ${light + 12}%, ${a})`;
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fill();
		}
	};
	tick();
}

export function initCommon() {
	initLang();
	initNav();
	initMenu();
	initPickers();
	initReveal();
	updateOpenStatus();
	setInterval(updateOpenStatus, 60_000);
	document.documentElement.classList.add('pp-ready');
}
