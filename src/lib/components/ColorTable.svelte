<script lang="ts">
	import Code from '$lib/customComponent/code.svelte';
	import { libStore, toastMessage } from '$lib/store';
	import colorData from '$lib/utils/colorData.json';
	import ColorSwatch from './ColorSwatch.svelte';

	function handleClick(value: string, type: string = 'hex') {
		value = value.toUpperCase();
		navigator.clipboard.writeText(value);
		type === 'hex'
			? toastMessage.set(`Hex code ${value} has been copied to the clipboard.`)
			: toastMessage.set(`The token "${value}" has been copied to the clipboard.`);
	}

	export let lightColors: string[][];
	export let darkColors: string[][];
	let colorTokens: string[][];

	libStore.subscribe((value) => {
		colorTokens = value.appearance === 'light' ? lightColors : darkColors;
	});
</script>

<div class="table-wrapper">
	<table>
		<thead>
			<tr>
				<th>Variable</th>
				<th>Blue</th>
				<th>Red</th>
				<th>Green</th>
				<th>Orange</th>
				<th>Yellow</th>
			</tr>
		</thead>

		<tbody>
			{#each colorTokens as data, i}
				<tr>
					<td class="variable-name" on:click={() => handleClick(data[0], 'token')}
						><Code>{data[0]}</Code></td
					>

					{#each [1, 2, 3, 4, 5] as index}
						<td class="hex-cnt" on:click={() => handleClick(data[index])}>
							<div class="right-part">
								<ColorSwatch color={data[index]} size="medium" />
								<span>{data[index]}</span>
							</div>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.right-part {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
		font-weight: 350;
		letter-spacing: 0.01em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		font-feature-settings:
			'kern' 1,
			'tnum' 1;
	}
	.hex-cnt:hover .right-part {
		color: var(--color-text);
		font-weight: 400;
	}

	.variable-name {
		min-width: 21.375rem;
	}
	td {
		cursor: default;
	}
	td:hover {
		background-color: var(--color-bg-tertiary);
		cursor: default;
	}

	/* Table */
	.table-wrapper {
		display: inline-block;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		width: fit-content;
		min-width: var(--min-width);
		max-width: 100%;
		overflow-x: auto;
	}
	table {
		border-collapse: collapse;
		border-style: hidden;
		width: 100%;
	}
	table :global(tbody tr:hover) {
		background-color: var(--color-bg-secondary);
	}

	table :global(tr td code) {
		margin: 0 -0.25rem;
	}
	th {
		user-select: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
		font-size: 0.75rem;
		color: var(--color-text);
		border-bottom: 1px solid var(--color-border);
		border-right: 1px solid var(--color-border);
		padding: 0.5rem 1rem;
		text-align: left;
	}
	td {
		border-bottom: 1px solid var(--color-border);
		padding: 0.5rem 1rem;
		text-align: left;
		font-size: 0.875rem;
		border-right: 1px solid var(--color-border);
	}
</style>
