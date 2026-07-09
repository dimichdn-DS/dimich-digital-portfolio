"use client";

import { useEffect, useState } from "react";
import { ContentPanel, type ActivePanel } from "./ContentPanel";

const heroCopy = {
  subtitle:
    "Moderne Websites, digitale Lösungen und klare Online-Auftritte für kleine Unternehmen in Deutschland.",
  description:
    "Ich entwickle schnelle, hochwertige und mobil optimierte Websites, die professionell wirken und aus Besuchern echte Anfragen machen.",
};

const navItems: Array<{
  label: string;
  panel: ActivePanel;
  icon: string;
  highlight?: boolean;
}> = [
  {
    label: "Über mich",
    panel: "about",
    icon: "·",
  },
  {
    label: "Leistungen",
    panel: "services",
    icon: "+",
  },
  {
    label: "Referenzen",
    panel: "references",
    icon: "★",
  },
  {
    label: "Kontakt",
    panel: "contact",
    icon: "→",
  },
  {
    label: "WhatsApp",
    panel: "contact",
    icon: "☎",
    highlight: true,
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
        <HeroBackgroundVideo />
        <HeroBackground />

        <div
          className={`relative z-10 mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-[1240px] flex-col transition duration-500 ${
            activePanel ? "scale-[0.985] opacity-45 blur-[2px]" : ""
          }`}
        >
          <Header
            onReset={() => setActivePanel(null)}
            onOpenPanel={setActivePanel}
          />

          <div className="relative flex flex-1 flex-col justify-center py-8 sm:py-10 lg:py-8">
            <HeroContent onOpenPanel={setActivePanel} />
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
    <footer className="hero-reveal pb-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/36">
      <p>[ Digital Minimal System 2026 ]</p>
      <div className="mt-2 flex items-center justify-center gap-2 text-[0.66rem] tracking-[0.18em] text-white/42">
        <button
          type="button"
          onClick={() => onOpenPanel("impressum")}
          className="transition hover:text-[#d89b3a] focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
        >
          Impressum
        </button>
        <span aria-hidden="true" className="text-[#d89b3a]/55">
          ·
        </span>
        <button
          type="button"
          onClick={() => onOpenPanel("privacy")}
          className="transition hover:text-[#d89b3a] focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
        >
          Datenschutz
        </button>
      </div>
    </footer>
  );
}

function Header({
  onReset,
  onOpenPanel,
}: {
  onReset: () => void;
  onOpenPanel: (panel: ActivePanel) => void;
}) {
  return (
    <header className="hero-reveal flex flex-col items-start gap-4 pt-2 lg:flex-row lg:items-center lg:justify-between lg:pt-3">
      <button
        type="button"
        onClick={onReset}
        aria-label="Zur Startansicht"
        className="brand-capsule brand-logo-button inline-flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
      >
        <img
          src="/images/dimich-digital-logo.png"
          alt="DIMICH DIGITAL"
          className="brand-logo-image"
        />
      </button>

      <HeroNavigation onOpenPanel={onOpenPanel} />
    </header>
  );
}

function HeroBackgroundVideo() {
  return (
    <div
      className="hero-background-video-wrap pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="hero-background-video h-full w-full object-cover"
      >
        <source src="/videos/dimich-office-line-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function HeroContent({
  onOpenPanel,
}: {
  onOpenPanel: (panel: ActivePanel) => void;
}) {
  return (
    <div className="hero-core hero-reveal hero-reveal-delay-1 relative z-10 mx-auto flex w-full max-w-[1140px] items-center justify-center overflow-hidden px-5 py-9 text-center sm:px-10 sm:py-12 lg:min-h-[500px] lg:px-16 lg:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#d89b3a]/45 to-transparent"
      />

      <div className="hero-core-copy relative z-10 mx-auto max-w-[900px] rounded-[2rem]">
        <h1 className="hero-title mx-auto max-w-[900px] text-[clamp(2.45rem,6.7vw,5.25rem)] font-bold leading-[0.99] tracking-[-0.035em] text-slate-50 drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)]">
          <span className="block">Websites, die lokale</span>
          <span className="block">
            Kunden <span className="hero-title-gold">überzeugen.</span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base font-medium leading-8 text-slate-100/88 sm:text-xl sm:leading-9">
          {heroCopy.subtitle}
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300/78 sm:text-base sm:leading-8">
          {heroCopy.description}
        </p>

        <button
          type="button"
          onClick={() => onOpenPanel("services")}
          className="hero-cta-link mt-9 inline-flex min-h-11 items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.3em] focus:outline-none focus-visible:rounded-full focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
        >
          MEHR ERFAHREN
          <span aria-hidden="true">-&gt;</span>
        </button>
      </div>
    </div>
  );
}

function HeroNavigation({
  onOpenPanel,
}: {
  onOpenPanel: (panel: ActivePanel) => void;
}) {
  return (
    <nav
      aria-label="Hauptnavigation"
      className="hero-nav hero-reveal hero-reveal-delay-2 grid w-full max-w-[760px] grid-cols-2 gap-2.5 sm:grid-cols-3 lg:flex lg:w-auto lg:max-w-none lg:flex-wrap lg:justify-end lg:gap-3"
    >
      {navItems.map((item) => (
        <button
          key={`${item.label}-${item.panel}`}
          type="button"
          onClick={() => onOpenPanel(item.panel)}
          className={`hero-nav-pill ${item.highlight ? "hero-nav-pill-accent" : ""}`}
        >
          <span aria-hidden="true" className="hero-nav-icon">
            {item.icon}
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_46%,rgba(216,155,58,0.045),transparent_34%),radial-gradient(circle_at_22%_22%,rgba(80,72,64,0.035),transparent_30%),linear-gradient(180deg,rgba(2,5,10,0.045)_0%,rgba(5,8,13,0.018)_48%,rgba(2,4,8,0.09)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(rgba(216,155,58,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:82px_82px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.006)_54%,rgba(0,0,0,0.12)_100%)]"
      />
      <div
        aria-hidden="true"
        className="perspective-grid pointer-events-none absolute inset-x-[-8%] bottom-[-18%] z-[2] h-[42vh]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[53%] z-[2] h-[38rem] w-[58rem] max-w-[86vw] -translate-x-1/2 -translate-y-1/2 rounded-[56px] border border-white/[0.055]"
      />
      <div
        aria-hidden="true"
        className="tech-particles pointer-events-none absolute inset-0 z-[2]"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </>
  );
}
