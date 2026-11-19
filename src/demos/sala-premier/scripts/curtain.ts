/**
 * Telón de terciopelo en WebGL (sin dependencias).
 *
 * Todo se genera en un fragment shader a pantalla completa:
 *  - Dos paños con pliegues irregulares, sombreado de terciopelo (luz difusa + brillo rasante)
 *    y oclusión en los valles. Al abrirse (uOpen 0→1) se recogen hacia los lados con forma
 *    de telón atado: estrecho a la altura del alzapaño y con el bajo arrastrando un poco.
 *  - Bambalina superior con festones, cascadas en las uniones, galón dorado y flecos.
 *  - Bajo de los paños con galón y flecos dorados.
 *  - Sombra proyectada sobre el escenario.
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uDpr;
uniform float uTime;
uniform float uOpen;

const float PI = 3.14159265;
const float TAU = 6.2831853;

const vec3 RED_D = vec3(0.13, 0.005, 0.015);
const vec3 RED   = vec3(0.56, 0.035, 0.06);
const vec3 RED_H = vec3(0.98, 0.32, 0.30);
const vec3 GOLD_D = vec3(0.36, 0.24, 0.08);
const vec3 GOLD   = vec3(0.82, 0.63, 0.30);
const vec3 GOLD_H = vec3(1.00, 0.90, 0.62);

float hash(vec2 p) {
	p = fract(p * vec2(123.34, 456.21));
	p += dot(p, p + 45.32);
	return fract(p.x * p.y);
}
float noise(vec2 p) {
	vec2 i = floor(p), f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

// Perfil de pliegues: crestas redondeadas, valles más cerrados, irregulares.
float pleat(float s, float y, float seed) {
	float w = s + 0.22 * sin(s * 0.73 + seed) + 0.32 * (noise(vec2(s * 0.31 + seed, y * 0.0012)) - 0.5);
	float h = 0.5 + 0.5 * cos(w * TAU);
	h = 1.0 - pow(1.0 - h, 1.7);
	h += 0.10 * sin(w * 2.0 * TAU + 1.7 + y * 0.0015);
	return h;
}

// Terciopelo: difusa + brillo rasante (el pelo del terciopelo brilla en los bordes) + oclusión.
vec3 velvet(vec3 n, float ao, vec3 L) {
	float ndl = max(dot(n, L), 0.0);
	float rim = pow(1.0 - clamp(n.z, 0.0, 1.0), 1.5);
	vec3 col = mix(RED_D, RED, ndl) * (0.30 + 0.70 * ao);
	col += RED_H * rim * 0.42 * (0.4 + 0.6 * ao);
	float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 18.0);
	col += vec3(1.0, 0.55, 0.5) * spec * 0.10;
	return col;
}

// Metal dorado sencillo (galones y flecos).
vec3 gold(float shade, float spec) {
	vec3 c = mix(GOLD_D, GOLD, clamp(shade, 0.0, 1.0));
	return c + GOLD_H * pow(clamp(spec, 0.0, 1.0), 6.0) * 0.8;
}

void main() {
	vec2 S = uRes / uDpr;                                        // tamaño en px CSS
	vec2 P = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr; // px CSS, origen arriba-izq
	float x = P.x / S.x;
	float y = P.y / S.y;

	float right = step(0.5, x);
	float xl = mix(x, 1.0 - x, right);   // 0 en el lateral → 0.5 en el centro
	float seed = right * 17.31;

	// Luz general: foco cenital centrado.
	float spot = 0.52 + 0.62 * exp(-pow((x - 0.5) * 2.1, 2.0)) * (1.0 - 0.35 * y);

	vec4 outc = vec4(0.0);

	// ---------------- PAÑOS ----------------
	float o = clamp(uOpen * 1.35 - y * 0.35, 0.0, 1.0); // el bajo va con retraso
	o = o * o * (3.0 - 2.0 * o);
	float narrow = S.x < 700.0 ? 0.55 : 1.0;             // en móvil se recoge más
	float g = (0.072 + 0.088 * (1.0 - exp(-pow((y - 0.6) / 0.3, 2.0)))) * narrow;
	float edge = mix(0.503, g, o);
	float sway = (1.0 - o) * sin(uTime * 0.7 + y * 2.6 + seed) * 0.0022 * y;
	edge += sway;

	float distPx = (xl - edge) * S.x;
	// sombra del paño sobre el escenario
	if (distPx > 0.0) outc = vec4(0.0, 0.0, 0.0, 0.62 * exp(-distPx / 55.0) * (0.35 + 0.65 * o));

	if (distPx < 2.0) {
		float u = clamp(xl / edge, 0.0, 1.0);
		float N = max(6.0, 0.5 * S.x / 74.0);
		float s = u * N + sway * 60.0;
		float amp = 1.0 + 2.2 * (1.0 - edge / 0.5);
		float e = 0.015;
		float h = pleat(s, P.y, seed);
		float dhs = (pleat(s + e, P.y, seed) - pleat(s - e, P.y, seed)) / (2.0 * e);
		float dhy = (pleat(s, P.y + 6.0, seed) - pleat(s, P.y - 6.0, seed)) / 12.0;
		float K = 0.42 * amp;
		vec3 n = normalize(vec3(-dhs * K, dhy * 60.0, 1.0));
		vec3 L = normalize(vec3(0.5, 0.45, 1.0));
		vec3 col = velvet(n, h, L);
		col *= 0.95 + 0.07 * noise(P * 1.4);                   // grano de la tela

		// canto interior: pequeño volumen y sombra
		float eu = (1.0 - u) * edge * S.x;
		col *= mix(0.45, 1.0, smoothstep(0.0, 22.0, eu));
		col += RED_H * 0.16 * exp(-pow((eu - 7.0) / 4.0, 2.0));

		// recogido: más oscuro a la altura del alzapaño
		col *= 1.0 - 0.35 * o * exp(-pow((y - 0.6) / 0.08, 2.0)) * smoothstep(0.2, 1.0, u);

		col *= mix(0.55, 1.0, smoothstep(0.0, 0.3, y));          // sombra bajo la bambalina
		col *= 1.0 - 0.30 * smoothstep(0.78, 1.0, y);
		col *= spot;

		// bajo: galón trenzado + flecos
		float hem = S.y - 30.0;
		float fx = s * 28.0;                                      // los flecos siguen la tela
		if (P.y > hem - 8.0) {
			float fy = (P.y - (hem - 8.0)) / 38.0;
			if (fy < 0.26) {
				float rope = 0.5 + 0.5 * sin(fx * 0.9 + P.y * 0.9);
				col = gold(0.35 + 0.65 * rope, rope) * (0.7 + 0.5 * spot) * (0.7 + 0.3 * h);
			} else {
				float strand = 0.5 + 0.5 * cos(fx * TAU / 3.0);
				float len = 0.86 + 0.14 * noise(vec2(fx * 0.4, 3.0));
				if (fy > len) { col = vec3(0.0); h = -1.0; }
				else col = gold(0.25 + 0.6 * strand * (1.0 - fy * 0.5), strand * 0.9) * (0.65 + 0.4 * spot) * (0.6 + 0.4 * h);
			}
		}

		float a = clamp(1.0 - distPx / 1.5, 0.0, 1.0);
		if (h < -0.5) a = 0.0;
		outc = mix(outc, vec4(col, 1.0), a);
	}

	// ---------------- ALZAPAÑO ----------------
	float tieA = smoothstep(0.35, 0.75, o);
	if (tieA > 0.0) {
		float tyc = 0.6 * S.y;
		float xpx = xl * S.x;
		float ePx = edge * S.x;
		// cordón que abraza el paño
		float dyc = P.y - tyc + (xpx / max(ePx, 1.0)) * 6.0;
		if (abs(dyc) < 6.0 && xpx < ePx + 2.0) {
			float rope = 0.5 + 0.5 * sin(xpx * 0.9 - P.y * 1.3);
			float rnd = 1.0 - pow(dyc / 6.0, 2.0);
			vec3 c = gold(0.3 + 0.7 * rnd * (0.6 + 0.4 * rope), rnd * rope) * (0.75 + 0.35 * spot);
			outc = mix(outc, vec4(c, 1.0), tieA);
		}
		// borla colgando junto al canto
		float bx = xpx - (ePx + 2.0);
		float by = P.y - (tyc + 4.0);
		float head = length(vec2(bx, by - 8.0)) - 7.5;
		float skirtW = 5.0 + max(by - 16.0, 0.0) * 0.16;
		bool skirt = by > 13.0 && by < 70.0 && abs(bx) < skirtW;
		float cordOk = (by > -4.0 && by < 2.0 && abs(bx) < 1.6) ? 1.0 : 0.0;
		if (S.x >= 700.0 && (head < 0.0 || skirt || cordOk > 0.0)) {
			vec3 c;
			if (head < 0.0) {
				float sh = clamp(-head / 7.5, 0.0, 1.0);
				c = gold(0.35 + 0.65 * sh, sh * (0.5 + 0.5 * clamp(-(bx + by - 8.0) / 8.0, 0.0, 1.0)));
			} else if (skirt) {
				float str = 0.5 + 0.5 * cos(bx * 2.4);
				float sh = 1.0 - abs(bx) / skirtW;
				c = gold(0.2 + 0.7 * sh * str * (1.0 - (by - 13.0) / 120.0), sh * str * 0.8);
				if (by > 64.0 + 4.0 * noise(vec2(bx * 0.8, 2.0))) { c = vec3(0.0); tieA = 0.0; }
			} else c = GOLD;
			c *= 0.75 + 0.35 * spot;
			outc = mix(outc, vec4(c, 1.0), tieA);
		}
	}

	// ---------------- BAMBALINA ----------------
	float vH = clamp(S.y * 0.105, 62.0, 116.0);
	float swagW = S.x / max(2.0, floor(S.x / 300.0));
	float t = fract(P.x / swagW);
	float sag = vH * 0.36;
	float vB = vH + sag * sin(PI * t);
	float fringe = 18.0;

	// sombra de la bambalina
	if (P.y > vB) {
		float sh = 0.55 * exp(-(P.y - vB) / 26.0);
		outc.rgb *= 1.0 - sh;
		outc.a = max(outc.a, sh * 0.85);
	}

	if (P.y < vB + fringe) {
		vec3 col;
		float a = 1.0;
		if (P.y < vB - 7.0) {
			float v = P.y / vB;
			// festón: pliegues horizontales que siguen la curva
			float fv = v * 4.5 + 0.08 * sin(t * PI * 3.0);
			float hh = 0.5 + 0.5 * cos(fv * TAU);
			hh = 1.0 - pow(1.0 - hh, 1.5);
			float dv = -sin(fv * TAU) * 4.5 * PI;
			// cascada en las uniones: pliegues verticales
			float j = smoothstep(0.14, 0.02, min(t, 1.0 - t));
			float cs = t * swagW / 9.0;
			float hj = 0.5 + 0.5 * cos(cs * TAU);
			float dj = -sin(cs * TAU) * PI;
			vec3 n = normalize(vec3(dj * 0.5 * j, dv * 0.09 * (1.0 - j) * (0.6 + 0.4 * sin(PI * t)), 1.0));
			col = velvet(n, mix(hh, hj, j), normalize(vec3(0.0, 0.7, 1.0)));
			col *= 0.95 + 0.07 * noise(P * 1.4);
			col *= mix(0.55, 1.0, smoothstep(0.0, 0.5, v));     // parte alta en sombra
			col *= 1.0 - 0.35 * j * (1.0 - hj);
			col *= 0.75 + 0.45 * spot;
		} else if (P.y < vB) {
			// galón dorado
			float rope = 0.5 + 0.5 * sin(P.x * 0.75 + P.y * 1.2);
			col = gold(0.4 + 0.6 * rope, rope) * (0.8 + 0.4 * spot);
		} else {
			// flecos
			float fy = (P.y - vB) / fringe;
			float strand = 0.5 + 0.5 * cos(P.x * TAU / 3.2);
			float len = 0.8 + 0.2 * noise(vec2(P.x * 0.25, 7.0));
			a = fy < len ? 1.0 : 0.0;
			col = gold(0.25 + 0.6 * strand * (1.0 - fy * 0.6), strand * 0.85) * (0.75 + 0.4 * spot);
		}
		outc = mix(outc, vec4(col, 1.0), a);
	}

	// borla en cada unión de festones
	{
		float dx = (t < 0.5 ? t : t - 1.0) * swagW;
		float by = P.y - (vH - 4.0);
		float head = length(vec2(dx, by - 7.0)) - 8.0;
		float skirtW = 6.0 + max(by - 14.0, 0.0) * 0.15;
		bool skirt = by > 12.0 && by < 58.0 && abs(dx) < skirtW;
		if (head < 0.0 || skirt) {
			vec3 c;
			float a2 = 1.0;
			if (head < 0.0) {
				float sh = clamp(-head / 8.0, 0.0, 1.0);
				c = gold(0.35 + 0.65 * sh, sh * 0.8);
			} else {
				float str = 0.5 + 0.5 * cos(dx * 2.4);
				float sh = 1.0 - abs(dx) / skirtW;
				c = gold(0.2 + 0.7 * sh * str, sh * str * 0.8);
				if (by > 53.0 + 5.0 * noise(vec2(dx * 0.8, 5.0))) a2 = 0.0;
			}
			outc = mix(outc, vec4(c * (0.8 + 0.3 * spot), 1.0), a2);
		}
	}

	gl_FragColor = vec4(outc.rgb * outc.a, outc.a);
}
`;

export interface Curtain {
	setOpen(v: number): void;
	destroy(): void;
}

export function createCurtain(canvas: HTMLCanvasElement, opts: { animate: boolean }): Curtain | null {
	const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false });
	if (!gl) return null;

	const compile = (type: number, src: string) => {
		const sh = gl.createShader(type)!;
		gl.shaderSource(sh, src);
		gl.compileShader(sh);
		if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
			console.warn('[telón]', gl.getShaderInfoLog(sh));
			return null;
		}
		return sh;
	};
	const vs = compile(gl.VERTEX_SHADER, VERT);
	const fs = compile(gl.FRAGMENT_SHADER, FRAG);
	if (!vs || !fs) return null;
	const prog = gl.createProgram()!;
	gl.attachShader(prog, vs);
	gl.attachShader(prog, fs);
	gl.linkProgram(prog);
	if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
	gl.useProgram(prog);

	const buf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
	const loc = gl.getAttribLocation(prog, 'aPos');
	gl.enableVertexAttribArray(loc);
	gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

	const uRes = gl.getUniformLocation(prog, 'uRes');
	const uDpr = gl.getUniformLocation(prog, 'uDpr');
	const uTime = gl.getUniformLocation(prog, 'uTime');
	const uOpen = gl.getUniformLocation(prog, 'uOpen');

	let open = 0;
	let dpr = 1;
	let raf = 0;
	let visible = true;
	let dirty = true;
	const t0 = performance.now();

	const resize = () => {
		dpr = Math.min(window.devicePixelRatio || 1, 1.75);
		const w = Math.round(canvas.clientWidth * dpr);
		const h = Math.round(canvas.clientHeight * dpr);
		if (canvas.width !== w || canvas.height !== h) {
			canvas.width = w;
			canvas.height = h;
		}
		gl.viewport(0, 0, w, h);
		dirty = true;
	};

	const draw = (now: number) => {
		gl.uniform2f(uRes, canvas.width, canvas.height);
		gl.uniform1f(uDpr, dpr);
		gl.uniform1f(uTime, opts.animate ? (now - t0) / 1000 : 0);
		gl.uniform1f(uOpen, open);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
		dirty = false;
	};

	const loop = (now: number) => {
		raf = 0;
		if (!visible) return;
		// El balanceo solo se ve con el telón cerrado: después, solo redibujamos si cambia algo.
		if (dirty || (opts.animate && open < 0.98)) draw(now);
		raf = requestAnimationFrame(loop);
	};
	const start = () => {
		if (!raf) raf = requestAnimationFrame(loop);
	};

	const ro = new ResizeObserver(resize);
	ro.observe(canvas);
	const io = new IntersectionObserver(([e]) => {
		visible = e.isIntersecting;
		if (visible) start();
	});
	io.observe(canvas);
	resize();
	start();
	canvas.classList.add('is-ready');

	return {
		setOpen(v: number) {
			const nv = Math.min(1, Math.max(0, v));
			if (nv !== open) {
				open = nv;
				dirty = true;
			}
		},
		destroy() {
			cancelAnimationFrame(raf);
			ro.disconnect();
			io.disconnect();
		},
	};
}
