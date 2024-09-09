---
title: Radio
dir: components
description: A radio button lets users select a single option from a set, ensuring that only one choice is possible.
slug: radio
url: /components/radio
index: 7
---

<script>
  import 'deskblocks/globalStyles';
	import Info from '$lib/components/Info.svelte';
</script>

# Radio

{description}

---

## Usage

```svelte example
<script>
	import { Radio, RadioGroup } from 'deskblocks';
	let planet = 'mars';
</script>

<RadioGroup bind:group={planet} name="planets">
	<Radio value="earth">Earth</Radio>
	<Radio value="mars">Mars</Radio>
	<Radio value="jupiter">Jupiter</Radio>
</RadioGroup>
```

## Inline radio group

```svelte example
<script>
	import { Radio, RadioGroup } from 'deskblocks';
	let spacecraft = 'apollo';
</script>

<RadioGroup inline bind:group={spacecraft} name="spacecraft">
	<Radio value="apollo">Apollo</Radio>
	<Radio value="voyager">Voyager</Radio>
	<Radio value="enterprise">Enterprise</Radio>
</RadioGroup>
```

<Info header="Tips:" type="success">

- It is recommended to use the `name` prop on the "RadioGroup" instead of individual "Radio" components.
- To change the row gap in the RadioGroup, use `rowGap` prop.
- To change the column gap in the inline RadioGroup, use `columnGap` prop.

</Info>

## Disabled State

```svelte example hideScript
<script>
	import { Radio, RadioGroup } from 'deskblocks';
	let celestialBody = 'black_hole';
</script>

<RadioGroup disabled bind:group={celestialBody} name="celestialBody">
	<Radio value="nebula">Nebula</Radio>
	<Radio value="black_hole">Black hole</Radio>
	<Radio value="pulsar">Pulsar</Radio>
</RadioGroup>
```

## Slots

- `default`

## Radio props

| Prop       | Type    | Default   | Description                                                                  |
| ---------- | ------- | --------- | ---------------------------------------------------------------------------- |
| `id`       | string  | randomId  | Specifies a unique identifier for the radio button.                          |
| `name`     | string  | undefined | Assigns a name to the radio button, useful for grouping in form submissions. |
| `value`    | string  | undefined | Sets the value associated with the radio button.                             |
| `disabled` | boolean | false     | Disables the radio button, preventing user interaction.                      |
| `group`    | string  | undefined | Links the radio button to a specific radio button group.                     |
| `class`    | string  | undefined | Custom CSS class name for additional styling.                                |

## RadioGroup props

| Prop        | Type            | Default    | Description                                                            |
| ----------- | --------------- | ---------- | ---------------------------------------------------------------------- |
| `group`     | string          | undefined  | Specifies a unique identifier for the radio button group.              |
| `disabled`  | boolean         | false      | Disables the entire radio button group, preventing user interaction.   |
| `name`      | string          | randomName | Assigns a name to the radio button group, useful for form submissions. |
| `inline`    | boolean         | false      | Displays the radio buttons in a horizontal row if set to `true`.       |
| `rowGap`    | CSS length unit | 0.25rem    | Defines the vertical spacing between rows of radio buttons.            |
| `ColumnGap` | CSS length unit | 1rem       | Defines the horizontal spacing between radio buttons in a row.         |
| `class`     | string          | undefined  | Custom CSS class name for additional styling.                          |

## Events

- `on:click`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:change`
- `on:focus`
- `on:blur`
