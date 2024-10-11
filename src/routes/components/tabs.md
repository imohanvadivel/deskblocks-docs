---
title: Tabs
dir: components
description: A tabs component organizes content into multiple sections, allowing users to switch between different views or groups of content within the same space.
slug: tabs
url: /components/tabs
index: 13
---

<script>
  import 'deskblocks/globalStyles';
	import Info from '$lib/components/Info.svelte';
</script>

# Tabs

{description}

---

## Usage

- **Tab:** A Tab component groups multiple TabItems, allowing users to switch between different sections of content.
- **TabItem:** A TabItem represents an individual tab and its associated content within a Tab component.

```svelte example
<script>
	import { Tabs, TabItem } from 'deskblocks';
</script>

<Tabs>
	<TabItem title="contact" open>Contacts Tab</TabItem>
	<TabItem title="account">Accounts Tab</TabItem>
</Tabs>
```

<Info type="info" header="Notes:">

- Pass the `open` prop to a TabItem to set it as active.
- If none of the TabItems have the `open` prop, no tab will be selected.

</Info>

## Background

Pass the `background` prop to apply a background color to the tabs.

```svelte example
<script>
	import { Tabs, TabItem } from 'deskblocks';
</script>

<Tabs background>
	<TabItem title="contact">Contacts Tab</TabItem>
	<TabItem title="account" open>Accounts Tab</TabItem>
</Tabs>
```

## Slots

- `default`

## TabItem Props

| Prop    | Type    | Default   | Description                                                               |
| ------- | ------- | --------- | ------------------------------------------------------------------------- |
| `open`  | boolean | undefined | Indicates whether the tab is currently active and its content is visible. |
| `title` | string  | undefined | Sets the label or title displayed on the tab.                             |
| `class` | string  | undefined | Custom CSS class for additional styling of the tab item.                  |
