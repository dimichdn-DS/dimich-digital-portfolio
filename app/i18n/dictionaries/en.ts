import type { SiteDictionary } from "../types";

const dictionary = {
  metadata: {
    title: "KPTS WERK – Websites for local businesses",
    description:
      "Modern websites and digital solutions for local businesses in Germany.",
    openGraphLocale: "en_GB",
    openGraphAlternateLocales: ["de_DE", "ru_RU"],
  },
  hero: {
    skipLink: "Skip to main content",
    homeLabel: "Return to the home view",
    whatsappLabel: "Open WhatsApp chat in a new tab",
    navigationLabel: "Main navigation",
    menuButton: "MENU",
    menuDialogLabel: "Navigation",
    closeMenuLabel: "Close menu",
    headlineDesktop: [
      { text: "Websites that convince" },
      { prefix: "local ", accent: "customers." },
    ],
    headlineMobile: [
      { text: "Websites that" },
      { text: "convince local" },
      { accent: "customers." },
    ],
    subtitle:
      "Modern websites for local businesses that want to look professional and generate more enquiries.",
    description:
      "I build fast, high-quality, mobile-optimised websites that present your business professionally and turn visits into genuine enquiries.",
    moreAbout: "LEARN MORE",
    requestWebsite: "REQUEST A WEBSITE",
    viewReferences: "VIEW PROJECTS",
    navigation: [
      { label: "About", panel: "about" },
      { label: "Services", panel: "services" },
      { label: "Projects", panel: "references" },
      { label: "Contact", panel: "contact" },
    ],
    legal: {
      impressum: "Legal notice",
      privacy: "Privacy policy",
    },
    languageSwitcher: {
      label: "Language",
      ariaLabel: "Select language",
      openMenu: "Open language menu",
      changeTo: "Switch language to {language}",
    },
  },
  panels: {
    meta: {
      about: {
        label: "ABOUT",
        title: "About me",
      },
      services: { label: "SERVICES", title: "Services" },
      offers: {
        label: "PACKAGES",
        title: "Website packages for local businesses",
      },
      references: { label: "PROJECTS", title: "Selected projects" },
      contact: { label: "CONTACT", title: "Discuss your project" },
      impressum: { label: "LEGAL NOTICE", title: "Legal notice" },
      privacy: { label: "PRIVACY", title: "Privacy policy" },
    },
    common: {
      dismissBackdrop: "Close panel via backdrop",
      closePanel: "Close panel",
      contentRegion: "{label}: content",
    },
    about: {
      lead:
        "I create modern websites for small and medium-sized businesses that want to be found locally and receive more enquiries.",
      supporting:
        "My goal is to make sure your website not only looks professional, but is also clear, fast and tailored to the people in your region.",
      visualAlt: "Modern KPTS WERK workspace",
      approachHeading: "My approach",
      principles: [
        {
          title: "Local focus",
          description:
            "Websites designed around your region and the customers you want to reach.",
        },
        {
          title: "Fast and modern",
          description:
            "Modern technology for fast loading, security and reliable performance.",
        },
        {
          title: "Personal and reliable",
          description:
            "Direct communication, clear processes and honest recommendations from start to launch.",
        },
      ],
      servicesHeading: "What I can do for you",
      services: [
        {
          title: "Bespoke websites",
          description:
            "Tailored websites and landing pages that present your business professionally.",
        },
        {
          title: "Local SEO",
          description:
            "Better visibility on Google for relevant searches in your area.",
        },
        {
          title: "Performance and technology",
          description:
            "Fast loading, clean implementation and optimisation for mobile and desktop.",
        },
        {
          title: "Design and user experience",
          description:
            "Clear structures, modern design and intuitive journeys for your visitors.",
        },
        {
          title: "Contact and enquiries",
          description:
            "Contact forms, WhatsApp integration and clear paths to more customer enquiries.",
        },
        {
          title: "Multilingual websites",
          description:
            "Professional websites in German, English, Russian and other languages.",
        },
        {
          title: "Online appointment booking",
          description:
            "Booking systems, calendar integrations and automated appointment workflows.",
        },
        {
          title: "Online shops",
          description:
            "Clear online shops and product catalogues for products, services and reservations.",
        },
        {
          title: "Content and copy",
          description:
            "Persuasive copy, imagery and AI-assisted content for your services.",
        },
        {
          title: "Analytics and optimisation",
          description:
            "Data-informed improvements that help your website perform better over time.",
        },
        {
          title: "Maintenance and support",
          description:
            "Updates, backups, technical care and support after launch.",
        },
        {
          title: "Automation and AI features",
          description:
            "Tailored digital workflows, forms, assistants and AI features based on project needs.",
        },
      ],
      workflowHeading: "How we work together",
      workflow: [
        {
          title: "Consultation",
          description: "We discuss your goals, customers and business.",
        },
        {
          title: "Concept",
          description:
            "I create a clear structure and a visual concept that fits your business.",
        },
        {
          title: "Development",
          description: "The website is built to be modern, fast and reliable.",
        },
        {
          title: "Launch and support",
          description:
            "After launch, I help with optimisation and further development.",
        },
      ],
      cta: {
        title: "Ready to reach more local customers?",
        copy: "Let’s plan your new website together.",
        button: "Get in touch",
      },
    },
    services: {
      intro: {
        headline: "Digital solutions for your business",
        copy: "From a professional website to individual digital functions, I create solutions tailored to your business, your customers and your workflows.",
      },
      results: [
        "Professional presence",
        "More local enquiries",
        "Technology that can grow",
      ],
      areaLabels: {
        suitableFor: "Suitable for",
        result: "Your result",
      },
      areas: [
        {
          id: "websites",
          title: "Websites & landing pages",
          description: "Modern, fast and individually designed websites that present your business professionally and guide visitors towards an enquiry.",
          suitableFor: "Freelancers, local businesses, studios, trades, restaurants and service providers.",
          capabilities: [
            "Individual business websites",
            "One-page websites and landing pages",
            "Portfolio and reference pages",
            "Mobile-first responsive design",
            "Multilingual websites",
            "Redesign of existing websites",
            "Services, team and contact pages",
            "Galleries, imagery and video integration",
            "Contact forms and clear calls to action",
            "Publishing and domain connection",
          ],
          result: "A professional online presence that works convincingly on mobile and desktop and makes it easy for prospects to contact you.",
        },
        {
          id: "visibility",
          title: "Visibility & enquiries",
          description: "Structure, content and technical foundations that help your business become easier to find and make it simpler for prospects to contact you.",
          suitableFor: "Local businesses that want to improve visibility and generate more relevant enquiries.",
          capabilities: [
            "Local SEO foundations",
            "Service and regional keyword structure",
            "Clear page and heading hierarchy",
            "Optimised page titles and descriptions",
            "Google Maps integration",
            "Preparation for a Google Business Profile",
            "Contact forms and enquiry paths",
            "WhatsApp integration",
            "Website copy structure and optimisation",
            "Existing-site analysis",
            "Navigation and conversion-path improvements",
            "Privacy-conscious analytics where appropriate",
          ],
          result: "A clear website that is easier to find locally and gives visitors a direct route to make an enquiry.",
          note: "Specific Google rankings cannot be guaranteed.",
        },
        {
          id: "commerce",
          title: "Booking, shops & functions",
          description: "Practical digital functions that let customers book appointments, browse products, submit enquiries or select services more easily.",
          suitableFor: "Studios, photographers, service providers, restaurants, retailers and businesses with recurring customer enquiries.",
          capabilities: [
            "Online appointment booking",
            "Google Calendar and calendar-system connections",
            "Booking and reservation workflows",
            "Product and service catalogues",
            "Small and medium online shops",
            "Basket and enquiry functions depending on scope",
            "Gallery and portfolio functions",
            "Image and document uploads",
            "Individual forms",
            "Individual calculators and preliminary price estimates",
            "Guided selection and product configurators",
            "Email notifications",
            "API integrations after technical assessment",
          ],
          result: "A digital process that helps customers act more quickly and reduces manual work for your business.",
          note: "Payment, booking and third-party functions are planned according to the chosen system and project scope.",
        },
        {
          id: "automation",
          title: "Automation & AI",
          description: "Individual digital processes and AI-supported functions that process information, simplify workflows and enable new customer experiences.",
          suitableFor: "Businesses with recurring processes, individual consultation workflows or specific digital ideas.",
          spotlight: {
            title: "Automation for small businesses",
            copy: "Digital workflows that reduce manual work, process enquiries faster and simplify recurring tasks.",
          },
          capabilities: [
            "Automatic capture and sorting of enquiries",
            "Confirmations and appointment reminders",
            "Transfer of enquiries to spreadsheets or CRM systems",
            "Individual quote and enquiry forms",
            "Customer uploads for photos and documents",
            "Preliminary price estimates and calculators",
            "Automatic task and status notifications",
            "Prepared email and WhatsApp messages",
            "Review requests after completed work",
            "Recurring customer communication",
            "Document and content processing",
            "AI assistants for frequently asked questions",
            "AI-assisted image and room visualisation",
            "Internal administration interfaces",
            "API connections between existing systems",
            "Individual web applications",
          ],
          result: "An individually developed digital solution that reduces repetitive work and offers customers a more modern service.",
          note: "Scope, privacy, technical feasibility and ongoing costs are assessed before the project begins.",
        },
      ],
      accordion: {
        show: "Show details",
        hide: "Hide details",
      },
      industries: {
        heading: "Who I work with",
        copy: "KPTS WERK creates websites and digital workflows especially for small and medium-sized local businesses.",
        groups: [
          {
            id: "property",
            title: "Home, garden & property services",
            description: "For mobile service teams and businesses handling regular enquiries around properties and outdoor spaces.",
            examples: [
              "Caretaking services",
              "Commercial cleaning",
              "Gardening and landscaping",
              "Winter services",
              "Property maintenance",
              "Clearance services",
              "Moving services",
              "Small repairs and installation",
            ],
          },
          {
            id: "trades",
            title: "Trades, construction & renovation",
            description: "For specialist businesses that want to present services, references and regional availability professionally.",
            examples: [
              "Construction companies",
              "Painting contractors",
              "Drywall installation",
              "Tilers",
              "Flooring specialists",
              "Electricians",
              "Plumbing and heating",
              "Roofers",
              "Window and door construction",
              "Kitchen and furniture installation",
              "Stonemasons and natural stone businesses",
            ],
          },
          {
            id: "wellness",
            title: "Beauty, health & fitness",
            description: "For personal services where trust, easy booking and a strong visual presentation matter.",
            examples: [
              "Nail studios",
              "Hair salons",
              "Beauty studios",
              "Massage practices",
              "Foot care",
              "Physiotherapy",
              "Personal training",
              "Yoga and fitness studios",
              "Tattoo and piercing studios",
            ],
          },
          {
            id: "hospitality",
            title: "Hospitality & accommodation",
            description: "For hosts who want to combine their offer, atmosphere, reservations and essential information clearly.",
            examples: [
              "Restaurants",
              "Cafés",
              "Bakeries",
              "Takeaways",
              "Catering",
              "Hotels",
              "Guest houses",
              "Holiday apartments",
              "Event venues",
            ],
          },
          {
            id: "vehicles",
            title: "Vehicles & technical services",
            description: "For specialist businesses with services that need explanation, appointment workflows or a regional reach.",
            examples: [
              "Car workshops",
              "Vehicle detailing",
              "Tyre services",
              "Towing services",
              "Car dealerships",
              "Bicycle services",
              "Machine and equipment services",
            ],
          },
          {
            id: "professional",
            title: "Consulting, property & creative professions",
            description: "For advisory, creative and administrative businesses whose expertise should be clear online at a glance.",
            examples: [
              "Photographers and videographers",
              "Estate agents",
              "Property management",
              "Insurance and financial advisers",
              "Tax advisers",
              "Translators",
              "Coaches",
              "Tutoring and language schools",
              "Security services",
              "Local retailers",
              "Small manufacturing businesses",
            ],
          },
        ],
        note: "Other industries are also possible. What matters is your goal, workflow and project requirements.",
      },
      deliverables: {
        heading: "What you receive",
        items: [
          "Individual structure and design",
          "Optimisation for mobile, tablet and desktop",
          "Fast loading and clean technical implementation",
          "Essential SEO preparation",
          "Publishing and domain connection",
          "Direct contact throughout the project",
          "Support after launch",
        ],
      },
    },
    offers: {
      packages: [
        {
          id: "start",
          name: "START",
          price: "from €990",
          compact: {
            subtitle: "A professional start online",
            description:
              "For self-employed professionals, studios and small local businesses that want to become professionally visible online quickly.",
            benefits: [
              "One-page website with up to 5 sections",
              "Responsive design for mobile and desktop",
              "Contact form or WhatsApp",
            ],
            deliveryTime: "7–10 working days",
          },
          detail: {
            subtitle: "A professional start online",
            description:
              "For self-employed professionals, studios and small local businesses that want to become professionally visible online quickly.",
            deliveryTime: "7–10 working days",
            revisions: "1 revision round",
            features: [
              "One-page website with up to 5 content sections",
              "Individual design adaptation",
              "Responsive across smartphone, tablet and desktop",
              "Contact form or WhatsApp connection",
              "Essential SEO settings",
              "Technical launch and domain connection",
              "Core performance optimisation",
            ],
            ctaLabel: "Request START",
          },
        },
        {
          id: "business",
          name: "BUSINESS",
          price: "from €1,890",
          compact: {
            subtitle: "More visibility. More enquiries.",
            description:
              "For skilled trades, hospitality businesses, studios, workshops and local service providers with more advanced requirements.",
            benefits: [
              "Up to 5 individual pages",
              "Bespoke UX/UI design",
              "SEO structure, Google Maps and forms",
            ],
            deliveryTime: "2–3 weeks",
          },
          detail: {
            subtitle: "More visibility. More enquiries.",
            description:
              "For skilled trades, hospitality businesses, studios, workshops and local service providers with more advanced requirements.",
            deliveryTime: "2–3 weeks",
            revisions: "2 revision rounds",
            features: [
              "Up to 5 individual pages",
              "Bespoke UX/UI design",
              "Services, projects and contact structure",
              "Responsive implementation",
              "SEO structure and performance",
              "Google Maps, WhatsApp and forms",
              "Technical launch",
            ],
            ctaLabel: "Request BUSINESS",
          },
          highlighted: true,
        },
        {
          id: "individual",
          name: "INDIVIDUAL",
          price: "from €3,490",
          compact: {
            subtitle: "Tailored digital solutions",
            description:
              "For businesses requiring custom functions, automation, multilingual content or more complex integrations.",
            benefits: [
              "Bespoke project architecture",
              "CMS, multilingual content and integrations",
              "Automation and AI functions",
            ],
            deliveryTime: "Schedule based on scope",
          },
          detail: {
            subtitle: "Tailored digital solutions",
            description:
              "For businesses requiring custom functions, automation, multilingual content or more complex integrations.",
            deliveryTime: "Schedule based on scope",
            revisions: "3 revision rounds",
            features: [
              "Bespoke project architecture",
              "Website or web application",
              "Multilingual content",
              "CMS where appropriate",
              "Appointment booking",
              "API integrations",
              "Automation",
              "AI functions based on project needs",
            ],
            ctaLabel: "Request a project",
          },
        },
      ],
      changePackage: "Change package",
      previousPackage: "Previous package",
      nextPackage: "Next package",
      carouselDescription: "Carousel",
      slideDescription: "Slide",
      carouselLabel: "Website packages",
      slideLabel: "{current} of {total}: {name}",
      recommended: "RECOMMENDED",
      includedServices: "{name}: included services",
      packageChanged: "{name} package selected",
      learnMore: "Learn more",
      learnMoreAria: "Learn more about the {name} package",
      backToPackages: "Back to packages",
      deliveryLabel: "Delivery",
      revisionsLabel: "Revisions",
      note:
        "All prices are starting prices. The final price depends on the scope and required functions. Domain, hosting, paid licences and legal texts are agreed separately.",
    },
    references: {
      projects: [
        {
          id: "steinoutlet",
          title: "STEINOutlet",
          compact: {
            category: "DIGITAL KITCHEN CONFIGURATOR",
            subtitle: "Interactive website for kitchens and worktops",
            description:
              "Customers upload their kitchen, choose materials and visualise a new worktop.",
          },
          detail: {
            subtitle:
              "Interactive website for worktops and kitchen visualisation",
            category: "CASE STUDY · DIGITAL KITCHEN CONFIGURATOR",
            description:
              "A modern platform where customers can upload their kitchen, choose materials and visualise the worktop they want.",
            summary: {
              challenge:
                "Present a complex material selection in a simple and understandable way.",
              solution:
                "A guided visual journey with upload, material selection and preview.",
              outcome:
                "A clear digital consultation path for prospective kitchen customers.",
            },
          },
          imageAlt:
            "STEINOutlet homepage with kitchen configurator and worktop comparison",
        },
        {
          id: "aura",
          title: "AURA",
          compact: {
            category: "BEAUTY STUDIO · LANDING PAGE",
            subtitle: "Mobile-first website for a modern nail studio",
            description:
              "An elegant landing page with a video hero, gallery, multiple languages and a direct booking journey.",
          },
          detail: {
            subtitle: "Premium landing page for a modern nail studio",
            category: "CASE STUDY · LANDING PAGE · BEAUTY STUDIO",
            description:
              "An elegant mobile-first website with a video hero, multilingual structure, gallery and direct booking journey.",
            summary: {
              challenge:
                "Bring atmosphere, services and appointment booking together in one compact website.",
              solution:
                "A visual landing page with clear navigation and a strong mobile presentation.",
              outcome:
                "A professional digital presence with a simple path to booking.",
            },
          },
          imageAlt:
            "Mobile AURA Nail Atelier homepage with navigation and appointment call to action",
        },
      ],
      changeProject: "Change project",
      previousProject: "Previous project",
      nextProject: "Next project",
      carouselLabel: "Portfolio projects",
      slideLabel: "{current} of {total}: {project}",
      projectChanged: "{project} selected",
      learnMore: "Learn more",
      learnMoreAria: "Learn more about {project}",
      backToProjects: "Back to projects",
      summary: {
        challenge: "Challenge",
        solution: "Solution",
        outcome: "Outcome",
      },
      technologies: "Technologies",
      liveWebsite: "Open live website",
      liveWebsiteAria: "Open the {project} live website in a new tab",
    },
    contact: {
      lead:
        "Would you like a modern website for your business? Tell me briefly what you need and I will respond with a clear next step.",
      copy:
        "Whether you run a trade business, kitchen studio, restaurant, salon or local service, I can help you build a professional digital presence.",
      selectedPackage: "Selected package",
      selectedPackageOption: "Website package",
      fields: {
        name: {
          label: "Your name",
          placeholder: "First and last name",
          error: "Please enter your name.",
        },
        company: {
          label: "Business or industry",
          placeholder: "For example trade business, salon or restaurant",
          error: "Please enter your business or industry.",
        },
        service: {
          label: "What do you need?",
          placeholder: "Please select",
          error: "Please select a service.",
        },
        budget: { label: "Planned budget" },
        description: {
          label: "What is your project about?",
          placeholder:
            "Briefly describe your business, your goal and what the new website should achieve.",
          error: "Please describe your project briefly.",
        },
      },
      services: [
        "New website",
        "Website redesign",
        "Landing page",
        "Google Maps / local visibility",
        "Maintenance or technical support",
        "Not sure yet",
      ],
      budgets: ["Not decided", "Up to €1,000", "€1,000–2,500", "€2,500–5,000", "Over €5,000"],
      openBudget: "Not decided",
      sendWhatsapp: "Send via WhatsApp",
      sendEmail: "Send by email",
      privacy:
        "Submitting only prepares a message in WhatsApp or your email application. No data is stored on this website.",
      responseTime: "Reply within 24 hours",
      facts: [
        { term: "Start", description: "Short initial consultation" },
        { term: "Focus", description: "A clear website, more trust and more enquiries" },
        { term: "Delivery", description: "Design, development and launch" },
      ],
      message: {
        greeting: "Hello, I am interested in a website.",
        name: "Name",
        company: "Business / industry",
        needed: "Required",
        budget: "Budget",
        description: "Project description",
        source: "Source",
        sourceValue: "KPTS WERK website",
        emailSubject: "Project enquiry via KPTS WERK",
      },
    },
    legal: {
      authoritativeNotice:
        "The legally authoritative content below is provided in German.",
    },
  },
} satisfies SiteDictionary;

export default dictionary;
