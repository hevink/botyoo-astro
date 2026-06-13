// Data for the /product/* pages (DM Campaigns, Smart Inbox & CRM, Comment to DM).
//
// Each product page is assembled from this data by src/pages/product/[slug].astro.
// The illustrative "visual" objects are rendered by ProductFeatureRow.astro using
// inline HTML mockups (no screenshots required), matching the look of the
// homepage FeatureCallout cards.

export type ProductVisual =
  | {
      kind: "list"
      label: string
      live?: string
      rows: { initials: string; name: string; text: string; status: string }[]
      footer: { left: string; right: string }
    }
  | {
      kind: "chat"
      label: string
      bubbles: { from: "them" | "me"; text: string; initials?: string }[]
      footer: { left: string; right: string }
    }
  | {
      kind: "tags"
      label: string
      subtitle?: string
      segments: { label: string; count: string }[]
      footer: { left: string; right: string }
    }
  | {
      kind: "stats"
      label: string
      subtitle?: string
      stats: { value: string; label: string }[]
      bars: { label: string; pct: number }[]
    }
  | {
      kind: "profile"
      label: string
      name: string
      handle: string
      initials: string
      fields: { label: string; value: string }[]
      tags: string[]
    }
  | {
      kind: "flow"
      label: string
      steps: {
        label: string
        sublabel?: string
        tone?: "trigger" | "action" | "convert"
        branches?: [string, string]
      }[]
      footer?: { left: string; right: string }
    }

export interface ProductFeature {
  title: string
  desc: string
  visual: ProductVisual
}

export interface ProductTool {
  title: string
  desc: string
  icon: string // key into ProductFeatureRow / page icon map
}

export interface ProductStep {
  title: string
  desc: string
}

export interface ProductBenefit {
  title: string
  desc: string
  icon: string
}

export interface ProductFAQ {
  q: string
  a: string
}

export interface Product {
  slug: string
  eyebrow: string
  title: string
  highlight: string
  description: string
  featuresHeading: string
  featuresSub: string
  features: ProductFeature[]
  useCasesHeading: string
  useCasesSub: string
  useCases: { title: string; desc: string }[]
  tools: ProductTool[]
  stepsHeading: string
  stepsSub: string
  steps: ProductStep[]
  benefitsHeading: string
  benefits: ProductBenefit[]
  faqs: ProductFAQ[]
  cta: string
}

export const products: Product[] = [
  {
    slug: "dm-campaigns",
    eyebrow: "DM Campaigns",
    title: "Turn your next launch into a",
    highlight: "DM campaign",
    description:
      "Plan, send, and automate broadcasts and multi-step sequences in Instagram DMs, so every drop, promo, and follow-up reaches the followers most likely to buy.",
    featuresHeading: "What are DM campaigns?",
    featuresSub:
      "Reach the right people, build the message, and measure what each campaign actually drives.",
    features: [
      {
        title: "Target the exact audience you want",
        desc: "Pull any segment straight from your Botyoo CRM, new leads from comment-to-DM, past buyers, waitlists, or your warmest followers, so every send lands with people who care.",
        visual: {
          kind: "tags",
          label: "Choose your audience",
          subtitle: "Segments pulled live from your CRM",
          segments: [
            { label: "New leads (last 7 days)", count: "1,284" },
            { label: "Clicked, didn't buy", count: "612" },
            { label: "Past customers", count: "938" },
            { label: "Launch waitlist", count: "2,107" },
          ],
          footer: { left: "4 segments selected", right: "4,941 contacts" },
        },
      },
      {
        title: "Send a broadcast or build a sequence",
        desc: "Fire off a single announcement or chain multiple messages with delays and branches. Set it once and Botyoo handles every step automatically.",
        visual: {
          kind: "chat",
          label: "Campaign sequence",
          bubbles: [
            { from: "me", text: "🔥 The drop is live, here's your early-access link: botyoo.com/drop" },
            { from: "them", text: "⏱ Wait 1 day", initials: "·" },
            { from: "me", text: "Still thinking it over? Here's 10% off for the next 24h." },
            { from: "them", text: "⏱ Wait 2 days · if no reply" },
            { from: "me", text: "Last call, the offer closes tonight 👀" },
          ],
          footer: { left: "3 messages · 2 delays", right: "Branches on reply" },
        },
      },
      {
        title: "Track every open, click, and sale",
        desc: "See exactly how each campaign performs and auto-tag people based on what they did, opened, clicked, replied, or bought, so your next send is even sharper.",
        visual: {
          kind: "stats",
          label: "Campaign analytics",
          subtitle: "Spring drop · sent to 4,941 contacts",
          stats: [
            { value: "86%", label: "Opened" },
            { value: "41%", label: "Clicked" },
            { value: "312", label: "Sales" },
          ],
          bars: [
            { label: "Opened", pct: 86 },
            { label: "Clicked", pct: 41 },
            { label: "Replied", pct: 29 },
            { label: "Purchased", pct: 18 },
          ],
        },
      },
    ],
    useCasesHeading: "How can I use DM campaigns?",
    useCasesSub: "Launch, nurture, and convert with outreach that lands in the DM, not the feed.",
    useCases: [
      {
        title: "Launches and product drops",
        desc: "Announce a new product or offer in DMs and send people straight to checkout, without depending on post reach.",
      },
      {
        title: "Freebie, nurture, offer",
        desc: "Deliver a freebie automatically, then follow up with a short DM sequence that builds to your offer over a few days.",
      },
      {
        title: "Event and webinar reminders",
        desc: "Collect sign-ups, send reminders, share the replay, and follow up after the event, all on autopilot.",
      },
      {
        title: "Win back old leads",
        desc: "Re-engage past customers and cold leads with a personalised DM sequence that reopens the conversation.",
      },
    ],
    tools: [
      { title: "Mass broadcasts", desc: "Send to your whole list for launches, announcements, or time-sensitive offers.", icon: "send" },
      { title: "Audience targeting", desc: "Pick exactly who receives each campaign using tags and CRM segments.", icon: "target" },
      { title: "Multi-step sequences", desc: "Add messages, delays, and branches that react to opens, clicks, and replies.", icon: "flow" },
      { title: "Built-in tracking", desc: "Measure opens, clicks, replies, and sales for every campaign you send.", icon: "chart" },
    ],
    stepsHeading: "Create a DM campaign in minutes",
    stepsSub: "Turn your DMs into a high-converting sales channel.",
    steps: [
      { title: "Choose your audience", desc: "Pick a segment from your Botyoo CRM: new leads, past buyers, waitlists, and more." },
      { title: "Design your messages", desc: "Add messages, delays, and quick questions. Drop in links and CTAs just like a normal DM." },
      { title: "Set your timing", desc: "Send the campaign instantly or schedule it to go out later." },
      { title: "Go live and monitor", desc: "Launch your campaign and watch conversions roll in as they happen." },
    ],
    benefitsHeading: "Why brands run campaigns in DMs",
    benefits: [
      { title: "Get seen", desc: "DMs get opened far more often than emails or feed posts, so your message actually lands.", icon: "eye" },
      { title: "Flat pricing", desc: "Message your whole audience without per-contact fees eating into your margins.", icon: "tag" },
      { title: "Fully automated", desc: "Set delays, branches, and triggers once, then let every campaign run itself.", icon: "bolt" },
    ],
    faqs: [
      {
        q: "What is an Instagram DM campaign?",
        a: "A DM campaign is a message, or a multi-step sequence of messages, sent to a chosen segment of your audience inside Instagram DMs. With Botyoo you pick who receives it, design the messages, and the platform delivers and tracks each step automatically.",
      },
      {
        q: "Can I choose who receives each campaign?",
        a: "Yes. Every campaign is sent to a segment you build from your Botyoo CRM, such as new leads, past customers, waitlists, or people who clicked but didn't buy. You're always in control of the audience.",
      },
      {
        q: "How are Botyoo campaigns different from a basic broadcast?",
        a: "Beyond one-off broadcasts, you can build sequences with delays and branches that react to what people do. Botyoo also tags contacts based on opens, clicks, and replies so your follow-ups get smarter over time.",
      },
      {
        q: "Is sending DM campaigns on Instagram safe?",
        a: "Yes. Botyoo is a Meta Tech Provider and uses Instagram's official Messaging API. Campaigns respect Instagram's messaging windows and policies, so your account stays in good standing.",
      },
      {
        q: "Will I be charged per contact?",
        a: "No. Botyoo uses flat pricing, you only meter the messages you send, not the number of contacts you store, so growing your audience never inflates your bill.",
      },
    ],
    cta: "Ready to turn your next launch into a DM campaign?",
  },
  {
    slug: "smart-inbox-crm",
    eyebrow: "Smart Inbox & CRM",
    title: "Every Instagram DM in",
    highlight: "one smart inbox",
    description:
      "See every DM, comment, and contact in one place. Tag, segment, and track your Instagram audience like a real CRM, not a pile of unread messages.",
    featuresHeading: "What is the Smart Inbox & CRM?",
    featuresSub: "Turn chaotic DMs into a clear, searchable pipeline you actually own.",
    features: [
      {
        title: "One clean inbox for every conversation",
        desc: "DMs, comment replies, mentions, and automated conversations all land in a single inbox, so nothing slips through and your whole team works from the same view.",
        visual: {
          kind: "list",
          label: "Unified inbox",
          live: "3 teammates online",
          rows: [
            { initials: "MK", name: "@mike_k", text: "Can I still get the bundle deal?", status: "You" },
            { initials: "LP", name: "@lisa_p", text: "When does the sale end?", status: "Sarah" },
            { initials: "TN", name: "@tom_n", text: "Thanks, that worked!", status: "Resolved ✓" },
            { initials: "RG", name: "@ravi.g", text: "Do you ship to the UK?", status: "New" },
          ],
          footer: { left: "18 open conversations", right: "Avg reply: 2 min" },
        },
      },
      {
        title: "A real profile for every contact",
        desc: "Every follower who messages you gets a CRM-style profile with their details, tags, campaign history, and full interaction timeline, automatically.",
        visual: {
          kind: "profile",
          label: "Contact profile",
          name: "Sarah Mitchell",
          handle: "@sarah.m",
          initials: "SM",
          fields: [
            { label: "Email", value: "sarah@gmail.com" },
            { label: "Source", value: "Comment → DM" },
            { label: "Followers", value: "12.4k" },
            { label: "Last active", value: "2h ago" },
          ],
          tags: ["Warm lead", "Clicked offer", "Waitlist"],
        },
      },
      {
        title: "Segment and prioritise with folders",
        desc: "Group high-volume DMs into clear segments and folders, like 'clicked but didn't buy' or 'past customers', then reuse them to prioritise replies and power campaigns.",
        visual: {
          kind: "tags",
          label: "Segments & folders",
          subtitle: "Organise your audience your way",
          segments: [
            { label: "Hot leads", count: "146" },
            { label: "Clicked, didn't buy", count: "612" },
            { label: "Past customers", count: "938" },
            { label: "Needs follow-up", count: "73" },
          ],
          footer: { left: "Reusable across Botyoo", right: "Auto-updating" },
        },
      },
    ],
    useCasesHeading: "How can I use the Inbox & CRM?",
    useCasesSub: "Everyday habits that turn messy DMs into a pipeline you can act on.",
    useCases: [
      {
        title: "Prioritise your follow-ups",
        desc: "See who replied, clicked, or asked about pricing so you always know who to reach out to first.",
      },
      {
        title: "Segment for your next campaign",
        desc: "Build lists like 'clicked but didn't buy' or 'past customers' and reuse them in your DM campaigns.",
      },
      {
        title: "Keep sales and support together",
        desc: "Handle support questions and sales conversations side by side in the same organised inbox.",
      },
      {
        title: "Hand off without losing context",
        desc: "Assign conversations to teammates with the full history attached, so anyone can pick up where you left off.",
      },
    ],
    tools: [
      { title: "Unified IG inbox", desc: "Every DM, comment reply, mention, and automated chat in one clean interface.", icon: "inbox" },
      { title: "Rich contact profiles", desc: "Each follower's history, tags, campaigns, and key details in one place.", icon: "user" },
      { title: "Folders & tags", desc: "Organise leads, clients, and segments into views that match how you work.", icon: "folder" },
      { title: "Team assignment", desc: "Route conversations to teammates and reply without stepping on each other.", icon: "users" },
    ],
    stepsHeading: "Get your inbox running in under 5 minutes",
    stepsSub: "Turn your followers into a pipeline you can actually work.",
    steps: [
      { title: "Connect your Instagram", desc: "Link your account and let Botyoo start syncing DMs, comments, and new contacts." },
      { title: "See everything in one inbox", desc: "Watch conversations flow in with contact profiles created for you automatically." },
      { title: "Add folders and views", desc: "Tag leads, clients, and segments, then build folder views that match how you work." },
      { title: "Use segments everywhere", desc: "Reuse your CRM segments in DM campaigns so every send is more targeted." },
    ],
    benefitsHeading: "Why teams run their DMs through Botyoo",
    benefits: [
      { title: "Never miss a lead", desc: "Every message and contact is captured automatically, so no opportunity gets buried.", icon: "eye" },
      { title: "Own your audience", desc: "Your contacts live in a CRM you control, exportable and yours to keep.", icon: "database" },
      { title: "Work as a team", desc: "Shared inbox, assignments, and notes keep everyone aligned on every conversation.", icon: "users" },
    ],
    faqs: [
      {
        q: "What is an Instagram CRM?",
        a: "An Instagram CRM stores every person who interacts with you as a contact, with their details, tags, and full conversation history. Botyoo builds this automatically so your audience lives somewhere organised outside the app.",
      },
      {
        q: "Can I manage Instagram DMs from my desktop?",
        a: "Yes. Botyoo gives you a full desktop inbox where you can read, reply to, tag, and organise every Instagram conversation without touching your phone.",
      },
      {
        q: "How do I tag and segment my followers?",
        a: "You can tag contacts manually or automatically based on their behaviour, then group them into folders and segments like 'hot leads' or 'past customers' that update themselves as people act.",
      },
      {
        q: "Can multiple team members manage DMs together?",
        a: "Yes. The inbox is shared, so teammates can assign conversations, leave notes, and reply without overlapping or double-handling the same chat.",
      },
      {
        q: "Can I track leads and sales in one place?",
        a: "Yes. Every contact profile shows campaign history, clicks, and interactions, so you can see the full story behind each lead and where they are in your pipeline.",
      },
    ],
    cta: "Ready to turn your Instagram DMs into a real CRM?",
  },
  {
    slug: "comment-to-dm",
    eyebrow: "Comment to DM",
    title: "Turn Instagram comments into",
    highlight: "customers",
    description:
      "Auto-DM people the moment they comment on your posts and Reels: deliver freebies, capture leads, and turn engagement into sales, 24/7.",
    featuresHeading: "What is comment-to-DM automation?",
    featuresSub: "Every 'I'm interested' in your comments becomes a private conversation that converts.",
    features: [
      {
        title: "Auto-reply from comments to DMs",
        desc: "When someone comments on your post or Reel, Botyoo sends them a DM instantly, so every interested follower starts a private conversation while the moment is hot.",
        visual: {
          kind: "list",
          label: "Comment → DM engine",
          live: "Live · 3 posts monitored",
          rows: [
            { initials: "JK", name: "@jake_fitness", text: "Where can I get this?", status: "DM sent ✓" },
            { initials: "SM", name: "@sarah_m", text: "Need this! Link please 🙏", status: "DM sent ✓" },
            { initials: "AR", name: "@alex.runs", text: "How much is it?", status: "Sending…" },
            { initials: "BL", name: "@bella_lee", text: "GUIDE", status: "DM sent ✓" },
          ],
          footer: { left: "247 DMs sent today", right: "98% delivery rate" },
        },
      },
      {
        title: "Pick your posts, keywords, and emojis",
        desc: "Choose which posts and Reels to activate, then set simple keyword or emoji triggers. Botyoo watches the comments and replies for you around the clock.",
        visual: {
          kind: "tags",
          label: "Triggers for this post",
          subtitle: "DM is sent when a comment matches",
          segments: [
            { label: '"GUIDE"', count: "keyword" },
            { label: '"LINK"', count: "keyword" },
            { label: "🔥", count: "emoji" },
            { label: "Any comment", count: "fallback" },
          ],
          footer: { left: "2 posts · 1 Reel active", right: "Running 24/7" },
        },
      },
      {
        title: "Do more than send a link",
        desc: "Deliver resources, ask qualifying questions, capture an email, and tag the contact in your CRM, so a single comment becomes the start of a full sales or nurture journey.",
        visual: {
          kind: "chat",
          label: "DM flow",
          bubbles: [
            { from: "me", text: "Thanks for commenting! Here's your free guide 🎁" },
            { from: "me", text: "What's the best email to send the bonus to?" },
            { from: "them", text: "sarah@gmail.com", initials: "S" },
            { from: "me", text: "Got it, on its way! Want 10% off your first order too?" },
          ],
          footer: { left: "Email captured ✓", right: "Tagged: Warm lead" },
        },
      },
    ],
    useCasesHeading: "What can I do with comment automation?",
    useCasesSub: "Set it up in minutes and let every post keep working long after you publish.",
    useCases: [
      {
        title: "Deliver freebies and lead magnets",
        desc: "Send your PDF, checklist, or link in a DM when people comment a keyword like 'GUIDE' on your Reel.",
      },
      {
        title: "Run giveaways and contests",
        desc: "Auto-DM the rules and entry link, then confirm each person the moment they enter.",
      },
      {
        title: "Build waitlists and drops",
        desc: "Collect interested leads from comments and tag them for your next launch campaign.",
      },
      {
        title: "Grow your email list",
        desc: "Ask for an email right inside the DM and sync new subscribers to your email platform.",
      },
    ],
    tools: [
      { title: "Keyword & emoji triggers", desc: "Fire DMs from specific words, phrases, or emojis on posts and Reels.", icon: "target" },
      { title: "Smart comment variants", desc: "Rotate multiple public reply variations so your comments stay human.", icon: "message" },
      { title: "In-DM lead capture", desc: "Collect emails and phone numbers inside the conversation, no forms.", icon: "form" },
      { title: "Auto-tagging", desc: "Tag and segment every new contact automatically as they come in.", icon: "tag" },
    ],
    stepsHeading: "Get started in under 2 minutes",
    stepsSub: "Turn comments into DMs, then into leads, follows, and sales.",
    steps: [
      { title: "Choose a post and trigger", desc: "Pick the posts or Reels to activate and define your keyword or emoji triggers." },
      { title: "Design your DM flow", desc: "Write your message, add buttons, and optional follow-up questions." },
      { title: "Add rules and tags", desc: "Decide who receives the DM and which tags or segments to apply." },
      { title: "Go live and track", desc: "Publish and watch leads come in, with every contact saved to your CRM." },
    ],
    benefitsHeading: "Why creators and brands love comment-to-DM",
    benefits: [
      { title: "Convert more", desc: "Send offers, lead magnets, and product links in DMs that turn engagement into sales.", icon: "bolt" },
      { title: "Grow faster", desc: "Auto-collect emails, drive follows, and build an audience you can message anytime.", icon: "trend" },
      { title: "Save hours", desc: "Stop replying by hand, automate responses, capture, and follow-up in a few clicks.", icon: "clock" },
    ],
    faqs: [
      {
        q: "How does comment-to-DM automation work?",
        a: "When someone comments on a post or Reel you've activated, Botyoo matches it against your keyword or emoji triggers and instantly sends that person a DM, so an interested comment becomes a private conversation automatically.",
      },
      {
        q: "Do I need a professional Instagram account?",
        a: "Yes. Comment-to-DM uses Instagram's official Messaging API, which requires a Business or Creator account connected to a Facebook Page. Botyoo walks you through the connection in a couple of minutes.",
      },
      {
        q: "Can I capture emails inside the DM?",
        a: "Yes. Your DM flow can ask for an email or phone number right in the conversation, capture it, save it to the contact's CRM profile, and sync it to your email tool.",
      },
      {
        q: "Can I set different keywords for different DMs on one post?",
        a: "Yes. You can map several keywords or emojis to different DM flows on the same post, so 'GUIDE' and 'PRICE' can each trigger their own response.",
      },
      {
        q: "Does it work on Reels as well as posts?",
        a: "Yes. Comment-to-DM works across feed posts and Reels, and you choose exactly which ones to activate.",
      },
      {
        q: "Is comment-to-DM automation safe for my account?",
        a: "Yes. Botyoo is a Meta Tech Provider using the official API, so automations follow Instagram's policies and your account stays safe.",
      },
    ],
    cta: "Turn your Instagram comments into customers.",
  },
  {
    slug: "story-mentions",
    eyebrow: "Story Mentions",
    title: "Turn every story mention into a",
    highlight: "loyal fan",
    description:
      "When someone mentions you in their story, Botyoo likes it, tags them in your CRM, and sends a personal thank-you DM, automatically, within seconds.",
    featuresHeading: "What is story mention automation?",
    featuresSub:
      "Every shoutout is a warm lead. Botyoo reacts, remembers, and replies before the story expires.",
    features: [
      {
        title: "React the moment you're mentioned",
        desc: "As soon as someone tags you in a story, Botyoo likes the mention, saves the contact, and sends a thank-you DM, no manual checking, no missed shoutouts.",
        visual: {
          kind: "flow",
          label: "Story mention flow",
          steps: [
            { label: "Someone mentions you in a Story", tone: "trigger" },
            { label: "Like the mention", tone: "action" },
            { label: "Tag contact", sublabel: "📁 Brand Fans", tone: "action" },
            { label: "Send thank-you DM", sublabel: '"Thanks for the shoutout! ❤️"', tone: "action" },
          ],
          footer: { left: "Runs in seconds", right: "24/7" },
        },
      },
      {
        title: "Reward and segment your superfans",
        desc: "Every person who tags you is grouped into a brand-fans segment you can reward later with early access, discount codes, or exclusive drops.",
        visual: {
          kind: "tags",
          label: "Brand fan segments",
          subtitle: "Auto-built from story mentions",
          segments: [
            { label: "Tagged you 3+ times", count: "214" },
            { label: "First-time mention", count: "1,038" },
            { label: "Tagged a product", count: "486" },
            { label: "VIP fans", count: "92" },
          ],
          footer: { left: "Reusable in campaigns", right: "Auto-updating" },
        },
      },
      {
        title: "Turn shoutouts into sales",
        desc: "Thank fans, then offer them something, a discount, a link, or early access, while their attention is on you and the goodwill is fresh.",
        visual: {
          kind: "chat",
          label: "Thank-you DM",
          bubbles: [
            { from: "me", text: "Just saw your story, thank you so much! ❤️" },
            { from: "me", text: "Here's 15% off as a little thank-you: botyoo.com/fan15" },
            { from: "them", text: "Omg thank you!! 😍", initials: "S" },
          ],
          footer: { left: "Tagged: Brand fan", right: "Offer sent ✓" },
        },
      },
    ],
    useCasesHeading: "How can I use story mention automation?",
    useCasesSub: "Build goodwill, reward fans, and capture UGC without watching your notifications.",
    useCases: [
      { title: "Thank every mention", desc: "Send an instant, personal thank-you to anyone who tags you, so no shoutout goes unnoticed." },
      { title: "Reward user-generated content", desc: "Spot fans who tag your product and send them a discount or feature them." },
      { title: "Build a brand-fan list", desc: "Group everyone who mentions you into a segment for future drops and campaigns." },
      { title: "Re-engage repeat sharers", desc: "Identify your most active fans and reward loyalty with exclusive perks." },
    ],
    tools: [
      { title: "Auto-like mentions", desc: "Like every story you're tagged in the moment it goes live.", icon: "heart" },
      { title: "Auto-tagging", desc: "Save and segment every fan who mentions you, automatically.", icon: "tag" },
      { title: "Personalised DMs", desc: "Send a warm thank-you, an offer, or both, in one tap.", icon: "message" },
      { title: "Follow-up sequences", desc: "Nudge fans toward a follow, a purchase, or your VIP list over time.", icon: "flow" },
    ],
    stepsHeading: "Set up story mention automation in minutes",
    stepsSub: "Reward your fans on autopilot.",
    steps: [
      { title: "Pick the trigger", desc: "Choose the story-mention trigger, Botyoo watches for every tag for you." },
      { title: "Build your DM", desc: "Write a thank-you message and add an optional offer, link, or button." },
      { title: "Add tags and follow-ups", desc: "Decide which segment to add fans to and whether to follow up later." },
      { title: "Go live", desc: "Activate and let Botyoo react to every mention instantly, day or night." },
    ],
    benefitsHeading: "Why creators automate story mentions",
    benefits: [
      { title: "Never miss a mention", desc: "Stories vanish in 24 hours, Botyoo reacts before they do.", icon: "eye" },
      { title: "Build superfans", desc: "Consistent, personal replies turn casual taggers into loyal advocates.", icon: "heart" },
      { title: "Save hours", desc: "Stop scrolling notifications, every shoutout gets handled for you.", icon: "clock" },
    ],
    faqs: [
      { q: "What is story mention automation?", a: "It's an automation that fires whenever someone tags your account in their Instagram story. Botyoo can like the mention, save the contact, and send a thank-you DM automatically, within seconds of the tag." },
      { q: "Do I need a professional Instagram account?", a: "Yes. Story mention automation uses Instagram's official Messaging API, which requires a Business or Creator account connected to a Facebook Page. Botyoo guides you through the connection." },
      { q: "Can I send an offer with the thank-you?", a: "Absolutely. Your DM can include a discount code, link, or button alongside the thank-you, so a shoutout becomes a sales opportunity." },
      { q: "Will every fan be saved to my CRM?", a: "Yes. Each person who mentions you is added as a contact and can be tagged into segments like 'brand fans' for future campaigns." },
      { q: "Is it safe for my account?", a: "Yes. Botyoo is a Meta Tech Provider using the official API, so automations follow Instagram's policies and your account stays safe." },
    ],
    cta: "Reward every fan who tags you, automatically.",
  },
  {
    slug: "post-shares",
    eyebrow: "Post Shares",
    title: "Turn post shares into",
    highlight: "conversations",
    description:
      "When someone shares your post, Botyoo opens a DM, thanks them, and moves them into a flow, turning quiet shares into real conversations, leads, and sales.",
    featuresHeading: "What is post share automation?",
    featuresSub: "A share is a signal of intent. Botyoo turns it into a conversation while it's hot.",
    features: [
      {
        title: "Start a DM when someone shares",
        desc: "The moment a follower shares your post, to their story or in a DM, Botyoo can reach out, thank them, and kick off a flow that captures the lead.",
        visual: {
          kind: "flow",
          label: "Post share flow",
          steps: [
            { label: "Someone shares your post", tone: "trigger" },
            { label: "Send a thank-you DM", sublabel: '"Thanks for sharing! 🙌"', tone: "action" },
            { label: "Ask a quick question", sublabel: "What are you most interested in?", tone: "action", branches: ["New arrivals", "Best sellers"] },
            { label: "Send the right link", tone: "convert" },
          ],
          footer: { left: "Branches on reply", right: "Lead captured" },
        },
      },
      {
        title: "Choose which posts to monitor",
        desc: "Activate post-share automation on your highest-performing or most strategic posts, and let the rest run quietly.",
        visual: {
          kind: "tags",
          label: "Active posts",
          subtitle: "Share automation enabled",
          segments: [
            { label: "Spring launch Reel", count: "live" },
            { label: "Bestseller carousel", count: "live" },
            { label: "Founder story", count: "live" },
            { label: "Behind the scenes", count: "paused" },
          ],
          footer: { left: "3 posts active", right: "Running 24/7" },
        },
      },
      {
        title: "Capture the lead, every time",
        desc: "Collect an email, tag the contact, and deliver your offer, so a share never stays a vanity metric.",
        visual: {
          kind: "chat",
          label: "Share follow-up",
          bubbles: [
            { from: "me", text: "Love that you shared this! Want the full guide? 📩" },
            { from: "them", text: "Yes please!", initials: "J" },
            { from: "me", text: "Drop your email and I'll send it right over." },
            { from: "them", text: "jake@gmail.com", initials: "J" },
          ],
          footer: { left: "Email captured ✓", right: "Tagged: Engaged" },
        },
      },
    ],
    useCasesHeading: "How can I use post share automation?",
    useCasesSub: "Reward and convert the followers who care enough to share you.",
    useCases: [
      { title: "Thank and reward sharers", desc: "Send a thank-you and a small perk to anyone who shares your post." },
      { title: "Capture leads from shares", desc: "Collect an email or phone number from your most engaged followers." },
      { title: "Promote a launch", desc: "Turn shares of your launch post into a guided DM that ends at checkout." },
      { title: "Grow word of mouth", desc: "Encourage more shares by consistently rewarding the ones you get." },
    ],
    tools: [
      { title: "Share trigger", desc: "Fire a DM the instant someone shares an activated post.", icon: "share" },
      { title: "In-DM lead capture", desc: "Collect emails and details right inside the conversation.", icon: "form" },
      { title: "Smart branching", desc: "Send the right link based on how people answer.", icon: "flow" },
      { title: "Auto-tagging", desc: "Segment sharers so you can target them again later.", icon: "tag" },
    ],
    stepsHeading: "Set up post share automation in minutes",
    stepsSub: "Turn shares into conversations on autopilot.",
    steps: [
      { title: "Choose your posts", desc: "Pick which posts or Reels should trigger a DM when shared." },
      { title: "Design your DM flow", desc: "Write your thank-you, add questions, buttons, and links." },
      { title: "Add rules and tags", desc: "Decide what to capture and which segment to add sharers to." },
      { title: "Go live and track", desc: "Publish and watch shares turn into leads in your CRM." },
    ],
    benefitsHeading: "Why brands automate post shares",
    benefits: [
      { title: "Reward intent", desc: "People who share are your warmest audience, meet them with a real conversation.", icon: "bolt" },
      { title: "Capture more leads", desc: "Every share becomes a chance to collect an email and tag a contact.", icon: "trend" },
      { title: "Fully hands-off", desc: "Set the flow once and let every share run itself, day or night.", icon: "clock" },
    ],
    faqs: [
      { q: "How does post share automation work?", a: "When a follower shares a post you've activated, Botyoo detects it and starts a DM conversation, thanking them and moving them into a flow that can capture leads or send links automatically." },
      { q: "Which types of shares trigger it?", a: "Botyoo can respond when your post is shared in a way Instagram's API exposes to messaging, then opens a DM with that person to continue the conversation." },
      { q: "Can I capture an email from a share?", a: "Yes. Your DM flow can ask for an email or phone number, save it to the contact's profile, and sync it to your email tool." },
      { q: "Do I have to enable it on every post?", a: "No. You choose exactly which posts and Reels have share automation turned on, so you stay in control." },
      { q: "Is it safe for my account?", a: "Yes. Botyoo uses Instagram's official Messaging API as a Meta Tech Provider, so everything stays within policy." },
    ],
    cta: "Turn quiet shares into real conversations.",
  },
  {
    slug: "live-comments",
    eyebrow: "Live Comments",
    title: "Sell and engage during",
    highlight: "IG Live",
    description:
      "Run giveaways, quizzes, and product drops live. Anyone who comments a keyword during your Live gets an instant DM, so you capture every hot lead while the room is full.",
    featuresHeading: "What is IG Live comment automation?",
    featuresSub: "Your Live is your highest-intent moment. Don't let a single comment slip away.",
    features: [
      {
        title: "DM live commenters instantly",
        desc: "Set a keyword, mention it on your Live, and Botyoo DMs everyone who comments it, with your link, prize, or product, while you keep talking.",
        visual: {
          kind: "flow",
          label: "IG Live flow",
          steps: [
            { label: "Comment during IG Live", sublabel: "Keyword: BUY", tone: "trigger" },
            { label: "Send welcome DM", sublabel: '"Thanks for joining! Tap below 👇"', tone: "action" },
            { label: "Send product link", sublabel: '"Grab it before it\'s gone 🛍️"', tone: "convert" },
            { label: "Follow-up in 2 hours", sublabel: '"Still interested? Stock is moving 🔥"', tone: "action" },
          ],
          footer: { left: "Fires per comment", right: "No manual replies" },
        },
      },
      {
        title: "Set keywords for any live moment",
        desc: "Run a quiz, a flash sale, or a giveaway, each with its own keyword and its own automated response.",
        visual: {
          kind: "tags",
          label: "Live keywords",
          subtitle: "Each triggers its own DM",
          segments: [
            { label: '"BUY"', count: "product link" },
            { label: '"WIN"', count: "giveaway" },
            { label: '"QUIZ"', count: "quiz answer" },
            { label: '"DROP"', count: "waitlist" },
          ],
          footer: { left: "Live now", right: "Auto-replying" },
        },
      },
      {
        title: "See results roll in, live",
        desc: "Watch DMs sent, links clicked, and sales captured update in real time, so you know your Live is converting before you even sign off.",
        visual: {
          kind: "stats",
          label: "Live session",
          subtitle: "Product drop · 1,240 viewers",
          stats: [
            { value: "612", label: "DMs sent" },
            { value: "58%", label: "Clicked" },
            { value: "143", label: "Sales" },
          ],
          bars: [
            { label: "Commented keyword", pct: 71 },
            { label: "Opened DM", pct: 88 },
            { label: "Clicked link", pct: 58 },
            { label: "Purchased", pct: 23 },
          ],
        },
      },
    ],
    useCasesHeading: "How can I use IG Live automation?",
    useCasesSub: "Turn live attention into leads, sales, and engagement, all at once.",
    useCases: [
      { title: "Sell products live", desc: "Drop a keyword, send the product link instantly, and follow up with non-buyers." },
      { title: "Run live giveaways", desc: "Confirm entries, collect emails, and announce winners automatically." },
      { title: "Gamify with quizzes", desc: "Reward correct answers with a prize link to drive massive engagement." },
      { title: "Build a launch waitlist", desc: "Capture interested viewers during a teaser Live and DM them on drop day." },
    ],
    tools: [
      { title: "Live keyword triggers", desc: "Fire a DM for any keyword commented during your Live.", icon: "bolt" },
      { title: "Instant product links", desc: "Send checkout or offer links the moment someone comments.", icon: "send" },
      { title: "Follow-up sequences", desc: "Nudge non-buyers automatically over the next few hours.", icon: "flow" },
      { title: "Live analytics", desc: "Track DMs, clicks, and sales as they happen.", icon: "chart" },
    ],
    stepsHeading: "Set up your Live automation in minutes",
    stepsSub: "Turn every Live into a sales engine.",
    steps: [
      { title: "Pick the IG Live trigger", desc: "Choose the IG Live trigger and set your keyword." },
      { title: "Design your DM", desc: "Write the message and add your link, prize, or product." },
      { title: "Add follow-ups", desc: "Set automatic nudges for people who don't act right away." },
      { title: "Go live and convert", desc: "Mention the keyword on your Live and watch the DMs fire." },
    ],
    benefitsHeading: "Why creators automate IG Live",
    benefits: [
      { title: "Capture every lead", desc: "Comments fly by fast, Botyoo replies to all of them instantly.", icon: "eye" },
      { title: "Sell in the moment", desc: "Send links while attention and excitement are at their peak.", icon: "bolt" },
      { title: "Stay present", desc: "Keep talking to your audience while automation handles the DMs.", icon: "clock" },
    ],
    faqs: [
      { q: "How does IG Live comment automation work?", a: "You set a keyword and mention it during your Live. When viewers comment that keyword, Botyoo instantly sends them a DM with your link, prize, or product, no manual replies needed." },
      { q: "Can I run a giveaway during a Live?", a: "Yes. Use a keyword like 'WIN' to confirm entries, collect emails, and follow up with winners automatically." },
      { q: "Can I use different keywords in one Live?", a: "Yes. You can map several keywords to different DM flows, so 'BUY' and 'QUIZ' each trigger their own response." },
      { q: "Will it slow down during a busy Live?", a: "No. Botyoo sends DMs automatically at scale, so even a flood of comments all get a response." },
      { q: "Is it safe for my account?", a: "Yes. Botyoo is a Meta Tech Provider on the official API, so Live automations follow Instagram's policies." },
    ],
    cta: "Turn your next IG Live into a sales engine.",
  },
  {
    slug: "story-replies",
    eyebrow: "Story Replies",
    title: "Auto-DM everyone who",
    highlight: "replies to your story",
    description:
      "Story replies and reactions are pure intent. Botyoo instantly DMs everyone who engages with your story, delivering your link, offer, or freebie before the moment passes.",
    featuresHeading: "What is story reply automation?",
    featuresSub: "When someone reacts to your story, they're raising a hand. Answer it instantly.",
    features: [
      {
        title: "Reply to every reaction and DM",
        desc: "Whether someone reacts with an emoji or types a reply, Botyoo follows up automatically with the link, freebie, or next step you set.",
        visual: {
          kind: "flow",
          label: "Story reply flow",
          steps: [
            { label: "Someone reacts or replies to your Story", tone: "trigger" },
            { label: "Send a DM", sublabel: '"Thanks for replying! Here\'s the link 🎁"', tone: "action" },
            { label: "Tag the contact", sublabel: "📁 Story engagers", tone: "action" },
            { label: "Send your offer", tone: "convert" },
          ],
          footer: { left: "High-intent leads", right: "Instant reply" },
        },
      },
      {
        title: "Trigger on emojis or keywords",
        desc: "Fire your flow for a specific emoji reaction, a keyword reply, or any engagement at all, you decide.",
        visual: {
          kind: "tags",
          label: "Story triggers",
          subtitle: "Reply matches that fire a DM",
          segments: [
            { label: "🔥 reaction", count: "emoji" },
            { label: '"LINK"', count: "keyword" },
            { label: '"ME"', count: "keyword" },
            { label: "Any reply", count: "fallback" },
          ],
          footer: { left: "Active on all stories", right: "24/7" },
        },
      },
      {
        title: "Deliver value in seconds",
        desc: "Send the resource they wanted, capture an email, and move them into your funnel while their interest is still warm.",
        visual: {
          kind: "chat",
          label: "Story reply DM",
          bubbles: [
            { from: "them", text: "🔥", initials: "A" },
            { from: "me", text: "Glad you're into it! Here's the link you wanted 👉 botyoo.com/yes" },
            { from: "me", text: "Want the bonus too? Drop your email 📧" },
          ],
          footer: { left: "Tagged: Story engager", right: "Link sent ✓" },
        },
      },
    ],
    useCasesHeading: "How can I use story reply automation?",
    useCasesSub: "Convert your most engaged viewers before the story disappears.",
    useCases: [
      { title: "Deliver a link or freebie", desc: "Send the resource you teased in your story to everyone who replies." },
      { title: "Run a poll-to-DM", desc: "Follow up on story polls and questions with a tailored DM." },
      { title: "Capture warm leads", desc: "Collect emails from the followers most engaged with your content." },
      { title: "Drive offers and drops", desc: "Tease a product in your story and auto-send the link to repliers." },
    ],
    tools: [
      { title: "Reaction & reply triggers", desc: "Fire DMs from emoji reactions or keyword replies to your stories.", icon: "bolt" },
      { title: "Instant link delivery", desc: "Send your offer or resource the moment someone engages.", icon: "send" },
      { title: "In-DM lead capture", desc: "Collect emails and details inside the conversation.", icon: "form" },
      { title: "Auto-tagging", desc: "Segment story engagers for future campaigns.", icon: "tag" },
    ],
    stepsHeading: "Set up story reply automation in minutes",
    stepsSub: "Turn story engagement into leads on autopilot.",
    steps: [
      { title: "Pick the story trigger", desc: "Choose reaction, keyword, or any reply to fire your flow." },
      { title: "Design your DM", desc: "Write the message and add your link, freebie, or button." },
      { title: "Add capture and tags", desc: "Collect emails and segment engagers automatically." },
      { title: "Go live and track", desc: "Activate and watch warm leads roll into your CRM." },
    ],
    benefitsHeading: "Why creators automate story replies",
    benefits: [
      { title: "Catch high intent", desc: "Story repliers are your warmest audience, reply before they cool off.", icon: "eye" },
      { title: "Grow faster", desc: "Capture emails and follows from every engaged viewer.", icon: "trend" },
      { title: "Save hours", desc: "Stop replying to story DMs one by one, automate the whole thing.", icon: "clock" },
    ],
    faqs: [
      { q: "How does story reply automation work?", a: "When someone reacts to or replies to your story, Botyoo automatically sends them a DM with the link, freebie, or message you set, matched to the emoji or keyword they used." },
      { q: "Can I trigger on a specific emoji?", a: "Yes. You can fire your flow on a specific emoji reaction, a keyword reply, or any reply at all." },
      { q: "Can I capture emails from story replies?", a: "Yes. Your DM flow can ask for an email, save it to the contact's profile, and sync it to your email tool." },
      { q: "Does it work on every story?", a: "You choose. Run it across all your stories or only the ones where you've teased an offer." },
      { q: "Is it safe for my account?", a: "Yes. Botyoo uses Instagram's official Messaging API as a Meta Tech Provider, so it stays within policy." },
    ],
    cta: "Turn story replies into leads, instantly.",
  },
  {
    slug: "click-to-dm-ads",
    eyebrow: "Click-to-DM Ads",
    title: "Turn ad clicks into",
    highlight: "DM conversations",
    description:
      "Connect your Instagram click-to-DM ads to Botyoo. Everyone who taps your ad lands in an automated flow that qualifies, captures, and converts, so your ad spend actually closes.",
    featuresHeading: "What is click-to-DM ad automation?",
    featuresSub: "Don't pay for clicks that go cold. Greet every ad tap with an instant, converting conversation.",
    features: [
      {
        title: "Greet every ad click instantly",
        desc: "The moment someone taps your click-to-DM ad, Botyoo opens with a welcome message, qualifies them, and guides them to your offer, no waiting, no drop-off.",
        visual: {
          kind: "flow",
          label: "Click-to-DM flow",
          steps: [
            { label: "Someone taps your click-to-DM ad", tone: "trigger" },
            { label: "Send welcome message", sublabel: '"Hey! Thanks for your interest 👋"', tone: "action" },
            { label: "Qualify + collect email", sublabel: "What are you looking for?", tone: "action", branches: ["Pricing", "Demo"] },
            { label: "Send the offer link", tone: "convert" },
          ],
          footer: { left: "Replies in seconds", right: "Lead captured" },
        },
      },
      {
        title: "Connect any campaign",
        desc: "Route different ads into different flows, so a pricing ad and a freebie ad each get their own tailored conversation.",
        visual: {
          kind: "tags",
          label: "Connected ads",
          subtitle: "Each routes to its own flow",
          segments: [
            { label: "Spring sale ad", count: "live" },
            { label: "Freebie lead ad", count: "live" },
            { label: "Demo booking ad", count: "live" },
            { label: "Retargeting ad", count: "live" },
          ],
          footer: { left: "4 campaigns connected", right: "Always on" },
        },
      },
      {
        title: "Prove your ad spend pays off",
        desc: "Track cost per lead, qualified rate, and conversions per campaign, so you know exactly which ads turn clicks into customers.",
        visual: {
          kind: "stats",
          label: "Campaign performance",
          subtitle: "Spring sale ad · 2,400 clicks",
          stats: [
            { value: "1.9k", label: "Replied" },
            { value: "64%", label: "Qualified" },
            { value: "$3.10", label: "Cost / lead" },
          ],
          bars: [
            { label: "Tapped ad", pct: 100 },
            { label: "Replied", pct: 79 },
            { label: "Qualified", pct: 64 },
            { label: "Converted", pct: 27 },
          ],
        },
      },
    ],
    useCasesHeading: "How can I use click-to-DM ads?",
    useCasesSub: "Make paid clicks convert by meeting them with an instant conversation.",
    useCases: [
      { title: "Qualify paid leads", desc: "Ask a couple of questions before routing hot leads to your offer." },
      { title: "Capture emails from ads", desc: "Collect contact details in the DM and sync them to your CRM." },
      { title: "Book calls from ads", desc: "Send your booking link automatically once a lead is qualified." },
      { title: "Retarget warm clickers", desc: "Tag everyone who engaged and follow up with a DM campaign later." },
    ],
    tools: [
      { title: "Ad-click trigger", desc: "Start a flow the instant someone taps your click-to-DM ad.", icon: "click" },
      { title: "Lead qualification", desc: "Ask questions and branch based on what people answer.", icon: "flow" },
      { title: "In-DM lead capture", desc: "Collect emails and phone numbers inside the conversation.", icon: "form" },
      { title: "Campaign tracking", desc: "Measure cost per lead and conversions per ad.", icon: "chart" },
    ],
    stepsHeading: "Connect your ads in minutes",
    stepsSub: "Turn paid clicks into qualified conversations.",
    steps: [
      { title: "Pick the click-to-DM trigger", desc: "Choose the click-to-DM ad trigger inside Botyoo." },
      { title: "Design your flow", desc: "Write your welcome message, qualifying questions, and offer." },
      { title: "Connect your campaign", desc: "Link your Instagram ad so taps land straight in the flow." },
      { title: "Go live and track", desc: "Launch and watch qualified leads and conversions come in." },
    ],
    benefitsHeading: "Why advertisers run click-to-DM with Botyoo",
    benefits: [
      { title: "Higher conversion", desc: "An instant conversation converts far better than a static landing page.", icon: "trend" },
      { title: "Lower cost per lead", desc: "Qualify and capture in the DM so you stop paying for clicks that bounce.", icon: "tag" },
      { title: "Full attribution", desc: "See exactly which ads turn into leads and sales.", icon: "chart" },
    ],
    faqs: [
      { q: "What is a click-to-DM ad?", a: "It's an Instagram ad that opens a Direct Message when someone taps it, instead of sending them to a website. Botyoo automates the conversation that follows so every click is greeted and qualified instantly." },
      { q: "How does Botyoo connect to my ads?", a: "You set up a click-to-DM ad trigger in Botyoo and connect your campaign, so anyone who taps the ad lands directly in your automated DM flow." },
      { q: "Can I qualify leads before sending my offer?", a: "Yes. Your flow can ask qualifying questions and branch, routing hot leads to a booking or checkout link and others to a nurture path." },
      { q: "Can I track cost per lead?", a: "Yes. Botyoo tracks replies, qualified rate, and conversions per campaign so you can measure what each ad actually delivers." },
      { q: "Is it safe for my account?", a: "Yes. Botyoo is a Meta Tech Provider using the official Messaging API, so click-to-DM automations stay within Instagram's policies." },
    ],
    cta: "Turn your ad clicks into booked, qualified leads.",
  },
]
