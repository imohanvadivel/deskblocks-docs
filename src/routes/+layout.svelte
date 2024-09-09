<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Toast from '$lib/components/Toast.svelte';

	export let data;
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
