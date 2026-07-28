---
title: Note
dir: components
description: Note highlights contextual information, confirmations and warnings within a page.
slug: note
url: /components/note
index: 22
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Note

{description}

---

## Usage

```svelte example
<script>
	import { Note } from 'deskblocks';
</script>

<Note>This ticket is linked to an open problem ticket #4521.</Note>
```

## Tones

The `tone` prop picks the tint, border and leading status glyph: `info` (default), `success`, `warning` or `danger`.

```svelte example hideScript
<script>
	import { Note } from 'deskblocks';
</script>

<Note tone="info">Customer replied 5 minutes ago. Refresh to see the latest thread.</Note>
<Note tone="success">Refund of $42.00 was processed successfully.</Note>
<Note tone="warning">First-response SLA is due in 30 minutes.</Note>
<Note tone="danger">This contact has 3 escalated tickets open.</Note>
```

## With a title

Pass `title` to add a headline above the note body.

```svelte example hideScript
<script>
	import { Note } from 'deskblocks';
</script>

<Note tone="warning" title="Pending customer response">
	This ticket auto-closes in 48 hours if the customer does not reply.
</Note>
```

## Dismissible note

Pass `dismissible` to render a close button. Clicking it hides the note and fires the `dismiss` event.

```svelte example hideScript
<script>
	import { Note } from 'deskblocks';
</script>

<Note tone="success" dismissible on:dismiss={() => console.log('dismissed')}>
	Ticket #1287 was merged into #1284.
</Note>
```

## Custom icon

Each tone has a default icon. Pass an SVG string from `deskblocks/icons` to replace it.

```svelte example
<script>
	import { Note } from 'deskblocks';
	import { IconClock } from 'deskblocks/icons';
</script>

<Note tone="info" icon={IconClock}>Agent working hours end at 6:00 PM IST.</Note>
```

If both `title` and the default slot are empty, the component does not render.

## Slots

- `default`: the note body text.

## Props

| Prop          | Type                                                                  | Default   | Description                                                              |
| ------------- | --------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------ |
| `tone`        | <code>'info' &#124; 'success' &#124; 'warning' &#124; 'danger'</code> | 'info'    | Semantic color treatment; also selects the default leading status glyph. |
| `title`       | string                                                                | undefined | Optional title line rendered above the body.                             |
| `dismissible` | boolean                                                               | false     | Renders a close button that hides the note and fires `dismiss`.          |
| `icon`        | string                                                                | undefined | SVG string that replaces the tone's default icon.                        |
| `class`       | string                                                                | undefined | Custom CSS class name for additional styling.                            |

## Events

- `on:dismiss`: fires when the close button is clicked (the note hides itself).

## Accessibility

Notes use `role="status"` so updates can be announced without interrupting the user. A dismissible note includes a close button with an accessible label.
