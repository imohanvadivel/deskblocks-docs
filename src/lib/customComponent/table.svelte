<div class="table-wrapper">
	<table>
		<slot />
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

	table :global(tbody tr:hover) {
		background-color: var(--color-bg-secondary);
	}

	table :global(tr td code) {
		margin: 0 -0.25rem;
	}
</style>
