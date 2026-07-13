---
title: Thread
dir: components
description: A thread displays a conversation as flush message rows with avatars and timestamps; long messages clamp to a preview and expand on click.
slug: thread
url: /components/thread
index: 32
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Thread

{description}

---

## Usage

Pass pre-formatted `messages`. A row becomes expandable when its `body` differs from its `preview`, or when the preview alone is longer than 120 characters — clicking the row (or pressing Enter/Space) toggles between the two-line clamp and the full body. Expansion state is managed internally. Time strings are rendered as-is; format them in your app.

```svelte example
<script>
	import { Thread } from 'deskblocks';

	const messages = [
		{
			author: 'Ananya Iyer',
			time: '13 Jul 9:41 AM',
			relativeTime: '2 hours ago',
			preview: 'Hi team, I reset my password this morning but I still cannot log in to the customer portal…',
			body: 'Hi team, I reset my password this morning but I still cannot log in to the customer portal. I have tried three different browsers and cleared the cache each time. The error says "invalid credentials" even though the reset email confirmed the change. Could you check whether my account is locked on your side? This is blocking our month-end reporting.'
		},
		{
			author: 'Suresh Kumar',
			time: '13 Jul 10:05 AM',
			relativeTime: '1 hour ago',
			preview: 'Thanks for the details, Ananya. Your account was locked after repeated attempts — I have unlocked it now.',
			outgoing: true
		},
		{
			author: 'Ananya Iyer',
			time: '13 Jul 10:12 AM',
			relativeTime: '55 minutes ago',
			preview: 'That fixed it, thank you!'
		}
	];
</script>

<Thread {messages} />
```

## Outgoing messages

Mark agent replies with `outgoing` — the row gets a brand-colored left border and a tinted background so the back-and-forth is scannable.

```svelte example
<script>
	import { Thread } from 'deskblocks';

	const messages = [
		{
			author: 'Priya Raghavan',
			time: '12 Jul 4:20 PM',
			preview: 'Is there an update on the refund for order #88231?'
		},
		{
			author: 'Zylker Support',
			time: '12 Jul 4:32 PM',
			preview: 'Yes — the refund was processed today and should reflect in 3–5 business days.',
			outgoing: true
		}
	];
</script>

<Thread {messages} />
```

## Avatars

Rows show an initials avatar derived from `author`; pass an `avatar` image URL to show a picture instead.

```svelte example
<script>
	import { Thread } from 'deskblocks';

	const messages = [
		{
			author: 'Lakshmi Narayanan',
			time: '11 Jul 11:15 AM',
			preview: 'Attaching the HAR file you asked for.'
		},
		{
			author: 'Ravi Shankar',
			time: '11 Jul 11:40 AM',
			preview: 'Received — analysing it now.',
			outgoing: true
		}
	];
</script>

<Thread {messages} />
```

## Props

| Prop       | Type              | Default   | Description                                   |
| ---------- | ----------------- | --------- | --------------------------------------------- |
| `messages` | `ThreadMessage[]` | `[]`      | Messages to render, in display order.         |
| `class`    | string            | undefined | Custom CSS class name for additional styling. |

### ThreadMessage

| Field          | Type    | Description                                                                     |
| -------------- | ------- | -------------------------------------------------------------------------------- |
| `author`       | string  | Sender's display name; the initials avatar is derived from it.                   |
| `time`         | string  | Pre-formatted absolute time, e.g. `04 Jul 3:12 PM`. Optional.                    |
| `relativeTime` | string  | Pre-formatted relative time shown in parentheses, e.g. `2 hours ago`. Optional.  |
| `preview`      | string  | Collapsed summary text (two-line clamp when the row is expandable).              |
| `body`         | string  | Full body; when it differs from `preview`, the row becomes expandable.           |
| `avatar`       | string  | Avatar image URL; falls back to author initials.                                 |
| `outgoing`     | boolean | Marks an agent reply: brand left border + tinted background.                     |

## Events

- `on:toggle` — fired when a row is expanded or collapsed; `event.detail` is `{ index, open }`.
