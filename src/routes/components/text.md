---
title: Text
dir: components
description: The Text component defines typography styles for text elements, ensuring consistent and readable text throughout the interface.
slug: text
url: /components/text
index: 15
---

<script>
  import 'deskblocks/globalStyles';
  import Info from "$lib/components/Info.svelte";
</script>

# Text

{description}

---

## Usage

<!-- Import the `Text` component from deskblocks. -->

```svelte example
<script>
	import { Text } from 'deskblocks';
</script>

<Text>Some text here.</Text>
```

## Type

```svelte example hideScript hideStyle
<script>
	import { Text } from 'deskblocks';
</script>

<div>
	<Text type="primary">primary text</Text>
	<Text type="secondary">secondary text</Text>
	<Text type="tertiary">tertiary text</Text>

	<Text type="brand">brand text</Text>
	<Text type="oninverse">oninverse text</Text>

	<Text type="info">info text</Text>
	<Text type="success">success text</Text>
	<Text type="warning">warning text</Text>
	<Text type="danger">danger text</Text>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
```

## Size

```svelte example hideScript hideStyle
<script>
	import { Text } from 'deskblocks';
</script>

<div>
	<Text size="small">small (12px)</Text>
	<Text size="medium">medium (14px)</Text>
	<Text size="large">large (16px)</Text>
	<Text size="xlarge">xlarge (24px)</Text>

	<!-- Custom Size  -->
	<Text size="32">Custom Size (32px)</Text>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
```

## Weight

```svelte example hideScript hideStyle
<script>
	import { Text } from 'deskblocks';
</script>

<div>
	<Text weight="regular">regular weight</Text>
	<Text weight="medium">medium weight</Text>
	<Text weight="bold">bold weight</Text>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
```

## Alignment

```svelte example hideScript hideStyle
<script>
	import { Text } from 'deskblocks';
</script>

<div>
	<Text tag="p" align="left">Left aligned text</Text>
	<Text tag="p" align="center">Center aligned text</Text>
	<Text tag="p" align="right">Right aligned text</Text>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
```

## Tag
The `tag` prop doesn't automatically apply font size and weight, but they can be customized using the `weight` and `size` props. The `tag` prop ensures the correct semantic element is used.



```svelte example hideScript hideStyle
<script>
	import { Text } from 'deskblocks';
</script>

<div>
	<Text tag="h1">header 1</Text>
	<Text tag="h2">header 2</Text>
	<Text tag="h3">header 3</Text>
	<Text tag="p">paragraph text</Text>
	<Text tag="span">span</Text>
</div>

<style>
	div :global(*) {
		padding: 0;
		margin: 0 !important;
	}
</style>
```

## Decoration

```svelte example hideScript hideStyle
<script>
	import { Text } from 'deskblocks';
</script>

<div>
	<Text decoration="underline">Underlined text</Text>
	<Text decoration="none">Normal text</Text>
	<Text decoration="line-through">Striked through text</Text>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
```

## Italics

```svelte example hideScript hideStyle
<script>
	import { Text } from 'deskblocks';
</script>

<Text italics>Some text here.</Text>
```

## Truncate

Clamps overflowing text with a trailing ellipsis. `truncate` on its own clamps to a single line;
pass a number to clamp to that many lines.

<Info header="Note:" type="info">

A truncated `Text` becomes a block-level element, so it will not sit inline with surrounding
text the way an unclamped `span` does.

</Info>

```svelte example hideScript hideStyle
<script>
	import { Text } from 'deskblocks';

	const long =
		'This ticket was escalated because the customer replied twice within the first-response window, and the assigned agent was on leave.';
</script>

<div style="display: grid; row-gap: 0.75rem; max-width: 22rem;">
	<Text truncate>{long}</Text>
	<Text truncate={2}>{long}</Text>
	<Text>{long}</Text>
</div>
```

## Props

| Prop         | Type                                                                                                             | Default   | Description                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `type`       | <code>'primary' &#124; 'secondary' &#124; 'tertiary' &#124; 'brand' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'danger' &#124; 'oninverse'</code> | 'primary' | Specifies the type or color theme of the text, chosen from predefined options. |
| `size`       | <code>'small' &#124; 'medium' &#124; 'large' &#124; 'xlarge' &#124; number</code> | 'medium'  | Determines the size of the text. A number is treated as a custom pixel size.  |
| `weight`     | <code>'regular' &#124; 'medium' &#124; 'bold'</code> | 'regular' | Specifies the weight (thickness) of the text.                                  |
| `align`      | <code>'left' &#124; 'center' &#124; 'right' &#124; 'justify'</code> | 'left'    | Sets the alignment of the text.                                                |
| `tag`        | <code>'p' &#124; 'span' &#124; 'small' &#124; 'strong' &#124; 'em' &#124; 'h1' &#124; 'h2' &#124; 'h3' &#124; 'h4' &#124; 'h5' &#124; 'h6'</code> | 'span'    | Defines the HTML tag used for the text element.                                |
| `decoration` | <code>'underline' &#124; 'line-through' &#124; 'none'</code> | 'none'    | Applies text decoration, such as underline or line-through.                    |
| `italics`    | boolean                                                                                                          | false     | If true, renders the text in italics.                                          |
| `truncate`   | <code>boolean &#124; number</code> | false     | Clamps the text with a trailing ellipsis. `true` clamps to one line; a positive integer clamps to that many lines. `0`, negative numbers and `false` all leave the text wrapping normally. |
| `disabled`   | boolean                                                                                                          | false     | If true, renders the text in the disabled color for its `type`.               |
| `class`      | string                                                                                                           | undefined | Custom CSS class name for additional styling.                                  |

## Slots

- `default`
