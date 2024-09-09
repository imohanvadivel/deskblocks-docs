<script lang="ts">
	import colorData from '$lib/utils/colorData.json';
	import ColorTable from './ColorTable.svelte';
	import { Radio, RadioGroup } from 'deskblocks';
	import { theme } from '$lib/store';

	let lightIcon = colorData.light.icon;
	let darkIcon = colorData.dark.icon;
	let lightBg = colorData.light.bg;
	let darkBg = colorData.dark.bg;
	let lightBorder = colorData.light.border;
	let darkBorder = colorData.dark.border;
	let lightText = colorData.light.text;
	let darkText = colorData.dark.text;

	let docsTheme = $theme;

	theme.subscribe((value) => (docsTheme = value));

	function handleThemeChange(ev: any) {
		const newTheme = ev.target.value;
		if (newTheme !== $theme) theme.toggle();
	}
</script>

{#key docsTheme}
	<section>
		<RadioGroup inline bind:group={docsTheme} on:change={handleThemeChange}>
			<Radio value="light">Light Mode</Radio>
			<Radio value="dark">Dark Mode</Radio>
		</RadioGroup>

		<h3>Background</h3>
		<ColorTable lightColors={lightBg} darkColors={darkBg} />

		<h3>Text</h3>
		<ColorTable lightColors={lightText} darkColors={darkText} />

		<h3>Border</h3>
		<ColorTable lightColors={lightBorder} darkColors={darkBorder} />

		<h3>Icon</h3>
		<ColorTable lightColors={lightIcon} darkColors={darkIcon} />
	</section>
{/key}
