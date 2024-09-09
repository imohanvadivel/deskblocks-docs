<script lang="ts">
	const slots = $$props.$$slots;
</script>

{#if slots}
	<th>
		<slot />
	</th>
{/if}

<style>
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
</style>
