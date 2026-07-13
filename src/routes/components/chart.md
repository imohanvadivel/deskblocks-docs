---
title: Chart
dir: components
description: An inline-SVG chart that renders 13 shapes — from pies and columns to gauges, funnels and sparklines — using theme tokens so it adapts to light and dark automatically.
slug: chart
url: /components/chart
index: 30
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Chart

{description}

---

## Usage

Pass a `type` and prepared `data` — one `{ label, value }` entry per category. The chart takes already-aggregated numbers; grouping raw records ("tickets by status") and counting/summing happen in your app before the data reaches the component.

```svelte example
<script>
	import { Chart } from 'deskblocks';

	const byStatus = [
		{ label: 'Open', value: 34 },
		{ label: 'In Progress', value: 18 },
		{ label: 'On Hold', value: 7 },
		{ label: 'Closed', value: 96 }
	];
</script>

<Chart type="column" title="Tickets by status" data={byStatus} />
```

## Pie & donut

Slices are colored from the built-in categorical palette. The donut variant adds a centre total.

```svelte example
<script>
	import { Chart } from 'deskblocks';

	const byChannel = [
		{ label: 'Email', value: 52 },
		{ label: 'Web', value: 31 },
		{ label: 'Phone', value: 17 },
		{ label: 'Chat', value: 12 },
		{ label: 'Forums', value: 4 }
	];
</script>

<Chart type="pie" title="Tickets by channel" data={byChannel} />
<Chart type="donut" title="Tickets by channel" data={byChannel} />
```

## Bar

Horizontal bars with the value printed at the end of each bar — good for longer category names.

```svelte example hideScript
<script>
	import { Chart } from 'deskblocks';

	const byAgent = [
		{ label: 'Priya Nair', value: 42 },
		{ label: 'Marcus Cole', value: 37 },
		{ label: 'Ana Souza', value: 29 },
		{ label: 'Ken Watanabe', value: 21 }
	];
</script>

<Chart type="bar" title="Resolved this week" data={byAgent} />
```

## Line, area & spline

Point-per-entry trend charts. Date-like labels (ISO strings) are automatically compacted to "Jan '26" on the axis; crowded axes thin their tick labels. Charts with many points grow wider than the container and scroll horizontally.

```svelte example
<script>
	import { Chart } from 'deskblocks';

	const inflow = [
		{ label: '2026-01-01', value: 122 },
		{ label: '2026-02-01', value: 141 },
		{ label: '2026-03-01', value: 118 },
		{ label: '2026-04-01', value: 156 },
		{ label: '2026-05-01', value: 173 },
		{ label: '2026-06-01', value: 149 }
	];
</script>

<Chart type="line" title="Ticket inflow" data={inflow} />
<Chart type="area" title="Ticket inflow" data={inflow} />
<Chart type="spline" title="Ticket inflow" data={inflow} />
```

## Funnel

Stages shrink toward the bottom; each band shows its label and value.

```svelte example hideScript
<script>
	import { Chart } from 'deskblocks';

	const pipeline = [
		{ label: 'Created', value: 240 },
		{ label: 'Triaged', value: 198 },
		{ label: 'In Progress', value: 121 },
		{ label: 'Resolved', value: 96 },
		{ label: 'Closed', value: 88 }
	];
</script>

<Chart type="funnel" title="Ticket pipeline" data={pipeline} />
```

## Gauge

A single headline value on a 0-to-`max` dial. The first datum supplies the value, its label and (optionally) the arc color.

```svelte example hideScript
<script>
	import { Chart } from 'deskblocks';
</script>

<Chart
	type="gauge"
	title="Customer happiness"
	data={[{ label: 'CSAT', value: 87 }]}
	max={100}
	unit="%"
/>
```

## Scorecard & sparkline

Compact single-metric views over a value series. The scorecard shows the latest value, the trend versus the first value and a mini sparkline; the sparkline is just the trend line.

```svelte example hideScript
<script>
	import { Chart } from 'deskblocks';

	const weekly = [
		{ label: 'W1', value: 3.9 },
		{ label: 'W2', value: 4.1 },
		{ label: 'W3', value: 4.0 },
		{ label: 'W4', value: 4.6 }
	];
</script>

<Chart type="scorecard" title="Avg CSAT" data={weekly} />
<Chart type="sparkline" title="Avg CSAT trend" data={weekly} />
```

## Tone & custom colors

Each datum's `color` accepts a semantic tone name (`info`, `success`, `warning`, `danger`, `neutral`, `brand`) — the same vocabulary as [Chip](/components/chip) tones — or a `--db-*` token, hex, `rgb()`/`hsl()` or CSS named color. Unresolvable values fall back to the palette, never to black.

```svelte example hideScript
<script>
	import { Chart } from 'deskblocks';

	const byPriority = [
		{ label: 'Urgent', value: 6, color: 'danger' },
		{ label: 'High', value: 14, color: 'warning' },
		{ label: 'Medium', value: 41, color: 'info' },
		{ label: 'Low', value: 28, color: 'neutral' }
	];
</script>

<Chart type="donut" title="Open tickets by priority" data={byPriority} />
<Chart type="column" title="Open tickets by priority" data={byPriority} />
```

## Multi-series

For grouped/stacked columns, grouped bars, multi-line charts and heatmaps, pass `labels` (the categories) plus `series` (one `values` array per series, aligned by index). A legend renders beneath the chart when there are two or more named series; hide it with `showLegend={false}`. Heatmap rows come from `labels` and columns from `series`.

```svelte example
<script>
	import { Chart } from 'deskblocks';

	const months = ['2026-01-01', '2026-02-01', '2026-03-01', '2026-04-01'];
	const inOut = [
		{ name: 'Created', values: [122, 141, 118, 156] },
		{ name: 'Resolved', values: [98, 133, 125, 149] }
	];
</script>

<Chart type="column" title="Created vs resolved" labels={months} series={inOut} />
<Chart type="stackedColumn" title="Workload" labels={months} series={inOut} />
<Chart
	type="heatmap"
	title="Tickets per shift"
	labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
	series={[
		{ name: 'Morning', values: [12, 9, 14, 11, 7] },
		{ name: 'Evening', values: [6, 8, 5, 9, 4] },
		{ name: 'Night', values: [2, 1, 3, 2, 5] }
	]}
/>
```

## Empty state

With no data the chart renders a muted message instead of an empty drawing.

```svelte example hideScript
<script>
	import { Chart } from 'deskblocks';
</script>

<Chart type="column" title="Tickets by status" data={[]} emptyMessage="No tickets found." />
```

## Props

| Prop         | Type                                                                                                                                                              | Default             | Description                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| type         | `'bar' \| 'column' \| 'stackedColumn' \| 'line' \| 'area' \| 'spline' \| 'pie' \| 'donut' \| 'gauge' \| 'funnel' \| 'heatmap' \| 'scorecard' \| 'sparkline'` | `'column'`          | Chart shape to draw.                                                                                                            |
| data         | `{ label: string; value: number; color?: string }[]`                                                                                                              | `[]`                | Single-series data, one entry per category/point. Ignored when `series` is set.                                                 |
| labels       | `string[]`                                                                                                                                                        | `undefined`         | Category labels for multi-series charts, aligned with each series' `values`.                                                    |
| series       | `{ name?: string; color?: string; values: number[] }[]`                                                                                                           | `undefined`         | Multi-series data; when set, `labels` provides the categories and `data` is ignored.                                            |
| title        | `string`                                                                                                                                                          | `undefined`         | Optional heading rendered above the chart.                                                                                      |
| max          | `number`                                                                                                                                                          | `undefined`         | Scale ceiling — the value axis tops out at the larger of the data max and this. Gauges use it as the dial maximum.              |
| unit         | `string`                                                                                                                                                          | `undefined`         | Suffix appended to every rendered value (e.g. `"%"`, `"h"`).                                                                    |
| height       | `number`                                                                                                                                                          | `undefined`         | Drawing height in px for `column`/`stackedColumn`/`line`/`area`/`spline` (default 200). Other types size to their content.      |
| showLegend   | `boolean`                                                                                                                                                         | `true`              | Show the legend under multi-series charts (it auto-hides when there are fewer than 2 named series).                             |
| emptyMessage | `string`                                                                                                                                                          | `'No data to chart.'` | Muted text shown when there is no data.                                                                                       |
| class        | `string`                                                                                                                                                          | `''`                | Extra class on the root element.                                                                                                |

### Color values

A `color` (per datum or per series) may be a tone name (`'info'`, `'brand'`, `'success'`, `'warning'`, `'danger'`, `'neutral'`), a `--db-*` token name, a `var(--token)` expression, a hex color, an `rgb()`/`hsl()` value, or a CSS named color. Anything unresolvable falls back to the built-in categorical palette entry for that index — never to black or `currentColor`.
