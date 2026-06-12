---
title: Flow Builder
description: Build multi-step conversation flows with the visual Flow Builder.
category: Automations
order: 5
---

# Flow Builder

The Flow Builder lets you design multi-step conversation flows on a visual canvas, no code required. Use it when a single trigger → DM Instant Automation isn't enough.

## Opening the Flow Builder

1. Click **Create Automation** in the top bar
2. Pick **Start from Scratch** (or any flow template)
3. The canvas opens with a trigger node placed at the top

## The canvas

Flows are **vertical, top-down**. Each step is a card; you connect them with a single line and use the **`+`** button between cards to insert a new step.

## Adding a step

Click the **`+`** between two existing cards. A categorized step picker opens with six categories:

| Category | What's in it |
|---|---|
| **Messages** | Send message, Like message, Send photo/video, Send audio, Send file, Send message with buttons |
| **Conversions** | Welcome message, Conversion link, Payment link *(rolling out)* |
| **Comments** | Comment actions |
| **Contacts** | Add to folder, tag contact |
| **Logic** | Time delay, Follow-up message, Trigger a scenario, Wait for reply, Scenario condition *(rolling out)*, A/B testing *(Premium)* |
| **AI** | AI-driven steps |

Some steps are gated to higher plans or in active development, those appear greyed out in the picker.

## Step configuration

Each step has its own config panel:

- **Send Message**, text (up to 1,000 chars), image, links, variables
- **Welcome Message**, text (up to 200 chars), single button
- **Send message with buttons**, text + multiple URL buttons (label + link)
- **Time delay**, number + unit (minutes / hours / days)

## Variables in Flow Builder messages

Use `{{contact.name}}` and `{{contact.username}}`. This is **different** from Campaign variables, see [Variables in messages](/help/variables).

## Buttons

Buttons send users to a URL, they're URL buttons, not branching/quick-reply buttons. For true conditional branching, the **Scenario condition** step is rolling out.

## Saving and activating

Click **Save** to keep your flow as a draft. Toggle the flow **Active** from the list to start processing. Flows only fire for new conversations that start after activation.

## What's next

- [Instant vs Flow Automations](/help/instant-vs-flow)
- [Variables in messages](/help/variables)
- [Follow-up sequences](/help/follow-up-sequences)
