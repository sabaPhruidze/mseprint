// app/marketing-services/page.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const revalidate = 86400; // keep sitemap lastmod fresh

/* ─────────────── SEO METADATA (clean + consistent) ─────────────── */
export const metadata: Metadata = {
  title: "Marketing Services in Minneapolis | MSE Printing",
  description:
    "Strategy-led marketing from MSE Printing: campaigns, consultation, websites, video, and social—built to convert for Minneapolis brands and beyond.",
  applicationName: "MSE Printing",
  category: "Marketing Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-services",
  },
  robots: {
    index: true,
    follow: true,
    // keep these simple; avoid over-prescriptive max-* that can conflict
  },
  openGraph: {
    title:
      "Marketing Services in Minneapolis | Strategy, Web & Print | MSE Printing",
    description:
      "From campaigns and consultation to websites and video, MSE Printing delivers data-driven marketing that generates results.",
    url: "https://www.mseprinting.com/marketing-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/campaigns_consultation.webp",
        width: 1200,
        height: 630,
        alt: "Marketing campaign consultation with MSE Printing, Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Services in Minneapolis | MSE Printing",
    description:
      "Integrated marketing: campaigns, web design, video, and social media by MSE Printing.",
    // keep handles only if they’re real/active; otherwise omit
    images: [
      "https://www.mseprinting.com/images/marketing-services-images/campaigns_consultation.webp",
    ],
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ─────────────── VIEWPORT THEME COLORS ─────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ─────────────── STRUCTURED DATA / SCHEMA.ORG (Service page) ─────────────── */
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/marketing-services#service",
    name: "Marketing Services",
    description:
      "Integrated marketing services by MSE Printing. Strategy, campaigns, consultation, web, video, and social media solutions for businesses in Minneapolis and nationwide.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.mseprinting.com/#business",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      telephone: "763-542-8812",
      email: "info@mseprinting.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 Washington Ave N Ste 103",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        postalCode: "55412",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Minneapolis" },
      { "@type": "State", name: "Minnesota" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Marketing Services",
    category: "Marketing & Strategy",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services#strategy",
          itemOffered: {
            "@type": "Service",
            name: "Strategy & Planning",
            description:
              "Custom marketing strategies, consultation, and campaign planning for businesses.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services#web-design",
          itemOffered: {
            "@type": "Service",
            name: "Website & Digital Design",
            description:
              "Mobile-friendly, SEO-optimized website design to grow your brand online.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services#video",
          itemOffered: {
            "@type": "Service",
            name: "Video Production & Social Media",
            description:
              "Professional video production and social media marketing for audience engagement.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/marketing-services",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Marketing Services" },
    },
  };

  return (
    <script
      type="application/ld+json"
      // stringify without spacing for smaller payload
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
export default async function MarketingServices() {
  const data = await getSpecialPagesData("/marketing-services");
  const pageData = data.MarketingServicesCardPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "marketing-services",
    footerContentData
  );

  if (!pageData) {
    notFound();
  }

  return (
    <>
      <ServiceSchema />
      <CardsPagesStructure
        pageData={pageData}
        breadcrumbs={breadcrumbs}
        tokens={{
          city: "Minneapolis",
          state: "Minnesota",
          state_abbr: "MN",
          brand: "MSE Printing",
          phone: "763-542-8812",
        }}
      />
    </>
  );
}
