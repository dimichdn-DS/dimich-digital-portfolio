import Image, { getImageProps } from "next/image";
import { notFound } from "next/navigation";
import { TechHero } from "../components/TechHero";
import { isLocale } from "../i18n/config";
import { getDictionary } from "../i18n/get-dictionary";

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

export default async function LocalePage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const dictionary = await getDictionary(params.locale);
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

  return (
    <TechHero
      locale={params.locale}
      dictionary={dictionary}
      brandLogo={brandLogo}
      videoPoster={videoPoster}
    />
  );
}
