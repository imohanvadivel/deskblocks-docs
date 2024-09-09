<script lang="ts">
	import { cubicIn, cubicInOut, cubicOut, linear, expoOut, expoIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { toastMessage } from '$lib/store';

	let message = '';
	let showToast = false;

	toastMessage.subscribe((value) => {
		if (!$toastMessage) return;
		message = value;
		showToast = true;

		setTimeout(() => {
			showToast = false;
			$toastMessage = '';
		}, 1700);
	});
</script>

{#if showToast}
	<div in:fly={{ y: 100, easing: expoOut }} out:fly={{ y: 50, easing: expoIn }} class="toast">
		<p>{message}</p>
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		bottom: 1.5rem;
		left: 50%;
		transform: translateX(-50%);
		padding: 0.25rem 0.75rem;
		background-color: black;
		color: white;
		border-radius: 0.25rem;
		font-size: 14px;
	}
</style>
