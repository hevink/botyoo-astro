---
title: Connecting Instagram
description: Connect your Instagram Business or Creator account to Botyoo via the official Meta Graph API.
category: Getting Started
order: 2
popular: 2
---

# Connecting Instagram

Botyoo runs on Meta's official Instagram Graph API. You'll connect your account through Meta's authorization screen, Botyoo never sees your Instagram password.

## What you need first

| Requirement | Why |
|---|---|
| Instagram **Business** or **Creator** account | The Graph API isn't available on personal accounts |
| A connected **Facebook Page** | Instagram authorizes through a Page (you don't have to post anything) |
| Owner access to both | You need to be the admin on the FB Page to grant permissions |

Switching your Instagram account type is free and takes about two minutes in Instagram's profile settings.

## How to connect

1. Go to **Integration** in the sidebar
2. Click **Connect Instagram**
3. You'll be redirected to Meta's official authorization screen
4. Pick your Facebook Page and the Instagram account it manages
5. Grant every permission Meta requests, declining any will break the flow
6. You'll be returned to Botyoo with your account showing as connected

> Use a desktop browser for first-time connection. Mobile Safari occasionally drops the OAuth redirect mid-flow.

## What permissions Botyoo requests

Botyoo asks for the standard Meta Graph API scopes needed to read your comments and messages, send DMs, manage Stories, and access basic profile data. You can review every requested permission on Meta's authorization screen before approving.

## Connecting more than one account

Each workspace holds **one** Instagram connection. To run multiple accounts, create a separate workspace per account and switch between them from the sidebar.

- Pro plan: 1 workspace
- Premium plan: up to 10 workspaces
- Enterprise: unlimited

## Refreshing permissions

If Meta updates a scope or your token nears expiry, you'll see a **Refresh Permissions** button on the Integration page. Click it and re-authorize, your automations resume immediately.

> Only the workspace owner sees Refresh Permissions. Members see "Connected by workspace owner" and need to ask the owner to refresh.

## Disconnecting

The workspace owner can disconnect from the Integration page. Disconnecting pauses every automation in the workspace until a new account is connected. Existing contacts, automations, and inbox data are preserved.

## What's next

- [How automations work](/help/how-automations-work)
- [Comment-to-DM basics](/help/comment-to-dm)
- [Instagram policy and limits](/help/instagram-limits)
