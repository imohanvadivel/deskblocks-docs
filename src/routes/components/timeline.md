---
title: Timeline
dir: components
category: Data Display
description: Timeline presents a chronological stream of events grouped by day.
slug: timeline
url: /components/timeline
index: 6
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Timeline

{description}

---

## Usage

Pass events in the order you want them displayed. Consecutive items with the same `day` share one heading. The component does not sort events or format dates, so prepare `day` and `time` in your application.

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

An event can carry an `icon` beside its title, either a raw SVG string (for example a glyph from `deskblocks/icons`) or a short text or emoji marker.

```svelte example
<script>
	import { Timeline } from 'deskblocks';
	import { IconMail, IconCall } from 'deskblocks/icons';

	const items = [
		{
			day: 'Today (13 Jul)',
			time: '11:05 AM',
			title: 'Email Received',
			icon: IconMail,
			actor: 'Priya Raghavan'
		},
		{
			day: 'Today (13 Jul)',
			time: '10:12 AM',
			title: 'Call Logged',
			icon: IconCall,
			actor: 'Suresh Kumar'
		}
	];
</script>

<Timeline {items} />
```

## Details

Use `details` for supporting information, such as field changes in an audit history. The label is optional, but every detail needs a value.

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

## Events without a day

The `day` field is optional. Events without it stay on the timeline rail but do not display a day heading or calendar icon.

```svelte example hideScript
<script>
	import { Timeline } from 'deskblocks';

	const items = [
		{ time: '11:05 AM', title: 'Email received', actor: 'Priya Raghavan' },
		{ time: '10:12 AM', title: 'Call logged', actor: 'Suresh Kumar' }
	];
</script>

<Timeline {items} />
```

## Props

| Prop    | Type             | Default   | Description                                                               |
| ------- | ---------------- | --------- | ------------------------------------------------------------------------- |
| `items` | `TimelineItem[]` | `[]`      | Events to render, in display order. Consecutive equal `day` values group. |
| `class` | string           | undefined | Custom CSS class name for additional styling.                             |

### TimelineItem

| Field     | Type                                  | Description                                                            |
| --------- | ------------------------------------- | ---------------------------------------------------------------------- |
| `day`     | string                                | Optional, pre-formatted group heading, such as `Today (13 Jul)`.       |
| `time`    | string                                | Optional, pre-formatted time, such as `3:12 PM` or `20 minutes ago`.   |
| `title`   | string                                | Event title.                                                           |
| `icon`    | string                                | SVG string or short text marker displayed beside the title.            |
| `actor`   | string                                | Person who performed the event. The first character becomes an avatar. |
| `details` | `{ label?: string; value: string }[]` | Supporting label and value lines displayed below the event.            |
