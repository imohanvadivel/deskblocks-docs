---
title: Text
dir: components
description: The type component defines the typography styles for text elements, ensuring consistent and readable text throughout the interface.
slug: text
url: /components/text
index: 15
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Text

{description}

---

## Usage

<!-- Import `Avatar` component from deskblocks. -->

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

## Props

| Prop         | Type                                                                                                             | Default   | Description                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `type`       | 'primary' \| 'secondary' \| 'tertiary' \| 'brand' \| 'info' \| 'success' \| 'warning' \| 'danger' \| 'oninverse' | 'primary' | Specifies the type or color theme of the text, chosen from predefined options. |
| `size`       | 'small' \| 'medium' \| 'large' \| 'xlarge'                                                                       | 'medium'  | Determines the size of the text.                                               |
| `weight`     | 'regular' \| 'medium' \| 'bold'                                                                                  | 'regular' | Specifies the weight (thickness) of the text.                                  |
| `align`      | 'left' \| 'center' \| 'right' \| 'justify'                                                                       | 'left'    | Sets the alignment of the text.                                                |
| `tag`        | 'p' \| 'span' \| 'small' \| 'strong' \| 'em' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'                     | 'span'    | Defines the HTML tag used for the text element.                                |
| `decoration` | 'underline' \| 'line-through' \| 'none'                                                                          | 'none'    | Applies text decoration, such as underline or line-through.                    |
| `italics`    | boolean                                                                                                          | false     | If true, renders the text in italics.                                          |
| `class`      | string                                                                                                           | undefined | Custom CSS class name for additional styling.                                  |

## Slots

- `default`
