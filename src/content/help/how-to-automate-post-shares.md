---
title: How to automate Post Shares
description: Auto-reply when someone shares your post or Reel to their DMs.
category: How-To Guides
order: 15
---

# How to automate Post Shares

When someone shares your post directly to another user's DM, Botyoo can catch that event and reply automatically. It's a strong engagement signal — reward it with an exclusive link, a discount, or a simple thank-you.

## Step 1: Create the automation

From the dashboard sidebar, click **Create Automation**. In the template picker, choose **DM from Post Shares**.

## Step 2: Select the post

Pick the specific post or Reel you want to watch. Only shares of that post will trigger the automation. If you leave it on any post (no post selected), it fires for every share across your account.

> **Carousel posts and Reels both work.** Botyoo resolves which carousel slide was shared back to the parent post automatically.

## Step 3: Write your reply

The default message is:

> *You just shared my post — thank you so much! 🎉*
> *Here's a little something as a thank you 💫*

Edit it to match your voice. You can also add a button with a link — useful for sending a freebie, a discount code, or a product page.

## Step 4: Add a follow-up (optional)

Under **Follow-ups**, add a delayed message to nudge the person 1–24 hours later. Useful if you're sharing a link and want to check in.

## Step 5: Go Live

Click **Go Live**. Botyoo immediately starts watching for shares on the selected post.

## How it fires

| What happens | Result |
|---|---|
| User shares your post to someone's DM | Automation fires |
| User shares a carousel slide | Resolved to parent post, fires if matched |
| User shares a Reel | Fires if the Reel is selected |
| User shares a post from a different account | No match — only your posts |
| Automation is paused | No reply sent |

## Things to know

- **One reply per share event.** If the same person shares your post multiple times, each share gets a reply (deduplication is per-message, not per-contact).
- **No keywords needed.** The Share trigger is keywordless — it fires on the share event itself, not on what the person types.
- **Carousel slides.** Instagram sends the child item ID when a carousel is shared. Botyoo fetches the parent carousel ID automatically and matches it against your saved post. This adds ~200ms on the first share of a given carousel; subsequent shares resolve instantly from cache.
- **Private shares only.** This trigger fires when someone shares your post *to a DM*, not when they repost it to their own feed or Story. For Story shares (when someone shares your post to their Story), use the [Story Mention](/help/how-to-automate-story-mentions) trigger.

## Troubleshooting

**Automation fires for some people but not others**

Check that the post selected in the automation matches the post being shared. If you selected a specific post, only shares of that exact post will trigger it.

**It fires for Reels but not for carousels (or vice versa)**

Make sure the automation is active and the correct post is selected. Carousel support requires resolving child slide IDs — this is handled automatically, but if you see it missing in logs, the IG token may need refreshing. Go to **Settings → Instagram → Refresh Permissions**.

**Reply is sent but follow-up isn't**

Follow-ups are queued via the worker process. Check that the delay is within the 24-hour Instagram messaging window. Delays over 24 hours will be silently skipped by Instagram's API.

## What's next

- [Follow-up sequences](/help/follow-up-sequences)
- [How to add buttons to a message](/help/how-to-add-buttons-to-message)
- [All triggers explained](/help/triggers-explained)
