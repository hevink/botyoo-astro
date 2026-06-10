export interface SolutionUseCase {
  title: string
  desc: string
}

export interface SolutionStep {
  title: string
  desc: string
}

export interface SolutionFAQ {
  q: string
  a: string
}

export interface Solution {
  slug: string
  tag: string
  title: string
  description: string
  steps: SolutionStep[]
  useCases: SolutionUseCase[]
  faqs: SolutionFAQ[]
  cta: string
}

export const solutions: Solution[] = [
  {
    slug: "creators",
    tag: "For Creators",
    title: "Turn content into conversions — on autopilot",
    description:
      "For creators who are done spending hours on DMs. Botyoo automates your IG funnel so you can stay focused on making content.",
    steps: [
      {
        title: "Build your email list",
        desc: "Turn every comment and story reply into a captured lead without forms. Botyoo collects the info right inside the DM conversation.",
      },
      {
        title: "Automate your funnel",
        desc: "Instantly deliver freebies, booking links, and offers via DM — triggered by keywords, story replies, or post comments.",
      },
      {
        title: "Drive more conversions",
        desc: "Qualify, tag, and follow up with your most engaged followers automatically. Your funnel runs while you're filming.",
      },
    ],
    useCases: [
      {
        title: "Freebie delivery",
        desc: "Send your PDF, guide, or checklist automatically to anyone who comments or replies to your story.",
      },
      {
        title: "Link in DM",
        desc: "Promote any link — course, affiliate, shop — directly in DMs so followers don't need to visit your bio.",
      },
      {
        title: "Story reply automation",
        desc: "Respond to every story interaction with a personalized DM that moves people toward your offer.",
      },
      {
        title: "Comment-to-DM lead capture",
        desc: "Turn post comments into private DM conversations and collect emails, names, or any lead data you need.",
      },
    ],
    faqs: [
      {
        q: "How do creators use Instagram DM automation?",
        a: "Creators use Botyoo to automatically reply to comments and story interactions with DMs that deliver freebies, share links, or capture email addresses. It runs 24/7 so every piece of content keeps working after you post it.",
      },
      {
        q: "Can I automatically send a freebie through Instagram DMs?",
        a: "Yes. Set a keyword or comment trigger, and Botyoo instantly sends your freebie link in a DM to anyone who matches it. No manual follow-up needed.",
      },
      {
        q: "How do I grow my email list with Instagram DMs?",
        a: "Botyoo can ask for an email address inside a DM conversation and send that data directly to your email platform or Google Sheet. Your list grows with every post that gets engagement.",
      },
      {
        q: "How do I convert Instagram followers into buyers?",
        a: "Connect your offer to a comment or story trigger. Botyoo qualifies the lead with a short DM flow and delivers your payment or booking link when they're ready. Most creators see conversions within the first 24 hours of going live.",
      },
    ],
    cta: "Start automating your Instagram funnel today.",
  },
  {
    slug: "coaches",
    tag: "For Coaches & Experts",
    title: "Get more bookings and clients from Instagram DMs",
    description:
      "Turn your Instagram audience into booked calls and course buyers — without living in your DMs.",
    steps: [
      {
        title: "Capture qualified leads",
        desc: "Botyoo turns comments, DMs, and story replies into leads and booked calls — every time, not just when you're online.",
      },
      {
        title: "Automate qualification",
        desc: "Comment-to-DM flows deliver freebies, answer questions, and ask qualifying questions before sending your booking link. Only serious prospects reach your calendar.",
      },
      {
        title: "See every lead in your funnel",
        desc: "Know exactly who grabbed a freebie, booked a call, or is ready to buy. No more guessing where a follower is in your pipeline.",
      },
    ],
    useCases: [
      {
        title: "Freebie → nurture → high-ticket offer",
        desc: "Deliver a lead magnet, follow up over time, and present your flagship offer at exactly the right moment.",
      },
      {
        title: "Book sales calls from Instagram",
        desc: "Send your Calendly or booking link automatically after a short qualifying exchange — no manual DM required.",
      },
      {
        title: "Fill webinars and live trainings",
        desc: "Promote registrations via DM campaigns and comment triggers. Remind registrants automatically before you go live.",
      },
      {
        title: "Revive old leads with win-back campaigns",
        desc: "Re-engage followers who grabbed your freebie months ago but never booked. One DM campaign can reopen dozens of conversations.",
      },
    ],
    faqs: [
      {
        q: "How do coaches get clients from Instagram DMs?",
        a: "Botyoo lets you set up flows that respond instantly to comments or story interactions, qualify the lead with a few questions, and send your booking link — all without you being in the app. Coaches typically book their first call within a day of activating.",
      },
      {
        q: "Can I automatically send my Calendly link in DMs?",
        a: "Yes. Add your Calendly URL to a DM flow and it gets sent automatically once someone expresses interest or completes a qualifying question. You only get on calls with people who are already pre-sold.",
      },
      {
        q: "How do I qualify leads through Instagram DMs?",
        a: "Build a short flow that asks 1–2 qualifying questions before delivering your booking link. Botyoo collects the answers and routes qualified leads forward while unqualified ones get a softer next step.",
      },
      {
        q: "Can I nurture followers into clients over time?",
        a: "Yes. Use follow-up sequences to stay in touch with leads over days or weeks. Send value, answer objections, and present your offer again when the timing is right.",
      },
    ],
    cta: "Ready to fill your calendar from Instagram?",
  },
  {
    slug: "artists",
    tag: "For Artists & Labels",
    title: "Your fans are on Instagram. Meet them in their DMs.",
    description:
      "Automate how you connect with fans, drop releases, and sell tickets — all inside Instagram.",
    steps: [
      {
        title: "Spot your superfans",
        desc: "Identify and tag your most engaged fans the moment they interact — likes, comments, story replies. Build a list of people who actually care.",
      },
      {
        title: "Build your fanbase",
        desc: "Segment followers, re-engage anytime, and send exclusive previews directly to the fans who've earned them.",
      },
      {
        title: "Sell more tickets and merch",
        desc: "Send concert and product links directly in DMs to the right fans at the right time — timed to drops, tour announcements, or restocks.",
      },
    ],
    useCases: [
      {
        title: "Drop new music to fans first",
        desc: "Send your release link to opted-in fans before it hits playlists. DMs get opened — emails don't.",
      },
      {
        title: "Boost streams via DMs",
        desc: "Ask fans to stream by sending them directly to your Spotify or Apple Music link via a DM campaign or comment trigger.",
      },
      {
        title: "Drive pre-saves from comments",
        desc: "Run a pre-save campaign on your post. Anyone who comments gets a DM with the pre-save link and a personal note.",
      },
      {
        title: "Sell merch and tickets via DM",
        desc: "Announce drops and tours with a DM to your fan segment. Include the link so they can buy without ever leaving the app.",
      },
    ],
    faqs: [
      {
        q: "How do musicians use Instagram DMs to promote music?",
        a: "Artists use Botyoo to send release links, pre-save URLs, and stream requests directly to fans via DM — triggered by post comments or story interactions. It's more personal than a feed post and gets significantly higher click-through rates.",
      },
      {
        q: "How do I get more pre-saves using Instagram DMs?",
        a: "Post about your upcoming release and set a comment trigger. Anyone who comments gets an automated DM with your pre-save link. It takes about 5 minutes to set up and runs until your release date.",
      },
      {
        q: "Can I send my music link automatically to followers?",
        a: "Yes. Trigger a DM with your link when someone comments on a post, replies to your story, or sends you a keyword. Great for Spotify, Apple Music, YouTube, or merch store links.",
      },
      {
        q: "How do artists build a direct-to-fan channel on Instagram?",
        a: "Botyoo helps you segment engaged fans into a list you can message directly, separate from your general followers. You own that relationship and can reach them anytime with a DM campaign.",
      },
    ],
    cta: "Connect with your fans where they already are.",
  },
  {
    slug: "agencies",
    tag: "For Agencies",
    title: "Offer Instagram DM automation as a service",
    description:
      "Automate Instagram DMs across all your clients. Capture leads, prove ROI, and save hours — without extra headcount.",
    steps: [
      {
        title: "Prove ROI",
        desc: "Attribute DMs and comments to leads, links, and sales. Go beyond reach and impressions — show clients real pipeline numbers.",
      },
      {
        title: "Scale community ops",
        desc: "Handle repetitive comments and DMs with automation, route complex or high-value conversations to human team members.",
      },
      {
        title: "Multi-client workspace",
        desc: "Switch between client accounts, keep delivery organized, and share simple reports that clients actually understand.",
      },
    ],
    useCases: [
      {
        title: "Creator campaign funnels",
        desc: "Build end-to-end DM funnels for influencer and creator clients — from comment trigger to lead capture to offer delivery.",
      },
      {
        title: "Community management automation",
        desc: "Handle FAQs, routing, and repetitive DMs at scale so your team focuses on the conversations that need a human touch.",
      },
      {
        title: "Media spend to DM capture",
        desc: "Connect paid Instagram campaigns to Botyoo flows. Turn ad clicks and story swipe-ups into DM conversations and captured leads.",
      },
      {
        title: "Bespoke AI experiences",
        desc: "Build custom AI-driven DM flows that reflect each client's brand voice, product catalog, and audience persona.",
      },
    ],
    faqs: [
      {
        q: "Can I manage multiple Instagram accounts from one dashboard?",
        a: "Yes. Botyoo supports multiple connected accounts so you can manage all your clients from a single workspace, switch between them instantly, and keep automations organized per account.",
      },
      {
        q: "How do agencies track DM ROI for clients?",
        a: "Botyoo tracks how many DMs were sent, how many leads were captured, and which flows generated the most clicks or conversions. Use that data to build monthly reports and justify retainer fees.",
      },
      {
        q: "Can I maintain each client's brand voice in automations?",
        a: "Absolutely. Every message template and AI instruction is customized per account. You can write flows that match each client's tone, vocabulary, and offer precisely.",
      },
      {
        q: "Is Botyoo safe and Meta-approved?",
        a: "Yes. Botyoo is a Meta Tech Provider and operates fully within Instagram's Messaging API policies. All automations follow Meta's guidelines — no third-party scraping or policy violations.",
      },
    ],
    cta: "Scale your agency's Instagram offering with Botyoo.",
  },
  {
    slug: "ecommerce",
    tag: "For E-Commerce Brands",
    title: "Sell more from Instagram with DM automation",
    description:
      "Turn Instagram engagement into store revenue with automations, DM campaigns, and an AI agent — even when you're offline.",
    steps: [
      {
        title: "Start from engagement",
        desc: "Move people from posts, Stories, and Reels into guided DM conversations that end at checkout — no link-in-bio friction.",
      },
      {
        title: "Give every shopper a personal assistant",
        desc: "Answer product questions, recommend items, and send payment links 24/7. Your AI agent handles it so your team doesn't have to.",
      },
      {
        title: "Automate drops, restocks, and promos",
        desc: "Run product drops and discount campaigns in DMs and see exactly how many sales each one drives. No guessing, just data.",
      },
    ],
    useCases: [
      {
        title: "Product drops and restocks",
        desc: "Notify your waitlist via DM the moment a product drops or comes back in stock. First in line gets the sale.",
      },
      {
        title: "Comment-to-DM for launches and discounts",
        desc: "Post a launch or promo and send anyone who comments a DM with the discount code or product link automatically.",
      },
      {
        title: "Waitlist sign-ups in DMs",
        desc: "Collect waitlist interest directly in DMs. No forms, no links — just a conversation that captures the lead.",
      },
      {
        title: "Exclusive loyalty segments",
        desc: "Tag your repeat buyers and VIPs, then send them early access, exclusive offers, or thank-you campaigns via DM.",
      },
    ],
    faqs: [
      {
        q: "How do e-commerce brands sell through Instagram DMs?",
        a: "Botyoo turns post comments and story interactions into product conversations. Someone comments on a product post, gets a DM with details and a buy link, and you've turned engagement into a sale — without a single manual reply.",
      },
      {
        q: "Can I send DMs when a product drops or restocks?",
        a: "Yes. Build a waitlist inside Botyoo and blast a DM campaign to the whole list the moment you're ready to sell. Drop campaigns typically see open rates above 80%.",
      },
      {
        q: "Can I automate customer support on Instagram?",
        a: "Yes. Botyoo's AI agent can answer product FAQs, check stock, share size guides, and route complex questions to your support team — all inside Instagram DMs.",
      },
      {
        q: "Is Instagram DM automation safe for e-commerce brands?",
        a: "Yes. Botyoo uses Meta's official Messaging API and operates as a Meta Tech Provider. Your account is safe and your automation stays within Instagram's terms of service.",
      },
    ],
    cta: "Turn your Instagram into a revenue channel.",
  },
  {
    slug: "clinics",
    tag: "For Clinics & Medspas",
    title: "Stop losing patients to slow DM replies",
    description:
      "Automatically capture, qualify, and route every Instagram DM into a booked consultation — without your team spending time on triage.",
    steps: [
      {
        title: "Capture every DM instantly",
        desc: "Botyoo replies in seconds, 24/7, weekends and holidays included. No inquiry goes unanswered while your team is with patients.",
      },
      {
        title: "Qualify patient inquiries automatically",
        desc: "Collect treatment interest, timeline, and basic patient information in the DM flow. Follow up automatically if leads go quiet mid-conversation.",
      },
      {
        title: "Sync to your CRM",
        desc: "Every qualified lead lands in your CRM enriched with Instagram profile data and their inquiry details. Your front desk picks up exactly where Botyoo left off.",
      },
    ],
    useCases: [
      {
        title: "Instant DM replies for consultations",
        desc: "Respond to consultation inquiries within seconds, day or night — so patients don't move on to the next clinic.",
      },
      {
        title: "Patient qualification flows",
        desc: "Ask about treatment interest, budget range, and timeline before involving your team. Only qualified leads reach your booking link.",
      },
      {
        title: "Lead recovery sequences",
        desc: "Re-engage patients who started a conversation but didn't book. Automated follow-ups bring cold leads back to the table.",
      },
      {
        title: "CRM and Google Sheet sync",
        desc: "Export every captured lead to your CRM or a Google Sheet automatically. No manual data entry for your front desk team.",
      },
    ],
    faqs: [
      {
        q: "What is Instagram DM automation for clinics?",
        a: "It means Botyoo automatically replies to every patient inquiry on Instagram — even outside office hours — collects their information, and routes qualified leads to your booking flow. Your team only gets involved when a patient is ready to book.",
      },
      {
        q: "How does Botyoo work for medspas and aesthetic practices?",
        a: "Botyoo handles the first touch: it replies to DMs and comments about services, collects patient info, and sends your consultation booking link. Most practices see a meaningful reduction in response time and an increase in booked consultations within the first week.",
      },
      {
        q: "How is Botyoo different from generic chatbots?",
        a: "Botyoo is built specifically for Instagram and uses Meta's official API — so it works natively in DMs, not in a widget on your website. You can also use AI to handle nuanced questions in your clinic's voice, not a generic script.",
      },
      {
        q: "How long does setup take?",
        a: "Most clinics are live in under an hour. Connect your Instagram account, customize your qualification flow and messages, and activate. No developers or technical knowledge required.",
      },
    ],
    cta: "Never miss another patient inquiry from Instagram.",
  },
]
