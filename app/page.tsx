import Image, { getImageProps } from "next/image";
import { TechHero } from "./components/TechHero";

const desktopPosterSrcSet = getImageProps({
  src: "/images/hero/dimich-hero-desktop-workspace-v1.png",
  alt: "",
  width: 1536,
  height: 1024,
  sizes: "100vw",
}).props.srcSet;

export default function Home() {
  const brandLogo = (
    <Image
      src="/images/dimich-digital-logo.png"
      alt="DIMICH DIGITAL"
      width={1536}
      height={512}
      sizes="(max-width: 1023px) 158px, (max-width: 1279px) 190px, 230px"
      priority
      className="brand-logo-image"
    />
  );
  const videoPoster = (
    <picture className="hero-background-poster-picture">
      <source
        media="(min-width: 1024px)"
        srcSet={desktopPosterSrcSet}
        sizes="100vw"
      />
      <Image
        src="/images/hero/dimich-hero-mobile-workspace-v1.png"
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
