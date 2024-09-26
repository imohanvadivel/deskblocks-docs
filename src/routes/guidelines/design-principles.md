---
title: Design Principles
dir: guidelines
description:
slug: design-principles
url: /guidelines/design-principles
index: 1
---

<script>
  import Text from "$lib/components/Text.svelte";
  import Fig from "$lib/components/Fig.svelte";
</script>

<Text tag="h1" type="h1-lora">
Design Principia
</Text>

These principles form the foundation for creating experiences, guiding designers and developers, and helping them make informed, effective decisions.

---

<Fig src="/assets/banner/_principia.jpg" height="720" />

## Prioritize user experience

User Experience > Developer Experience > Ease of Implementation.

## Create a cohesive and consistent experience

Extensions should feel unified and seamlessly connected with the Zoho Desk interface. All components should behave and appear in predictable ways across screens.

## Mask internal structure

Building an extension may involve multiple intermediaries, but users should not be exposed to these complexities. For example, users may be unaware of platforms like [Sigma](https://sigma.zoho.com/) or [DRE](https://www.zoho.com/deluge/help/overview.html), and encountering these terms in an alert or UI element could cause unnecessary confusion.

## Automate wherever possible

Prioritize the users' time over our own by actively seeking opportunities to automate repetitive tasks, enhancing efficiency and productivity. Additionally, design user flows to be as direct and efficient as possible, minimizing the steps required to complete actions.

## Optimize for sub-100ms latency

Latency of less than 100 milliseconds feels near-instantaneous, ensuring that users do not perceive any delays. When longer response times are expected, provide users with clear and immediate feedback.

## Embrace inclusive design

Ensure that individuals with diverse needs can use the application by adhering to the accessibility standards outlined in [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

