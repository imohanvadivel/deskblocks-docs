---
title: Link
dir: components
description: A link navigates users to another page or resource.
slug: link
url: /components/link
index: 13
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Links

{description}

---

## Usage

<!-- Import `Link` component form 'deskblocks'. -->

```svelte example hideToolbar
<script>
	import { Link } from 'deskblocks';
</script>

<Link href="https://www.spacex.com/vehicles/starship/">Starship</Link>
```

## Inline link

```svelte example hideScript
<script>
	import { Link, Text } from 'deskblocks';
</script>

<Text>
	For more information about starship,
	<Link href="https://www.spacex.com/vehicles/starship/">click here.</Link>
</Text>
```

## Link with icon

<!-- - To include an icon in the link, pass the [Icon component](/components/icon) along with the text in the default slot. -->
<!-- - Ensure the icon is appropriately sized using the `size` attribute in the [Icon component](/components/icon). -->
<!-- - By default, the icon adopts the brand color; for additional customization, refer to the [Icon component](/components/icon). -->

Include the [Icon component](/components/icon) alongside the text, and ensure the icon is properly sized in proportion to the text.

```svelte example
<script>
	import { Link, Icon } from 'deskblocks';
	import { IconOutLink } from 'deskblocks/icons';
</script>

<Link href="https://www.spacex.com/vehicles/starship/">
	Starship
	<Icon icon={IconOutLink} size={20} />
</Link>
```

## Icon link

<!-- To render an icon as a link, pass the Icon component directly in the default slot. For further customization of the icon, refer to the [Icon component](/components/icon). -->

```svelte example hideScript
<script>
	import { Link, Icon } from 'deskblocks';
	import { IconOutLink } from 'deskblocks/icons';
</script>

<Link href="https://www.spacex.com/vehicles/starship/">
	<Icon icon={IconOutLink} />
</Link>
```

## Disabled state

<!-- Use the `disabled` prop to disable the link, preventing any navigation when it is clicked. -->

```svelte example hideScript
<script>
	import { Link } from 'deskblocks';
</script>

<Link disabled href="https://www.spacex.com/vehicles/starship/">Starship</Link>
```

## Props

| Prop       | Type                  | Default   | Description                                                                    |
| ---------- | --------------------- | --------- | ------------------------------------------------------------------------------ |
| `target`   | '\_blank' \| '\_self' | '\_blank' | Specifies where to open the linked document.                                   |
| `href`     | string                | undefined | The URL or path to navigate to when the link is clicked.                       |
| `inline`   | boolean               | true      | Determines whether the link is displayed inline with surrounding content.      |
| `rel`      | string                | undefined | Defines the relationship between the current document and the linked resource. |
| `disabled` | boolean               | false     | Disables the link, preventing any navigation when clicked.                     |
| `tabindex` | number                | 0         | Sets the tab order of the link for keyboard navigation.                        |
| `class`    | string                | undefined | Custom CSS class name for additional styling.                                  |

## Slots

- `default`

## Events

- `on:click`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:focus`
