---
title: Variables in Messages
description: Personalize DMs and campaigns with dynamic variables, and the syntax difference between flows and campaigns.
category: Automations
order: 7
---

# Variables in Messages

Variables let you insert dynamic content into a DM, most often the contact's name. Botyoo supports two variable systems with **different syntax** depending on where you use them.

## ⚠️ Syntax differs between Flows and Campaigns

This is the single most common confusion. Get it right:

| Context | Syntax | Example |
|---|---|---|
| **Flow Builder** (Send Message step) | `{{contact.name}}` | `Hi {{contact.name}} 👋` |
| **Campaigns** (DM message field) | `{{name}}` | `Hi {{name}} 👋` |

Copying a flow message into a campaign, or vice versa, will leave literal `{{contact.name}}` text in the DM if you don't update the syntax.

## Available variables

### Flow Builder
- `{{contact.name}}`: full name (or first name if that's all Instagram returns)
- `{{contact.username}}`: Instagram handle

### Campaigns
- `{{name}}`: full name
- `{{username}}`: Instagram handle
- `{{first_name}}`: first name only

## What if a variable has no value?

If the contact doesn't have a name on file (common with brand-new contacts that have only an IGSID), the variable expands to an empty string. Write your message so it reads naturally without a name:

> `Hey {{name}} 👋` reads fine as `Hey 👋` if the name is missing.

Avoid `Dear {{name}},`, that becomes `Dear ,` which looks broken.

## Inserting variables in the builder

Both the Flow Builder and the Campaign builder have variable chips you can click to insert without typing. Look for the row of small pills under the message text field.

## What's next

- [Flow Builder](/help/flow-builder)
- [Campaigns](/help/campaigns)
- [Inbox and conversations](/help/inbox)
