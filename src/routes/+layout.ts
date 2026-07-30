import { type Meta, type NavData } from '$lib/types.js';

export function load() {
	const data = [];

	// Import all the markdown files
	const files = import.meta.glob('/src/routes/**/*.md', { eager: true });

	// const markdownFiles = Object.keys(files).map(path => path.replace('/src/routes', ''));
	// console.log(markdownFiles);
	
	type File = {
		metadata: Meta;
	};

	for (const path in files) {
		const file = files[path] as File;

		if (file && typeof file === 'object' && 'metadata' in file) {
			data.push(file.metadata);
		}
	}

	// const home = { title: 'Home', url: '/', slug: 'home', dir: '', description: '' };
	const figmaLibrary = {
		title: 'Figma Library ↗',
		url: 'https://www.figma.com/community/file/1429784656177593269/deskblocks',
		slug: 'figma-library',
		dir: 'primary',
		description: 'UI2 Figma Library'
	};
	const primary = data.filter((item) => item.dir === 'primary');
	const components = data.filter((item) => item.dir === 'components');
	const guidelinesHeader = { header: 'Guidelines' };
	const guidelines = data.filter((item) => item.dir === 'guidelines');

	primary.sort((a, b) => (a.index || 100) - (b.index || 100));
	guidelines.sort((a, b) => (a.index || 100) - (b.index || 100));
	components.sort((a, b) => (a.index || 100) - (b.index || 100));

	/* Components are grouped under category headers rather than listed flat. At 38
	 * entries a single alphabet-soup list is hard to scan, and the flat `index` had
	 * already started sprouting fractional values (1.5, 2.5) as components were
	 * wedged in. `index` now orders within a category, so it stays small and whole.
	 *
	 * The order below is deliberate and NOT alphabetical: categories run roughly
	 * most- to least-reached-for, and so do the entries inside each one. A category
	 * with no pages renders nothing, and any component whose `category` is missing
	 * or unrecognized collects under "Other" rather than vanishing from the nav. */
	const CATEGORY_ORDER = [
		'Actions',
		'Forms',
		'Navigation',
		'Data Display',
		'Feedback',
		'Typography & Media',
		'Utilities'
	];

	const byCategory = new Map<string, Meta[]>();
	for (const item of components) {
		const key = CATEGORY_ORDER.includes(item.category ?? '') ? (item.category as string) : 'Other';
		const bucket = byCategory.get(key);
		if (bucket) bucket.push(item);
		else byCategory.set(key, [item]);
	}

	const componentNav: NavData = [];
	for (const category of [...CATEGORY_ORDER, 'Other']) {
		const items = byCategory.get(category);
		if (!items?.length) continue;
		componentNav.push({ header: category }, ...items);
	}

	const navList: NavData = [
		...primary,
		figmaLibrary,
		guidelinesHeader,
		...guidelines,
		...componentNav
	];

	return { navList };
}

