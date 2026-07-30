export type Meta = {
	title: string;
	slug: string;
	dir: string;
	description: string;
	url: string;
	index?: number;
	/** Sidebar grouping for components; `index` then orders within the group.
	 *  Optional because only pages under components/ carry one. */
	category?: string;
};

export type NavHeader = {
	header: string;
};

export type NavData = (Meta | NavHeader)[];

export type LibStore = {
	appearance: 'light' | 'dark';
	theme: 'blue' | 'red' | 'green' | 'orange' | 'yellow';
	font: 'puvi' | 'lato' | 'roboto';
};
