<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content="Guidelines - {data.title}" />
</svelte:head>
<article class="main-article">
	<svelte:component this={data.content} />
	<footer />
</article>

<!-- <PageContent data={data.headings} /> -->

<style>
	article {
		grid-column: span 4;
		display: flex;
		flex-direction: column;
		/* row-gap: 1rem; */
		scroll-behavior: auto;
		font-family: var(--docs-sans);

		@media (--medium-viewport) {
			padding-right: 1.25rem;
			grid-column: span 3;
		}

		@media (--small-viewport) {
			padding-left: 1.25rem;
		}
	}

	footer {
		height: 60vh;
	}

	article :global(h1) {
		margin-bottom: 1rem;
	}

	article :global(h2) {
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	article :global(h3) {
		margin-top: 1.25rem;
		margin-bottom: 1rem;
		font-size: 1rem;
		color: var(--color-text-secondary);
		font-weight: 500;
	}

	article :global(hr + h2) {
		margin-top: 1rem;
	}

	article :global(h1 + p) {
		font-size: 1rem;
		color: var(--color-text-secondary);
		margin-bottom: 1rem;
		max-width: 47rem;
		opacity: 1;
		line-height: 1.5;
	}
	article :global(.table-wrapper + p) {
		margin-top: 1rem;
	}

	article :global(p) {
		font-size: 0.875rem;
		line-height: 1.7;
		margin-bottom: 1.5rem;
		max-width: 40rem;
		letter-spacing: 0.01em;
		/* opacity: 0.9; */
	}


	article :global(li p) {
		margin: unset;
	}

	article :global(.example-wrapper),
	article :global(.table-wrapper) {
		margin: 0.5rem 0;
	}

	article :global(hr) {
		height: 0.0625rem;
		background-color: var(--color-border);
		border: none;
		margin: 0.5rem 0;
		max-width: 47rem;
	}

	article :global(hr + p) {
		margin-top: 0.5rem;
	}

	article :global(li) {
		font-size: 0.875rem;
		margin-bottom: 0.25rem;
		list-style: disc;
		max-width: 40rem;
		line-height: 1.7;
	}

	article :global(pre.language-bash),
	article :global(pre.language-html) {
		max-width: 47rem;
		border: 1px solid var(--color-border);
		border-radius: 6px;
		margin: 1rem 0;
	}

	article :global(p + pre.language-bash),
	article :global(p + pre.language-html) {
		margin-top: 0;
	}

	article :global(strong),
	article :global(b) {
		font-weight: 550;
	}

	article :global(section.info) {
		margin-top: 1rem;
		max-width: 47rem;
	}

	article :global(a),
	article :global(a:visited) {
		text-decoration: underline;
		color: var(--color-text);
		text-underline-position: from-font;
		text-underline-thickness: 0.0625rem;
		text-decoration-color: var(--color-text-tertiary);
		white-space: nowrap;
	}

	article :global(a:hover) {
		text-decoration: underline;
		text-decoration-color: var(--db-color-text-brand);
		text-underline-thickness: 0.5rem;
	}

	article :global(h1 a),
	article :global(h1 a:hover),
	article :global(h2 a),
	article :global(h2 a:hover),
	article :global(h3 a) {
		text-decoration: none;
	}
</style>
