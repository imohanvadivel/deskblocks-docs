---
title: Spinner
dir: components
description: A spinner indicates ongoing activity, such as loading or processing, providing users with immediate visual feedback.
slug: spinner
url: /components/spinner
index: 18
---

# Spinner

{description}

---

<script>
  import 'deskblocks/globalStyles';
</script>

## Usage

```svelte example hideScript hideFont
<script>
	import { Spinner } from 'deskblocks';
</script>

<Spinner />
```

## Size

```svelte example hideScript hideFont
<script>
	import { Spinner } from 'deskblocks';
</script>

<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />

<!-- custom size  -->
<Spinner size={50} />
```

## Props

| Prop      | Type                                     | Default   | Description                                                                             |
| --------- | ---------------------------------------- | --------- | --------------------------------------------------------------------------------------- |
| `size`    | 'small' \| 'medium' \| 'large' \| number | 'small'   | Specifies the size of the spinner, either using preset sizes or a custom numeric value. |
| `onbrand` | boolean                                  | false     | If true, the spinner color is adjusted to match the brand color scheme.                 |
| `class`   | string                                   | undefined | Custom CSS class name for additional styling.                                           |
