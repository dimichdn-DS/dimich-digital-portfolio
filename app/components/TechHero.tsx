"use client";

import { useEffect, useState } from "react";
import { ContentPanel, type ActivePanel } from "./ContentPanel";

const heroCopy = {
  brand: "DIMICH DIGITAL",
  title: "Websites, die lokale Kunden überzeugen.",
  subtitle:
    "Moderne Websites, digitale Lösungen und klare Online-Auftritte für kleine Unternehmen in Deutschland.",
  description:
    "Ich entwickle schnelle, hochwertige und mobil optimierte Websites, die professionell wirken und aus Besuchern echte Anfragen machen.",
};

const orbitButtons: Array<{
  label: string;
  panel: ActivePanel;
  position: string;
  mobileOrder: string;
  delayClass: string;
  orbitClass: string;
}> = [
  {
    label: "Über mich",
    panel: "about",
    position: "lg:left-[2%] lg:top-[22%]",
    mobileOrder: "order-1",
    delayClass: "orbit-delay-1",
    orbitClass: "orbit-path-a",
  },
  {
    label: "Leistungen",
    panel: "services",
    position: "lg:bottom-[22%] lg:left-[4%]",
    mobileOrder: "order-2",
    delayClass: "orbit-delay-3",
    orbitClass: "orbit-path-c",
  },
  {
    label: "Referenzen",
    panel: "references",
    position: "lg:right-[2%] lg:top-[23%]",
    mobileOrder: "order-3",
    delayClass: "orbit-delay-2",
    orbitClass: "orbit-path-b",
  },
  {
    label: "Kontakt",
    panel: "contact",
    position: "lg:bottom-[21%] lg:right-[4%]",
    mobileOrder: "order-4",
    delayClass: "orbit-delay-4",
    orbitClass: "orbit-path-d",
  },
];

export function TechHero() {
  const [activePanel, setActivePanel] = useState<ActivePanel | null>(null);

  useEffect(() => {
    if (!activePanel) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActivePanel(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePanel]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070b] text-white">
      <section
        id="top"
        className="relative isolate min-h-screen overflow-hidden px-4 py-5 sm:px-6 lg:px-8"
      >
        <HeroBackground />

        <div
          className={`mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-[1240px] flex-col transition duration-500 ${
            activePanel ? "scale-[0.985] opacity-45 blur-[2px]" : ""
          }`}
        >
          <Header onOpenPanel={setActivePanel} />

          <div className="relative flex flex-1 flex-col justify-center py-10 sm:py-14 lg:py-8">
            <OrbitNavigation onOpenPanel={setActivePanel} />
            <HeroContent />
          </div>

          <HeroFooter onOpenPanel={setActivePanel} />
        </div>

        <ContentPanel
          activePanel={activePanel}
          onClose={() => setActivePanel(null)}
        />
      </section>
    </main>
  );
}

function HeroFooter({
  onOpenPanel,
}: {
  onOpenPanel: (panel: ActivePanel) => void;
}) {
  return (
    <footer className="hero-reveal pb-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.28em] text-cyan-100/40">
      <p>[ Digital Minimal System 2026 ]</p>
      <div className="mt-2 flex items-center justify-center gap-2 text-[0.66rem] tracking-[0.18em] text-cyan-100/45">
        <button
          type="button"
          onClick={() => onOpenPanel("impressum")}
          className="transition hover:text-cyan-100 focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-cyan-300/20"
        >
          Impressum
        </button>
        <span aria-hidden="true" className="text-cyan-100/25">
          ·
        </span>
        <button
          type="button"
          onClick={() => onOpenPanel("privacy")}
          className="transition hover:text-cyan-100 focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-cyan-300/20"
        >
          Datenschutz
        </button>
      </div>
    </footer>
  );
}

function Header({
  onOpenPanel,
}: {
  onOpenPanel: (panel: ActivePanel) => void;
}) {
  return (
    <header className="hero-reveal flex min-h-14 items-center justify-between gap-4">
      <a
        href="#top"
        aria-label="DIMICH DIGITAL Startseite"
        className="brand-capsule group inline-flex min-h-10 max-w-[68vw] items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.035] px-3.5 py-2 text-white shadow-[0_10px_34px_rgba(0,0,0,0.16),0_0_18px_rgba(48,213,255,0.035)] backdrop-blur-xl transition hover:border-white/18 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/20 sm:max-w-none sm:px-4"
      >
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/14 bg-white/[0.045] text-xs font-semibold text-cyan-50 shadow-[inset_0_0_10px_rgba(125,226,255,0.055)] sm:h-8 sm:w-8">
          D
        </span>
        <span className="truncate text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-100 sm:text-[0.8rem]">
          {heroCopy.brand}
        </span>
      </a>

      <button
        type="button"
        onClick={() => onOpenPanel("contact")}
        className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.035] px-3.5 text-xs font-semibold text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-200/24 hover:bg-cyan-100/[0.055] hover:text-cyan-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/20 sm:px-4 sm:text-sm"
      >
        Projekt starten
      </button>
    </header>
  );
}

function HeroContent() {
  return (
    <div className="hero-core hero-reveal hero-reveal-delay-1 relative z-10 mx-auto w-full max-w-[860px] px-5 py-10 text-center backdrop-blur-2xl sm:px-10 sm:py-12 lg:px-16 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent"
      />

      <div className="relative">
        <h1 className="hero-title mx-auto max-w-[760px] text-[clamp(2.55rem,5.9vw,5.45rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-slate-50">
          {heroCopy.title}
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-slate-200/88 sm:text-2xl sm:leading-9">
          {heroCopy.subtitle}
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {heroCopy.description}
        </p>
      </div>
    </div>
  );
}

function OrbitNavigation({
  onOpenPanel,
}: {
  onOpenPanel: (panel: ActivePanel) => void;
}) {
  return (
    <nav
      aria-label="Hauptnavigation"
      className="hero-reveal hero-reveal-delay-2 relative z-20 order-2 mt-10 grid gap-3 sm:grid-cols-2 lg:absolute lg:inset-0 lg:order-none lg:mt-0 lg:block"
    >
      {orbitButtons.map((button) => (
        <div
          key={button.panel}
          className={`${button.position} ${button.mobileOrder} ${button.delayClass} ${button.orbitClass} orbit-slot pointer-events-auto lg:absolute`}
        >
          <button
            type="button"
            onClick={() => onOpenPanel(button.panel)}
            className="orbit-capsule inline-flex min-h-12 w-full min-w-[10rem] items-center justify-center gap-3 rounded-full border border-cyan-200/20 bg-white/[0.055] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 shadow-[0_18px_58px_rgba(0,0,0,0.28),0_0_34px_rgba(48,213,255,0.07),inset_0_0_22px_rgba(125,226,255,0.045)] backdrop-blur-xl transition-[transform,border-color,background-color,color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-cyan-200/42 hover:bg-cyan-100/[0.075] hover:text-cyan-50 hover:shadow-[0_22px_68px_rgba(0,0,0,0.32),0_0_54px_rgba(48,213,255,0.14),inset_0_0_28px_rgba(125,226,255,0.07)] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-cyan-200/80 shadow-[0_0_18px_rgba(125,226,255,0.65)]"
            />
            <span>{button.label}</span>
          </button>
        </div>
      ))}
    </nav>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_46%,rgba(55,193,230,0.18),transparent_30%),radial-gradient(circle_at_22%_22%,rgba(105,128,255,0.11),transparent_28%),radial-gradient(circle_at_78%_74%,rgba(79,223,255,0.095),transparent_30%),linear-gradient(180deg,#05070b_0%,#080b12_52%,#040509_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(125,226,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(125,226,255,0.032)_1px,transparent_1px)] bg-[size:72px_72px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.72)_100%)]"
      />
      <div
        aria-hidden="true"
        className="perspective-grid pointer-events-none absolute inset-x-[-8%] bottom-[-18%] -z-10 h-[42vh]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[51%] -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/[0.055]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[51%] -z-10 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/[0.09] shadow-[0_0_100px_rgba(48,213,255,0.08)]"
      />
      <div
        aria-hidden="true"
        className="tech-particles pointer-events-none absolute inset-0 -z-10"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </>
  );
}
