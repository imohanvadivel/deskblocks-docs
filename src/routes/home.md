---
title: Home
dir: primary
description:
slug: home
url: /
index: 1
---

<script>
  import Info from "$lib/components/Info.svelte";
  import Fig from "$lib/components/Fig.svelte";
  import Video from "$lib/components/Video.svelte";
  import 'deskblocks/globalStyles';
</script>

# Deskblocks

Deskblocks is an open-source UI component library designed to help you build Zoho Desk extensions with Svelte.

<Fig src="/assets/banner/deskblocks.png" noBorder height="450" />

## Features

### Smart Type Definitions

Deskblocks offers full TypeScript support, including auto-completion and static type checking for all components. The starter template also includes type definitions for the Desk SDK from my [other project](https://github.com/imohanvadivel/desk-ext-types). This offers detailed descriptions, examples, and code completion for the SDK directly within your IDE.

<Video src="/assets/clips/auto-completion.mp4" autoplay controls loop />

### Auto-Theming

Deskblocks automates color management for you. When a user switches between themes or appearances, Deskblocks automatically updates the colors in your extension. There's no need to design or develop separately for each theme or appearance—Deskblocks handles it all. Check out the [color section](/guidelines/color) to learn how to leverage the color tokens.

<Video src="/assets/clips/auto-theming.mp4" autoplay controls loop />

### Seamless Font Management

Deskblocks takes care of font management for you. When a user changes their typeface preference, Deskblocks will automatically updates the extension to match. Explore the [typography section](/guidelines/typography) for more details.

<Video src="/assets/clips/auto-type.mp4" autoplay controls loop />

### Built-in Accessibility

Deskblocks is built on Svelte, which incorporates accessibility (a11y) best practices and performs [a11y checks at compile time](https://svelte.dev/docs/kit/accessibility). Additionally, the color system is based on the [HCT color space](https://mohanvadivel.com/thoughts/building-accessible-color-system), ensuring perceptual uniformity and using perceived lightness. The colors are further evaluated using the [APAC algorithm](https://mohanvadivel.com/thoughts/color-contrast) to ensure optimal contrast and accessibility.

### Figma UI Kit

Deskblocks includes a companion [Figma UI Kit](https://www.figma.com/community/file/1429784656177593269/deskblocks) with all the essential components, tokens, and templates for promotional assets. It leverages Figma’s variables, allowing you to instantly preview your designs in various themes and appearances, without any external plugins.

<Video src="/assets/clips/figma-kit.mp4" autoplay controls loop />

### Design to Code Generation

Deskblocks includes a [Figma plugin](https://www.figma.com/community/plugin/1429884529544766993/figma-to-svelte) that generates production-ready code directly from your designs, powered by [Claude 3.5 Haiku](https://www.anthropic.com/claude/haiku). What sets it apart is that it doesn’t just generate any code—it uses Deskblocks components to build the UI. This ensures all the above features like auto-theming, accessibility, and font management work seamlessly out of the box.

<Video src="/assets/clips/ai-gen.mp4" autoplay controls loop />

### Vite-Powered Development

Deskblocks is powered by [Vite](https://vitejs.dev/), bringing all the advantages of a modern build tool to your development workflow. With Vite, you get **hot module replacement**, ultra-fast compilation, lazy loading, optimized builds, and more—ensuring a smooth and efficient development experience from start to finish.


## Installation

To get started, clone the starter template and install the dependencies:

```bash
git clone https://github.com/imohanvadivel/desk-ext-template.git
cd desk-ext-template
npm i
```

Use these commands to streamline the build process:

```bash
# Runs the server on port 5000
npm run dev

# Bundles the files and creates a zip in the dist folder
npm run build
```

For more detailed setup instructions, check out the [Getting Started](/getting-started) page.

## Installing in an Existing Project

If you already have a svelte development setup for building extensions, then you can directly install the Deskblocks in your project.

```bash
npm i deskblocks
```

Then, import global styles in your `main.ts` file to start using Deskblocks components:

```bash
import "deskblocks/globalStyles";
```

<Info type="warning" header="Note:">

The official [Zoho Extension Toolkit](https://www.npmjs.com/package/zoho-extension-toolkit) CLI does not support Deskblocks. To use Deskblocks, you’ll need to either use the provided starter template or set up your own custom build tool.

</Info>

## Usage

Import the required components from `deskblocks` and start crafting your desk extension.

```svelte example
<script>
	import { Button } from 'deskblocks';
</script>

<Button>Label</Button>
```

## Additional Resources

- [Extension Guide](https://www.zoho.com/desk/extensions/guide/introduction.html)
- [Developer Forum](https://help.zoho.com/portal/en/community/zoho-desk/zoho-desk-extension-developers)
- [Figma library](https://www.figma.com/community/file/1429784656177593269/deskblocks)
