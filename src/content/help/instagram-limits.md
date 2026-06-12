---
title: Instagram Policy and Limits
description: The Meta API rules every Instagram automation must follow, rate caps, message windows, reply rules.
category: Troubleshooting
order: 1
---

# Instagram Policy and Limits

Every Instagram automation tool, Botyoo included, has to follow Meta's Graph API rules. These limits aren't Botyoo's; they're Instagram's. Knowing them prevents most "why isn't this working" tickets.

## Is automating Instagram DMs allowed?

Yes, when it uses the official Instagram Graph API. Botyoo does. Meta explicitly permits automated replies to **user-initiated actions**, comments, story replies, story mentions, incoming DMs, and Click-to-DM ad clicks.

## The 200 DMs / hour limit

Instagram's Graph API caps **automated DMs at roughly 200 per hour per account**. Past that, sends pause for about an hour, then resume automatically. Botyoo queues sends behind the scenes, so even a viral post reaches every commenter, just paced across the cap.

## The 7-day comment reply window

You can send an automated DM in response to a comment for up to **7 days** after the comment is posted. After that, the trigger expires. IG Live is the exception, Live replies must happen during the broadcast.

## The 24-hour messaging window

After a contact messages you, Instagram allows free-form DMs to that person for **24 hours**. Past 24 hours, only specific Meta-approved message tags (updates, customer responses) are allowed. This affects:

- Manual Inbox replies
- One-off campaign sends
- Follow-up sequences that fire after a long delay

Automated triggers (comment-to-DM, story mentions, etc.) aren't bound by the 24-hour window because each trigger is itself a user-initiated action.

## One automated reply per comment

Instagram allows **one** automated DM per comment per contact. If the same person comments your keyword twice, only the first comment triggers a DM.

Botyoo also enforces its own **24-hour per-contact cooldown** to stop the same person from receiving the same automated message twice in 24 hours.

## No cold DMs

You can't message users who haven't first taken an action. There's no way around this, any tool promising cold DM blasts is breaking Meta's rules.

## Will my account get banned?

Botyoo uses the same API Meta uses for business messaging, so bans from normal Botyoo usage are extremely rare. Account restrictions usually come from content policy violations (spam, copyright, prohibited content), issues that exist whether or not you use automation.

## What does Meta restrict for?

| Cause | Likely outcome |
|---|---|
| Posting copyrighted content | Reels removed, account warning |
| Spam-like comment activity | Temporary action block |
| Hashtag policy violations | Shadowban (reach drop) |
| Trying to cold-DM via scraping tools | Account restriction or ban |

None of these come from Botyoo. Botyoo respects every rate limit and only acts on user-initiated triggers.

## What's next

- [Account safety](/help/account-safety)
- [Troubleshooting](/help/troubleshooting)
- [Comment-to-DM basics](/help/comment-to-dm)
