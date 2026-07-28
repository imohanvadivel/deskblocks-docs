---
title: Property Grid
dir: components
description: Property Grid presents read-only record details as clear label and value pairs.
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

Pass display-ready label and value pairs to `items`. Format dates, currency and entity names before passing them in. Empty values display a muted dash placeholder, while numeric zero remains visible.

Property values are always rendered as plain text. Use [List](/components/list) or [Table](/components/table) when the content needs status badges or row actions.

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

Set `columns={2}` for a compact two-column layout. The grid returns to one column when its container is too narrow.

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

| Prop      | Type                    | Default   | Description                                                                |
| --------- | ----------------------- | --------- | -------------------------------------------------------------------------- |
| `items`   | `PropertyItem[]`        | `[]`      | Label and value pairs. Empty values display a muted dash placeholder.      |
| `columns` | <code>1 &#124; 2</code> | `1`       | Preferred column count. Two columns collapse to one in a narrow container. |
| `class`   | `string`                | undefined | Custom CSS class name for additional styling.                              |

### PropertyItem

| Field   | Type                                          | Description                                          |
| ------- | --------------------------------------------- | ---------------------------------------------------- |
| `label` | `string`                                      | Label displayed above the value.                     |
| `value` | <code>string &#124; number &#124; null</code> | Display-ready value. Empty values use a placeholder. |

## Events

None.
