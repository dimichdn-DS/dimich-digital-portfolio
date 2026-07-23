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
        title: "Über mich",
      },
      services: {
        label: "LEISTUNGEN",
        title: "Leistungen",
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
        "Ich entwickle moderne Websites für kleine und mittlere Unternehmen, die lokal gefunden werden wollen – und mehr Anfragen erhalten möchten.",
      supporting:
        "Mir ist wichtig, dass Ihre Website nicht nur gut aussieht, sondern auch verständlich, schnell und auf die Menschen in Ihrer Region ausgerichtet ist.",
      visualAlt: "Moderner Arbeitsbereich von KPTS WERK",
      approachHeading: "Mein Ansatz",
      principles: [
        {
          title: "Lokal im Fokus",
          description:
            "Websites, die genau auf Ihre Region und Ihre Kunden ausgerichtet sind.",
        },
        {
          title: "Schnell & modern",
          description:
            "Moderne Technologien für schnelle Ladezeiten, Sicherheit und eine starke Performance.",
        },
        {
          title: "Persönlich & zuverlässig",
          description:
            "Direkter Kontakt, klare Prozesse und ehrliche Empfehlungen – von Anfang bis nach dem Launch.",
        },
      ],
      servicesHeading: "Was ich für Sie tun kann",
      services: [
        {
          title: "Individuelle Websites",
          description:
            "Maßgeschneiderte Websites und Landingpages, die Ihr Unternehmen professionell präsentieren.",
        },
        {
          title: "Lokale SEO",
          description:
            "Bessere Sichtbarkeit bei Google für relevante Suchanfragen in Ihrer Region.",
        },
        {
          title: "Performance & Technik",
          description:
            "Schnelle Ladezeiten, saubere Technik und Optimierung für Smartphone und Desktop.",
        },
        {
          title: "Design & Nutzererlebnis",
          description:
            "Klare Strukturen, modernes Design und eine einfache Bedienung für Ihre Besucher.",
        },
        {
          title: "Kontakt & Anfragen",
          description:
            "Kontaktformulare, WhatsApp-Anbindung und klare Wege zu mehr Kundenanfragen.",
        },
        {
          title: "Mehrsprachige Websites",
          description:
            "Professionelle Websites in Deutsch, Englisch, Russisch und weiteren Sprachen.",
        },
        {
          title: "Online-Terminbuchung",
          description:
            "Buchungssysteme, Kalenderanbindung und automatische Terminprozesse.",
        },
        {
          title: "Online-Shops",
          description:
            "Übersichtliche Shops und Produktkataloge für Produkte, Dienstleistungen und Reservierungen.",
        },
        {
          title: "Inhalte & Texte",
          description:
            "Überzeugende Texte, Bilder und AI-gestützte Inhalte für Ihre Leistungen.",
        },
        {
          title: "Analyse & Optimierung",
          description:
            "Datenbasierte Verbesserungen, damit Ihre Website kontinuierlich erfolgreicher wird.",
        },
        {
          title: "Wartung & Support",
          description:
            "Updates, Backups, technische Betreuung und Unterstützung nach dem Launch.",
        },
        {
          title: "Automatisierung & AI-Funktionen",
          description:
            "Individuelle digitale Abläufe, Formulare, Assistenten und AI-Funktionen nach Projektbedarf.",
        },
      ],
      workflowHeading: "So arbeiten wir zusammen",
      workflow: [
        {
          title: "Gespräch",
          description:
            "Wir sprechen über Ihre Ziele, Ihre Kunden und Ihr Unternehmen.",
        },
        {
          title: "Konzept",
          description:
            "Ich entwickle eine klare Struktur und ein passendes visuelles Konzept.",
        },
        {
          title: "Umsetzung",
          description:
            "Die Website wird modern, schnell und zuverlässig umgesetzt.",
        },
        {
          title: "Launch & Betreuung",
          description:
            "Nach dem Launch unterstütze ich Sie bei Optimierung und Weiterentwicklung.",
        },
      ],
      cta: {
        title: "Bereit für mehr lokale Kunden?",
        copy: "Lassen Sie uns gemeinsam Ihre neue Website planen.",
        button: "Kontakt aufnehmen",
      },
    },
    services: {
      intro: {
        headline: "Digitale Lösungen für Ihr Unternehmen",
        copy: "Von der professionellen Website bis zu individuellen digitalen Funktionen: Ich entwickle Lösungen, die zu Ihrem Unternehmen, Ihren Kunden und Ihren Arbeitsabläufen passen.",
      },
      results: [
        "Professioneller Auftritt",
        "Mehr lokale Anfragen",
        "Technik, die mitwächst",
      ],
      areaLabels: {
        suitableFor: "Geeignet für",
        result: "Ihr Ergebnis",
      },
      areas: [
        {
          id: "websites",
          title: "Websites & Landingpages",
          description: "Moderne, schnelle und individuell gestaltete Websites, die Ihr Unternehmen professionell präsentieren und Besucher gezielt zu einer Anfrage führen.",
          suitableFor: "Selbstständige, lokale Betriebe, Studios, Handwerk, Gastronomie und Dienstleister.",
          capabilities: [
            "Individuelle Unternehmenswebsites",
            "Onepage-Websites und Landingpages",
            "Portfolio- und Referenzseiten",
            "Mobile-first und Responsive Design",
            "Mehrsprachige Websites",
            "Relaunch und Modernisierung bestehender Websites",
            "Leistungs-, Team- und Kontaktseiten",
            "Galerien, Bildbereiche und Video-Integration",
            "Kontaktformulare und klare Handlungsaufforderungen",
            "Veröffentlichung und Domain-Anbindung",
          ],
          result: "Ein professioneller digitaler Auftritt, der auf Smartphone und Desktop überzeugt und Interessenten einfach zur Kontaktaufnahme führt.",
        },
        {
          id: "visibility",
          title: "Sichtbarkeit & Kundenanfragen",
          description: "Struktur, Inhalte und technische Grundlagen, damit Ihr Unternehmen online leichter gefunden wird und Interessenten schneller Kontakt aufnehmen können.",
          suitableFor: "Lokale Unternehmen, die ihre Sichtbarkeit verbessern und mehr qualifizierte Anfragen erhalten möchten.",
          capabilities: [
            "Grundlagen der lokalen Suchmaschinenoptimierung",
            "Suchbegriffe für Leistungen und Region",
            "Klare Seiten- und Überschriftenstruktur",
            "Optimierte Seitentitel und Beschreibungen",
            "Google-Maps-Integration",
            "Vorbereitung für ein Google-Unternehmensprofil",
            "Kontaktformulare und Anfragewege",
            "WhatsApp-Integration",
            "Struktur und Optimierung von Website-Texten",
            "Analyse bestehender Seiten",
            "Verbesserung von Navigation und Conversion-Wegen",
            "Datenschutzfreundliche Analyseoptionen nach Projektbedarf",
          ],
          result: "Eine verständliche Website, die lokal besser auffindbar ist und Besuchern einen klaren Weg zur Anfrage bietet.",
          note: "Konkrete Platzierungen bei Google können nicht garantiert werden.",
        },
        {
          id: "commerce",
          title: "Buchung, Shops & Funktionen",
          description: "Praktische digitale Funktionen, mit denen Kunden Termine buchen, Produkte ansehen, Anfragen senden oder Leistungen einfacher auswählen können.",
          suitableFor: "Studios, Fotografen, Dienstleister, Restaurants, Händler und Unternehmen mit wiederkehrenden Kundenanfragen.",
          capabilities: [
            "Online-Terminbuchung",
            "Google-Kalender- und Kalendersystem-Anbindung",
            "Buchungs- und Reservierungsabläufe",
            "Produkt- und Leistungskataloge",
            "Kleine und mittlere Online-Shops",
            "Warenkorb- und Anfragefunktionen nach Projektumfang",
            "Galerie- und Portfoliofunktionen",
            "Upload von Bildern und Dokumenten",
            "Individuelle Formulare",
            "Individuelle Rechner und vorläufige Preisberechnungen",
            "Auswahl- und Produktkonfiguratoren",
            "E-Mail-Benachrichtigungen",
            "API-Integrationen nach technischer Prüfung",
          ],
          result: "Ein digitaler Ablauf, mit dem Kunden schneller handeln und Ihr Unternehmen weniger manuelle Schritte bearbeiten muss.",
          note: "Zahlungs-, Buchungs- und Drittanbieterfunktionen werden abhängig vom gewählten System und Projektumfang geplant.",
        },
        {
          id: "automation",
          title: "Automatisierung & AI",
          description: "Individuelle digitale Prozesse und AI-gestützte Funktionen, die Informationen verarbeiten, Abläufe vereinfachen und neue Kundenerlebnisse ermöglichen.",
          suitableFor: "Unternehmen mit wiederkehrenden Abläufen, individuellen Beratungsprozessen oder besonderen digitalen Ideen.",
          spotlight: {
            title: "Automatisierung für kleine Unternehmen",
            copy: "Digitale Abläufe, die manuelle Arbeit reduzieren, Anfragen schneller verarbeiten und wiederkehrende Aufgaben vereinfachen.",
          },
          capabilities: [
            "Automatische Erfassung und Sortierung von Anfragen",
            "Bestätigungen und Termin-Erinnerungen",
            "Übergabe von Anfragen an Tabellen oder CRM-Systeme",
            "Individuelle Angebots- und Anfrageformulare",
            "Upload von Fotos und Dokumenten durch Kunden",
            "Vorläufige Preisberechnungen und Rechner",
            "Automatische Aufgaben- und Statusbenachrichtigungen",
            "Vorbereitete E-Mail- und WhatsApp-Nachrichten",
            "Bewertungsanfragen nach abgeschlossenem Auftrag",
            "Wiederkehrende Kundenkommunikation",
            "Dokument- und Inhaltsverarbeitung",
            "AI-Assistenten für häufige Fragen",
            "AI-gestützte Bild- und Raumvisualisierung",
            "Interne Verwaltungsoberflächen",
            "API-Verbindungen zwischen vorhandenen Systemen",
            "Individuelle Web-Anwendungen",
          ],
          result: "Eine individuell entwickelte digitale Lösung, die wiederkehrende Arbeit reduziert und Kunden einen moderneren Service bietet.",
          note: "Umfang, Datenschutz, technische Machbarkeit und laufende Kosten werden vor Projektbeginn geprüft.",
        },
      ],
      accordion: {
        show: "Details anzeigen",
        hide: "Details ausblenden",
      },
      industries: {
        heading: "Für welche Unternehmen?",
        copy: "KPTS WERK entwickelt Websites und digitale Abläufe besonders für kleine und mittlere lokale Unternehmen.",
        groups: [
          {
            id: "property",
            title: "Haus, Garten & Objektservice",
            description: "Für mobile Serviceteams und Betriebe mit regelmäßigen Anfragen rund um Immobilien und Außenflächen.",
            examples: [
              "Hausmeisterservice",
              "Gebäudereinigung",
              "Garten- und Landschaftspflege",
              "Winterdienst",
              "Objektbetreuung",
              "Entrümpelung",
              "Umzugsservice",
              "Kleinreparaturen und Montageservice",
            ],
          },
          {
            id: "trades",
            title: "Handwerk, Bau & Renovierung",
            description: "Für Fachbetriebe, die Leistungen, Referenzen und regionale Erreichbarkeit professionell präsentieren möchten.",
            examples: [
              "Bauunternehmen",
              "Malerbetrieb",
              "Trockenbau",
              "Fliesenleger",
              "Bodenleger",
              "Elektriker",
              "Sanitär und Heizung",
              "Dachdecker",
              "Fenster- und Türenbau",
              "Küchen- und Möbelmontage",
              "Steinmetz und Natursteinbetrieb",
            ],
          },
          {
            id: "wellness",
            title: "Beauty, Gesundheit & Fitness",
            description: "Für persönliche Dienstleistungen, bei denen Vertrauen, Terminwege und ein starker visueller Auftritt zählen.",
            examples: [
              "Nagelstudio",
              "Friseursalon",
              "Kosmetikstudio",
              "Massagepraxis",
              "Fußpflege",
              "Physiotherapie",
              "Personal Training",
              "Yoga- und Fitnessstudio",
              "Tattoo- und Piercingstudio",
            ],
          },
          {
            id: "hospitality",
            title: "Gastronomie & Unterkunft",
            description: "Für Gastgeber, die Angebot, Atmosphäre, Reservierung und wichtige Informationen klar zusammenführen möchten.",
            examples: [
              "Restaurant",
              "Café",
              "Bäckerei",
              "Imbiss",
              "Catering",
              "Hotel",
              "Pension",
              "Ferienwohnung",
              "Eventlocation",
            ],
          },
          {
            id: "vehicles",
            title: "Fahrzeuge & technische Services",
            description: "Für spezialisierte Betriebe mit erklärungsbedürftigen Leistungen, Terminbedarf oder regionalem Einzugsgebiet.",
            examples: [
              "Autowerkstatt",
              "Fahrzeugaufbereitung",
              "Reifenservice",
              "Abschleppdienst",
              "Autohandel",
              "Fahrradservice",
              "Maschinen- und Geräteservice",
            ],
          },
          {
            id: "professional",
            title: "Beratung, Immobilien & kreative Berufe",
            description: "Für beratende, kreative und verwaltende Unternehmen, deren Kompetenz digital schnell verständlich werden soll.",
            examples: [
              "Fotografen und Videografen",
              "Immobilienmakler",
              "Hausverwaltung",
              "Versicherungs- und Finanzberater",
              "Steuerberater",
              "Übersetzer",
              "Coaches",
              "Nachhilfe und Sprachschulen",
              "Sicherheitsdienste",
              "Lokale Händler",
              "Kleine Produktionsbetriebe",
            ],
          },
        ],
        note: "Auch andere Branchen sind möglich. Entscheidend sind Ihr Ziel, Ihre Abläufe und die Anforderungen des Projekts.",
      },
      deliverables: {
        heading: "Was Sie erhalten",
        items: [
          "Individuelle Struktur und Gestaltung",
          "Optimierung für Smartphone, Tablet und Desktop",
          "Schnelle Ladezeiten und saubere Technik",
          "Grundlegende SEO-Vorbereitung",
          "Veröffentlichung und Domain-Anbindung",
          "Direkter Kontakt während des Projekts",
          "Unterstützung nach dem Launch",
        ],
      },
    },
    offers: {
      packages: [
        {
          id: "start",
          name: "START",
          price: "ab 990 €",
          compact: {
            subtitle: "Professioneller Online-Start",
            description:
              "Für Selbstständige, Studios und kleine lokale Unternehmen, die schnell professionell online sichtbar werden möchten.",
            benefits: [
              "Onepage mit bis zu 5 Bereichen",
              "Responsive Design für Smartphone und Desktop",
              "Kontaktformular oder WhatsApp",
            ],
            deliveryTime: "7–10 Werktage",
          },
          detail: {
            subtitle: "Professioneller Online-Start",
            description:
              "Für Selbstständige, Studios und kleine lokale Unternehmen, die schnell professionell online sichtbar werden möchten.",
            deliveryTime: "7–10 Werktage",
            revisions: "1 Korrekturrunde",
            features: [
              "Onepage-Website mit bis zu 5 Inhaltsbereichen",
              "Individuelle Designanpassung",
              "Responsive für Smartphone, Tablet und Desktop",
              "Kontaktformular oder WhatsApp-Verknüpfung",
              "Grundlegende SEO-Einstellungen",
              "Technische Veröffentlichung und Domain-Anbindung",
              "Performance-Grundoptimierung",
            ],
            ctaLabel: "START anfragen",
          },
        },
        {
          id: "business",
          name: "BUSINESS",
          price: "ab 1.890 €",
          compact: {
            subtitle: "Mehr Sichtbarkeit. Mehr Anfragen.",
            description:
              "Für Handwerksbetriebe, Gastronomie, Studios, Werkstätten und lokale Dienstleister mit höheren Anforderungen.",
            benefits: [
              "Bis zu 5 individuelle Seiten",
              "Individuelles UX/UI-Design",
              "SEO-Struktur, Google Maps und Formulare",
            ],
            deliveryTime: "2–3 Wochen",
          },
          detail: {
            subtitle: "Mehr Sichtbarkeit. Mehr Anfragen.",
            description:
              "Für Handwerksbetriebe, Gastronomie, Studios, Werkstätten und lokale Dienstleister mit höheren Anforderungen.",
            deliveryTime: "2–3 Wochen",
            revisions: "2 Korrekturrunden",
            features: [
              "Bis zu 5 individuelle Seiten",
              "Individuelles UX/UI-Design",
              "Leistungen, Referenzen und Kontaktstruktur",
              "Responsive Umsetzung",
              "SEO-Struktur und Performance",
              "Google Maps, WhatsApp und Formulare",
              "Technische Veröffentlichung",
            ],
            ctaLabel: "BUSINESS anfragen",
          },
          highlighted: true,
        },
        {
          id: "individual",
          name: "INDIVIDUAL",
          price: "ab 3.490 €",
          compact: {
            subtitle: "Digitale Lösungen nach Maß",
            description:
              "Für Unternehmen mit individuellen Funktionen, Automatisierung, Mehrsprachigkeit oder komplexeren Integrationen.",
            benefits: [
              "Individuelle Projektarchitektur",
              "CMS, Mehrsprachigkeit und Integrationen",
              "Automatisierung und AI-Funktionen",
            ],
            deliveryTime: "Projektzeit nach Umfang",
          },
          detail: {
            subtitle: "Digitale Lösungen nach Maß",
            description:
              "Für Unternehmen mit individuellen Funktionen, Automatisierung, Mehrsprachigkeit oder komplexeren Integrationen.",
            deliveryTime: "Projektzeit nach Umfang",
            revisions: "3 Korrekturrunden",
            features: [
              "Individuelle Projektarchitektur",
              "Website oder Web-Anwendung",
              "Mehrsprachigkeit",
              "CMS, wo sinnvoll",
              "Terminbuchung",
              "API-Integrationen",
              "Automatisierung",
              "AI-Funktionen nach Projektbedarf",
            ],
            ctaLabel: "Projekt anfragen",
          },
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
      packageChanged: "Paket {name} ausgewählt",
      learnMore: "Mehr erfahren",
      learnMoreAria: "Mehr über das Paket {name} erfahren",
      backToPackages: "Zurück zu Angeboten",
      deliveryLabel: "Umsetzung",
      revisionsLabel: "Korrekturen",
      note:
        "Alle Preise gelten als Ausgangspreise. Der endgültige Preis hängt vom Umfang und den gewünschten Funktionen ab. Domain, Hosting, kostenpflichtige Lizenzen und Rechtstexte werden separat vereinbart.",
    },
    references: {
      projects: [
        {
          id: "steinoutlet",
          title: "STEINOutlet",
          compact: {
            category: "DIGITALER KÜCHENKONFIGURATOR",
            subtitle: "Interaktive Website für Küchen und Arbeitsplatten",
            description:
              "Kunden laden ihre Küche hoch, wählen Materialien aus und visualisieren eine neue Arbeitsplatte.",
          },
          detail: {
            subtitle:
              "Interaktive Website für Arbeitsplatten und Küchenvisualisierung",
            category: "CASE STUDY · DIGITALER KÜCHENKONFIGURATOR",
            description:
              "Eine moderne Plattform, auf der Kunden ihre Küche hochladen, Materialien auswählen und die gewünschte Arbeitsplatte visualisieren können.",
            summary: {
              challenge:
                "Komplexe Materialauswahl einfach und verständlich präsentieren.",
              solution:
                "Ein geführter visueller Ablauf mit Upload, Materialwahl und Vorschau.",
              outcome:
                "Ein klarer digitaler Beratungsweg für interessierte Küchenkunden.",
            },
          },
          imageAlt:
            "Startseite von STEINOutlet mit Küchenkonfigurator und Arbeitsplattenvergleich",
        },
        {
          id: "aura",
          title: "AURA",
          compact: {
            category: "BEAUTY-STUDIO · LANDINGPAGE",
            subtitle: "Mobile-first Website für ein modernes Nagelstudio",
            description:
              "Elegante Landingpage mit Video-Hero, Galerie, mehreren Sprachen und direktem Buchungsweg.",
          },
          detail: {
            subtitle: "Premium Landingpage für ein modernes Nagelstudio",
            category: "CASE STUDY · LANDINGPAGE · BEAUTY-STUDIO",
            description:
              "Eine elegante mobile-first Website mit Video-Hero, mehrsprachiger Struktur, Galerie und direktem Buchungsweg.",
            summary: {
              challenge:
                "Atmosphäre, Leistungen und Terminbuchung in einer kompakten Website verbinden.",
              solution:
                "Eine visuelle Landingpage mit klarer Navigation und starker mobiler Präsentation.",
              outcome:
                "Ein professioneller digitaler Auftritt mit einfachem Weg zur Buchung.",
            },
          },
          imageAlt:
            "Mobile Startseite des AURA Nail Atelier mit Navigation und Termin-CTA",
        },
      ],
      changeProject: "Projekt wechseln",
      previousProject: "Vorheriges Projekt",
      nextProject: "Nächstes Projekt",
      carouselLabel: "Referenzprojekte",
      slideLabel: "{current} von {total}: {project}",
      projectChanged: "{project} ausgewählt",
      learnMore: "Mehr erfahren",
      learnMoreAria: "Mehr über {project} erfahren",
      backToProjects: "Zurück zu Referenzen",
      summary: {
        challenge: "Aufgabe",
        solution: "Lösung",
        outcome: "Ergebnis",
      },
      technologies: "Technologien",
      liveWebsite: "Live-Website öffnen",
      liveWebsiteAria: "Live-Website von {project} in neuem Tab öffnen",
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
          maxLengthError: "Der Name darf höchstens 100 Zeichen enthalten.",
        },
        company: {
          label: "Unternehmen oder Branche",
          placeholder: "Zum Beispiel Handwerksbetrieb, Salon, Restaurant",
          error: "Bitte geben Sie Ihr Unternehmen oder Ihre Branche ein.",
          maxLengthError:
            "Unternehmen oder Branche dürfen höchstens 150 Zeichen enthalten.",
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
          maxLengthError:
            "Die Projektbeschreibung darf höchstens 1.200 Zeichen enthalten.",
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
