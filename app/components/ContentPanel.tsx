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

const profileRows = [
  "Web Developer",
  "Modern Websites",
  "Responsive Design",
  "AI-ready Lösungen",
  "Local Business Germany",
];

const services = [
  {
    title: "Handwerker-Websites",
    description:
      "Für Maler, Elektriker, Sanitärbetriebe, Bodenleger und andere Fachbetriebe.",
  },
  {
    title: "Bauunternehmen",
    description:
      "Professionelle Online-Auftritte für Bau, Renovierung, Innenausbau und lokale Projekte.",
  },
  {
    title: "Küchenstudios",
    description:
      "Moderne Websites für Küchenstudios, Arbeitsplatten, Möbelbau und Einrichtung.",
  },
  {
    title: "Restaurants & Cafés",
    description:
      "Klare Websites mit Speisekarte, Öffnungszeiten, Reservierung und Kontaktmöglichkeiten.",
  },
  {
    title: "Salons & Beauty",
    description:
      "Websites für Friseure, Kosmetikstudios, Nagelstudios und lokale Beauty-Angebote.",
  },
  {
    title: "Autowerkstätten",
    description:
      "Websites für Werkstätten, Fahrzeugpflege, Reifenservice und lokale Auto-Services.",
  },
  {
    title: "Lokale Dienstleistungen",
    description:
      "Für Reinigungsdienste, Hausmeisterservice, Umzüge, Reparaturen und weitere lokale Anbieter.",
  },
  {
    title: "Individuelle Projekte",
    description:
      "Spezielle digitale Lösungen, Landingpages, Portfolio-Seiten und AI-gestützte Funktionen.",
  },
];

const steinOutletBullets = [
  "Premium Website für Küchen & Arbeitsplatten",
  "Upload-Flow für Küchenfotos",
  "Materialauswahl für Naturstein, Keramik und Quarzkomposit",
  "AI-ready Visualisierungskonzept",
  "Responsive Design für Desktop, iPhone und Android",
];

const steinOutletTags = [
  "Next.js",
  "TypeScript",
  "AI-ready",
  "Responsive Design",
  "Kitchen Studio",
  "Local Business",
];

const materialChips = ["Naturstein", "Keramik", "Quarzkomposit"];
const previewStatus = ["Responsive", "Mobile ready", "AI-ready"];
const contactHighlights = [
  "Germany",
  "Websites für lokale Unternehmen",
  "Responsive Design",
  "AI-ready Lösungen",
];
const contactRows = [
  {
    label: "Start",
    value: "Kurzes Erstgespräch",
  },
  {
    label: "Fokus",
    value: "Klare Website, mehr Vertrauen, mehr Anfragen",
  },
  {
    label: "Umsetzung",
    value: "Design, Entwicklung, Veröffentlichung",
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

      <section className="content-panel relative max-h-[86vh] w-full max-w-[1080px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[radial-gradient(circle_at_50%_0%,rgba(125,226,255,0.1),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025)),rgba(5,10,16,0.76)] shadow-[0_28px_110px_rgba(0,0,0,0.48),0_0_70px_rgba(48,213,255,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:rounded-[2.4rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(125,226,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(125,226,255,0.026)_1px,transparent_1px)] bg-[size:54px_54px] opacity-45"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-200/[0.055] blur-3xl"
        />

        <div className="relative flex items-start justify-between gap-4 border-b border-white/[0.07] px-5 py-5 sm:px-7">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/60">
              {meta.label}
            </p>
            <h2
              id="content-panel-title"
              className="mt-2 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-4xl"
            >
              {meta.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-xl leading-none text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-200/28 hover:bg-cyan-100/[0.06] hover:text-cyan-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/25"
            aria-label="Panel schließen"
          >
            ×
          </button>
        </div>

        <div className="relative max-h-[calc(86vh-7.5rem)] overflow-y-auto px-5 py-6 sm:px-7 sm:py-7">
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
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
        <p>
          Ich entwickle moderne Websites für kleine Unternehmen in Deutschland
          — klar strukturiert, mobil optimiert und auf echte Anfragen
          ausgerichtet.
        </p>
        <p>
          Ich verbinde Design, technische Umsetzung und ein praktisches
          Verständnis dafür, was lokale Unternehmen wirklich brauchen: einen
          professionellen Online-Auftritt, der Vertrauen schafft und Kunden den
          nächsten Schritt leicht macht.
        </p>
        <p className="border-l border-cyan-200/20 pl-5 text-slate-400">
          Mein Fokus liegt auf klarer Kommunikation, sauberer Umsetzung und
          digitalen Lösungen, die nicht nur gut aussehen, sondern im Alltag
          funktionieren.
        </p>
      </div>

      <div className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[inset_0_0_38px_rgba(125,226,255,0.03)]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/65">
          DIMICH DIGITAL
        </p>
        <div className="mt-5 space-y-2.5">
          {profileRows.map((row) => (
            <div
              key={row}
              className="flex min-h-11 items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm text-slate-300"
            >
              <span>{row}</span>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-200/55"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesPanel() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <article
          key={service.title}
          className="rounded-[1.1rem] border border-white/[0.08] bg-white/[0.035] p-4 shadow-[inset_0_0_32px_rgba(125,226,255,0.025)]"
        >
          <p className="font-mono text-xs text-cyan-100/45">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-50">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            {service.description}
          </p>
        </article>
      ))}
    </div>
  );
}

function ReferencesPanel() {
  return (
    <div className="space-y-6">
      <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
        Ein Blick auf Projekte, die moderne Websites, klare Nutzerführung und
        digitale Funktionen verbinden.
      </p>

      <article className="relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[0_22px_78px_rgba(0,0,0,0.3),0_0_46px_rgba(48,213,255,0.08),inset_0_0_42px_rgba(125,226,255,0.03)] sm:p-6 lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:gap-7">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-200/[0.045] blur-3xl"
        />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/65">
            STEINOutlet
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-4xl">
            AI Kitchen Visualization Platform
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Eine moderne digitale Plattform für Küchenarbeitsplatten mit
            AI-gestützter Visualisierung. Nutzer können ein Küchenfoto
            hochladen, Materialien auswählen und eine neue Arbeitsplatte digital
            erleben.
          </p>

          <ul className="mt-6 space-y-3">
            {steinOutletBullets.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-6 text-slate-300"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70 shadow-[0_0_14px_rgba(125,226,255,0.55)]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {steinOutletTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300/85"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-100/[0.055] px-6 text-sm font-semibold text-cyan-50 shadow-[0_18px_54px_rgba(48,213,255,0.08)] transition hover:-translate-y-0.5 hover:border-cyan-200/36 hover:bg-cyan-100/[0.08] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/25"
          >
            Case Study ansehen
          </a>
        </div>

        <SteinOutletMockup />
      </article>
    </div>
  );
}

function SteinOutletMockup() {
  return (
    <div className="relative mt-7 overflow-hidden rounded-[1.35rem] border border-cyan-100/[0.09] bg-[radial-gradient(circle_at_50%_12%,rgba(125,226,255,0.1),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02)),rgba(3,7,12,0.72)] p-3 shadow-[inset_0_0_42px_rgba(125,226,255,0.04)] sm:p-4 lg:mt-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(125,226,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(125,226,255,0.024)_1px,transparent_1px)] bg-[size:36px_36px] opacity-35"
      />
      <div className="relative overflow-hidden rounded-[1.1rem] border border-white/[0.08] bg-[#060b12]/90 shadow-[0_20px_56px_rgba(0,0,0,0.25)]">
        <div className="flex min-h-11 items-center gap-3 border-b border-white/[0.07] bg-white/[0.035] px-3 sm:px-4">
          <div className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300/55" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-200/55" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/55" />
          </div>
          <span className="min-w-0 flex-1 truncate rounded-full border border-white/[0.07] bg-black/18 px-3 py-1 text-xs font-medium text-slate-300/78">
            steinoutlet.de
          </span>
          <span className="shrink-0 rounded-full border border-cyan-200/16 bg-cyan-100/[0.06] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cyan-100/75">
            AI Preview
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="rounded-[1rem] border border-white/[0.07] bg-[radial-gradient(circle_at_80%_16%,rgba(125,226,255,0.09),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/58">
              STEINOutlet
            </p>
            <h4 className="mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-50">
              Neue Arbeitsplatten digital erleben.
            </h4>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300/82">
              Küchenfoto hochladen, Material wählen und AI-Vorschau starten.
            </p>
            <span className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/18 bg-cyan-100/[0.06] px-4 text-sm font-semibold text-cyan-50 shadow-[0_12px_38px_rgba(48,213,255,0.08)]">
              Küchenfoto hochladen
            </span>
          </div>

          <div className="mt-4 grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-[0.9rem] border border-white/[0.07] bg-white/[0.026] p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Before
              </p>
              <div className="mt-3 h-16 rounded-xl bg-[linear-gradient(135deg,rgba(148,163,184,0.12),rgba(15,23,42,0.65)),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:auto,22px_22px]" />
            </div>
            <div
              aria-hidden="true"
              className="mx-auto h-px w-12 bg-gradient-to-r from-transparent via-cyan-100/32 to-transparent sm:h-12 sm:w-px sm:bg-gradient-to-b"
            />
            <div className="rounded-[0.9rem] border border-cyan-100/[0.11] bg-cyan-100/[0.035] p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/62">
                After
              </p>
              <div className="mt-3 h-16 rounded-xl bg-[radial-gradient(circle_at_72%_28%,rgba(125,226,255,0.13),transparent_24%),linear-gradient(120deg,#111820,#273039_38%,#0d131b_68%,#303944)]" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {materialChips.map((material) => (
              <span
                key={material}
                className="rounded-full border border-white/[0.08] bg-white/[0.032] px-3 py-1.5 text-xs font-medium text-slate-300/88"
              >
                {material}
              </span>
            ))}
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {previewStatus.map((status) => (
              <div
                key={status}
                className="flex min-h-10 items-center justify-between rounded-full border border-white/[0.07] bg-white/[0.026] px-3 text-xs font-semibold text-slate-300/82"
              >
                <span>{status}</span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-cyan-200/62 shadow-[0_0_12px_rgba(125,226,255,0.42)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <div className="max-w-3xl">
        <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
          <p>
            Sie möchten eine moderne Website für Ihr Unternehmen? Schreiben Sie
            mir kurz, worum es geht — ich melde mich mit einem klaren nächsten
            Schritt.
          </p>
          <p className="text-slate-400">
            Ob Handwerksbetrieb, Küchenstudio, Restaurant, Salon oder lokaler
            Service: Ich helfe dabei, einen professionellen digitalen Auftritt
            aufzubauen.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/22 bg-cyan-100/[0.06] px-6 text-sm font-semibold text-cyan-50 shadow-[0_18px_54px_rgba(48,213,255,0.1)] transition hover:-translate-y-0.5 hover:border-cyan-200/38 hover:bg-cyan-100/[0.085] hover:shadow-[0_22px_62px_rgba(48,213,255,0.15)] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/25"
          >
            WhatsApp schreiben
          </a>
          <a
            href="mailto:dimich.dn@gmail.com"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] px-6 text-sm font-semibold text-slate-200 shadow-[0_18px_54px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-cyan-200/28 hover:bg-cyan-100/[0.058] hover:text-cyan-50 hover:shadow-[0_20px_58px_rgba(48,213,255,0.1)] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/25"
          >
            E-Mail senden
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-[radial-gradient(circle_at_85%_12%,rgba(125,226,255,0.09),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.022)),rgba(3,7,12,0.68)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28),0_0_42px_rgba(48,213,255,0.07),inset_0_0_38px_rgba(125,226,255,0.03)]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/28 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/[0.05] blur-3xl"
        />

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/62">
              Antwort innerhalb von 24h
            </p>
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-emerald-300/70 shadow-[0_0_16px_rgba(110,231,183,0.45)]"
            />
          </div>

          <div className="mt-5 grid gap-2">
            {contactHighlights.map((item) => (
              <div
                key={item}
                className="flex min-h-10 items-center justify-between gap-3 rounded-full border border-white/[0.07] bg-white/[0.026] px-3 text-sm text-slate-300"
              >
                <span>{item}</span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/58"
                />
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-2.5">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="rounded-[1rem] border border-white/[0.07] bg-white/[0.024] p-4"
              >
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-100/45">
                  {row.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpressumPanel() {
  return (
    <div className="max-w-3xl space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
      <div className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.032] p-5 shadow-[inset_0_0_34px_rgba(125,226,255,0.025)]">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/55">
          Angaben gemäß § 5 TMG
        </p>
        <div className="mt-5 space-y-1 text-slate-200">
          <p>DIMICH DIGITAL</p>
          <p>Dmitry K.</p>
          <p>Deutschland</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1rem] border border-white/[0.07] bg-white/[0.026] p-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/45">
            E-Mail
          </p>
          <a
            href="mailto:dimich.dn@gmail.com"
            className="mt-2 inline-flex text-slate-200 transition hover:text-cyan-100 focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-cyan-300/25"
          >
            dimich.dn@gmail.com
          </a>
        </div>

        <div className="rounded-[1rem] border border-white/[0.07] bg-white/[0.026] p-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/45">
            Verantwortlich für den Inhalt
          </p>
          <p className="mt-2 text-slate-200">Dmitry K.</p>
        </div>
      </div>

      <p className="border-l border-cyan-200/20 pl-5 text-sm leading-7 text-slate-400 sm:text-base">
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
    <div className="max-w-4xl space-y-6">
      <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
        <p>Diese Datenschutzerklärung ist ein Platzhalter.</p>
        <p className="text-slate-400">
          Auf dieser Website werden aktuell keine komplexen Tracking- oder
          Analysefunktionen eingesetzt. Vor der Veröffentlichung wird diese
          Datenschutzerklärung entsprechend der finalen technischen Umsetzung
          ergänzt.
        </p>
      </div>

      <div className="rounded-[1rem] border border-white/[0.07] bg-white/[0.026] p-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/45">
          Kontakt
        </p>
        <a
          href="mailto:dimich.dn@gmail.com"
          className="mt-2 inline-flex text-slate-200 transition hover:text-cyan-100 focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-cyan-300/25"
        >
          dimich.dn@gmail.com
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {privacySections.map((section) => (
          <article
            key={section.title}
            className="rounded-[1.1rem] border border-white/[0.08] bg-white/[0.032] p-4 shadow-[inset_0_0_30px_rgba(125,226,255,0.022)]"
          >
            <h3 className="text-base font-semibold text-slate-100">
              {section.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {section.text}
            </p>
          </article>
        ))}
      </div>

      <p className="border-l border-cyan-200/20 pl-5 text-sm leading-7 text-slate-400 sm:text-base">
        Hinweis: Dieser Text ist ein Platzhalter und ersetzt keine rechtliche
        Prüfung.
      </p>
    </div>
  );
}
