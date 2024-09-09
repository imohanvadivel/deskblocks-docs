---
title: Textarea
dir: components
description: A textarea provides a larger input field for users to enter multi-line text.
slug: textarea
url: /components/textarea
index: 5
---

# Textarea

{description}

---

## Usage

<!-- Import the `Textarea` component form 'deskblocks'. -->

```svelte example
<script>
	import { Textarea } from 'deskblocks';
</script>

<Textarea placeholder="Enter some message here" />
```

## Help message

<!-- To display a help message, use the `FormHelpMessage` component. -->

```svelte example hideStyle hideScript
<script>
	import { Textarea, FormHelpMessage } from 'deskblocks';
	const message = `If, in your thinking, you rely entirely on others—often through purchase of professional advice—whenever outside a small territory of your own, you will suffer much calamity.`;
</script>

<div>
	<Textarea value={message} />
	<FormHelpMessage>
		Above all, never fool yourself, and remember that you are the easiest person to fool.
	</FormHelpMessage>
</div>

<style>
	div {
		width: 100%;
	}
</style>
```

## Rows

```svelte example hideScript
<script>
	import { Textarea } from 'deskblocks';
	const message = `I want to think about things where I have an advantage over others. I don't want to play a game where people have an advantage over me. I don't play in a game where other people are wise and I am stupid. I look for a game where I am wise, and they are stupid. And believe me, it works better. God bless our stupid competitors. They make us rich.`;
</script>

<!-- 4 Rows -->
<Textarea rows="4" value={message} />
```

## Resizing

```svelte example hideScript
<script>
	import { Textarea } from 'deskblocks';
	const message = `Acquire worldly wisdom and adjust your behavior accordingly. If your new behavior gives you a little temporary unpopularity with your peer group…then to hell with them.`;
</script>

<Textarea resize="both" value={message} />
```

## Disabled state

```svelte example hideScript
<script>
	import { Textarea } from 'deskblocks';
	const message = `Remember that just because other people agree or disagree with you doesn’t make you right or wrong—the only thing that matters is the correctness of your analysis and judgment.`;
</script>

<Textarea disabled value={message} />
```

## Props

| Prop          | Type                                           | Default   | Description                                                           |
| ------------- | ---------------------------------------------- | --------- | --------------------------------------------------------------------- |
| `id`          | string                                         | undefined | Specifies a unique identifier for the textarea field.                 |
| `value`       | string                                         | undefined | Sets the current value of the textarea field.                         |
| `placeholder` | string                                         | undefined | Provides placeholder text that appears when the textarea is empty.    |
| `resize`      | 'horizontal' \| 'vertical' \| 'none' \| 'both' | 'none'    | Controls the resizing behavior of the textarea.                       |
| `minlength`   | string                                         | undefined | Specifies the minimum number of characters required in the textarea.  |
| `maxlength`   | string                                         | undefined | Specifies the maximum number of characters allowed in the textarea.   |
| `rows`        | number                                         | 2         | Sets the number of visible text lines for the textarea.               |
| `name`        | string                                         | undefined | Assigns a name to the textarea field, useful for form submissions.    |
| `spellcheck`  | boolean                                        | false     | Enables or disables spellchecking for the textarea field.             |
| `disabled`    | boolean                                        | false     | Disables the textarea field, preventing user interaction.             |
| `required`    | boolean                                        | false     | Indicates that the textarea field is required before form submission. |
| `readonly`    | boolean                                        | false     | Makes the textarea field read-only, preventing user modifications.    |
| `class`       | string                                         | undefined | Custom CSS class name for additional styling.                         |

## Events

- `on:click`
- `on:mouseover`
- `on:mouseenter`
- `on:mouseleave`
- `on:change`
- `on:input`
- `on:keydown`
- `on:keyup`
- `on:focus`
- `on:blur`
- `on:paste`
