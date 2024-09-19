<script lang="ts">
	export let header: string;
	export let type: 'info' | 'warning' | 'danger' | 'success';
	export let maxWidth: string;

	$: bgColor = {
		info: 'var(--color-bg-brand-secondary)',
		warning: 'var(--color-bg-warning-secondary)',
		danger: 'var(--color-bg-danger-secondary)',
		success: 'var(--color-bg-success-secondary)'
	};

	$: borderColor = {
		info: 'var(--color-border-brand)',
		warning: 'var(--color-border-warning)',
		danger: 'var(--color-border-danger)',
		success: 'var(--color-border-success)'
	};

	$: textColor = {
		info: 'var(--color-text-brand)',
		warning: 'var(--color-text-warning)',
		danger: 'var(--color-text-danger)',
		success: 'var(--color-text-success)'
	};
</script>

<section class="info" style="background-color: {bgColor[type]}; border: 0.0625rem solid {borderColor[type]}; --info-max-width: {maxWidth}">
	{#if header}
		<h3 style="color: {textColor[type]}">{header}</h3>
	{/if}
	<div>
		<slot />
	</div>
</section>

<style>
	h3 {
		font-weight: 500;
		margin-bottom: 0.5rem;
		color: var(--color-text);
	}
	section {
		padding: 1rem 1.25rem 1rem 1.25rem;
		border-radius: 4px;
		border: 1px solid var(--color-border);
		background-color: var(--color-bg-secondary);
		font-size: 0.875rem;
		/* margin-top: 1rem; */
		margin-bottom: 1.5rem;
		color: var(--color-text);
		max-width: var(--info-max-width);
	}

	section :global(ul) {
		margin-top: 0.5rem;
		margin-left: 1.25rem;
	}

	section :global(p) {
		margin: 0.5rem 0;
	}
	section :global(p:last-child) {
		margin-bottom: unset;
	}
</style>
