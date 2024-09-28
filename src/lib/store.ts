import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const currentPage = writable<string>('home');

export function createLibStore() {
	// Initialize the store with default values or values from cookies/localStorage
	const initialConfig = browser
		? getStoredConfig()
		: { appearance: 'light', theme: 'blue', font: 'puvi' };
	const { subscribe, set, update } = writable(initialConfig);

	if (browser) {
		// Apply the stored configuration on page load
		const root = document.documentElement.classList;
		root.add(`appearance-${initialConfig.appearance}`);
		root.add(`docs-theme-${initialConfig.appearance}`);
		root.add(`theme-${initialConfig.theme}`);
		root.add(`font-${initialConfig.font}`);
	}

	// Persist and apply the theme whenever the state changes
	subscribe((state) => {
		if (!browser) return;

		// Update classes in the DOM
		const root = document.documentElement.classList;
		const classNames = document.documentElement.className.split(' ');

		// Find current applied classes
		const appearanceClass =
			classNames.find((className) => className.startsWith('appearance-')) || '';
		const libThemeClass = classNames.find((className) => className.startsWith('theme-')) || '';
		const fontClass = classNames.find((className) => className.startsWith('font-')) || '';
		const docsThemeClass =
			classNames.find((className) => className.startsWith('docs-theme-')) || '';

		// Remove old classes and add new ones
		if (state.appearance !== appearanceClass.split('-')[1]) {
			root.remove(appearanceClass);
			root.remove(docsThemeClass);
			root.add(`appearance-${state.appearance}`);
			root.add(`docs-theme-${state.appearance}`);
		}
		if (state.theme !== libThemeClass.split('-')[1]) {
			root.remove(libThemeClass);
			root.add(`theme-${state.theme}`);
		}
		if (state.font !== fontClass.split('-')[1]) {
			root.remove(fontClass);
			root.add(`font-${state.font}`);
		}

		// Persist the new configuration in cookies and localStorage
		setStoredConfig(state);
	});

	// Function to toggle appearance (light/dark)
	function toggleAppearance() {
		update((state) => {
			const newAppearance = state.appearance === 'light' ? 'dark' : 'light';
			return { ...state, appearance: newAppearance };
		});
	}

	return { subscribe, set, update, toggleAppearance };
}

// Store instance
export const libStore = createLibStore();

// Helper functions

function getStoredConfig() {
	// Get config from cookies or localStorage
	const cookieMatch = document.cookie.match(/theme=([^;]+)/);
	const cookieConfig = cookieMatch ? cookieMatch[1] : null;
	const localStorageConfig = localStorage.getItem('pref')?.split('=')[1];

	// Return parsed config or default values
	if (cookieConfig) {
		const [appearance, theme, font] = cookieConfig.split('-');
		return { appearance, theme, font };
	}
	if (localStorageConfig) {
		const [appearance, theme, font] = localStorageConfig.split('-');
		return { appearance, theme, font };
	}

	// Default configuration
	return { appearance: 'light', theme: 'blue', font: 'puvi' };
}

function setStoredConfig(state: { appearance: string; theme: string; font: string }) {
	const configString = `${state.appearance}-${state.theme}-${state.font}`;

	// Set in cookie
	document.cookie = `theme=${configString};path=/;max-age=31536000`; // 1 year expiration

	// Set in localStorage
	localStorage.setItem('pref', `pref=${configString}`);
}

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
