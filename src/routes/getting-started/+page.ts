export async function load() {
	const post = await import(`./getting-started.md`);
	// const post = await import(`.${route.id}.md`);
	const content = post.default;

	return {
		content,
		...post.metadata
	};
}
