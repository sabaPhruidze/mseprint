// app/marketing-services/video-production/page.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const revalidate = 86400;

/* ───────── SEO & Social Metadata (Fix 2) ───────── */
export const metadata: Metadata = {
  title: "Video Production in Minneapolis | MSE Printing",
  description:
    "Engage your audience with high-quality video content tailored to your brand and message. Scriptwriting, filming, editing, and animation for Minneapolis & nationwide.",
  applicationName: "MSE Printing",
  category: "Video Production",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/marketing-services/video-production",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  // Site verification & LocalBusiness/geo go in app/layout.tsx (site-wide), not per page.
  openGraph: {
    title: "Video Production in Minneapolis | MSE Printing",
    description:
      "From concept to final cut, our video production services help you tell your story and drive results through compelling visuals.",
    url: "https://www.mseprinting.com/marketing-services/video-production",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/video_production_right.webp",
        width: 1200,
        height: 630,
        alt: "Professional video production services by MSE Printing in Minneapolis",
      },
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/video_production_sample.webp",
        width: 800,
        height: 600,
        alt: "Branded video content sample produced by MSE Printing, Minnesota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production in Minneapolis | MSE Printing",
    description:
      "Scriptwriting, filming, editing, and animation services. Tell your brand story with compelling video by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/video_production_right.webp",
        alt: "Video production for business by MSE Printing, Minneapolis",
      },
    ],
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ───────── Viewport Theme Colors ───────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ───────── Service Schema Structured Data ───────── */
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.mseprinting.com/marketing-services/video-production#service",
    name: "Video Production",
    description:
      "Professional video production by MSE Printing. Scriptwriting, filming, editing, and animation services for businesses in Minneapolis and nationwide.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.mseprinting.com/#business",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      telephone: "763-542-8812",
      email: "info@mseprinting.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 Washington Ave N Ste. 103",
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
    serviceType: "Video Production",
    category: "Media & Content Creation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Video Production Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/video-production#scriptwriting",
          itemOffered: {
            "@type": "Service",
            name: "Scriptwriting & Storyboarding",
            description:
              "Crafting engaging scripts and storyboards to ensure your video tells a compelling story.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/video-production#filming",
          itemOffered: {
            "@type": "Service",
            name: "Filming & Production",
            description:
              "On-location or studio filming with professional equipment and experienced crew.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/video-production#editing",
          itemOffered: {
            "@type": "Service",
            name: "Video Editing & Animation",
            description:
              "Post-production editing, animation, and effects to deliver polished, dynamic content.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/marketing-services/video-production",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Video Production" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* ───────── Main Page Component ───────── */
export default async function VideoProduction() {
  const data = await getCategoryPagesData(
    "/marketing-services/video-production"
  );
  const pageData = data.VideoProductionPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "marketing-services/video-production",
    footerContentData
  );

  if (!pageData) {
    // Avoid thin 200 → return a real 404 to prevent soft-404 signals
    notFound();
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure
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
