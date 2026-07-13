---
title: Stat
dir: components
description: A stat is a compact KPI card showing a labelled metric with an optional trend pill and caption.
slug: stat
url: /components/stat
index: 23
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

Pass `trend` to show a tinted delta pill: `direction` picks the arrow and tint (`up` success, `down` danger, `flat` neutral), `value` is the pre-formatted delta text.

```svelte example hideScript
<script>
	import { Stat } from 'deskblocks';
</script>

<div style="display: grid; grid-template-columns: repeat(3, minmax(160px, 1fr)); gap: 12px; align-items: start;">
	<Stat label="Resolved today" value="38" trend={{ direction: 'up', value: '+12%' }} sub="vs yesterday" />
	<Stat label="Backlog" value="112" trend={{ direction: 'down', value: '-8%' }} sub="vs last week" />
	<Stat label="Happiness" value="94%" trend={{ direction: 'flat', value: '±0%' }} />
</div>
```

Cards stretch to the row height (`align-self: stretch`), so stats placed side by side in a grid stay equal-height even when some have no caption.

## Custom value slot

Use the `value` slot instead of the `value` prop when the metric area needs markup — for example a spinner while the figure loads.

```svelte example
<script>
	import { Stat, Spinner } from 'deskblocks';
</script>

<Stat label="Open tickets">
	<Spinner slot="value" size="small" />
</Stat>
```

## Slots

- `value` — replaces the value text (e.g. a `Spinner` while loading).

## Props

| Prop    | Type                                                            | Default   | Description                                                             |
| ------- | --------------------------------------------------------------- | --------- | ----------------------------------------------------------------------- |
| `label` | string                                                           | —         | Small caption shown above the value.                                     |
| `value` | string \| number                                                 | undefined | Pre-formatted KPI value. Ignored when the `value` slot is used.          |
| `sub`   | string                                                           | undefined | Muted helper line shown after the trend pill.                            |
| `trend` | `{ direction: 'up' \| 'down' \| 'flat', value: string }`           | undefined | Optional delta pill; `value` is pre-formatted text such as `"+12%"`.     |
| `class` | string                                                           | undefined | Custom CSS class name for additional styling.                            |
