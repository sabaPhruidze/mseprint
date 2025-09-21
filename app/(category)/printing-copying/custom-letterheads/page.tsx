import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Letterhead Printing | Custom Brand Letterheads | MSE Printing",
  description:
    "Custom letterhead printing that reinforces your brand on every page. Premium materials, fast turnaround, and professional design in Minneapolis & nationwide.",
  keywords: [
    "letterhead printing Minneapolis",
    "custom letterheads Minnesota",
    "branded letterhead printing",
    "business letterhead design",
    "MSE Printing letterheads",
    "corporate stationery",
    "premium letterhead printing",
    "professional letterheads",
    "company letterheads Minnesota",
    "personalized letterhead design",
  ],
  applicationName: "MSE Printing",
  category: "Letterhead Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/custom-letterheads",
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

  openGraph: {
    title: "Letterhead Printing | Custom Brand Letterheads | MSE Printing",
    description:
      "Professional letterhead printing with premium materials and design options to build brand credibility.",
    url: "https://www.mseprinting.com/printing-copying/custom-letterheads",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/letterheads_right.webp",
        width: 800,
        height: 630,
        alt: "Custom letterhead printing by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letterhead Printing | Custom Brand Letterheads | MSE Printing",
    description:
      "Order professional letterhead printing with your logo and branding from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/letterheads_right.webp",
        alt: "Letterhead printing by MSE Printing, Minneapolis",
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
      "https://www.mseprinting.com/printing-copying/custom-letterheads#service",
    name: "Letterhead Printing",
    description:
      "Custom brand letterhead printing by MSE Printing. Professional designs, premium papers, and fast turnaround in Minneapolis and nationwide.",
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
    serviceType: "Letterhead Printing",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Letterhead Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-letterheads#custom-letterheads",
          itemOffered: {
            "@type": "Service",
            name: "Custom Letterhead Printing",
            description:
              "Branded letterheads printed with your logo and corporate identity.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-letterheads#premium-papers",
          itemOffered: {
            "@type": "Service",
            name: "Premium Paper Options",
            description:
              "Choose from a wide range of quality paper stocks for a professional look.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-letterheads#design-services",
          itemOffered: {
            "@type": "Service",
            name: "Design Services",
            description:
              "Professional design and layout to ensure your letterheads stand out.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/custom-letterheads",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Letterhead Printing",
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
const CustomLetterheads = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/custom-letterheads"
  );
  const pageData = data.CustomLetterheadsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "printing-copying/custom-letterheads", // must match the DB `path`
    footerContentData
  );

  if (!pageData) {
    return <div>Data not available.</div>;
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
};

export default CustomLetterheads;
