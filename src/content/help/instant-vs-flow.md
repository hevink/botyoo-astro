---
title: Instant vs Flow Automations
description: When to use a one-step Instant Automation and when to build a multi-step Flow on the visual canvas.
category: Automations
order: 2
---

# Instant vs Flow Automations

Botyoo has two ways to build an automation. Picking the right one saves time.

## Instant Automations

A single-trigger, single-action setup with built-in options. Best for the common cases:

- Reply to a comment with a DM
- Deliver a link gated behind a follow
- Capture an email before sharing an offer

Instant Automations come with built-in toggles you don't have to wire up:

| Built-in option | What it does |
|---|---|
| **Welcome Message** | First reply before the main DM |
| **Auto Reply** | Public comment reply (with rotating variations) |
| **Follow Gate** | Send the offer only after the user follows |
| **Email Gate** | Collect an email inside the DM before sending the link |
| **Follow-ups** | Schedule reminder messages on a delay |

No visual canvas. Just a form. Most users only need this.

## Flows

A visual canvas for multi-step conversations. Use Flows when you need:

- Several messages in sequence
- Time delays between messages
- Different actions based on what the user does
- Media files (photo, video, audio) mixed with text
- Buttons that link to multiple destinations

You drag steps top-to-bottom on a dotted grid. Each step is a card; click the **`+`** between cards to insert a new one.

## Which one should you pick?

| You want to… | Use |
|---|---|
| Reply to comments with a link | **Instant** |
| Grow followers with a freebie | **Instant** (Follow Gate) |
| Collect emails before sending a code | **Instant** (Email Gate) |
| Send a 3-step nurture sequence | **Flow** |
| Send an image + text + delayed follow-up | **Flow** |
| Branch by which button the user taps | **Flow** (with URL buttons) |

> Start with an Instant Automation. Move to a Flow only when you need a step Instant can't provide.

## Switching between them

You can't convert an Instant Automation into a Flow directly. If you outgrow Instant, create a new Flow that replicates the steps, then pause the Instant Automation.

## What's next

- [Comment-to-DM basics](/help/comment-to-dm)
- [Flow Builder](/help/flow-builder)
- [Follow Gate and Email Gate](/help/follow-gate-and-email-gate)
