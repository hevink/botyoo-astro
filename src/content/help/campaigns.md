---
title: Campaigns (Bulk DMs)
description: "Send targeted DM blasts to filtered audiences: flash sales, restock alerts, launches."
category: Inbox & Contacts
order: 3
---

# Campaigns

A Campaign is a one-shot bulk DM to a chosen audience. Different from automations (which fire on Instagram events), Campaigns are scheduled by you and go out to many contacts at once.

## When to use a Campaign

- Flash sale alerts
- Restock announcements
- Webinar reminders
- Course launches
- Time-sensitive offers to your existing leads

If you need to send the **same message** to **many people** at the **same moment**, that's a campaign.

## How to send one

1. Go to **Campaigns** in the sidebar
2. Click **+ New campaign**
3. Name the campaign (e.g. "Summer Sale Announcement")
4. Upload an image (optional)
5. Write the DM message, up to 1,000 characters with variable chips
6. Add links if needed
7. Pick the audience: **By tag**, **By automation**, or both
8. Review the iPhone preview on the right
9. Click **Create campaign**

## Audience targeting

| Filter | Targets |
|---|---|
| **By tag** | Every contact with the chosen tag |
| **By automation** | Every contact captured by the chosen automation |
| **Both** | The intersection: contacts who match both filters |

Pick narrower audiences for higher relevance. A 200-contact targeted campaign usually outperforms a 2,000-contact generic one.

## Variables

Campaigns use **flat** variable syntax:

- `{{name}}`
- `{{username}}`
- `{{first_name}}`

This is **different from the Flow Builder** which uses `{{contact.name}}`. Don't copy a flow message into a campaign without updating the variables.

## The live iPhone preview

The right pane shows an iPhone DM mockup that updates as you type. It uses your real Instagram avatar and shows exactly how the DM will look, text, image, and links.

## Tracking

Each campaign tracks **Sent / Delivered / Failed** counts in real time. The list view shows campaign metrics at a glance.

## Why some sends fail

The most common failure is Instagram's **24-hour messaging window**: if a contact hasn't messaged you in the last 24 hours, you can't send them a free-form campaign DM. Other failures: the contact blocked you, deleted their account, or Instagram is rate-limiting the workspace.

## Rate limiting

Campaign sends share Instagram's 200 DMs/hour cap with automations. Botyoo paces large audiences automatically, so a big campaign may take an hour or more to fully deliver. The delivery count updates live so you can watch it move.

## Scheduling

Send-later scheduling is rolling out. For now, Campaigns send immediately when you create them.

## What's next

- [Folders, tags, and contacts](/help/folders-tags-contacts)
- [Variables in messages](/help/variables)
- [Instagram policy and limits](/help/instagram-limits)
