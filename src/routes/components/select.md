---
title: Select
dir: components
description: Select dropdowns allow users to pick one or multiple choices from a predefined list, create custom tags, and more.
slug: select
url: /components/select
index: 11
---

# Select

{description}

---

## Usage

```svelte example
<script>
	import { Select } from 'deskblocks';
	const options = [
		{ label: 'Apple', value: 1 },
		{ label: 'Orange', value: 2 },
		{ label: 'Mango', value: 3 }
	];
	let value = [];
</script>

<Select bind:selected={value} {options} placeholder="Choose a fruit" />
```
<br/>

The select component's options can be provided as an array of strings, numbers, or option objects.

```ts
type OptionObject = {
	label: string | number; // The text or number displayed to the user
	value?: unknown; // The value associated with this option, can be any type including objects (defaults to the label if not provided)
	disabled?: boolean; // If true, this option cannot be selected
	preselected?: boolean; // If true, this option is pre-selected on page load (before any user interaction)
};

type Options = string[] | number[] | OptionObject[];
```

## Multi-select

- By default, the select component functions as a single select when `maxSelect` is set to 1.
- To enable multi-select functionality, set `maxSelect` to null.

```svelte example
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];
	let value = [];
</script>

<Select bind:selected={value} maxSelect={null} options={fruits} />
```

## Min/Max select options

- To restrict the number of options that can be selected, use the `maxSelect` prop with a specific value. For instance, setting `maxSelect` to 3 will limit the selection to three options.
- To specify a minimum number of selections, use the minSelect prop. For example, if `minSelect` is set to 3 and only 2 options are selected, no selections can be removed until at least 3 options have been chosen.

```svelte example
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];
	let value = [];
</script>

<Select bind:selected={value} minSelect={1} maxSelect={3} options={fruits} />
```

## Sorting selected values

By default, selected items appear in the order they were selected. To enable sorting, pass the `sortSelected` prop, which uses JavaScript’s default array sorting. Alternatively, you can provide a custom comparison function for more advanced sorting.

```svelte example
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];
	let value = [];
</script>

<Select sortSelected bind:selected={value} maxSelect={null} options={fruits} />
```

## Duplicate options

Control over whether duplicate options can be selected is provided by passing the appropriate prop. This applies only to the list of selected items, not the options dropdown.

```svelte example
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];
	let value = [];
</script>

<Select duplicates bind:selected={value} maxSelect={null} options={fruits} />
```

## Custom user input

To allow users to enter custom options by typing and pressing Enter, the `allowUserOptions` prop should be passed.

```svelte example
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Mango'];
	let value = [];
</script>

<Select
	allowUserOptions={true}
	createOptionMsg="Create new fruit..."
	bind:selected={value}
	maxSelect={null}
	options={fruits}
/>
```

## Append user input

Setting `allowUserOptions="append"` allows user-entered options to be added to the dropdown for future selections, even if they are removed from the selected list.

```svelte example
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Mango'];
	let value = [];
</script>

<Select
	allowUserOptions="append"
	createOptionMsg="Create new fruit..."
	bind:selected={value}
	maxSelect={null}
	options={fruits}
/>
```

## Tags mode

You can start with no options and let users populate MultiSelect from scratch. In this case, MultiSelect acts more like a tagging component.

```svelte example
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Mango'];
	let selected = [];
</script>

<Select
	allowUserOptions="append"
	noMatchingOptionsMsg=""
	createOptionMsg={null}
	bind:selected
	maxSelect={null}
/>
```

## Help Message
```svelte example hideScript
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];
	let value = ['Apple'];
</script>

<Select bind:selected={value} options={fruits} >
	<span slot="help-msg">An apple a day keeps the docter away</span>
</Select>

<Select invalid bind:selected={value} options={fruits} >
	<span slot="error-msg">An apple a day keeps the docter away</span>
</Select>
```

## Disabled state

```svelte example hideScript
<script>
	import { Select } from 'deskblocks';
	const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];
	let value = ['Apple'];
</script>

<Select disabled bind:selected={value} options={fruits} />
```

## Props

| Prop              | Type                                              | Default                 | Description                                                                                                                                                                                      |
| ----------------- | ------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| activeIndex       | number                                            | null                    | The position of the currently active option in the list of filtered options.                                                                                                                     |
| activeOption      | Option                                            | null                    | The option that is currently active, either because the user is hovering over it or has navigated to it using arrow keys.                                                                        |
| allowUserOptions  | boolean \| "append"                               | false                   | Determines if users can create custom options. If set to true, users can add new options to the selection. If set to "append", new options are added to both the selection and the options list. |
| allowEmpty        | boolean                                           | false                   | When true, prevents console errors from being shown when the options list is empty. This is useful for scenarios where having no options is acceptable.                                          |
| disabled          | boolean                                           | false                   | When set to true, this makes the entire select component non-interactive. Users won't be able to open the dropdown or make selections.                                                           |
| duplicates        | boolean                                           | false                   | If true, allows the same option to be selected multiple times. This only applies to the list of selected items, not the options in the dropdown.                                                 |
| key               | (opt: Option) => unknown                          | Custom function         | A function that determines how to compare options for equality. By default, it compares the lowercase versions of option labels.                                                                 |
| filterFunc        | (opt: Option, searchText: string) => boolean      | Custom function         | A custom function to determine which options should be shown based on the user's search text. This allows for advanced filtering logic.                                                          |
| id                | string                                            | null                    | Sets the ID attribute for the select component. This is important for accessibility, allowing labels to be associated with the select.                                                           |
| invalid           | boolean                                           | false                   | When true, visually indicates that the current selection is invalid. This can be used for form validation feedback.                                                                              |
| maxOptions        | number \| undefined                               | undefined               | Limits the number of options shown in the dropdown at once. If undefined, all options are shown.                                                                                                 |
| maxSelect         | number                                            | 1                       | The maximum number of options that can be selected. Set to null for unlimited selections. When set to 1, the component behaves like a single-select.                                             |
| name              | string                                            | null                    | Sets the name attribute for the select, which is used when submitting form data.                                                                                                                 |
| open              | boolean                                           | false                   | Controls whether the dropdown list of options is visible. Can be bound to for external control of the dropdown state.                                                                            |
| options           | Option[]                                          | Required                | An array of options to be shown in the dropdown. Each option can be a string, number, or an option object (see option types above).                                                              |
| createOptionMsg   | string                                            | "Create this option..." | The message shown when a user can create a new option that doesn't exist in the list. Only applicable when allowUserOptions is enabled.                                                          |
| parseLabelsAsHtml | boolean                                           | false                   | If true, option labels are parsed as HTML. Use with caution as it can introduce security risks if used with user-generated content.                                                              |
| pattern           | string                                            | null                    | A regular expression pattern for validating the input value. Useful for ensuring selected values match a specific format.                                                                        |
| placeholder       | string                                            | null                    | Text displayed in the input when no option is selected, providing a hint to the user about what to select.                                                                                       |
| minSelect         | number                                            | null                    | The minimum number of options that must be selected. Useful for requiring a certain number of selections.                                                                                        |
| required          | boolean                                           | false                   | When true, the select must have a value for form submission to be valid.                                                                                                                         |
| resetFilterOnAdd  | boolean                                           | true                    | If true, clears the search text input after an option is selected, allowing for a fresh search.                                                                                                  |
| searchText        | string                                            | ''                      | The current text in the search input. Can be bound to for external control of the search functionality.                                                                                          |
| selected          | Option[]                                          | []                      | An array of the currently selected options. Can be bound to for two-way data flow.                                                                                                               |
| sortSelected      | boolean \| ((op1: Option, op2: Option) => number) | false                   | Determines how selected options are sorted. If true, uses default sorting. Can also be a custom comparison function for advanced sorting.                                                        |
| value             | Option \| Option[] \| null                        | null                    | Represents the current value of the select. For single-select (maxSelect=1), it's a single Option or null. For multi-select, it's an array of Options.                                           |
| class             | string                                            | ''                      | Custom CSS class name for additional styling. styling.                                                                                                                                           |

## Slots

- `left`

## Events

-	`on:open`
-	`on:close`
-	`on:create`
-	`on:add`
-	`on:remove`
-	`on:removeAll`
-	`on:change`
-	`on:blur`
-	`on:change`
-	`on:click`
-	`on:focus`
-	`on:keydown`
-	`on:keyup`
-	`on:mousedown`
-	`on:mouseenter`
-	`on:mouseleave`
-	`on:touchcancel`
-	`on:touchend`
-	`on:touchmove`
-	`on:touchstart`
