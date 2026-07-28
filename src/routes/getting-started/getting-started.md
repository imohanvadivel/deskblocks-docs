---
title: Getting Started
dir: primary
description:
slug: getting-started
url: /getting-started
index: 2
---

<script>
  import Info from "$lib/components/Info.svelte";
  import Fig from "$lib/components/Fig.svelte";
</script>

# Getting Started

## Prerequisites

- Ensure that [Node.js](https://nodejs.org/en) (18 or above) and npm are installed on your system.
- Recommended IDE: Use [VS Code](https://code.visualstudio.com/) along with the [Svelte extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
- You will need a [Zoho Desk](https://zoho.com/desk) account to test your extension and a [Sigma](https://sigma.zoho.com) account to publish it on the [Zoho Marketplace](https://marketplace.zoho.com/).

## Installation

- Clone the template repository and install the necessary packages.
- The template is pre-configured with Deskblocks, TypeScript definitions, and other essential utilities.

```bash
 git clone https://github.com/imohanvadivel/desk-ext-template.git
 cd desk-ext-template
 npm i
```

## Configuring the SVG loader

- Deskblocks ships its icon set as `.svg` files, and the components inject them as inline markup. Every extension must therefore load SVG files as raw strings rather than as URLs.
- The template repository is already set up this way. You only need to do this yourself when adding Deskblocks to an existing project.
- Install [vite-svg-loader](https://www.npmjs.com/package/vite-svg-loader) and register it in `vite.config.ts` with `defaultImport` set to `raw`:

```bash
 npm i -D vite-svg-loader
```

```ts
// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
	plugins: [sveltekit(), svgLoader({ defaultImport: 'raw' })]
});
```

<Info header="Seeing file paths instead of icons?" type="warning">

Without `svgLoader({ defaultImport: 'raw' })`, Vite resolves each icon import to a URL string instead of the SVG markup, and the components render that string as visible text over their own content. Buttons, chips, empty states and anything else carrying an icon end up garbled with fragments such as `/node_modules/deskblocks/dist/icons/source/Account.svg` printed into the page.

This fails silently: there is no build error and nothing is logged to the browser console. If your icons look like broken text, check this configuration first.

</Info>

## Testing

- Before testing your extension, make sure that [developer mode](https://www.zoho.com/desk/extensions/guide/test-extension.html) is enabled in Zoho Desk.
- You can start the development server by running:

```bash
 # Starts the server on port 5000
 npm run dev
```

- Your extension should now be visible inside Desk in the placeholder location specified in the `plugin-&#8288;manifest.json` file.
- Now that all the scaffolding is done, go ahead and build the [rest of the extension :)](https://www.reddit.com/r/funny/comments/eccj2/how_to_draw_an_owl/)

<Info header="Note:" type="info">

The first time you run the server, you may need to grant sudo permissions to generate a TLS certificate because the development server runs over HTTPS.

</Info>

## Bundling

- Once you've built your extension, you can bundle the code by running:

```bash
 # Bundles the project and generates a zip file in the dist folder
 npm run build
```

- After bundling, you’ll find the packaged zip file (`ext.zip`) in the `dist` folder. This file can be uploaded to [Sigma](https://sigma.zoho.com/) to publish your extension.

## Miscellaneous

- The `plugin-manifest.json`, `resources.json`, and localization files are located in the `public` directory. Adjust these files according to your extension requirements.
- Place static assets (such as images) in the `assets` folder inside the `public` directory. You can reference them in your code like this:

```html
<img src="assets/img.png" />
```

## Additional Resources

- [Zoho Extension Development Guide](https://www.zoho.com/desk/extensions/guide/introduction.html)
- [Zoho Developer Forum](https://help.zoho.com/portal/en/community/zoho-desk/zoho-desk-extension-developers)
