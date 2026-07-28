---
title: Timer
dir: components
description: Timer counts down to a deadline, then shows the overdue duration in the danger color.
slug: timer
url: /components/timer
index: 31
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Timer

{description}

---

## Usage

Pass `deadline` as an ISO date string or epoch milliseconds. The default text display uses a compact duration such as "2d 4h left". After the deadline passes, it changes to text such as "Overdue by 35m" and uses the danger color. An empty or invalid deadline displays a dash placeholder.

```svelte example
<script>
	import { Timer } from 'deskblocks';

	const inSixHours = Date.now() + 6.4 * 60 * 60 * 1000;
</script>

<Timer label="Respond by" deadline={inSixHours} />
```

## Overdue

```svelte example hideScript
<script>
	import { Timer } from 'deskblocks';

	const yesterday = Date.now() - 26 * 60 * 60 * 1000;
</script>

<Timer label="Resolution due" deadline={yesterday} />
```

## Clock display

Set `display="clock"` for a live `HH:MM:SS` countdown. Durations longer than 24 hours include a day prefix. Once overdue, the timer counts up from the deadline and adds a minus sign.

```svelte example hideScript
<script>
	import { Timer } from 'deskblocks';

	const soon = Date.now() + 95 * 60 * 1000;
</script>

<Timer label="Due in" deadline={soon} display="clock" />
```

## Props

| Prop       | Type                                          | Default    | Description                                                                 |
| ---------- | --------------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| `deadline` | <code>string &#124; number &#124; null</code> | undefined  | Deadline as an ISO date string or epoch milliseconds.                       |
| `display`  | <code>'text' &#124; 'clock'</code>            | `'text'`   | Displays a compact text duration or a live clock that updates every second. |
| `label`    | `string`                                      | `'Due in'` | The small label rendered above the value.                                   |
| `class`    | `string`                                      | undefined  | Custom CSS class name for additional styling.                               |

## Events

None.

## Accessibility

The component uses `role="timer"` and combines the label with the current value for its accessible name.
