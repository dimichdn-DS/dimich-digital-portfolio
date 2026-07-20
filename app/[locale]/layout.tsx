import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, locales } from "../i18n/config";
import { getDictionary } from "../i18n/get-dictionary";

const productionUrl = "https://dimich-digital-portfolio.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const dictionary = await getDictionary(params.locale);
  const canonicalPath = `/${params.locale}`;

  return {
    metadataBase: new URL(productionUrl),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        de: "/de",
        en: "/en",
        ru: "/ru",
        "x-default": "/de",
      },
    },
    openGraph: {
      type: "website",
      siteName: "KPTS WERK",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: canonicalPath,
      locale: dictionary.metadata.openGraphLocale,
      alternateLocale: dictionary.metadata.openGraphAlternateLocales,
    },
  };
}

export default function LocaleRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
