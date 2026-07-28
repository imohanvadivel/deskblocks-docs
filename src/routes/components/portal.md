---
title: Portal
dir: components
description: A portal renders its children into a different part of the DOM, such as document.body. Reach for it when an overlay, dropdown or toast needs to escape a clipping or stacking context.
slug: portal
url: /components/portal
index: 21
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Portal

{description}

---

## Usage

Content placed inside `Portal` is moved to the `target` element (by default `document.body`) when the component mounts, and removed again when it is destroyed.

```svelte
<script>
	import { Portal } from 'deskblocks';
</script>

<Portal>
	<div class="toast">Saved successfully</div>
</Portal>
```

## Custom target

The `target` prop accepts a CSS selector or an `HTMLElement`.

```svelte
<script>
	import { Portal } from 'deskblocks';
</script>

<div id="overlay-root" />

<Portal target="#overlay-root">
	<div class="dialog">…</div>
</Portal>
```

## Slots

- `default`

## Props

| Prop     | Type                  | Default | Description                                                    |
| -------- | --------------------- | ------- | -------------------------------------------------------------- |
| `target` | <code>string &#124; HTMLElement</code> | 'body'  | Where to render the content: a CSS selector or a DOM element.  |
