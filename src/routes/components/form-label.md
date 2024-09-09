---
title: Form Label
dir: components
description: A form label provides a clear and accessible name for form inputs, helping users understand the purpose of each field.
slug: form-label
url: /components/form-label
index: 2
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Form Label

{description}

---

## Usage

<!-- Import `FormLabel` component from deskblocks. -->

```svelte example
<script>
	import { FormLabel } from 'deskblocks';
</script>

<FormLabel for="email">Field Label</FormLabel>
```

## Mandatory label

<!-- Use the `required` prop to indicate that the label corresponds to a mandatory form field. -->

```svelte example hideScript
<script>
	import { FormLabel } from 'deskblocks';
</script>

<FormLabel required>Field Label</FormLabel>
```

## Disabled label

<!-- Use the `disabled` prop to apply a disabled state to the label, indicating that the associated form field is inactive. -->

```svelte example hideScript
<script>
	import { FormLabel } from 'deskblocks';
</script>

<FormLabel disabled>Field Label</FormLabel>
```

## Slots

- `default`

## Props

| Prop       | Type    | Default   | Description                                                                     |
| ---------- | ------- | --------- | ------------------------------------------------------------------------------- |
| `for`      | string  | undefined | Associates the label with a specific form element by matching the element's ID. |
| `required` | boolean | false     | Indicates that the associated form field is required.                           |
| `disabled` | boolean | false     | Indicates that the associated form field is disabled.                           |
| `class`    | string  | undefined | Custom CSS class name for additional styling.                                   |
