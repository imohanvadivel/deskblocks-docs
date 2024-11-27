<script lang="ts">
	import { libStore } from '$lib/store';

	export let alt: string;
	export let src: string;
	export let lightSrc: string | undefined = undefined;
	export let darkSrc: string | undefined = undefined;
	export let noBorder: boolean = false;
	export let height: string;
	export let showCaption: boolean = false;
	export let dynamic: boolean = false;
	export let maxWidth: string = '47rem';
</script>

<figure class:noborder={noBorder} style:max-width={maxWidth}>
	{#if dynamic && $libStore.appearance === 'light'}
		<img {height} {alt} src={lightSrc} />
	{:else if dynamic && $libStore.appearance === 'dark'}
		<img {height} {alt} src={darkSrc} />
	{:else}
		<img {height} {alt} {src} />
	{/if}
	{#if alt && showCaption}
		<figcaption>{alt}</figcaption>
	{/if}
</figure>

<style>
	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: var(--max-width);
		margin-top: 1rem;
		border: 1px solid var(--color-border);
		border-radius: 0.25rem;
		overflow: hidden;
	}

	figure.noborder {
		border: 1px solid transparent;
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
