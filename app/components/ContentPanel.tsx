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

const brandFacts = [
  ["01", "Design", "Ruhige visuelle Systeme, die Vertrauen schaffen."],
  ["02", "Development", "Saubere Umsetzung mit Fokus auf Geschwindigkeit."],
  ["03", "AI-ready", "Moderne Funktionen, wenn sie dem Projekt wirklich helfen."],
];

const services = [
  {
    title: "Websites für lokale Unternehmen",
    description:
      "Klar strukturierte Auftritte für Handwerk, Bau, Küchenstudios, Restaurants, Beauty und lokale Services.",
  },
  {
    title: "Responsive Design",
    description:
      "Layouts, die auf Desktop, iPhone und Android hochwertig wirken und ohne Reibung bedienbar bleiben.",
  },
  {
    title: "Digitale Kundenanfragen",
    description:
      "Kontaktwege, klare Nutzerführung und Inhalte, die Besuchern den nächsten Schritt einfach machen.",
  },
  {
    title: "AI-ready Lösungen",
    description:
      "Upload-Flows, Visualisierungskonzepte, Landingpages und digitale Funktionen, die erweiterbar bleiben.",
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
    index: "01",
    title: "STEINOutlet",
    subtitle: "AI Kitchen Visualization Platform",
    url: "",
    description:
      "Eine moderne digitale Plattform für Küchenarbeitsplatten mit AI-gestützter Visualisierung. Nutzer können ein Küchenfoto hochladen, Materialien auswählen und eine neue Arbeitsplatte digital erleben.",
    results: [
      "Premium Website für Küchen & Arbeitsplatten",
      "Upload-Flow für Küchenfotos",
      "Materialauswahl für Naturstein, Keramik und Quarzkomposit",
      "AI-ready Visualisierungskonzept",
      "Responsive Design für Desktop, iPhone und Android",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "AI-ready",
      "Responsive Design",
      "Kitchen Studio",
      "Local Business",
    ],
  },
  {
    index: "02",
    title: "AURA",
    subtitle: "Premium Nail Studio Landing Page",
    url: "https://aura-landing-two-zeta.vercel.app",
    description:
      "Dark elegant landing page for a nail studio with video hero, multilingual structure, booking CTA and mobile-first layout.",
    results: [
      "Video hero with dark elegant atmosphere",
      "Multilingual structure for studio visitors",
      "Booking CTA and mobile-first layout",
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
      "Beauty Studio",
      "Responsive Design",
    ],
  },
];

const contactNotes = [
  ["Start", "Kurzes Erstgespräch"],
  ["Fokus", "Klare Website, mehr Vertrauen, mehr Anfragen"],
  ["Umsetzung", "Design, Entwicklung, Veröffentlichung"],
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
      className="content-panel-backdrop fixed inset-0 z-50 flex items-center justify-center px-4 py-5 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="content-panel-title"
    >
      <button
        type="button"
        aria-label="Panel über Hintergrund schließen"
        tabIndex={-1}
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <section className="content-panel relative max-h-[88vh] w-full max-w-[1180px] overflow-hidden rounded-[2.2rem] border border-[#d89b3a]/18 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(12,12,12,0.18)_38%,rgba(0,0,0,0.24)),rgba(5,6,8,0.18)] shadow-[0_38px_130px_rgba(0,0,0,0.46),0_0_90px_rgba(216,155,58,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[3px] sm:rounded-[2.8rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d89b3a]/42 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#d89b3a]/[0.025] blur-3xl"
        />

        <div className="relative flex items-start justify-between gap-5 px-6 pb-5 pt-7 sm:px-9 sm:pt-9 lg:px-12">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#d89b3a]/72">
              {meta.label}
            </p>
            <h2
              id="content-panel-title"
              className="mt-4 text-[clamp(2.1rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#f8f5ee]"
            >
              {meta.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d89b3a]/22 bg-black/15 text-xl leading-none text-[#f8f5ee]/82 transition hover:-translate-y-0.5 hover:border-[#d89b3a]/42 hover:bg-[#d89b3a]/[0.07] hover:text-[#f3d38a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
            aria-label="Panel schließen"
          >
            ×
          </button>
        </div>

        <div className="relative max-h-[calc(88vh-10.5rem)] overflow-y-auto px-6 pb-8 pt-3 sm:px-9 sm:pb-10 lg:px-12">
          {activePanel === "about" && <AboutPanel />}
          {activePanel === "services" && <ServicesPanel />}
          {activePanel === "references" && <ReferencesPanel />}
          {activePanel === "contact" && <ContactPanel />}
          {activePanel === "impressum" && <ImpressumPanel />}
          {activePanel === "privacy" && <PrivacyPanel />}
        </div>
      </section>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl space-y-6 text-xl leading-9 text-slate-200/88 sm:text-2xl sm:leading-10">
        <p>
          Ich entwickle moderne Websites für kleine Unternehmen in Deutschland:
          klar strukturiert, mobil optimiert und auf echte Anfragen
          ausgerichtet.
        </p>
        <p className="text-base leading-8 text-slate-300/78 sm:text-lg">
          Ich verbinde Design, technische Umsetzung und ein praktisches
          Verständnis dafür, was lokale Unternehmen wirklich brauchen: einen
          professionellen Online-Auftritt, der Vertrauen schafft und Kunden den
          nächsten Schritt leicht macht.
        </p>
        <p className="max-w-3xl border-l border-[#d89b3a]/28 pl-5 text-base leading-8 text-slate-400 sm:text-lg">
          Mein Fokus liegt auf klarer Kommunikation, sauberer Umsetzung und
          digitalen Lösungen, die nicht nur gut aussehen, sondern im Alltag
          funktionieren.
        </p>
      </div>

      <div className="grid gap-6 border-t border-white/[0.08] pt-7 md:grid-cols-3">
        {brandFacts.map(([number, label, text]) => (
          <div key={label} className="space-y-4">
            <p className="font-mono text-xs tracking-[0.24em] text-[#d89b3a]/62">
              {number}
            </p>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#f8f5ee]">
              {label}
            </h3>
            <p className="text-sm leading-7 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesPanel() {
  return (
    <div className="space-y-10">
      <p className="max-w-3xl text-lg leading-8 text-slate-300/86 sm:text-xl sm:leading-9">
        Moderne Websites für lokale Unternehmen, die professionell auftreten
        und online mehr Anfragen gewinnen möchten.
      </p>

      <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="grid gap-5 py-7 md:grid-cols-[8rem_1fr] lg:grid-cols-[9rem_0.8fr_1fr]"
          >
            <p className="font-mono text-sm tracking-[0.3em] text-[#d89b3a]/65">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-2xl font-semibold tracking-[-0.045em] text-[#f8f5ee] sm:text-3xl">
              {service.title}
            </h3>
            <p className="max-w-2xl text-base leading-8 text-slate-400">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm uppercase tracking-[0.18em] text-slate-400">
        {serviceTypes.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ReferencesPanel() {
  return (
    <div className="space-y-10">
      <p className="max-w-3xl text-lg leading-8 text-slate-300/86 sm:text-xl sm:leading-9">
        Ein Blick auf Projekte, die moderne Websites, klare Nutzerführung und
        digitale Funktionen verbinden.
      </p>

      <div className="space-y-10">
        {caseStudies.map((project) => (
          <CaseStudy key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function CaseStudy({
  project,
}: {
  project: (typeof caseStudies)[number];
}) {
  return (
    <article className="relative overflow-hidden border-t border-[#d89b3a]/18 pt-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-end">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#d89b3a]/65">
            {project.index} / Case Study
          </p>
          <h3 className="mt-4 text-[clamp(2.4rem,6vw,5.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f8f5ee]">
            {project.title}
          </h3>
          <p className="mt-3 text-xl font-medium tracking-[-0.03em] text-[#d89b3a] sm:text-2xl">
            {project.subtitle}
          </p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm text-slate-400 underline decoration-[#d89b3a]/35 underline-offset-4 transition hover:text-[#f3d38a] focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
            >
              {project.url}
            </a>
          )}
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300/86 sm:text-lg">
            {project.description}
          </p>
        </div>

        <div className="case-visual-frame min-h-[11rem] overflow-hidden rounded-[2rem] border border-white/[0.1] bg-white/[0.025] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#d89b3a]/58">
            Portfolio
          </p>
          <p className="mt-8 text-5xl font-semibold tracking-[-0.08em] text-[#f8f5ee]/88">
            {project.title}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_18rem]">
        <ul className="grid gap-4 sm:grid-cols-2">
          {project.results.map((item) => (
            <li
              key={item}
              className="border-l border-[#d89b3a]/25 pl-4 text-sm leading-7 text-slate-300"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap content-start gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-slate-400">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ContactPanel() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-start">
      <div className="max-w-4xl">
        <p className="text-2xl leading-10 text-slate-100/90 sm:text-3xl sm:leading-[1.35]">
          Sie möchten eine moderne Website für Ihr Unternehmen? Schreiben Sie
          mir kurz, worum es geht.
        </p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          Ob Handwerksbetrieb, Küchenstudio, Restaurant, Salon oder lokaler
          Service: Ich helfe dabei, einen professionellen digitalen Auftritt
          aufzubauen und den nächsten Schritt klar zu machen.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d89b3a]/34 bg-[#d89b3a]/[0.085] px-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#f3d38a] shadow-[0_18px_54px_rgba(216,155,58,0.08)] transition hover:-translate-y-0.5 hover:border-[#d89b3a]/52 hover:bg-[#d89b3a]/[0.12] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
          >
            WhatsApp schreiben
          </a>
          <a
            href="mailto:dimich.dn@gmail.com"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.032] px-7 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:-translate-y-0.5 hover:border-[#d89b3a]/38 hover:text-[#f3d38a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
          >
            E-Mail senden
          </a>
        </div>
      </div>

      <aside className="space-y-5 border-l border-[#d89b3a]/18 pl-6">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#d89b3a]/65">
          Antwort innerhalb von 24h
        </p>
        {contactNotes.map(([label, value]) => (
          <div key={label} className="space-y-1">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              {label}
            </p>
            <p className="text-base leading-7 text-slate-300">{value}</p>
          </div>
        ))}
      </aside>
    </div>
  );
}

function ImpressumPanel() {
  return (
    <div className="max-w-4xl space-y-9 text-base leading-8 text-slate-300 sm:text-lg">
      <section className="space-y-5 border-t border-white/[0.08] pt-7">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#d89b3a]/62">
          Angaben gemäß § 5 TMG
        </p>
        <div className="text-2xl leading-9 tracking-[-0.035em] text-[#f8f5ee]">
          <p>DIMICH DIGITAL</p>
          <p>Dmitry K.</p>
          <p>Deutschland</p>
        </div>
      </section>

      <section className="grid gap-7 border-t border-white/[0.08] pt-7 sm:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d89b3a]/58">
            E-Mail
          </p>
          <a
            href="mailto:dimich.dn@gmail.com"
            className="mt-3 inline-flex text-slate-200 transition hover:text-[#f3d38a] focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
          >
            dimich.dn@gmail.com
          </a>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d89b3a]/58">
            Verantwortlich für den Inhalt
          </p>
          <p className="mt-3 text-slate-200">Dmitry K.</p>
        </div>
      </section>

      <p className="max-w-3xl border-l border-[#d89b3a]/24 pl-5 text-sm leading-7 text-slate-400 sm:text-base">
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
    <div className="max-w-5xl space-y-9">
      <div className="max-w-4xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
        <p className="text-2xl leading-9 text-slate-100/90">
          Diese Datenschutzerklärung ist ein Platzhalter.
        </p>
        <p className="text-slate-400">
          Auf dieser Website werden aktuell keine komplexen Tracking- oder
          Analysefunktionen eingesetzt. Vor der Veröffentlichung wird diese
          Datenschutzerklärung entsprechend der finalen technischen Umsetzung
          ergänzt.
        </p>
      </div>

      <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {privacySections.map((section) => (
          <section key={section.title} className="grid gap-4 py-6 md:grid-cols-[18rem_1fr]">
            <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#f8f5ee]">
              {section.title}
            </h3>
            <p className="text-sm leading-7 text-slate-400">{section.text}</p>
          </section>
        ))}
      </div>

      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d89b3a]/58">
          Kontakt
        </p>
        <a
          href="mailto:dimich.dn@gmail.com"
          className="inline-flex text-slate-200 transition hover:text-[#f3d38a] focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
        >
          dimich.dn@gmail.com
        </a>
      </div>

      <p className="max-w-3xl border-l border-[#d89b3a]/24 pl-5 text-sm leading-7 text-slate-400 sm:text-base">
        Hinweis: Dieser Text ist ein Platzhalter und ersetzt keine rechtliche
        Prüfung.
      </p>
    </div>
  );
}
