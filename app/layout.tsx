import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./components/seo/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kivoagencia.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "KIVO | Estrategia, Marketing y Tecnología",
    template: "%s | KIVO",
  },

  description:
    "Estrategia, creatividad y tecnología para construir marcas que avanzan. Marketing, branding, desarrollo y automatización conectados para generar impacto real.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "KIVO",
    title: "KIVO | Estrategia, Marketing y Tecnología",
    description:
      "Estrategia, creatividad y tecnología para construir marcas que avanzan.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KIVO — Estrategia, Marketing y Tecnología",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KIVO | Estrategia, Marketing y Tecnología",
    description:
      "Estrategia, creatividad y tecnología para construir marcas que avanzan.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
