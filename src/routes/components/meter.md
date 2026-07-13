---
title: Meter
dir: components
description: A meter visualizes a bounded numeric value as a slim progress track with an optional label and scale.
slug: meter
url: /components/meter
index: 29
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Meter

{description}

---

## Usage

```svelte example
<script>
	import { Meter } from 'deskblocks';
</script>

<Meter label="SLA consumed" value={62} unit="%" />
```

The value line shows the number rounded to two decimals with the `unit` appended; a non-finite value renders as "—".

## Tones

The fill defaults to the brand color. Set `tone` to reflect state — for example warning as an SLA nears breach.

```svelte example hideScript
<script>
	import { Meter } from 'deskblocks';
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
	<Meter label="Storage used" value={41} unit="%" />
	<Meter label="Resolution SLA" value={68} unit="%" tone="success" />
	<Meter label="First response SLA" value={85} unit="%" tone="warning" />
	<Meter label="Escalation threshold" value={97} unit="%" tone="danger" />
</div>
```

Coloring is explicit — the component applies no automatic percentage thresholds, so the caller decides when a meter turns warning or danger.

## Custom scale

`max` bounds the track (default 100). Pass `showScale` to print the `0 … max` line under the track, with the unit echoed in the middle.

```svelte example hideScript
<script>
	import { Meter } from 'deskblocks';
</script>

<Meter label="Tickets handled today" value={34} max={50} unit=" tickets" showScale />
```

## Props

| Prop        | Type                                            | Default   | Description                                                              |
| ----------- | ------------------------------------------------ | --------- | ------------------------------------------------------------------------ |
| `value`     | number                                           | —         | Current value; clamped to `0…max` for the fill width.                     |
| `max`       | number                                           | 100       | Scale maximum. Values ≤ 0 fall back to 100.                               |
| `label`     | string                                           | undefined | Label shown left of the value line; also used as the `aria-label`.        |
| `unit`      | string                                           | undefined | Suffix appended to the value text and echoed mid-scale.                   |
| `tone`      | 'brand' \| 'success' \| 'warning' \| 'danger'   | 'brand'   | Fill color. No automatic thresholds — set it explicitly.                  |
| `showScale` | boolean                                          | false     | Shows the `0 … max` scale line under the track.                           |
| `class`     | string                                           | undefined | Custom CSS class name for additional styling.                             |

## Accessibility

Renders with `role="meter"`, `aria-valuemin` / `aria-valuemax` / `aria-valuenow` and an `aria-valuetext` matching the visible value.
