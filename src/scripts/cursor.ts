export function initCursor() {
	if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

	const cursor = document.createElement('div');
	cursor.className = 'cursor';
	cursor.innerHTML = `<div class="cursor__dot"></div>`;
	document.body.appendChild(cursor);

	const dot = cursor.querySelector('.cursor__dot') as HTMLElement;

	window.addEventListener('mousemove', (e) => {
		dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
		if (!cursor.classList.contains('is-active')) {
			cursor.classList.add('is-active');
		}
	});

	document.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
	document.addEventListener('mouseenter', () => cursor.classList.add('is-active'));

	const interactive = 'a, button, [data-cursor="hover"], input, textarea, label, [role="button"], select';
	document.body.addEventListener('mouseover', (e) => {
		const target = e.target as HTMLElement;
		if (target.closest(interactive)) cursor.classList.add('is-hover');
	});
	document.body.addEventListener('mouseout', (e) => {
		const target = e.relatedTarget as HTMLElement | null;
		if (!target || !target.closest(interactive)) {
			cursor.classList.remove('is-hover');
		}
	});

	document.addEventListener('mousedown', () => cursor.classList.add('is-down'));
	document.addEventListener('mouseup', () => cursor.classList.remove('is-down'));
}

export function initMagnetic() {
	if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

	const items = document.querySelectorAll<HTMLElement>('.magnetic');

	items.forEach((item) => {
		const strength = parseFloat(item.dataset.magnetic || '0.4');

		item.addEventListener('mousemove', (e) => {
			const rect = item.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			item.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
		});

		item.addEventListener('mouseleave', () => {
			item.style.transform = '';
		});
	});
}

