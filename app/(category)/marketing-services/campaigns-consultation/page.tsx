import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Marketing Campaigns & Consultation Minneapolis |  MSE Printing",
  description:
    "Strategic marketing consultation and campaign support tailored to your business goals. Plan, launch, and optimize high-impact campaigns with MSE Printing.",
  keywords: [
    "marketing campaigns Minneapolis",
    "marketing consultation Minnesota",
    "campaign strategy Minneapolis",
    "digital marketing consulting",
    "MSE Printing campaign support",
    "custom campaign planning Minneapolis",
    "brand strategy consulting Minnesota",
    "marketing advice Minneapolis",
    "business growth campaigns",
    "marketing services Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Campaigns & Consultation",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/marketing-services/campaigns-consultation",
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
    title: "Marketing Campaigns & Consultation Minneapolis |  MSE Printing",
    description:
      "Get expert advice and support to plan, launch, and manage high-impact marketing campaigns that generate measurable results.",
    url: "https://www.mseprinting.com/marketing-services/campaigns-consultation",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/campaigns_consultation_right.webp",
        width: 1200,
        height: 630,
        alt: "Strategic marketing campaign and consultation services by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Campaigns & Consultation Minneapolis |  MSE Printing",
    description:
      "Expert marketing consultation and campaign management. Launch successful, measurable campaigns with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/campaigns_consultation_right.webp",
        alt: "Marketing campaigns & consultation by MSE Printing, Minneapolis",
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
    "@id":
      "https://www.mseprinting.com/marketing-services/campaigns-consultation#service",
    name: "Marketing Campaigns & Consultation",
    description:
      "Strategic marketing consultation and campaign support from MSE Printing. Professional advice and planning for effective campaign launches in Minneapolis and nationwide.",
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
    serviceType: "Marketing Campaigns & Consultation",
    category: "Marketing Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Campaigns & Consultation Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/campaigns-consultation#campaign-strategy",
          itemOffered: {
            "@type": "Service",
            name: "Campaign Strategy",
            description:
              "Expert strategic planning for effective marketing campaigns tailored to your goals and audience.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/campaigns-consultation#consultation",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Consultation",
            description:
              "Personalized consultation to maximize campaign ROI and brand impact.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/campaigns-consultation#campaign-management",
          itemOffered: {
            "@type": "Service",
            name: "Campaign Management",
            description:
              "Full support for campaign planning, execution, and performance analysis.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/marketing-services/campaigns-consultation",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Marketing Campaigns & Consultation",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "19",
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
const CampaignsConsultation = async () => {
  const data = await getCategoryPagesData(
    "/marketing-services/campaigns-consultation"
  );
  const pageData = data.CampaignsConsultationPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure pageData={pageData} />
    </>
  );
};

export default CampaignsConsultation;
