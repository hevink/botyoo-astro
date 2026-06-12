---
title: Inbox and Conversations
description: Manage every Instagram DM conversation from a shared, real-time inbox.
category: Inbox & Contacts
order: 1
---

# Inbox and Conversations

The Inbox is your team's shared view of every Instagram DM. Replies sync to Instagram in real time, conversations carry their automation source, and every contact has a side-panel with tags, notes, and follower stats.

## Three-panel layout

| Panel | What's in it |
|---|---|
| **Left** | Folders, search, status filters (All / Unread / Open / Closed), conversation list |
| **Center** | Active conversation thread, tabs for Conversation / Automation / Campaign, reply composer |
| **Right** | Contact side-panel, avatar, follower counts, automation source, tags, notes |

## Real-time everything

The Inbox uses server-sent events (SSE), so new Instagram messages appear without refreshing. Reactions, status changes, and folder assignments all sync live across your team.

## Replying

The composer supports text, images, video, audio, and emoji reactions. Reactions sync bidirectionally with Instagram, if the contact reacts to your reply in IG, you'll see it in Botyoo too.

## The 24-hour messaging window

Instagram only allows free-form DMs within 24 hours of the contact's last message. The composer will warn you if you try to send outside the window. Past 24 hours, you can still use Meta-approved message tags for legitimate follow-ups.

## Conversation status

The Status dropdown in the right panel lets you mark a conversation **Open** or **Closed**. Closed conversations move out of the default view but reopen automatically when the contact sends a new message.

## Folders

The **Folders** section in the left rail groups conversations into buckets you create (Supporters, VIP, Applicant, anything). Folders are shared across your workspace and they're the same folder primitive used by flow steps and campaign audience targeting, tag a contact here and you can target them in a campaign.

## Why some previews show "[opening message]" or "[media]"

Instagram's API returns placeholders for certain message types (story replies, shares, media) in the preview row. Open the conversation to see the actual content.

## Why some contacts show a numeric ID

If Instagram's Messenger API doesn't return a username, Botyoo falls back to the Instagram-Scoped ID (IGSID). It's a Meta API limit, not a bug, usernames usually resolve after the contact replies.

## What's next

- [Folders, tags, and contacts](/help/folders-tags-contacts)
- [Campaigns](/help/campaigns)
- [Team and workspaces](/help/team-workspaces)
