---
title: Select
dir: components
description: A select dropdowns allow users to pick a single choice from a predefined list.
slug: select
url: /components/select
index: 11
---

# Select

{description}

---

## Usage

```svelte example
<script>
	import { Select } from 'deskblocks';
</script>

<Select>
	<option value="option1">Option 1</option>
	<option value="option2">Option 2</option>
	<option value="option3">Option 3</option>
</Select>
```

## Mandatory input

```svelte example hideStyle
<script>
	import { Select, FormLabel } from 'deskblocks';
</script>

<div>
	<FormLabel required for="inp">Label</FormLabel>
	<Select id="inp" required>
		<option value="option1">Option 1</option>
		<option value="option2">Option 2</option>
		<option value="option3">Option 3</option>
	</Select>
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Select with icon

Pass the [Icon component](/components/icon) within the `left` or `right` slot to render it on the left or right side, respectively.

```svelte example
<script>
	import { Select, Icon } from 'deskblocks';
	import { IconActivity } from 'deskblocks/icons';
</script>

<!-- Left Icon -->
<Select>
	<Icon slot="left" icon={IconActivity} />
	<option value="option1">Option 1</option>
	<option value="option2">Option 2</option>
	<option value="option3">Option 3</option>
</Select>

<!-- Right Icon -->
<Select>
	<Icon slot="right" icon={IconActivity} />
	<option value="option1">Option 1</option>
	<option value="option2">Option 2</option>
	<option value="option3">Option 3</option>
</Select>
```

## Help message

```svelte example hideStyle
<script>
	import { Select, FormHelpMessage } from 'deskblocks';
</script>

<div>
	<Select>
		<option value="option1">Option 1</option>
		<option value="option2">Option 2</option>
	</Select>

	<FormHelpMessage>
		Answer to the Ultimate Question of Life, the Universe, and Everything
	</FormHelpMessage>
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
	import { Select, FormHelpMessage } from 'deskblocks';
</script>

<div>
	<Select invalid>
		<option value="option1">Option 1</option>
		<option value="option2">Option 2</option>
	</Select>

	<FormHelpMessage invalid>
		Answer to the Ultimate Question of Life, the Universe, and Everything
	</FormHelpMessage>
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Disabled state

```svelte example
<script>
	import { Select } from 'deskblocks';
</script>

<Select disabled>
	<option value="option1">Option 1</option>
	<option value="option2">Option 2</option>
	<option value="option3">Option 3</option>
</Select>
```

## Props

| Prop          | Type             | Default   | Description                                                                             |
| ------------- | ---------------- | --------- | --------------------------------------------------------------------------------------- |
| `value`       | string \| number | undefined | Specifies the current selected value of the select field.                               |
| `placeholder` | string           | undefined | Provides placeholder text that appears as the default option when no value is selected. |
| `id`          | string           | undefined | Specifies a unique identifier for the select field.                                     |
| `disabled`    | boolean          | false     | Disables the select field, preventing user interaction.                                 |
| `invalid`     | boolean          | false     | Marks the select field as invalid, typically used for form validation.                  |
| `required`    | boolean          | false     | Indicates that selecting an option is required before form submission.                  |
| `class`       | string           | undefined | Custom CSS class name for additional styling.                                           |

## Slots

- `default`
- `left`
- `right`

## Events

- `on:change`
- `on:input`
- `on:focus`
- `on:blur`
