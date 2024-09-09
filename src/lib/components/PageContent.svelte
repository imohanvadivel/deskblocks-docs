<script lang="ts">
	import { intersection } from '$lib/store';
	export let data: TocElement[];

	// Removes the H1 element
	data = data.filter((el) => el.level !== 1);

	type TocElement = {
		title: string;
		slug: string;
		level: number;
	};

	function handleClick(slug: string) {
		setTimeout(() => {
			intersection.set(slug);
		}, 50);
	}
</script>

<aside class="page-content">
	<ol>
		<li><h3>On this page</h3></li>
		{#each data as el}
			<li class="list">
				<a
					class="clean-link"
					class:active={$intersection === el.slug}
					href="#{el.slug}"
					on:click={() => handleClick(el.slug)}>{el.title}</a
				>
			</li>
		{/each}
	</ol>
</aside>

<style>
	aside {
		grid-column-start: -2;
		position: sticky;
		top: var(--sidepanel-top-offset);
		max-height: var(--sidepanel-max-height);
		padding-top: 0.5rem;
		display: none;

		@media (--large-viewport) {
			display: block;
		}
	}

	h3 {
		margin-left: 0.5rem;
		margin-bottom: 0.25rem;
	}

	ol {
		display: flex;
		flex-direction: column;
	}

	li {
		list-style: none;
		color: var(--color-text-secondary);
		cursor: default;
		border-radius: 4px;
		font-size: 0.875rem;
		line-height: 1rem;
	}

	a {
		font-family: var(--docs-sans);
		padding: 0.375rem 0.5rem;
		color: inherit;
		cursor: inherit;
		text-decoration: none;
		display: block;
		user-select: none;
		--fragment-color: transparent;
		border-radius: 4px;
		text-decoration: none;
	}

	a:visited {
		color: var(--color-text-secondary);
	}

	a:hover,
	a.active {
		/* font-weight: 600; */
		color: var(--color-text);
		background-color: var(--color-bg-tertiary);
		cursor: default;
		--fragment-color: var(--color-text-secondary);
		text-decoration: none;
	}

	a::after {
		content: '#';
		color: var(--fragment-color);
		margin-left: 0.5rem;
	}

	a:focus {
		outline: 1px solid var(--color-border-strong);
	}
</style>
