import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let post;
	try {
		post = await import(`../${params.slug}.md`);
	} catch {
		// A slug with no matching .md — a removed component, a typo, a stale
		// bookmark. Without this the bare import rejects and the page 500s,
		// which reads as "the docs are broken" rather than "no such page".
		throw error(404, `No component page for "${params.slug}".`);
	}

	return {
		content: post.default,
		...post.metadata
	};
}
