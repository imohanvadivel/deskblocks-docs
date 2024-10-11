---
title: Date Input
dir: components
description: A date input allows users to enter or select a specific date using a calendar or predefined format.
slug: date-input
url: /components/date-input
index: 6
---

# Date Input

{description}

---

## Usage

Use the [date string format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) (YYYY-MM-DD) for setting the value.

```svelte example
<script>
	import { DateInput } from 'deskblocks';
</script>

<DateInput value="2020-09-13" />
```

## Mandatory input

```svelte example hideStyle
<script>
	import { DateInput, FormLabel } from 'deskblocks';
</script>

<div>
	<FormLabel required for="inp-demo">Label</FormLabel>
	<DateInput required value="2023-08-12" id="inp-demo" />
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Input with icon

Pass the [Icon component](/components/icon) within the `left` slot to render it on the left side of the input.

```svelte example hideScript
<script>
	import { DateInput, Icon } from 'deskblocks';
	import { IconActivity } from 'deskblocks/icons';
</script>

<DateInput value="2024-12-13">
	<Icon slot="left" icon={IconActivity} />
</DateInput>
```

## Help message

<!--
To display a help message, use the `FormHelpMessage` component. -->

```svelte example hideStyle
<script>
	import { DateInput, FormHelpMessage } from 'deskblocks';
</script>

<div>
	<DateInput value="2024-11-13" />
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

<!--
- To indicate that the input field is invalid, pass the `invalid` prop to the input.
- Use the `FormErrorMessage` component to display the corresponding error message. -->

```svelte example hideStyle
<script>
	import { DateInput, FormHelpMessage } from 'deskblocks';
</script>

<div>
	<DateInput value="2024-10-13" invalid />
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

<!-- Pass the `disabled` prop to disable the input field. -->

```svelte example hideScript
<script>
	import { DateInput } from 'deskblocks';
</script>

<DateInput value="2024-09-13" disabled />
```

## Min and max values

<!-- Set the minimum and maximum allowable values using the `min` and `max` props. -->

```svelte example
<script>
	import { DateInput } from 'deskblocks';
</script>

<DateInput value="2024-09-13" min="2024-09-01" max="2024-09-20" />
```

## Increments

Specifies the increment step in days.

<!-- Use the `step` prop to specify the increment value for the input field. -->

```svelte example
<script>
	import { DateInput } from 'deskblocks';
</script>

<DateInput value="2024-09-13" step="5" />
```

## Props

| Prop       | Type                                                                                                       | Default   | Description                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------- |
| `id`       | string                                                                                                     | undefined | Specifies a unique identifier for the date input field.                                   |
| `value`    | [Date String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) | undefined | Sets the current value of the date input in the format `YYYY-MM-DD` (e.g., `2005-06-07`). |
| `min`      | [Date String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) | undefined | Defines the earliest date allowed for selection (e.g., `2000-01-01`).                     |
| `max`      | [Date String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) | undefined | Defines the latest date allowed for selection (e.g., `2030-12-31`).                       |
| `step`     | string \| number                                                                                           | undefined | Specifies the increment step for date values (e.g., in days).                             |
| `name`     | string                                                                                                     | undefined | Assigns a name to the date input field, useful for form submissions.                      |
| `disabled` | boolean                                                                                                    | false     | Disables the date input field, preventing user interaction.                               |
| `invalid`  | boolean                                                                                                    | false     | Marks the date input field as invalid, typically used for form validation.                |
| `required` | boolean                                                                                                    | false     | Indicates that the date input is required before form submission.                         |
| `readonly` | boolean                                                                                                    | false     | Makes the date input field read-only, preventing user modifications.                      |
| `class`    | string                                                                                                     | undefined | Custom CSS class name for additional styling.                                             |

## Slots

- `icon`

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
