import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let post;
	try {
		post = await import(`../${params.slug}.md`);
	} catch {
		// Mirrors components/[slug]: a missing .md is a 404, not a 500.
		throw error(404, `No guideline page for "${params.slug}".`);
	}

	return {
		content: post.default,
		...post.metadata
	};
}
