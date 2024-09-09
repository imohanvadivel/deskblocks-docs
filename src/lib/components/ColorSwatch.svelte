<script lang="ts">
	export let color: string;
	export let size = 'small';
</script>

<span class:medium={size == 'medium'} class="color-tile" style="background-color: {color};" />

<!-- // <span class="color-tile" style="background-color: {data[index]};" /> -->

<style>
	.color-tile {
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
		margin-bottom: -1px;
		border-radius: 0.125rem;
		border: 1px solid var(--color-border);
	}
	.color-tile.medium {
		width: 1rem;
		height: 1rem;
		margin-bottom: 0px;
	}
</style>
