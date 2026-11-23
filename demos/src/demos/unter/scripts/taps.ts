/**
 * Grifos de la home: al elegir una cerveza el vaso se vacía y se vuelve
 * a llenar con su color, y la ficha muestra medidas y precios.
 */
import { countryByCode, euro } from '../data/beers';

const FULL = 30; // y del nivel lleno (viewBox 0 0 120 200)
const EMPTY = 200;
const FOAM = 22;

export function initTaps(opts: { reduce: boolean; getLang: () => 'es' | 'en' }) {
	const list = document.querySelector<HTMLElement>('[data-taps]');
	const card = document.querySelector<HTMLElement>('[data-tapcard]');
	if (!list || !card) return;
	const buttons = [...list.querySelectorAll<HTMLButtonElement>('[data-tap]')];
	const beer = card.querySelector<SVGRectElement>('[data-beer]')!;
	const foam = card.querySelector<SVGRectElement>('[data-foam]')!;
	const $ = (sel: string) => card.querySelector<HTMLElement>(sel)!;

	let current = buttons.find((b) => b.getAttribute('aria-selected') === 'true') ?? buttons[0];
	let timer = 0;

	const level = (y: number, ms: number) => {
		const d = opts.reduce ? '0ms' : `${ms}ms`;
		beer.style.transitionDuration = d;
		foam.style.transitionDuration = d;
		beer.style.transform = `translateY(${y}px)`;
		foam.style.transform = `translateY(${Math.min(EMPTY, y - FOAM + 4)}px)`;
	};

	const fill = (btn: HTMLButtonElement) => {
		const lang = opts.getLang();
		const c = countryByCode[btn.dataset.country ?? ''];
		$('[data-tc-name]').textContent = btn.dataset.name ?? '';
		$('[data-tc-style]').textContent = (lang === 'en' ? btn.dataset.styleEn : btn.dataset.styleEs) ?? '';
		$('[data-tc-country]').textContent = c ? c.name[lang] : '';
		$('[data-tc-abv]').textContent = btn.dataset.abv ?? '';
		const prices = JSON.parse(btn.dataset.prices ?? '[]') as (number | null)[];
		card.querySelectorAll<HTMLElement>('[data-size]').forEach((li) => {
			const p = prices[Number(li.dataset.size)];
			li.classList.toggle('is-off', p == null);
			li.querySelector('[data-price]')!.textContent = p == null ? '—' : euro(p);
		});
		card.style.setProperty('--beer', btn.dataset.color ?? '#e8a83a');
		card.style.setProperty('--foam', btn.dataset.foam ?? '#f6efdf');
	};

	const select = (btn: HTMLButtonElement) => {
		if (btn === current) return;
		current = btn;
		buttons.forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
		clearTimeout(timer);
		card.classList.add('is-swapping');
		level(EMPTY, 380);
		timer = window.setTimeout(
			() => {
				fill(btn);
				card.classList.remove('is-swapping');
				level(FULL, 1100);
			},
			opts.reduce ? 0 : 420,
		);
	};

	buttons.forEach((b, i) => {
		b.addEventListener('click', () => select(b));
		b.addEventListener('keydown', (e) => {
			if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
			e.preventDefault();
			const n = buttons[(i + (e.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length];
			n.focus();
			select(n);
		});
	});
	window.addEventListener('unter:lang', () => fill(current));

	// Llenado inicial cuando el vaso entra en pantalla
	level(EMPTY, 0);
	const io = new IntersectionObserver(
		(entries) => {
			if (!entries[0].isIntersecting) return;
			io.disconnect();
			level(FULL, 1400);
		},
		{ threshold: 0.4 },
	);
	io.observe(card);
}
