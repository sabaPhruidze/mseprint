import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Business & Annual Reports | MSE Printing",
  description:
    "Present your organization’s performance with clarity and professionalism through expertly printed business and annual reports. Custom design, fast turnaround in Minneapolis & nationwide.",
  keywords: [
    "business report printing Minneapolis",
    "annual report printing Minnesota",
    "custom annual reports",
    "corporate report printing",
    "financial report printing Minneapolis",
    "MSE Printing annual reports",
    "presentation report design",
    "company annual review printing",
    "professional report printing Minnesota",
    "performance report printing",
  ],
  applicationName: "MSE Printing",
  category: "Business & Annual Reports",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/business-annual-reports",
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
    title: "Business & Annual Reports | MSE Printing",
    description:
      "Showcase growth and achievements with beautifully designed business and annual reports printed by MSE Printing.",
    url: "https://www.mseprinting.com/printing-copying/business-annual-reports",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/business_annual_reports_right.webp",
        width: 1200,
        height: 630,
        alt: "Printed business and annual reports by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business & Annual Reports | MSE Printing",
    description:
      "Expertly printed business & annual reports to present your organization’s story and achievements.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/business_annual_reports_right.webp",
        alt: "Business and annual reports by MSE Printing, Minneapolis",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 Washington Ave N Ste. 103",
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
      "https://www.mseprinting.com/printing-copying/business-annual-reports#service",
    name: "Business & Annual Reports",
    description:
      "Professional business and annual report printing by MSE Printing. Showcase company performance, financials, and achievements in Minneapolis and nationwide.",
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
    serviceType: "Business & Annual Reports",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business & Annual Reports Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/business-annual-reports#business-reports",
          itemOffered: {
            "@type": "Service",
            name: "Business Report Printing",
            description:
              "Custom business report printing for internal use, investors, and stakeholders.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/business-annual-reports#annual-reports",
          itemOffered: {
            "@type": "Service",
            name: "Annual Report Printing",
            description:
              "High-quality annual reports with custom design and finishing for your organization.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/business-annual-reports#design-services",
          itemOffered: {
            "@type": "Service",
            name: "Report Design Services",
            description:
              "Professional design and layout for visually engaging and informative reports.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/business-annual-reports",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Business & Annual Reports",
      },
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
const BusinessAnnualReports = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/business-annual-reports"
  );
  const pageData = data.BusinessAnnualReportsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure
        pageData={pageData}
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
};

export default BusinessAnnualReports;
