"use client";

import Image from "next/image";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { formatMessage } from "../i18n/config";
import type {
  IndustryGroupId,
  LocalizedPortfolioProject,
  LocalizedServicePackage,
  PanelId,
  ServiceAreaId,
  SiteDictionary,
} from "../i18n/types";

export type ActivePanel = PanelId;

const portfolioProjectAssets = {
  steinoutlet: {
    image: "/images/references/steinoutlet-homepage.png",
    imageWidth: 1440,
    imageHeight: 810,
    imageFit: "cover" as const,
    previewVariant: "landscape" as const,
    liveUrl: "https://kitchen-manufaktur.vercel.app",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Workers AI",
      "Vercel",
    ],
  },
  aura: {
    image: "/images/references/aura-homepage.png",
    imageWidth: 390,
    imageHeight: 844,
    imageFit: "contain" as const,
    previewVariant: "portrait" as const,
    liveUrl: "https://aura-landing-two-zeta.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
};

type PortfolioProject = LocalizedPortfolioProject &
  (typeof portfolioProjectAssets)[keyof typeof portfolioProjectAssets];

type BriefingField = "name" | "company" | "service" | "description";
type BriefingErrors = Partial<Record<BriefingField, string>>;
type BriefingChannel = "whatsapp" | "email";

const CONTACT_EMAIL = "dimich.dn@gmail.com";
const WHATSAPP_URL = "https://wa.me/49784442215";
const BRIEFING_LIMITS = {
  name: 100,
  company: 150,
  description: 1200,
  message: 2400,
} as const;
const aboutWideServiceIndexes = new Set([2, 3, 5, 6, 9, 11]);

export function ContentPanel({
  activePanel,
  onClose,
  onRequestPackage,
  onOpenContact,
  selectedPackage,
  dictionary,
}: {
  activePanel: ActivePanel | null;
  onClose: () => void;
  onRequestPackage: (packageName: string) => void;
  onOpenContact: () => void;
  selectedPackage: string | null;
  dictionary: SiteDictionary["panels"];
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const panelScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!activePanel) {
      return;
    }

    const activePanelElement = panelRef.current;

    if (!activePanelElement) {
      return;
    }

    const panelElement: HTMLElement = activePanelElement;
    panelScrollRef.current?.scrollTo({ top: 0 });

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

  const meta = dictionary.meta[activePanel];

  return (
    <div
      className="content-panel-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="content-panel-title"
    >
      <button
        type="button"
        aria-label={dictionary.common.dismissBackdrop}
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
            {activePanel !== "about" && activePanel !== "services" && (
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
            )}
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
            aria-label={dictionary.common.closePanel}
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
          ref={panelScrollRef}
          className="content-panel-scroll"
          role="region"
          tabIndex={0}
          aria-label={formatMessage(dictionary.common.contentRegion, {
            label: meta.label,
          })}
        >
          <div className="content-panel-body">
            {activePanel === "about" && (
              <AboutPanel
                content={dictionary.about}
                onOpenContact={onOpenContact}
              />
            )}
            {activePanel === "services" && (
              <ServicesPanel content={dictionary.services} />
            )}
            {activePanel === "offers" && (
              <OffersPanel
                content={dictionary.offers}
                onRequestPackage={onRequestPackage}
                onViewChange={() => {
                  panelScrollRef.current?.scrollTo({ top: 0 });
                }}
              />
            )}
            {activePanel === "references" && (
              <ReferencesPanel
                content={dictionary.references}
                onProjectChange={() => {
                  panelScrollRef.current?.scrollTo({ top: 0 });
                }}
              />
            )}
            {activePanel === "contact" && (
              <ContactPanel
                content={dictionary.contact}
                selectedPackage={selectedPackage}
              />
            )}
            {activePanel === "impressum" && (
              <ImpressumPanel
                authoritativeNotice={dictionary.legal.authoritativeNotice}
              />
            )}
            {activePanel === "privacy" && (
              <PrivacyPanel
                authoritativeNotice={dictionary.legal.authoritativeNotice}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPanel({
  content,
  onOpenContact,
}: {
  content: SiteDictionary["panels"]["about"];
  onOpenContact: () => void;
}) {
  return (
    <div className="panel-editorial panel-about">
      <section className="about-intro">
        <div className="about-intro-copy">
          <p className="about-lead">{content.lead}</p>
          <p className="about-supporting">{content.supporting}</p>
        </div>

        <figure className="about-visual">
          <Image
            src="/images/hero/kpts-werk/kpts-werk-office-final-v2-desktop-16x9.png"
            alt={content.visualAlt}
            fill
            sizes="(min-width: 1024px) 38vw, 1px"
          />
          <span className="about-visual-shade" aria-hidden="true" />
        </figure>
      </section>

      <section className="about-section" aria-labelledby="about-approach-heading">
        <h3 id="about-approach-heading" className="about-section-heading">
          {content.approachHeading}
        </h3>
        <div className="about-principles">
          {content.principles.map((principle, index) => (
            <article key={principle.title} className="about-principle-card">
              <AboutPrincipleIcon index={index} />
              <h4>{principle.title}</h4>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-services-heading">
        <h3 id="about-services-heading" className="about-section-heading">
          {content.servicesHeading}
        </h3>
        <div className="about-services-grid">
          {content.services.map((service, index) => (
            <article
              key={service.title}
              className={`about-service-card${aboutWideServiceIndexes.has(index) ? " about-service-card-wide" : ""}`}
            >
              <span className="about-service-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-workflow-heading">
        <h3 id="about-workflow-heading" className="about-section-heading">
          {content.workflowHeading}
        </h3>
        <ol className="about-workflow">
          {content.workflow.map((step, index) => (
            <li key={step.title}>
              <span className="about-workflow-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-final-cta" aria-labelledby="about-cta-heading">
        <div>
          <h3 id="about-cta-heading">{content.cta.title}</h3>
          <p>{content.cta.copy}</p>
        </div>
        <button type="button" onClick={onOpenContact}>
          {content.cta.button}
          <span aria-hidden="true">→</span>
        </button>
      </section>
    </div>
  );
}

function AboutPrincipleIcon({ index }: { index: number }) {
  const paths = [
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>,
    <>
      <path d="M13.5 2.8 5.8 13h5l-1.3 8.2L18.2 10h-5.1l.4-7.2Z" />
    </>,
    <>
      <path d="M4 12.5 9.1 17 20 6.5" />
      <path d="M4 6.5h5M15 17h5" />
    </>,
  ];

  return (
    <span className="about-principle-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {paths[index]}
      </svg>
    </span>
  );
}

function ServicesPanel({ content }: {
  content: SiteDictionary["panels"]["services"];
}) {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  const [openIndustryIndex, setOpenIndustryIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const syncDesktopState = () => setIsDesktop(mediaQuery.matches);

    syncDesktopState();
    mediaQuery.addEventListener("change", syncDesktopState);
    return () => mediaQuery.removeEventListener("change", syncDesktopState);
  }, []);

  return (
    <div className="panel-editorial panel-services">
      <section className="services-intro" aria-labelledby="services-intro-title">
        <h3 id="services-intro-title">{content.intro.headline}</h3>
        <p>{content.intro.copy}</p>
        <ul className="services-results">
          {content.results.map((result) => (
            <li key={result}>
              <ServiceResultIcon />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="services-areas" aria-labelledby="services-areas-title">
        <h3 id="services-areas-title" className="sr-only">
          {content.intro.headline}
        </h3>
        <div className="services-area-grid">
          {content.areas.map((area, index) => {
            const isExpanded = isDesktop || openServiceIndex === index;
            const capabilitiesId = `service-area-capabilities-${area.id}`;

            return (
              <article
                key={area.id}
                className={`service-area-card${isExpanded ? " is-expanded" : ""}`}
              >
                <button
                  type="button"
                  className="service-area-toggle"
                  aria-expanded={isExpanded}
                  aria-controls={capabilitiesId}
                  onKeyDown={(event) => {
                    if (
                      !isDesktop &&
                      (event.key === "Enter" || event.key === " ")
                    ) {
                      event.preventDefault();
                      setOpenServiceIndex((current) =>
                        current === index ? null : index,
                      );
                    }
                  }}
                  onClick={() => {
                    if (!isDesktop) {
                      setOpenServiceIndex((current) =>
                        current === index ? null : index,
                      );
                    }
                  }}
                >
                  <ServiceAreaIcon id={area.id} />
                  <span className="service-area-heading">
                    <strong>{area.title}</strong>
                    <span>{area.description}</span>
                  </span>
                  <span className="service-area-toggle-label">
                    {isExpanded ? content.accordion.hide : content.accordion.show}
                    <ServiceChevron />
                  </span>
                </button>

                <div
                  id={capabilitiesId}
                  className="service-area-capabilities"
                  aria-hidden={!isExpanded}
                  data-expanded={isExpanded ? "true" : "false"}
                >
                  <div className="service-area-details">
                    <p className="service-area-suitable">
                      <span>{content.areaLabels.suitableFor}</span>
                      {area.suitableFor}
                    </p>
                    {area.spotlight && (
                      <div className="service-area-spotlight">
                        <strong>{area.spotlight.title}</strong>
                        <p>{area.spotlight.copy}</p>
                      </div>
                    )}
                    <ul>
                      {area.capabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                    <div className="service-area-result">
                      <span>{content.areaLabels.result}</span>
                      <p>{area.result}</p>
                    </div>
                    {area.note && (
                      <p className="service-area-note">{area.note}</p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="services-industries"
        aria-labelledby="services-industries-title"
      >
        <div className="services-industries-heading">
          <h3 id="services-industries-title">{content.industries.heading}</h3>
          <p>{content.industries.copy}</p>
        </div>

        <div className="services-industry-grid">
          {content.industries.groups.map((group, index) => {
            const isExpanded = isDesktop || openIndustryIndex === index;
            const examplesId = `service-industry-examples-${group.id}`;

            return (
              <article
                key={group.id}
                className={`service-industry-card${isExpanded ? " is-expanded" : ""}`}
              >
                <button
                  type="button"
                  className="service-industry-toggle"
                  aria-expanded={isExpanded}
                  aria-controls={examplesId}
                  onKeyDown={(event) => {
                    if (
                      !isDesktop &&
                      (event.key === "Enter" || event.key === " ")
                    ) {
                      event.preventDefault();
                      setOpenIndustryIndex((current) =>
                        current === index ? null : index,
                      );
                    }
                  }}
                  onClick={() => {
                    if (!isDesktop) {
                      setOpenIndustryIndex((current) =>
                        current === index ? null : index,
                      );
                    }
                  }}
                >
                  <IndustryGroupIcon id={group.id} />
                  <span className="service-industry-heading">
                    <strong>{group.title}</strong>
                    <span>{group.description}</span>
                  </span>
                  <span className="service-industry-toggle-label">
                    {isExpanded ? content.accordion.hide : content.accordion.show}
                    <ServiceChevron />
                  </span>
                </button>

                <div
                  id={examplesId}
                  className="service-industry-examples"
                  aria-hidden={!isExpanded}
                  data-expanded={isExpanded ? "true" : "false"}
                >
                  <div>
                    <ul>
                      {group.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="services-industries-note">{content.industries.note}</p>
      </section>

      <section
        className="services-deliverables"
        aria-labelledby="services-deliverables-title"
      >
        <h3 id="services-deliverables-title">
          {content.deliverables.heading}
        </h3>
        <ul>
          {content.deliverables.items.map((item) => (
            <li key={item}>
              <ServiceResultIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}

function ServiceResultIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" />
      <path d="m6.7 10.1 2.1 2.2 4.7-4.8" />
    </svg>
  );
}

function ServiceChevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m6 8 4 4 4-4" />
    </svg>
  );
}

function ServiceAreaIcon({ id }: { id: ServiceAreaId }) {
  const paths: Record<ServiceAreaId, ReactNode> = {
    websites: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3M3 8h18" />
      </>
    ),
    visibility: (
      <>
        <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    commerce: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 9h16M8 13h3M8 16h6" />
      </>
    ),
    automation: (
      <>
        <circle cx="6" cy="12" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <circle cx="18" cy="18" r="2.2" />
        <path d="M8.2 11.2 15.8 7M8.2 12.8l7.6 4.2" />
      </>
    ),
  };

  return (
    <span className="service-area-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {paths[id]}
      </svg>
    </span>
  );
}

function IndustryGroupIcon({ id }: { id: IndustryGroupId }) {
  const paths: Record<IndustryGroupId, ReactNode> = {
    property: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
        <path d="M17.5 5.5c1.6.2 2.8 1.4 3 3" />
      </>
    ),
    trades: (
      <>
        <path d="m14.5 5.5 4-2 2 2-2 4" />
        <path d="m13 7 4 4-8.5 8.5a2.1 2.1 0 0 1-3-3L14 8" />
        <path d="m5 5 4 4" />
      </>
    ),
    wellness: (
      <>
        <path d="M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.7-7 10-7 10Z" />
        <path d="M9 12h6M12 9v6" />
      </>
    ),
    hospitality: (
      <>
        <path d="M5 3v8M8 3v8M5 7h3M6.5 11v10" />
        <path d="M15 3v18M15 3c3 2 4 5 4 8h-4" />
      </>
    ),
    vehicles: (
      <>
        <path d="m4 15 2-6h12l2 6" />
        <path d="M3 15h18v4H3z" />
        <circle cx="7" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </>
    ),
    professional: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 7V4h6v3M4 12h16M10 12v2h4v-2" />
      </>
    ),
  };

  return (
    <span className="service-industry-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {paths[id]}
      </svg>
    </span>
  );
}

type PackageGesture = {
  pointerId: number;
  startX: number;
  startY: number;
  startTime: number;
  intent: "pending" | "horizontal" | "vertical";
};

function positionPackageTrack(
  track: HTMLDivElement,
  index: number,
  dragOffset = 0,
) {
  const card = track.children.item(index) as HTMLElement | null;

  if (card) {
    track.style.transform = `translate3d(${-card.offsetLeft + dragOffset}px, 0, 0)`;
  }
}

function OffersPanel({
  content,
  onRequestPackage,
  onViewChange,
}: {
  content: SiteDictionary["panels"]["offers"];
  onRequestPackage: (packageName: string) => void;
  onViewChange: () => void;
}) {
  const servicePackages = content.packages;
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const actionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const backButtonRef = useRef<HTMLButtonElement | null>(null);
  const gestureRef = useRef<PackageGesture | null>(null);
  const dragFrameRef = useRef<number | null>(null);
  const snapCleanupRef = useRef<number | null>(null);
  const activePackageIndexRef = useRef(0);
  const suppressClickRef = useRef(false);
  const [activePackageIndex, setActivePackageIndex] = useState(0);
  const [selectedPackageId, setSelectedPackageId] = useState<
    LocalizedServicePackage["id"] | null
  >(null);

  useEffect(() => {
    if (selectedPackageId) {
      return;
    }

    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      positionPackageTrack(track, activePackageIndexRef.current);
    });

    resizeObserver.observe(viewport);
    positionPackageTrack(track, activePackageIndexRef.current);

    return () => resizeObserver.disconnect();
  }, [selectedPackageId]);

  useEffect(
    () => () => {
      if (dragFrameRef.current !== null) {
        cancelAnimationFrame(dragFrameRef.current);
      }

      if (snapCleanupRef.current !== null) {
        window.clearTimeout(snapCleanupRef.current);
      }
    },
    [],
  );

  function queueTrackPosition(index: number, dragOffset = 0) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (dragFrameRef.current !== null) {
      cancelAnimationFrame(dragFrameRef.current);
    }

    dragFrameRef.current = requestAnimationFrame(() => {
      positionPackageTrack(track, index, dragOffset);
      dragFrameRef.current = null;
    });
  }

  function snapTrackTo(index: number) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (snapCleanupRef.current !== null) {
      window.clearTimeout(snapCleanupRef.current);
    }

    track.classList.remove("is-dragging");
    track.classList.add("is-snapping");
    queueTrackPosition(index);
    snapCleanupRef.current = window.setTimeout(() => {
      track.classList.remove("is-snapping");
      snapCleanupRef.current = null;
    }, 210);
  }

  function showPackage(index: number) {
    const total = servicePackages.length;
    const nextIndex = (index + total) % total;

    activePackageIndexRef.current = nextIndex;
    setActivePackageIndex(nextIndex);
    snapTrackTo(nextIndex);
  }

  function openPackageDetails(index: number) {
    if (suppressClickRef.current) {
      return;
    }

    activePackageIndexRef.current = index;
    setActivePackageIndex(index);
    setSelectedPackageId(servicePackages[index].id);
    onViewChange();
    requestAnimationFrame(() => {
      backButtonRef.current?.focus({ preventScroll: true });
    });
  }

  function closePackageDetails() {
    setSelectedPackageId(null);
    onViewChange();
    requestAnimationFrame(() => {
      actionRefs.current[activePackageIndexRef.current]?.focus({
        preventScroll: true,
      });
    });
  }

  function handlePackageKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPackage(activePackageIndexRef.current - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showPackage(activePackageIndexRef.current + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      showPackage(0);
    } else if (event.key === "End") {
      event.preventDefault();
      showPackage(servicePackages.length - 1);
    }
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    suppressClickRef.current = false;

    if (
      window.matchMedia("(min-width: 768px)").matches ||
      (event.pointerType === "mouse" && event.button !== 0) ||
      (event.target as HTMLElement).closest("button, a")
    ) {
      return;
    }

    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startTime: performance.now(),
      intent: "pending",
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    const absoluteX = Math.abs(deltaX);
    const absoluteY = Math.abs(deltaY);

    if (Math.max(absoluteX, absoluteY) > 8) {
      suppressClickRef.current = true;
    }

    if (gesture.intent === "pending") {
      if (Math.max(absoluteX, absoluteY) < 8) {
        return;
      }

      if (absoluteX >= 8 && absoluteX > absoluteY * 1.2) {
        gesture.intent = "horizontal";
        event.currentTarget.setPointerCapture(event.pointerId);
        trackRef.current?.classList.add("is-dragging");
      } else if (absoluteY >= 8) {
        gesture.intent = "vertical";
        return;
      }
    }

    if (gesture.intent !== "horizontal") {
      return;
    }

    event.preventDefault();
    const width = viewportRef.current?.clientWidth ?? event.currentTarget.clientWidth;
    const limitedOffset = Math.max(
      Math.min(deltaX, width * 0.72),
      -width * 0.72,
    );
    queueTrackPosition(activePackageIndexRef.current, limitedOffset);
  }

  function finishPointerGesture(
    event: ReactPointerEvent<HTMLDivElement>,
    cancelled = false,
  ) {
    const gesture = gestureRef.current;
    gestureRef.current = null;

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    trackRef.current?.classList.remove("is-dragging");

    if (cancelled || gesture.intent !== "horizontal") {
      snapTrackTo(activePackageIndexRef.current);
      return;
    }

    const deltaX = event.clientX - gesture.startX;
    const elapsed = Math.max(performance.now() - gesture.startTime, 1);
    const velocity = Math.abs(deltaX) / elapsed;
    const width = viewportRef.current?.clientWidth ?? event.currentTarget.clientWidth;
    const shouldSwitch =
      Math.abs(deltaX) >= width * 0.2 ||
      (Math.abs(deltaX) >= 16 && velocity >= 0.5);

    if (shouldSwitch) {
      showPackage(activePackageIndexRef.current + (deltaX < 0 ? 1 : -1));
    } else {
      snapTrackTo(activePackageIndexRef.current);
    }
  }

  const activePackage = servicePackages[activePackageIndex];
  const selectedPackage = selectedPackageId
    ? servicePackages.find((servicePackage) => servicePackage.id === selectedPackageId)
    : null;

  if (selectedPackage) {
    return (
      <PackageDetail
        servicePackage={selectedPackage}
        packageIndex={activePackageIndex}
        packageCount={servicePackages.length}
        content={content}
        backButtonRef={backButtonRef}
        onBack={closePackageDetails}
        onRequest={() => onRequestPackage(selectedPackage.name)}
      />
    );
  }

  return (
    <div className="panel-editorial panel-offers offer-overview">
      <div
        ref={viewportRef}
        className="offer-carousel-viewport"
        role="region"
        aria-roledescription={content.carouselDescription}
        aria-label={content.carouselLabel}
        tabIndex={0}
        onKeyDown={handlePackageKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(event) => finishPointerGesture(event)}
        onPointerCancel={(event) => finishPointerGesture(event, true)}
        onClickCapture={(event) => {
          if (suppressClickRef.current) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      >
        <div ref={trackRef} className="offer-carousel-track">
          {servicePackages.map((servicePackage, index) => {
            const isActive = index === activePackageIndex;

            return (
              <article
                key={servicePackage.id}
                className={`offer-compact-card${
                  servicePackage.highlighted ? " is-highlighted" : ""
                }${isActive ? " is-active" : ""}`}
                aria-hidden={!isActive}
                aria-roledescription={content.slideDescription}
                aria-label={formatMessage(content.slideLabel, {
                  current: String(index + 1),
                  total: String(servicePackages.length),
                  name: servicePackage.name,
                })}
                onClick={(event) => {
                  if (
                    isActive &&
                    !(event.target as HTMLElement).closest("button, a")
                  ) {
                    openPackageDetails(index);
                  }
                }}
              >
                <header className="offer-compact-header">
                  <div>
                    {servicePackage.highlighted && (
                      <span className="offer-recommendation">
                        {content.recommended}
                      </span>
                    )}
                    <h3>{servicePackage.name}</h3>
                    <p>{servicePackage.compact.subtitle}</p>
                  </div>
                  <strong>{servicePackage.price}</strong>
                </header>

                <p className="offer-compact-description">
                  {servicePackage.compact.description}
                </p>

                <ul
                  className="offer-compact-benefits"
                  aria-label={formatMessage(content.includedServices, {
                    name: servicePackage.name,
                  })}
                >
                  {servicePackage.compact.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>

                <p className="offer-compact-delivery">
                  <span>{content.deliveryLabel}</span>
                  <strong>{servicePackage.compact.deliveryTime}</strong>
                </p>

                <button
                  ref={(element) => {
                    actionRefs.current[index] = element;
                  }}
                  type="button"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => openPackageDetails(index)}
                  aria-label={formatMessage(content.learnMoreAria, {
                    name: servicePackage.name,
                  })}
                  className="portfolio-action offer-learn-more"
                >
                  {content.learnMore}
                </button>
              </article>
            );
          })}
        </div>
      </div>

      <div className="offer-carousel-controls">
        <button
          type="button"
          onClick={() => showPackage(activePackageIndex - 1)}
          aria-label={content.previousPackage}
        >
          <CarouselArrow direction="previous" />
        </button>
        <p className="portfolio-carousel-counter" aria-live="polite">
          {String(activePackageIndex + 1).padStart(2, "0")} / {" "}
          {String(servicePackages.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => showPackage(activePackageIndex + 1)}
          aria-label={content.nextPackage}
        >
          <CarouselArrow direction="next" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {formatMessage(content.packageChanged, {
          name: activePackage.name,
        })}
      </p>
    </div>
  );
}

function PackageDetail({
  servicePackage,
  packageIndex,
  packageCount,
  content,
  backButtonRef,
  onBack,
  onRequest,
}: {
  servicePackage: LocalizedServicePackage;
  packageIndex: number;
  packageCount: number;
  content: SiteDictionary["panels"]["offers"];
  backButtonRef: React.MutableRefObject<HTMLButtonElement | null>;
  onBack: () => void;
  onRequest: () => void;
}) {
  return (
    <div className="panel-editorial panel-offers offer-detail">
      <div className="offer-detail-toolbar">
        <button ref={backButtonRef} type="button" onClick={onBack}>
          <CarouselArrow direction="previous" />
          <span>{content.backToPackages}</span>
        </button>
        <p>
          {String(packageIndex + 1).padStart(2, "0")} / {" "}
          {String(packageCount).padStart(2, "0")} · {servicePackage.name}
        </p>
      </div>

      <article className={`offer-detail-card${servicePackage.highlighted ? " is-highlighted" : ""}`}>
        <header className="offer-detail-hero">
          <div>
            {servicePackage.highlighted && (
              <span className="offer-recommendation">{content.recommended}</span>
            )}
            <h3 tabIndex={-1} id="offer-detail-title">
              {servicePackage.name}
            </h3>
            <p className="offer-detail-subtitle">
              {servicePackage.detail.subtitle}
            </p>
          </div>
          <strong className="offer-detail-price">{servicePackage.price}</strong>
          <p className="offer-detail-description">
            {servicePackage.detail.description}
          </p>
        </header>

        <div className="offer-detail-body">
          <section aria-labelledby="offer-included-services">
            <h4 id="offer-included-services">
              {formatMessage(content.includedServices, {
                name: servicePackage.name,
              })}
            </h4>
            <ul className="offer-detail-features">
              {servicePackage.detail.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <dl className="offer-detail-meta">
            <div>
              <dt>{content.deliveryLabel}</dt>
              <dd>{servicePackage.detail.deliveryTime}</dd>
            </div>
            <div>
              <dt>{content.revisionsLabel}</dt>
              <dd>{servicePackage.detail.revisions}</dd>
            </div>
          </dl>

          <p className="offer-detail-note">{content.note}</p>

          <button
            type="button"
            className="portfolio-action offer-request-action"
            onClick={onRequest}
          >
            {servicePackage.detail.ctaLabel}
          </button>
        </div>
      </article>
    </div>
  );
}

type ReferenceGesture = {
  pointerId: number;
  startX: number;
  startY: number;
  startTime: number;
  intent: "pending" | "horizontal" | "vertical";
};

function positionReferenceTrack(
  track: HTMLDivElement,
  index: number,
  dragOffset = 0,
) {
  const card = track.children.item(index) as HTMLElement | null;

  if (!card) {
    return;
  }

  track.style.transform = `translate3d(${-card.offsetLeft + dragOffset}px, 0, 0)`;
}

function ReferencesPanel({
  content,
  onProjectChange,
}: {
  content: SiteDictionary["panels"]["references"];
  onProjectChange: () => void;
}) {
  const portfolioProjects: PortfolioProject[] = content.projects.map(
    (project) => ({
      ...project,
      ...portfolioProjectAssets[project.id],
    }),
  );
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const actionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const backButtonRef = useRef<HTMLButtonElement | null>(null);
  const gestureRef = useRef<ReferenceGesture | null>(null);
  const dragFrameRef = useRef<number | null>(null);
  const snapCleanupRef = useRef<number | null>(null);
  const activeProjectIndexRef = useRef(0);
  const suppressClickRef = useRef(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState<
    PortfolioProject["id"] | null
  >(null);

  useEffect(() => {
    Object.values(portfolioProjectAssets).forEach((project) => {
      const image = new window.Image();
      image.decoding = "async";
      image.src = project.image;
      void image.decode().catch(() => undefined);
    });
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      return;
    }

    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      positionReferenceTrack(track, activeProjectIndexRef.current);
    });

    resizeObserver.observe(viewport);
    positionReferenceTrack(track, activeProjectIndexRef.current);

    return () => resizeObserver.disconnect();
  }, [selectedProjectId]);

  useEffect(
    () => () => {
      if (dragFrameRef.current !== null) {
        cancelAnimationFrame(dragFrameRef.current);
      }

      if (snapCleanupRef.current !== null) {
        window.clearTimeout(snapCleanupRef.current);
      }
    },
    [],
  );

  function queueTrackPosition(index: number, dragOffset = 0) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (dragFrameRef.current !== null) {
      cancelAnimationFrame(dragFrameRef.current);
    }

    dragFrameRef.current = requestAnimationFrame(() => {
      positionReferenceTrack(track, index, dragOffset);
      dragFrameRef.current = null;
    });
  }

  function snapTrackTo(index: number) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (snapCleanupRef.current !== null) {
      window.clearTimeout(snapCleanupRef.current);
    }

    track.classList.remove("is-dragging");
    track.classList.add("is-snapping");
    queueTrackPosition(index);
    snapCleanupRef.current = window.setTimeout(() => {
      track.classList.remove("is-snapping");
      snapCleanupRef.current = null;
    }, 210);
  }

  function showProject(index: number) {
    const total = portfolioProjects.length;
    const nextIndex = (index + total) % total;

    activeProjectIndexRef.current = nextIndex;
    setActiveProjectIndex(nextIndex);
    snapTrackTo(nextIndex);
  }

  function openProjectDetails(index: number) {
    if (suppressClickRef.current) {
      return;
    }

    activeProjectIndexRef.current = index;
    setActiveProjectIndex(index);
    setSelectedProjectId(portfolioProjects[index].id);
    onProjectChange();
    requestAnimationFrame(() => {
      backButtonRef.current?.focus({ preventScroll: true });
    });
  }

  function closeProjectDetails() {
    setSelectedProjectId(null);
    onProjectChange();
    requestAnimationFrame(() => {
      actionRefs.current[activeProjectIndexRef.current]?.focus({
        preventScroll: true,
      });
    });
  }

  function handleCarouselKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showProject(activeProjectIndexRef.current - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showProject(activeProjectIndexRef.current + 1);
    }
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    suppressClickRef.current = false;

    if (
      window.matchMedia("(min-width: 768px)").matches ||
      (event.pointerType === "mouse" && event.button !== 0) ||
      (event.target as HTMLElement).closest("button, a")
    ) {
      return;
    }

    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startTime: performance.now(),
      intent: "pending",
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    const absoluteX = Math.abs(deltaX);
    const absoluteY = Math.abs(deltaY);

    if (Math.max(absoluteX, absoluteY) > 8) {
      suppressClickRef.current = true;
    }

    if (gesture.intent === "pending") {
      if (Math.max(absoluteX, absoluteY) < 8) {
        return;
      }

      if (absoluteX >= 8 && absoluteX > absoluteY * 1.2) {
        gesture.intent = "horizontal";
        event.currentTarget.setPointerCapture(event.pointerId);
        trackRef.current?.classList.add("is-dragging");
      } else if (absoluteY >= 8) {
        gesture.intent = "vertical";
        return;
      }
    }

    if (gesture.intent !== "horizontal") {
      return;
    }

    event.preventDefault();
    const width = viewportRef.current?.clientWidth ?? event.currentTarget.clientWidth;
    const limitedOffset = Math.max(
      Math.min(deltaX, width * 0.72),
      -width * 0.72,
    );
    queueTrackPosition(activeProjectIndexRef.current, limitedOffset);
  }

  function finishPointerGesture(
    event: ReactPointerEvent<HTMLDivElement>,
    cancelled = false,
  ) {
    const gesture = gestureRef.current;
    gestureRef.current = null;

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    trackRef.current?.classList.remove("is-dragging");

    if (cancelled || gesture.intent !== "horizontal") {
      snapTrackTo(activeProjectIndexRef.current);
      return;
    }

    const deltaX = event.clientX - gesture.startX;
    const elapsed = Math.max(performance.now() - gesture.startTime, 1);
    const velocity = Math.abs(deltaX) / elapsed;
    const width = viewportRef.current?.clientWidth ?? event.currentTarget.clientWidth;
    const shouldSwitch =
      Math.abs(deltaX) >= width * 0.2 ||
      (Math.abs(deltaX) >= 16 && velocity >= 0.5);

    if (shouldSwitch) {
      showProject(activeProjectIndexRef.current + (deltaX < 0 ? 1 : -1));
    } else {
      snapTrackTo(activeProjectIndexRef.current);
    }
  }

  const activeProject = portfolioProjects[activeProjectIndex];
  const selectedProject = selectedProjectId
    ? portfolioProjects.find((project) => project.id === selectedProjectId)
    : null;

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        projectIndex={activeProjectIndex}
        projectCount={portfolioProjects.length}
        content={content}
        backButtonRef={backButtonRef}
        onBack={closeProjectDetails}
      />
    );
  }

  return (
    <div className="panel-editorial panel-references reference-overview">
      <div
        ref={viewportRef}
        className="reference-carousel-viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label={content.carouselLabel}
        tabIndex={0}
        onKeyDown={handleCarouselKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(event) => finishPointerGesture(event)}
        onPointerCancel={(event) => finishPointerGesture(event, true)}
        onClickCapture={(event) => {
          if (suppressClickRef.current) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      >
        <div ref={trackRef} className="reference-carousel-track">
          {portfolioProjects.map((project, index) => {
            const isActive = index === activeProjectIndex;

            return (
              <article
                key={project.id}
                className={`reference-compact-card${isActive ? " is-active" : ""}`}
                aria-hidden={!isActive}
                aria-label={formatMessage(content.slideLabel, {
                  current: String(index + 1),
                  total: String(portfolioProjects.length),
                  project: project.title,
                })}
                onClick={(event) => {
                  if (
                    isActive &&
                    !(event.target as HTMLElement).closest("button, a")
                  ) {
                    openProjectDetails(index);
                  }
                }}
              >
                <ProjectPreview project={project} compact priority={index === 0} />

                <div className="reference-compact-content">
                  <div className="reference-compact-identity">
                    <p>{project.compact.category}</p>
                    <h3>{project.title}</h3>
                    <h4>{project.compact.subtitle}</h4>
                  </div>
                  <p className="reference-compact-description">
                    {project.compact.description}
                  </p>
                  <ul
                    className="reference-compact-technologies"
                    aria-label={content.technologies}
                  >
                    {project.technologies.slice(0, 3).map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <button
                    ref={(element) => {
                      actionRefs.current[index] = element;
                    }}
                    type="button"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => openProjectDetails(index)}
                    aria-label={formatMessage(content.learnMoreAria, {
                      project: project.title,
                    })}
                    className="portfolio-action reference-learn-more"
                  >
                    {content.learnMore}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="reference-carousel-controls">
        <button
          type="button"
          onClick={() => showProject(activeProjectIndex - 1)}
          aria-label={content.previousProject}
        >
          <CarouselArrow direction="previous" />
        </button>
        <p className="portfolio-carousel-counter" aria-live="polite">
          {String(activeProjectIndex + 1).padStart(2, "0")} / {" "}
          {String(portfolioProjects.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => showProject(activeProjectIndex + 1)}
          aria-label={content.nextProject}
        >
          <CarouselArrow direction="next" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {formatMessage(content.projectChanged, {
          project: activeProject.title,
        })}
      </p>
    </div>
  );
}

function ProjectPreview({
  project,
  compact = false,
  priority = false,
}: {
  project: PortfolioProject;
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`reference-preview reference-preview-${project.previewVariant}${compact ? " reference-preview-compact" : ""}`}
    >
      <div
        className={`reference-browser-frame reference-browser-frame-${project.previewVariant}`}
      >
        <div className="reference-browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>{project.liveUrl.replace("https://", "")}</p>
        </div>
        <div
          className={`reference-project-image reference-project-image-${project.imageFit} reference-project-image-${project.previewVariant}`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes={
              compact
                ? project.previewVariant === "portrait"
                  ? "(max-width: 767px) 46vw, 260px"
                  : "(max-width: 767px) calc(100vw - 56px), 560px"
                : project.previewVariant === "portrait"
                  ? "(max-width: 767px) 62vw, 310px"
                  : "(max-width: 767px) calc(100vw - 64px), (max-width: 1199px) 52vw, 560px"
            }
            className="reference-project-image-media"
            priority={priority}
            unoptimized
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({
  project,
  projectIndex,
  projectCount,
  content,
  backButtonRef,
  onBack,
}: {
  project: PortfolioProject;
  projectIndex: number;
  projectCount: number;
  content: SiteDictionary["panels"]["references"];
  backButtonRef: React.MutableRefObject<HTMLButtonElement | null>;
  onBack: () => void;
}) {
  const summaryItems = [
    {
      label: content.summary.challenge,
      value: project.detail.summary.challenge,
    },
    {
      label: content.summary.solution,
      value: project.detail.summary.solution,
    },
    {
      label: content.summary.outcome,
      value: project.detail.summary.outcome,
    },
  ];

  return (
    <div className="panel-editorial panel-references reference-detail">
      <div className="reference-detail-toolbar">
        <button ref={backButtonRef} type="button" onClick={onBack}>
          <CarouselArrow direction="previous" />
          <span>{content.backToProjects}</span>
        </button>
        <p>
          {String(projectIndex + 1).padStart(2, "0")} / {" "}
          {String(projectCount).padStart(2, "0")} · {project.title}
        </p>
      </div>

      <article className="reference-detail-project" aria-labelledby="reference-detail-title">
        <div className="reference-detail-hero">
          <ProjectPreview project={project} />
          <div className="reference-detail-intro">
            <p>{project.detail.category}</p>
            <h3 id="reference-detail-title" tabIndex={-1}>
              {project.title}
            </h3>
            <h4>{project.detail.subtitle}</h4>
            <p className="reference-detail-description">
              {project.detail.description}
            </p>
          </div>
        </div>

        <div className="reference-detail-body">
          <dl className="reference-project-summary">
            {summaryItems.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <section
            className="reference-project-technologies"
            aria-labelledby={`${project.id}-technologies`}
          >
            <h5 id={`${project.id}-technologies`}>{content.technologies}</h5>
            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={formatMessage(content.liveWebsiteAria, {
              project: project.title,
            })}
            className="portfolio-action reference-project-action"
          >
            {content.liveWebsite}
          </a>
        </div>
      </article>
    </div>
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

function ContactPanel({
  selectedPackage,
  content,
}: {
  selectedPackage: string | null;
  content: SiteDictionary["panels"]["contact"];
}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const companyRef = useRef<HTMLInputElement | null>(null);
  const serviceRef = useRef<HTMLSelectElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const [errors, setErrors] = useState<BriefingErrors>({});
  const selectedService = selectedPackage
    ? `${content.selectedPackageOption}: ${selectedPackage}`
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
    const toSingleLine = (value: FormDataEntryValue | null) =>
      String(value ?? "")
        .replace(/[\r\n]+/g, " ")
        .trim();
    const rawService = toSingleLine(formData.get("service"));
    const rawBudget = toSingleLine(formData.get("budget"));
    const allowedServices = new Set([
      ...content.services,
      ...(selectedService ? [selectedService] : []),
    ]);
    const allowedBudgets = new Set(content.budgets);
    const values = {
      name: toSingleLine(formData.get("name")),
      company: toSingleLine(formData.get("company")),
      service: allowedServices.has(rawService) ? rawService : "",
      budget: allowedBudgets.has(rawBudget) ? rawBudget : content.openBudget,
      description: String(formData.get("description") ?? "").trim(),
    };
    const nextErrors: BriefingErrors = {};

    if (!values.name) {
      nextErrors.name = content.fields.name.error;
    } else if (values.name.length > BRIEFING_LIMITS.name) {
      nextErrors.name = content.fields.name.maxLengthError;
    }

    if (!values.company) {
      nextErrors.company = content.fields.company.error;
    } else if (values.company.length > BRIEFING_LIMITS.company) {
      nextErrors.company = content.fields.company.maxLengthError;
    }

    if (!values.service) {
      nextErrors.service = content.fields.service.error;
    }

    if (!values.description) {
      nextErrors.description = content.fields.description.error;
    } else if (values.description.length > BRIEFING_LIMITS.description) {
      nextErrors.description = content.fields.description.maxLengthError;
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
      content.message.greeting,
      "",
      `${content.message.name}: ${values.name}`,
      `${content.message.company}: ${values.company}`,
      `${content.message.needed}: ${values.service}`,
      `${content.message.budget}: ${values.budget || content.openBudget}`,
      "",
      `${content.message.description}:`,
      values.description,
      "",
      `${content.message.source}:`,
      content.message.sourceValue,
    ].join("\n");
    if (message.length > BRIEFING_LIMITS.message) {
      setErrors({ description: content.fields.description.maxLengthError });
      requestAnimationFrame(() => {
        descriptionRef.current?.focus({ preventScroll: false });
      });
      return null;
    }

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

    const subject = content.message.emailSubject;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
  }

  return (
    <div className="panel-editorial panel-contact">
      <p className="panel-lead">
        {content.lead}
      </p>
      <p className="panel-copy">
        {content.copy}
      </p>

      {selectedPackage && (
        <p className="panel-selected-package">
          {content.selectedPackage} <strong>{selectedPackage}</strong>
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
            <label htmlFor="briefing-name">{content.fields.name.label}</label>
            <input
              ref={nameRef}
              id="briefing-name"
              name="name"
              type="text"
              required
              maxLength={BRIEFING_LIMITS.name}
              autoComplete="name"
              placeholder={content.fields.name.placeholder}
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
            <label htmlFor="briefing-company">
              {content.fields.company.label}
            </label>
            <input
              ref={companyRef}
              id="briefing-company"
              name="company"
              type="text"
              required
              maxLength={BRIEFING_LIMITS.company}
              autoComplete="organization"
              placeholder={content.fields.company.placeholder}
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
            <label htmlFor="briefing-service">
              {content.fields.service.label}
            </label>
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
                {content.fields.service.placeholder}
              </option>
              {selectedPackage && (
                <option value={selectedService}>{selectedService}</option>
              )}
              {content.services.map((service) => (
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
            <label htmlFor="briefing-budget">
              {content.fields.budget.label}
            </label>
            <select
              id="briefing-budget"
              name="budget"
              defaultValue={content.openBudget}
            >
              {content.budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>

          <div className="panel-briefing-field panel-briefing-field-wide">
            <label htmlFor="briefing-description">
              {content.fields.description.label}
            </label>
            <textarea
              ref={descriptionRef}
              id="briefing-description"
              name="description"
              required
              rows={5}
              maxLength={BRIEFING_LIMITS.description}
              placeholder={content.fields.description.placeholder}
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
            {content.sendWhatsapp}
            <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            className="panel-briefing-submit"
            onClick={() => sendBriefing("email")}
          >
            {content.sendEmail}
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <p className="panel-briefing-privacy">
          {content.privacy}
        </p>
      </form>

      <div className="panel-contact-note">
        <p>{content.responseTime}</p>
        <dl>
          {content.facts.map((fact) => (
            <div key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function ImpressumPanel({
  authoritativeNotice,
}: {
  authoritativeNotice: string | null;
}) {
  return (
    <div className="panel-editorial panel-legal">
      {authoritativeNotice && (
        <p className="panel-legal-notice">{authoritativeNotice}</p>
      )}
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

function PrivacyPanel({
  authoritativeNotice,
}: {
  authoritativeNotice: string | null;
}) {
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
      {authoritativeNotice && (
        <p className="panel-legal-notice">{authoritativeNotice}</p>
      )}
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
