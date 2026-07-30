---
title: Form Help Msg
dir: components
category: Forms
description: A form help message displays supporting text below a form field, such as hints, validation errors, or additional context.
slug: form-help-msg
url: /components/form-help-msg
index: 12
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Form Help Msg

{description}

---

## Usage

```svelte example
<script>
	import { FormLabel, TextInput, FormHelpMsg } from 'deskblocks';
</script>

<div>
	<FormLabel for="email">Email</FormLabel>
	<TextInput id="email" placeholder="you@example.com" />
	<FormHelpMsg>We will never share your email.</FormHelpMsg>
</div>
```

## Invalid state

Pass the `invalid` prop to render the message in the danger color, typically alongside an invalid input.

```svelte example hideScript
<script>
	import { FormLabel, TextInput, FormHelpMsg } from 'deskblocks';
</script>

<div>
	<FormLabel for="email2">Email</FormLabel>
	<TextInput id="email2" invalid value="not-an-email" />
	<FormHelpMsg invalid>Enter a valid email address.</FormHelpMsg>
</div>
```

## Disabled state

```svelte example hideScript
<script>
	import { FormHelpMsg } from 'deskblocks';
</script>

<FormHelpMsg disabled>This field is currently unavailable.</FormHelpMsg>
```

## Slots

- `default`

## Props

| Prop       | Type    | Default | Description                                |
| ---------- | ------- | ------- | ------------------------------------------ |
| `invalid`  | boolean | false   | Renders the message in the danger color.   |
| `disabled` | boolean | false   | Renders the message in the disabled color. |
