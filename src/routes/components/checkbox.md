---
title: Checkbox
dir: components
description: A checkbox allows users to select one or more options from a set.
slug: checkbox
url: /components/checkbox
index: 9
---

<script>
  import 'deskblocks/globalStyles';
	import Info from '$lib/components/Info.svelte';
</script>

# Checkbox

{description}

---

## Usage

<!-- Import the `Checkbox` component from deskblocks. -->

```svelte example
<script>
	import { Checkbox } from 'deskblocks';
	let termsAgreed = false;
</script>

<Checkbox value="48" checked={termsAgreed}>Label</Checkbox>
```

## Checkbox group

The CheckboxGroup allows users to select multiple options, binding the selections to a shared array.

```svelte example
<script>
	import { Checkbox, CheckboxGroup } from 'deskblocks';
	let falvours = ['vanilla', 'pista'];
</script>

<CheckboxGroup bind:group={falvours}>
	<Checkbox value="vanilla">Vanilla</Checkbox>
	<Checkbox value="strawberry">Strawberry</Checkbox>
	<Checkbox value="pista">Pista</Checkbox>
</CheckboxGroup>
```

## Inline checkbox group

```svelte example hideScript
<script>
	import { Checkbox, CheckboxGroup } from 'deskblocks';
	let falvours = ['vanilla', 'pista'];
</script>

<CheckboxGroup inline bind:group={falvours}>
	<Checkbox value="vanilla">Vanilla</Checkbox>
	<Checkbox value="strawberry">Strawberry</Checkbox>
	<Checkbox value="pista">Pista</Checkbox>
</CheckboxGroup>
```

<Info header="Tips:" type="success">

- It is recommended to use the `name` prop on the "CheckboxGroup" instead of individual "Checkbox" components.
- To change the row gap in the CheckboxGroup, use the `rowGap` prop.
- To change the column gap in the inline CheckboxGroup, use the `columnGap` prop.

</Info>

## Disabled state

<!-- Use the `disabled` prop to render a non-interactive checkbox. -->

```svelte example hideScript
<script>
	import { Checkbox } from 'deskblocks';
</script>

<Checkbox disabled value="48">Label</Checkbox>
<Checkbox disabled checked value="48">Label</Checkbox>
```

## Slots

- `default`

## Checkbox props

| Prop       | Type    | Default   | Description                                                         |
| ---------- | ------- | --------- | ------------------------------------------------------------------- |
| `id`       | string  | undefined | Specifies a unique identifier for the checkbox.                     |
| `name`     | string  | undefined | Assigns a name to the checkbox, useful for form submissions.        |
| `value`    | string  | undefined | Sets the value associated with the checkbox.                        |
| `disabled` | boolean | false     | Disables the checkbox, preventing user interaction.                 |
| `checked`  | boolean | false     | Determines whether the checkbox is checked by default.              |
| `required` | boolean | false     | Indicates that the checkbox must be checked before form submission. |
| `class`    | string  | undefined | Custom CSS class name for additional styling.                       |

## CheckboxGroup props

| Prop        | Type            | Default   | Description                                                                        |
| ----------- | --------------- | --------- | ---------------------------------------------------------------------------------- |
| `name`      | string          | undefined | Assigns a shared name to every checkbox in the group, useful for form submissions. |
| `group`     | string[]        | []        | Binds the values of the checked checkboxes to an array.                            |
| `inline`    | boolean         | false     | Displays the checkboxes in a horizontal row if set to `true`.                      |
| `rowGap`    | CSS length unit | 0.25rem   | Defines the vertical spacing between rows of checkboxes.                           |
| `columnGap` | CSS length unit | 1rem      | Defines the horizontal spacing between checkboxes in a row.                        |
| `class`     | string          | undefined | Custom CSS class name for additional styling.                                      |

## Events

- `on:click`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:change`
- `on:focus`
- `on:blur`
