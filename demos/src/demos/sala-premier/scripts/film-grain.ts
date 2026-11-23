/**
 * Textura de película antigua sobre un <canvas> 2D, a 24 fotogramas por segundo:
 * grano, parpadeo de exposición, rayas verticales que duran unos fotogramas y motas de polvo/pelos.
 * `amount` (0..1) regula la intensidad; `onFrame` permite sincronizar el "gate weave" del proyector.
 */

export interface FilmGrain {
	amount: number;
	destroy(): void;
}

const FPS = 24;

export function createFilmGrain(canvas: HTMLCanvasElement, onFrame?: () => void): FilmGrain | null {
	const ctx = canvas.getContext('2d');
	if (!ctx) return null;

	// Teselas de ruido pregeneradas (más barato que ruido nuevo cada fotograma)
	const tiles = Array.from({ length: 5 }, () => {
		const t = document.createElement('canvas');
		t.width = t.height = 160;
		const c = t.getContext('2d')!;
		const img = c.createImageData(160, 160);
		for (let i = 0; i < img.data.length; i += 4) {
			const v = Math.random() * 255;
			img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
			img.data[i + 3] = 34 + Math.random() * 40;
		}
		c.putImageData(img, 0, 0);
		return ctx.createPattern(t, 'repeat')!;
	});

	type Scratch = { x: number; life: number; w: number; a: number; light: boolean; drift: number };
	let scratches: Scratch[] = [];
	const state: FilmGrain = { amount: 1, destroy };
	let raf = 0;
	let last = 0;
	let frame = 0;
	let w = 0;
	let h = 0;

	const resize = () => {
		// a media resolución: el grano queda más gordo, como en celuloide
		w = canvas.width = Math.max(1, Math.round(canvas.clientWidth / 2));
		h = canvas.height = Math.max(1, Math.round(canvas.clientHeight / 2));
	};
	const ro = new ResizeObserver(resize);
	ro.observe(canvas);
	resize();

	const rnd = (a: number, b: number) => a + Math.random() * (b - a);

	const draw = () => {
		const k = state.amount;
		ctx.clearRect(0, 0, w, h);
		if (k <= 0.001) return;

		// parpadeo de exposición
		const fl = Math.random();
		ctx.fillStyle = fl > 0.5 ? `rgba(255, 236, 200, ${(fl - 0.5) * 0.14 * k})` : `rgba(0, 0, 0, ${(0.5 - fl) * 0.22 * k})`;
		ctx.fillRect(0, 0, w, h);

		// grano
		ctx.save();
		ctx.globalAlpha = 0.9 * k;
		ctx.translate(rnd(-80, 0), rnd(-80, 0));
		ctx.fillStyle = tiles[frame % tiles.length];
		ctx.fillRect(0, 0, w + 160, h + 160);
		ctx.restore();

		// rayas verticales: nacen, se desplazan un poco y mueren tras unos fotogramas
		if (Math.random() < 0.22) {
			scratches.push({ x: rnd(0.05, 0.95) * w, life: Math.round(rnd(3, 14)), w: rnd(0.5, 1.4), a: rnd(0.25, 0.6), light: Math.random() < 0.6, drift: rnd(-0.6, 0.6) });
		}
		scratches = scratches.filter((s) => s.life-- > 0);
		for (const s of scratches) {
			s.x += s.drift;
			ctx.strokeStyle = s.light ? `rgba(255, 246, 225, ${s.a * k})` : `rgba(20, 12, 6, ${s.a * k})`;
			ctx.lineWidth = s.w;
			ctx.beginPath();
			const y0 = Math.random() < 0.3 ? rnd(0, h * 0.5) : 0;
			ctx.moveTo(s.x, y0);
			ctx.lineTo(s.x + rnd(-1, 1), y0 + (h - y0) * rnd(0.6, 1));
			ctx.stroke();
		}

		// polvo y algún pelo
		const n = Math.floor(rnd(0, 4));
		for (let i = 0; i < n; i++) {
			const x = rnd(0, w);
			const y = rnd(0, h);
			const dark = Math.random() < 0.75;
			ctx.fillStyle = ctx.strokeStyle = dark ? `rgba(15, 9, 5, ${0.7 * k})` : `rgba(255, 246, 225, ${0.6 * k})`;
			if (Math.random() < 0.12) {
				ctx.lineWidth = 0.8;
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x + rnd(-14, 14), y + rnd(-14, 14), x + rnd(-22, 22), y + rnd(-22, 22));
				ctx.stroke();
			} else {
				ctx.beginPath();
				ctx.ellipse(x, y, rnd(0.6, 2.2), rnd(0.6, 1.8), rnd(0, Math.PI), 0, Math.PI * 2);
				ctx.fill();
			}
		}
	};

	const loop = (now: number) => {
		raf = requestAnimationFrame(loop);
		if (now - last < 1000 / FPS) return;
		last = now;
		frame++;
		draw();
		onFrame?.();
	};
	raf = requestAnimationFrame(loop);

	function destroy() {
		cancelAnimationFrame(raf);
		ro.disconnect();
	}

	return state;
}
