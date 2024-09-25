---
title: Typography
dir: guidelines
description: Deskblocks offers a typography system that simplifies font management, allowing developers to focus on features rather than font specifics.
slug: typography
url: /guidelines/typography
index: 3
---

<script>
  import Fig from "$lib/components/Fig.svelte";
  import Info from "$lib/components/Info.svelte";
</script>

# Typography

{description}

---

<Fig lightSrc="/assets/banner/type_light.png" darkSrc="/assets/banner/type_dark.png" height="420" dynamic />

## Type system

Zoho Desk supports three typefaces: Zoho Puvi, Roboto, and Lato. Zoho Puvi is selected by default, but users can choose their preferred option.

As a developer, you don’t need to manually manage fonts because Deskblocks handles all the complex processes. Simply use the tokens below to modify any typography-specific parameters, and the system will automatically adjust everything. When users switch to a different font in their interface, your extension will seamlessly update the typography settings.

<Info type="success">

If you're interested in the inner workings, particularly around typography, you can explore more in the article [Supporting multiple fonts in a design system.](https://mohanvadivel.com/thoughts/working-with-multiple-fonts)

- [Line height](/type-test/line-height.html)
- [font-weight](/type-test/font-weight.html)
- [font-weight-size](/type-test/font-weight-size.html)

</Info>

## Font Stack

The primary font in the font stack changes based on the user's preference.

|                       |                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------- |
| `--db-fontstack`      | puvi, roboto flex, roboto, lato, inter, system-ui, -apple-system, sans-serif |
| `--db-fontstack-mono` | sf mono, jetbrains mono, zoho puvi mono, monospace                               |

## Font Size

Font size is resolved in rem units.

| Token                  | rem      | px   |
| ---------------------- | -------- | ---- |
| `--db-fontsize-small`  | 0.75rem  | 12px |
| `--db-fontsize-medium` | 0.875rem | 14px |
| `--db-fontsize-large`  | 1rem     | 16px |
| `--db-fontsize-xlarge` | 1.5rem   | 24px |

## Font Weight

Based on the user's font preference, the following font weights will be automatically applied.

| Token                     | puvi | roboto | lato |
| ------------------------- | ---- | ------ | ---- |
| `--db-fontweight-regular` | 400  | 370    | 400  |
| `--db-fontweight-medium`  | 500  | 470    | 600  |
| `--db-fontweight-bold`    | 600  | 570    | 700  |

## Line Height

Line height is resolved as unitless values.

|                         |     |      |
| ----------------------- | --- | ---- |
| `--db-lineHeight`       | 1   | 16px |
| `--db-lineHeight-large` | 1.5 | 24px |

## Letterspacing

Letter spacing is resolved in em units.

|                             |         |
| --------------------------- | ------- |
| `--db-letterspacing-small`  | 0       |
| `--db-letterspacing-medium` | -0.01em |
