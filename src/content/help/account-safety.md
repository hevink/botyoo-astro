---
title: Account Safety
description: How Botyoo keeps your Instagram account and data safe, official API, encryption, and isolation.
category: Troubleshooting
order: 2
---

# Account Safety

Botyoo is built for accounts you care about. Here's how the safety model works.

## Official Meta Graph API only

Botyoo authenticates through Meta's official OAuth flow. You log in on Meta's own screen and Botyoo receives a scoped access token, never your password.

> Any tool that asks for your Instagram username and password is scraping, not using the official API. Scraping risks account restriction and is the most common reason creators lose their accounts.

## Data encryption

| What | How |
|---|---|
| Instagram access tokens | Encrypted at rest |
| All traffic | HTTPS only |
| Workspace data | Isolated by workspace ID with role-based access control |

## Workspace isolation

Workspaces are fully isolated. Other Botyoo customers can never see your contacts, conversations, or automations, even if you share an employee or contractor with them. Workspace members see workspace data; nothing crosses workspace boundaries.

## What happens if Meta revokes my token?

You'll see a "Connection expired" warning in the Integration page and automations pause. Click **Refresh Permissions** to re-authorize through Meta. No data is lost, once reconnected, automations resume.

## Does Botyoo sell my data?

No. Botyoo doesn't sell personal data under any condition. Data is shared only with infrastructure providers (Cloudflare, Neon), Meta APIs as needed to deliver the service, and legal authorities if required by law.

## What data is stored?

- Account & profile (name, email, business name, social handles)
- Instagram/Meta tokens (encrypted)
- DMs, comments, mentions, and follower data accessible via the connected Meta scopes
- Usage and technical data (device info, IP, time zone, crash logs)

Full detail in the [Privacy Policy](/privacy).

## What data is shared with Meta?

Botyoo makes Meta Graph API calls on your behalf using the permissions you've granted. Meta sees what Botyoo does (sending a DM, fetching comments) the same way it would see any business-messaging activity. Meta does not see your Botyoo account credentials.

## Data residency

Application traffic runs on Cloudflare's global edge. Stored data sits in Neon Postgres (US regions by default). Data may be processed in other regions where service providers operate.

## How to harden your account

A few habits beyond using Botyoo:

- Enable two-factor authentication on Instagram and Facebook
- Use a strong, unique password on Meta
- Review your connected apps in Meta Business Settings periodically
- Don't share API keys (see [API Keys](/help/api-keys))

## What's next

- [Instagram policy and limits](/help/instagram-limits)
- [API Keys](/help/api-keys)
- [Privacy Policy](/privacy)
