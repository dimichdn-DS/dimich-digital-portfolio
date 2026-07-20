"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import { ContentPanel, type ActivePanel } from "./ContentPanel";
import {
  formatMessage,
  localeCookieName,
  localeLabels,
  locales,
  type Locale,
} from "../i18n/config";
import type { HeadlineLine, SiteDictionary } from "../i18n/types";

const WHATSAPP_URL = "https://wa.me/49784442215";

type ProgressiveViewTransition = {
  finished: Promise<void>;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (
    updateCallback: () => void,
  ) => ProgressiveViewTransition;
};

type OpenPanelOptions = {
  beforeUpdate?: () => void;
  returnFocusTo?: HTMLElement | null;
};

type OpenPanel = (panel: ActivePanel, options?: OpenPanelOptions) => void;

function runProgressiveViewTransition(update: () => void) {
  const viewTransitionDocument = document as ViewTransitionDocument;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!viewTransitionDocument.startViewTransition || reduceMotion) {
    update();
    return null;
  }

  document.documentElement.dataset.viewTransitions = "enabled";

  try {
    return viewTransitionDocument.startViewTransition(() => {
      flushSync(update);
    });
  } catch {
    delete document.documentElement.dataset.viewTransitions;
    update();
    return null;
  }
}

const particleIndexes = Array.from({ length: 12 }, (_, index) => index);

export function TechHero({
  locale,
  dictionary,
  brandLogo,
  videoPoster,
}: {
  locale: Locale;
  dictionary: SiteDictionary;
  brandLogo: ReactNode;
  videoPoster: ReactNode;
}) {
  const [activePanel, setActivePanel] = useState<ActivePanel | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const panelOpenerRef = useRef<HTMLElement | null>(null);
  const heroShellRef = useRef<HTMLDivElement | null>(null);

  const openPanel = useCallback(
    (panel: ActivePanel, options?: OpenPanelOptions) => {
      panelOpenerRef.current =
        options?.returnFocusTo ??
        (document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null);

      runProgressiveViewTransition(() => {
        options?.beforeUpdate?.();
        setSelectedPackage(null);
        setActivePanel(panel);
      });
    },
    [],
  );

  const requestPackage = useCallback((packageName: string) => {
    runProgressiveViewTransition(() => {
      setSelectedPackage(packageName);
      setActivePanel("contact");
    });
  }, []);

  const closePanel = useCallback(() => {
    if (!activePanel) {
      return;
    }

    const opener = panelOpenerRef.current;
    const restoreFocus = () => {
      if (opener?.isConnected) {
        opener.focus({ preventScroll: true });
      }

      panelOpenerRef.current = null;
    };
    const transition = runProgressiveViewTransition(() => {
      setActivePanel(null);
    });

    if (transition) {
      void transition.finished.then(restoreFocus, restoreFocus);
    } else {
      requestAnimationFrame(restoreFocus);
    }
  }, [activePanel]);

  useEffect(() => {
    if (!activePanel) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePanel();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePanel, closePanel]);

  useEffect(() => {
    if (!activePanel) {
      return;
    }

    const { body, documentElement } = document;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [activePanel]);

  useEffect(() => {
    const heroShell = heroShellRef.current;

    if (!heroShell) {
      return;
    }

    if (activePanel) {
      heroShell.setAttribute("inert", "");
    } else {
      heroShell.removeAttribute("inert");
    }

    return () => heroShell.removeAttribute("inert");
  }, [activePanel]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {dictionary.hero.skipLink}
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen overflow-x-hidden bg-[#05070b] text-white"
      >
        <section
          id="top"
          className="hero-stage relative isolate min-h-screen overflow-hidden px-4 py-4 sm:px-6 lg:px-8 lg:py-5"
        >
          <HeroBackgroundVideo
            poster={videoPoster}
            isPaused={activePanel !== null}
          />
          <HeroBackground />

          <div
            ref={heroShellRef}
            aria-hidden={activePanel ? "true" : undefined}
            className={`hero-shell relative z-10 mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-[1240px] flex-col transition duration-500 ${
              activePanel ? "scale-[0.985] opacity-45 blur-[2px]" : ""
            }`}
          >
            <Header
              locale={locale}
              copy={dictionary.hero}
              brandLogo={brandLogo}
              onReset={closePanel}
              onOpenPanel={openPanel}
            />

            <div className="hero-main-slot relative flex flex-1 flex-col justify-center py-3 sm:py-10 lg:py-8">
              <HeroContent copy={dictionary.hero} onOpenPanel={openPanel} />
            </div>

            <HeroFooter copy={dictionary.hero} onOpenPanel={openPanel} />
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp-button"
            aria-label={dictionary.hero.whatsappLabel}
            title="WhatsApp"
          >
            <WhatsAppIcon />
          </a>

          <ContentPanel
            activePanel={activePanel}
            selectedPackage={selectedPackage}
            onClose={closePanel}
            onRequestPackage={requestPackage}
            dictionary={dictionary.panels}
          />
        </section>
      </main>
    </>
  );
}

function HeroFooter({
  copy,
  onOpenPanel,
}: {
  copy: SiteDictionary["hero"];
  onOpenPanel: OpenPanel;
}) {
  return (
    <footer className="hero-legal-footer hero-reveal pb-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/36">
      <div className="flex items-center justify-center gap-2 text-[0.66rem] tracking-[0.18em] text-white/42">
        <button
          type="button"
          onClick={() => onOpenPanel("impressum")}
          className="transition hover:text-[#d89b3a] focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
        >
          {copy.legal.impressum}
        </button>
        <span aria-hidden="true" className="text-[#d89b3a]/55">
          ·
        </span>
        <button
          type="button"
          onClick={() => onOpenPanel("privacy")}
          className="transition hover:text-[#d89b3a] focus:outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
        >
          {copy.legal.privacy}
        </button>
      </div>
    </footer>
  );
}

function Header({
  locale,
  copy,
  brandLogo,
  onReset,
  onOpenPanel,
}: {
  locale: Locale;
  copy: SiteDictionary["hero"];
  brandLogo: ReactNode;
  onReset: () => void;
  onOpenPanel: OpenPanel;
}) {
  return (
    <header className="hero-reveal flex items-center justify-between gap-3 pt-1 lg:pt-3">
      <button
        type="button"
        onClick={onReset}
        aria-label={copy.homeLabel}
        className="brand-capsule brand-logo-button inline-flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25"
      >
        {brandLogo}
      </button>

      <HeroNavigation
        locale={locale}
        copy={copy}
        brandLogo={brandLogo}
        onOpenPanel={onOpenPanel}
      />
    </header>
  );
}

function HeroBackgroundVideo({
  poster,
  isPaused,
}: {
  poster: ReactNode;
  isPaused: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isPausedRef = useRef(isPaused);
  const [videoReady, setVideoReady] = useState(false);

  isPausedRef.current = isPaused;

  const requestPlayback = useCallback(() => {
    const video = videoRef.current;

    if (
      !video ||
      isPausedRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const playPromise = video.play();

    if (playPromise) {
      void playPromise.then(
        () => setVideoReady(true),
        () => setVideoReady(false),
      );
    } else {
      setVideoReady(!video.paused);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isPaused) {
      video.pause();
      return;
    }

    requestPlayback();
  }, [isPaused, requestPlayback]);

  useEffect(() => {
    function resumeVisibleVideo() {
      if (!document.hidden) {
        requestPlayback();
      }
    }

    window.addEventListener("pageshow", resumeVisibleVideo);
    document.addEventListener("visibilitychange", resumeVisibleVideo);

    return () => {
      window.removeEventListener("pageshow", resumeVisibleVideo);
      document.removeEventListener("visibilitychange", resumeVisibleVideo);
    };
  }, [requestPlayback]);

  useEffect(() => {
    const video = videoRef.current;
    const viewportQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!video) {
      return;
    }

    function refreshResponsiveSource() {
      setVideoReady(false);
      video?.load();
    }

    viewportQuery.addEventListener("change", refreshResponsiveSource);
    motionQuery.addEventListener("change", refreshResponsiveSource);

    return () => {
      viewportQuery.removeEventListener("change", refreshResponsiveSource);
      motionQuery.removeEventListener("change", refreshResponsiveSource);
    };
  }, []);

  return (
    <div
      className="hero-background-video-wrap pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div
        className={`hero-background-poster ${videoReady ? "hero-background-poster-ready" : ""}`}
      >
        {poster}
      </div>
      <video
        ref={videoRef}
        aria-hidden="true"
        tabIndex={-1}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        onLoadStart={() => setVideoReady(false)}
        onLoadedMetadata={requestPlayback}
        onCanPlay={requestPlayback}
        onPlaying={() => setVideoReady(true)}
        className="hero-background-video h-full w-full object-cover"
      >
        <source
          src="/videos/kpts-werk-office-desktop.mp4"
          type="video/mp4"
          media="(prefers-reduced-motion: no-preference) and (min-width: 768px)"
        />
        <source
          src="/videos/kpts-werk-office-mobile.mp4"
          type="video/mp4"
          media="(prefers-reduced-motion: no-preference) and (max-width: 767px)"
        />
      </video>
    </div>
  );
}

function HeroContent({
  copy,
  onOpenPanel,
}: {
  copy: SiteDictionary["hero"];
  onOpenPanel: OpenPanel;
}) {
  return (
    <div className="hero-core hero-reveal hero-reveal-delay-1 relative z-10 mx-auto flex w-full max-w-[1140px] items-center justify-center overflow-hidden px-5 py-6 text-center sm:px-10 sm:py-12 lg:min-h-[500px] lg:px-16 lg:py-12">
      <div
        aria-hidden="true"
        className="hero-core-top-line pointer-events-none absolute inset-x-10 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#d89b3a]/45 to-transparent"
      />

      <div className="hero-core-copy relative z-10 mx-auto max-w-[900px] rounded-[2rem]">
        <h1 className="hero-title mx-auto max-w-[900px] text-[clamp(2.28rem,6.7vw,5.25rem)] font-bold leading-[0.99] tracking-[-0.035em] text-slate-50 drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)]">
          <LocalizedHeadlineLines
            lines={copy.headlineDesktop}
            className="hidden sm:block"
          />
          <LocalizedHeadlineLines
            lines={copy.headlineMobile}
            className="block sm:hidden"
          />
        </h1>

        <p className="hero-subtitle mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-slate-100/88 sm:mt-8 sm:text-xl sm:leading-9">
          {copy.subtitle}
        </p>

        <p className="hero-description mx-auto mt-5 hidden max-w-2xl text-sm leading-7 text-slate-300/78 sm:block sm:text-base sm:leading-8">
          {copy.description}
        </p>

        <div className="hero-mobile-cta-row mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
          <button
            type="button"
            onClick={() => onOpenPanel("services")}
            className="hero-cta-link hidden min-h-11 items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.3em] focus:outline-none focus-visible:rounded-full focus-visible:ring-4 focus-visible:ring-[#d89b3a]/25 sm:inline-flex lg:hidden"
          >
            {copy.moreAbout}
            <span aria-hidden="true">-&gt;</span>
          </button>
          <div className="desktop-hero-actions hidden items-center justify-center gap-5 lg:flex">
            <button
              type="button"
              onClick={() => onOpenPanel("offers")}
              className="hero-action-button"
            >
              {copy.requestWebsite}
            </button>
            <button
              type="button"
              onClick={() => onOpenPanel("references")}
              className="hero-action-button"
            >
              {copy.viewReferences}
            </button>
          </div>
          <button
            type="button"
            onClick={() => onOpenPanel("offers")}
            className="hero-action-button sm:hidden"
          >
            {copy.requestWebsite} <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenPanel("references")}
            className="hero-action-button sm:hidden"
          >
            {copy.viewReferences}
          </button>
        </div>
      </div>
    </div>
  );
}

function LocalizedHeadlineLines({
  lines,
  className,
}: {
  lines: HeadlineLine[];
  className: string;
}) {
  return lines.map((line, index) => (
    <span key={index} className={className}>
      {line.text ?? line.prefix}
      {line.accent && (
        <span className="hero-title-gold">{line.accent}</span>
      )}
    </span>
  ));
}

function HeroNavigation({
  locale,
  copy,
  brandLogo,
  onOpenPanel,
}: {
  locale: Locale;
  copy: SiteDictionary["hero"];
  brandLogo: ReactNode;
  onOpenPanel: OpenPanel;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopLanguageMenuOpen, setDesktopLanguageMenuOpen] = useState(false);
  const mobileMenuDialogRef = useRef<HTMLDialogElement | null>(null);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const desktopLanguageMenuRef = useRef<HTMLDivElement | null>(null);
  const desktopLanguageTriggerRef = useRef<HTMLButtonElement | null>(null);
  const restoreFocusAfterCloseRef = useRef(true);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const { body, documentElement } = document;
    const scrollPosition = window.scrollY;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const computedBodyPadding = Number.parseFloat(
      window.getComputedStyle(body).paddingRight,
    );
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    const previousHtmlOverflow = documentElement.style.overflow;

    documentElement.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${
        (Number.isFinite(computedBodyPadding) ? computedBodyPadding : 0) +
        scrollbarWidth
      }px`;
    }

    return () => {
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.left = previousBodyStyles.left;
      body.style.right = previousBodyStyles.right;
      body.style.width = previousBodyStyles.width;
      body.style.overflow = previousBodyStyles.overflow;
      body.style.paddingRight = previousBodyStyles.paddingRight;
      window.scrollTo({ top: scrollPosition, left: 0, behavior: "auto" });
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

    function closeMenuAtDesktopBreakpoint(event: MediaQueryListEvent) {
      if (!event.matches) {
        setDesktopLanguageMenuOpen(false);
        return;
      }

      restoreFocusAfterCloseRef.current = false;
      mobileMenuDialogRef.current?.close();
      setMobileMenuOpen(false);
    }

    desktopMediaQuery.addEventListener("change", closeMenuAtDesktopBreakpoint);
    return () =>
      desktopMediaQuery.removeEventListener(
        "change",
        closeMenuAtDesktopBreakpoint,
      );
  }, []);

  useEffect(() => {
    if (!desktopLanguageMenuOpen) {
      return;
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      const menu = desktopLanguageMenuRef.current;

      if (event.target instanceof Node && menu && !menu.contains(event.target)) {
        setDesktopLanguageMenuOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      setDesktopLanguageMenuOpen(false);
      desktopLanguageTriggerRef.current?.focus({ preventScroll: true });
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [desktopLanguageMenuOpen]);

  function handleDesktopLanguageMenuKeyDown(
    event: ReactKeyboardEvent<HTMLDivElement>,
  ) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      return;
    }

    const options = Array.from(
      event.currentTarget.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]'),
    );

    if (options.length === 0) {
      return;
    }

    event.preventDefault();
    const currentIndex = options.indexOf(
      document.activeElement as HTMLAnchorElement,
    );
    let nextIndex = currentIndex;

    if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = options.length - 1;
    } else if (event.key === "ArrowDown") {
      nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
    }

    options[nextIndex]?.focus({ preventScroll: true });
  }

  function closeMobileMenuImmediately(restoreFocus = true) {
    const dialog = mobileMenuDialogRef.current;

    restoreFocusAfterCloseRef.current = restoreFocus;

    if (dialog?.open) {
      dialog.close();
    } else if (restoreFocus) {
      mobileMenuTriggerRef.current?.focus({ preventScroll: true });
    }

    setMobileMenuOpen(false);
  }

  function closeMobileMenu(restoreFocus = true) {
    runProgressiveViewTransition(() => {
      closeMobileMenuImmediately(restoreFocus);
    });
  }

  function openMobileMenu() {
    const dialog = mobileMenuDialogRef.current;

    if (!dialog || dialog.open) {
      return;
    }

    restoreFocusAfterCloseRef.current = true;
    runProgressiveViewTransition(() => {
      dialog.showModal();
      setMobileMenuOpen(dialog.open);
    });
  }

  function handleMobileMenuClosed() {
    setMobileMenuOpen(false);

    if (restoreFocusAfterCloseRef.current) {
      mobileMenuTriggerRef.current?.focus({ preventScroll: true });
    }

    restoreFocusAfterCloseRef.current = true;
  }

  function openMobilePanel(panel: ActivePanel) {
    onOpenPanel(panel, {
      beforeUpdate: () => closeMobileMenuImmediately(false),
      returnFocusTo: mobileMenuTriggerRef.current,
    });
  }

  function rememberLocale(nextLocale: Locale) {
    document.cookie = `${localeCookieName}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }

  return (
    <nav aria-label={copy.navigationLabel} className="hero-nav hero-reveal hero-reveal-delay-2">
      <div className="mobile-hero-actions lg:hidden">
        <button
          ref={mobileMenuTriggerRef}
          type="button"
          onClick={openMobileMenu}
          className="mobile-menu-button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-hero-menu"
        >
          <span className="mobile-menu-glyph" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="mobile-menu-label">
            <span>{localeLabels[locale]}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{copy.menuButton}</span>
          </span>
        </button>
      </div>

      <dialog
        ref={mobileMenuDialogRef}
        id="mobile-hero-menu"
        className="mobile-menu-dialog"
        aria-label={copy.menuDialogLabel}
        aria-modal="true"
        onClose={handleMobileMenuClosed}
        onCancel={(event) => {
          event.preventDefault();
          closeMobileMenu();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeMobileMenu();
          }
        }}
        onClick={(event) => {
          const dialog = mobileMenuDialogRef.current;

          if (dialog && event.target === dialog) {
            closeMobileMenu();
          }
        }}
      >
        <section className="mobile-menu-stage">
          <header className="mobile-menu-header">
            <div className="mobile-menu-brand-logo">{brandLogo}</div>
            <button
              type="button"
              autoFocus
              onClick={() => closeMobileMenu()}
              className="mobile-menu-close"
              aria-label={copy.closeMenuLabel}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div className="mobile-menu-body">
            <div className="mobile-menu-primary-list">
              {copy.navigation.map((item) => (
                <button
                  key={`mobile-${item.panel}`}
                  type="button"
                  onClick={() => openMobilePanel(item.panel)}
                  className="mobile-menu-primary-item"
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mobile-menu-language">
              <p>{copy.languageSwitcher.label}</p>
              <div aria-label={copy.languageSwitcher.ariaLabel}>
                {locales.map((availableLocale) => (
                  <a
                    key={availableLocale}
                    href={`/${availableLocale}`}
                    hrefLang={availableLocale}
                    lang={availableLocale}
                    aria-current={
                      availableLocale === locale ? "page" : undefined
                    }
                    aria-label={formatMessage(
                      copy.languageSwitcher.changeTo,
                      { language: localeLabels[availableLocale] },
                    )}
                    onClick={() => rememberLocale(availableLocale)}
                  >
                    {localeLabels[availableLocale]}
                  </a>
                ))}
              </div>
            </div>

            <div className="mobile-menu-legal">
              <button
                type="button"
                onClick={() => openMobilePanel("impressum")}
              >
                {copy.legal.impressum}
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => openMobilePanel("privacy")}
              >
                {copy.legal.privacy}
              </button>
            </div>
          </div>
        </section>
      </dialog>

      <div className="desktop-hero-navigation hidden lg:flex lg:w-auto lg:max-w-none lg:flex-nowrap lg:justify-end lg:gap-3">
        {copy.navigation.map((item) => (
          <button
            key={item.panel}
            type="button"
            onClick={() => onOpenPanel(item.panel)}
            className="hero-nav-pill"
          >
            <span>{item.label}</span>
          </button>
        ))}

        <div ref={desktopLanguageMenuRef} className="desktop-language-menu">
          <button
            ref={desktopLanguageTriggerRef}
            type="button"
            className="hero-nav-pill desktop-language-trigger"
            aria-label={copy.languageSwitcher.openMenu}
            aria-expanded={desktopLanguageMenuOpen}
            aria-haspopup="menu"
            aria-controls="desktop-language-options"
            onClick={() =>
              setDesktopLanguageMenuOpen((currentOpen) => !currentOpen)
            }
            onKeyDown={(event) => {
              if (event.key !== "ArrowDown") {
                return;
              }

              event.preventDefault();
              setDesktopLanguageMenuOpen(true);
              requestAnimationFrame(() => {
                desktopLanguageMenuRef.current
                  ?.querySelector<HTMLAnchorElement>('[role="menuitem"]')
                  ?.focus({ preventScroll: true });
              });
            }}
          >
            <span>{localeLabels[locale]}</span>
            <span className="desktop-language-caret" aria-hidden="true">
              &#9662;
            </span>
          </button>

          {desktopLanguageMenuOpen && (
            <div
              id="desktop-language-options"
              className="desktop-language-dropdown"
              role="menu"
              aria-label={copy.languageSwitcher.ariaLabel}
              onKeyDown={handleDesktopLanguageMenuKeyDown}
            >
              {locales.map((availableLocale) => (
                <a
                  key={"desktop-" + availableLocale}
                  href={"/" + availableLocale}
                  hrefLang={availableLocale}
                  lang={availableLocale}
                  role="menuitem"
                  aria-current={
                    availableLocale === locale ? "page" : undefined
                  }
                  aria-label={formatMessage(
                    copy.languageSwitcher.changeTo,
                    { language: localeLabels[availableLocale] },
                  )}
                  onClick={() => rememberLocale(availableLocale)}
                >
                  <span>{localeLabels[availableLocale]}</span>
                  <span
                    className="desktop-language-active-dot"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
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
        {particleIndexes.map((index) => (
          <span key={index} />
        ))}
      </div>
    </>
  );
}
