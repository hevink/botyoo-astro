// Central template registry for the public landing site.
// Mirrors the automation-templates in the Next.js app but is leaner:
// only the fields needed to render the public templates pages.

export type TriggerMode =
  | 'COMMENT'
  | 'STORY'
  | 'DM'
  | 'STORY_MENTION'
  | 'SHARE'
  | 'IG_LIVE'
  | 'UNIVERSAL_COMMENT'
  | 'CLICK_TO_DM'

export type TemplateBadge = 'instant' | 'flow-builder'

export type TemplateSection =
  | 'Engage your audience'
  | 'Get more leads'
  | 'Convert & sell'
  | 'Grow your audience'

export type StepKind =
  | 'trigger'
  | 'comment-reply'
  | 'opening'
  | 'follow-gate'
  | 'email-collect'
  | 'message'
  | 'conversion-link'
  | 'like-message'
  | 'contact-folder'
  | 'follow-up'
  | 'condition'
  | 'ask-question'
  | 'hide-comment'
  | 'contact-status'

export interface FlowStep {
  kind: StepKind
  label: string
  sublabel?: string
  /** For branching steps, shown as two outgoing paths */
  branches?: [string, string]
}

export interface Template {
  id: string
  name: string
  description: string
  automationMode: TriggerMode
  badge: TemplateBadge
  section: TemplateSection
  tags: string[]
  about?: string
  bestFor?: string[]
  /** Visual preview steps shown on the detail page */
  steps?: FlowStep[]
}

// Trigger mode labels
export const triggerLabels: Record<TriggerMode, string> = {
  COMMENT: 'Comment',
  STORY: 'Story reply',
  DM: 'Direct message',
  STORY_MENTION: 'Story mention',
  SHARE: 'Post share',
  IG_LIVE: 'IG Live',
  UNIVERSAL_COMMENT: 'All posts',
  CLICK_TO_DM: 'Click-to-DM ad',
}

// Accent colours per trigger, keep in sync with the flow builder
export const triggerColors: Record<TriggerMode, string> = {
  COMMENT: '#3b82f6',
  STORY: '#8b5cf6',
  DM: '#06b6d4',
  STORY_MENTION: '#f59e0b',
  SHARE: '#10b981',
  IG_LIVE: '#ef4444',
  UNIVERSAL_COMMENT: '#6366f1',
  CLICK_TO_DM: '#ec4899',
}

export const templates: Template[] = [
  // ── Engage your audience ──────────────────────────────────────
  {
    id: 'auto-like-positive',
    name: 'Auto-like Positive Messages',
    description: 'Like kind DMs, add fans to a Supporters folder, and send a thank-you reply automatically.',
    automationMode: 'DM',
    badge: 'flow-builder',
    section: 'Engage your audience',
    tags: ['engagement', 'fans', 'dm'],
    about: 'Automatically detect warm, positive DMs and respond with a personalised thank-you. The contact is added to a Supporters folder so you can target them in future campaigns.',
    bestFor: ['Creators', 'Coaches', 'Personal brands'],
    steps: [
      { kind: 'trigger', label: 'Someone sends you a DM', sublabel: 'Keywords: amazing, love ❤️' },
      { kind: 'like-message', label: 'Like the message' },
      { kind: 'contact-folder', label: 'Add to folder', sublabel: '📁 Supporters' },
      { kind: 'message', label: 'Send thank-you reply', sublabel: '"Thanks for the kind words! 💛"' },
    ],
  },
  {
    id: 'thank-positive-comments',
    name: 'Thank Positive Comments',
    description: 'Auto-reply to positive comments with rotating thank-you variations.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Engage your audience',
    tags: ['engagement', 'comments'],
    about: 'Keep your comment section warm and active. Botyoo detects positive sentiment and rotates through a set of genuine-sounding replies so it never feels robotic.',
    bestFor: ['Creators', 'Brands', 'Influencers'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: amazing, love, great' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Thank you so much! 🙏"' },
      { kind: 'like-message', label: 'Like the comment' },
    ],
  },
  {
    id: 'reply-to-story-mentions',
    name: 'Reply To Story Mentions',
    description: 'Like the mention, tag the contact, and send a personalised thank-you DM automatically.',
    automationMode: 'STORY_MENTION',
    badge: 'flow-builder',
    section: 'Engage your audience',
    tags: ['engagement', 'stories'],
    about: 'Every time someone mentions you in their story, Botyoo likes the post, tags the contact in your CRM, and fires off a heartfelt thank-you DM, all within seconds.',
    bestFor: ['Creators', 'Artists', 'Coaches'],
    steps: [
      { kind: 'trigger', label: 'Someone mentions you in a Story' },
      { kind: 'like-message', label: 'Like the mention' },
      { kind: 'contact-folder', label: 'Tag contact', sublabel: '📁 Brand Fans' },
      { kind: 'message', label: 'Send thank-you DM', sublabel: '"Thanks for the shoutout! ❤️"' },
    ],
  },
  {
    id: 'hide-negative-comments',
    name: 'Hide Negative Comments',
    description: 'Auto-hide spam or toxic comments and tag those users for follow-up.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Engage your audience',
    tags: ['moderation', 'comments'],
    about: 'Keep your posts looking clean. Negative or spammy keywords trigger an automatic hide, and the user is tagged so your team can review or follow up if needed.',
    bestFor: ['Brands', 'E-commerce', 'Creators'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: spam, hate, scam' },
      { kind: 'hide-comment', label: 'Hide the comment' },
      { kind: 'contact-folder', label: 'Tag contact', sublabel: '📁 Flagged' },
    ],
  },
  {
    id: 'build-exclusive-list-flow',
    name: 'Build an Exclusive List',
    description: 'Invite engaged followers into your VIP/Priority list with a simple button-tap flow.',
    automationMode: 'DM',
    badge: 'flow-builder',
    section: 'Engage your audience',
    tags: ['vip', 'list', 'engagement', 'dm'],
    about: 'A single DM keyword opt-in adds the contact to your VIP folder. Use it to segment your most loyal audience for exclusive drops, early access, or private community invites.',
    bestFor: ['Creators', 'Brands', 'E-commerce'],
    steps: [
      { kind: 'trigger', label: 'Someone DMs you', sublabel: 'Keywords: vip, exclusive, join' },
      { kind: 'opening', label: 'Welcome message', sublabel: '"Want early access? Tap below 👇"' },
      { kind: 'contact-folder', label: 'Add to VIP list', sublabel: '📁 VIP Members' },
      { kind: 'message', label: 'Send confirmation', sublabel: '"You\'re in! Welcome to the VIP list 🌟"' },
    ],
  },
  {
    id: 'dm-broadcast-optin',
    name: 'DM Broadcast Opt-in',
    description: "Build a consented subscriber list: one button tap and they're in your exclusive DM updates.",
    automationMode: 'DM',
    badge: 'flow-builder',
    section: 'Engage your audience',
    tags: ['broadcast', 'subscribers', 'dm'],
    about: 'Grow a permission-based subscriber list right inside Instagram DMs. One tap to opt in, instantly added to your broadcast segment.',
    bestFor: ['Creators', 'Brands', 'Newsletters'],
    steps: [
      { kind: 'trigger', label: 'Someone DMs you', sublabel: 'Keywords: subscribe, updates, in' },
      { kind: 'opening', label: 'Opt-in prompt', sublabel: '"Tap below to subscribe to exclusive updates 📬"' },
      { kind: 'contact-folder', label: 'Add to broadcast list', sublabel: '📁 Subscribers' },
      { kind: 'message', label: 'Confirmation sent', sublabel: '"You\'re subscribed! Expect updates soon 🎉"' },
    ],
  },
  {
    id: 'customer-feedback',
    name: 'Collect Customer Feedback',
    description: 'Ask for a rating, collect testimonials from happy customers, and route unhappy ones to your support flow.',
    automationMode: 'DM',
    badge: 'flow-builder',
    section: 'Engage your audience',
    tags: ['feedback', 'reviews', 'support'],
    about: 'Post-purchase or post-event, trigger a 1-question rating flow. Happy customers are nudged to leave a testimonial; unhappy ones are routed to a support message.',
    bestFor: ['E-commerce', 'Coaches', 'Service businesses'],
    steps: [
      { kind: 'trigger', label: 'Someone DMs you', sublabel: 'Keywords: feedback, review' },
      { kind: 'ask-question', label: 'Ask for rating', sublabel: '"How would you rate your experience? 1–5"', branches: ['Happy (4–5 ⭐)', 'Unhappy (1–3 ⭐)'] },
      { kind: 'message', label: 'Send response', sublabel: 'Happy → testimonial ask / Unhappy → support' },
    ],
  },
  // ── Get more leads ────────────────────────────────────────────
  {
    id: 'grow-followers-freebie',
    name: 'Grow Followers with a Freebie',
    description: 'Offer a free guide, template, or ebook gated behind a follow, turning commenters into loyal followers.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Get more leads',
    tags: ['growth', 'followers', 'freebie', 'lead-gen'],
    about: 'Comment a keyword → DM opens → follow gate → freebie delivered. A proven loop that grows your follower count and delivers value at the same time.',
    bestFor: ['Creators', 'Coaches', 'Consultants'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: free, guide, send' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Sent you a DM! 📩"' },
      { kind: 'follow-gate', label: 'Follow gate', sublabel: '"Follow me to unlock your freebie 🔔"' },
      { kind: 'message', label: 'Send freebie link', sublabel: '"Here\'s your free guide! 🎁"' },
    ],
  },
  {
    id: 'get-leads-from-comments-flow',
    name: 'Get Leads From Comments',
    description: 'Turn comments into qualified leads: collect email and deliver a guide automatically.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Get more leads',
    tags: ['lead-gen', 'email', 'comments'],
    about: 'Comment keyword → DM → email collection → lead magnet delivery. Every commenter becomes a trackable lead in your CRM without any manual work.',
    bestFor: ['Coaches', 'Consultants', 'E-commerce'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: info, interested, link' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Sent you a DM! 📩"' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Hey! Tap below to get the details 👇"' },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Drop your email and I\'ll send it over 📧"' },
      { kind: 'message', label: 'Send lead magnet', sublabel: '"Here\'s what you asked for! 🎉"' },
    ],
  },
  {
    id: 'grow-email-list-flow',
    name: 'Grow Your Email List',
    description: 'Collect emails from commenters and deliver a freebie, growing your newsletter automatically.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Get more leads',
    tags: ['email', 'newsletter', 'freebie', 'lead-gen'],
    about: 'Turn every post into a newsletter signup machine. Comment a keyword, receive the freebie, and your email list grows on autopilot.',
    bestFor: ['Creators', 'Bloggers', 'Coaches'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: subscribe, newsletter' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Join my newsletter for weekly tips 📬"' },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Drop your email to subscribe 📧"' },
      { kind: 'message', label: 'Confirmation + freebie', sublabel: '"You\'re in! Here\'s your welcome gift 🎁"' },
    ],
  },
  {
    id: 'get-leads-with-freebies-flow',
    name: 'Get Leads With Freebies',
    description: 'Turn freebie requests into qualified leads: collect email, deliver the guide, tag contacts.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Get more leads',
    tags: ['lead-gen', 'freebie', 'email'],
    about: 'Deliver your lead magnet and capture email in one seamless DM conversation. Contacts are tagged automatically so you can follow up with a targeted campaign.',
    bestFor: ['Coaches', 'Consultants', 'Service businesses'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: free, guide, want' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Your freebie is ready 🎁 Tap below!"' },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Where should I send it? 📧"' },
      { kind: 'contact-folder', label: 'Tag as lead', sublabel: '📁 Leads' },
      { kind: 'message', label: 'Deliver freebie', sublabel: '"Here\'s your guide! Enjoy 🚀"' },
    ],
  },
  {
    id: 'run-giveaway',
    name: 'Run A Giveaway',
    description: 'Grow followers and build your email list with a giveaway: verify follow + collect email via DM.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Get more leads',
    tags: ['giveaway', 'growth', 'email'],
    about: 'Comment to enter, follow gate to qualify, email collection to build your list. Botyoo handles the entire giveaway funnel automatically including winner announcement follow-ups.',
    bestFor: ['E-commerce', 'Creators', 'Brands'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: enter, giveaway, win' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"You\'re entered! Check your DMs 🎉"' },
      { kind: 'follow-gate', label: 'Follow gate', sublabel: '"Follow to qualify for the giveaway 🔔"' },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Drop your email for the winner announcement 📧"' },
      { kind: 'message', label: 'Confirmation', sublabel: '"You\'re officially entered! 🍀 Good luck!"' },
      { kind: 'follow-up', label: 'Follow-up in 2 days', sublabel: '"Winner announced soon, stay tuned! 👀"' },
    ],
  },
  // ── Convert & sell ────────────────────────────────────────────
  {
    id: 'book-more-meetings',
    name: 'Book More Meetings',
    description: 'Convert Instagram DMs into booked calls.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['booking', 'calls', 'comments'],
    about: 'Comment a keyword → qualify intent with a quick question → collect email → send your Calendly or booking link automatically. Turn post reach into booked calls without lifting a finger.',
    bestFor: ['Coaches', 'Consultants', 'Agencies'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: book, call, session' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Glad you\'re interested! Tap below 👇"' },
      { kind: 'ask-question', label: 'Qualify intent', sublabel: '"What are you looking for?"', branches: ['1:1 Coaching', 'Group Program'] },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Drop your email for the booking link 📧"' },
      { kind: 'conversion-link', label: 'Send booking link', sublabel: '"Book your free call 🗓️"' },
    ],
  },
  {
    id: 'get-webinar-signups-flow',
    name: 'Get Webinar Sign-Ups',
    description: 'Turn DMs and comments into webinar registrations: collect emails and send the link.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['webinar', 'lead-gen', 'email', 'creators'],
    about: 'Promote your webinar on any post. Comment → DM → email collected → registration link sent → follow-up reminder fired automatically before the event.',
    bestFor: ['Creators', 'Coaches', 'Educators'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: webinar, register, join' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Sent you the details! 📩"' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Register for the webinar 🎓 Tap below!"' },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Your email for the registration link 📧"' },
      { kind: 'conversion-link', label: 'Send registration link', sublabel: '"You\'re registered! Add to calendar 🗓️"' },
      { kind: 'follow-up', label: 'Reminder before event', sublabel: '"Webinar starts soon! Here\'s the link 🔗"' },
    ],
  },
  {
    id: 'gamify-ig-lives',
    name: 'Gamify IG Lives',
    description: 'Run live quizzes with prizes: engage viewers, reward correct answers, and send prize links.',
    automationMode: 'IG_LIVE',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['ig-live', 'engagement', 'gamification'],
    about: 'Ask a question during your Live, trigger a flow for anyone who comments the right answer, and automatically send the prize link. Drives massive live engagement.',
    bestFor: ['Creators', 'Artists', 'Brands'],
    steps: [
      { kind: 'trigger', label: 'Comment during IG Live', sublabel: 'Keywords: correct answer keyword' },
      { kind: 'message', label: 'Congrats DM', sublabel: '"You got it right! 🎉 Here\'s your prize:"' },
      { kind: 'conversion-link', label: 'Send prize link', sublabel: '"Claim your reward 🏆"' },
    ],
  },
  {
    id: 'sell-with-ig-lives',
    name: 'Sell With IG Lives',
    description: 'Turn every Live into a sales engine, show your product, send the link, and follow up automatically.',
    automationMode: 'IG_LIVE',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['ig-live', 'ecommerce', 'sales'],
    about: 'Live viewers comment a keyword, Botyoo fires the DM with your product link, and follow-ups nudge non-buyers over the next 24 hours.',
    bestFor: ['E-commerce', 'Creators', 'Brands'],
    steps: [
      { kind: 'trigger', label: 'Comment during IG Live', sublabel: 'Keywords: buy, link, price, want' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Thanks for joining! Tap for the product link 👇"' },
      { kind: 'conversion-link', label: 'Send product link', sublabel: '"Grab it before it\'s gone 🛍️"' },
      { kind: 'follow-up', label: 'Follow-up in 2 hours', sublabel: '"Still interested? Stock is moving fast 🔥"' },
    ],
  },
  {
    id: 'sell-your-courses',
    name: 'Sell Your Courses',
    description: 'Sell your course through a DM funnel, tag leads, send the link, and nudge non-clickers.',
    automationMode: 'DM',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['course', 'sales', 'dm'],
    about: 'DM keyword → qualify intent → send enrolment link → follow up with non-clickers automatically. A complete sales funnel built entirely inside Instagram.',
    bestFor: ['Educators', 'Coaches', 'Creators'],
    steps: [
      { kind: 'trigger', label: 'Someone DMs you', sublabel: 'Keywords: course, enroll, join' },
      { kind: 'opening', label: 'Intro message', sublabel: '"Interested in the course? Here\'s what\'s inside 👇"' },
      { kind: 'contact-folder', label: 'Tag as lead', sublabel: '📁 Course Leads' },
      { kind: 'conversion-link', label: 'Send enrolment link', sublabel: '"Enrol now 🚀"' },
      { kind: 'follow-up', label: 'Follow-up nudge', sublabel: '"Did you check out the course? 👀"' },
    ],
  },
  {
    id: 'share-affiliate-links',
    name: 'Share Affiliate Links',
    description: 'Deliver your affiliate link via DM, track clicks, and tag buyers automatically.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['affiliate', 'creators', 'link'],
    about: 'Comment a keyword → affiliate link delivered → contact tagged as "Interested". Scale your affiliate income without managing a single DM manually.',
    bestFor: ['Creators', 'Influencers', 'Affiliates'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: link, shop, code' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Sent you the link! 🛍️"' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Here\'s the product I mentioned 💫 Tap below!"' },
      { kind: 'contact-folder', label: 'Tag as interested', sublabel: '📁 Interested' },
      { kind: 'conversion-link', label: 'Send affiliate link', sublabel: '"Shop here 🔗"' },
    ],
  },
  {
    id: 'get-events-signups',
    name: 'Get Events Sign-Ups',
    description: 'Collect email + phone from commenters, confirm their spot, and send the calendar link.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['event', 'lead-gen', 'email'],
    about: 'Run in-person or virtual event sign-ups entirely through Instagram DMs. Collect details, confirm attendance, send the calendar invite, and remind attendees automatically.',
    bestFor: ['Event organisers', 'Coaches', 'Creators'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: rsvp, event, join' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Excited you want to join! 🎉 Tap below"' },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Your email for the calendar invite 📧"' },
      { kind: 'conversion-link', label: 'Send event link', sublabel: '"You\'re in! 🎟️ Add to calendar"' },
      { kind: 'follow-up', label: 'Reminder 1 day before', sublabel: '"Event is tomorrow! See you there 👋"' },
    ],
  },
  {
    id: 'qualify-leads',
    name: 'Qualify Leads',
    description: 'Collect goals via DM, send personalised tips, then route to book a call or join your community.',
    automationMode: 'DM',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['coaching', 'lead-gen', 'qualification'],
    about: 'A multi-step qualification flow that segments leads by their goal, sends a tailored message, and routes hot leads to a booking link while cooler leads get a nurture sequence.',
    bestFor: ['Coaches', 'Consultants', 'Agencies'],
    steps: [
      { kind: 'trigger', label: 'Someone DMs you', sublabel: 'Keywords: help, coaching, interested' },
      { kind: 'ask-question', label: 'Qualify goal', sublabel: '"What\'s your main goal right now?"', branches: ['Book a call', 'Join community'] },
      { kind: 'contact-folder', label: 'Tag by goal', sublabel: '📁 Hot Lead / Nurture' },
      { kind: 'conversion-link', label: 'Send next step', sublabel: 'Book call or community link' },
    ],
  },
  {
    id: 'flash-sale',
    name: 'Flash Sale / Limited Offer',
    description: 'Create urgency with a time-sensitive offer, comment keyword → link with 2 escalating follow-up nudges.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['sales', 'ecommerce', 'urgency'],
    about: 'Perfect for product drops or time-limited discounts. Comment triggers the offer link, then two automated follow-ups escalate urgency over the next few hours.',
    bestFor: ['E-commerce', 'Creators', 'Brands'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: sale, deal, want' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Check your DMs for the deal! 🔥"' },
      { kind: 'conversion-link', label: 'Send offer link', sublabel: '"Limited time, grab it now ⏳"' },
      { kind: 'follow-up', label: 'Follow-up #1 (2h)', sublabel: '"Still thinking? Offer ends soon ⚡"' },
      { kind: 'follow-up', label: 'Follow-up #2 (24h)', sublabel: '"Last chance! 🚨 Almost gone"' },
    ],
  },
  {
    id: 'collab-pitch',
    name: 'Collaboration / Podcast Pitch',
    description: 'Qualify collab requests, collect audience size, type, email, then book a call or politely decline.',
    automationMode: 'DM',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['collab', 'creators', 'podcast'],
    about: 'Stop fielding collab requests manually. A structured DM flow qualifies pitches by audience size and fit, then routes keepers to a booking link and others to a polite decline.',
    bestFor: ['Creators', 'Podcasters', 'Influencers'],
    steps: [
      { kind: 'trigger', label: 'Someone DMs you', sublabel: 'Keywords: collab, podcast, partner' },
      { kind: 'ask-question', label: 'Qualify fit', sublabel: '"What\'s your audience size?"', branches: ['Good fit', 'Not a fit'] },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Drop your email and I\'ll follow up 📧"' },
      { kind: 'conversion-link', label: 'Send booking link', sublabel: '"Book a collab call 🗓️"' },
    ],
  },
  {
    id: 'job-application',
    name: 'Job Application / Hiring',
    description: 'Accept job applications via DM, collect name + email, tag as Applicant, send confirmation.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Convert & sell',
    tags: ['hiring', 'recruitment', 'applications'],
    about: 'Post a job vacancy, have candidates comment a keyword, and let Botyoo collect their details, tag them as Applicant, and send a confirmation message automatically.',
    bestFor: ['Brands', 'Agencies', 'Businesses'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: apply, job, hiring' },
      { kind: 'opening', label: 'Application form DM', sublabel: '"Tap below to start your application 📝"' },
      { kind: 'email-collect', label: 'Collect email', sublabel: '"Your email for the application 📧"' },
      { kind: 'contact-folder', label: 'Tag as applicant', sublabel: '📁 Applicants' },
      { kind: 'message', label: 'Confirmation sent', sublabel: '"Application received! We\'ll be in touch 🙌"' },
    ],
  },
  // ── Grow your audience ────────────────────────────────────────
  {
    id: 'grow-youtube',
    name: 'Grow Your YouTube',
    description: 'Turn IG engagement into YouTube subscribers.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Grow your audience',
    tags: ['youtube', 'creators', 'growth'],
    about: 'Comment keyword → DM with your latest video link → follow-up nudge to subscribe. Every post becomes a funnel to grow your YouTube channel.',
    bestFor: ['Creators', 'YouTubers', 'Educators'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: video, youtube, watch' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Sent you the video! 🎬"' },
      { kind: 'conversion-link', label: 'Send YouTube link', sublabel: '"Watch + subscribe here ▶️"' },
      { kind: 'follow-up', label: 'Follow-up nudge', sublabel: '"Subscribe so you don\'t miss the next one 🔔"' },
    ],
  },
  {
    id: 'grow-podcast',
    name: 'Grow Your Podcast',
    description: 'Turn IG engagement into podcast listeners.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Grow your audience',
    tags: ['podcast', 'creators', 'growth'],
    about: 'Share your latest episode link automatically to anyone who comments a keyword. Follow-up nudge encourages them to subscribe on their favourite platform.',
    bestFor: ['Podcasters', 'Creators', 'Educators'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: podcast, episode, listen' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Sent you the episode! 🎙️"' },
      { kind: 'conversion-link', label: 'Send episode link', sublabel: '"Listen now 🎧"' },
      { kind: 'follow-up', label: 'Subscribe nudge', sublabel: '"Enjoying it? Subscribe for more episodes 🔔"' },
    ],
  },
  {
    id: 'grow-tiktok',
    name: 'Grow Your TikTok',
    description: 'Turn IG engagement into TikTok followers.',
    automationMode: 'COMMENT',
    badge: 'flow-builder',
    section: 'Grow your audience',
    tags: ['tiktok', 'creators', 'growth'],
    about: 'Drive your Instagram audience to TikTok with an automated comment → DM flow that delivers your profile link and encourages a follow.',
    bestFor: ['Creators', 'Brands', 'Artists'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: tiktok, link, follow' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Sent you my TikTok link! 📱"' },
      { kind: 'conversion-link', label: 'Send TikTok link', sublabel: '"Follow me on TikTok 🎵"' },
    ],
  },
  // ── Instant / sidebar templates ───────────────────────────────
  {
    id: 'dm-from-comments',
    name: 'DM from Comments',
    description: 'Send links instantly when people comment on your post or reel.',
    automationMode: 'COMMENT',
    badge: 'instant',
    section: 'Convert & sell',
    tags: ['comments', 'links', 'instant'],
    about: 'The simplest automation. Someone comments → they get a DM with your link immediately. No flow needed, just set a keyword and a message.',
    bestFor: ['Creators', 'Brands', 'Anyone'],
    steps: [
      { kind: 'trigger', label: 'Someone comments on your post', sublabel: 'Keywords: link, send, yes' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Sent you a DM! 📩"' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Tap below to get the link 👇"' },
      { kind: 'message', label: 'Send link', sublabel: '"Here\'s what you asked for! 🔗"' },
    ],
  },
  {
    id: 'dm-from-stories',
    name: 'DM from Stories',
    description: 'Send links instantly when users react or reply to your Stories.',
    automationMode: 'STORY',
    badge: 'instant',
    section: 'Convert & sell',
    tags: ['stories', 'links', 'instant'],
    about: 'Story engagement is high-intent. Automatically DM everyone who reacts or replies to a story with your offer, link, or resource.',
    bestFor: ['Creators', 'E-commerce', 'Coaches'],
    steps: [
      { kind: 'trigger', label: 'Someone reacts or replies to your Story' },
      { kind: 'message', label: 'Send link DM', sublabel: '"Thanks for your story engagement! Here\'s the link 🎁"' },
    ],
  },
  {
    id: 'respond-all-dms',
    name: 'Respond to all DMs',
    description: 'Auto-send customised replies when people DM you.',
    automationMode: 'DM',
    badge: 'instant',
    section: 'Engage your audience',
    tags: ['dm', 'instant', 'engagement'],
    about: 'Never leave a DM unanswered. Set a personalised auto-reply for any incoming DM, keyword-filtered or catch-all.',
    bestFor: ['Creators', 'Brands', 'Businesses'],
    steps: [
      { kind: 'trigger', label: 'Someone DMs you', sublabel: 'Any keyword or catch-all' },
      { kind: 'message', label: 'Auto-reply sent', sublabel: '"Hey! Thanks for the message 😊 I\'ll be in touch!"' },
    ],
  },
  {
    id: 'story-mention',
    name: 'DM from Story Mentions',
    description: 'Auto-reply when someone mentions you in their Story.',
    automationMode: 'STORY_MENTION',
    badge: 'instant',
    section: 'Engage your audience',
    tags: ['stories', 'mention', 'instant'],
    about: 'Thank people instantly when they shout you out in their stories. A personal, timely reply builds genuine community.',
    bestFor: ['Creators', 'Brands', 'Artists'],
    steps: [
      { kind: 'trigger', label: 'Someone mentions you in a Story' },
      { kind: 'message', label: 'Thank-you DM', sublabel: '"Thanks so much for the mention! 🙏❤️"' },
    ],
  },
  {
    id: 'ig-live',
    name: 'DM from IG Live',
    description: 'Send DMs when viewers comment during your Instagram Live.',
    automationMode: 'IG_LIVE',
    badge: 'instant',
    section: 'Convert & sell',
    tags: ['ig-live', 'instant', 'links'],
    about: 'Monetise every Live. Viewers comment a keyword and instantly receive your product link, offer, or resource in their DMs, while you keep talking.',
    bestFor: ['Creators', 'E-commerce', 'Coaches'],
    steps: [
      { kind: 'trigger', label: 'Comment during IG Live', sublabel: 'Keywords: link, buy, send' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Thanks for joining! Tap below for the link 👇"' },
      { kind: 'message', label: 'Send link', sublabel: '"Here\'s the link I mentioned! 🔗"' },
    ],
  },
  {
    id: 'universal-comment',
    name: 'DM from All Posts',
    description: 'Auto-reply to comments on any of your posts automatically.',
    automationMode: 'UNIVERSAL_COMMENT',
    badge: 'instant',
    section: 'Engage your audience',
    tags: ['comments', 'instant', 'all-posts'],
    about: 'One automation covers every post. No need to set up per-post rules, Botyoo replies to every qualifying comment across your entire feed.',
    bestFor: ['Brands', 'Creators', 'Businesses'],
    steps: [
      { kind: 'trigger', label: 'Comment on any of your posts', sublabel: 'Any keyword or catch-all' },
      { kind: 'comment-reply', label: 'Reply to comment', sublabel: '"Check your DMs! 📩"' },
      { kind: 'opening', label: 'Welcome DM', sublabel: '"Thanks for commenting! Tap below 👇"' },
      { kind: 'message', label: 'Send details', sublabel: '"Here\'s what you asked for 🎉"' },
    ],
  },
]

// Unique section list in display order
export const sections: TemplateSection[] = [
  'Engage your audience',
  'Get more leads',
  'Convert & sell',
  'Grow your audience',
]
