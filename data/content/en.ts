import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "SoTeen Studio | Studio Profile",
    description:
      "SoTeen Studio designs and builds digital products, platforms, and brand identities that are clear, reliable, and impactful.",
  },
  site: {
    tagline: "An independent studio building games, open-source tools, and experiments.",
    description:
      "SoTeen Studio designs and builds digital products, platforms, and brand identities that are clear, reliable, and impactful.",
    address: "Denpasar, Bali, Indonesia (full address coming soon)",
  },
  nav: {
    ariaMain: "Main navigation",
    ariaMobile: "Mobile navigation",
    ariaFooter: "Footer navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Choose language",
    theme: "Toggle light/dark theme",
    cta: "Start a Conversation",
    groups: { studio: "Studio", work: "Work" },
    sections: {
      about: { label: "About Us", description: "Our studio story, vision, and mission." },
      values: { label: "Core Values", description: "The principles behind everything we ship." },
      careers: { label: "Careers & Collaboration", description: "Experiment and build alongside us." },
      services: { label: "What We Build", description: "From freeform experiments to public releases." },
      projects: { label: "Projects", description: "Games, open-source software, and curated studio experiments." },
      contact: { label: "Contact", description: "Get in touch with our team." },
    },
  },
  hero: {
    eyebrow: "SoTeen Studio · Independent digital studio",
    title: "Building games, open-source software, and technology experiments that stay relevant.",
    highlight: "relevant",
    description:
      "SoTeen Studio is an independent software development studio. We design interactive game ecosystems, release open-source tools for the developer community, and explore unconventional technical ideas.",
    primaryCta: "View Projects",
    secondaryCta: "Contact Us",
    stats: {
      focus: "Focus areas",
      products: "Products in the ecosystem",
      values: "Core values",
    },
  },
  about: {
    eyebrow: "About Us",
    title: "A small studio with big curiosity.",
    description:
      "SoTeen Studio is a team of developers who build games for players and open-source software for fellow developers, guided by clarity of function and close attention to detail.",
    story: [
      "We believe the best ideas often come from free experimentation with no fixed goal at the start. From there, we only release work that is truly mature and useful, whether as open-source projects or commercial products.",
      "With a lean, fast-moving team, we're free to dig into technology from its foundations while keeping a balance between contributing to the community and sustaining the studio's business.",
    ],
    vision: {
      title: "Vision",
      body: "To become an independent technology studio that creates digital products with wide impact, encourages a culture of sharing open code, and keeps daring to test new boundaries in software development.",
    },
    mission: {
      title: "Mission",
      body: "To develop quality games, build useful open-source tools, and turn technical experiments into sustainable, functional digital products.",
    },
    facts: {
      location: { label: "Location", value: "Denpasar, Bali" },
      focus: { label: "Focus", value: "Digital products & platforms" },
      form: { label: "Form", value: "Independent studio" },
      model: { label: "Releases", value: "Open-source & commercial" },
    },
  },
  values: {
    eyebrow: "Core Values",
    title: "The principles behind every work we release.",
    description:
      "These four values guide how we experiment, build products for players and developers, and balance open and commercial work.",
    items: {
      open: {
        title: "Open by Principle",
        description: "We believe the best knowledge and code grow through open collaboration, while keeping our commercial products sustainable.",
      },
      experimental: {
        title: "Experimental",
        description: "Ideas that sound strange are often the doorway to fresh product architecture and mechanics.",
      },
      efficient: {
        title: "Efficient and Functional",
        description: "We prioritize real performance, clean architecture, and user experience without unnecessary complexity.",
      },
      independent: {
        title: "Independent and Adaptive",
        description: "Moving fast as a small team focused on real execution and long-term product quality.",
      },
    },
  },
  services: {
    eyebrow: "Our Focus",
    title: "From free experiments to public releases.",
    description: "We distill many wild ideas in the studio into real products that are ready to play and ready to use.",
    deliverablesLabel: "Release scope",
    items: {
      experiment: {
        title: "Experiments & Prototypes",
        description: "Testing technical ideas without constraints at the start to see which mechanics or concepts are worth pursuing.",
        deliverables: ["Technical foundation research", "Rapid prototypes", "Release feasibility curation"],
      },
      game: {
        title: "Game Development",
        description: "Designing interactive play experiences with solid systems and lightweight performance for players.",
        deliverables: ["Game mechanics", "Multiplayer & economy systems", "Asset & UI optimization"],
      },
      opensource: {
        title: "Open-Source Ecosystem",
        description: "Building open tools, runtimes, and code libraries that are practical for fellow developers.",
        deliverables: ["Developer tools & CLI", "Documentation & standards", "Repository maintenance"],
      },
      product: {
        title: "Digital Products & Apps",
        description: "Developing functional software for general and commercial needs on a sustainable basis.",
        deliverables: ["Lightweight web apps", "Services & infrastructure", "Cross-platform distribution"],
      },
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "The products and projects we build.",
    description: "Each piece stands on its own, yet shares the same design and engineering foundation.",
    learnMore: "View details",
    statuses: {
      live: "Live",
      beta: "Beta",
      "in-development": "In development",
      planned: "Planned",
    },
  },
  projectDetail: {
    back: "Back to all projects",
    overview: "Overview",
    highlights: "Key highlights",
    stack: "Tech stack",
    status: "Status",
    ctaTitle: "Want to try it or collaborate?",
    ctaDescription: "Share feedback, report an issue, or reach out if you want to build something together.",
    ctaButton: "Get in Touch",
    others: "More projects",
  },
  careers: {
    eyebrow: "Careers & Collaboration",
    title: "Experiment and build together with us.",
    description:
      "We love meeting makers who are highly curious and care about detail. We're currently open to collaboration in the following roles.",
    roles: {
      gameDesigner: {
        title: "Game & Creative Designer",
        type: "Project collaboration",
        description: "Designing game concepts, visual assets, and interaction experiences that are fun for players.",
      },
      systemsEngineer: {
        title: "Systems & Game Engineer",
        type: "Project collaboration",
        description: "Building game mechanics, developer tools, and technical experiments that are lightweight and solid.",
      },
      maintainerQa: {
        title: "Open-Source Maintainer & QA",
        type: "Flexible",
        description: "Testing features, tidying documentation, and safeguarding the quality of every work before it is released to the public.",
      },
    },
    applyLabel: "Apply",
    openTitle: "Have a skill or a wild idea outside this list?",
    openDescription: "Send your profile, GitHub, or portfolio. We're always open to new collaboration.",
    openCta: "Send Your Profile",
  },
  contact: {
    eyebrow: "Contact",
    title: "Connect and talk with our team.",
    description:
      "Have a question about games, feedback for an open-source project, or interested in collaborating? Send a message and we'll respond soon.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Location",
    cta: "Send an Email",
  },
  footer: {
    ecosystem: "Ecosystem",
    rights: "All rights reserved.",
    legalNotice: "Usage terms and licenses for each project follow the rules of each release.",
    links: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      cookies: "Cookie Policy",
    },
  },
};
