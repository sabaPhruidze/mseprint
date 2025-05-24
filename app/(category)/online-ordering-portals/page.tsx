import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title:
    "Online Ordering Portals Minneapolis | Custom Web Portals | MSE Printing",
  description:
    "Streamline your printing and marketing processes with custom online ordering portals from MSE Printing. Simplify ordering, enhance productivity, and maintain brand consistency in Minneapolis & nationwide.",
  keywords: [
    "online ordering portals Minneapolis",
    "custom ordering portal Minnesota",
    "web to print solutions",
    "online print portal Minneapolis",
    "brand ordering portals",
    "MSE Printing online portals",
    "business ordering systems Minnesota",
    "corporate ordering web portal",
    "order management system Minneapolis",
    "customized print portals",
  ],
  applicationName: "MSE Printing",
  category: "Online Ordering Portals",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/online-ordering-portals",
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
      "Online Ordering Portals Minneapolis | Custom Web Portals | MSE Printing",
    description:
      "Customized online ordering solutions designed specifically to enhance your business operations, productivity, and brand consistency.",
    url: "https://www.mseprinting.com/online-ordering-portals",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/online_ordering.webp",
        width: 1200,
        height: 630,
        alt: "Online ordering portal interface by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Online Ordering Portals Minneapolis | Custom Web Portals | MSE Printing",
    description:
      "Empower your business with branded, secure online ordering portals from MSE Printing. Efficient, accurate, and always available.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/online_ordering.webp",
        alt: "Custom online ordering portal by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/online-ordering-portals#service",
    name: "Online Ordering Portals",
    description:
      "Custom online ordering portals by MSE Printing. Streamline print and marketing processes, maintain brand consistency, and simplify business ordering in Minneapolis and nationwide.",
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
    serviceType: "Online Ordering Portals",
    category: "Web to Print Solutions",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Online Ordering Portal Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/online-ordering-portals#custom-portal",
          itemOffered: {
            "@type": "Service",
            name: "Custom Portal Development",
            description:
              "Build tailored online portals for efficient, secure ordering and management of business materials.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/online-ordering-portals#branding",
          itemOffered: {
            "@type": "Service",
            name: "Brand Integration",
            description:
              "Ensure consistent branding and user experience across all ordering platforms.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/online-ordering-portals#support",
          itemOffered: {
            "@type": "Service",
            name: "Support & Maintenance",
            description:
              "Ongoing portal support, updates, and training for your business needs.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/online-ordering-portals",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Online Ordering Portals",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "16",
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
const OnlineOrderingPortals = async () => {
  const data = await getCategoryPagesData("/online-ordering-portals");
  const pageData = data.OnlineOrderingPortalsPageData?.[0];

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

export default OnlineOrderingPortals;
