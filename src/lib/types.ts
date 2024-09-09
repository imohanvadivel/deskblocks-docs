export type Meta = {
	title: string;
	slug: string;
	dir: string;
	description: string;
	url: string;
	index?: number;
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
