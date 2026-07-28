<script lang="ts">
	import { createEventDispatcher, onDestroy, tick } from 'svelte';
	import { goto } from '$app/navigation';
	import SearchIcon from '$lib/icons/Search.svg';
	import { missingSearchConfig, searchConfigured, warnIfUnconfigured } from '$lib/search/config.js';
	import { preloadSearchClient, searchDocs } from '$lib/search/client.js';
	import { groupResults, type ResultGroup, type SearchResult } from '$lib/search/mapping.js';

	export let open = false;

	const dispatch = createEventDispatcher<{ close: void }>();

	const DEBOUNCE_MS = 180;
	const LISTBOX_ID = 'db-search-listbox';

	/* Somewhere to go when the index has nothing. Deliberately hand-picked
	 * rather than generated, so the empty state is still useful. */
	const BROWSE_LINKS = [
		{ label: 'Getting started', href: '/getting-started' },
		{ label: 'Design principles', href: '/guidelines/design-principles' },
		{ label: 'Color', href: '/guidelines/color' },
		{ label: 'Button', href: '/components/button' },
		{ label: 'Table', href: '/components/table' }
	];

	type Status = 'idle' | 'loading' | 'ready' | 'error';

	let query = '';
	let status: Status = 'idle';
	let errorMessage = '';
	let groups: ResultGroup[] = [];
	let results: SearchResult[] = [];
	let activeIndex = 0;
	let lastQuery = '';

	let dialogEl: HTMLDivElement;
	let inputEl: HTMLInputElement;
	let resultsEl: HTMLDivElement;

	let debounceTimer: ReturnType<typeof setTimeout> | undefined;
	let requestId = 0;
	let previousOverflow = '';
	let wasOpen = false;

	$: if (open !== wasOpen) {
		wasOpen = open;
		if (open) handleOpen();
		else handleClose();
	}

	$: activeId = results[activeIndex] ? `db-search-option-${activeIndex}` : undefined;

	$: liveMessage = buildLiveMessage(status, results.length, lastQuery, searchConfigured);

	function buildLiveMessage(
		state: Status,
		count: number,
		forQuery: string,
		configured: boolean
	): string {
		if (!configured) return 'Search is unavailable because it has not been configured.';
		if (state === 'loading') return 'Searching…';
		if (state === 'error') return 'Search is unavailable right now.';
		if (state === 'ready') {
			if (count === 0) return `No results for ${forQuery}.`;
			return `${count} result${count === 1 ? '' : 's'} for ${forQuery}.`;
		}
		return '';
	}

	async function handleOpen() {
		warnIfUnconfigured();
		preloadSearchClient();

		previousOverflow = document.documentElement.style.overflow;
		document.documentElement.style.overflow = 'hidden';

		await tick();
		inputEl?.focus();
	}

	function handleClose() {
		clearTimeout(debounceTimer);
		requestId++;

		document.documentElement.style.overflow = previousOverflow;

		query = '';
		lastQuery = '';
		status = 'idle';
		errorMessage = '';
		groups = [];
		results = [];
		activeIndex = 0;
	}

	function close() {
		dispatch('close');
	}

	function onInput() {
		clearTimeout(debounceTimer);

		const trimmed = query.trim();

		if (!searchConfigured) return;

		if (trimmed === '') {
			requestId++;
			status = 'idle';
			groups = [];
			results = [];
			activeIndex = 0;
			return;
		}

		status = 'loading';
		debounceTimer = setTimeout(() => runSearch(trimmed), DEBOUNCE_MS);
	}

	async function runSearch(searchQuery: string) {
		const id = ++requestId;

		try {
			const response = await searchDocs(searchQuery);

			/* A slower earlier request must not overwrite a newer one. */
			if (id !== requestId) return;

			groups = groupResults(response.hits);
			results = groups.flatMap((group) => group.results);
			activeIndex = 0;
			lastQuery = searchQuery;
			status = 'ready';
		} catch (error) {
			if (id !== requestId) return;

			groups = [];
			results = [];
			lastQuery = searchQuery;
			errorMessage = error instanceof Error ? error.message : String(error);
			status = 'error';
			console.warn('[deskblocks-docs] Algolia search request failed:', error);
		}
	}

	function retry() {
		const trimmed = query.trim();
		if (trimmed) runSearch(trimmed);
	}

	async function moveActive(delta: number) {
		if (results.length === 0) return;

		activeIndex = (activeIndex + delta + results.length) % results.length;

		await tick();
		const option = resultsEl?.querySelector<HTMLElement>('[data-active="true"]');
		option?.scrollIntoView({ block: 'nearest' });
	}

	function openResult(result: SearchResult) {
		close();
		goto(result.href);
	}

	/* Tab and Shift+Tab must not escape the dialog while it is open. */
	function trapFocus(event: KeyboardEvent) {
		const focusable = Array.from(
			dialogEl.querySelectorAll<HTMLElement>(
				'a[href]:not([tabindex="-1"]), button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
			)
		).filter((element) => element.offsetParent !== null || element === document.activeElement);

		if (focusable.length === 0) {
			event.preventDefault();
			return;
		}

		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		const current = document.activeElement as HTMLElement | null;

		if (event.shiftKey && (current === first || !dialogEl.contains(current))) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && current === last) {
			event.preventDefault();
			first.focus();
		}
	}

	function onKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Escape':
				event.preventDefault();
				event.stopPropagation();
				close();
				break;
			case 'ArrowDown':
				event.preventDefault();
				moveActive(1);
				break;
			case 'ArrowUp':
				event.preventDefault();
				moveActive(-1);
				break;
			case 'Home':
				if (results.length === 0) break;
				event.preventDefault();
				activeIndex = 0;
				break;
			case 'End':
				if (results.length === 0) break;
				event.preventDefault();
				activeIndex = results.length - 1;
				break;
			case 'Enter': {
				const result = results[activeIndex];
				if (!result) break;
				event.preventDefault();
				openResult(result);
				break;
			}
			case 'Tab':
				trapFocus(event);
				break;
		}
	}

	/** Flat index of a result, so grouped markup can still address the flat list. */
	function indexOfResult(groupIndex: number, resultIndex: number): number {
		let offset = 0;
		for (let i = 0; i < groupIndex; i += 1) offset += groups[i].results.length;
		return offset + resultIndex;
	}

	onDestroy(() => {
		clearTimeout(debounceTimer);
		if (typeof document !== 'undefined' && wasOpen) {
			document.documentElement.style.overflow = previousOverflow;
		}
	});
</script>

{#if open}
	<!-- Escape closes the dialog, so the backdrop click is a redundant pointer
	     affordance; every interactive child is reachable by keyboard. -->
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions a11y-no-noninteractive-element-interactions -->
	<div class="search-backdrop" on:click={close} on:keydown={onKeydown}>
		<div
			class="search-dialog"
			role="dialog"
			aria-modal="true"
			aria-labelledby="db-search-label"
			bind:this={dialogEl}
			on:click|stopPropagation
		>
			<label class="sr-only" id="db-search-label" for="db-search-input">
				Search components, guidelines and resources
			</label>

			<div class="search-field">
				<span class="search-field-icon" aria-hidden="true">{@html SearchIcon}</span>

				<input
					id="db-search-input"
					class="search-field-input"
					type="text"
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					spellcheck="false"
					role="combobox"
					aria-autocomplete="list"
					aria-controls={LISTBOX_ID}
					aria-expanded={results.length > 0}
					aria-activedescendant={activeId}
					aria-describedby="db-search-status"
					placeholder={searchConfigured
						? 'Search components, guidelines, resources...'
						: 'Search unavailable'}
					disabled={!searchConfigured}
					bind:this={inputEl}
					bind:value={query}
					on:input={onInput}
				/>

				<button type="button" class="search-close" on:click={close}>Esc</button>
			</div>

			<div class="search-body" bind:this={resultsEl}>
				{#if !searchConfigured}
					<div class="search-state">
						<p class="search-state-title">Search is not configured</p>
						<p class="search-state-body">
							This build has no Algolia credentials, so the search index cannot be reached. Missing:
							{#each missingSearchConfig as name, i (name)}<code>{name}</code>{#if i < missingSearchConfig.length - 1}{', '}{/if}{/each}. Copy
							<code>.env.example</code> to <code>.env</code> and add the Algolia
							<strong>Search-Only</strong> key to switch search back on.
						</p>
						<div class="search-browse">
							{#each BROWSE_LINKS as link (link.href)}
								<a class="search-browse-link" href={link.href} on:click={close}>{link.label}</a>
							{/each}
						</div>
					</div>
				{:else if status === 'idle'}
					<div class="search-state">
						<p class="search-state-title">Search the documentation</p>
						<p class="search-state-body">
							Start typing to look through components, guidelines and tokens. Use
							<kbd>↑</kbd><kbd>↓</kbd> to move between results and <kbd>Enter</kbd> to open one.
						</p>
						<div class="search-browse">
							{#each BROWSE_LINKS as link (link.href)}
								<a class="search-browse-link" href={link.href} on:click={close}>{link.label}</a>
							{/each}
						</div>
					</div>
				{:else if status === 'loading'}
					<div class="search-state">
						<p class="search-state-title">Searching…</p>
						<div class="search-skeleton" aria-hidden="true">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				{:else if status === 'error'}
					<div class="search-state">
						<p class="search-state-title">Search is unavailable right now</p>
						<p class="search-state-body">
							The request to Algolia did not complete. This is usually a network problem or an
							invalid search key.
						</p>
						{#if errorMessage}
							<p class="search-state-detail">{errorMessage}</p>
						{/if}
						<button type="button" class="search-retry" on:click={retry}>Try again</button>
					</div>
				{:else if results.length === 0}
					<div class="search-state">
						<p class="search-state-title">No results for “{lastQuery}”</p>
						<p class="search-state-body">
							The search index is reachable but currently has no pages in it — the DocSearch
							crawler has not published a build yet, so every query comes back empty. Once the
							crawler runs, results will appear here automatically.
						</p>
						<p class="search-state-body">In the meantime, jump straight to a page:</p>
						<div class="search-browse">
							{#each BROWSE_LINKS as link (link.href)}
								<a class="search-browse-link" href={link.href} on:click={close}>{link.label}</a>
							{/each}
						</div>
					</div>
				{:else}
					<div class="search-results" role="listbox" id={LISTBOX_ID} aria-label="Search results">
						{#each groups as group, groupIndex (group.section)}
							<div
								class="search-group"
								role="group"
								aria-labelledby="db-search-group-{groupIndex}"
							>
								<p class="search-group-title" id="db-search-group-{groupIndex}">
									{group.section}
								</p>

								{#each group.results as result, resultIndex (result.id)}
									{@const flatIndex = indexOfResult(groupIndex, resultIndex)}
									<a
										class="search-result"
										class:is-active={flatIndex === activeIndex}
										data-active={flatIndex === activeIndex}
										id="db-search-option-{flatIndex}"
										role="option"
										aria-selected={flatIndex === activeIndex}
										aria-label={result.titleText}
										tabindex="-1"
										href={result.href}
										on:click={close}
										on:mousemove={() => (activeIndex = flatIndex)}
									>
										<span class="search-result-title">{@html result.titleHtml}</span>
										{#if result.breadcrumb}
											<span class="search-result-breadcrumb">{result.breadcrumb}</span>
										{/if}
										{#if result.snippetHtml}
											<span class="search-result-snippet">{@html result.snippetHtml}</span>
										{/if}
									</a>
								{/each}
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<p class="sr-only" id="db-search-status" role="status" aria-live="polite">{liveMessage}</p>

			<div class="search-footer">
				<span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
				<span><kbd>Enter</kbd> open</span>
				<span><kbd>Esc</kbd> close</span>
			</div>
		</div>
	</div>
{/if}

<style>
	.search-backdrop {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 6rem 1rem 2rem;
		background-color: color-mix(in srgb, var(--color-bg-inverse) 35%, transparent);
		backdrop-filter: blur(2px);
		animation: db-search-fade 120ms ease-out;

		@media (--small-viewport) {
			padding: 1rem;
		}
	}

	.search-dialog {
		width: min(40rem, 100%);
		max-height: min(32rem, 100%);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 10px;
		box-shadow: 0 16px 48px color-mix(in srgb, var(--color-bg-inverse) 22%, transparent);
		animation: db-search-rise 140ms ease-out;
	}

	.search-field {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid var(--color-border);
	}

	.search-field-icon {
		display: flex;
		align-items: center;
		flex: none;
	}

	.search-field-input {
		flex: 1;
		height: 2.25rem;
		border: none;
		outline: none;
		background: transparent;
		color: var(--color-text);
		font-family: var(--docs-sans);
		font-size: 0.9375rem;
	}

	.search-field-input::placeholder {
		color: var(--color-text-secondary);
	}

	.search-field-input:disabled {
		cursor: not-allowed;
		color: var(--color-text-disabled);
	}

	.search-close {
		flex: none;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		background-color: var(--color-bg-secondary);
		color: var(--color-text-secondary);
		font-family: var(--docs-mono);
		font-size: 0.75rem;
		padding: 0.125rem 0.375rem;
		cursor: default;
	}

	.search-close:hover {
		background-color: var(--color-bg-tertiary);
		color: var(--color-text);
	}

	.search-body {
		flex: 1;
		overflow-y: auto;
		overscroll-behavior: contain;
	}

	.search-state {
		padding: 1.5rem 1.25rem 1.75rem;
	}

	.search-state-title {
		font-family: var(--docs-header);
		font-size: 0.9375rem;
		font-weight: 520;
		color: var(--color-text);
		margin-bottom: 0.375rem;
	}

	.search-state-body {
		font-size: 0.8125rem;
		line-height: 1.6;
		color: var(--color-text-secondary);
		margin-bottom: 0.75rem;
		max-width: 34rem;
	}

	.search-state-detail {
		font-family: var(--docs-mono);
		font-size: 0.75rem;
		color: var(--color-text-danger);
		background-color: var(--color-bg-danger-secondary);
		border: 1px solid var(--color-border-danger);
		border-radius: 4px;
		padding: 0.375rem 0.5rem;
		margin-bottom: 0.75rem;
		overflow-wrap: anywhere;
	}

	.search-state code {
		font-family: var(--docs-mono);
		font-size: 0.75rem;
		color: var(--color-text);
		background-color: var(--color-bg-tertiary);
		border-radius: 3px;
		padding: 0.0625rem 0.25rem;
	}

	.search-retry {
		border: 1px solid var(--color-border);
		border-radius: 6px;
		background-color: var(--color-bg-secondary);
		color: var(--color-text);
		font-family: var(--docs-sans);
		font-size: 0.8125rem;
		padding: 0.3125rem 0.75rem;
		cursor: default;
	}

	.search-retry:hover {
		background-color: var(--color-bg-tertiary);
	}

	.search-browse {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.search-browse-link {
		font-size: 0.8125rem;
		text-decoration: none;
		white-space: nowrap;
		color: var(--color-text);
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 999px;
		padding: 0.1875rem 0.625rem;
	}

	.search-browse-link:hover {
		background-color: var(--color-bg-tertiary);
		text-decoration: none;
	}

	.search-skeleton {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
		max-width: 26rem;
	}

	.search-skeleton span {
		height: 0.75rem;
		border-radius: 4px;
		background-color: var(--color-bg-tertiary);
		animation: db-search-pulse 1.1s ease-in-out infinite;
	}

	.search-skeleton span:nth-child(2) {
		width: 80%;
		animation-delay: 120ms;
	}

	.search-skeleton span:nth-child(3) {
		width: 55%;
		animation-delay: 240ms;
	}

	.search-results {
		padding: 0.5rem;
	}

	.search-group + .search-group {
		margin-top: 0.5rem;
	}

	.search-group-title {
		font-size: 0.75rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-secondary);
		padding: 0.375rem 0.5rem;
	}

	.search-result {
		display: block;
		text-decoration: none;
		white-space: normal;
		border-radius: 6px;
		padding: 0.5rem 0.625rem;
		border: 1px solid transparent;
		color: var(--color-text);
	}

	.search-result:hover {
		text-decoration: none;
	}

	.search-result.is-active {
		background-color: var(--color-bg-secondary);
		border-color: var(--color-border-brand-strong);
	}

	.search-result-title {
		display: block;
		font-size: 0.875rem;
		color: var(--color-text);
	}

	.search-result-breadcrumb {
		display: block;
		font-size: 0.75rem;
		color: var(--color-text-tertiary);
		margin-top: 0.125rem;
	}

	.search-result-snippet {
		display: block;
		font-size: 0.8125rem;
		line-height: 1.5;
		color: var(--color-text-secondary);
		margin-top: 0.1875rem;
		overflow-wrap: anywhere;
	}

	/* Injected by the mapping module around matched terms. */
	.search-result :global(mark) {
		background-color: var(--color-bg-brand-secondary);
		color: var(--color-text-brand);
		border-radius: 2px;
		padding: 0 1px;
	}

	.search-footer {
		display: flex;
		column-gap: 1rem;
		align-items: center;
		padding: 0.5rem 0.75rem;
		border-top: 1px solid var(--color-border);
		background-color: var(--color-bg-secondary);
		font-size: 0.75rem;
		color: var(--color-text-secondary);

		@media (--small-viewport) {
			display: none;
		}
	}

	kbd {
		display: inline-block;
		border: 1px solid var(--color-border);
		border-radius: 3px;
		background-color: var(--color-bg);
		color: var(--color-text-secondary);
		font-family: var(--docs-mono);
		font-size: 0.6875rem;
		line-height: 1.4;
		padding: 0 0.25rem;
		margin-right: 0.125rem;
	}

	.search-field-input:focus-visible,
	.search-close:focus-visible,
	.search-retry:focus-visible,
	.search-browse-link:focus-visible,
	.search-result:focus-visible {
		outline: 2px solid var(--color-border-brand-strong);
		outline-offset: 2px;
	}

	@keyframes db-search-fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes db-search-rise {
		from {
			opacity: 0;
			transform: translateY(-0.5rem);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes db-search-pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.45;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.search-backdrop,
		.search-dialog,
		.search-skeleton span {
			animation: none;
		}
	}
</style>
