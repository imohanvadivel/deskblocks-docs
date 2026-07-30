---
title: Tags
dir: components
category: Data Display
description: Tags displays a wrapping group of compact labels with an optional semantic tone.
slug: tags
url: /components/tags
index: 10
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Tags

{description}

---

## Usage

Pass an array of labels to `tags`. Blank labels are ignored, and the row wraps when it runs out of space. If there are no visible labels, the component displays a muted dash placeholder.

```svelte example hideTheme
<script>
	import { Tags } from 'deskblocks';
</script>

<Tags tags={['billing', 'refund', 'priority-customer']} />
```

## Tone

Use `tone` when every label in the group shares the same meaning. For example, a danger tone can identify escalation tags, while a success tone can identify completed work. Leave the tone unset for the neutral appearance.

```svelte example hideScript hideTheme
<script>
	import { Tags } from 'deskblocks';
</script>

<Tags tone="info" tags={['feature-request', 'roadmap']} />
<Tags tone="success" tags={['resolved', 'verified-fix']} />
<Tags tone="warning" tags={['sla-risk', 'awaiting-customer']} />
<Tags tone="danger" tags={['escalated', 'churn-risk']} />
```

## Empty state

```svelte example hideScript hideTheme
<script>
	import { Tags } from 'deskblocks';
</script>

<Tags tags={[]} />
```

## Tags or Chip

Use `Tags` to display a group of plain, read-only labels. Use [Chip](/components/chip) when you need one label with an icon, avatar, disabled state or dismiss action.

## Props

| Prop    | Type                                                                                   | Default   | Description                                      |
| ------- | -------------------------------------------------------------------------------------- | --------- | ------------------------------------------------ |
| `tags`  | `string[]`                                                                             | `[]`      | Labels to display. Blank labels are ignored.     |
| `tone`  | <code>'neutral' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'danger'</code> | undefined | Semantic color treatment applied to every label. |
| `class` | `string`                                                                               | undefined | Custom CSS class name for additional styling.    |

## Events

None.
