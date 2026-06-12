---
title: Folders, Tags, and Contacts
description: Organize your contacts with folders and tags, then target them in flows and campaigns.
category: Inbox & Contacts
order: 2
---

# Folders, Tags, and Contacts

Botyoo's contact system has three primitives that work together: **Contacts** (the people), **Folders** (buckets you sort them into), and **Tags** (labels you stick on a single contact).

## Contacts

Every Instagram user who triggers an automation or DMs you becomes a Contact. The Contacts page shows:

| Column | What it shows |
|---|---|
| User | Avatar, Instagram handle (or IGSID if no handle), follower count |
| Email | Captured email if Email Gate ran |
| Automation | The automation that captured them |
| Following Status | Whether they follow you |
| Last Interaction | Relative time of last message |

You can search, filter by automation, and **export emails to CSV**.

## Folders

A folder groups multiple contacts into a bucket. Examples: Supporters, VIP, Applicants, Hot leads.

You can add contacts to a folder from:

- **Inside a flow**, using the "Add contact to folder(s)" step
- **The Inbox**, using the "Add to folder" affordance in the conversation header
- **A campaign audience**, filter by folder when building a campaign

Contacts can be in **multiple folders** at once. Folders are shared across the workspace, so anyone on your team can use them.

## Tags

Tags are inline labels you attach to a single contact from the Inbox side-panel. Use them for quick segmentation: "interested in courses", "asked about pricing", "VIP customer".

Like folders, tags feed into campaign audience targeting via the **By tag** dropdown.

## Folders vs Tags: which to use?

| Use a **folder** when… | Use a **tag** when… |
|---|---|
| You want to bucket many contacts at scale | You want to label one contact based on a conversation |
| The grouping is reusable (Supporters, VIP) | The label is specific to context |
| A flow step should add the contact | You're labeling manually from the Inbox |

In practice: folders are automation-driven, tags are conversation-driven.

## Exporting

The Contacts page has an **Export Emails** button that downloads a CSV of every contact with a captured email. You can pre-filter by automation source to export just the leads from one funnel.

## Notes

Each contact has a Notes field in the Inbox side-panel for private team comments. Notes are workspace-only, so the contact never sees them.

## What's next

- [Inbox and conversations](/help/inbox)
- [Campaigns](/help/campaigns)
- [Follow Gate and Email Gate](/help/follow-gate-and-email-gate)
