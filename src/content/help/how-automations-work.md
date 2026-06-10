---
title: How Automations Work
description: Understand triggers, actions, and the automation lifecycle in Botyoo.
category: Automations
order: 1
---

# How Automations Work

Automations in Botyoo are built around a simple **trigger → action** model. When a trigger condition is met, Botyoo executes the configured actions automatically.

## Triggers

A trigger is the event that starts your automation. Available triggers:

| Trigger | Description |
|---|---|
| Comment contains keyword | Fires when someone comments with a specific word or phrase |
| Story mention | Fires when someone mentions you in their story |
| DM received | Fires when a new direct message arrives |
| Post like | Fires when someone likes a specific post |

## Actions

Actions are what Botyoo does when a trigger fires:

- **Send DM** — Send a private message to the person who triggered the automation
- **Reply to comment** — Post a public reply under the comment
- **Add to sequence** — Enroll the contact in a follow-up message sequence
- **Tag contact** — Add a label to the contact for filtering later

## Automation Status

Each automation has one of these statuses:

- **Active** — Running and processing triggers
- **Paused** — Exists but not processing
- **Draft** — Saved but never activated

## Limits and Cooldowns

To stay within Instagram's messaging policies, Botyoo applies a cooldown per contact — the same person won't receive the same automated message more than once per 24 hours unless you explicitly configure otherwise.
