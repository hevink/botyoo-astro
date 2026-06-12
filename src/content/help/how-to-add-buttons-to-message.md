---
title: How to add buttons to a message
description: Send a DM with tappable URL buttons that link to your offers, calendars, or product pages.
category: How-To Guides
order: 19
---

# How to add buttons to a message

Buttons turn a plain DM into a tappable CTA. Each button has a label and a URL.

> Botyoo buttons are **URL buttons**, they link to a destination. They don't branch the flow based on which one the user taps.

## Step 1: Open the Flow Builder

Open or create a flow.

## Step 2: Add a Send Message with Buttons step

Click **`+`** between two steps. In the picker, choose **Messages → Send message with buttons**.

![Step picker with Send message with buttons selected](/help-screenshots/flow-picker-buttons.png)

## Step 3: Write the message body

Compose the text that appears above the buttons.

![Message body field with buttons section below](/help-screenshots/flow-buttons-config.png)

## Step 4: Add buttons

Click **Add Button**. Each button gets a **label** and a **URL**.

![Button row with label and URL fields](/help-screenshots/flow-button-row.png)

Examples:

- Label: `Shop the drop` · URL: `yourstore.com/summer`
- Label: `Book a call` · URL: `calendly.com/you/15min`
- Label: `Read the guide` · URL: `you.com/guide`

## Step 5: Add more buttons

Stack as many as you need. Most flows ship 1–3 buttons.

![Multiple buttons stacked](/help-screenshots/flow-buttons-multiple.png)

## Step 6: Save the flow

The DM arrives with the buttons rendered natively in Instagram, they appear as tappable pills beneath the message text and open the linked URL in the in-app browser when tapped.

## Why URL buttons, not branch buttons

Branching by button tap (different replies based on which button the user pressed) is in the upcoming **Scenario condition** step. For now, route users via different URLs and track them with link-level analytics in your destination tool.

## What's next

- [How to build a multi-step flow](/help/how-to-build-flow)
- [How to send media in a flow](/help/how-to-send-media-in-flow)
