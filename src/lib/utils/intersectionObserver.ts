import { intersection } from '$lib/store';

export function observer(node: HTMLElement) {
	const h1nodes = node.querySelectorAll('h1');
	const h2nodes = node.querySelectorAll('h2');
	const nodes = [...h1nodes, ...h2nodes];

	const options: IntersectionObserverInit = {
		rootMargin: `-140px`
	};

	const observer = new IntersectionObserver((entries) => {
		if (entries[0].boundingClientRect.top < 150) {
			const id = entries[0].target.id;
			intersection.set(id);
		}
	}, options);

	nodes.forEach((node) => {
		observer.observe(node);
	});

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
