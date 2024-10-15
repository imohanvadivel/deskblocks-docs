---
title: Time Input
dir: components
description: A time input allows users to enter or select a specific time, providing controls for hours and minutes.
slug: time-input
url: /components/time-input
index: 5
---

# Time Input

{description}

---

## Usage

Use the [time string format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings) (HH:MM:SS) for setting the value.

```svelte example
<script>
	import { TimeInput } from 'deskblocks';
</script>

<TimeInput value="18:00" />
```

## Mandatory input

```svelte example hideStyle
<script>
	import { TimeInput, FormLabel } from 'deskblocks';
</script>

<div>
	<FormLabel required for="inp-demo">Label</FormLabel>
	<TimeInput required value="18:00" id="inp-demo" />
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Input with icon

Pass the [Icon component](/components/icon) within the `left` slot to render it on the left side of the icon.

```svelte example hideScript
<script>
	import { TimeInput, Icon } from 'deskblocks';
	import { IconActivity } from 'deskblocks/icons';
</script>

<TimeInput value="21:00">
	<Icon slot="left" icon={IconActivity} />
</TimeInput>
```

## Help message

```svelte example hideStyle
<script>
	import { TimeInput } from 'deskblocks';
</script>

<div>
	<TimeInput value="21:00">
		<span slot="help-msg">
			Answer to the Ultimate Question of Life, the Universe, and Everything
		</span>
	</TimeInput>
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
	import { TimeInput } from 'deskblocks';
</script>

<div>
	<TimeInput invalid value="21:00">
		<span slot="error-msg">
			Answer to the Ultimate Question of Life, the Universe, and Everything
		</span>
	</TimeInput>
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Disabled state

```svelte example hideScript
<script>
	import { TimeInput } from 'deskblocks';
</script>

<TimeInput disabled value="21:00" />
```

## Min and max values

```svelte example
<script>
	import { TimeInput } from 'deskblocks';
</script>

<TimeInput value="13:00" min="09:00" max="16:00" />
```

## Increments

Specifies the increment step in seconds.

```svelte example
<script>
	import { TimeInput } from 'deskblocks';
</script>

<TimeInput value="13:00" step="20" />
```

## Props

| Prop       | Type                                                                                                | Default   | Description                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------- |
| `id`       | string                                                                                              | undefined | Specifies a unique identifier for the time input field.                               |
| `value`    | [Time String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#times) | undefined | Sets the current value of the time input in the format `HH:MM:SS` (e.g., `14:00:30`). |
| `min`      | [Time String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#times) | undefined | Defines the earliest time allowed for selection (e.g., `00:00:00`).                   |
| `max`      | [Time String Format](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#times) | undefined | Defines the latest time allowed for selection (e.g., `23:59:59`).                     |
| `step`     | string \| number                                                                                    | undefined | Specifies the increment step for time values in seconds.                              |
| `name`     | string                                                                                              | undefined | Assigns a name to the time input field, useful for form submissions.                  |
| `disabled` | boolean                                                                                             | false     | Disables the time input field, preventing user interaction.                           |
| `invalid`  | boolean                                                                                             | false     | Marks the time input field as invalid, typically used for form validation.            |
| `required` | boolean                                                                                             | false     | Indicates that the time input is required before form submission.                     |
| `readonly` | boolean                                                                                             | false     | Makes the time input field read-only, preventing user modifications.                  |
| `class`    | string                                                                                              | undefined | Custom CSS class name for additional styling.                                         |

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
