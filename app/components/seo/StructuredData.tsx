const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kivoagencia.es";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "KIVO",
        url: siteUrl,
        description:
          "Estrategia, creatividad y tecnología para construir marcas que avanzan.",
        email: "kivoagencia.es@gmail.com",
        founder: [
          {
            "@type": "Person",
            name: "Aline Miranda",
          },
          {
            "@type": "Person",
            name: "Danilo Paiva",
          },
        ],
        knowsAbout: [
          "Marketing Digital",
          "Branding",
          "Automatización",
          "SaaS",
          "Aplicaciones Web",
          "Redes Sociales",
          "Anuncios",
          "Contenido para Ventas",
          "Optimización de Marketplaces",
        ],
      },

      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "KIVO",
        description:
          "Estrategia, creatividad y tecnología para construir marcas que avanzan.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "es-ES",
      },

      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "KIVO | Estrategia, Marketing y Tecnología",
        description:
          "Estrategia, creatividad y tecnología para construir marcas que avanzan.",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "es-ES",
      },

      {
        "@type": "Service",
        "@id": `${siteUrl}/#marketing`,
        name: "Estrategia de Marketing Digital",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Estrategia de marketing digital con calendario, guion y dirección creativa para Instagram, Facebook y YouTube.",
      },

      {
        "@type": "Service",
        "@id": `${siteUrl}/#marketplace`,
        name: "Layout para Marketplace",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Fichas de producto pensadas para convertir, con creatividad natural para el comprador final.",
      },

      {
        "@type": "Service",
        "@id": `${siteUrl}/#branding`,
        name: "Branding con MVP",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Producción de marca con las aplicaciones necesarias para lanzar o relanzar un negocio.",
      },

      {
        "@type": "Service",
        "@id": `${siteUrl}/#social-media`,
        name: "Gestión de Redes Sociales",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Gestión de redes sociales orientada al crecimiento y al seguimiento de datos.",
      },

      {
        "@type": "Service",
        "@id": `${siteUrl}/#development`,
        name: "Desarrollo y Automatización",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Desarrollo de sitios web, aplicaciones, SaaS, chatbots y automatizaciones para empresas.",
      },

      {
        "@type": "Service",
        "@id": `${siteUrl}/#sales-content`,
        name: "Contenido para Ventas",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "Contenido creativo para hacer los productos más atractivos para el comprador.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
