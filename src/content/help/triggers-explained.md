---
title: All Triggers Explained
description: Every event Botyoo can listen for, from comments to ad clicks to Story mentions.
category: Automations
order: 6
---

# All Triggers Explained

A trigger is the Instagram event that starts an automation. Botyoo supports seven trigger types.

## Comment on post or Reel

The most common trigger. Fires when someone comments your post with a matching keyword.

- Tied to specific posts (or all posts with **DM from All Posts**)
- 7-day reply window from the comment date
- 1 automated DM per comment per contact

## DM received

Fires when someone sends you a direct message. Useful for general inbox auto-responders that match a keyword in the incoming DM body (e.g. someone DMing you `PRICE`).

## Story mention

Fires when someone tags you with `@yourhandle` in their Story. Pair with a "Like message" step to react with a heart, and a "Send Message" step to send a personalized thank-you.

## Story share

Fires when someone shares your post to their own Story or to a DM. A good signal that they're engaged, reward with an offer or a coupon.

## Post like

Fires when someone likes a specific post. Use sparingly, like-triggered DMs can feel spammy, and they share Instagram's hourly rate cap with every other automation.

## IG Live comment

Fires on comments during a live broadcast. Critical constraint: **Live triggers only work during the broadcast**. Once the Live ends, you can't message Live commenters anymore, this is a Meta API rule, not a Botyoo limit.

## Click-to-DM ad

Fires when someone taps your Meta Click-to-DM ad and lands in DM. You can match a specific keyword from the ad's prefilled message, or use a catch-all to fire on any ad click.

## Choosing the right trigger

| Goal | Trigger |
|---|---|
| Convert comments into leads | Comment on post |
| Inbox keyword auto-responder | DM received |
| Engage Story taggers | Story mention |
| Re-share appreciation | Story share |
| Reward your top fans | Post like (carefully) |
| Live giveaway prize delivery | IG Live comment |
| Recover ad clicks | Click-to-DM ad |

## What's next

- [Comment-to-DM basics](/help/comment-to-dm)
- [Keyword triggers](/help/keyword-triggers)
- [Instagram policy and limits](/help/instagram-limits)
