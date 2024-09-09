<script lang="ts">
	export let tag: string;

	let slug = '';

	function getSlug(node: HTMLElement) {
		let anchor = node.querySelector('a')!;
		let content = anchor.textContent || '';
		slug = content
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '')
			.replace(/-{2,}/g, '-')
			.replace(/^-/, '')
			.replace(/-$/, '');
	}
</script>

<svelte:element this={tag} id={slug} use:getSlug>
	<a href="#{slug}"><slot /></a>
</svelte:element>

<style>
	a {
		color: var(--color-text);
		text-decoration: none;
		cursor: default;
		--fragment-color: transparent;
		position: relative;
	}
	a:hover {
		--fragment-color: var(--color-text-secondary);
		cursor: default;
	}
	a::before {
		content: '#';
		color: var(--fragment-color);
		position: absolute;
		left: -1em;
	}
	a:visited {
		color: var(--color-text);
	}
	a:focus {
		outline: 1px solid var(--color-text-secondary);
		outline-offset: 0.25rem;
	}
</style>
