import React from "react";
import { Metadata, Viewport } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Marketing Services Minneapolis | Websites | Printing | MSE Printing",
  description:
    "Strategy-fueled, story-driven marketing solutions that connect and convert—powered by MSE Printing. Campaigns, consultation, video, web, and social media marketing for Minneapolis & nationwide.",
  keywords: [
    "marketing services Minneapolis",
    "marketing strategy Minnesota",
    "campaign planning Minneapolis",
    "website design marketing",
    "video marketing Minneapolis",
    "consultation marketing",
    "digital marketing services Minnesota",
    "MSE Printing marketing",
    "brand storytelling Minneapolis",
    "online marketing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Marketing Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-services",
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
  verification: {
    google: "ABCD1234xyz", // ← replace with your Search Console verification code
  },
  openGraph: {
    title:
      "Marketing Services Minneapolis | Websites | Printing | MSE Printing",
    description:
      "From campaigns and consultation to websites and video, MSE Printing delivers data‑driven marketing that generates results.",
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
    title:
      "Marketing Services Minneapolis | Websites | Printing | MSE Printing",
    description:
      "Integrated marketing: campaigns, web design, video, and social media by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/campaigns_consultation.webp",
        alt: "Marketing consultation services by MSE Printing, Minneapolis",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 N Washington Ave Ste. 101",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

// ---------- Viewport Theme Colors ----------
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// ---------- Service Schema Structured Data ----------
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
        streetAddress: "3839 N Washington Ave Ste. 101",
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
      itemOffered: {
        "@type": "Service",
        name: "Marketing Services",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "28",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// ---------- Main Page Component ----------
const MarketingServices = async () => {
  const data = await getSpecialPagesData("/marketing-services");
  const pageData = data.MarketingServicesCardPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <CardsPagesStructure pageData={pageData} />
    </>
  );
};

export default MarketingServices;
