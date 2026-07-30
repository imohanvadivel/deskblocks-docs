---
title: Rating
dir: components
category: Data Display
description: Rating presents a read-only score as stars, a thumbs-up count or an upvote count.
slug: rating
url: /components/rating
index: 12
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Rating

{description}

---

## Usage

The default `stars` variant rounds `value` to the nearest whole star. It displays up to `max` stars, with a default scale of five.

```svelte example
<script>
	import { Rating } from 'deskblocks';
</script>

<Rating label="Customer happiness" value={4} />
```

## Custom scale

Set `max` to use a different scale. The component accepts between 1 and 20 stars and clamps the filled count to that range.

```svelte example hideScript
<script>
	import { Rating } from 'deskblocks';
</script>

<Rating label="CSAT (out of 10)" value={7.6} max={10} />
```

## Thumbs and votes

Use `variant="thumbs"` for a helpful or like count. Use `variant="votes"` for an upvote count, such as the score on a community post or feature request.

```svelte example hideScript
<script>
	import { Rating } from 'deskblocks';
</script>

<Rating label="Helpful replies" variant="thumbs" value={128} />
<Rating label="Feature request votes" variant="votes" value={342} />
```

## Props

| Prop      | Type                                                | Default   | Description                                                                     |
| --------- | --------------------------------------------------- | --------- | ------------------------------------------------------------------------------- |
| `value`   | `number`                                            | `0`       | The rating. Stars: rounded to the nearest star. Thumbs/votes: shown as a count. |
| `max`     | `number`                                            | `5`       | Number of stars for the stars variant. Clamped from 1 to 20.                    |
| `variant` | <code>'stars' &#124; 'thumbs' &#124; 'votes'</code> | `'stars'` | Which glyph treatment to render.                                                |
| `label`   | `string`                                            | undefined | Optional small label rendered above the rating.                                 |
| `class`   | `string`                                            | undefined | Custom CSS class name for additional styling.                                   |

## Accessibility

The visual rating has an accessible label. Star ratings announce the filled and maximum values, while thumbs and votes announce their count.

## Events

None. The rating is a read-only display.
