<script lang="ts">
	export let type: 'h1-lora';
	export let tag: string;
</script>

<svelte:element this={tag} class={type}>
	<slot />
</svelte:element>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,400..700&display=swap');


	.h1-lora {
		font-size: 1.5rem;
		font-family: 'Lora', serif;
		font-optical-sizing: auto;
		font-weight: 600;
		font-style: italic;
	}
</style>
