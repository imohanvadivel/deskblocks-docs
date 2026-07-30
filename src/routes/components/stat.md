---
title: Stat
dir: components
category: Data Display
description: Stat presents a key metric in a compact card with an optional trend and supporting caption.
slug: stat
url: /components/stat
index: 3
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Stat

{description}

---

## Usage

```svelte example
<script>
	import { Stat } from 'deskblocks';
</script>

<Stat label="Open tickets" value="24" />
```

## With a caption

The `sub` prop adds a muted helper line under the value.

```svelte example hideScript
<script>
	import { Stat } from 'deskblocks';
</script>

<Stat label="Avg. first response" value="1h 12m" sub="last 7 days" />
```

## Trend

Pass `trend` to display a delta pill. The `direction` sets its arrow and color: `up` uses success, `down` uses danger and `flat` uses neutral. Pass the already formatted change as `value`.

```svelte example hideScript
<script>
	import { Stat } from 'deskblocks';
</script>

<div
	style="display: grid; grid-template-columns: repeat(3, minmax(160px, 1fr)); gap: 12px; align-items: start;"
>
	<Stat
		label="Resolved today"
		value="38"
		trend={{ direction: 'up', value: '+12%' }}
		sub="vs yesterday"
	/>
	<Stat
		label="SLA compliance"
		value="86%"
		trend={{ direction: 'down', value: '-8%' }}
		sub="vs last week"
	/>
	<Stat label="Happiness" value="94%" trend={{ direction: 'flat', value: '±0%' }} />
</div>
```

Cards stretch to the row height (`align-self: stretch`), so stats placed side by side in a grid stay equal-height even when some have no caption.

## Custom value slot

Use the `value` slot instead of the `value` prop when the metric area needs markup, such as a spinner while the figure loads.

```svelte example
<script>
	import { Stat, Spinner } from 'deskblocks';
</script>

<Stat label="Open tickets">
	<Spinner slot="value" size="small" />
</Stat>
```

## Slots

- `value`: replaces the value text, for example a `Spinner` while the figure loads.

## Props

| Prop    | Type                              | Default   | Description                                                     |
| ------- | --------------------------------- | --------- | --------------------------------------------------------------- |
| `label` | string                            | Required  | Small caption shown above the value.                            |
| `value` | <code>string &#124; number</code> | undefined | Pre-formatted KPI value. Ignored when the `value` slot is used. |
| `sub`   | string                            | undefined | Muted helper line shown after the trend pill.                   |
| `trend` | `StatTrend`                       | undefined | Optional delta pill with a direction and display-ready value.   |
| `class` | string                            | undefined | Custom CSS class name for additional styling.                   |

```ts
type StatTrend = {
	direction: 'up' | 'down' | 'flat';
	value: string;
};
```
