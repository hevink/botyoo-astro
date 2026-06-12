---
title: Troubleshooting
description: "Common issues and how to fix them: DMs not sending, automations not triggering, permission errors."
category: Troubleshooting
order: 3
---

# Troubleshooting

Most "why isn't this working" issues fall into one of the patterns below. If yours doesn't match, email [support@botyoo.com](mailto:support@botyoo.com) with a screenshot.

## My DM didn't send

Check in this order:

1. **Automation status**: is it **Active**, not Paused or Draft?
2. **24-hour cooldown**: did the contact receive the same message in the last 24 hours?
3. **24-hour window**: for manual or campaign sends, did the contact message you within the last 24 hours?
4. **Rate limit**: did you cross the 200 DMs/hour cap?
5. **Contact state**: did they block you or delete their account?

Open the contact in **Inbox** to see which case applies.

## My automation isn't triggering on new comments

- Confirm the automation is **Active**
- Confirm it's pointing at the **right post**
- Check your keyword settings: does the actual comment text match?
- Confirm Instagram is still connected. A stale token won't receive webhooks. Run **Refresh Permissions** if you have access.

## The wrong contact got a DM

Usually one of:

- **"Any keyword" toggle** is on, so every comment fires the automation
- Keyword is too generic (e.g. `the`, `link`), so many comments match by accident

Tighten your keyword list and disable Any keyword if you didn't mean to enable it.

## Permission errors when connecting Instagram

- Confirm your Instagram is a **Business** or **Creator** account
- Confirm it's connected to a **Facebook Page**
- Use a **desktop browser** for the connection, as mobile Safari sometimes drops the OAuth redirect
- Grant **every** permission Meta requests. Declining one breaks the flow

## My account got temporarily restricted

Restrictions usually come from content (banned hashtags, copyright) or velocity from manual activity, not Botyoo. Botyoo enforces Meta's rate limits automatically. Wait for the restriction to lift (typically 24–48 hours) and review your recent posts.

## IG Live comments aren't pulling through

Live triggers **only work during the broadcast**. If you set up the automation after the Live ended, it won't fire retroactively. Also confirm the trigger is on the right account, Live automations are workspace-scoped, not post-scoped.

## My contact list shows numbers instead of usernames

Instagram's Messenger API uses Instagram-Scoped IDs (IGSIDs) when a username isn't returnable. This is a Meta API constraint. Usernames usually resolve once the contact replies in DM.

## Image upload failed

- Confirm the image is **under 8 MB**
- Use **JPG, PNG, or WebP**, other formats are rejected
- Compress large images and retry

## A folder I created doesn't appear in a flow

Hard-refresh the page (Cmd/Ctrl+Shift+R). New folders sync to the Flow Builder picker on the next load.

## I can't see the Refresh Permissions button

It only appears when your token actually needs refreshing. If the connection is healthy and the workspace **owner** made it, **members** see "Connected by workspace owner" instead. Only the owner can refresh.

## Variables aren't expanding

Check the syntax:

- **Flow Builder** uses `{{contact.name}}` and `{{contact.username}}`
- **Campaigns** use `{{name}}`, `{{username}}`, and `{{first_name}}`

Copying between them without changing syntax leaves literal `{{...}}` text in the DM.

## Still stuck?

- Email [support@botyoo.com](mailto:support@botyoo.com), typical reply within a few hours
- Use the in-app live chat (bottom-right of the dashboard)
- DM [@Hevin_69](https://x.com/Hevin_69) on X for urgent issues, the fastest response

Include your account email, the workspace name, the specific automation, and a screenshot or recording of the issue.

## What's next

- [Instagram policy and limits](/help/instagram-limits)
- [Account safety](/help/account-safety)
- [Connecting Instagram](/help/connecting-instagram)
