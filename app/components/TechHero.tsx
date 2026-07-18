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
        className="hero-stage relative isolate min-h-screen overflow-hidden px-4 py-4 sm:px-6 lg:px-8 lg:py-5"
      >
        <HeroBackgroundVideo />
        <HeroBackground />

        <div
          className={`hero-shell relative z-10 mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-[1240px] flex-col transition duration-500 ${
            activePanel ? "scale-[0.985] opacity-45 blur-[2px]" : ""
          }`}
        >
          <Header
            onReset={() => setActivePanel(null)}
            onOpenPanel={setActivePanel}
          />

          <div className="hero-main-slot relative flex flex-1 flex-col justify-center py-3 sm:py-10 lg:py-8">
            <HeroContent onOpenPanel={setActivePanel} />
            <MobileTrustAccent />
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
    <footer className="hero-legal-footer hero-reveal pb-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/36">
      <p>Webdesign für lokale Unternehmen in Deutschland</p>
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

function MobileTrustAccent() {
  return (
    <div className="mobile-trust-accent" aria-label="Leistungsversprechen">
      <p>Webdesign für lokale Unternehmen in Deutschland</p>
      <span>Responsive · Klar strukturiert · Schnell online</span>
    </div>
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
    <header className="hero-reveal flex items-center justify-between gap-3 pt-1 lg:pt-3">
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
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/dimich-hero-mobile-workspace-v1.png"
        preload="metadata"
        className="hero-background-video h-full w-full object-cover"
      >
        <source
          src="/videos/hero/dimich-hero-desktop-workspace-loop-v1.mp4"
          type="video/mp4"
          media="(min-width: 1024px)"
        />
        <source
          src="/videos/hero/dimich-hero-mobile-workspace-loop-v1.mp4"
          type="video/mp4"
          media="(max-width: 1023px)"
        />
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
    <div className="hero-core hero-reveal hero-reveal-delay-1 relative z-10 mx-auto flex w-full max-w-[1140px] items-center justify-center overflow-hidden px-5 py-6 text-center sm:px-10 sm:py-12 lg:min-h-[500px] lg:px-16 lg:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#d89b3a]/45 to-transparent"
      />

      <div className="hero-core-copy relative z-10 mx-auto max-w-[900px] rounded-[2rem]">
        <h1 className="hero-title mx-auto max-w-[900px] text-[clamp(2.28rem,6.7vw,5.25rem)] font-bold leading-[0.99] tracking-[-0.035em] text-slate-50 drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)]">
          <span className="hidden sm:block">Websites, die lokale</span>
          <span className="hidden sm:block">
            Kunden <span className="hero-title-gold">überzeugen.</span>
          </span>
          <span className="block sm:hidden">Websites, die</span>
          <span className="block sm:hidden">lokale Kunden</span>
          <span className="hero-title-gold block sm:hidden">überzeugen.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-slate-100/88 sm:mt-8 sm:text-xl sm:leading-9">
          {heroCopy.subtitle}
        </p>

        <p className="mx-auto mt-5 hidden max-w-2xl text-sm leading-7 text-slate-300/78 sm:block sm:text-base sm:leading-8">
          {heroCopy.description}
        </p>

        <div className="hero-mobile-cta-row mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
          <button
            type="button"
            onClick={() => onOpenPanel("services")}
            className="hero-cta-link hidden min-h-11 items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.3em] focus:outline-none focus-visible:rounded-full focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25 sm:inline-flex lg:hidden"
          >
            MEHR ERFAHREN
            <span aria-hidden="true">-&gt;</span>
          </button>
          <div className="desktop-hero-actions hidden items-center justify-center gap-5 lg:flex">
            <button
              type="button"
              onClick={() => onOpenPanel("contact")}
              className="desktop-primary-cta"
            >
              WEBSITE ANFRAGEN
            </button>
            <button
              type="button"
              onClick={() => onOpenPanel("references")}
              className="desktop-secondary-cta"
            >
              REFERENZEN ANSEHEN
              <span aria-hidden="true">-&gt;</span>
            </button>
          </div>
          <button
            type="button"
            onClick={() => onOpenPanel("contact")}
            className="mobile-primary-cta sm:hidden"
          >
            WEBSITE ANFRAGEN
          </button>
          <button
            type="button"
            onClick={() => onOpenPanel("references")}
            className="mobile-secondary-cta sm:hidden"
          >
            REFERENZEN ANSEHEN
            <span aria-hidden="true">-&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroNavigation({
  onOpenPanel,
}: {
  onOpenPanel: (panel: ActivePanel) => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const standardNavItems = navItems.filter((item) => !item.highlight);

  function openMobilePanel(panel: ActivePanel) {
    setMobileMenuOpen(false);
    onOpenPanel(panel);
  }

  return (
    <nav aria-label="Hauptnavigation" className="hero-nav hero-reveal hero-reveal-delay-2">
      <div className="mobile-hero-actions lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          className="mobile-menu-button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-hero-menu"
        >
          Menü
        </button>
        <button
          type="button"
          onClick={() => openMobilePanel("contact")}
          className="mobile-whatsapp-button"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <WhatsAppIcon />
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-hero-menu" className="mobile-hero-menu lg:hidden">
          {standardNavItems.map((item) => (
            <button
              key={`mobile-${item.label}-${item.panel}`}
              type="button"
              onClick={() => openMobilePanel(item.panel)}
              className="mobile-hero-menu-item"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => openMobilePanel("impressum")}
            className="mobile-hero-menu-item"
          >
            Impressum
          </button>
          <button
            type="button"
            onClick={() => openMobilePanel("privacy")}
            className="mobile-hero-menu-item"
          >
            Datenschutz
          </button>
        </div>
      )}

      <div className="hidden lg:flex lg:w-auto lg:max-w-none lg:flex-wrap lg:justify-end lg:gap-3">
        {navItems.map((item) => (
          <button
            key={`${item.label}-${item.panel}`}
            type="button"
            onClick={() => onOpenPanel(item.panel)}
            className={`hero-nav-pill ${item.highlight ? "hero-nav-pill-accent" : ""}`}
          >
            <span
              aria-hidden="true"
              className={`hero-nav-icon ${item.highlight ? "hero-nav-whatsapp-icon" : ""}`}
            >
              {item.highlight ? <WhatsAppIcon /> : item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="whatsapp-icon"
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.895 6.99c-.002 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
      />
    </svg>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="hero-desktop-video-overlay pointer-events-none absolute inset-0 z-[1]"
      />
      <div
        aria-hidden="true"
        className="hero-mobile-video-overlay pointer-events-none absolute inset-0 z-[1]"
      />
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
        className="hero-desktop-frame-outline pointer-events-none absolute left-1/2 top-[53%] z-[2] h-[38rem] w-[58rem] max-w-[86vw] -translate-x-1/2 -translate-y-1/2 rounded-[56px] border border-white/[0.055]"
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
