import tippy from 'tippy.js';
import type { Instance, Tippy } from 'tippy.js';
import '$lib/styles/tooltip.css';

type renderProps = {
	allowHTML: boolean;
	animation: string | boolean;
	arrow: boolean | string | SVGElement | DocumentFragment;
	content: string;
	inertia: boolean;
	maxWidth: number | string;
	role: string;
	theme: string;
	zIndex: number;
};

export function tooltip(node: HTMLElement, options: string | renderProps) {
	let tooltipInstance: Instance;
	if (typeof options === 'string') {
		tooltipInstance = (tippy as unknown as Tippy)(node, { content: options, delay: 500 });
	} else {
		tooltipInstance = (tippy as unknown as Tippy)(node, options);
	}

	return {
		update(newContent: string) {
			tooltipInstance.setContent(newContent);
		},

		destroy() {
			tooltipInstance.destroy();
		}
	};
}
