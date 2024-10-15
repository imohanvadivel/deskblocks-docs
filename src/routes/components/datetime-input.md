---
title: Datetime Input
dir: components
description: A datetime input allows users to enter or select both date and time values in a single field, combining calendar and time controls for more precise timestamps.
slug: datetime-input
url: /components/datetime-input
index: 7
---

# Datetime Input

{description}

---

## Usage

Use the [datetime string format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) (YYYY-MM-DDTHH:MM:SS) for setting the value.

<!-- Import the `TextInput` component form 'deskblocks'. -->

```svelte example
<script>
	import { DateTimeInput } from 'deskblocks';
</script>

<DateTimeInput value="2000-09-13T13:00" />
```

## Mandatory input

<!--
- To mark the input field as mandatory, pass the `required` prop to the input.
- When using the input with labels, also pass the `required` prop to the label.
- Ensure the `for` prop of the label matches the `id` of the input field to link them properly. -->

```svelte example hideStyle
<script>
	import { DateTimeInput, FormLabel } from 'deskblocks';
</script>

<div>
	<FormLabel required for="inp-demo">Label</FormLabel>
	<DateTimeInput required value="2023-08-12T13:00" id="inp-demo" />
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Input with icon

<!-- - Icons can be placed on either side of the input field. -->

Pass the [Icon component](/components/icon) within the `left` to render it on the left side of the input.

<!-- - For further icon customization, refer to the [Icon component](/components/icon). -->

```svelte example hideScript
<script>
	import { DateTimeInput, Icon } from 'deskblocks';
	import { IconActivity } from 'deskblocks/icons';
</script>

<DateTimeInput value="2024-09-13T13:00">
	<Icon slot="left" icon={IconActivity} />
</DateTimeInput>
```

## Help message

```svelte example hideStyle
<script>
	import { DateTimeInput } from 'deskblocks';
</script>

<div>
	<DateTimeInput value="2024-09-13T13:00">
		<span slot="help-msg">
			Answer to the Ultimate Question of Life, the Universe, and Everything
		</span>
	</DateTimeInput>
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
	import { DateTimeInput } from 'deskblocks';
</script>

<div>
	<DateTimeInput invalid value="2024-09-13T13:00">
		<span slot="error-msg">
			Answer to the Ultimate Question of Life, the Universe, and Everything
		</span>
	</DateTimeInput>
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
	import { DateTimeInput } from 'deskblocks';
</script>

<DateTimeInput disabled value="2024-09-13T13:00" />
```

## Min and max values

<!-- Set the minimum and maximum allowable values using the `min` and `max` props. -->

```svelte example
<script>
	import { DateTimeInput } from 'deskblocks';
</script>

<DateTimeInput value="2024-09-13T13:00" min="2024-09-01T01:00" max="2024-09-20T03:40" />
```

## Props

| Prop       | Type                                                                                                           | Default   | Description                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------- |
| `id`       | string                                                                                                         | undefined | Specifies a unique identifier for the datetime input field.                                    |
| `value`    | [DateTime String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) | undefined | Sets the current value of the datetime input in a string format (e.g., `1977-04-01T14:00:30`). |
| `min`      | [DateTime String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) | undefined | Defines the earliest datetime allowed for selection (e.g., `1977-04-01T00:00:00`).             |
| `max`      | [DateTime String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) | undefined | Defines the latest datetime allowed for selection (e.g., `2077-12-31T23:59:59`).               |
| `step`     | string \| number                                                                                               | undefined | Specifies the increment step for datetime values (e.g., in seconds, minutes, or hours).        |
| `name`     | string                                                                                                         | undefined | Assigns a name to the datetime input field, useful for form submissions.                       |
| `disabled` | boolean                                                                                                        | false     | Disables the datetime input field, preventing user interaction.                                |
| `invalid`  | boolean                                                                                                        | false     | Marks the datetime input field as invalid, typically used for form validation.                 |
| `required` | boolean                                                                                                        | false     | Indicates that the datetime input is required before form submission.                          |
| `readonly` | boolean                                                                                                        | false     | Makes the datetime input field read-only, preventing user modifications.                       |
| `class`    | string                                                                                                         | undefined | Custom CSS class name for additional styling.                                                  |

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
