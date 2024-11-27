---
title: Typography
dir: guidelines
description: Deskblocks offers a typography system that simplifies font management, allowing designers and developers to focus on features rather than font specifics.
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

Zoho Desk supports three typefaces: Zoho Puvi, Roboto, and Lato. While Zoho Puvi is the default selection, users have the flexibility to choose their preferred font.

As a developer, you don't need to handle font management manually—Deskblocks takes care of the complexities for you. Simply use the provided tokens to adjust typography-related parameters, and the system will automatically adapt. If users switch fonts in their interface, your extension will seamlessly update its typography settings.

<Info type="success" header="Note:" maxWidth="47rem">

Curious about the inner workings of the typography system? Check out the article [Supporting Multiple Fonts in a Design System](https://mohanvadivel.com/thoughts/working-with-multiple-fonts).

For additional resources, explore the type test bench:

- [Line Height](https://imohanvadivel.github.io/nlato-test/line-height.html)
- [Font Weight](https://imohanvadivel.github.io/nlato-test/font-weight.html)
- [Font Weight and Size](https://imohanvadivel.github.io/nlato-test/font-weight-size.html)

</Info>

## Font Stack

The primary font in the font stack changes based on the user's preference.

|                       |                                                                              |
| --------------------- | ---------------------------------------------------------------------------- |
| `--db-fontstack`      | puvi, roboto flex, roboto, lato, inter, system-ui, -apple-system, sans-serif |
| `--db-fontstack-mono` | sf mono, jetbrains mono, zoho puvi mono, monospace                           |

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
