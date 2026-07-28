---
title: List
dir: components
description: List presents related records as responsive rows with supporting details and status indicators.
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

Pass display-ready items in the order you want them shown. An item with a `title` uses the rich row layout. Its subtitle entries appear below the title and are separated by a middle dot.

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

A rich row can start with an SVG icon, a photo, or an initials avatar. Pass the icon through `leadingIcon`, an image URL through `avatarSrc`, or the person's name through `avatarName`. When more than one is present, `avatarSrc` wins, then `avatarName`. A photo that cannot load falls back to the initials, so it is worth passing `avatarName` alongside `avatarSrc`.

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
			avatarSrc: '/assets/avatar/pic1.jpg',
			avatarName: 'Ananya Iyer',
			title: 'Ananya Iyer',
			subtitle: [{ text: 'ananya.iyer@zylker.com' }, { text: 'Chennai' }]
		},
		{
			avatarName: 'Ravi Shankar',
			title: 'Ravi Shankar',
			subtitle: [{ text: 'ravi.shankar@zylker.com' }, { text: 'Coimbatore' }]
		}
	];
</script>

<List {items} />
```

## Subtitle meta with icons

Each subtitle item can include a small SVG icon. Empty subtitle text is skipped.

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

Rows can end with any combination of badges, counts, avatars and icons. In narrow containers, the trailing group moves below the main text and the title can wrap to two lines.

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

Set `clickable` to make rich rows interactive: rows get a pointer cursor, a hover background and keyboard activation with Enter or Space. Listen for `itemClick` to react. Navigation itself, such as opening a URL, stays in the extension.

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

An item without a `title` can use `fields` to display a read-only label and value grid. Set `badge: true` on a field to display its non-empty value as a chip. Label and value rows do not become interactive when `clickable` is set.

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

| Prop        | Type         | Default   | Description                                                    |
| ----------- | ------------ | --------- | -------------------------------------------------------------- |
| `items`     | `ListItem[]` | `[]`      | Rows to render.                                                |
| `clickable` | boolean      | false     | Makes rich rows interactive and enables the `itemClick` event. |
| `class`     | string       | undefined | Custom CSS class name for additional styling.                  |

### ListItem

| Field         | Type                                                  | Description                                                                                          |
| ------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `title`       | string                                                | Primary text. A defined value selects the rich row layout.                                           |
| `subtitle`    | `{ text: string; icon?: string }[]`                   | Meta items under the title, dot-separated; `icon` is a raw SVG string. Empty-text items are skipped. |
| `leadingIcon` | string                                                | SVG string shown in a leading icon circle.                                                           |
| `avatarName`  | string                                                | Name for a leading initials avatar. A non-empty value takes precedence over `leadingIcon`.           |
| `avatarSrc`   | string                                                | Image URL for a leading photo avatar. Wins over `avatarName`, and falls back to it if it fails.      |
| `trailing`    | `ListTrailing[]`                                      | Trailing elements (see below).                                                                       |
| `fields`      | `{ label: string; value: string; badge?: boolean }[]` | Legacy label/value columns, used when `title` is absent.                                             |

### ListTrailing

| Variant  | Shape                                          | Description                                       |
| -------- | ---------------------------------------------- | ------------------------------------------------- |
| `badge`  | `{ kind: 'badge'; text: string; tone?: Tone }` | Tinted status label. Hidden when `text` is empty. |
| `count`  | `ListCount`                                    | Value with an optional SVG icon.                  |
| `avatar` | `{ kind: 'avatar'; name: string }`             | Small 30px initials avatar.                       |
| `icon`   | `{ kind: 'icon'; icon: string }`               | SVG icon in the secondary text color.             |

`Tone` can be `neutral`, `info`, `success`, `warning` or `danger`.

```ts
type ListCount = {
	kind: 'count';
	value: string | number;
	icon?: string;
};
```

## Events

- `on:itemClick`: fires when a rich row is clicked or activated with Enter/Space while `clickable` is set; `event.detail` is `{ item, index }`.
