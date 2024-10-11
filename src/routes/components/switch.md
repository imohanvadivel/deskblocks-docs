---
title: Switch
dir: components
description: A switch toggles between two states, often used to enable or disable settings or features.
slug: switch
url: /components/switch
index: 12
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Switch

{description}

---

## Usage

```svelte example
<script>
	import { Switch } from 'deskblocks';
</script>

<Switch />
```

## Size

```svelte example hideScript
<script>
	import { Switch } from 'deskblocks';
</script>

<Switch size="small" />
<Switch size="large" />
```

## Disabled state

```svelte example hideScript
<script>
	import { Switch } from 'deskblocks';
</script>

<Switch disabled checked />
<Switch disabled />
```

## Props

| Prop       | Type                | Default   | Description                                                          |
| ---------- | ------------------- | --------- | -------------------------------------------------------------------- |
| `checked`  | boolean             | false     | Determines whether the switch is in the "on" (checked) state.        |
| `disabled` | boolean             | false     | Disables the switch, preventing user interaction.                    |
| `value`    | string              | undefined | Sets the value associated with the switch when it is checked.        |
| `required` | boolean             | false     | Indicates whether the switch must be toggled before form submission. |
| `size`     | 'small' \| 'medium' | 'small'   | Specifies the size of the switch.                                    |
| `id`       | string              | randomId  | Specifies a unique identifier for the switch.                        |
| `class`    | string              | undefined | Custom CSS class name for additional styling.                        |

## Events

- `on:click`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:change`
- `on:keyup`
- `on:focus`
- `on:blur`
