---
title: Color
dir: guidelines
description: Deskblocks uses a color system to simplify color management and application, allowing designers and developers to focus on features rather than the complexities of color.
slug: color
url: /guidelines/color
index: 2
---

<script>
  import ColorList from "$lib/components/ColorList.svelte";
  import Info from "$lib/components/Info.svelte";
  import Code from "$lib/customComponent/code.svelte";
  import Pre from "$lib/components/Pre.svelte";
  import ColorSwatch from "$lib/components/ColorSwatch.svelte";
  import Fig from "$lib/components/Fig.svelte";
</script>

# Color

Deskblocks uses a color system to simplify color management and application, allowing designers and developers to focus on features rather than the complexities of color.

---

<Fig lightSrc="/assets/banner/color_light.png" darkSrc="/assets/banner/color_dark.png" height="720" dynamic />

## Color System

Managing colors for an app that supports multiple themes (blue, red, green, orange, yellow), along with light & dark modes, and various contrast levels can be complex. Deskblocks addresses this with a semantic color system, which automates color management, enabling developers to focus on building features.

<Info type="success" header="Note:" maxWidth="40rem">

Curious about the inner workings of the color system? Check out the article [Building an accessible color system](https://mohanvadivel.com/thoughts/building-accessible-color-system) to learn more.

</Info>

## Semantic Color Token

The semantic token system organizes colors logically for easy application. While it might seem extensive at first, its consistent structure simplifies use. All tokens follow the same semantic structure.

<Pre>
  --db-color-<b>&#123;type&#125;</b>-<b>&#123;role&#125;</b>-<b>&#123;prominence&#125;</b>-<b>&#123;interaction&#125;</b>
</Pre>

In this structure, db acts as the namespace, representing ‘deskblocks,’ followed by the keyword ‘color’ and additional parameters specifies the type, role, prominence, and interaction. Among these, only 'type' is mandatory, while the others are optional.

### Type (required)

The type parameter specifies the type of element that is being colored. There are four possible values for type:

- **bg**: Background color
- **text**: Text color
- **icon**: Icon color
- **border**: Border color

<Pre>
<ColorSwatch color="var(--db-color-bg)" /> --db-color-<b>bg</b>​
<ColorSwatch color="var(--db-color-text)" /> --db-color-<b>text</b>​
<ColorSwatch color="var(--db-color-icon)" /> --db-color-<b>icon</b>​ 
<ColorSwatch color="var(--db-color-border)" /> --db-color-<b>border</b>​
</Pre>

### Role (optional)

Roles are a way to define the underlying hue based on its intended use rather than the specific color. For example, a success message uses a green background, so instead of labeling it as `--db-color-bg-green`, it’s called `--db-color-bg-success`. Here are a few examples.

<Pre>
<ColorSwatch color="var(--db-color-bg-brand)" /> --db-color-bg-<b>brand</b>​       
<ColorSwatch color="var(--db-color-text-info)" /> --db-color-text-<b>info</b>​      
<ColorSwatch color="var(--db-color-border-warning)" /> --db-color-border-<b>warning</b>​ 
<ColorSwatch color="var(--db-color-icon-danger)" /> --db-color-icon-<b>danger</b>​    
</Pre>

The possible values for the role parameter are:

- <ColorSwatch color="var(--db-color-bg-brand)" /> <b>Brand</b>: A dynamic hue that adapts to the current theme color. For eg, "--db-color-bg-brand" may start as primary blue, but if the user switches to a green theme, it will change to green.

- <ColorSwatch color="var(--db-color-bg-info)" /> <b>Info</b> : A blue hue used to convey information.
- <ColorSwatch color="var(--db-color-bg-success)" /> <b>Success</b>: A green hue used to indicate confirmation or approval.
- <ColorSwatch color="var(--db-color-bg-danger)" /> <b>Danger</b>: A red hue used to signal errors or destructive actions.
- <ColorSwatch color="var(--db-color-bg-warning)" /> <b>Warning</b>: An orange hue used to alert users to potential problems.
- <ColorSwatch color="var(--db-color-bg-disabled)" /> <b>Disabled</b>: A light grey hue used for inactive buttons, text, borders, and icons.
- <ColorSwatch color="var(--db-color-bg-selected)" /> <b>Selected</b>: A dynamic hue, similar to the brand color, used for backgrounds and borders of selected elements, adjusting based on the current theme.

### Prominence (optional)

To establish hierarchy and adjust visual emphasis, bg, text, and icon elements can be modified with **secondary** and **tertiary** variations. Similarly, for borders, there are three options: the default option, which doesn’t require a modifier `--db-color-border` can be used as for standard divider, **strong** for a darker border, and **light** for a lighter border.

<Pre>
<ColorSwatch color="var(--db-color-text-secondary)" /> --db-color-text-<b>secondary</b>​  
<ColorSwatch color="var(--db-color-bg-brand-secondary)" /> --db-color-bg-brand-<b>secondary</b>​ 
<ColorSwatch color="var(--db-color-icon-tertiary)" /> --db-color-icon-<b>tertiary</b>​  

<ColorSwatch color="var(--db-color-border-light)" /> --db-color-border-<b>light</b>​   
<ColorSwatch color="var(--db-color-border)" /> --db-color-<b>border</b>​ 
<ColorSwatch color="var(--db-color-border-strong)" /> --db-color-border-<b>strong</b>​   
</Pre>

### Interaction (optional)

The interaction state of an element can be modified using the **hover** and **pressed** modifiers.

<Pre>
<ColorSwatch color="var(--db-color-bg-brand-pressed)" /> --db-color-bg-brand-<b>pressed</b>​ 
<ColorSwatch color="var(--db-color-border-strong)" /> --db-color-text-danger-<b>hover</b>​  
</Pre>

## Selective Theming

To apply custom styles for specific themes or appearances, use CSS classes to target them. The root element dynamically adds classes like `theme-blue` and `appearance-light` based on the current theme and appearance.

For example, to style a node specifically for **dark mode** and **red theme**, use the following CSS:

```css
:global(.theme-red.appearance-dark div) {
  /* Your styles here */
}
``` 


## Color Token Usage Examples

<Fig lightSrc="/assets/banner/sample1_light.png" darkSrc="/assets/banner/sample1_dark.png" height="720" dynamic maxWidth="40rem" />
<Fig lightSrc="/assets/banner/sample2_light.png" darkSrc="/assets/banner/sample2_dark.png" height="720" dynamic maxWidth="40rem" />

## Color Tokens

<ColorList />
