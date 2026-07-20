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
        title: "Digital websites with a clear focus on local customers.",
      },
      services: { label: "SERVICES", title: "Websites I develop" },
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
        "I develop modern websites for small businesses in Germany: clearly structured, mobile-optimised and focused on genuine enquiries.",
      copy:
        "I combine design, technical implementation and a practical understanding of what local businesses need: a professional online presence that builds trust and makes the next step easy for customers.",
      accent:
        "My focus is clear communication, reliable delivery and digital solutions that not only look good but work well in everyday business.",
      factsLabel: "Areas of expertise",
      facts: [
        { term: "Design", description: "Calm visual systems that build trust." },
        { term: "Development", description: "Clean implementation with a focus on speed." },
        { term: "AI-ready", description: "Modern functions where they genuinely help the project." },
      ],
    },
    services: {
      intro:
        "Modern websites for local businesses that want to present themselves professionally and generate more enquiries online.",
      items: [
        {
          title: "Web design",
          description:
            "Clearly structured websites for trades, construction, kitchen studios, restaurants, beauty businesses and local services.",
        },
        {
          title: "Responsive development",
          description:
            "Layouts that look refined and remain easy to use on desktop, iPhone and Android.",
        },
        {
          title: "Local visibility",
          description:
            "Clear user journeys, relevant content and direct contact options turn visits into concrete enquiries.",
        },
        {
          title: "AI-ready solutions",
          description:
            "Upload flows, visualisation concepts and digital functions designed for sensible future expansion.",
        },
        {
          title: "Maintenance & support",
          description:
            "Reliable publishing and technical support that continues after launch.",
        },
      ],
      sectors: [
        "Skilled trades",
        "Construction companies",
        "Kitchen studios",
        "Restaurants & cafés",
        "Salons & beauty",
        "Car workshops",
        "Local services",
        "Bespoke projects",
      ],
    },
    offers: {
      packages: [
        {
          id: "start",
          name: "START",
          subtitle: "A professional start online",
          price: "from €990",
          description:
            "For self-employed professionals, studios and small local businesses that want to establish a professional online presence quickly.",
          deliveryTime: "7–10 working days",
          revisions: "1 revision round",
          features: [
            "One-page website with up to 5 content sections",
            "Individual design adaptation",
            "Responsive across smartphone, tablet and desktop",
            "Contact form and WhatsApp connection",
            "Essential SEO settings",
            "Technical launch and domain connection",
            "Core performance optimisation",
          ],
          visibleFeatures: [
            "One page with up to 5 sections",
            "Individual design adaptation",
            "Responsive on smartphone and desktop",
            "Contact form or WhatsApp",
            "SEO essentials and launch",
          ],
          ctaLabel: "Enquire about START",
        },
        {
          id: "business",
          name: "BUSINESS",
          subtitle: "More visibility. More enquiries.",
          price: "from €1,890",
          description:
            "For skilled trades, hospitality businesses, studios, workshops and local service providers.",
          deliveryTime: "2–3 weeks",
          revisions: "2 revision rounds",
          features: [
            "Up to 5 individual pages",
            "Bespoke UX/UI design",
            "Services, projects, about and contact pages",
            "Contact form, WhatsApp and Google Maps",
            "Essential analytics integration",
            "Extended SEO structure",
            "Performance and image optimisation",
            "Conversion-focused user journeys",
          ],
          visibleFeatures: [
            "Up to 5 individual pages",
            "Bespoke UX/UI design",
            "Services, projects and contact",
            "SEO structure and performance",
            "Google Maps, WhatsApp and forms",
          ],
          ctaLabel: "Enquire about BUSINESS",
          highlighted: true,
        },
        {
          id: "individual",
          name: "INDIVIDUAL",
          subtitle: "Tailored digital solutions",
          price: "from €3,490",
          description:
            "For businesses requiring custom functions, automation or more complex integrations.",
          deliveryTime: "Schedule based on scope",
          revisions: "3 revision rounds",
          features: [
            "Bespoke project architecture",
            "Multi-page website or web application",
            "Multilingual user interface",
            "CMS for independent content management",
            "Online appointment booking or reservations",
            "API and third-party integrations",
            "AI functions based on project requirements",
            "Advanced performance and SEO optimisation",
          ],
          visibleFeatures: [
            "Bespoke project architecture",
            "Website or web application",
            "Multilingual setup and CMS",
            "Booking and API integrations",
            "AI functions where required",
          ],
          ctaLabel: "Discuss your project",
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
      selectPackage: "Select package",
      showPackage: "Show {name}",
      note:
        "All prices are starting prices. The final price depends on the scope and required functions. Domain, hosting, paid licences and legal texts are agreed separately.",
    },
    references: {
      projects: [
        {
          id: "steinoutlet",
          title: "STEINOutlet",
          subtitle: "AI Kitchen Visualization Platform",
          category: "Web Application / Kitchen Industry",
          description:
            "A digital platform for kitchen worktops with AI-assisted visualisation.",
          targetAudience:
            "Kitchen studios, stone fabricators and customers who want to visualise new worktops before purchasing.",
          businessGoal:
            "Choose material, finish and thickness, then experience the new worktop directly in a photo of the customer's own kitchen.",
          imageAlt:
            "STEINOutlet homepage with kitchen configurator and worktop comparison",
          features: [
            "Upload flow for kitchen photos",
            "Material and finish selection",
            "AI-assisted image editing",
            "Responsive on desktop, iPhone and Android",
            "Multilingual user interface",
          ],
        },
        {
          id: "aura",
          title: "AURA",
          subtitle: "Premium Nail Studio Landing Page",
          category: "Landing Page / Beauty Studio",
          description:
            "A dark, elegant landing page for a nail studio with a video hero, multilingual structure and a clear booking journey.",
          targetAudience:
            "Local beauty and nail studios that want to present their atmosphere professionally and gain mobile bookings.",
          businessGoal:
            "Combine brand presence, service overview and appointment booking in one focused mobile-first experience.",
          imageAlt:
            "Mobile AURA Nail Atelier homepage with navigation and appointment call to action",
          features: [
            "Cinematic video hero",
            "Multilingual structure",
            "Direct booking journey",
            "Mobile-first implementation",
            "Responsive design",
          ],
        },
      ],
      changeProject: "Change project",
      previousProject: "Previous project",
      nextProject: "Next project",
      carouselDescription: "Carousel",
      slideDescription: "Slide",
      carouselLabel: "Portfolio projects",
      swipeHint: "Swipe horizontally or use the arrow keys",
      slideLabel: "{current} of {total}: {name}",
      caseStudy: "Case study",
      targetAudience: "For whom",
      businessGoal: "Business goal",
      technologies: "Technologies",
      features: "Functions & benefits",
      liveWebsite: "View live website",
      liveWebsiteAria: "Open the {project} live website in a new tab",
      details: "View details",
      projectNavigation: "{project}: project navigation",
      selectProject: "Select project",
      showProject: "Show {project}",
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
