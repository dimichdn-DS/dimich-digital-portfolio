export type PanelId =
  | "about"
  | "services"
  | "offers"
  | "references"
  | "contact"
  | "impressum"
  | "privacy";

export type HeadlineLine = {
  text?: string;
  prefix?: string;
  accent?: string;
};

export type LocalizedServicePackage = {
  id: "start" | "business" | "individual";
  name: "START" | "BUSINESS" | "INDIVIDUAL";
  price: string;
  compact: {
    subtitle: string;
    description: string;
    benefits: [string, string, string];
    deliveryTime: string;
  };
  detail: {
    subtitle: string;
    description: string;
    deliveryTime: string;
    revisions: string;
    features: string[];
    ctaLabel: string;
  };
  highlighted?: boolean;
};

export type LocalizedPortfolioProject = {
  id: "steinoutlet" | "aura";
  title: "STEINOutlet" | "AURA";
  compact: {
    subtitle: string;
    category: string;
    description: string;
  };
  detail: {
    subtitle: string;
    category: string;
    description: string;
    summary: {
      challenge: string;
      solution: string;
      outcome: string;
    };
  };
  imageAlt: string;
};

export type ServiceAreaId =
  | "websites"
  | "visibility"
  | "commerce"
  | "automation";

export type IndustryGroupId =
  | "property"
  | "trades"
  | "wellness"
  | "hospitality"
  | "vehicles"
  | "professional";

export type SiteDictionary = {
  metadata: {
    title: string;
    description: string;
    openGraphLocale: string;
    openGraphAlternateLocales: string[];
  };
  hero: {
    skipLink: string;
    homeLabel: string;
    whatsappLabel: string;
    navigationLabel: string;
    menuButton: string;
    menuDialogLabel: string;
    closeMenuLabel: string;
    headlineDesktop: HeadlineLine[];
    headlineMobile: HeadlineLine[];
    subtitle: string;
    description: string;
    moreAbout: string;
    requestWebsite: string;
    viewReferences: string;
    navigation: Array<{
      label: string;
      panel: "about" | "services" | "references" | "contact";
    }>;
    legal: {
      impressum: string;
      privacy: string;
    };
    languageSwitcher: {
      label: string;
      ariaLabel: string;
      openMenu: string;
      changeTo: string;
    };
  };
  panels: {
    meta: Record<PanelId, { label: string; title: string }>;
    common: {
      dismissBackdrop: string;
      closePanel: string;
      contentRegion: string;
    };
    about: {
      lead: string;
      supporting: string;
      visualAlt: string;
      approachHeading: string;
      principles: Array<{ title: string; description: string }>;
      servicesHeading: string;
      services: Array<{ title: string; description: string }>;
      workflowHeading: string;
      workflow: Array<{ title: string; description: string }>;
      cta: {
        title: string;
        copy: string;
        button: string;
      };
    };
    services: {
      intro: {
        headline: string;
        copy: string;
      };
      results: [string, string, string];
      areaLabels: {
        suitableFor: string;
        result: string;
      };
      areas: Array<{
        id: ServiceAreaId;
        title: string;
        description: string;
        suitableFor: string;
        spotlight?: {
          title: string;
          copy: string;
        };
        capabilities: string[];
        result: string;
        note?: string;
      }>;
      accordion: {
        show: string;
        hide: string;
      };
      industries: {
        heading: string;
        copy: string;
        groups: Array<{
          id: IndustryGroupId;
          title: string;
          description: string;
          examples: string[];
        }>;
        note: string;
      };
      deliverables: {
        heading: string;
        items: string[];
      };
    };
    offers: {
      packages: LocalizedServicePackage[];
      changePackage: string;
      previousPackage: string;
      nextPackage: string;
      carouselDescription: string;
      slideDescription: string;
      carouselLabel: string;
      slideLabel: string;
      recommended: string;
      includedServices: string;
      packageChanged: string;
      learnMore: string;
      learnMoreAria: string;
      backToPackages: string;
      deliveryLabel: string;
      revisionsLabel: string;
      note: string;
    };
    references: {
      projects: LocalizedPortfolioProject[];
      changeProject: string;
      previousProject: string;
      nextProject: string;
      carouselLabel: string;
      slideLabel: string;
      projectChanged: string;
      learnMore: string;
      learnMoreAria: string;
      backToProjects: string;
      summary: {
        challenge: string;
        solution: string;
        outcome: string;
      };
      technologies: string;
      liveWebsite: string;
      liveWebsiteAria: string;
    };
    contact: {
      lead: string;
      copy: string;
      selectedPackage: string;
      selectedPackageOption: string;
      fields: {
        name: {
          label: string;
          placeholder: string;
          error: string;
          maxLengthError: string;
        };
        company: {
          label: string;
          placeholder: string;
          error: string;
          maxLengthError: string;
        };
        service: { label: string; placeholder: string; error: string };
        budget: { label: string };
        description: {
          label: string;
          placeholder: string;
          error: string;
          maxLengthError: string;
        };
      };
      services: string[];
      budgets: string[];
      openBudget: string;
      sendWhatsapp: string;
      sendEmail: string;
      privacy: string;
      responseTime: string;
      facts: Array<{ term: string; description: string }>;
      message: {
        greeting: string;
        name: string;
        company: string;
        needed: string;
        budget: string;
        description: string;
        source: string;
        sourceValue: string;
        emailSubject: string;
      };
    };
    legal: {
      authoritativeNotice: string | null;
    };
  };
};
