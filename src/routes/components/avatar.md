---
title: Avatar
dir: components
description: An avatar displays a user’s profile picture or a representative image, often used to visually identify or represent a user.
slug: avatar
url: /components/avatar
index: 14
---

<script>
  import 'deskblocks/globalStyles';
</script>

# Avatar

{description}

---

## Usage

<!-- Import `Avatar` component from deskblocks. -->

```svelte example hideFont
<script>
	import { Avatar } from 'deskblocks';
</script>

<Avatar name="Alexander Hipp" src="/assets/avatar/pic1.jpg" />
```

## Fallback

<!-- When the image `src` is not passed or the link does not resolve to an image, the Avatar component renders the name initials. If the name prop is also not provided, a generic silhouette is rendered instead. -->

```svelte example hideScript
<script>
	import { Avatar } from 'deskblocks';
</script>

<Avatar name="Alexander Hipp" src="/assets/avatar/pic1.jpg" />

<!-- No Image -->
<Avatar name="Alexander Hipp" src="" />

<!-- No Initial & Image -->
<Avatar src="" />
```

## Size

<!-- The `size` prop is used to adjust the size of the avatar. It can be set to "small," "medium," or "large." Custom sizes can also be specified. -->

```svelte example hideScript hideFont
<script>
	import { Avatar } from 'deskblocks';
</script>

<Avatar size="small" src="/assets/avatar/pic3.jpg" />
<Avatar size="medium" src="/assets/avatar/pic3.jpg" />
<Avatar size="large" src="/assets/avatar/pic3.jpg" />

<!-- Custom Size -->
<Avatar size={50} src="/assets/avatar/pic3.jpg" />
```

## Props

| Prop    | Type                           | Default   | Description                                                                          |
| ------- | ------------------------------ | --------- | ------------------------------------------------------------------------------------ |
| `src`   | string                         | undefined | The URL of the image to be displayed as the avatar.                                  |
| `name`  | string                         | undefined | The name whose initials will be displayed as a fallback if the image is unavailable. |
| `size`  | "small" \| "medium" \| "large" | "medium"  | Specifies the size of the avatar.                                                    |
| `class` | string                         | undefined | Custom CSS class name for additional styling.                                        |
