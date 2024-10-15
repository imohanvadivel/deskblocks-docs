---
title: Number Input
dir: components
description: A number input allows users to enter numeric values, providing controls like step increment, validation and range limits.
slug: number-input
url: /components/number-input
index: 4
---

# Number Input

{description}

---

## Usage

<!-- Import the `TextInput` component form 'deskblocks'. -->

```svelte example
<script>
	import { NumberInput } from 'deskblocks';
</script>

<NumberInput placeholder="Enter a numeric value" />
```

## Mandatory input

<!--
- To mark the input field as mandatory, pass the `required` prop to the input.
- When using the input with labels, also pass the `required` prop to the label.
- Ensure the `for` prop of the label matches the `id` of the input field to link them properly. -->

```svelte example hideStyle
<script>
	import { NumberInput, FormLabel } from 'deskblocks';
</script>

<div>
	<FormLabel required for="inp-demo">Label</FormLabel>
	<NumberInput required value={42} id="inp-demo" />
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Input with icon

<!-- - Icons can be placed on either side of the input field. -->

Pass the [Icon component](/components/icon) within the `left` or `right` slot to render it on the left or right side, respectively.

<!-- - For further icon customization, refer to the [Icon component](/components/icon). -->

```svelte example hideScript
<script>
	import { NumberInput, Icon } from 'deskblocks';
	import { IconActivity } from 'deskblocks/icons';
</script>

<!-- Left Icon -->
<NumberInput value={15}>
	<Icon slot="left" icon={IconActivity} />
</NumberInput>

<!-- Right Icon -->
<NumberInput value={15}>
	<Icon slot="right" icon={IconActivity} />
</NumberInput>
```

## Help message

```svelte example hideStyle
<script>
	import { NumberInput } from 'deskblocks';
</script>

<div>
	<NumberInput value={42}>
		<span slot="help-msg">
			Answer to the Ultimate Question of Life, the Universe, and Everything
		</span>
	</NumberInput>
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Invalid state

```svelte example hideStyle
<script>
	import { NumberInput } from 'deskblocks';
</script>

<div>
	<NumberInput invalid value={42}>
		<span slot="error-msg">
			Answer to the Ultimate Question of Life, the Universe, and Everything
		</span>
	</NumberInput>
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Disabled state

<!-- Pass the `disabled` prop to disable the input field. -->

```svelte example hideScript
<script>
	import { NumberInput } from 'deskblocks';
</script>

<NumberInput disabled value={15} step={5} />
```

## Min and max values

<!-- Set the minimum and maximum allowable values using the `min` and `max` props. -->

```svelte example
<script>
	import { NumberInput } from 'deskblocks';
</script>

<NumberInput value={16} min={12} max={18} />
```

## Increments

<!-- Use the `step` prop to specify the increment value for the input field. -->

```svelte example
<script>
	import { NumberInput } from 'deskblocks';
</script>

<NumberInput value={15} step={5} />
```

## Props

| Prop          | Type             | Default   | Description                                                           |
| ------------- | ---------------- | --------- | --------------------------------------------------------------------- |
| `id`          | string           | undefined | Specifies a unique identifier for the input field.                    |
| `value`       | number           | undefined | Sets the current value of the input field.                            |
| `placeholder` | string           | undefined | Provides a placeholder text that appears when the input is empty.     |
| `min`         | string \| number | undefined | Defines the minimum value allowed for the input field.                |
| `max`         | string \| number | undefined | Defines the maximum value allowed for the input field.                |
| `step`        | string \| number | undefined | Specifies the increment step for numeric values.                      |
| `name`        | string           | undefined | Assigns a name to the input field, useful for form submissions.       |
| `disabled`    | boolean          | false     | Disables the input field, preventing user interaction.                |
| `invalid`     | boolean          | false     | Marks the input field as invalid, typically used for form validation. |
| `required`    | boolean          | false     | Indicates that the input field is required before form submission.    |
| `readonly`    | boolean          | false     | Makes the input field read-only, preventing user modifications.       |
| `class`       | string           | undefined | Custom CSS class name for additional styling.                         |

## Slots

- `left`
- `right`

## Events

- `on:change`
- `on:input`
- `on:click`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:keydown`
- `on:keyup`
- `on:focus`
- `on:blur`
- `on:paste`
