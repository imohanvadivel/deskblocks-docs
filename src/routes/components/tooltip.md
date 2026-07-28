---
title: Tooltip
dir: components
description: A tooltip displays a brief, informative message when users hover over or focus on an element, providing additional context or guidance.
slug: tooltip
url: /components/tooltip
index: 19
---

<script>
  import 'deskblocks/globalStyles';
	import Info from '$lib/components/Info.svelte';
</script>

# Tooltip

{description}

---

## Usage

The tooltip component takes advantage of [Svelte actions](https://svelte.dev/docs/svelte-action) to display tooltips. Svelte actions are functions that add behavior directly to elements. They are applied using the `use` directive followed by the function name.

<Info header="Svelte Actions:" type="info">

- Actions are functions that are called when an element is created. They can return an object with a `destroy` method that is called after the element is unmounted.

- Learn more about the [action directive.](https://learn.svelte.dev/tutorial/actions)

- Check the official [Svelte action documentation.](https://svelte.dev/docs/svelte-action)

</Info>

```svelte example hideFont hideTheme hideStyle
<script>
	import { tooltip } from 'deskblocks';
</script>

<div use:tooltip={{ content: 'tooltip content' }}>Hover over me</div>

<style>
	div {
		font-size: 0.875rem;
	}
</style>
```

## Delay

```svelte example hideFont hideTheme hideScript hideStyle
<script>
	import { tooltip } from 'deskblocks';
</script>

<div use:tooltip={{ content: 'Tooltip Content', delay: 1500 }}>Displays tooltip after 1500ms</div>

<style>
	div {
		font-size: 0.875rem;
	}
</style>
```

## Placement

```svelte example hideFont hideTheme hideScript hideStyle
<script>
	import { tooltip } from 'deskblocks';
	let content = 'Tooltip Content';
</script>

<div>
	<span use:tooltip={{ content, placement: 'right' }}>Right</span>
	<span use:tooltip={{ content, placement: 'top' }}>Top</span>
	<span use:tooltip={{ content, placement: 'bottom-end' }}>BottomEnd</span>
	<span use:tooltip={{ content, placement: 'right-end' }}>RightEnd</span>
</div>

<style>
	div {
		display: flex;
		column-gap: 3rem;
		font-size: 0.875rem;
	}
</style>
```

## Offset

```svelte example hideFont hideTheme hideScript hideStyle
<script>
	import { tooltip } from 'deskblocks';
</script>

<div use:tooltip={{ content: 'Tooltip Content', offset: 26 }}>26px offset from the trigger</div>

<style>
	div {
		font-size: 0.875rem;
	}
</style>
```

## Props

| Prop        | Type                                                                                                                                       | Default   | Description                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------- |
| `placement` | <code>top &#124; right &#124; bottom &#124; left &#124; top-start &#124; right-start &#124; bottom-start &#124; left-start &#124; top-end &#124; right-end &#124; bottom-end &#124; left-end</code> | bottom    | Defines the position of the tooltip relative to the target element.                                      |
| `offset`    | number                                                                                                                                     | 8         | Sets the distance (in pixels) between the tooltip and the target element.                                |
| `delay`     | number                                                                                                                                     | 200       | Specifies the delay (in milliseconds) before the tooltip appears after hovering over the target element. |
| `content`   | string                                                                                                                                     | undefined | The text or content that will be displayed inside the tooltip.                                           |
| `allowHtml` | boolean                                                                                                                                    | false     | Renders `content` as markup instead of plain text.                                                       |

<Info header="Security:" type="warning">

`content` is rendered as plain text by default, so record data and other untrusted values cannot inject markup into the page. Only set `allowHtml` when the content is authored by you and you need the markup. Never set it for values that come from an API response or user input.

</Info>
