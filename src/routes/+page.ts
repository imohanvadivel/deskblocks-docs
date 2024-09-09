export async function load() {
	const post = await import(`./home.md`);
	const content = post.default;

	return {
		content,
		...post.metadata
	};
}
