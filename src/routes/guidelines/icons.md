---
title: Icons
dir: guidelines
description:
slug: icons
url: /guidelines/icons
index: 3
---

<script>
  import IconPicker from "$lib/components/IconPicker.svelte";
  import Fig from "$lib/components/Fig.svelte";
  import Info from "$lib/components/Info.svelte";
</script>

# Icons

An icon is a small graphical symbol used to represent an idea, action, or object, often providing a visual shorthand in user interfaces.

---

<Fig lightSrc="/assets/banner/icon_light.png" darkSrc="/assets/banner/icon_dark.png" dynamic />

## Proprietary icon

Proprietary icons are designed to represent specific Zoho Desk features or entities, ensuring users can easily recognize them throughout the Zoho Desk interface. Modifying or misusing these icons may cause confusion or disrupt the consistency of the user experience.

## General icon

General icons represent common actions or concepts within the Zoho Desk interface and offer flexibility for various design contexts. These icons can be modified to meet different needs, maintaining adaptability while preserving the overall user experience.

<Info maxWidth="47rem">
  Icons are sourced from <a href="https://www.npmjs.com/package/@zohodesk/icons">@zohodesk/icons</a>
</Info>

## Theming and sizing

Icons are exported from `deskblocks/icons` as raw SVG strings. Every glyph uses `fill="currentColor"` and a `1em` intrinsic size, so an icon dropped directly into markup inherits the surrounding text color and font size. The [Icon component](/components/icon) additionally exposes explicit `size` and `color` props.

## Icon gallery

Clicking any icon copies its name to the clipboard. Custom icons can also be used. Refer to the [Icon component](/components/icon) to learn how to use the included icons and add [custom icons](/components/icon#custom-icon).

<IconPicker />
