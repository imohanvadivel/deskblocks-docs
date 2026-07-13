---
title: Timeline
dir: components
description: A timeline presents a chronological, date-grouped stream of events along a vertical rail, such as a ticket's activity history.
slug: timeline
url: /components/timeline
index: 24
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Timeline

{description}

---

## Usage

Pass pre-formatted `items`. Consecutive items sharing the same `day` string are grouped under one day header. All day and time strings are rendered as-is — format dates in your app before passing them.

```svelte example
<script>
	import { Timeline } from 'deskblocks';

	const items = [
		{
			day: 'Today (13 Jul)',
			time: '20 minutes ago',
			title: 'Ticket Updated',
			details: [{ label: 'Status', value: 'changed from Open to In Progress' }]
		},
		{
			day: 'Today (13 Jul)',
			time: '9:41 AM',
			title: 'Comment Added',
			actor: 'Lakshmi Narayanan'
		},
		{
			day: '10 Jul',
			time: '4:32 PM',
			title: 'Ticket Created',
			actor: 'Ananya Iyer',
			details: [
				{ label: 'Channel', value: 'Email' },
				{ label: 'Priority', value: 'High' }
			]
		}
	];
</script>

<Timeline {items} />
```

## Event icons

An event can carry an `icon` beside its title — either a raw SVG string (for example a glyph from `deskblocks/icons`) or a short text/emoji marker.

```svelte example
<script>
	import { Timeline } from 'deskblocks';
	import { IconMail, IconCall } from 'deskblocks/icons';

	const items = [
		{ day: 'Today (13 Jul)', time: '11:05 AM', title: 'Email Received', icon: IconMail, actor: 'Priya Raghavan' },
		{ day: 'Today (13 Jul)', time: '10:12 AM', title: 'Call Logged', icon: IconCall, actor: 'Suresh Kumar' }
	];
</script>

<Timeline {items} />
```

## Details

Each event can list `details` — muted label + value lines, useful for field transitions in an audit history.

```svelte example
<script>
	import { Timeline } from 'deskblocks';

	const items = [
		{
			day: '08 Jul',
			time: '6:20 PM',
			title: 'SLA Escalated',
			details: [
				{ label: 'Level', value: 'changed from L1 to L2' },
				{ label: 'Assignee', value: 'changed from Ravi to Escalations Team' }
			]
		}
	];
</script>

<Timeline {items} />
```

## Props

| Prop    | Type             | Default   | Description                                                              |
| ------- | ---------------- | --------- | ------------------------------------------------------------------------ |
| `items` | `TimelineItem[]` | `[]`      | Events to render, in display order. Consecutive equal `day` values group. |
| `class` | string           | undefined | Custom CSS class name for additional styling.                             |

### TimelineItem

| Field     | Type                                  | Description                                                                    |
| --------- | ------------------------------------- | ------------------------------------------------------------------------------ |
| `day`     | string                                | Pre-formatted day-group header, e.g. `Today (13 Jul)`. Optional.               |
| `time`    | string                                | Pre-formatted time label, e.g. `3:12 PM` or `20 minutes ago`. Optional.        |
| `title`   | string                                | Event title.                                                                    |
| `icon`    | string                                | Raw SVG string (rendered inline) or short text/emoji shown beside the title.   |
| `actor`   | string                                | Person who performed the event; renders an initial avatar + name.              |
| `details` | `{ label?: string; value: string }[]` | Label/value lines under the title.                                             |
