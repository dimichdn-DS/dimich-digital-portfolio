export type ActivePanel =
  | "about"
  | "services"
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
  references: {
    label: "REFERENZEN",
    title: "Ausgewählte digitale Arbeiten",
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

const caseStudies = [
  {
    title: "STEINOutlet",
    subtitle: "AI Kitchen Visualization Platform",
    url: "https://kitchen-manufaktur.vercel.app",
    action: "Live Demo ansehen",
    description:
      "Eine moderne digitale Plattform für Küchenarbeitsplatten mit AI-gestützter Visualisierung.",
    problem:
      "Materialien und neue Arbeitsplatten lassen sich vor einer Entscheidung nur schwer im eigenen Raum einschätzen.",
    solution:
      "Nutzer laden ein Küchenfoto hoch, wählen Naturstein, Keramik oder Quarzkomposit und erleben die neue Oberfläche digital.",
    results: [
      "Premium Website für Küchen & Arbeitsplatten",
      "Upload-Flow für Küchenfotos",
      "AI-ready Visualisierungskonzept",
      "Responsive für Desktop, iPhone und Android",
    ],
    tags: ["Next.js", "TypeScript", "AI-ready", "Responsive Design"],
  },
  {
    title: "AURA",
    subtitle: "Premium Nail Studio Landing Page",
    url: "https://aura-landing-two-zeta.vercel.app",
    action: "Live Demo ansehen",
    description:
      "Dark elegant landing page for a nail studio with video hero, multilingual structure, booking CTA and mobile-first layout.",
    problem:
      "Das Studio brauchte einen hochwertigen digitalen Auftritt, der Atmosphäre und Buchungsweg auf jedem Gerät verbindet.",
    solution:
      "Eine fokussierte Landingpage mit Video-Hero, mehrsprachiger Struktur, klarer Booking-CTA und mobile-first Layout.",
    results: [
      "Cinematic video hero",
      "Multilingual structure",
      "Direct booking journey",
      "Mobile-first implementation",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Vercel", "Beauty Studio"],
  },
];

export function ContentPanel({
  activePanel,
  onClose,
}: {
  activePanel: ActivePanel | null;
  onClose: () => void;
}) {
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

      <section className="content-panel" data-panel={activePanel}>
        <header className="content-panel-header">
          <div className="content-panel-heading">
            <p className="content-panel-eyebrow">{meta.label}</p>
            <h2 id="content-panel-title" className="content-panel-title">
              {meta.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            autoFocus={activePanel === "references"}
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

        <div className="content-panel-scroll">
          <div className="content-panel-body">
            {activePanel === "about" && <AboutPanel />}
            {activePanel === "services" && <ServicesPanel />}
            {activePanel === "references" && <ReferencesPanel />}
            {activePanel === "contact" && <ContactPanel />}
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

function ReferencesPanel() {
  return (
    <div className="panel-editorial panel-references">
      <p className="panel-intro">
        Ein Blick auf Projekte, die moderne Websites, klare Nutzerführung und
        digitale Funktionen verbinden.
      </p>

      <div className="panel-case-track" aria-label="Portfolio-Projekte">
        {caseStudies.map((project) => (
          <CaseStudy key={project.title} project={project} />
        ))}
      </div>

      <p className="panel-swipe-hint" aria-hidden="true">
        01 / 02 · Wischen, um Projekte anzusehen
      </p>
    </div>
  );
}

function CaseStudy({
  project,
}: {
  project: (typeof caseStudies)[number];
}) {
  return (
    <article className="panel-case">
      <div className="panel-case-visual" aria-hidden="true">
        <span>PROJECT / {project.title}</span>
        <strong>{project.title.slice(0, 2)}</strong>
      </div>

      <div className="panel-case-heading">
        <p>Case Study</p>
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>
      </div>

      <p className="panel-case-description">{project.description}</p>

      <div className="panel-case-brief">
        <div>
          <h5>Aufgabe</h5>
          <p>{project.problem}</p>
        </div>
        <div>
          <h5>Lösung</h5>
          <p>{project.solution}</p>
        </div>
      </div>

      <ul className="panel-case-results">
        {project.results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="panel-case-footer">
        <p className="panel-case-tags">{project.tags.join(" · ")}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} Live Demo in neuem Tab öffnen`}
          className="panel-text-action"
        >
          {project.action} <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

function ContactPanel() {
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

      <div className="panel-contact-actions">
        <a href="#" className="panel-contact-action panel-contact-primary">
          <span>WhatsApp schreiben</span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="mailto:dimich.dn@gmail.com"
          className="panel-contact-action"
        >
          <span>E-Mail senden</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

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
          <p>DIMICH DIGITAL</p>
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
