const profileRows = [
  "Web Developer",
  "Modern Websites",
  "Responsive Design",
  "AI-ready Lösungen",
  "Local Business Germany",
];

const contextRows = ["Germany", "Small Business", "Websites & Digital Solutions"];

const metrics = [
  { value: "01", label: "Design" },
  { value: "02", label: "Development" },
  { value: "03", label: "AI-ready" },
];

export function AboutSection() {
  return (
    <section
      id="ueber-mich"
      aria-labelledby="ueber-mich-title"
      className="relative isolate overflow-hidden bg-[#05070b] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(105,128,255,0.09),transparent_30%),radial-gradient(circle_at_78%_38%,rgba(55,193,230,0.11),transparent_34%),linear-gradient(180deg,#05070b_0%,#070b12_50%,#05070b_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(125,226,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(125,226,255,0.022)_1px,transparent_1px)] bg-[size:72px_72px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-24 -z-10 h-96 w-96 rounded-full bg-cyan-300/[0.055] blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="hero-reveal max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/60">
            ÜBER MICH
          </p>
          <h2
            id="ueber-mich-title"
            className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-6xl"
          >
            Digitale Websites mit klarem Blick auf lokale Kunden.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>
              Ich entwickle moderne Websites für kleine Unternehmen in
              Deutschland — klar strukturiert, mobil optimiert und auf echte
              Anfragen ausgerichtet.
            </p>
            <p>
              Ich verbinde Design, technische Umsetzung und ein praktisches
              Verständnis dafür, was lokale Unternehmen wirklich brauchen: einen
              professionellen Online-Auftritt, der Vertrauen schafft und Kunden
              den nächsten Schritt leicht macht.
            </p>
          </div>

          <p className="mt-7 max-w-2xl border-l border-cyan-200/20 pl-5 text-base leading-8 text-slate-400 sm:text-lg">
            Mein Fokus liegt auf klarer Kommunikation, sauberer Umsetzung und
            digitalen Lösungen, die nicht nur gut aussehen, sondern im Alltag
            funktionieren.
          </p>
        </div>

        <aside
          aria-label="DIMICH DIGITAL Profil"
          className="hero-reveal hero-reveal-delay-1 group relative overflow-hidden rounded-[1.65rem] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28),0_0_44px_rgba(48,213,255,0.07),inset_0_0_42px_rgba(125,226,255,0.025)] backdrop-blur-xl transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-cyan-200/22 hover:bg-cyan-100/[0.045] hover:shadow-[0_30px_92px_rgba(0,0,0,0.32),0_0_58px_rgba(48,213,255,0.1),inset_0_0_48px_rgba(125,226,255,0.04)] sm:p-6 lg:p-7"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(rgba(125,226,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(125,226,255,0.03)_1px,transparent_1px)] bg-[size:38px_38px] opacity-45"
          />
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/[0.05] blur-3xl transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="relative flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/65">
                DIMICH DIGITAL
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-50">
                Web Developer
              </p>
            </div>
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-cyan-200/80 shadow-[0_0_20px_rgba(125,226,255,0.65)]"
            />
          </div>

          <div className="relative mt-6 rounded-2xl border border-cyan-100/[0.08] bg-black/10 p-3">
            <div className="flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-100/[0.045] px-3 py-2 text-xs font-medium text-cyan-50/80">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-emerald-300/80 shadow-[0_0_14px_rgba(110,231,183,0.58)]"
              />
              Available for selected projects
            </div>
          </div>

          <div className="relative mt-6 space-y-2.5">
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

          <div className="relative mt-6 grid gap-2 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3"
              >
                <p className="font-mono text-xs text-cyan-100/55">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {contextRows.map((row) => (
              <span
                key={row}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300/85"
              >
                {row}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
