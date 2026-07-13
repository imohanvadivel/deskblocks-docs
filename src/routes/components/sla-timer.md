---
title: SLA Timer
dir: components
description: A labelled countdown to a deadline — humanised text or a live ticking clock — that turns red once overdue.
slug: sla-timer
url: /components/sla-timer
index: 31
---

<script>
  import 'deskblocks/globalStyles';
</script>

# SLA Timer

{description}

---

## Usage

Pass `deadline` as an ISO date string or epoch milliseconds. The component owns the ticking (a 1-second interval) and the formatting: in the default `text` display it shows a humanised duration like "2d 4h left", flipping to "Overdue by 35m" in bold danger red once the deadline passes. An empty or invalid deadline renders "—".

```svelte example
<script>
	import { SlaTimer } from 'deskblocks';

	const inSixHours = Date.now() + 6.4 * 60 * 60 * 1000;
</script>

<SlaTimer label="Respond by" deadline={inSixHours} />
```

## Overdue

```svelte example hideScript
<script>
	import { SlaTimer } from 'deskblocks';

	const yesterday = Date.now() - 26 * 60 * 60 * 1000;
</script>

<SlaTimer label="Resolution due" deadline={yesterday} />
```

## Clock display

`display="clock"` renders a live `HH:MM:SS` countdown (with a `Nd` day prefix past 24 hours) that ticks every second; once overdue it counts up with a leading minus sign.

```svelte example hideScript
<script>
	import { SlaTimer } from 'deskblocks';

	const soon = Date.now() + 95 * 60 * 1000;
</script>

<SlaTimer label="Due in" deadline={soon} display="clock" />
```

## Props

| Prop       | Type                 | Default    | Description                                                                              |
| ---------- | -------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| `deadline` | `string \| number`   | undefined  | The deadline — an ISO date string or epoch milliseconds. Empty/invalid renders "—".       |
| `display`  | `'text' \| 'clock'`  | `'text'`   | `text` = humanised duration ("2d 4h left"); `clock` = live HH:MM:SS ticking every second. |
| `label`    | `string`             | `'Due in'` | The small label rendered above the value.                                                 |
| `class`    | `string`             | undefined  | Custom CSS class name for additional styling.                                             |

## Events

None.
