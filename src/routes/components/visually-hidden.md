---
title: Visually Hidden
dir: components
description: The visually hidden component hides content from sighted users while keeping it accessible to screen readers, ensuring inclusivity.
slug: visually-hidden
url: /components/visually-hidden
index: 18
---

<script>
  import 'deskblocks/globalStyles';
	import Info from '$lib/components/Info.svelte';
</script>

# Visually Hidden

{description}

---

## Usage

```svelte example hideToolbar
<script>
	import { VisuallyHidden } from 'deskblocks';
</script>

<VisuallyHidden> Content to hide </VisuallyHidden>
```

<p style="margin-top: 1.5rem; margin-bottom: -1rem;">
  The following are examples of various ways the `VisuallyHidden` component can be used to enhance accessibility.
<p>

## IconButton

```svelte example hideScript hideToolbar
<script>
	import { VisuallyHidden, IconButton, Icon } from 'deskblocks';
	import { IconUndo } from 'deskblocks/icons';
</script>

<IconButton>
	<VisuallyHidden>Undo</VisuallyHidden>
	<Icon icon={IconUndo} />
</IconButton>
```

## Skip to main content

```svelte example hideScript hideToolbar
<script>
	import { VisuallyHidden, Text, Link } from 'deskblocks';
</script>

<Text tag="h1" align="left">
	<VisuallyHidden>
		<Link href="#">Skip to main content</Link>
	</VisuallyHidden>
	Heading 1
</Text>
```

## Input

```svelte example hideScript hideToolbar
<script>
	import { NumberInput, Icon } from 'deskblocks';
	import { IconFlag } from 'deskblocks/icons';
</script>

<NumberInput value={15}>
	<VisuallyHidden>Flag Count</VisuallyHidden>
	<Icon slot="left" icon={IconFlag} />
</NumberInput>
```
