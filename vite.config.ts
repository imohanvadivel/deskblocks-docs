import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import examples from 'mdsvexamples/vite'; // Remark plugin: renders svelte code blocks in MDSveX
import svgLoader from 'vite-svg-loader'; // Vite plugin: loads SVG files as components

export default defineConfig({
	plugins: [sveltekit(), examples, svgLoader({ defaultImport: 'raw' })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
