<script lang="ts">
	import { drawer, libStore } from '$lib/store.js';
	import DarkmodeIcon from '$lib/icons/Darkmode.svg';
	import GitHubIcon from '$lib/icons/Github.svg';
	import MenuIcon from '$lib/icons/Menu.svg';
	import SearchIcon from '$lib/icons/Search.svg';
	import { fade } from 'svelte/transition';
	import { tooltip } from '$lib/utils/tooltip.js';

	const version = `0.0.3`;
</script>

<header transition:fade>
	<div class="logo">
		<!-- Menu Icon -->
		<button class="icon-container menu-icon" on:click={drawer.toggle} aria-label="Toggle Menu">
			{@html MenuIcon}
		</button>

		<h1>Deskblocks</h1>

		<span class="version">{version}</span>
	</div>

	<input
		class="global-search"
		type="search"
		placeholder="Search components, guidelines, resources..."
	/>

	<div class="right-part">
		<!-- Search Icon -->

		<!-- <button aria-label="search" type="button" title="Search" class="icon-container search">
			<span class="sr-only">Search Components, Guidelines, Resources and more</span>
			{@html SearchIcon}
		</button> -->

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

<style>
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
		visibility: hidden;
	}

	@media (--small-viewport) {
		.icon-container {
			display: block;
		}
		.global-search {
			display: none;
		}
		/* .icon-container.search {
			display: block;
		} */
	}

	input {
		border: var(--color-border);
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		height: 2rem;
		grid-column: span 2;
		text-indent: 1rem;
		font-size: 0.875rem;
	}

	input::placeholder {
		color: var(--color-text-secondary);
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
