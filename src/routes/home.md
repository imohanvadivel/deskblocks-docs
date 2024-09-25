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
  import 'deskblocks/globalStyles';
</script>

# Deskblocks

Deskblocks is an open-source UI component library designed to help you build Zoho Desk extensions with Svelte.

<Fig src="/assets/banner/deskblocks.png" noBorder />

## Features

### Smart Type Definitions

Deskblocks fully supports TypeScript, providing auto-completion and static type checking for all components. It also includes type definitions for the desk SDK through my other [project](https://github.com/imohanvadivel/desk-ext-types), offering detailed descriptions, examples, and code completion directly within your IDE.


### Automatic Theming

Deskblocks uses [HCT color space](https://github.com/material-foundation/material-color-utilities/tree/main) to manage colors, handling light and dark modes, as well as five predefined themes (blue, green, yellow, orange, red). This allows you to focus on building features while Deskblocks takes care of theming automatically. Checkout [color section](/guidelines/color)  to learn more.

### Automatic Font Management

Deskblocks manages fonts for you. When a user changes their font settings, it automatically updates within your extension. Checkout [typography section](/guidelines/typography) to learn more.

### Built-in Accessibility

Deskblocks includes accessible color tokens by default and uses the APAC algorithm to calculate contrast, offering better accessibility than standard WCAG2. Features like increased contrast works out of the box, so you don’t need to work to handle them.

### Figma Library

Deskblocks comes with a companion Figma UI kit, including all components and tokens. The Figma kit leverages variables to preview designs in all available themes instantly.


### Vite-Powered Development

Deskblocks uses [vite](https://vitejs.dev/) under the hood, so you can enjoy all of its benefits like **hot module replacement**, fast compilation, lazy loading, optimized build and so on.

## Installation

To get started, clone the template and install the dependencies:

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

The official [zoho extension toolkit](https://www.npmjs.com/package/zoho-extension-toolkit) only supports React and does not works with Deskblocks.

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
- [Figma library](https://figma.com)
