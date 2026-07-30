<script lang="ts">
	import { drawer, libStore } from '$lib/store.js';
	import DarkmodeIcon from '$lib/icons/Darkmode.svg';
	import GitHubIcon from '$lib/icons/Github.svg';
	import MenuIcon from '$lib/icons/Menu.svg';
	import SearchIcon from '$lib/icons/Search.svg';
	import { fade } from 'svelte/transition';
	import { tooltip } from '$lib/utils/tooltip.js';
	import { onMount } from 'svelte';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import { searchConfigured, warnIfUnconfigured } from '$lib/search/config.js';

	/* The `deskblocks` version shown in the header badge, read from the library's
	 * own package.json via its exports map. This used to be a hand-synced literal
	 * because Vite could not resolve the specifier through the local source
	 * symlink — the docs now depend on the published package, so it resolves, and
	 * the badge can no longer drift from the installed version. */
	import { version } from 'deskblocks/package.json';

	let searchOpen = false;
	let searchInput: HTMLInputElement;
	let searchButton: HTMLButtonElement;
	/* Whatever opened the dialog, so focus can go back to it on close. */
	let searchTrigger: HTMLElement | null = null;
	/* Rendered server-side as the Mac form, corrected on mount. */
	let shortcutHint = '⌘K';

	onMount(() => {
		if (/Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent)) return;
		shortcutHint = 'Ctrl K';
	});

	function openSearch(event?: Event) {
		warnIfUnconfigured();
		const target = event?.currentTarget;
		searchTrigger = target instanceof HTMLElement ? target : null;
		searchOpen = true;
	}

	function closeSearch() {
		searchOpen = false;

		/* Prefer the element that opened it; on small viewports the header input
		 * is display:none and cannot take focus, so fall back to the icon. */
		const fallback = searchInput?.offsetParent ? searchInput : searchButton;
		const target = searchTrigger?.offsetParent ? searchTrigger : fallback;
		target?.focus();
		searchTrigger = null;
	}

	function onTriggerKeydown(event: KeyboardEvent) {
		if (event.key !== 'Enter' && event.key !== ' ') return;
		event.preventDefault();
		openSearch(event);
	}

	function onWindowKeydown(event: KeyboardEvent) {
		if (event.key.toLowerCase() !== 'k' || !(event.metaKey || event.ctrlKey)) return;
		event.preventDefault();
		if (searchOpen) closeSearch();
		else openSearch();
	}
</script>

<svelte:window on:keydown={onWindowKeydown} />

<header transition:fade>
	<div class="logo">
		<!-- Menu Icon -->
		<button class="icon-container menu-icon" on:click={drawer.toggle} aria-label="Toggle Menu">
			{@html MenuIcon}
		</button>

		<a href="/" class="logo-link">
			<h1>Deskblocks</h1>
		</a>

		<span class="version">{version}</span>
	</div>

	<div class="global-search">
		<input
			class="global-search-input"
			type="search"
			readonly
			disabled={!searchConfigured}
			aria-haspopup="dialog"
			aria-label="Search components, guidelines, resources"
			title={searchConfigured ? undefined : 'Search is unavailable: Algolia is not configured'}
			placeholder={searchConfigured
				? 'Search components, guidelines, resources...'
				: 'Search unavailable — not configured'}
			bind:this={searchInput}
			on:click={openSearch}
			on:keydown={onTriggerKeydown}
		/>
		{#if searchConfigured}
			<kbd class="global-search-hint" aria-hidden="true">{shortcutHint}</kbd>
		{/if}
	</div>

	<div class="right-part">
		<!-- Search Icon — the only search affordance on small viewports, where the
		     header input is hidden. -->
		<button
			aria-label="search"
			type="button"
			class="icon-container search"
			aria-haspopup="dialog"
			aria-expanded={searchOpen}
			disabled={!searchConfigured}
			bind:this={searchButton}
			on:click={openSearch}
		>
			<span class="sr-only">Search Components, Guidelines, Resources and more</span>
			{@html SearchIcon}
		</button>

		<!-- DarkMode Icon -->
		<button
			use:tooltip={`Toggle Darkmode`}
			aria-label="dark mode"
			type="button"
			on:click={libStore.toggleAppearance}
			class="icon-container"
		>
			<span class="sr-only">Toggle Darkmode</span>
			{@html DarkmodeIcon}
		</button>

		<div class="theme-container" use:tooltip={`Switch Theme`}>
			<div class="theme-selector"></div>
			<span>{$libStore.theme}</span>
			<select bind:value={$libStore.theme}>
				<option value="blue">--Choose Theme--</option>
				<option value="blue">Blue</option>
				<option value="red">Red</option>
				<option value="green">Green</option>
				<option value="orange">Orange</option>
				<option value="yellow">Yellow</option>
			</select>
		</div>

		<!-- GitHub Icon -->
		<a
			href="https://github.com/imohanvadivel/deskblocks"
			class="icon-container"
			target="_blank"
			aria-label="View on GitHub"
			use:tooltip={`View on GitHub`}
		>
			<span class="sr-only">View on GitHub</span>
			{@html GitHubIcon}
		</a>
	</div>
</header>

<SearchModal open={searchOpen} on:close={closeSearch} />

<style>
	.logo-link {
		text-decoration: none;
		color: var(--color-text);
		cursor: default;
	}

	.theme-container {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
		text-transform: capitalize;
		color: var(--color-text-secondary);
		position: relative;
		border-radius: 6px;
		height: 2.5rem;
		padding: 0 0.5rem;
		font-size: 0.875rem;
	}
	.theme-container:hover {
		background-color: var(--color-bg-secondary);
	}
	header {
		position: sticky;
		top: 0;
		height: var(--sticky-header-height);
		border-bottom: 1px solid var(--color-border);
		background: var(--color-bg);
		grid-column: 1/-1;
		display: grid;
		align-items: center;
		grid-template-columns: var(--main-column);
		grid-column-gap: var(--main-column-gap);
		background-color: var(--color-bg);
		z-index: 10;
		/* padding: 0 .5rem; */
		/* margin: 0 1px; */
	}

	button {
		background-color: var(--color-bg);
		border: none;
		padding: 0;
	}

	.logo {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		margin-left: 1rem;
	}

	.version {
		padding: 1px 6px;
		border-radius: 4px;
		font-size: 0.875rem;
		font-weight: 400;
		user-select: none;
		color: var(--db-color-text-brand);
		/* color: var(--color-text-secondary); */
		background-color: var(--db-color-bg-brand-secondary);
		/* background-color: var(--color-bg-secondary); */
		border: 1px solid var(--db-color-border-brand);
		/* border: 1px solid var(--color-border); */
	}

	.icon-container {
		cursor: default;
		position: relative;
	}

	.icon-container.menu-icon {
		display: none;
		margin-left: -0.5rem;
		@media (--small-viewport) {
			display: block;
		}
	}

	.global-search {
		position: relative;
		display: flex;
		align-items: center;
		grid-column: span 2;
	}

	/* The icon is the search affordance only where the input is hidden. */
	.icon-container.search {
		display: none;
	}

	@media (--small-viewport) {
		.icon-container {
			display: block;
		}
		.global-search {
			display: none;
		}
		.icon-container.search {
			display: flex;
		}
	}

	.global-search-input {
		width: 100%;
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		height: 2rem;
		text-indent: 1rem;
		/* Room for the ⌘K hint. */
		padding-right: 3.25rem;
		font-family: var(--docs-sans);
		font-size: 0.875rem;
		color: var(--color-text);
		cursor: default;
	}

	.global-search-input:hover:not(:disabled) {
		background-color: var(--color-bg-tertiary);
	}

	.global-search-input:focus-visible {
		outline: 2px solid var(--color-border-brand-strong);
		outline-offset: 1px;
	}

	.global-search-input:disabled {
		background-color: var(--color-bg);
		color: var(--color-text-tertiary);
		cursor: not-allowed;
	}

	.global-search-input::placeholder {
		color: var(--color-text-secondary);
	}

	.global-search-hint {
		position: absolute;
		right: 0.5rem;
		pointer-events: none;
		border: 1px solid var(--color-border);
		border-radius: 3px;
		background-color: var(--color-bg);
		color: var(--color-text-secondary);
		font-family: var(--docs-mono);
		font-size: 0.6875rem;
		line-height: 1.4;
		padding: 0 0.25rem;
	}

	.icon-container.search:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.right-part {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		grid-column-start: -2;
		justify-self: end;
		@media (--large-viewport) {
			justify-self: start;
		}
	}

	.theme-selector {
		width: 1.25rem;
		height: 1.25rem;
		background-color: var(--db-color-bg-brand);
		border-radius: 50%;
		border: 1px solid var(--db-color-border-brand-strong-hover);
		position: relative;
	}
	select {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 6px;
	}
	.icon-container:hover {
		background-color: var(--color-bg-secondary);
	}
	.icon-container:hover :global(path) {
		fill: var(--color-text);
	}
</style>
