<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { onMount } from 'svelte';

	export let data;

	let isLoading = true;

	onMount(() => {
		if (navigator.serviceWorker.controller) {
			navigator.serviceWorker.controller.postMessage('check-files-cached');
		}

		function handleLoading(event: MessageEvent<any>) {
			if (event.data === 'assets-cached') {
				isLoading = false;
			}
		}

		navigator.serviceWorker.addEventListener('message', handleLoading);

		return () => navigator.serviceWorker.removeEventListener('message', handleLoading);
	});
</script>

<Header />
<Sidebar navList={data.navList} />
<slot />

<Toast />

<style>
	:root {
		font-size: 100%;
		line-height: 1.5;
	}
</style>
