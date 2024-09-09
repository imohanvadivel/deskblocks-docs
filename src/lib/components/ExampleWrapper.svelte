<script lang="ts">
	import { draw } from 'svelte/transition';
	import { toastMessage, libStore } from '$lib/store';
	import '$lib/styles/syntaxHighlighter.css';
	import { cubicOut, quadInOut } from 'svelte/easing';
	import Select from './Select.svelte';

	// the source of the example,
	export let src: any;

	// all meta tags of the code block
	export let meta: any;

	const hideToolbar = meta?.hideToolbar || false;
	const hidePreview = meta?.hidePreview || false;
	const hideAppearance = meta?.hideAppreance || false;
	const hideTheme = meta?.hideTheme || false;
	const hideFont = meta?.hideFont || false;

	$: src, meta;

	let themeOptions = [
		{ value: 'blue', label: 'Blue' },
		{ value: 'red', label: 'Red' },
		{ value: 'green', label: 'Green' },
		{ value: 'orange', label: 'Orange' },
		{ value: 'yellow', label: 'Yellow' }
	];

	let appearenceOptions = [
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' }
	];

	let fontOptions = [
		{ value: 'puvi', label: 'Zoho Puvi' },
		{ value: 'lato', label: 'Lato' },
		{ value: 'roboto', label: 'Roboto' }
	];

	let isTextCopying = false;

	function handleCopy() {
		navigator.clipboard.writeText(src);
		toastMessage.set('Code copied to your clipboard');
		isTextCopying = true;
		setTimeout(() => {
			isTextCopying = false;
		}, 2000);
	}
</script>

<section class="example-wrapper">
	{#if !hideToolbar}
		<header>
			{#if !hideAppearance}
				<Select
					options={appearenceOptions}
					label="Appearance:"
					bind:selected={$libStore.appearance}
				/>
			{/if}

			{#if !hideTheme}
				<Select options={themeOptions} label="Theme:" bind:selected={$libStore.theme} />
			{/if}

			{#if !hideFont}
				<Select options={fontOptions} label="Font:" bind:selected={$libStore.font} />
			{/if}
		</header>
	{/if}
	{#if !hidePreview}
		<div class="example">
			<slot name="example" />
		</div>
	{/if}

	<div class="code" class:no-preview={hidePreview}>

		<pre class="language-svelte"><slot name="code" /></pre>
		<button class="copy" class:copying={isTextCopying} on:click={handleCopy}>
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{#if !isTextCopying}
					<path
						d="M18 9V18H9V9H18ZM18 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9V18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8946 8.73478 19 9 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8Z"
						fill="black"
					/>
					<path
						d="M6 13H5V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H13V6H6V13Z"
						fill="black"
					/>
				{:else}
					<path
						in:draw={{ duration: 1000, easing: quadInOut }}
						d="M10.5 16L6 11.5L6.707 10.793L10.5 14.5855L17.293 7.79297L18 8.49997L10.5 16Z"
						fill="black"
					/>
				{/if}
			</svg>
		</button>
	</div>
</section>

<style>
	section {
		border: 1px solid var(--color-border);
		border-radius: 6px;
		overflow: hidden;
		/* background-color: var(--color-bg); */
	}

	header {
		display: flex;
		padding: 0 0.5rem;
		column-gap: 0.5rem;
		user-select: none;
		background-color: var(--db-color-bg);
		color: var(--db-color-text);
	}

	.code:not(.no-preview) {
		border-top: 1px solid var(--color-border);
	}

	.example {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.5rem;
		row-gap: 1rem;
		align-items: center;
		background-color: var(--db-color-bg);
	}

	.code {
		position: relative;
	}

	.copy {
		position: absolute;
		top: 0.6rem;
		right: 0.5rem;
		border: 1px solid var(--color-border);
		background-color: var(--color-bg-secondary);
		display: flex;
		border-radius: 4px;
		padding: 0.125rem;
	}
	.copy:hover,
	.copy.copying {
		border-color: var(--color-border-strong);
	}

	.copy svg path {
		fill: var(--color-text-secondary);
	}

	.copy:hover svg path,
	.copy.copying svg path {
		fill: var(--color-text);
	}
</style>
