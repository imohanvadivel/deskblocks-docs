---
title: Meter
dir: components
description: Meter shows how much of a known range has been used.
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

The displayed value is rounded to two decimal places and includes the optional `unit`. Values below zero or above `max` keep their original text, while the fill stays within the track. A value that cannot be measured displays a dash placeholder and leaves the track empty.

## Tones

The fill defaults to the brand color. Set `tone` to reflect state, such as warning as an SLA nears breach.

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

Coloring is explicit. The component applies no automatic percentage thresholds, so the caller decides when a meter turns warning or danger.

## Custom scale

`max` defines the end of the scale and defaults to 100. Pass `showScale` to display the minimum, unit and maximum below the track.

```svelte example hideScript
<script>
	import { Meter } from 'deskblocks';
</script>

<Meter label="Tickets handled today" value={34} max={50} unit=" tickets" showScale />
```

## Props

| Prop        | Type                                                                   | Default   | Description                                                        |
| ----------- | ---------------------------------------------------------------------- | --------- | ------------------------------------------------------------------ |
| `value`     | number                                                                 | Required  | Current value. The fill is clamped between 0 and `max`.            |
| `max`       | number                                                                 | 100       | Scale maximum. Values less than or equal to 0 fall back to 100.    |
| `label`     | string                                                                 | undefined | Label shown left of the value line; also used as the `aria-label`. |
| `unit`      | string                                                                 | undefined | Suffix appended to the value text and echoed mid-scale.            |
| `tone`      | <code>'brand' &#124; 'success' &#124; 'warning' &#124; 'danger'</code> | 'brand'   | Fill color. No automatic thresholds, so set it explicitly.         |
| `showScale` | boolean                                                                | false     | Shows the minimum, unit and maximum below the track.               |
| `class`     | string                                                                 | undefined | Custom CSS class name for additional styling.                      |

## Accessibility

The component uses the meter role and exposes its minimum, maximum, current value and visible value text to assistive technology. Pass a clear `label` so the meter has an accessible name.
