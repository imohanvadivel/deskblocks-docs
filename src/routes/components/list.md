---
title: List
dir: components
description: A list renders rich rows — leading icon or avatar, title with subtitle meta, and trailing badges, counts, avatars, or icons — adapting automatically to narrow containers.
slug: list
url: /components/list
index: 25
---

<script>
  import 'deskblocks/globalStyles';
</script>

# List

{description}

---

## Usage

Pass pre-formatted `items`. A row renders as a rich row when it has a `title`. Subtitle meta items are separated by a middle dot; format dates in your app before passing them (e.g. `2 days ago`).

```svelte example
<script>
	import { List } from 'deskblocks';

	const items = [
		{
			title: 'Unable to log in after password reset',
			subtitle: [{ text: '#4521' }, { text: '2 hours ago' }],
			trailing: [{ kind: 'badge', text: 'Open', tone: 'info' }]
		},
		{
			title: 'Refund not credited to original payment method',
			subtitle: [{ text: '#4488' }, { text: 'Yesterday' }],
			trailing: [{ kind: 'badge', text: 'Escalated', tone: 'danger' }]
		},
		{
			title: 'Feature request: export reports as CSV',
			subtitle: [{ text: '#4460' }, { text: '3 days ago' }],
			trailing: [{ kind: 'badge', text: 'Closed', tone: 'success' }]
		}
	];
</script>

<List {items} />
```

## Leading icon or avatar

A row can lead with a raw-SVG icon in a 36px circle (`leadingIcon`), or an initials avatar derived from a name (`avatarName`). `avatarName` wins when both are set; an empty name renders `?`.

```svelte example
<script>
	import { List } from 'deskblocks';
	import { IconTicket, IconMail } from 'deskblocks/icons';

	const items = [
		{
			leadingIcon: IconTicket,
			title: 'Checkout page throws 502 during peak hours',
			subtitle: [{ text: 'High priority' }, { text: '30 minutes ago' }]
		},
		{
			leadingIcon: IconMail,
			title: 'Follow-up on invoice discrepancy',
			subtitle: [{ text: 'Billing' }, { text: '1 hour ago' }]
		},
		{
			avatarName: 'Ananya Iyer',
			title: 'Ananya Iyer',
			subtitle: [{ text: 'ananya.iyer@zylker.com' }, { text: 'Chennai' }]
		}
	];
</script>

<List {items} />
```

## Subtitle meta with icons

Each subtitle meta item can carry its own small icon (raw SVG string).

```svelte example
<script>
	import { List } from 'deskblocks';
	import { IconClock, IconComment, IconContact } from 'deskblocks/icons';

	const items = [
		{
			title: 'Payment gateway timeout on renewal',
			subtitle: [
				{ text: 'Due in 4 hours', icon: IconClock },
				{ text: '6 comments', icon: IconComment },
				{ text: 'Suresh Kumar', icon: IconContact }
			]
		}
	];
</script>

<List {items} />
```

## Trailing elements

Rows can end with any mix of trailing elements: a `badge` (tinted status pill), a `count` (number with an optional icon), a small `avatar` (initials), or a plain `icon`. On lists narrower than ~480px the trailing group wraps onto its own line under the text and the title relaxes to a two-line clamp.

```svelte example
<script>
	import { List } from 'deskblocks';
	import { IconComment, IconAttachment } from 'deskblocks/icons';

	const items = [
		{
			avatarName: 'Priya Raghavan',
			title: 'SLA breach on enterprise account',
			subtitle: [{ text: '#4602' }, { text: '10 minutes ago' }],
			trailing: [
				{ kind: 'count', value: 12, icon: IconComment },
				{ kind: 'badge', text: 'Urgent', tone: 'danger' }
			]
		},
		{
			avatarName: 'Ravi Shankar',
			title: 'Bulk import stuck at 60%',
			subtitle: [{ text: '#4599' }, { text: '1 hour ago' }],
			trailing: [
				{ kind: 'icon', icon: IconAttachment },
				{ kind: 'avatar', name: 'Lakshmi Narayanan' }
			]
		}
	];
</script>

<List {items} />
```

## Clickable rows

Set `clickable` to make rich rows interactive — pointer cursor, hover background, keyboard activation (Enter/Space) — and listen for `itemClick`. Navigation itself (e.g. opening a URL) stays in your app.

```svelte example
<script>
	import { List } from 'deskblocks';

	const items = [
		{ title: 'Login fails on mobile app', subtitle: [{ text: '#4611' }] },
		{ title: 'Dark mode contrast issues', subtitle: [{ text: '#4610' }] }
	];

	function open(e) {
		console.log('open ticket', e.detail.item, e.detail.index);
	}
</script>

<List {items} clickable on:itemClick={open} />
```

## Label/value rows

A row without a `title` falls back to the legacy label/value grid: each entry in `fields` renders a small label over a value, and `badge: true` renders the value as a chip.

```svelte example
<script>
	import { List } from 'deskblocks';

	const items = [
		{
			fields: [
				{ label: 'Subject', value: 'Server downtime alert' },
				{ label: 'Status', value: 'Open', badge: true },
				{ label: 'Agent', value: 'Suresh Kumar' }
			]
		},
		{
			fields: [
				{ label: 'Subject', value: 'License upgrade query' },
				{ label: 'Status', value: 'Closed', badge: true },
				{ label: 'Agent', value: 'Priya Raghavan' }
			]
		}
	];
</script>

<List {items} />
```

## Props

| Prop        | Type         | Default   | Description                                                                  |
| ----------- | ------------ | --------- | ---------------------------------------------------------------------------- |
| `items`     | `ListItem[]` | `[]`      | Rows to render.                                                               |
| `clickable` | boolean      | false     | Makes rich rows interactive and enables the `itemClick` event.                |
| `class`     | string       | undefined | Custom CSS class name for additional styling.                                 |

### ListItem

| Field         | Type                 | Description                                                                       |
| ------------- | -------------------- | --------------------------------------------------------------------------------- |
| `title`       | string               | Primary text. Its presence selects the rich-row layout.                           |
| `subtitle`    | `{ text: string; icon?: string }[]` | Meta items under the title, dot-separated; `icon` is a raw SVG string. Empty-text items are skipped. |
| `leadingIcon` | string               | Raw SVG string shown in a 36px leading circle.                                    |
| `avatarName`  | string               | Name for a 36px leading initials avatar (takes precedence over `leadingIcon`).    |
| `trailing`    | `ListTrailing[]`     | Trailing elements (see below).                                                    |
| `fields`      | `{ label: string; value: string; badge?: boolean }[]` | Legacy label/value columns, used when `title` is absent. |

### ListTrailing

| Variant  | Shape                                                                    | Description                                        |
| -------- | ------------------------------------------------------------------------ | -------------------------------------------------- |
| `badge`  | `{ kind: 'badge'; text: string; tone?: 'neutral' \| 'info' \| 'success' \| 'warning' \| 'danger' }` | Tinted status pill. Hidden when `text` is empty.   |
| `count`  | `{ kind: 'count'; value: string \| number; icon?: string }`              | Numeric indicator with an optional raw-SVG icon.   |
| `avatar` | `{ kind: 'avatar'; name: string }`                                       | Small 30px initials avatar.                        |
| `icon`   | `{ kind: 'icon'; icon: string }`                                         | Plain raw-SVG icon in the secondary text color.    |

## Events

- `on:itemClick` — fired when a rich row is clicked or activated with Enter/Space while `clickable` is set; `event.detail` is `{ item, index }`.
