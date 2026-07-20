import type { SiteDictionary } from "../types";

const dictionary = {
  metadata: {
    title: "KPTS WERK – Websites für lokale Unternehmen",
    description:
      "Moderne Websites und digitale Lösungen für lokale Unternehmen in Deutschland.",
    openGraphLocale: "de_DE",
    openGraphAlternateLocales: ["en_GB", "ru_RU"],
  },
  hero: {
    skipLink: "Zum Hauptinhalt springen",
    homeLabel: "Zur Startansicht",
    whatsappLabel: "WhatsApp-Chat in neuem Tab öffnen",
    navigationLabel: "Hauptnavigation",
    menuButton: "MENÜ",
    menuDialogLabel: "Navigation",
    closeMenuLabel: "Menü schließen",
    headlineDesktop: [
      { text: "Websites, die lokale" },
      { prefix: "Kunden ", accent: "überzeugen." },
    ],
    headlineMobile: [
      { text: "Websites, die" },
      { text: "lokale Kunden" },
      { accent: "überzeugen." },
    ],
    subtitle:
      "Moderne Websites für lokale Unternehmen, die professionell auftreten und mehr Anfragen gewinnen möchten.",
    description:
      "Ich entwickle schnelle, hochwertige und mobil optimierte Websites, die professionell wirken und aus Besuchern echte Anfragen machen.",
    moreAbout: "MEHR ERFAHREN",
    requestWebsite: "WEBSITE ANFRAGEN",
    viewReferences: "REFERENZEN ANSEHEN",
    navigation: [
      { label: "Über mich", panel: "about" },
      { label: "Leistungen", panel: "services" },
      { label: "Referenzen", panel: "references" },
      { label: "Kontakt", panel: "contact" },
    ],
    legal: {
      impressum: "Impressum",
      privacy: "Datenschutz",
    },
    languageSwitcher: {
      label: "Sprache",
      ariaLabel: "Sprache auswählen",
      openMenu: "Sprachmenü öffnen",
      changeTo: "Sprache zu {language} wechseln",
    },
  },
  panels: {
    meta: {
      about: {
        label: "ÜBER MICH",
        title: "Digitale Websites mit klarem Blick auf lokale Kunden.",
      },
      services: {
        label: "LEISTUNGEN",
        title: "Welche Websites ich entwickle",
      },
      offers: {
        label: "ANGEBOTE",
        title: "Website-Pakete für lokale Unternehmen",
      },
      references: { label: "REFERENZEN", title: "Referenzen" },
      contact: { label: "KONTAKT", title: "Projekt besprechen" },
      impressum: { label: "IMPRESSUM", title: "Impressum" },
      privacy: { label: "DATENSCHUTZ", title: "Datenschutzerklärung" },
    },
    common: {
      dismissBackdrop: "Panel über Hintergrund schließen",
      closePanel: "Panel schließen",
      contentRegion: "{label}: Inhalt",
    },
    about: {
      lead:
        "Ich entwickle moderne Websites für kleine Unternehmen in Deutschland: klar strukturiert, mobil optimiert und auf echte Anfragen ausgerichtet.",
      copy:
        "Ich verbinde Design, technische Umsetzung und ein praktisches Verständnis dafür, was lokale Unternehmen wirklich brauchen: einen professionellen Online-Auftritt, der Vertrauen schafft und Kunden den nächsten Schritt leicht macht.",
      accent:
        "Mein Fokus liegt auf klarer Kommunikation, sauberer Umsetzung und digitalen Lösungen, die nicht nur gut aussehen, sondern im Alltag funktionieren.",
      factsLabel: "Arbeitsfelder",
      facts: [
        { term: "Design", description: "Ruhige visuelle Systeme, die Vertrauen schaffen." },
        { term: "Development", description: "Saubere Umsetzung mit Fokus auf Geschwindigkeit." },
        { term: "AI-ready", description: "Moderne Funktionen, wenn sie dem Projekt wirklich helfen." },
      ],
    },
    services: {
      intro:
        "Moderne Websites für lokale Unternehmen, die professionell auftreten und online mehr Anfragen gewinnen möchten.",
      items: [
        {
          title: "Webdesign",
          description:
            "Klar strukturierte Websites für Handwerk, Bau, Küchenstudios, Restaurants, Beauty und lokale Services.",
        },
        {
          title: "Responsive Umsetzung",
          description:
            "Layouts, die auf Desktop, iPhone und Android hochwertig wirken und ohne Reibung bedienbar bleiben.",
        },
        {
          title: "Lokale Sichtbarkeit",
          description:
            "Klare Nutzerführung, relevante Inhalte und direkte Kontaktwege machen aus Besuchen konkrete Anfragen.",
        },
        {
          title: "AI-ready Lösungen",
          description:
            "Upload-Flows, Visualisierungskonzepte und digitale Funktionen, die sinnvoll erweiterbar bleiben.",
        },
        {
          title: "Wartung & Support",
          description:
            "Saubere Veröffentlichung und verlässliche technische Begleitung auch nach dem Projektstart.",
        },
      ],
      sectors: [
        "Handwerker",
        "Bauunternehmen",
        "Küchenstudios",
        "Restaurants & Cafés",
        "Salons & Beauty",
        "Autowerkstätten",
        "Lokale Dienstleistungen",
        "Individuelle Projekte",
      ],
    },
    offers: {
      packages: [
        {
          id: "start",
          name: "START",
          subtitle: "Professioneller Online-Start",
          price: "ab 990 €",
          description:
            "Für Selbstständige, Studios und kleine lokale Unternehmen, die schnell professionell online sichtbar werden möchten.",
          deliveryTime: "7–10 Werktage",
          revisions: "1 Korrekturrunde",
          features: [
            "Onepage-Website mit bis zu 5 Inhaltsbereichen",
            "Individuelle Anpassung des Designs",
            "Responsive für Smartphone, Tablet und Desktop",
            "Kontaktformular und WhatsApp-Verknüpfung",
            "Grundlegende SEO-Einstellungen",
            "Technische Veröffentlichung und Domain-Anbindung",
            "Performance-Grundoptimierung",
          ],
          visibleFeatures: [
            "Onepage mit bis zu 5 Bereichen",
            "Individuelle Designanpassung",
            "Responsive für Smartphone und Desktop",
            "Kontaktformular oder WhatsApp",
            "SEO-Basis und Veröffentlichung",
          ],
          ctaLabel: "START anfragen",
        },
        {
          id: "business",
          name: "BUSINESS",
          subtitle: "Mehr Sichtbarkeit. Mehr Anfragen.",
          price: "ab 1.890 €",
          description:
            "Für Handwerksbetriebe, Gastronomie, Studios, Werkstätten und lokale Dienstleister.",
          deliveryTime: "2–3 Wochen",
          revisions: "2 Korrekturrunden",
          features: [
            "Bis zu 5 individuelle Seiten",
            "Individuelles UX/UI-Design",
            "Leistungen, Referenzen, Über uns und Kontakt",
            "Kontaktformular, WhatsApp und Google Maps",
            "Grundlegende Analytics-Integration",
            "Erweiterte SEO-Struktur",
            "Performance- und Bildoptimierung",
            "Conversion-orientierte Nutzerführung",
          ],
          visibleFeatures: [
            "Bis zu 5 individuelle Seiten",
            "Individuelles UX/UI-Design",
            "Leistungen, Referenzen und Kontakt",
            "SEO-Struktur und Performance",
            "Google Maps, WhatsApp und Formulare",
          ],
          ctaLabel: "BUSINESS anfragen",
          highlighted: true,
        },
        {
          id: "individual",
          name: "INDIVIDUAL",
          subtitle: "Digitale Lösungen nach Maß",
          price: "ab 3.490 €",
          description:
            "Für Unternehmen mit individuellen Funktionen, Automatisierung oder komplexeren Integrationen.",
          deliveryTime: "Projektzeit nach Umfang",
          revisions: "3 Korrekturrunden",
          features: [
            "Individuelle Projektarchitektur",
            "Mehrseitige Website oder Web-Anwendung",
            "Mehrsprachige Benutzeroberfläche",
            "CMS für selbstständige Inhaltsbearbeitung",
            "Online-Terminbuchung oder Reservierung",
            "API- und Drittanbieter-Integrationen",
            "AI-Funktionen nach Projektanforderung",
            "Erweiterte Performance- und SEO-Optimierung",
          ],
          visibleFeatures: [
            "Individuelle Projektarchitektur",
            "Website oder Web-Anwendung",
            "Mehrsprachigkeit und CMS",
            "Terminbuchung und API-Integrationen",
            "AI-Funktionen nach Projektbedarf",
          ],
          ctaLabel: "Projekt besprechen",
        },
      ],
      changePackage: "Paket wechseln",
      previousPackage: "Vorheriges Paket",
      nextPackage: "Nächstes Paket",
      carouselDescription: "Karussell",
      slideDescription: "Folie",
      carouselLabel: "Website-Pakete",
      slideLabel: "{current} von {total}: {name}",
      recommended: "EMPFOHLEN",
      includedServices: "{name}: enthaltene Leistungen",
      selectPackage: "Paket auswählen",
      showPackage: "{name} anzeigen",
      note:
        "Alle Preise gelten als Ausgangspreise. Der endgültige Preis hängt vom Umfang und den gewünschten Funktionen ab. Domain, Hosting, kostenpflichtige Lizenzen und Rechtstexte werden separat vereinbart.",
    },
    references: {
      projects: [
        {
          id: "steinoutlet",
          title: "STEINOutlet",
          subtitle: "AI Kitchen Visualization Platform",
          category: "Web Application / Kitchen Industry",
          description:
            "Eine digitale Plattform für Küchenarbeitsplatten mit KI-gestützter Visualisierung.",
          targetAudience:
            "Küchenstudios, Steinverarbeiter und Kunden, die neue Arbeitsplatten vor dem Kauf visualisieren möchten.",
          businessGoal:
            "Material, Dekor und Stärke auswählen und die neue Arbeitsplatte direkt im eigenen Küchenfoto erleben.",
          imageAlt:
            "Startseite von STEINOutlet mit Küchenkonfigurator und Arbeitsplattenvergleich",
          features: [
            "Upload-Flow für Küchenfotos",
            "Material- und Dekorauswahl",
            "KI-gestützte Bildbearbeitung",
            "Responsive für Desktop, iPhone und Android",
            "Mehrsprachige Benutzeroberfläche",
          ],
        },
        {
          id: "aura",
          title: "AURA",
          subtitle: "Premium Nail Studio Landing Page",
          category: "Landing Page / Beauty Studio",
          description:
            "Eine dunkel-elegante Landingpage für ein Nagelstudio mit Video-Hero, mehrsprachiger Struktur und klarem Buchungsweg.",
          targetAudience:
            "Lokale Beauty- und Nail-Studios, die ihre Atmosphäre hochwertig präsentieren und Termine mobil gewinnen möchten.",
          businessGoal:
            "Markenwirkung, Leistungsübersicht und Terminbuchung in einem fokussierten Mobile-first Erlebnis verbinden.",
          imageAlt:
            "Mobile Startseite des AURA Nail Atelier mit Navigation und Termin-CTA",
          features: [
            "Cinematic Video-Hero",
            "Mehrsprachige Struktur",
            "Direkter Buchungsweg",
            "Mobile-first Umsetzung",
            "Responsive Design",
          ],
        },
      ],
      changeProject: "Projekt wechseln",
      previousProject: "Vorheriges Projekt",
      nextProject: "Nächstes Projekt",
      carouselDescription: "Karussell",
      slideDescription: "Folie",
      carouselLabel: "Portfolio-Projekte",
      swipeHint: "Horizontal wischen oder Pfeiltasten verwenden",
      slideLabel: "{current} von {total}: {name}",
      caseStudy: "Case Study",
      targetAudience: "Für wen",
      businessGoal: "Business-Ziel",
      technologies: "Technologien",
      features: "Funktionen & Vorteile",
      liveWebsite: "Live-Website ansehen",
      liveWebsiteAria: "{project} Live-Website in neuem Tab ansehen",
      details: "Details ansehen",
      projectNavigation: "{project}: Projektnavigation",
      selectProject: "Projekt auswählen",
      showProject: "{project} anzeigen",
    },
    contact: {
      lead:
        "Sie möchten eine moderne Website für Ihr Unternehmen? Schreiben Sie mir kurz, worum es geht — ich melde mich mit einem klaren nächsten Schritt.",
      copy:
        "Ob Handwerksbetrieb, Küchenstudio, Restaurant, Salon oder lokaler Service: Ich helfe dabei, einen professionellen digitalen Auftritt aufzubauen.",
      selectedPackage: "Ausgewähltes Paket",
      selectedPackageOption: "Website-Paket",
      fields: {
        name: {
          label: "Ihr Name",
          placeholder: "Vor- und Nachname",
          error: "Bitte geben Sie Ihren Namen ein.",
        },
        company: {
          label: "Unternehmen oder Branche",
          placeholder: "Zum Beispiel Handwerksbetrieb, Salon, Restaurant",
          error: "Bitte geben Sie Ihr Unternehmen oder Ihre Branche ein.",
        },
        service: {
          label: "Was wird benötigt?",
          placeholder: "Bitte auswählen",
          error: "Bitte wählen Sie eine Leistung aus.",
        },
        budget: { label: "Geplanter Budget-Rahmen" },
        description: {
          label: "Worum geht es bei Ihrem Projekt?",
          placeholder:
            "Beschreiben Sie kurz Ihr Unternehmen, Ihr Ziel und was die neue Website erreichen soll.",
          error: "Bitte beschreiben Sie kurz Ihr Projekt.",
        },
      },
      services: [
        "Neue Website",
        "Website-Redesign",
        "Landingpage",
        "Google Maps / lokale Sichtbarkeit",
        "Wartung oder technische Hilfe",
        "Noch nicht sicher",
      ],
      budgets: ["Noch offen", "Bis 1.000 €", "1.000–2.500 €", "2.500–5.000 €", "Über 5.000 €"],
      openBudget: "Noch offen",
      sendWhatsapp: "Per WhatsApp senden",
      sendEmail: "Per E-Mail senden",
      privacy:
        "Mit dem Absenden wird nur eine Nachricht in WhatsApp oder im E-Mail-Programm vorbereitet. Es werden keine Daten auf dieser Website gespeichert.",
      responseTime: "Antwort innerhalb von 24h",
      facts: [
        { term: "Start", description: "Kurzes Erstgespräch" },
        { term: "Fokus", description: "Klare Website, mehr Vertrauen, mehr Anfragen" },
        { term: "Umsetzung", description: "Design, Entwicklung, Veröffentlichung" },
      ],
      message: {
        greeting: "Hallo, ich interessiere mich für eine Website.",
        name: "Name",
        company: "Unternehmen / Branche",
        needed: "Benötigt",
        budget: "Budget",
        description: "Projektbeschreibung",
        source: "Quelle",
        sourceValue: "KPTS WERK Website",
        emailSubject: "Projektanfrage über KPTS WERK",
      },
    },
    legal: { authoritativeNotice: null },
  },
} satisfies SiteDictionary;

export default dictionary;
