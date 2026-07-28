---
title: Thread
dir: components
description: Thread presents messages and comments as a readable conversation with sender and timing details.
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

Pass messages in display order. Format absolute and relative time values in your application because the component renders them as provided.

Set `outgoing={false}` for an incoming customer message and `outgoing={true}` for an agent reply. If the direction is not known or does not apply, leave `outgoing` undefined and no direction badge will appear.

```svelte example
<script>
	import { Thread } from 'deskblocks';

	const messages = [
		{
			author: 'Ananya Iyer',
			time: '13 Jul 9:41 AM',
			relativeTime: '2 hours ago',
			preview:
				'Hi team, I reset my password this morning but I still cannot log in to the customer portal…',
			body: 'Hi team, I reset my password this morning but I still cannot log in to the customer portal. I have tried three different browsers and cleared the cache each time. The error says "invalid credentials" even though the reset email confirmed the change. Could you check whether my account is locked on your side? This is blocking our month-end reporting.',
			outgoing: false
		},
		{
			author: 'Suresh Kumar',
			time: '13 Jul 10:05 AM',
			relativeTime: '1 hour ago',
			preview:
				'Thanks for the details, Ananya. Your account was locked after repeated attempts, and I have unlocked it now.',
			outgoing: true
		},
		{
			author: 'Ananya Iyer',
			time: '13 Jul 10:12 AM',
			relativeTime: '55 minutes ago',
			preview: 'That fixed it, thank you!',
			outgoing: false
		}
	];
</script>

<Thread {messages} />
```

## Message direction

Incoming and outgoing messages share the same neutral card surface. Direction is carried only by the arrow badge, making the exchange easier to scan.

```svelte example
<script>
	import { Thread } from 'deskblocks';

	const messages = [
		{
			author: 'Priya Raghavan',
			time: '12 Jul 4:20 PM',
			preview: 'Is there an update on the refund for order #88231?',
			outgoing: false
		},
		{
			author: 'Zylker Support',
			time: '12 Jul 4:32 PM',
			preview: 'Yes, the refund was processed today and should reflect in 3 to 5 business days.',
			outgoing: true
		}
	];
</script>

<Thread {messages} />
```

## Public and private comments

Set `type="comment"` to display a comment instead of a message. Public comments use the info treatment. Private comments use the warning treatment so they are not confused with content visible to the customer. When `visibility` is omitted, a comment is treated as public.

```svelte example
<script>
	import { Thread } from 'deskblocks';

	const messages = [
		{
			author: 'Suresh Kumar',
			time: '13 Jul 10:25 AM',
			preview: 'Asked the billing team to confirm the refund reference.',
			type: 'comment',
			visibility: 'private'
		},
		{
			author: 'Zylker Support',
			time: '13 Jul 10:40 AM',
			preview: 'We are checking the refund with our billing team.',
			type: 'comment',
			visibility: 'public'
		}
	];
</script>

<Thread {messages} />
```

## Avatars

Each row derives an initials avatar from `author`. Pass an image URL through `avatar` to show a picture. If the image cannot load, the component returns to the initials, as the third row below shows.

```svelte example
<script>
	import { Thread } from 'deskblocks';

	const messages = [
		{
			author: 'Lakshmi Narayanan',
			time: '11 Jul 11:15 AM',
			preview: 'Attaching the HAR file you asked for.',
			avatar: '/assets/avatar/pic1.jpg'
		},
		{
			author: 'Ravi Shankar',
			time: '11 Jul 11:40 AM',
			preview: 'Received. Analysing it now.',
			outgoing: true,
			avatar: '/assets/avatar/pic2.jpg'
		},
		{
			author: 'Meera Krishnan',
			time: '11 Jul 12:02 PM',
			preview: 'Adding our billing contact to this thread.',
			avatar: 'https://example.com/avatar-that-cannot-load.png'
		}
	];
</script>

<Thread {messages} />
```

## Expandable messages

A message becomes expandable when `body` contains more content than `preview`, or when the preview is longer than 120 characters. Users can select the row or press Enter or Space to switch between the preview and full body. The component manages the open state and fires `toggle` after each change.

If `preview` is empty, the component creates a preview from `body`.

## Props

| Prop       | Type              | Default   | Description                                   |
| ---------- | ----------------- | --------- | --------------------------------------------- |
| `messages` | `ThreadMessage[]` | `[]`      | Messages to render, in display order.         |
| `class`    | string            | undefined | Custom CSS class name for additional styling. |

### ThreadMessage

| Field          | Type                                    | Description                                                          |
| -------------- | --------------------------------------- | -------------------------------------------------------------------- |
| `author`       | string                                  | Sender's display name. The initials avatar is derived from it.       |
| `time`         | string                                  | Optional, pre-formatted absolute time.                               |
| `relativeTime` | string                                  | Optional, pre-formatted relative time displayed in parentheses.      |
| `preview`      | string                                  | Text displayed while the row is collapsed.                           |
| `body`         | string                                  | Full text. A different value makes the row expandable.               |
| `avatar`       | string                                  | Image URL that falls back to the author's initials when it fails.    |
| `type`         | <code>'message' &#124; 'comment'</code> | Content type. Defaults to `message`.                                 |
| `visibility`   | <code>'public' &#124; 'private'</code>  | Comment visibility. Used only for comments and defaults to `public`. |
| `outgoing`     | boolean                                 | Message direction. Use `true` for outgoing and `false` for incoming. |

## Events

- `on:toggle`: fires when a row is expanded or collapsed; `event.detail` is `{ index, open }`.
