---
title: API Keys
description: Generate and manage API keys for Claude, MCP clients, and custom integrations.
category: Integrations
order: 2
---

# API Keys

API keys let external clients, Claude, MCP servers, or your own code, control your Botyoo workspace.

## Creating an API key

1. Open **Settings** → **API Keys**
2. Click **Create New Key**
3. Copy the key when shown

> The key is displayed **only once**. Save it somewhere safe, if you lose it, you'll have to create a new one.

## Where to use it

The API key authenticates calls to Botyoo's API or MCP server. Common destinations:

- Claude (via the MCP integration in your Claude client)
- A custom script that reads your contacts and pushes them to another tool
- An automation that creates Botyoo automations from a sheet or database

## What it can do

A key inherits your workspace permissions. With one, a client can read contacts and conversations, send campaigns, create automations, and manage folders and tags.

## Security

Treat the key like a password:

- Don't paste it into a chat, ticket, or shared document
- Don't commit it to a git repo
- Use a secrets manager if your team uses one
- Rotate the key if you suspect it's been exposed

## Revoking a key

If a key gets exposed, revoke it from Settings → API Keys → delete. Any client using that key loses access immediately. Generate a fresh one and re-add it to your client.

## One key per workspace

Each workspace has its own keys. A key created in **Workspace A** can't control **Workspace B**, switch workspaces and create a separate key there.

## What's next

- [AI and MCP](/help/ai-and-mcp)
- [Team and Workspaces](/help/team-workspaces)
- [Account safety](/help/account-safety)
