---
title: Flow Builder
description: Build multi-step conversation flows with the visual Flow Builder.
category: Automations
order: 2
---

# Flow Builder

The Flow Builder lets you design multi-step conversation flows visually — no code required. Instead of a single trigger → action, you can build branching conversations that respond dynamically to what users say.

## Opening the Flow Builder

1. Go to **Automations** → **Flows**
2. Click **New Flow** or open an existing one
3. The canvas opens with a start node already placed

## Node Types

### Message Node
Sends a text message, image, or carousel to the contact. You can include buttons that branch the flow based on what the user taps.

### Condition Node
Branches the flow based on a condition — for example, whether the contact has a specific tag, or whether their message matches a keyword.

### Wait Node
Pauses the flow for a set amount of time before continuing to the next node.

### End Node
Marks the end of a flow path. Add this to cleanly close a branch.

## Connecting Nodes

- Click and drag from an **output handle** (right side of a node) to an **input handle** (left side) to connect two nodes
- Condition nodes have two outputs: **Yes** and **No**
- Button nodes have one output per button

## Saving and Activating

Click **Save** to store your flow as a draft. Toggle the flow **Active** from the Flows list to start processing it.

> Flows only trigger for new conversations that start after the flow is activated.
