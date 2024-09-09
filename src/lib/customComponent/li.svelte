<li>
	<slot />
</li>

<style>
	li {
		list-style: disc;
    padding-bottom: 0.125rem;
	}
	li::marker {
		color: var(--color-text-secondary);
	}
</style>
