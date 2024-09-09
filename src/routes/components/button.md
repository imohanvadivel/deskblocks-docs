---
title: Button
dir: components
description: A button allows users to trigger an action or event, such as submitting a form, triggering a process or navigate users within an application.
slug: button
url: /components/button
index: 1
---

<script>
  import 'deskblocks/globalStyles';
	import Info from '$lib/components/Info.svelte';
</script>

# Button

{description}

---

## Usage

<!-- Import the `Button` component from 'deskblocks'. -->

```svelte example
<script>
	import { Button } from 'deskblocks';
</script>

<Button>Label</Button>
```

## Variants

<!-- The visual style of the button can be changed using the `variant` prop. -->

```svelte example hideScript
<script>
	import { Button } from 'deskblocks';
</script>

<Button variant="primary">Label</Button>
<Button variant="secondary">Label</Button>
<Button variant="tertiary">Label</Button>

<!-- Destructive -->
<Button variant="danger">Label</Button>
<Button variant="danger-secondary">Label</Button>

<!-- Ghost -->
<Button variant="ghost">Label</Button>
```

## Link button

A button can be turned into a link by using the `href` property, making it function like an anchor tag.

<Info header="Security Considerations:" type="warning">

    - When the `href` property is used, it is important to ensure that the link is secure, especially if it leads to an external website. Therefore, the `rel` attribute is set to `noopener` and `noreferrer` by default when the `href` attribute is used.

    - Read more on this: https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/

</Info>

```svelte example hideScript
<script>
	import { Button } from 'deskblocks';
</script>

<Button href="https://zoho.com/desk">Open Link</Button>
```

## Disabled state

<!-- Use the `disabled` prop to render a non-interactive button. -->

```svelte example hideScript
<script>
	import { Button } from 'deskblocks';
</script>

<Button disabled variant="primary">Label</Button>
<Button disabled variant="secondary">Label</Button>
<Button disabled variant="tertiary">Label</Button>
<Button disabled variant="danger">Label</Button>
<Button disabled variant="danger-secondary">Label</Button>
<Button disabled variant="ghost">Label</Button>
```

## Buton with icon

<!-- - Icons can be placed on both the left and right sides of the button. -->
<!-- - The [Icon component](/components/icon) is used to render the icons. -->

The slots labeled "left-icon" and "right-icon" should be used for placing icons on the left and right sides, respectively. The icon's color is automatically selected by the component based on the context.

<Info header="Note:" type="info">
	When an Icon component is passed to the designated slots (either "left-icon" or "right-icon"), the component automatically adjust its padding optically. However, if the Icon is placed in the default slot alongside the label, these padding adjustments won't be applied.
</Info>

```svelte example
<script>
	import { Button, Icon } from 'deskblocks';
	import { IconIdea } from 'deskblocks/icons';
</script>

<Button>
	<Icon slot="left-icon" icon={IconIdea} /> Get Started
</Button>

<Button>
	<Icon slot="right-icon" icon="→" /> Get Started
</Button>
```

## Icon button

<!-- - The Icon Button component can be used to render only an icon. -->
<!-- - The [Icon component](/components/icon) can be passed into the default slot. -->
<!-- - The icon's color is automatically selected by the component based on the context. -->

To render an icon on its own, the `IconButton` component can be used. The icon's color is automatically determined by the component based on the context.

```svelte example
<script>
	import { IconButton, Icon } from 'deskblocks';
	import { IconUndo } from 'deskblocks/icons';
</script>

<IconButton><Icon icon={IconUndo} /></IconButton>
<IconButton variant="secondary"><Icon icon={IconUndo} /></IconButton>
<IconButton variant="tertiary"><Icon icon={IconUndo} /></IconButton>
<IconButton variant="danger"><Icon icon={IconUndo} /></IconButton>
<IconButton variant="danger-secondary"><Icon icon={IconUndo} /></IconButton>
<IconButton variant="ghost"><Icon icon={IconUndo} /></IconButton>
```

## Loading state

<!-- The loading state for the button can be achieved by passing the [Spinner component](/components/spinner) into the `left-icon` slot. -->

The loading state for the button can be displayed by placing the [Spinner component](/components/spinner) in the `left-icon` slot.

```svelte example
<script>
	import { Button, Spinner } from 'deskblocks';
</script>

<Button>
	<Spinner slot="left-icon" onbrand /> Loading
</Button>
```

## Props

| Prop            | Type                                                                                | Default   | Description                                                                                        |
| --------------- | ----------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------- |
| `variant`       | 'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'danger' \| 'danger-secondary' | 'primary' | Determines the visual style of the button.                                                         |
| `disabled`      | boolean                                                                             | false     | Disables the button, preventing user interaction.                                                  |
| `href`          | string                                                                              | undefined | Specifies the URL to navigate to when the button is clicked, making the button function as a link. |
| `popovertarget` | string                                                                              | undefined | Specifies the ID of an associated popover element that will be triggered by the button.            |
| `tabindex`      | number                                                                              | 0         | Sets the order in which the button is focused during keyboard navigation.                          |
| `class`         | string                                                                              | undefined | Custom CSS class name for additional styling.                                                      |

## Slots

- `default`
- `left-icon`
- `right-icon`

## Events

- `on:click`
- `on:focus`
- `on:blur`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
