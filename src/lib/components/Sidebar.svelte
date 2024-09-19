<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { currentPage, drawer } from '$lib/store.js';
	import type { Meta, NavData, NavHeader } from '$lib/types.js';
	import { onMount } from 'svelte';
	export let navList: NavData;

	function handleClick(item: Meta | NavHeader) {
		if ($drawer) drawer.toggle();
		if ('slug' in item) $currentPage = item.slug;
	}

	// Initial page load
	if ($page.route.id === '/') {
		$currentPage = 'home';
	} else {
		$currentPage = $page.params.slug;
	}

	onMount(() => {
		const unsubscribe = navigating.subscribe((value) => {
			if (!value || !value.to) return;

			// Home page
			if (value.to.route.id === '/') {
				$currentPage = 'home';
			} else if (value.to.params) {
				$currentPage = value.to.params.slug;
			}
		});
		return unsubscribe;
	});
</script>

<nav class:active={$drawer} aria-label="Sidebar">
	<ol>
		{#each navList as item}
			{#if 'header' in item}
				<li>
					<h3>{item.header}</h3>
				</li>
			{:else}
				<li class="list" class:active={item.slug === $currentPage}>
					<a
						href={item.url}
						on:click={() => handleClick(item)}
						target={/http/.exec(item.url) ? '_blank' : undefined}
						role="menuitem"
						aria-current={item.slug === $currentPage ? 'page' : undefined}>{item.title}</a
					>
				</li>
			{/if}
		{/each}
	</ol>
</nav>

<!-- Scrim -->
{#if $drawer}
	<div
		class="scrim"
		aria-hidden="true"
		on:click={drawer.toggle}
		transition:fade={{ duration: 200 }}
	/>
{/if}

<style>
	nav {
		display: flex;
		flex-direction: column;
		row-gap: 1.25rem;
		grid-column: 1;
		position: sticky;
		top: var(--sidepanel-top-offset);
		/* max-height: var(--sidepanel-max-height); */
		overflow-y: auto;
		height: calc(100vh - var(--sidepanel-top-offset));
		background-color: var(--color-bg);
		padding-bottom: 5rem;
		transition: left 100ms ease-in-out;
		padding: 0 0.5rem 3rem 0.5rem;

		@media (--small-viewport) {
			position: fixed;
			--nav-width: 16rem;
			top: var(--sticky-header-height);
			bottom: 0;
			left: calc(-1 * var(--nav-width) - 1rem);
			width: var(--nav-width);
			height: 100dvh;
			/* height: calc(100vh - var(--sticky-header-height)); */
			max-height: unset;
			padding: 1rem 2rem 5rem 0.5rem;
			z-index: 50;
		}
	}

	@media (--small-viewport) {
		nav.active {
			left: 0;
		}
	}

	h3 {
		margin-left: 0.5rem;
		margin-bottom: 0.25rem;
		margin-top: 1.25rem;
	}
	ol {
		display: flex;
		flex-direction: column;
		/* row-gap: 0.25rem; */
	}
	.list {
		font-size: 0.875rem;
		line-height: 1rem;
		border-radius: 4px;
		color: var(--color-text-secondary);
		cursor: default;
		padding: 0.0625rem;
	}
	.list:hover {
		/* font-weight: 600;  */
		color: var(--color-text);
		background-color: var(--color-bg-hover);
	}
	.list.active {
		/* font-weight: 600; */
		color: var(--color-text);
		background-color: var(--color-bg-tertiary);
		/* border: 1px solid var(--color-border); */
	}
	nav a {
		font-family: var(--docs-sans);
		color: var(--color-text-secondary);
		cursor: inherit;
		text-decoration: none;
		display: block;
		padding: 0.375rem 0.5rem;
		user-select: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	nav a:visited {
		color: var(--color-text-secondary);
	}

	nav a:focus {
		outline: 1px solid var(--color-text);
		border-radius: 4px;
	}

	.scrim {
		position: fixed;
		top: var(--sticky-header-height);
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		background: rgba(0, 0, 0, 0.5);
		display: none;
		@media (--small-viewport) {
			display: block;
		}
	}
</style>
