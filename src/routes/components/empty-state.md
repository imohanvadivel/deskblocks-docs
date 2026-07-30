---
title: Empty State
dir: components
category: Feedback
description: Empty State explains why a region has no content and can offer a clear next step.
slug: empty-state
url: /components/empty-state
index: 4
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Empty State

{description}

---

## Usage

Provide a short title that names the empty condition and a description that helps the user understand what to do next. The component uses the archive icon by default.

```svelte example
<script>
	import { EmptyState } from 'deskblocks';
</script>

<EmptyState
	title="No open tickets"
	description="This contact has no open tickets right now. New tickets will appear here."
/>
```

## Custom icon

Pass an SVG string from `deskblocks/icons` through `icon`. Set `icon=""` when the empty state does not need an illustration.

```svelte example
<script>
	import { EmptyState } from 'deskblocks';
	import { IconSearch } from 'deskblocks/icons';
</script>

<EmptyState
	icon={IconSearch}
	title="No results found"
	description="Try adjusting the filters or searching by ticket number instead."
/>
```

## With an action

Use the `action` slot for a follow-up control, such as a `Button` or a `Link`.

```svelte example
<script>
	import { EmptyState, Button } from 'deskblocks';
	import { IconTicket } from 'deskblocks/icons';
</script>

<EmptyState
	icon={IconTicket}
	title="No tickets yet"
	description="Create the first ticket for this account to start tracking conversations."
>
	<Button slot="action" variant="secondary">Create ticket</Button>
</EmptyState>
```

## Slots

- `action`: optional call-to-action rendered below the description, for example a `Button` or `Link`.

## Props

| Prop          | Type   | Default      | Description                                                       |
| ------------- | ------ | ------------ | ----------------------------------------------------------------- |
| `icon`        | string | Archive icon | SVG string for the illustration. Pass an empty string to hide it. |
| `title`       | string | Required     | Headline that describes the empty condition.                      |
| `description` | string | undefined    | Supporting text displayed below the headline.                     |
| `class`       | string | undefined    | Custom CSS class name for additional styling.                     |
