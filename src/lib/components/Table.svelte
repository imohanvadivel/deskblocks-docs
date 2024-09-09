<script lang="ts">
	export let data: string[][];
	export let noHeader: boolean = false;
	export let minWidth: string | undefined = undefined;
	export let columns: columnType[] | undefined = undefined;

	type columnType = 'reg' | 'mono';
	let header = noHeader ? null : (data.shift() as string[]);

	function checkMono(index: number) {
		if (columns) {
			return columns[index] === 'mono';
		}
		return false;
	}
</script>

<div class="table-wrapper" style:--min-width={minWidth}>
	<table>
		{#if header}
			<thead>
				<tr>
					{#each header as el}
						<th>{el}</th>
					{/each}
				</tr>
			</thead>
		{/if}
		<tbody>
			{#each data as row}
				<tr>
					{#each row as el, i}
						<td> <span class:mono={checkMono(i)}>{el}</span></td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		border-collapse: collapse;
		border-style: hidden;
		width: 100%;
	}

	.table-wrapper {
		display: inline-block;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		width: fit-content;
		min-width: var(--min-width);
	}

	th,
	td {
		border-bottom: 1px solid var(--color-border);
		padding: 0.5rem 1rem;
		text-align: left;
		font-size: 0.875rem;
		border-right: 1px solid var(--color-border);
	}

	th {
		user-select: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
		font-size: 0.75rem;
		color: var(--color-text);
	}
	.mono {
		font-family: var(--docs-mono);
		font-weight: 400;
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		padding: 0.125rem 0.25rem;
		border-radius: 4px;
		font-size: 12px;
		margin-left: -0.25rem;
		margin-right: -0.25rem;
	}

	/* .prop {
		font-weight: 500;
		color: var(--color-text);
	}

	.type,
	.default {
		color: var(--color-text-secondary);
	} */

	tbody tr:hover {
		background-color: var(--color-bg-secondary);
	}
</style>
