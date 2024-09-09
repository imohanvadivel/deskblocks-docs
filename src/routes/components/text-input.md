---
title: Text Input
dir: components
description: A text input allows users to enter freeform text.
slug: text-input
url: /components/text-input
index: 3
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Text Input

{description}

---

## Usage

<!-- Import the `TextInput` component form 'deskblocks'. -->

```svelte example
<script>
	import { TextInput } from 'deskblocks';
</script>

<TextInput placeholder="Enter the value" />
```

## Mandatory input

<!-- - To mark the input field as mandatory, pass the `required` prop to the input.
- When using the input with labels, also pass the `required` prop to the label.
- Ensure the `for` prop of the label matches the `id` of the input field to link them properly. -->

```svelte example hideStyle
<script>
	import { TextInput, FormLabel } from 'deskblocks';
</script>

<div>
	<FormLabel required for="inp-demo">Label</FormLabel>
	<TextInput required value="free form text" id="inp-demo" />
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
	import { TextInput, Icon } from 'deskblocks';
	import { IconActivity } from 'deskblocks/icons';
</script>

<!-- Left Icon -->
<TextInput value={15}>
	<Icon slot="left" icon={IconActivity} />
</TextInput>

<!-- Right Icon -->
<TextInput value={15}>
	<Icon slot="right" icon={IconActivity} />
</TextInput>
```

## Help message

<!-- To display a help message, use the `FormHelpMessage` component. -->

```svelte example hideStyle
<script>
	import { TextInput, FormHelpMessage } from 'deskblocks';
</script>

<div>
	<TextInput value={42} />
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

<!-- - To indicate that the input field is invalid, pass the `invalid` prop to the input.
- Use the `FormErrorMessage` component to display the corresponding error message. -->

```svelte example hideStyle
<script>
	import { TextInput, FormErrorMessage } from 'deskblocks';
</script>

<div>
	<TextInput invalid value={42} />
	<FormErrorMessage>
		Answer to the Ultimate Question of Life, the Universe, and Everything
	</FormErrorMessage>
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
	import { TextInput } from 'deskblocks';
</script>

<TextInput disabled value={15} step={5} />
```

## Props

| Prop          | Type    | Default   | Description                                                                  |
| ------------- | ------- | --------- | ---------------------------------------------------------------------------- |
| `id`          | string  | undefined | Specifies a unique identifier for the input field.                           |
| `value`       | string  | undefined | Sets the current value of the input field.                                   |
| `placeholder` | string  | undefined | Provides placeholder text that appears when the input is empty.              |
| `minlength`   | string  | undefined | Specifies minimum number of characters required for input.                   |
| `maxlength`   | string  | undefined | Specifies maximum number of characters allowed for input.                    |
| `pattern`     | string  | undefined | Defines a regular expression that the input value must match for validation. |
| `name`        | string  | undefined | Assigns a name to the input field, useful for form submissions.              |
| `spellcheck`  | boolean | false     | Enables or disables spellchecking for the input field.                       |
| `disabled`    | boolean | false     | Disables the input field, preventing user interaction.                       |
| `invalid`     | boolean | false     | Marks the input field as invalid, typically used for form validation.        |
| `required`    | boolean | false     | Indicates that the input field is required before form submission.           |
| `readonly`    | boolean | false     | Makes the input field read-only, preventing user modifications.              |
| `class`       | string  | undefined | Custom CSS class name for additional styling.                                |

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
