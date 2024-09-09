<script lang="ts">
	export let data;	
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content="Guidelines - {data.title}">
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
	}
	article :global(.table-wrapper + p) {
		margin-top: 1rem;
	}

	article :global(p) {
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		max-width: 40rem;
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
	}

	article :global(pre) {
		margin: 0.5rem 0 1rem 0;
		max-width: 40rem;
	}

	article :global(strong), article :global(b) {
		font-weight: 550;
	}
</style>
