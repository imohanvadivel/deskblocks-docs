---
title: Table
dir: components
description: A data table with aligned columns, optional click-to-sort headers, badge cells, and clickable rows.
slug: table
url: /components/table
index: 26
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Table

{description}

---

## Usage

Pass `columns` (each with a `key` and `label`) and `rows` (plain objects keyed by column `key`). Cell values are display-ready strings or numbers — format dates, currency and entity names before passing them in. Empty cells (`null`, `undefined` or `''`) render as an em dash.

```svelte example
<script>
	import { Table } from 'deskblocks';

	const columns = [
		{ key: 'subject', label: 'Subject' },
		{ key: 'agent', label: 'Agent' },
		{ key: 'created', label: 'Created' }
	];
	const rows = [
		{ subject: 'Refund not processed', agent: 'Amelia Burrows', created: '02 Jul 2026' },
		{ subject: 'Cannot log in to portal', agent: 'Ravi Kumar', created: '05 Jul 2026' },
		{ subject: 'Invoice mismatch for June', agent: null, created: '08 Jul 2026' }
	];
</script>

<Table {columns} {rows} />
```

## Badge cells

Set `badge: true` on a column to render its cells as tone-tinted chips. A badge cell value can be a plain string (neutral tone) or a `{ text, tone }` object — tones follow the Chip convention (`neutral`, `info`, `success`, `warning`, `danger`). Empty badge cells fall back to a plain em dash.

```svelte example
<script>
	import { Table } from 'deskblocks';

	const columns = [
		{ key: 'subject', label: 'Subject' },
		{ key: 'status', label: 'Status', badge: true },
		{ key: 'priority', label: 'Priority', badge: true }
	];
	const rows = [
		{
			subject: 'Refund not processed',
			status: { text: 'Open', tone: 'info' },
			priority: { text: 'High', tone: 'danger' }
		},
		{
			subject: 'Cannot log in to portal',
			status: { text: 'Closed', tone: 'success' },
			priority: { text: 'Low', tone: 'neutral' }
		},
		{
			subject: 'Invoice mismatch for June',
			status: { text: 'On Hold', tone: 'warning' },
			priority: null
		}
	];
</script>

<Table {columns} {rows} />
```

## Sortable columns

Pass `sortable` to enable click-to-sort on every header — clicking toggles ascending/descending and shows a ▲/▼ indicator. A column can opt out (or in) individually via its own `sortable` field. Numeric values sort numerically; everything else sorts alphabetically.

```svelte example hideScript
<script>
	import { Table } from 'deskblocks';

	const columns = [
		{ key: 'subject', label: 'Subject' },
		{ key: 'replies', label: 'Replies', align: 'right' },
		{ key: 'agent', label: 'Agent', sortable: false }
	];
	const rows = [
		{ subject: 'Refund not processed', replies: 12, agent: 'Amelia Burrows' },
		{ subject: 'Cannot log in to portal', replies: 3, agent: 'Ravi Kumar' },
		{ subject: 'Invoice mismatch for June', replies: 27, agent: 'Dana Fox' }
	];
</script>

<Table {columns} {rows} sortable />
```

## Alignment and width

Each column accepts `align` (`left` | `center` | `right`) and a CSS `width` (e.g. `"120px"`, `"30%"`). The table scrolls horizontally inside its own wrapper when it overflows.

```svelte example hideScript
<script>
	import { Table } from 'deskblocks';

	const columns = [
		{ key: 'plan', label: 'Plan', width: '40%' },
		{ key: 'seats', label: 'Seats', align: 'center' },
		{ key: 'mrr', label: 'MRR', align: 'right' }
	];
	const rows = [
		{ plan: 'Enterprise', seats: 250, mrr: '$4,990' },
		{ plan: 'Professional', seats: 40, mrr: '$1,160' },
		{ plan: 'Standard', seats: 8, mrr: '$232' }
	];
</script>

<Table {columns} {rows} />
```

## Clickable rows

Pass `clickableRows` to give rows a pointer cursor and hover background, and listen to `on:rowClick` — the event detail carries the clicked `row` object and its `index` in the currently sorted order.

```svelte example
<script>
	import { Table } from 'deskblocks';

	const columns = [
		{ key: 'subject', label: 'Subject' },
		{ key: 'contact', label: 'Contact' }
	];
	const rows = [
		{ id: '4831', subject: 'Refund not processed', contact: 'Lena Weiss' },
		{ id: '4906', subject: 'Cannot log in to portal', contact: 'Marco Silva' }
	];
</script>

<Table {columns} {rows} clickableRows on:rowClick={(e) => alert('Open ticket #' + e.detail.row.id)} />
```

## Props

| Prop            | Type                                                                                        | Default   | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------ |
| `columns`       | `{ key: string; label: string; align?: 'left'\|'center'\|'right'; width?: string; badge?: boolean; sortable?: boolean }[]` | `[]`      | Column definitions.                                                                              |
| `rows`          | `Record<string, string \| number \| null \| { text: string; tone?: Tone }>[]`               | `[]`      | Row objects keyed by column `key`. Badge columns accept `{ text, tone }` cells.                  |
| `sortable`      | `boolean`                                                                                    | `false`   | Enables click-to-sort on all headers; a column's own `sortable` field overrides this per column. |
| `clickableRows` | `boolean`                                                                                    | `false`   | Rows show a pointer cursor and hover background.                                                 |
| `class`         | `string`                                                                                     | undefined | Custom CSS class name for additional styling.                                                    |

## Events

- `on:rowClick` — fired when a row is clicked; `event.detail` is `{ row, index }` (index within the current sort order).
