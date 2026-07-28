---
title: Table
dir: components
description: Table organizes structured data into aligned columns with optional sorting, badges and row actions.
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

Define each column with a `key` and `label`, then pass row objects that use the same keys. Cell values should be ready for display, so format dates, currency and entity names in your application. Empty cells display a dash placeholder.

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

Set `badge: true` on a column to render its values as tinted chips. Pass a plain string for the neutral tone or a `{ text, tone }` object to control the tone for an individual cell. Empty badge cells display the same dash placeholder as other empty cells.

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

Pass `sortable` to make every column sortable, then set a column's `sortable` field to override the table setting. Selecting a header toggles between ascending and descending order. The active arrow uses a stronger color.

A column sorts numerically only when every non-empty value can be converted to a number. Other values sort alphabetically, and empty cells remain at the end in either direction. Headers can be activated with a pointer, Enter or Space.

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

Each column accepts `align` and a CSS `width`, such as `"120px"` or `"30%"`. The table scrolls horizontally inside its own container when it is wider than the available space.

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

Pass `clickableRows` to add a pointer cursor and hover treatment, then listen to `rowClick`. The event includes both the row's original index and its current position after sorting.

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

<Table
	{columns}
	{rows}
	clickableRows
	on:rowClick={(e) => alert(`Open ticket #${e.detail.row.id} from row ${e.detail.index}`)}
/>
```

## Props

| Prop            | Type            | Default   | Description                                                                      |
| --------------- | --------------- | --------- | -------------------------------------------------------------------------------- |
| `columns`       | `TableColumn[]` | `[]`      | Column definitions.                                                              |
| `rows`          | `TableRow[]`    | `[]`      | Row objects keyed by each column's `key`.                                        |
| `sortable`      | `boolean`       | `false`   | Makes every header sortable. A column's `sortable` field overrides this setting. |
| `clickableRows` | `boolean`       | `false`   | Adds an interactive appearance and enables the `rowClick` event.                 |
| `class`         | `string`        | undefined | Custom CSS class name for additional styling.                                    |

### TableColumn

| Field      | Type                                               | Description                                                |
| ---------- | -------------------------------------------------- | ---------------------------------------------------------- |
| `key`      | `string`                                           | Property read from each row.                               |
| `label`    | `string`                                           | Text displayed in the header.                              |
| `align`    | <code>'left' &#124; 'center' &#124; 'right'</code> | Horizontal alignment for the header and cells.             |
| `width`    | `string`                                           | CSS width for the column, such as `"120px"` or `"30%"`.    |
| `badge`    | `boolean`                                          | Displays non-empty cells in this column as chips.          |
| `sortable` | `boolean`                                          | Overrides the table-level sorting setting for this column. |

### TableRow

A row is an object keyed by the column definitions. Regular cells accept a string, number, `null` or `undefined`. Badge cells also accept `{ text: string, tone?: Tone }`, where `Tone` is `neutral`, `info`, `success`, `warning` or `danger`.

## Events

- `on:rowClick`: fires when a row is clicked while `clickableRows` is set. `event.detail` is `{ row, index, sortedIndex }`. The `index` points to the original `rows` array, while `sortedIndex` is the row's current display position.
