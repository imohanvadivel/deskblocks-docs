import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'; // Markdown preprocessor for svelte
import examples from 'mdsvexamples'; // Remark plugin: renders svelte code blocks in MDSveX

/* Remark plugin function: parses the markdown AST and extract
 * the headings from it, to create TOC. */
function getHeading() {
	let visit;
	let tree_to_string;
	return async function transformer(tree, vFile) {
		if (!visit) {
			tree_to_string = (await import('mdast-util-to-string')).toString;
			visit = (await import('unist-util-visit')).visit;
		}

		vFile.data.headings = [];

		function getSlug(title) {
			return title
				.toLowerCase()
				.replace(/ /g, '-')
				.replace(/[^\w-]+/g, '');
		}

		visit(tree, 'heading', (node) => {
			vFile.data.headings.push({
				level: node.depth,
				title: tree_to_string(node),
				slug: getSlug(tree_to_string(node))
			});
		});

		if (!vFile.data.fm) vFile.data.fm = {};
		vFile.data.fm.headings = vFile.data.headings;
	};
}

/** @type {import('mdsvex').MdsvexCompileOptions}. */
const mdsvexOptions = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: true,

	layout: '/src/lib/customComponent/componentLayout.svelte',

	remarkPlugins: [
		getHeading,
		[examples, { defaults: { Wrapper: '/src/lib/components/ExampleWrapper.svelte' } }]
	],

	rehypePlugins: []
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexOptions.extensions],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	vitePlugin: {
		inspector: {
			holdMode: true
		}
	},
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore static HTML files in type-test directory
				if (path.startsWith('/type-test/')) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
