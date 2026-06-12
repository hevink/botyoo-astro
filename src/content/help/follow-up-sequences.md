---
title: Follow-up Sequences
description: Send delayed follow-up messages to nudge non-clickers and warm up leads.
category: Automations
order: 8
---

# Follow-up Sequences

A follow-up is a message Botyoo sends after the first DM, on a delay you choose. Use them to recover non-clickers, send sale reminders, or nurture leads who didn't reply.

## How they work

Inside any Instant Automation or Flow, you can add follow-up steps. Each step has:

- A **delay** (minutes, hours, or days)
- A **message** (text, with optional image and links)

Botyoo waits exactly the delay you set on a per-contact basis, then sends the next message.

## A typical 3-step sequence

| Step | Delay | Purpose |
|---|---|---|
| 1 | 1 day after first DM | Gentle reminder: "Did you get a chance to check out the link?" |
| 2 | 3 days after first DM | Last-chance message: "Code expires tonight" |
| 3 | 7 days after first DM | Re-engagement: "New drop coming, want early access?" |

## Adding follow-ups to an Instant Automation

1. Open the automation
2. Scroll to the **Follow-ups** section at the bottom
3. Click **Add follow-up**
4. Set the delay and message
5. Save

## Adding follow-ups to a Flow

In the Flow Builder, use the **Time delay** step (from the Logic category) followed by a **Send Message** step. Stack as many delay → message pairs as you need.

## What happens if the user replies?

By default, the sequence keeps running. Best practice: tag the contact when they reply, then filter the sequence to skip tagged contacts. The **Wait for reply** step in the Flow Builder gives you finer control.

## The 24-hour window catch

Instagram's API only allows free-form DMs within 24 hours of the contact's last message. Past 24 hours, follow-ups need a Meta-approved message tag (like "update" or "customer response"). Botyoo applies the right tag automatically when it can identify the context, if it can't, the follow-up waits until the user re-engages.

## Limits

- No hard cap on the number of follow-up steps
- Each step shares the 200 DMs/hour Instagram rate cap
- Same 24-hour per-contact cooldown applies, the same message won't be re-sent within 24 hours

## What's next

- [Comment-to-DM basics](/help/comment-to-dm)
- [Flow Builder](/help/flow-builder)
- [Instagram policy and limits](/help/instagram-limits)
