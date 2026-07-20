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
  subtitle: string;
  price: string;
  description: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  visibleFeatures: string[];
  ctaLabel: string;
  highlighted?: boolean;
};

export type LocalizedPortfolioProject = {
  id: "steinoutlet" | "aura";
  title: "STEINOutlet" | "AURA";
  subtitle: string;
  category: string;
  description: string;
  targetAudience: string;
  businessGoal: string;
  imageAlt: string;
  features: string[];
};

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
      copy: string;
      accent: string;
      factsLabel: string;
      facts: Array<{ term: string; description: string }>;
    };
    services: {
      intro: string;
      items: Array<{ title: string; description: string }>;
      sectors: string[];
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
      selectPackage: string;
      showPackage: string;
      note: string;
    };
    references: {
      projects: LocalizedPortfolioProject[];
      changeProject: string;
      previousProject: string;
      nextProject: string;
      carouselDescription: string;
      slideDescription: string;
      carouselLabel: string;
      swipeHint: string;
      slideLabel: string;
      caseStudy: string;
      targetAudience: string;
      businessGoal: string;
      technologies: string;
      features: string;
      liveWebsite: string;
      liveWebsiteAria: string;
      details: string;
      projectNavigation: string;
      selectProject: string;
      showProject: string;
    };
    contact: {
      lead: string;
      copy: string;
      selectedPackage: string;
      selectedPackageOption: string;
      fields: {
        name: { label: string; placeholder: string; error: string };
        company: { label: string; placeholder: string; error: string };
        service: { label: string; placeholder: string; error: string };
        budget: { label: string };
        description: { label: string; placeholder: string; error: string };
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
