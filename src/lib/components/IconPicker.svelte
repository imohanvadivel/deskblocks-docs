<script lang="ts">
	import { Icon, Text } from 'deskblocks';
	import * as icons from 'deskblocks/icons';
	import { toastMessage } from '$lib/store';
	import { tooltip } from '$lib/utils/tooltip.js';
	import { tr } from '$lib/customComponent/componentLayout.svelte';

	let inputisFocused = false;
	let searchby = '';

	let iconSearch = `<svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m18.3972 18.6046c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071zm.7062-3.5529c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517z" fill="#000" fill-rule="evenodd"></path></svg>`

	const proprietaryIcons = [
		'IconTask',
		'IconContact',
		'IconSlaEscalation',
		'IconCustomModule',
		'IconAccount',
		'IconCreatedTime',
		'IconMacros',
		'IconTicket',
		'IconClosedTime',
		'IconFeedbackWidget',
		'IconSentimentNeutral',
		'IconOnhold',
		'IconBlueprint',
		'IconArchive',
		'IconMail',
		'IconRoles',
		'IconAgent',
		'IconDesk',
		'IconEvent',
		'IconForum',
		'IconTeam',
		'IconSelfService',
		'IconContract',
		'IconOverdue',
		'IconSnippet',
		'IconChat',
		'IconArticle',
		'IconFacebook',
		'IconSkills',
		'IconPeek',
		'IconTimeEntry',
		'IconPaidUser',
		'IconThread',
		'IconSentimentNegative',
		'IconPhone',
		'IconSentimentPositive',
		'IconCall',
		'IconWeb',
		'IconDepartment',
		'IconActivity',
		'IconTwitter',
		'IconSandbox',
		'IconRolesAndSub'
	];

	function splitOnCaps(str: string) {
		let strAry = str.match(/[A-Z][a-z]+/g);
		return strAry?.slice(1).join(' ');
	}

	function checkProprietary(name: string) {
		if (proprietaryIcons.includes(name)) return true;
		return false;
	}

	const allIcons = Object.keys(icons).map((e) => ({
		name: splitOnCaps(e),
		svg: icons[e as keyof typeof icons],
		value: e,
		isProprietary: checkProprietary(e)
	}));

	let iconAry = [...allIcons].sort((a, b) => a.name!.localeCompare(b.name!));

	// copy to clipboard
	function handleClick(value: string) {
		navigator.clipboard.writeText(value);
		toastMessage.set(`The icon name "${value}" has been copied to the clipboard.`);
	}

	function handleSearch(ev: any) {
		const query = ev.target?.value;

		if (query === '') {
			iconAry = [...allIcons];
		} else {
			iconAry = allIcons.filter((icon) => icon.name?.toLowerCase().includes(query.toLowerCase()));
		}
	}
</script>

<div class="wrapper">
	<div class="search-cnt">
		<div class="icon-search">
			<svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m18.3972 18.6046c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071zm.7062-3.5529c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517z" fill="var(--color-icon-secondary)" fill-rule="evenodd"></path></svg>
		</div>
		<input
			class="search"
			type="search"
			bind:value={searchby}
			placeholder="Search Icons"
			on:input={handleSearch}
			on:focus={() => (inputisFocused = true)}
			on:blur={() => (inputisFocused = false)}
		/>
		<div class="close-icon" class:active={searchby.length > 0}>×</div>
	</div>

	{#if iconAry.length === 0}
		<p class="no-icons">No icons found</p>
	{/if}

	<section>
		{#each iconAry as icon}
			<button
				data-value={icon.value}
				on:click={() => handleClick(icon.value)}
			>
			{#if icon.isProprietary}
				<div class="proprietary" use:tooltip={`Proprietary Icon: \n This icon should only be used to refer ${icon.name}`}>🄿</div>
			{/if}
				<Icon icon={icon.svg} size="medium" />
				<Text size="small" type="secondary" align="center">{icon.name}</Text>
			</button>
		{/each}
	</section>
</div>

<style>
	.wrapper {
		grid-column: span 4;
		max-width: 56rem;
	}
	.search-cnt {
		position: relative;
		width: fit-content;
	}
	.search-cnt :global(.icon-component) {
		position: absolute;
		top: 1rem;
		left: 0.125rem;
	}
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
		grid-auto-rows: 6rem;
		cursor: auto;
		width: 100%;
		margin-bottom: 5rem;
	}

	button {
		display: grid;
		justify-items: center;
		box-shadow: inset 0 0 0 1px var(--color-border);
		margin-right: -1px;
		margin-top: -1px;
		row-gap: 0.5rem;
		padding: 1rem 0.5rem 0.5rem 0.5rem;
		border: none;
		outline: none;
		background-color: var(--color-bg);
		overflow: hidden;
		position: relative;
	}

	.proprietary {
		position: absolute;
		left: 0.25rem;
		top: 0.25rem;
		color: var(--color-text-tertiary);
		font-size: 0.6rem;
		font-weight: 400;
		font-family: var(--font-stack);
	}

	button:hover .proprietary {
		color: var(--db-color-text-brand);
		font-weight: 700;
	}

	button:hover {
		box-shadow: inset 0 0 0 2px var(--db-color-border-brand-strong);
		z-index: 5;
		/* background-color: var(--figma-color-bg-brand-tertiary); */
		background-color: var(--db-color-bg-brand-secondary);
	}
	button:active {
		box-shadow: inset 0 0 0 2px var(--color-border);
		background-color: var(--color-bg);
	}

	button :global(span) {
		color: var(--color-text-secondary);
		text-align: center;
		user-select: none;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2; /* Limit to 2 lines */
		line-clamp: 2;
		-webkit-box-orient: vertical;
		line-height: 1.25;
	}
	button:hover :global(span) {
		color: var(--color-text);
	}
	button :global(.icon svg path) {
		fill: var(--color-text);
	}
	.search {
		color: var(--color-text);
		border: var(--color-border);
		background-color: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		height: 2rem;
		grid-column: span 2;
		padding: 0 1rem;
		font-size: 0.875rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		text-indent: 1rem;
		width: 14rem;
	}
	input[type='search']::-webkit-search-cancel-button {
		-webkit-appearance: none;
		appearance: none;
		height: 1em;
		width: 4em;
	}
	.close-icon {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		color: var(--color-text);
		display: none;
		pointer-events: none;
		cursor: default;
	}
	.close-icon.active {
		display: block;
	}

	.search:focus {
		outline: 2px solid var(--db-color-border-brand-strong);
	}

	.no-icons {
		text-align: center;
		color: var(--color-text-secondary);
		padding: 6rem 0;
	}
	.icon-search{
		position: absolute;
		left: 0;
		top: 1rem;
	}
</style>
