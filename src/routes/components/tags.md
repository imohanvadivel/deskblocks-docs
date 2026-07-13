---
title: Tags
dir: components
description: A wrapping row of bordered tag pills, with optional semantic tones, in the Desk status-pill style.
slug: tags
url: /components/tags
index: 35
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Tags

{description}

---

## Usage

Pass tag labels as `tags`. Each renders as a bordered pill (tinted background, squared radius) — the Desk status-pill look. The row wraps with an 8px gap; an empty list renders a single "—" placeholder. For the softer rounded chip style, use the [Chip component](/components/chip) directly.

```svelte example
<script>
	import { Tags } from 'deskblocks';
</script>

<Tags tags={['billing', 'refund', 'priority-customer']} />
```

## Tone

The `tone` prop applies a semantic color treatment (tinted background, colored border and text) to every pill — useful when the tag set carries one meaning, like escalation labels.

```svelte example hideScript
<script>
	import { Tags } from 'deskblocks';
</script>

<Tags tone="info" tags={['feature-request', 'roadmap']} />
<Tags tone="success" tags={['resolved', 'verified-fix']} />
<Tags tone="warning" tags={['sla-risk', 'awaiting-customer']} />
<Tags tone="danger" tags={['escalated', 'churn-risk']} />
```

## Empty state

```svelte example hideScript
<script>
	import { Tags } from 'deskblocks';
</script>

<Tags tags={[]} />
```

## Props

| Prop    | Type                                                        | Default     | Description                                                       |
| ------- | ----------------------------------------------------------- | ----------- | ------------------------------------------------------------------ |
| `tags`  | `string[]`                                                  | `[]`        | Tag labels. An empty list renders a "—" placeholder.               |
| `tone`  | `'neutral' \| 'info' \| 'success' \| 'warning' \| 'danger'` | undefined   | Semantic color treatment applied to every pill.                    |
| `class` | `string`                                                    | undefined   | Custom CSS class name for additional styling.                      |

## Events

None.
