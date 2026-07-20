"use client";

import Image from "next/image";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { formatMessage } from "../i18n/config";
import type {
  LocalizedPortfolioProject,
  PanelId,
  SiteDictionary,
} from "../i18n/types";

export type ActivePanel = PanelId;

const portfolioProjectAssets = {
  steinoutlet: {
    image: "/images/references/steinoutlet-homepage.png",
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

export function ContentPanel({
  activePanel,
  onClose,
  onRequestPackage,
  selectedPackage,
  dictionary,
}: {
  activePanel: ActivePanel | null;
  onClose: () => void;
  onRequestPackage: (packageName: string) => void;
  selectedPackage: string | null;
  dictionary: SiteDictionary["panels"];
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!activePanel) {
      return;
    }

    const activePanelElement = panelRef.current;

    if (!activePanelElement) {
      return;
    }

    const panelElement: HTMLElement = activePanelElement;

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
          className="content-panel-scroll"
          role="region"
          tabIndex={0}
          aria-label={formatMessage(dictionary.common.contentRegion, {
            label: meta.label,
          })}
        >
          <div className="content-panel-body">
            {activePanel === "about" && (
              <AboutPanel content={dictionary.about} />
            )}
            {activePanel === "services" && (
              <ServicesPanel content={dictionary.services} />
            )}
            {activePanel === "offers" && (
              <OffersPanel
                content={dictionary.offers}
                onRequestPackage={onRequestPackage}
              />
            )}
            {activePanel === "references" && (
              <ReferencesPanel content={dictionary.references} />
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
}: {
  content: SiteDictionary["panels"]["about"];
}) {
  return (
    <div className="panel-editorial panel-about">
      <p className="panel-lead">
        {content.lead}
      </p>

      <p className="panel-copy">
        {content.copy}
      </p>

      <p className="panel-accent-copy">
        {content.accent}
      </p>

      <dl className="panel-facts" aria-label={content.factsLabel}>
        {content.facts.map((fact) => (
          <div key={fact.term}>
            <dt>{fact.term}</dt>
            <dd>{fact.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ServicesPanel({
  content,
}: {
  content: SiteDictionary["panels"]["services"];
}) {
  return (
    <div className="panel-editorial">
      <p className="panel-intro">
        {content.intro}
      </p>

      <div className="panel-service-list">
        {content.items.map((service) => (
          <article key={service.title} className="panel-service-row">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span aria-hidden="true">→</span>
          </article>
        ))}
      </div>

      <p className="panel-sector-line">{content.sectors.join(" · ")}</p>
    </div>
  );
}

function OffersPanel({
  content,
  onRequestPackage,
}: {
  content: SiteDictionary["panels"]["offers"];
  onRequestPackage: (packageName: string) => void;
}) {
  const servicePackages = content.packages;
  const gestureStartRef = useRef<{ x: number; y: number } | null>(null);
  const [activePackageIndex, setActivePackageIndex] = useState(0);

  function showPackage(index: number) {
    const nextIndex = Math.min(
      Math.max(index, 0),
      servicePackages.length - 1,
    );

    setActivePackageIndex(nextIndex);
  }

  function handlePackageKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" && activePackageIndex > 0) {
      event.preventDefault();
      showPackage(activePackageIndex - 1);
    }

    if (
      event.key === "ArrowRight" &&
      activePackageIndex < servicePackages.length - 1
    ) {
      event.preventDefault();
      showPackage(activePackageIndex + 1);
    }
  }

  function handlePackagePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    gestureStartRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePackagePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const start = gestureStartRef.current;
    gestureStartRef.current = null;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!start) {
      return;
    }

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const isHorizontalIntent =
      Math.abs(deltaX) >= 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15;

    if (!isHorizontalIntent) {
      return;
    }

    showPackage(activePackageIndex + (deltaX < 0 ? 1 : -1));
  }

  return (
    <div className="panel-editorial panel-offers">
      <div className="portfolio-carousel-toolbar service-package-carousel-toolbar">
        <p className="portfolio-carousel-counter" aria-live="polite">
          {String(activePackageIndex + 1).padStart(2, "0")} / {" "}
          {String(servicePackages.length).padStart(2, "0")}
        </p>

        <div
          className="portfolio-carousel-arrows service-package-carousel-arrows"
          aria-label={content.changePackage}
        >
          <button
            type="button"
            onClick={() => showPackage(activePackageIndex - 1)}
            disabled={activePackageIndex === 0}
            aria-label={content.previousPackage}
          >
            <CarouselArrow direction="previous" />
          </button>
          <button
            type="button"
            onClick={() => showPackage(activePackageIndex + 1)}
            disabled={activePackageIndex === servicePackages.length - 1}
            aria-label={content.nextPackage}
          >
            <CarouselArrow direction="next" />
          </button>
        </div>
      </div>

      <div
        className="service-package-carousel"
        role="region"
        aria-roledescription={content.carouselDescription}
        aria-label={content.carouselLabel}
        tabIndex={0}
        onKeyDown={handlePackageKeyDown}
        onPointerDown={handlePackagePointerDown}
        onPointerUp={handlePackagePointerUp}
        onPointerCancel={() => {
          gestureStartRef.current = null;
        }}
      >
        <div
          className="service-package-track"
          style={{ transform: `translate3d(-${activePackageIndex * 100}%, 0, 0)` }}
        >
          {servicePackages.map((servicePackage, index) => {
            const isActive = index === activePackageIndex;

            return (
              <div
                key={servicePackage.id}
                className="service-package-slide"
                aria-hidden={!isActive}
              >
                <article
                  className={`service-package-card${
                    servicePackage.highlighted ? " is-highlighted" : ""
                  }`}
                  role="group"
                  aria-roledescription={content.slideDescription}
                  aria-label={formatMessage(content.slideLabel, {
                    current: index + 1,
                    total: servicePackages.length,
                    name: servicePackage.name,
                  })}
                >
                  <header className="service-package-header">
                    <div>
                      <h3 className="service-package-name">
                        {servicePackage.name}
                      </h3>
                      <p className="service-package-subtitle">
                        {servicePackage.subtitle}
                      </p>
                      <p className="service-package-price">
                        {servicePackage.price}
                      </p>
                    </div>
                    {servicePackage.highlighted && (
                      <span className="service-package-recommendation">
                        {content.recommended}
                      </span>
                    )}
                  </header>

                  <p className="service-package-description">
                    {servicePackage.description}
                  </p>

                  <ul
                    className="service-package-feature-list"
                    aria-label={formatMessage(content.includedServices, {
                      name: servicePackage.name,
                    })}
                  >
                    {servicePackage.visibleFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <p className="service-package-meta">
                    <span>{servicePackage.deliveryTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{servicePackage.revisions}</span>
                  </p>

                  <button
                    type="button"
                    className="portfolio-action service-package-action"
                    onClick={() => onRequestPackage(servicePackage.name)}
                    aria-label={`${servicePackage.name}: ${servicePackage.ctaLabel}`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {servicePackage.ctaLabel}
                  </button>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="portfolio-carousel-pagination service-package-pagination"
        aria-label={content.selectPackage}
      >
        {servicePackages.map((servicePackage, index) => (
          <button
            key={servicePackage.id}
            type="button"
            className={index === activePackageIndex ? "is-active" : undefined}
            onClick={() => showPackage(index)}
            aria-label={formatMessage(content.showPackage, {
              name: servicePackage.name,
            })}
            aria-current={index === activePackageIndex ? "true" : undefined}
          />
        ))}
      </div>

      <p className="service-package-note">
        {content.note}
      </p>
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
  isDragging = false,
) {
  const projectElement = track.children.item(index) as HTMLElement | null;

  if (!projectElement) {
    return;
  }

  track.classList.toggle("is-dragging", isDragging);
  track.style.transform = `translate3d(${-(projectElement.offsetLeft) + dragOffset}px, 0, 0)`;
}

function ReferencesPanel({
  content,
}: {
  content: SiteDictionary["panels"]["references"];
}) {
  const portfolioProjects: PortfolioProject[] = content.projects.map(
    (project) => ({
      ...project,
      ...portfolioProjectAssets[project.id],
    }),
  );
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const gestureRef = useRef<ReferenceGesture | null>(null);
  const dragFrameRef = useRef<number | null>(null);
  const transformCleanupRef = useRef<number | null>(null);
  const activeProjectIndexRef = useRef(0);
  const suppressClickRef = useRef(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
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

    return () => {
      resizeObserver.disconnect();

      if (dragFrameRef.current !== null) {
        cancelAnimationFrame(dragFrameRef.current);
      }

      if (transformCleanupRef.current !== null) {
        window.clearTimeout(transformCleanupRef.current);
      }
    };
  }, []);

  function queueTrackPosition(dragOffset: number, isDragging: boolean) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    if (dragFrameRef.current !== null) {
      cancelAnimationFrame(dragFrameRef.current);
    }

    if (transformCleanupRef.current !== null) {
      window.clearTimeout(transformCleanupRef.current);
      transformCleanupRef.current = null;
    }

    track.classList.toggle("is-animating", !isDragging);

    dragFrameRef.current = requestAnimationFrame(() => {
      positionReferenceTrack(
        track,
        activeProjectIndexRef.current,
        dragOffset,
        isDragging,
      );
      dragFrameRef.current = null;
    });

    if (!isDragging) {
      transformCleanupRef.current = window.setTimeout(() => {
        track.classList.remove("is-animating");
        transformCleanupRef.current = null;
      }, 240);
    }
  }

  function showProject(index: number) {
    const nextIndex = Math.min(
      Math.max(index, 0),
      portfolioProjects.length - 1,
    );

    activeProjectIndexRef.current = nextIndex;
    setActiveProjectIndex(nextIndex);
    queueTrackPosition(0, false);
  }

  function handleCarouselKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" && activeProjectIndex > 0) {
      event.preventDefault();
      showProject(activeProjectIndex - 1);
    }

    if (
      event.key === "ArrowRight" &&
      activeProjectIndex < portfolioProjects.length - 1
    ) {
      event.preventDefault();
      showProject(activeProjectIndex + 1);
    }
  }

  function handleProjectPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startTime: performance.now(),
      intent: "pending",
    };
    suppressClickRef.current = false;
    event.currentTarget.classList.add("is-pointer-active");
  }

  function handleProjectPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    const absoluteX = Math.abs(deltaX);
    const absoluteY = Math.abs(deltaY);

    if (gesture.intent === "pending") {
      if (Math.max(absoluteX, absoluteY) < 10) {
        return;
      }

      if (absoluteX >= 10 && absoluteX > absoluteY * 1.15) {
        gesture.intent = "horizontal";
        event.currentTarget.setPointerCapture(event.pointerId);
      } else if (absoluteY >= 10 && absoluteY > absoluteX * 1.05) {
        gesture.intent = "vertical";
        return;
      }
    }

    if (gesture.intent !== "horizontal") {
      return;
    }

    event.preventDefault();
    suppressClickRef.current = absoluteX > 8;

    const isAtStart = activeProjectIndexRef.current === 0 && deltaX > 0;
    const isAtEnd =
      activeProjectIndexRef.current === portfolioProjects.length - 1 &&
      deltaX < 0;
    const resistedOffset = isAtStart || isAtEnd ? deltaX * 0.28 : deltaX;
    const maxOffset = event.currentTarget.clientWidth * 0.92;
    const dragOffset = Math.max(
      Math.min(resistedOffset, maxOffset),
      -maxOffset,
    );

    queueTrackPosition(dragOffset, true);
  }

  function finishProjectGesture(event: ReactPointerEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;
    gestureRef.current = null;
    event.currentTarget.classList.remove("is-pointer-active");

    if (!gesture || gesture.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (gesture.intent !== "horizontal") {
      return;
    }

    const deltaX = event.clientX - gesture.startX;
    const elapsed = Math.max(performance.now() - gesture.startTime, 1);
    const velocity = deltaX / elapsed;
    const distanceThreshold = event.currentTarget.clientWidth * 0.22;
    const shouldChangeProject =
      Math.abs(deltaX) >= distanceThreshold ||
      (Math.abs(deltaX) >= 24 && Math.abs(velocity) >= 0.5);
    const direction = deltaX < 0 ? 1 : -1;

    showProject(
      shouldChangeProject
        ? activeProjectIndexRef.current + direction
        : activeProjectIndexRef.current,
    );

    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  }

  function cancelProjectGesture(event: ReactPointerEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;
    gestureRef.current = null;
    event.currentTarget.classList.remove("is-pointer-active");

    if (
      gesture &&
      event.currentTarget.hasPointerCapture(gesture.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(gesture.pointerId);
    }

    queueTrackPosition(0, false);
  }

  function handleProjectClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (suppressClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <div className="panel-editorial panel-references">
      <div className="portfolio-carousel-toolbar">
        <p className="portfolio-carousel-counter" aria-live="polite">
          {String(activeProjectIndex + 1).padStart(2, "0")} / {" "}
          {String(portfolioProjects.length).padStart(2, "0")}
        </p>

        <div
          className="portfolio-carousel-arrows"
          aria-label={content.changeProject}
        >
          <button
            type="button"
            onClick={() => showProject(activeProjectIndex - 1)}
            disabled={activeProjectIndex === 0}
            aria-label={content.previousProject}
          >
            <CarouselArrow direction="previous" />
          </button>
          <button
            type="button"
            onClick={() => showProject(activeProjectIndex + 1)}
            disabled={activeProjectIndex === portfolioProjects.length - 1}
            aria-label={content.nextProject}
          >
            <CarouselArrow direction="next" />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="portfolio-carousel-track"
        role="region"
        aria-roledescription={content.carouselDescription}
        aria-label={content.carouselLabel}
        tabIndex={0}
        onKeyDown={handleCarouselKeyDown}
        onPointerDown={handleProjectPointerDown}
        onPointerMove={handleProjectPointerMove}
        onPointerUp={finishProjectGesture}
        onPointerCancel={cancelProjectGesture}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={handleProjectClickCapture}
      >
        <div ref={trackRef} className="portfolio-carousel-track-inner">
          {portfolioProjects.map((project, index) => (
            <CaseStudy
              key={project.id}
              project={project}
              index={index}
              total={portfolioProjects.length}
              isActive={index === activeProjectIndex}
              isAdjacent={Math.abs(index - activeProjectIndex) === 1}
              onShowProject={showProject}
              content={content}
              projects={portfolioProjects}
            />
          ))}
        </div>
      </div>

      <p className="portfolio-carousel-hint" aria-hidden="true">
        {content.swipeHint}
      </p>
    </div>
  );
}

function CaseStudy({
  project,
  index,
  total,
  isActive,
  isAdjacent,
  onShowProject,
  content,
  projects,
}: {
  project: PortfolioProject;
  index: number;
  total: number;
  isActive: boolean;
  isAdjacent: boolean;
  onShowProject: (index: number) => void;
  content: SiteDictionary["panels"]["references"];
  projects: PortfolioProject[];
}) {
  return (
    <article
      className="portfolio-project"
      role="group"
      aria-roledescription={content.slideDescription}
      aria-label={formatMessage(content.slideLabel, {
        current: index + 1,
        total,
        name: project.title,
      })}
      aria-hidden={!isActive}
    >
      <div
        className={`portfolio-preview-stage portfolio-preview-stage-${project.previewVariant}`}
      >
        <div
          className={`portfolio-browser-frame portfolio-browser-frame-${project.previewVariant}`}
        >
          <div className="portfolio-browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>{project.liveUrl.replace("https://", "")}</p>
          </div>
          <div
            className={`portfolio-project-image portfolio-project-image-${project.imageFit} portfolio-project-image-${project.previewVariant}`}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes={
                project.previewVariant === "portrait"
                  ? "(max-width: 767px) 52vw, 290px"
                  : "(max-width: 767px) calc(100vw - 72px), (max-width: 1199px) 78vw, 900px"
              }
              className="portfolio-project-image-media"
              priority={isActive}
              loading={isActive ? undefined : isAdjacent ? "eager" : "lazy"}
              draggable={false}
              onLoad={(event) => {
                if (isActive || isAdjacent) {
                  void event.currentTarget.decode().catch(() => undefined);
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="portfolio-project-content">
        <div className="portfolio-project-identity">
          <p>{content.caseStudy} · {project.category}</p>
          <h3>{project.title}</h3>
          <h4>{project.subtitle}</h4>
        </div>

        <p className="portfolio-project-description">{project.description}</p>

        <dl className="portfolio-project-brief">
          <div>
            <dt>{content.targetAudience}</dt>
            <dd>{project.targetAudience}</dd>
          </div>
          <div>
            <dt>{content.businessGoal}</dt>
            <dd>{project.businessGoal}</dd>
          </div>
        </dl>

        <div id={`${project.id}-details`} className="portfolio-project-details">
          <section aria-labelledby={`${project.id}-technologies`}>
            <h5 id={`${project.id}-technologies`}>{content.technologies}</h5>
            <ul className="portfolio-technology-list">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby={`${project.id}-features`}>
            <h5 id={`${project.id}-features`}>{content.features}</h5>
            <ul className="portfolio-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="portfolio-project-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={formatMessage(content.liveWebsiteAria, {
              project: project.title,
            })}
            className="portfolio-action"
            tabIndex={isActive ? 0 : -1}
          >
            {content.liveWebsite}
          </a>
          <a
            href={`#${project.id}-details`}
            className="portfolio-action"
            tabIndex={isActive ? 0 : -1}
          >
            {content.details}
          </a>
        </div>

        <nav
          className="portfolio-project-navigation"
          aria-label={formatMessage(content.projectNavigation, {
            project: project.title,
          })}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <div className="portfolio-project-navigation-row">
            <button
              type="button"
              className="portfolio-project-navigation-button"
              onClick={() => onShowProject(index - 1)}
              disabled={index === 0}
              tabIndex={isActive ? 0 : -1}
              aria-label={content.previousProject}
            >
              <CarouselArrow direction="previous" />
            </button>

            <p className="portfolio-project-navigation-counter" aria-hidden="true">
              {String(index + 1).padStart(2, "0")} / {" "}
              {String(total).padStart(2, "0")}
            </p>

            <button
              type="button"
              className="portfolio-project-navigation-button"
              onClick={() => onShowProject(index + 1)}
              disabled={index === total - 1}
              tabIndex={isActive ? 0 : -1}
              aria-label={content.nextProject}
            >
              <CarouselArrow direction="next" />
            </button>
          </div>

          <div
            className="portfolio-carousel-pagination portfolio-project-navigation-dots"
            aria-label={content.selectProject}
          >
            {projects.map((portfolioProject, projectIndex) => (
              <button
                key={portfolioProject.id}
                type="button"
                className={projectIndex === index ? "is-active" : undefined}
                onClick={() => onShowProject(projectIndex)}
                tabIndex={isActive ? 0 : -1}
                aria-label={formatMessage(content.showProject, {
                  project: portfolioProject.title,
                })}
                aria-current={projectIndex === index ? "true" : undefined}
              />
            ))}
          </div>
        </nav>
      </div>
    </article>
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
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      budget: String(formData.get("budget") ?? content.openBudget).trim(),
      description: String(formData.get("description") ?? "").trim(),
    };
    const nextErrors: BriefingErrors = {};

    if (!values.name) {
      nextErrors.name = content.fields.name.error;
    }

    if (!values.company) {
      nextErrors.company = content.fields.company.error;
    }

    if (!values.service) {
      nextErrors.service = content.fields.service.error;
    }

    if (!values.description) {
      nextErrors.description = content.fields.description.error;
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
              maxLength={1200}
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
