---
title: Rating
dir: components
description: A read-only rating display — a row of stars, a thumbs-up count, or an upvote count.
slug: rating
url: /components/rating
index: 34
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Rating

{description}

---

## Usage

The default `stars` variant renders `max` stars (1–20, default 5) and fills `value` of them, rounded to the nearest star. Filled stars use the warning/amber icon color; empty stars are muted.

```svelte example
<script>
	import { Rating } from 'deskblocks';
</script>

<Rating label="Customer happiness" value={4} />
```

## Custom scale

```svelte example hideScript
<script>
	import { Rating } from 'deskblocks';
</script>

<Rating label="CSAT (out of 10)" value={7.6} max={10} />
```

## Thumbs and votes

`variant="thumbs"` shows a green thumbs-up glyph with the value as a count; `variant="votes"` shows a brand-colored upvote arrow with the count — handy for community-forum content.

```svelte example hideScript
<script>
	import { Rating } from 'deskblocks';
</script>

<Rating label="Helpful replies" variant="thumbs" value={128} />
<Rating label="Feature request votes" variant="votes" value={342} />
```

## Props

| Prop      | Type                                | Default   | Description                                                                    |
| --------- | ----------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `value`   | `number`                            | `0`       | The rating. Stars: rounded to the nearest star. Thumbs/votes: shown as a count. |
| `max`     | `number`                            | `5`       | Number of stars (stars variant only). Clamped to 1–20.                          |
| `variant` | `'stars' \| 'thumbs' \| 'votes'`    | `'stars'` | Which glyph treatment to render.                                                |
| `label`   | `string`                            | undefined | Optional small label rendered above the rating.                                 |
| `class`   | `string`                            | undefined | Custom CSS class name for additional styling.                                   |

## Events

None — the rating is a read-only display.
