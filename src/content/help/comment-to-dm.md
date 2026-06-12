---
title: Comment-to-DM Automation
description: Send a personalized DM to anyone who comments a keyword on your post or Reel.
category: Automations
order: 3
popular: 3
---

# Comment-to-DM Automation

Comment-to-DM is the workhorse of Botyoo. Someone comments a keyword on your post, like `LINK`, `GUIDE`, or `PRICE`, and Botyoo sends them a personalized DM within seconds.

## How to set one up

1. Click **Create Automation** in the top bar
2. Pick the **DM from Comments** template (or **Start from Scratch**)
3. Choose the post the automation will watch
4. Set your keywords (e.g. `LINK`)
5. Write the DM message
6. Toggle the automation **Active**

The whole setup takes about five minutes.

## Watching multiple posts

The post selector supports multiple posts. Use **Browse more posts** to add more. If you want the automation to fire on every post you publish, use the **DM from All Posts** Instant Automation.

## Speed

Botyoo listens on real-time Meta webhooks and queues the DM immediately. Under heavy load, the queue paces sends across Instagram's ~200 DMs/hour limit, so even a viral post reaches everyone, just spread out.

## Replying publicly too

Inside Options → **Auto Reply**, you can have Botyoo post a public comment reply (e.g. "Sent! Check your DMs."). Write multiple variations so the public comments don't look identical.

## The 24-hour cooldown

The same contact won't receive the same automated message twice in 24 hours, even if they comment the keyword again. This keeps your account within Meta's policies.

## Tracking results

| Where to look | What you'll see |
|---|---|
| **Automation** list | DM Send and New Followers counts per automation |
| **Inbox** → contact panel | "Captured by automation: <name>" on each contact |
| **Contacts** | Filter by automation source |

## Common gotchas

- The automation fires only on the posts you selected, re-check the post selector if it's silent
- Generic keywords like `the` will fire on many unrelated comments. Use specific words
- If the same person comments twice in 24 hours, only the first one triggers a DM
- Triggers run for **7 days** from the comment date, comments older than that won't fire

## What's next

- [Keyword triggers](/help/keyword-triggers)
- [Follow Gate and Email Gate](/help/follow-gate-and-email-gate)
- [Instagram policy and limits](/help/instagram-limits)
