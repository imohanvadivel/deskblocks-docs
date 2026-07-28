---
title: Icon Button
dir: components
description: An icon button is a compact, square button that contains only an icon, used for common actions where an icon alone communicates the intent.
slug: icon-button
url: /components/icon-button
index: 1.5
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Icon Button

{description}

---

## Usage

Pass an [Icon component](/components/icon) as the button content.

```svelte example
<script>
	import { IconButton, Icon } from 'deskblocks';
	import { IconEdit } from 'deskblocks/icons';
</script>

<IconButton>
	<Icon icon={IconEdit} color="--db-color-text-onbrand" />
</IconButton>
```

## Variants

Icon buttons support the same variants as [Button](/components/button).

```svelte example hideScript
<script>
	import { IconButton, Icon } from 'deskblocks';
	import { IconEdit } from 'deskblocks/icons';
</script>

<IconButton variant="primary"><Icon icon={IconEdit} color="--db-color-text-onbrand" /></IconButton>
<IconButton variant="secondary"><Icon icon={IconEdit} /></IconButton>
<IconButton variant="tertiary"><Icon icon={IconEdit} /></IconButton>
<IconButton variant="ghost"><Icon icon={IconEdit} /></IconButton>
<IconButton variant="danger"><Icon icon={IconEdit} color="--db-color-text-ondanger" /></IconButton>
<IconButton variant="danger-secondary"><Icon icon={IconEdit} color="--db-color-text-danger" /></IconButton>
```

## Disabled state

```svelte example hideScript
<script>
	import { IconButton, Icon } from 'deskblocks';
	import { IconEdit } from 'deskblocks/icons';
</script>

<IconButton disabled><Icon icon={IconEdit} /></IconButton>
```

## Slots

- `default`

## Props

| Prop            | Type                                                                                | Default   | Description                                                    |
| --------------- | ----------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------- |
| `variant`       | <code>'primary' &#124; 'secondary' &#124; 'tertiary' &#124; 'ghost' &#124; 'danger' &#124; 'danger-secondary'</code> | 'primary' | Visual style of the button.                                    |
| `disabled`      | boolean                                                                              | false     | Disables the button.                                           |
| `href`          | string                                                                               | undefined | If set, the button renders as a link.                          |
| `tabindex`      | number                                                                               | 0         | Tab order of the button.                                       |
| `popovertarget` | string                                                                               | undefined | ID of the popover element the button controls.                 |
| `class`         | string                                                                               | undefined | Custom CSS class name for additional styling.                  |

## Events

- `on:click`
- `on:focus`
- `on:blur`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
