export function initReveal() {
	const elements = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-stagger]');

	if (!('IntersectionObserver' in window)) {
		elements.forEach((el) => el.classList.add('is-revealed'));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-revealed');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
	);

	elements.forEach((el) => observer.observe(el));
}

export function initCounters() {
	const counters = document.querySelectorAll<HTMLElement>('[data-count]');

	if (!counters.length) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				const el = entry.target as HTMLElement;
				const target = parseFloat(el.dataset.count || '0');
				const decimals = parseInt(el.dataset.decimals || '0', 10);
				const duration = parseInt(el.dataset.duration || '1800', 10);
				const suffix = el.dataset.suffix || '';
				const prefix = el.dataset.prefix || '';

				let startTime: number | null = null;
				const animate = (now: number) => {
					if (!startTime) startTime = now;
					const progress = Math.min((now - startTime) / duration, 1);
					const eased = 1 - Math.pow(1 - progress, 3);
					const value = (target * eased).toFixed(decimals);
					el.textContent = `${prefix}${value}${suffix}`;
					if (progress < 1) requestAnimationFrame(animate);
					else el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
				};
				requestAnimationFrame(animate);
				observer.unobserve(el);
			});
		},
		{ threshold: 0.4 },
	);

	counters.forEach((c) => observer.observe(c));
}

export function initMarquee() {
	const marquees = document.querySelectorAll<HTMLElement>('[data-marquee]');

	marquees.forEach((marquee) => {
		const speed = parseFloat(marquee.dataset.speed || '40');
		const direction = marquee.dataset.direction === 'right' ? 1 : -1;
		const track = marquee.querySelector<HTMLElement>('[data-marquee-track]');
		if (!track) return;

		// Duplicate content for seamless loop
		track.innerHTML += track.innerHTML;

		let pos = 0;
		let isPaused = false;

		const onEnter = () => (isPaused = true);
		const onLeave = () => (isPaused = false);

		marquee.addEventListener('mouseenter', onEnter);
		marquee.addEventListener('mouseleave', onLeave);

		let lastTime = performance.now();
		function tick(now: number) {
			const dt = (now - lastTime) / 1000;
			lastTime = now;
			if (!isPaused) {
				pos += (direction * speed * dt);
				const halfWidth = track.scrollWidth / 2;
				if (direction === -1 && pos <= -halfWidth) pos += halfWidth;
				if (direction === 1 && pos >= 0) pos -= halfWidth;
				track.style.transform = `translate3d(${pos}px, 0, 0)`;
			}
			requestAnimationFrame(tick);
		}
		requestAnimationFrame(tick);
	});
}
