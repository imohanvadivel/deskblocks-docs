<script>
	import { draw } from 'svelte/transition';
	import { toastMessage } from '$lib/store';
	import { quadInOut } from 'svelte/easing';

	let isTextCopying = false;

	function handleCopy() {
		navigator.clipboard.writeText('src');
		toastMessage.set('Code copied to your clipboard');
		isTextCopying = true;
		setTimeout(() => {
			isTextCopying = false;
		}, 2000);
	}
</script>

<pre><slot /></pre>
  <!-- <button class="copy" class:copying={isTextCopying} on:click={handleCopy}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {#if !isTextCopying}
				<path
					d="M18 9V18H9V9H18ZM18 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9V18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8946 8.73478 19 9 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8Z"
					fill="black"
				/>
        <path
					d="M6 13H5V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H13V6H6V13Z"
					fill="black"
				/>
			{:else}
				<path
					in:draw={{ duration: 1000, easing: quadInOut }}
					d="M10.5 16L6 11.5L6.707 10.793L10.5 14.5855L17.293 7.79297L18 8.49997L10.5 16Z"
					fill="black"
				/>
			{/if}
    </svg>
  </button> -->



<style>
	pre {
		font-size: 0.8125rem;
		text-shadow: none;
		font-family: var(--docs-mono);
		font-weight: 450;
		font-feature-settings: var(--jetbrains-font-setting);
		border: 1px solid var(--color-border);
		border-radius: 6px;
		padding: 1rem 1rem;
		overflow: auto;
		background: var(--color-bg-secondary);
		position: relative;
	}

	.copy {
		position: absolute;
		top: 0.6rem;
		right: 0.5rem;
		border: 1px solid var(--color-border);
		background-color: var(--color-bg-secondary);
		display: flex;
		border-radius: 4px;
		padding: 0.125rem;
	}
	.copy:hover,
	.copy.copying {
		border-color: var(--color-border-strong);
	}

	.copy svg path {
		fill: var(--color-text-secondary);
	}

	.copy:hover svg path,
	.copy.copying svg path {
		fill: var(--color-text);
	}
</style>
