---
title: Empty State
dir: components
description: An empty state fills a blank region with a muted glyph, a headline and guidance on what to do next.
slug: empty-state
url: /components/empty-state
index: 28
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Empty State

{description}

---

## Usage

The icon defaults to the archive (inbox) glyph.

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

Pass any raw SVG string from `deskblocks/icons` via `icon`.

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

Use the `action` slot for a follow-up control — a `Button` or a `Link`.

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

- `action` — optional call-to-action rendered below the description (e.g. a `Button` or `Link`).

## Props

| Prop          | Type   | Default              | Description                                                          |
| ------------- | ------ | -------------------- | --------------------------------------------------------------------- |
| `icon`        | string | archive (inbox) glyph | Raw SVG string (e.g. from `deskblocks/icons`) for the 64px muted glyph. |
| `title`       | string | —                    | Bold headline.                                                         |
| `description` | string | undefined            | Muted supporting line (wraps at ~34 characters per line).              |
| `class`       | string | undefined            | Custom CSS class name for additional styling.                          |
