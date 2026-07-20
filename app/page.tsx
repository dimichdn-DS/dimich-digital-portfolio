import Image, { getImageProps } from "next/image";
import { TechHero } from "./components/TechHero";

const desktopPosterSrcSet = getImageProps({
  src: "/images/hero/dimich-hero-desktop-workspace-v1.png",
  alt: "",
  width: 1536,
  height: 1024,
  sizes: "100vw",
}).props.srcSet;

function BrandWordmark() {
  return (
    <span className="brand-wordmark" aria-label="KPTS WERK">
      <span className="brand-wordmark-primary">KPTS</span>
      <span className="brand-wordmark-secondary">
        <span className="brand-wordmark-rule" aria-hidden="true" />
        <span>WERK</span>
        <span className="brand-wordmark-rule" aria-hidden="true" />
      </span>
    </span>
  );
}

export default function Home() {
  const brandLogo = <BrandWordmark />;
  const videoPoster = (
    <picture className="hero-background-poster-picture">
      <source
        media="(min-width: 768px)"
        srcSet={desktopPosterSrcSet}
        sizes="100vw"
      />
      <Image
        src="/images/hero/kpts-werk/kpts-werk-office-final-v2-mobile-9x16.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="hero-background-poster-image"
      />
    </picture>
  );

  return <TechHero brandLogo={brandLogo} videoPoster={videoPoster} />;
}
