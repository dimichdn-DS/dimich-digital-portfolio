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

const tags = ["Website", "Responsive", "Local Business"];

export function ServicesSection() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-title"
      className="relative isolate overflow-hidden bg-[#05070b] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(216,155,58,0.09),transparent_34%),radial-gradient(circle_at_12%_38%,rgba(80,72,64,0.1),transparent_28%),linear-gradient(180deg,#05070b_0%,#080b12_48%,#05070b_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(216,155,58,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.016)_1px,transparent_1px)] bg-[size:72px_72px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#d89b3a]/[0.045] blur-3xl"
      />

      <div className="mx-auto w-full max-w-[1240px]">
        <div className="hero-reveal max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#d89b3a]/70">
            Leistungen
          </p>
          <h2
            id="leistungen-title"
            className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-6xl"
          >
            Welche Websites ich entwickle
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Moderne Websites für lokale Unternehmen, die professionell auftreten
            und online mehr Anfragen gewinnen möchten.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Ich entwickle moderne Websites für kleine Unternehmen in Deutschland
            — klar strukturiert, mobil optimiert und auf echte Kundenanfragen
            ausgerichtet.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay-1 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative min-h-[17rem] overflow-hidden rounded-[1.15rem] border border-[#d89b3a]/14 bg-white/[0.032] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.3),inset_0_0_34px_rgba(216,155,58,0.022)] backdrop-blur-xl transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#d89b3a]/28 hover:bg-[#d89b3a]/[0.045] hover:shadow-[0_24px_76px_rgba(0,0,0,0.34),0_0_42px_rgba(216,155,58,0.08),inset_0_0_42px_rgba(216,155,58,0.035)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d89b3a]/36 to-transparent opacity-70"
              />
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d89b3a]/[0.035] blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#d89b3a]/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#d89b3a]/72 shadow-[0_0_18px_rgba(216,155,58,0.32)]"
                />
              </div>

              <h3 className="relative mt-8 text-xl font-semibold tracking-[-0.02em] text-slate-50">
                {service.title}
              </h3>
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="relative mt-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[0.68rem] font-medium text-slate-300/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
