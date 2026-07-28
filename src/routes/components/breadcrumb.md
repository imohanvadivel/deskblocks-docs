---
title: Breadcrumb
dir: components
description: A breadcrumb trail showing the path to the current page, with clickable ancestors for navigating back up.
slug: breadcrumb
url: /components/breadcrumb
index: 33
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Breadcrumb

{description}

---

## Usage

Pass the trail as `items`. Every item except the last renders as a brand-colored link; the last renders as the current page (medium weight, `aria-current="page"`). Clicking an ancestor fires `on:navigate` with the clicked item's index — the host owns the actual navigation (e.g. popping its drill-down stack back to that level).

```svelte example
<script>
	import { Breadcrumb } from 'deskblocks';

	let items = [
		{ id: 'overview', label: 'Account overview' },
		{ id: 'tickets', label: 'Open tickets' },
		{ id: 'detail', label: 'Ticket #4831' }
	];

	function navigate(e) {
		items = items.slice(0, e.detail.index + 1);
	}
</script>

<Breadcrumb {items} on:navigate={navigate} />
```

## Single crumb

With one item the trail is just the current page — no separators, nothing clickable.

```svelte example hideScript
<script>
	import { Breadcrumb } from 'deskblocks';
</script>

<Breadcrumb items={[{ label: 'Account overview' }]} />
```

## Props

| Prop    | Type                               | Default   | Description                                                               |
| ------- | ---------------------------------- | --------- | ------------------------------------------------------------------------- |
| `items` | `{ label: string; id?: string }[]` | `[]`      | The trail, root first. The last item is the current page (not clickable). |
| `class` | `string`                           | undefined | Custom CSS class name for additional styling.                             |

## Events

- `on:navigate` — fired when an ancestor crumb is clicked; `event.detail` is `{ index, id, item }`.
