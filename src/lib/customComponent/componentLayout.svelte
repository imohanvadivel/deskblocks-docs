<script lang="ts" context="module">
	import h1 from './h1.svelte';
	import h2 from './h2.svelte';
	import code from './code.svelte';
	import ul from "./ul.svelte";
	import li from "./li.svelte";
	import th from "./th.svelte";
	import td from "./td.svelte";
	import tr from "./tr.svelte";
	import table from "./table.svelte";

	export { h1, h2, code, ul, li, th, td, tr, table };
</script>

<slot />
