---
title: Other Tokens
dir: guidelines
description:
slug: other-tokens
url: /guidelines/other-tokens
index: 5
---

<script>
  import 'deskblocks/globalStyles';
  import Info from "$lib/components/Info.svelte";
</script>

# Other Tokens

These tokens are CSS custom properties set by importing `deskblocks/globalStyles`. Copy
their names exactly, as they are case-sensitive.

---

## Size

Size is resolved in rem units against a 16px root.

The named steps used to jump 8px → 16px → 20px, which left the two most useful
small-spacing values with no token. The `-plus` half-steps close that gap.

| Token                     | rem      | px   |
| ------------------------- | -------- | ---- |
| `--db-size-xxxxsmall`     | 0.125rem | 2px  |
| `--db-size-xxxsmall`      | 0.25rem  | 4px  |
| `--db-size-xxxsmall-plus` | 0.375rem | 6px  |
| `--db-size-xxsmall`       | 0.5rem   | 8px  |
| `--db-size-xxsmall-plus`  | 0.75rem  | 12px |
| `--db-size-xsmall`        | 1rem     | 16px |
| `--db-size-xsmall-plus`   | 1.125rem | 18px |
| `--db-size-small`         | 1.25rem  | 20px |
| `--db-size-medium`        | 1.5rem   | 24px |
| `--db-size-large`         | 2rem     | 32px |
| `--db-size-xlarge`        | 2.5rem   | 40px |
| `--db-size-xxlarge`       | 3rem     | 48px |
| `--db-size-xxxlarge`      | 4rem     | 64px |
| `--db-size-huge`          | 5rem     | 80px |

<Info header="Note:" type="info">

Every size, radius and font-size token is authored in rem against a 16px root, so
the library pins `html { font-size: 100% }` on purpose. Setting the root to a rem
value would rescale the whole system. A 14px root turns `--db-fontsize-medium` into
12.25px and shrinks every size token by 12.5%.

</Info>

## Border width

A 1px hairline is the library's most repeated value, used by every card, row divider,
table rule and input underline.

| Token                        | rem       | px  |
| ---------------------------- | --------- | --- |
| `--db-border-width-hairline` | 0.0625rem | 1px |
| `--db-border-width-strong`   | 0.125rem  | 2px |

`--focus-ring-width` remains as an alias of the hairline token for backward
compatibility; prefer the `--db-` name in new code.

## Border radius

Border radius is resolved in rem units.

| Token                       | Value    | px            |
| --------------------------- | -------- | ------------- |
| `--db-border-radius-small`  | 0.125rem | 2px           |
| `--db-border-radius-medium` | 0.25rem  | 4px           |
| `--db-border-radius-large`  | 0.375rem | 6px           |
| `--db-border-radius-pill`   | 9999px   | fully rounded |

Use `--db-border-radius-pill` rather than a large rem for a fully rounded shape: a
fixed rem only reads as a pill while the element stays short, and `50%` on a
non-square box produces an ellipse.

## Shadows

| Token                 | Light                                   | Dark                                   |
| --------------------- | --------------------------------------- | -------------------------------------- |
| `--db-shadow-overlay` | `0 0.1875rem 1.875rem rgba(0,0,0,0.13)` | `0 0.1875rem 1.875rem rgba(0,0,0,0.5)` |

Elevation for content floating above the page, such as a dropdown or a popover. The
dark value is a separate step rather than the light one reused, and it applies to both
`appearance-dark` and `pure-dark`.

## Motion

| Token                  | Value                          |
| ---------------------- | ------------------------------ |
| `--db-duration-fast`   | 100ms                          |
| `--db-duration-medium` | 200ms                          |
| `--db-duration-slow`   | 300ms                          |
| `--db-easing-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |

Use `--db-duration-fast` for small state flips (a switch knob, a checkbox tick),
`-medium` as the default beat, and `-slow` for larger surfaces such as a dropdown.

Svelte's JS-driven transitions (`transition:draw`, `transition:fade`, `spring`) take
plain numbers and cannot read a custom property, so the same values ship as
constants:

```svelte
<script>
	import { DURATION_MEDIUM, EASING_STANDARD } from 'deskblocks';
</script>
```

| Constant          | Value                            |
| ----------------- | -------------------------------- |
| `DURATION_FAST`   | `100`                            |
| `DURATION_MEDIUM` | `200`                            |
| `DURATION_SLOW`   | `300`                            |
| `EASING_STANDARD` | `'cubic-bezier(0.4, 0, 0.2, 1)'` |

<Info header="Note:" type="info">

Keep the CSS token and the JS constant in step. A duration that differs between the
two paths makes paired controls animate at visibly different speeds.

</Info>

## Layout

| Token                          | rem      | px    |
| ------------------------------ | -------- | ----- |
| `--db-layout-width-column-min` | 13.75rem | 220px |

Minimum width of a responsive grid column, used by `PropertyGrid` and by
`Chart`'s sparkline cap.

## Chart series

`Chart` colors its categories from a dedicated palette, kept separate from the
semantic tone tokens. That separation matters because a category painted in
`--db-color-bg-danger` would read as "danger" when it only means "the fourth series",
so the status colors stay free to mean status.

| Token                        | Light     | Dark      | Hue     |
| ---------------------------- | --------- | --------- | ------- |
| `--db-chart-series-1`        | `#2a78d6` | `#3987e5` | blue    |
| `--db-chart-series-2`        | `#eb6834` | `#d95926` | orange  |
| `--db-chart-series-3`        | `#1baf7a` | `#199e70` | aqua    |
| `--db-chart-series-4`        | `#eda100` | `#c98500` | yellow  |
| `--db-chart-series-5`        | `#e87ba4` | `#d55181` | magenta |
| `--db-chart-series-6`        | `#008300` | `#008300` | green   |
| `--db-chart-series-7`        | `#4a3aa7` | `#9085e9` | violet  |
| `--db-chart-series-8`        | `#e34948` | `#e66767` | red     |
| `--db-chart-series-overflow` | `#8b93a1` | `#6d7787` | neutral |

Chart works through the slots in order, so the first series takes slot 1, the second
takes slot 2, and so on. A given slot always means the same color, which keeps a chart
stable when the number of series changes: filtering a five-series chart down to three
leaves the surviving three looking exactly as they did.

Light and dark hold their own values rather than one being derived from the other. The
dark column is the same eight hues re-stepped for a dark surface, so both appearances
stay legible without either looking washed out.

`--db-chart-series-overflow` is the gray used for any category past the eighth. Eight
colors is already a lot to tell apart, so if you have more categories than that, add up
the smallest ones and pass them in as a single "Other" entry.
