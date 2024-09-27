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
- **Recommended IDE:** Use [VS Code](https://code.visualstudio.com/) along with the [Svelte extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
- You will need a [Zoho Desk](https://zoho.com/desk) account to test your extension and a [Sigma](https://sigma.zoho.com) account to publish it on the [Zoho Marketplace](https://marketplace.zoho.com/).

## Installation

- Clone the template repository and install the necessary packages. 
- The template is pre-configured with Deskblocks, TypeScript definitions, and other essential utilities.
```bash
 git clone https://github.com/imohanvadivel/desk-ext-template.git
 cd desk-ext-template
 npm i
```


## Testing

- Before testing your extension, make sure that [developer mode](https://www.zoho.com/desk/extensions/guide/test-extension.html) is enabled in Zoho Desk.
- You can start the development server by running:

```bash
 # Starts the server on port 5000
 npm run dev
```

- Your extension should now be visible inside Desk in the placeholder location specified in the **plugin-&#8288;manifest.json** file.
- Now that all the scaffolding is done, go ahead and build the [rest of the extension :)](https://www.reddit.com/r/funny/comments/eccj2/how_to_draw_an_owl/)


<Info header="Note:" type="info">

The first time you run the server, you may need to grant **sudo permissions** to generate a TSL certificate, as the development server runs over HTTPS protocol.

</Info>

## Bundling

- Once you've built your extension, you can bundle the code by running:

```bash
 # Bundles the project and generates a zip file in the dist folder
 npm run build
```

- After bundling, you’ll find the packaged zip file (**ext.zip**) in the **dist** folder. This file can be uploaded to [Sigma](https://sigma.zoho.com/) to publish your extension.

## Miscellaneous

- The **plugin-manifest.json**, **resources.json**, and localization files are located in the **public** directory. Adjust these files according to your project requirements.
- Place static assets (such as images) in the **assets** folder inside the **public** directory. And you can reference them in your code like this:

```html
 <img src="assets/img.png" />
```

## Additional Resources

- [Zoho Extension Development Guide](https://www.zoho.com/desk/extensions/guide/introduction.html)
- [Zoho Developer Forum](https://help.zoho.com/portal/en/community/zoho-desk/zoho-desk-extension-developers)