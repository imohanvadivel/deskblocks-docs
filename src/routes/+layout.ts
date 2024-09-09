import { type Meta, type NavData } from '$lib/types.js';

export function load() {
	const data = [];

	// Import all the markdown files
	const files = import.meta.glob('/src/routes/**/*.md', { eager: true });

	type File = {
		metadata: Meta;
	};

	for (const path in files) {
		const file = files[path] as File;

		if (file && typeof file === 'object' && 'metadata' in file) {
			data.push(file.metadata);
		}
	}

	const home = { title: 'Home', url: '/', slug: 'home', dir: '', description: '' };
	const figmaLibrary = {
		title: 'Figma Library ↗',
		url: 'https://www.figma.com/community/file/928108847914589057/ui2-figmas-design-system',
		slug: 'figma-library',
		dir: 'guidelines',
		description: 'UI2 Figma Library'
	};
	const componentHeader = { header: 'Components' };
	const components = data.filter((item) => item.dir === 'components');
	const guidelinesHeader = { header: 'Guidelines' };
	const guidelines = data.filter((item) => item.dir === 'guidelines');

	guidelines.sort((a, b) => (a.index || 100) - (b.index || 100));
	components.sort((a, b) => (a.index || 100) - (b.index || 100));

	const navList: NavData = [
		home,
		guidelinesHeader,
		...guidelines,
		figmaLibrary,
		componentHeader,
		...components
	];

	return { navList };
}

// export const ssr = false;
