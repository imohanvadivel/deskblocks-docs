<script lang="ts">
	import { theme } from '$lib/store';

	export let alt: string;
	export let src: string;
	export let lightSrc: string | undefined = undefined;
	export let darkSrc: string | undefined = undefined;
	export let noBorder: boolean = false;
	export let height: string;
	export let showCaption: boolean = false;
	export let dynamic: boolean = false;
</script>

<figure class:noborder={noBorder}>
	{#if dynamic && $theme === 'light'}
		<img {height} {alt} src={lightSrc} />
	{:else if dynamic && $theme === 'dark'}
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
		max-width: 47rem;
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
