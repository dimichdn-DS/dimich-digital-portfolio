"use client";

import Image from "next/image";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type UIEvent as ReactUIEvent,
  useEffect,
  useRef,
  useState,
} from "react";

export type ActivePanel =
  | "about"
  | "services"
  | "offers"
  | "references"
  | "contact"
  | "impressum"
  | "privacy";

const panelMeta: Record<ActivePanel, { label: string; title: string }> = {
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
  references: {
    label: "REFERENZEN",
    title: "Referenzen",
  },
  contact: {
    label: "KONTAKT",
    title: "Projekt besprechen",
  },
  impressum: {
    label: "IMPRESSUM",
    title: "Impressum",
  },
  privacy: {
    label: "DATENSCHUTZ",
    title: "Datenschutzerklärung",
  },
};

const services = [
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
];

const serviceTypes = [
  "Handwerker",
  "Bauunternehmen",
  "Küchenstudios",
  "Restaurants & Cafés",
  "Salons & Beauty",
  "Autowerkstätten",
  "Lokale Dienstleistungen",
  "Individuelle Projekte",
];

type ServicePackage = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  idealFor: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
};

const servicePackages: ServicePackage[] = [
  {
    id: "start",
    name: "START",
    subtitle: "Professioneller Online-Start",
    price: "ab 890 €",
    description:
      "Professioneller Einstieg für kleine Unternehmen, Selbstständige, Studios und lokale Dienstleister.",
    idealFor:
      "Eine kompakte Website, die Leistungen klar präsentiert und erste Kundenanfragen generiert.",
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
    ctaLabel: "Paket anfragen",
  },
  {
    id: "business",
    name: "BUSINESS",
    subtitle: "Website für planbare Anfragen",
    price: "ab 1.690 €",
    description:
      "Ein vollständiger Unternehmensauftritt für Firmen, die regelmäßig neue Kunden gewinnen möchten.",
    idealFor:
      "Handwerksbetriebe, Restaurants, Studios, Werkstätten, Bauunternehmen und lokale Dienstleister.",
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
    ctaLabel: "Paket anfragen",
    highlighted: true,
  },
  {
    id: "individual",
    name: "INDIVIDUAL",
    subtitle: "Digitale Lösungen nach Maß",
    price: "ab 3.490 €",
    description:
      "Individuelle digitale Lösung mit erweiterten Funktionen, Automatisierung und Integrationen.",
    idealFor:
      "Unternehmen mit komplexeren Prozessen, mehreren Sprachen oder individuellen digitalen Anforderungen.",
    deliveryTime: "4–6 Wochen",
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
    ctaLabel: "Projekt besprechen",
  },
];

type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  targetAudience: string;
  businessGoal: string;
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  liveUrl: string;
  technologies: string[];
  features: string[];
};

const portfolioProjects: PortfolioProject[] = [
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
    image: "/images/references/steinoutlet-homepage.png",
    imageAlt:
      "Startseite von STEINOutlet mit Küchenkonfigurator und Arbeitsplattenvergleich",
    imageFit: "cover",
    liveUrl: "https://kitchen-manufaktur.vercel.app",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Workers AI",
      "Vercel",
    ],
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
    image: "/images/references/aura-homepage.png",
    imageAlt:
      "Mobile Startseite des AURA Nail Atelier mit Navigation und Termin-CTA",
    imageFit: "contain",
    liveUrl: "https://aura-landing-two-zeta.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    features: [
      "Cinematic Video-Hero",
      "Mehrsprachige Struktur",
      "Direkter Buchungsweg",
      "Mobile-first Umsetzung",
      "Responsive Design",
    ],
  },
];

const contactServices = [
  "Neue Website",
  "Website-Redesign",
  "Landingpage",
  "Google Maps / lokale Sichtbarkeit",
  "Wartung oder technische Hilfe",
  "Noch nicht sicher",
];

const contactBudgets = [
  "Noch offen",
  "Bis 1.000 €",
  "1.000–2.500 €",
  "2.500–5.000 €",
  "Über 5.000 €",
];

type BriefingField = "name" | "company" | "service" | "description";
type BriefingErrors = Partial<Record<BriefingField, string>>;
type BriefingChannel = "whatsapp" | "email";

const CONTACT_EMAIL = "dimich.dn@gmail.com";
const WHATSAPP_URL = "https://wa.me/49784442215";

export function ContentPanel({
  activePanel,
  onClose,
  onRequestPackage,
  selectedPackage,
}: {
  activePanel: ActivePanel | null;
  onClose: () => void;
  onRequestPackage: (packageName: string) => void;
  selectedPackage: string | null;
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!activePanel) {
      return;
    }

    const activePanelElement = panelRef.current;

    if (!activePanelElement) {
      return;
    }

    const panelElement: HTMLElement = activePanelElement;

    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    function getFocusableElements() {
      return Array.from(
        panelElement.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.getClientRects().length > 0);
    }

    function keepFocusInsidePanel(event: KeyboardEvent) {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }

      const activeElement = document.activeElement;

      if (
        event.shiftKey &&
        (activeElement === firstElement ||
          !panelElement.contains(activeElement))
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        (activeElement === lastElement ||
          !panelElement.contains(activeElement))
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", keepFocusInsidePanel, true);
    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    });

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", keepFocusInsidePanel, true);
    };
  }, [activePanel]);

  if (!activePanel) {
    return null;
  }

  const meta = panelMeta[activePanel];

  return (
    <div
      className="content-panel-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="content-panel-title"
    >
      <button
        type="button"
        aria-label="Panel über Hintergrund schließen"
        tabIndex={-1}
        className="content-panel-dismiss-layer"
        onClick={onClose}
      />

      <section
        ref={panelRef}
        className="content-panel"
        data-panel={activePanel}
      >
        <header className="content-panel-header">
          <div className="content-panel-heading">
            <p
              id={
                activePanel === "references" || activePanel === "offers"
                  ? "content-panel-title"
                  : undefined
              }
              className="content-panel-eyebrow"
            >
              {meta.label}
            </p>
            {activePanel !== "references" && activePanel !== "offers" && (
              <h2 id="content-panel-title" className="content-panel-title">
                {meta.title}
              </h2>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            autoFocus
            className="content-panel-close"
            aria-label="Panel schließen"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
            >
              <path d="M5 5 19 19M19 5 5 19" />
            </svg>
          </button>
        </header>

        <div
          className="content-panel-scroll"
          role="region"
          tabIndex={0}
          aria-label={`${meta.label}: Inhalt`}
        >
          <div className="content-panel-body">
            {activePanel === "about" && <AboutPanel />}
            {activePanel === "services" && <ServicesPanel />}
            {activePanel === "offers" && (
              <OffersPanel onRequestPackage={onRequestPackage} />
            )}
            {activePanel === "references" && <ReferencesPanel />}
            {activePanel === "contact" && (
              <ContactPanel selectedPackage={selectedPackage} />
            )}
            {activePanel === "impressum" && <ImpressumPanel />}
            {activePanel === "privacy" && <PrivacyPanel />}
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="panel-editorial panel-about">
      <p className="panel-lead">
        Ich entwickle moderne Websites für kleine Unternehmen in Deutschland:
        klar strukturiert, mobil optimiert und auf echte Anfragen ausgerichtet.
      </p>

      <p className="panel-copy">
        Ich verbinde Design, technische Umsetzung und ein praktisches
        Verständnis dafür, was lokale Unternehmen wirklich brauchen: einen
        professionellen Online-Auftritt, der Vertrauen schafft und Kunden den
        nächsten Schritt leicht macht.
      </p>

      <p className="panel-accent-copy">
        Mein Fokus liegt auf klarer Kommunikation, sauberer Umsetzung und
        digitalen Lösungen, die nicht nur gut aussehen, sondern im Alltag
        funktionieren.
      </p>

      <dl className="panel-facts" aria-label="Arbeitsfelder">
        <div>
          <dt>Design</dt>
          <dd>Ruhige visuelle Systeme, die Vertrauen schaffen.</dd>
        </div>
        <div>
          <dt>Development</dt>
          <dd>Saubere Umsetzung mit Fokus auf Geschwindigkeit.</dd>
        </div>
        <div>
          <dt>AI-ready</dt>
          <dd>Moderne Funktionen, wenn sie dem Projekt wirklich helfen.</dd>
        </div>
      </dl>
    </div>
  );
}

function ServicesPanel() {
  return (
    <div className="panel-editorial">
      <p className="panel-intro">
        Moderne Websites für lokale Unternehmen, die professionell auftreten
        und online mehr Anfragen gewinnen möchten.
      </p>

      <div className="panel-service-list">
        {services.map((service) => (
          <article key={service.title} className="panel-service-row">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span aria-hidden="true">→</span>
          </article>
        ))}
      </div>

      <p className="panel-sector-line">{serviceTypes.join(" · ")}</p>
    </div>
  );
}

function OffersPanel({
  onRequestPackage,
}: {
  onRequestPackage: (packageName: string) => void;
}) {
  const gestureStartRef = useRef<{ x: number; y: number } | null>(null);
  const [activePackageIndex, setActivePackageIndex] = useState(0);

  function showPackage(index: number) {
    const nextIndex = Math.min(
      Math.max(index, 0),
      servicePackages.length - 1,
    );

    setActivePackageIndex(nextIndex);
  }

  function handlePackageKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" && activePackageIndex > 0) {
      event.preventDefault();
      showPackage(activePackageIndex - 1);
    }

    if (
      event.key === "ArrowRight" &&
      activePackageIndex < servicePackages.length - 1
    ) {
      event.preventDefault();
      showPackage(activePackageIndex + 1);
    }
  }

  function handlePackagePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    gestureStartRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePackagePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const start = gestureStartRef.current;
    gestureStartRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!start) {
      return;
    }

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const isHorizontalIntent =
      Math.abs(deltaX) >= 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15;

    if (!isHorizontalIntent) {
      return;
    }

    showPackage(activePackageIndex + (deltaX < 0 ? 1 : -1));
  }

  return (
    <div className="panel-editorial panel-offers">
      <div className="portfolio-carousel-toolbar service-package-carousel-toolbar">
        <p className="portfolio-carousel-counter" aria-live="polite">
          {String(activePackageIndex + 1).padStart(2, "0")} / {" "}
          {String(servicePackages.length).padStart(2, "0")}
        </p>

        <div
          className="portfolio-carousel-arrows service-package-carousel-arrows"
          aria-label="Paket wechseln"
        >
          <button
            type="button"
            onClick={() => showPackage(activePackageIndex - 1)}
            disabled={activePackageIndex === 0}
            aria-label="Vorheriges Paket"
          >
            <CarouselArrow direction="previous" />
          </button>
          <button
            type="button"
            onClick={() => showPackage(activePackageIndex + 1)}
            disabled={activePackageIndex === servicePackages.length - 1}
            aria-label="Nächstes Paket"
          >
            <CarouselArrow direction="next" />
          </button>
        </div>
      </div>

      <div
        className="service-package-carousel"
        role="region"
        aria-roledescription="Karussell"
        aria-label="Website-Pakete"
        tabIndex={0}
        onKeyDown={handlePackageKeyDown}
        onPointerDown={handlePackagePointerDown}
        onPointerUp={handlePackagePointerUp}
        onPointerCancel={() => {
          gestureStartRef.current = null;
        }}
      >
        <div
          className="service-package-track"
          style={{ transform: `translate3d(-${activePackageIndex * 100}%, 0, 0)` }}
        >
          {servicePackages.map((servicePackage, index) => {
            const isActive = index === activePackageIndex;

            return (
              <div
                key={servicePackage.id}
                className="service-package-slide"
                aria-hidden={!isActive}
              >
                <article
                  className={`service-package-card${
                    servicePackage.highlighted ? " is-highlighted" : ""
                  }`}
                  role="group"
                  aria-roledescription="Slide"
                  aria-label={`${index + 1} von ${servicePackages.length}: ${servicePackage.name}`}
                >
                  <header className="service-package-header">
                    <div>
                      <h3 className="service-package-name">
                        {servicePackage.name}
                      </h3>
                      <p className="service-package-subtitle">
                        {servicePackage.subtitle}
                      </p>
                      <p className="service-package-price">
                        {servicePackage.price}
                      </p>
                    </div>
                    {servicePackage.highlighted && (
                      <span className="service-package-recommendation">
                        EMPFOHLEN
                      </span>
                    )}
                  </header>

                  <p className="service-package-description">
                    {servicePackage.description}
                  </p>

                  <dl className="service-package-facts">
                    <div className="service-package-ideal">
                      <dt>Ideal für</dt>
                      <dd>{servicePackage.idealFor}</dd>
                    </div>
                    <div>
                      <dt>Umsetzung</dt>
                      <dd>{servicePackage.deliveryTime}</dd>
                    </div>
                    <div>
                      <dt>Korrekturen</dt>
                      <dd>{servicePackage.revisions}</dd>
                    </div>
                  </dl>

                  <section
                    className="service-package-features"
                    aria-labelledby={`${servicePackage.id}-features`}
                  >
                    <h4 id={`${servicePackage.id}-features`}>Enthalten</h4>
                    <ul>
                      {servicePackage.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </section>

                  <button
                    type="button"
                    className="portfolio-action service-package-action"
                    onClick={() => onRequestPackage(servicePackage.name)}
                    aria-label={`${servicePackage.name}: ${servicePackage.ctaLabel}`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {servicePackage.ctaLabel}
                  </button>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="portfolio-carousel-pagination service-package-pagination"
        aria-label="Paket auswählen"
      >
        {servicePackages.map((servicePackage, index) => (
          <button
            key={servicePackage.id}
            type="button"
            className={index === activePackageIndex ? "is-active" : undefined}
            onClick={() => showPackage(index)}
            aria-label={`${servicePackage.name} anzeigen`}
            aria-current={index === activePackageIndex ? "true" : undefined}
          />
        ))}
      </div>

      <p className="service-package-note">
        Alle Preise gelten als Ausgangspreise. Der endgültige Preis hängt vom
        Umfang und den gewünschten Funktionen ab. Domain, Hosting,
        kostenpflichtige Lizenzen und Rechtstexte werden separat vereinbart.
      </p>
    </div>
  );
}

function ReferencesPanel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  function scrollToProject(index: number) {
    const track = trackRef.current;
    const projectElement = track?.children.item(index) as HTMLElement | null;

    if (!track || !projectElement) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      left: projectElement.offsetLeft - track.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveProjectIndex(index);
  }

  function handleProjectScroll(event: ReactUIEvent<HTMLDivElement>) {
    const track = event.currentTarget;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    const projects = Array.from(track.children) as HTMLElement[];
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    projects.forEach((project, index) => {
      const projectCenter =
        project.offsetLeft - track.offsetLeft + project.offsetWidth / 2;
      const distance = Math.abs(projectCenter - trackCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeProjectIndex) {
      setActiveProjectIndex(closestIndex);
    }
  }

  function handleCarouselKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" && activeProjectIndex > 0) {
      event.preventDefault();
      scrollToProject(activeProjectIndex - 1);
    }

    if (
      event.key === "ArrowRight" &&
      activeProjectIndex < portfolioProjects.length - 1
    ) {
      event.preventDefault();
      scrollToProject(activeProjectIndex + 1);
    }
  }

  return (
    <div className="panel-editorial panel-references">
      <div className="portfolio-carousel-toolbar">
        <p className="portfolio-carousel-counter" aria-live="polite">
          {String(activeProjectIndex + 1).padStart(2, "0")} / {" "}
          {String(portfolioProjects.length).padStart(2, "0")}
        </p>

        <div className="portfolio-carousel-arrows" aria-label="Projekt wechseln">
          <button
            type="button"
            onClick={() => scrollToProject(activeProjectIndex - 1)}
            disabled={activeProjectIndex === 0}
            aria-label="Vorheriges Projekt"
          >
            <CarouselArrow direction="previous" />
          </button>
          <button
            type="button"
            onClick={() => scrollToProject(activeProjectIndex + 1)}
            disabled={activeProjectIndex === portfolioProjects.length - 1}
            aria-label="Nächstes Projekt"
          >
            <CarouselArrow direction="next" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="portfolio-carousel-track"
        role="region"
        aria-roledescription="Karussell"
        aria-label="Portfolio-Projekte"
        tabIndex={0}
        onScroll={handleProjectScroll}
        onKeyDown={handleCarouselKeyDown}
      >
        {portfolioProjects.map((project, index) => (
          <CaseStudy
            key={project.id}
            project={project}
            index={index}
            total={portfolioProjects.length}
          />
        ))}
      </div>

      <div className="portfolio-carousel-pagination" aria-label="Projekt auswählen">
        {portfolioProjects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={index === activeProjectIndex ? "is-active" : undefined}
            onClick={() => scrollToProject(index)}
            aria-label={`${project.title} anzeigen`}
            aria-current={index === activeProjectIndex ? "true" : undefined}
          />
        ))}
      </div>

      <p className="portfolio-carousel-hint" aria-hidden="true">
        Horizontal wischen oder Pfeiltasten verwenden
      </p>
    </div>
  );
}

function CaseStudy({
  project,
  index,
  total,
}: {
  project: PortfolioProject;
  index: number;
  total: number;
}) {
  return (
    <article
      className="portfolio-project"
      role="group"
      aria-roledescription="Slide"
      aria-label={`${index + 1} von ${total}: ${project.title}`}
    >
      <div className="portfolio-browser-frame">
        <div className="portfolio-browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>{project.liveUrl.replace("https://", "")}</p>
        </div>
        <div className={`portfolio-project-image portfolio-project-image-${project.imageFit}`}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 767px) calc(100vw - 72px), (max-width: 1199px) 78vw, 900px"
            className="portfolio-project-image-media"
          />
        </div>
      </div>

      <div className="portfolio-project-content">
        <div className="portfolio-project-identity">
          <p>Case Study · {project.category}</p>
          <h3>{project.title}</h3>
          <h4>{project.subtitle}</h4>
        </div>

        <p className="portfolio-project-description">{project.description}</p>

        <dl className="portfolio-project-brief">
          <div>
            <dt>Für wen</dt>
            <dd>{project.targetAudience}</dd>
          </div>
          <div>
            <dt>Business-Ziel</dt>
            <dd>{project.businessGoal}</dd>
          </div>
        </dl>

        <div id={`${project.id}-details`} className="portfolio-project-details">
          <section aria-labelledby={`${project.id}-technologies`}>
            <h5 id={`${project.id}-technologies`}>Technologien</h5>
            <ul className="portfolio-technology-list">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby={`${project.id}-features`}>
            <h5 id={`${project.id}-features`}>Funktionen & Vorteile</h5>
            <ul className="portfolio-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="portfolio-project-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} Live-Website in neuem Tab ansehen`}
            className="portfolio-action"
          >
            Live-Website ansehen
          </a>
          <a href={`#${project.id}-details`} className="portfolio-action">
            Details ansehen
          </a>
        </div>
      </div>
    </article>
  );
}

function CarouselArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      {direction === "previous" ? (
        <path d="m14.5 6-6 6 6 6M9 12h9" />
      ) : (
        <path d="m9.5 6 6 6-6 6M15 12H6" />
      )}
    </svg>
  );
}

function ContactPanel({ selectedPackage }: { selectedPackage: string | null }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const companyRef = useRef<HTMLInputElement | null>(null);
  const serviceRef = useRef<HTMLSelectElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const [errors, setErrors] = useState<BriefingErrors>({});
  const selectedService = selectedPackage
    ? `Website-Paket: ${selectedPackage}`
    : "";

  function clearError(field: BriefingField) {
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function prepareBriefingMessage() {
    const form = formRef.current;

    if (!form) {
      return null;
    }

    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      budget: String(formData.get("budget") ?? "Noch offen").trim(),
      description: String(formData.get("description") ?? "").trim(),
    };
    const nextErrors: BriefingErrors = {};

    if (!values.name) {
      nextErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }

    if (!values.company) {
      nextErrors.company =
        "Bitte geben Sie Ihr Unternehmen oder Ihre Branche ein.";
    }

    if (!values.service) {
      nextErrors.service = "Bitte wählen Sie eine Leistung aus.";
    }

    if (!values.description) {
      nextErrors.description = "Bitte beschreiben Sie kurz Ihr Projekt.";
    }

    setErrors(nextErrors);

    const firstInvalidField = (
      ["name", "company", "service", "description"] as BriefingField[]
    ).find((field) => nextErrors[field]);

    if (firstInvalidField) {
      const fieldRefs = {
        name: nameRef,
        company: companyRef,
        service: serviceRef,
        description: descriptionRef,
      };

      requestAnimationFrame(() => {
        fieldRefs[firstInvalidField].current?.focus({ preventScroll: false });
      });
      return null;
    }

    const message = [
      "Hallo, ich interessiere mich für eine Website.",
      "",
      `Name: ${values.name}`,
      `Unternehmen / Branche: ${values.company}`,
      `Benötigt: ${values.service}`,
      `Budget: ${values.budget || "Noch offen"}`,
      "",
      "Projektbeschreibung:",
      values.description,
      "",
      "Quelle:",
      "KPTS WERK Website",
    ].join("\n");
    return message;
  }

  function sendBriefing(channel: BriefingChannel) {
    const message = prepareBriefingMessage();

    if (!message) {
      return;
    }

    if (channel === "whatsapp") {
      const link = document.createElement("a");

      link.href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
      return;
    }

    const subject = "Projektanfrage über KPTS WERK";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
  }

  return (
    <div className="panel-editorial panel-contact">
      <p className="panel-lead">
        Sie möchten eine moderne Website für Ihr Unternehmen? Schreiben Sie mir
        kurz, worum es geht — ich melde mich mit einem klaren nächsten Schritt.
      </p>
      <p className="panel-copy">
        Ob Handwerksbetrieb, Küchenstudio, Restaurant, Salon oder lokaler
        Service: Ich helfe dabei, einen professionellen digitalen Auftritt
        aufzubauen.
      </p>

      {selectedPackage && (
        <p className="panel-selected-package">
          Ausgewähltes Paket <strong>{selectedPackage}</strong>
        </p>
      )}

      <form
        ref={formRef}
        className="panel-briefing-form"
        noValidate
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="panel-briefing-grid">
          <div className="panel-briefing-field">
            <label htmlFor="briefing-name">Ihr Name</label>
            <input
              ref={nameRef}
              id="briefing-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Vor- und Nachname"
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={
                errors.name ? "briefing-name-error" : undefined
              }
              onChange={() => clearError("name")}
            />
            {errors.name && (
              <p
                id="briefing-name-error"
                className="panel-briefing-error"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="panel-briefing-field">
            <label htmlFor="briefing-company">Unternehmen oder Branche</label>
            <input
              ref={companyRef}
              id="briefing-company"
              name="company"
              type="text"
              required
              autoComplete="organization"
              placeholder="Zum Beispiel Handwerksbetrieb, Salon, Restaurant"
              aria-invalid={errors.company ? "true" : undefined}
              aria-describedby={
                errors.company ? "briefing-company-error" : undefined
              }
              onChange={() => clearError("company")}
            />
            {errors.company && (
              <p
                id="briefing-company-error"
                className="panel-briefing-error"
                role="alert"
              >
                {errors.company}
              </p>
            )}
          </div>

          <div className="panel-briefing-field">
            <label htmlFor="briefing-service">Was wird benötigt?</label>
            <select
              ref={serviceRef}
              id="briefing-service"
              name="service"
              required
              defaultValue={selectedService}
              aria-invalid={errors.service ? "true" : undefined}
              aria-describedby={
                errors.service ? "briefing-service-error" : undefined
              }
              onChange={() => clearError("service")}
            >
              <option value="" disabled>
                Bitte auswählen
              </option>
              {selectedPackage && (
                <option value={selectedService}>{selectedService}</option>
              )}
              {contactServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p
                id="briefing-service-error"
                className="panel-briefing-error"
                role="alert"
              >
                {errors.service}
              </p>
            )}
          </div>

          <div className="panel-briefing-field">
            <label htmlFor="briefing-budget">Geplanter Budget-Rahmen</label>
            <select
              id="briefing-budget"
              name="budget"
              defaultValue="Noch offen"
            >
              {contactBudgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>

          <div className="panel-briefing-field panel-briefing-field-wide">
            <label htmlFor="briefing-description">
              Worum geht es bei Ihrem Projekt?
            </label>
            <textarea
              ref={descriptionRef}
              id="briefing-description"
              name="description"
              required
              rows={5}
              maxLength={1200}
              placeholder="Beschreiben Sie kurz Ihr Unternehmen, Ihr Ziel und was die neue Website erreichen soll."
              aria-invalid={errors.description ? "true" : undefined}
              aria-describedby={
                errors.description
                  ? "briefing-description-error"
                  : undefined
              }
              onChange={() => clearError("description")}
            />
            {errors.description && (
              <p
                id="briefing-description-error"
                className="panel-briefing-error"
                role="alert"
              >
                {errors.description}
              </p>
            )}
          </div>
        </div>

        <div className="panel-briefing-actions">
          <button
            type="button"
            className="panel-briefing-submit panel-briefing-submit-primary"
            onClick={() => sendBriefing("whatsapp")}
          >
            Per WhatsApp senden
            <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            className="panel-briefing-submit"
            onClick={() => sendBriefing("email")}
          >
            Per E-Mail senden
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <p className="panel-briefing-privacy">
          Mit dem Absenden wird nur eine Nachricht in WhatsApp oder im
          E-Mail-Programm vorbereitet. Es werden keine Daten auf dieser Website
          gespeichert.
        </p>
      </form>

      <div className="panel-contact-note">
        <p>Antwort innerhalb von 24h</p>
        <dl>
          <div>
            <dt>Start</dt>
            <dd>Kurzes Erstgespräch</dd>
          </div>
          <div>
            <dt>Fokus</dt>
            <dd>Klare Website, mehr Vertrauen, mehr Anfragen</dd>
          </div>
          <div>
            <dt>Umsetzung</dt>
            <dd>Design, Entwicklung, Veröffentlichung</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function ImpressumPanel() {
  return (
    <div className="panel-editorial panel-legal">
      <section>
        <h3>Angaben gemäß § 5 TMG</h3>
        <div className="panel-legal-address">
          <p>KPTS WERK</p>
          <p>Dmitry K.</p>
          <p>Deutschland</p>
        </div>
      </section>

      <section>
        <h3>Kontakt</h3>
        <a href="mailto:dimich.dn@gmail.com">dimich.dn@gmail.com</a>
      </section>

      <section>
        <h3>Verantwortlich für den Inhalt</h3>
        <p>Dmitry K.</p>
      </section>

      <p className="panel-legal-notice">
        Hinweis: Dieses Impressum ist ein Platzhalter und wird vor der
        Veröffentlichung mit den finalen rechtlichen Angaben ergänzt.
      </p>
    </div>
  );
}

function PrivacyPanel() {
  const privacySections = [
    {
      title: "1. Allgemeine Hinweise",
      text: "Diese Website dient der Präsentation von Webdesign- und Entwicklungsleistungen.",
    },
    {
      title: "2. Kontaktaufnahme",
      text: "Wenn Sie per E-Mail oder über einen Kontaktlink Kontakt aufnehmen, werden die von Ihnen übermittelten Angaben zur Bearbeitung der Anfrage verwendet.",
    },
    {
      title: "3. Cookies und Tracking",
      text: "Falls später Cookies, Analyse-Tools oder externe Dienste eingesetzt werden, wird diese Datenschutzerklärung entsprechend erweitert.",
    },
    {
      title: "4. Externe Dienste",
      text: "Falls später WhatsApp, Hosting, Fonts, Analyse-Tools oder andere externe Dienste aktiv eingebunden werden, werden diese hier aufgeführt.",
    },
  ];

  return (
    <div className="panel-editorial panel-legal panel-privacy">
      <p className="panel-lead">
        Diese Datenschutzerklärung ist ein Platzhalter.
      </p>
      <p className="panel-copy">
        Auf dieser Website werden aktuell keine komplexen Tracking- oder
        Analysefunktionen eingesetzt. Vor der Veröffentlichung wird diese
        Datenschutzerklärung entsprechend der finalen technischen Umsetzung
        ergänzt.
      </p>

      <div className="panel-privacy-sections">
        {privacySections.map((section) => (
          <section key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </section>
        ))}
      </div>

      <section>
        <h3>Kontakt</h3>
        <a href="mailto:dimich.dn@gmail.com">dimich.dn@gmail.com</a>
      </section>

      <p className="panel-legal-notice">
        Hinweis: Dieser Text ist ein Platzhalter und ersetzt keine rechtliche
        Prüfung.
      </p>
    </div>
  );
}
