import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { LibStore } from '$lib/types.js';

export const currentPage = writable<string>('home');

export function createThemeStore() {
	const { subscribe, update } = writable<'light' | 'dark'>('light');

	if (browser) {
		const root = document.documentElement.classList;
		root.add('docs-theme-light');
	}

	function toggle() {
		update((theme) => {
			const root = document.documentElement.classList;

			if (theme === 'light') {
				if (root.contains('docs-theme-light')) root.remove('docs-theme-light');
				root.add('docs-theme-dark');

				if (get(libStore).appearance === 'light') {
					libStore.update((state) => ({ ...state, appearance: 'dark' }));
				}

				return 'dark';
			} else {
				if (root.contains('docs-theme-dark')) root.remove('docs-theme-dark');
				root.add('docs-theme-light');

				if (get(libStore).appearance === 'dark') {
					libStore.update((state) => ({ ...state, appearance: 'light' }));
				}

				return 'light';
			}
		});
	}

	return {
		subscribe,
		toggle
	};
}
export const theme = createThemeStore();

function createLibStore() {
	const { subscribe, set, update } = writable<LibStore>({
		appearance: 'light',
		theme: 'blue',
		font: 'puvi'
	});

	if (browser) {
		const root = document.documentElement.classList;
		root.add('appearance-light');
		root.add('theme-blue');
		root.add('font-puvi');
	}

	subscribe((state) => {
		if (!browser) return;
		const root = document.documentElement.classList;
		const classNames = document.documentElement.className.split(' ');

		const appearance = classNames.find((className) => className.startsWith('appearance-')) || '';
		const libTheme = classNames.find((className) => className.startsWith('theme-')) || '';
		const font = classNames.find((className) => className.startsWith('font-')) || '';
		const docsTheme = classNames.find((className) => className.startsWith('docs-theme-')) || '';

		if (state.appearance !== appearance) {
			root.remove(appearance);
			root.add(`appearance-${state.appearance}`);
		}

		if (state.theme !== libTheme) {
			root.remove(libTheme);
			root.add(`theme-${state.theme}`);
		}

		if (state.font !== font) {
			root.remove(font);
			root.add(`font-${state.font}`);
		}

		if (state.appearance === 'light' && docsTheme === 'docs-theme-dark') {
			theme.toggle();
		}
		if (state.appearance === 'dark' && docsTheme === 'docs-theme-light') {
			theme.toggle();
		}
	});

	return { subscribe, set, update };
}
export const libStore = createLibStore();

function createDrawerStore() {
	const { subscribe, update } = writable(false);

	function toggle() {
		update((state) => {
			if (!state) {
				document.documentElement.style.overflow = 'hidden';
			} else {
				document.documentElement.style.overflowY = 'auto';
			}

			return !state;
		});
	}

	return {
		subscribe,
		toggle
	};
}
export const drawer = createDrawerStore();

export const toastMessage = writable<string>('');

export const intersection = writable<string>('');

/*============== Viewport Stores ==============*/

// function createLargeViewportStore() {
// 	const { subscribe, set } = writable(false);

// 	if (browser) {
// 		set(window.innerWidth < 960 && window.innerWidth >= 640);

// 		window.addEventListener('resize', () => {
// 			set(window.innerWidth < 960 && window.innerWidth >= 640);
// 		});
// 	}

// 	return {
// 		subscribe
// 	};
// }
// export const largeViewport = createLargeViewportStore();

// function createSmallViewportStore() {
// 	const { subscribe, set } = writable(false);

// 	if (browser) {
// 		set(window.innerWidth < 640);

// 		window.addEventListener('resize', () => {
// 			set(window.innerWidth < 640);
// 		});
// 	}

// 	return {
// 		subscribe
// 	};
// }
// export const smallViewport = createSmallViewportStore();
