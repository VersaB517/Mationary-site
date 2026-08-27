/**
 * All site copy and pricing lives here so it can be edited without touching
 * component code. Change a string in this file and it updates everywhere.
 */

export const site = {
  name: "MATIONARY",
  nameTitleCase: "Mationary",
  tagline: "Put your creation into motion.",
  descriptor: "A private AI build studio for nontechnical people with ideas.",
  supportingLine: "You have the idea. We help you build it with AI.",
  url: "https://mationary.com",
  legalEntity: "The Royal Birch LLC",
  contactEmail: "hello@mationary.com",
  location: "Rochester, New York",
} as const;

export const nav = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Services", href: "/#services" },
  { label: "Fit", href: "/#fit" },
  { label: "About", href: "/#about" },
] as const;

export const hero = {
  eyebrow: "A private AI build studio",
  tagline: site.tagline,
  supporting: "You have the idea. We help you figure out what's possible — and guide you through building it with AI.",
  body:
    "Mationary is where an idea becomes something real: an app, an AI agent, an automation, an internal tool, a working prototype. You don't need a coding background. You need a place to start.",
  primaryCta: { label: "Bring Your Idea", href: "/bring-your-idea" },
  secondaryCta: { label: "See How It Works", href: "/#how-it-works" },
} as const;

export const definition = {
  word: "mationary",
  pronunciation: "/ˈmeɪ.ʃə.nɛr.i/",
  partOfSpeech: "noun",
  meaning:
    "Someone who doesn't just imagine what could exist — they create it.",
  note: "You already have the most important part: the idea.",
} as const;

export const recognition = {
  heading: "You've probably already said one of these.",
  thoughts: [
    "“I've had this app idea forever.”",
    "“There has to be an easier way to do this.”",
    "“I wish something could automatically handle this.”",
    "“I know what I want it to do. I just don't know how to build it.”",
  ],
  closing: "That's where Mationary starts.",
} as const;

export const howItWorks = {
  heading: "How it works",
  intro:
    "Four steps, one idea at a time. You stay in the room for all of it — this is guided building, not outsourcing.",
  steps: [
    {
      number: "01",
      title: "Bring the idea",
      body: "Tell us what you want to create, or what problem you want to solve. Plain language is enough. No spec, no diagram, no technical vocabulary required.",
    },
    {
      number: "02",
      title: "Shape it",
      body: "Together we determine what's realistic, what the first version should actually do, and which AI tools make sense for this specific idea.",
    },
    {
      number: "03",
      title: "Build it",
      body: "We work side by side to turn the concept into a functioning app, agent, automation or prototype — with you participating, not watching.",
    },
    {
      number: "04",
      title: "Understand it",
      body: "You leave knowing what was built, how it works, and how to keep improving it. The goal is capability, not dependency.",
    },
  ],
} as const;

/**
 * Launch pricing. Amounts are plain strings — edit freely.
 * `featured` controls which card gets the emphasized treatment.
 */
export const services = {
  heading: "Ways to work together",
  intro:
    "Launch pricing. Every engagement is private, one project at a time, and begins with a reviewed idea.",
  items: [
    {
      id: "session",
      name: "Mationary Session",
      duration: "75–90 minutes",
      price: "$249",
      summary:
        "A focused private session to clarify your idea, identify the first version worth building, and choose the right AI-assisted approach.",
      details: [
        "Clarify the idea and what it needs to do",
        "Identify a realistic first version",
        "Select the AI/build approach that fits",
        "Leave with a concrete path forward",
        "If it makes sense, we start building in the session",
      ],
      featured: false,
    },
    {
      id: "build-with",
      name: "Build With Mationary",
      duration: "3 private 60-minute sessions, generally over 2–4 weeks",
      price: "$895",
      summary:
        "The core guided-build experience. Shape it, build it, refine it — with room to work between sessions.",
      details: [
        "Session 1 — Shape: scope the first version",
        "Session 2 — Build: create the working piece",
        "Session 3 — Refine: improve, test, plan what's next",
        "You participate throughout and may continue between sessions",
        "You finish understanding what was built",
      ],
      featured: true,
    },
    {
      id: "build-day",
      name: "Mationary Build Day",
      duration: "Up to 7 private hours, with a break",
      price: "$1,750",
      summary:
        "A concentrated private build intensive for one project, designed to move your idea as far toward a working prototype as reasonably possible.",
      details: [
        "One project, one focused day",
        "Deep, uninterrupted building time",
        "Decisions made and implemented in the room",
        "You leave with real progress and next steps",
      ],
      featured: false,
    },
  ],
  disclaimer:
    "Every project is different. Mationary provides education, guidance and collaborative AI-assisted building — outcomes vary with the complexity of the idea and the time available. No engagement guarantees a completed or production-ready application.",
} as const;

export const fit = {
  heading: "We don't build everything.",
  lead:
    "Mationary works with a limited number of projects, selected for fit, feasibility, and where AI-assisted building can make a meaningful difference.",
  body: [
    "Sharing your idea isn't an automatic yes — and that's on purpose. Before recommending or booking anything paid, we read what you send and consider whether this is genuinely a good place for your idea to start. Sometimes the honest answer is “not yet,” or “not here.” When that happens, we'll say so, and point you somewhere better where we can.",
    "It also means some work needs research before it's accepted. Choosing the right approach for an unfamiliar idea is part of the job, not an afterthought.",
  ],
  goodFit: {
    title: "Often a good fit",
    items: [
      "An app or tool you keep describing to people but have never built",
      "A repetitive task you'd like to hand to an automation",
      "An AI agent or assistant for a specific job you understand well",
      "An internal tool for your team, your clients, or yourself",
      "A prototype you need in order to explain a business idea",
    ],
  },
  notFit: {
    title: "Usually not a fit",
    items: [
      "Safety-critical or regulated systems requiring formal review",
      "Enterprise IT implementation or large-scale system integration",
      "Work that needs production software engineering, security auditing, legal or compliance sign-off",
      "Projects where AI-assisted building isn't the right tool for the job",
    ],
  },
  note:
    "Mationary does not replace production software engineering, cybersecurity review, legal review, regulatory or compliance review, or enterprise IT implementation where those are required. Exact scope depends on the project.",
} as const;

export const about = {
  heading: "Where this came from",
  paragraphs: [
    "Mationary started from a simple realization: a traditional developer background is no longer required to begin building useful technology.",
    "The founder came from business, not software engineering, and started using AI to create tools that solved real problems — the kind of problems you only notice when you've been doing the actual work.",
    "The premise is straightforward. There are people sitting on valuable ideas simply because they don't realize they can build them now. Your domain knowledge is the hard part. The building is the part we can guide.",
  ],
} as const;

export const finalCta = {
  heading: "What have you been thinking about building?",
  supporting: "Bring the idea. We'll figure out the first step together.",
  cta: { label: "Start With Your Idea", href: "/bring-your-idea" },
} as const;

export const footer = {
  tagline: site.tagline,
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
  legal: `Mationary is operated by ${site.legalEntity}.`,
} as const;

export const intake = {
  eyebrow: "Project fit",
  heading: "Tell us about your idea.",
  intro:
    "This is how every Mationary project begins. Take a few minutes and answer in plain language — there's no wrong way to describe an idea, and you don't need to sound technical.",
  reviewNote:
    "Sending this isn't a booking, and it isn't an automatic yes. We read every submission and let you know whether Mationary is the right place for your idea to start.",
  privacyNote:
    "Please don't include passwords, API keys, confidential company data, protected personal or health information, or other sensitive credentials in this form. A plain description of your idea is all we need.",
  submitLabel: "Send My Idea",
  submittingLabel: "Sending…",
  confirmation: {
    heading: "Thank you.",
    body: "We'll review your idea and let you know whether Mationary is the right place to start.",
    note: "Nothing has been booked or charged. If it's a good fit, we'll follow up with what we'd recommend first.",
  },
} as const;
