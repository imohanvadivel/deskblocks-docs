---
title: Property Grid
dir: components
description: A quiet label-over-value grid for read-only record summaries, with an optional two-column layout.
slug: property-grid
url: /components/property-grid
index: 27
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Property Grid

{description}

---

## Usage

Pass `items` as `{ label, value }` pairs. Values are display-ready strings — format dates, currency and entity names before passing them in. Empty values (`null`, `undefined`, `''` or an explicit `'—'`) render as a muted em dash so they don't compete with real data. Values are always plain text — the grid deliberately never renders badges or chips, keeping it a calm read-only summary.

```svelte example
<script>
	import { PropertyGrid } from 'deskblocks';

	const items = [
		{ label: 'Ticket ID', value: '#4831' },
		{ label: 'Channel', value: 'Email' },
		{ label: 'Department', value: 'Billing' },
		{ label: 'Due date', value: null }
	];
</script>

<PropertyGrid {items} />
```

## Two columns

Set `columns={2}` for a two-column layout. Columns are capped at ~260px each (mirroring field rows), and the grid collapses back to a single column when the container is narrower than ~464px.

```svelte example hideScript
<script>
	import { PropertyGrid } from 'deskblocks';

	const items = [
		{ label: 'Account', value: 'Zylker Corp' },
		{ label: 'Plan', value: 'Enterprise' },
		{ label: 'Account owner', value: 'Amelia Burrows' },
		{ label: 'Renewal date', value: '01 Mar 2027' },
		{ label: 'Support tier', value: 'Premium' },
		{ label: 'Health score', value: '' }
	];
</script>

<PropertyGrid {items} columns={2} />
```

## Props

| Prop      | Type                                                    | Default   | Description                                                                    |
| --------- | ------------------------------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `items`   | `{ label: string; value?: string \| number \| null }[]` | `[]`      | Label/value pairs. Empty values render as a muted "—".                         |
| `columns` | `1 \| 2`                                                 | `1`       | Column count; two columns collapse to one when the container is narrow.        |
| `class`   | `string`                                                 | undefined | Custom CSS class name for additional styling.                                  |

## Events

None.
