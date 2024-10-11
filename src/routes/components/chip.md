---
title: Chip
dir: components
description: A chip displays a compact element, often representing an entity, tag, or a piece of information.
slug: chip
url: /components/chip
index: 13
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Chip

{description}

---

## Usage

<!-- Import the `Chip` component from deskblocks. -->

```svelte example
<script>
	import { Chip } from 'deskblocks';
</script>

<Chip>Label</Chip>
```

## Dismissible Chip

To make a chip dismissible, pass the `dismissible` prop. Once enabled, the chip can be removed by hovering over it and clicking the close icon.

```svelte example hideScript
<script>
	import { Chip } from 'deskblocks';
</script>

<Chip dismissible>Dismissible Chip</Chip>
```

## Chip with icon

<!-- An icon can be included in a chip by passing the [Icon component](/components/icon) into the `icon` slot. -->

```svelte example
<script>
	import { Chip, Icon } from 'deskblocks';
	import { IconSkills } from 'deskblocks/icons';
</script>

<Chip>
	<Icon slot="icon" icon={IconSkills} /> Language
</Chip>
```

## Chip with avatar

<!-- A chip can include an avatar by passing the [Avatar component](/components/avatar) into the `icon` slot. -->

```svelte example
<script>
	import { Chip, Avatar } from 'deskblocks';
</script>

<Chip>
	<Avatar slot="icon" size={20} src="/assets/avatar/pic3.jpg" /> Jenny
</Chip>
```

## Disabled state

<!-- A chip can include an avatar by passing the [Avatar component](/components/avatar) into the `icon` slot. -->

```svelte example
<script>
	import { Chip, Icon } from 'deskblocks';
	import { IconSkills } from 'deskblocks/icons';
</script>

<Chip disabled>Languages</Chip>
<Chip disabled>
	<Icon slot="icon" icon={IconSkills} /> Language
</Chip>
```

## Slots

- `default`
- `icon`

## Props

Here is the completed description for the `Chip` component props:

| Prop          | Type    | Default   | Description                                                         |
| ------------- | ------- | --------- | ------------------------------------------------------------------- |
| `dismissible` | boolean | false     | Determines whether the chip can be dismissed (removed) by the user. |
| `class`       | string  | undefined | Custom CSS class name for additional styling.                       |

## Events

- `on:dismiss`
