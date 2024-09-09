<script lang="ts">
	import ChevronDown from '$lib/icons/ChevronDown.svg';

	export let options: {
		value: string;
		label: string;
	}[];

	export let label: string = '';
	export let selected: string;

	$: value = options.find((o) => o.value === selected)?.label;
</script>

<section>
	<label for="appearence">{label}</label>
	<span class="value">{value}</span>
	<select id="appearence" bind:value={selected}>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
	<div class="icon">
		{@html ChevronDown}
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0.5rem;
		/* color: inherit; */
	}

	section :global(svg) {
		pointer-events: none;
		fill: var(--figma-color-text);
	}
	select {
		opacity: 0;
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		height: 100%;
	}
	label {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--figma-color-text-secondary);
		margin-right: 0.25rem;
		pointer-events: none;
	}
	.value {
		color: var(--color-text);
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 550;
		pointer-events: none;
		margin-right: -0.0625rem;
		color: var(--figma-color-text);
	}
	.icon :global(path) {
		fill: var(--db-color-icon);
	}
</style>
