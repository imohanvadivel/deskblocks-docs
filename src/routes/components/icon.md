---
title: Icon
dir: components
description: An icon is a small graphical element that represents actions, objects, or concepts, adding visual clarity to interface.
slug: icon
url: /components/icon
index: 14
---

<script>
  import 'deskblocks/globalStyles';
	import Info from '$lib/components/Info.svelte';
</script>

# Icon

{description}

---

## Usage

The `Icon` component can be imported from 'deskblocks,' along with your preferred icons from 'deskblocks/icons.'

```svelte example hideFont hideTheme
<script>
	import { Icon } from 'deskblocks';
	import { IconSkills } from 'deskblocks/icons';
</script>

<Icon icon={IconSkills} />
```

<Info header="Tip:" type="success">

- Checkout the [icon gallery](/guidelines/icons#icon-gallery) for exploring all the icons.
- Click on any icon in the icon gallery to copy the icon name to your clipboard.

</Info>

## Size

<!-- The size of the icons can be customized using the `size` prop. In addition to standard values like "small" and "medium," a numeric value can be used for custom sizing. -->

```svelte example hideScript hideFont hideTheme
<script>
	import { Icon } from 'deskblocks';
	import { IconSkills } from 'deskblocks/icons';
</script>

<Icon icon={IconSkills} size="small" />
<Icon icon={IconSkills} size="medium" />

<!-- Custom Size -->
<Icon icon={IconSkills} size={40} />
```

## Color

By default, the icon's color automatically adjusts based on the theme. Additionally, the color can be customized by passing a CSS custom variable to the `color` prop.

<Info header="Tip:" type="success">
When dynamic color variables, such as `--db-color-icon-brand`, are used, the icon's color will automatically adjust based on both theme and appearance.
</Info>

```svelte example hideFont
<script>
	import { Icon } from 'deskblocks';
	import { IconSkills } from 'deskblocks/icons';
</script>

<Icon icon={IconSkills} color="--db-color-icon-brand" />
```

## Font icon

When working with fonts that include additional icon glyphs, or when text needs to be rendered as an icon, the text glyph can be directly passed to the `icon` prop.

```svelte example hideScript hideTheme
<script>
	import { Icon } from 'deskblocks';
</script>

<Icon icon="₹" />
<Icon icon="→" />
<Icon icon="$" />
```

## Custom icon

To render a custom icon, the SVG string can be directly passed to the `icon` prop.

```svelte example hideFont hideTheme
<script>
	import { Icon } from 'deskblocks';
	const star = `<svg width="24" height="22" viewBox="0 0 24 22"><path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"/></svg>`;
</script>

<Icon icon={star} size={40} color="--db-color-icon-danger" />
```

## Props

| Prop            | Type                | Default   | Description                                                                           |
| --------------- | ------------------- | --------- | ------------------------------------------------------------------------------------- |
| `icon`          | SVG string          | undefined | SVG string or text glyph to be rendered as the icon.                                  |
| `size`          | 'small' \| 'medium' | 'small'   | Specifies the size of the icon.                                                       |
| `color`         | CSS custom variable | undefined | Specifies the color of the icon using a CSS custom variable.                          |
| `class`         | string              | undefined | Custom CSS class name for additional styling.                                         |
