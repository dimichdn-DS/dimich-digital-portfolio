import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIMICH DIGITAL | Websites für lokale Kunden",
  description:
    "Premium Websites, digitale Lösungen und klare Online-Auftritte für kleine Unternehmen in Deutschland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
