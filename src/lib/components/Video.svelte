<script lang="ts">
	export let src: string;
	export let width: number = 750;
	export let controls: boolean = false;
	export let autoplay: boolean = false;
	export let loop: boolean = false;
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video {controls} {width} {autoplay} {loop}>
	<source {src} type="video/mp4" />
</video>
