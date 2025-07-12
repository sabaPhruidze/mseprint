import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Short Run Packaging | Custom Boxes | MSE Printing",
  description:
    "Agile and high-quality packaging tailored for short runs by MSE Printing. Flexible, premium-quality packaging for startups, seasonal launches, and limited editions.",
  keywords: [
    "short run packaging printing",
    "custom packaging boxes",
    "startup packaging Minneapolis",
    "limited edition packaging",
    "seasonal packaging design",
    "MSE Printing packaging",
    "premium packaging solutions",
    "small batch packaging Minnesota",
    "flexible packaging Minneapolis",
    "high-quality box printing",
  ],
  applicationName: "MSE Printing",
  category: "Short Run Packaging",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/short-run-packaging",
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
    title: "Short Run Packaging | Custom Boxes | MSE Printing",
    description:
      "Flexible, premium-quality short run packaging for startups, seasonal launches, and limited editions—crafted by MSE Printing.",
    url: "https://www.mseprinting.com/short-run-packaging",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/short_run_packaging_right.webp",
        width: 1200,
        height: 630,
        alt: "Short run packaging by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Short Run Packaging | Custom Boxes | MSE Printing",
    description:
      "Get premium-quality short run packaging for launches, promotions, and more from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/short_run_packaging_right.webp",
        alt: "Short run packaging by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/short-run-packaging#service",
    name: "Short Run Packaging",
    description:
      "Custom short run packaging and boxes by MSE Printing. Perfect for startups, limited editions, and seasonal promotions. Premium-quality, flexible packaging solutions in Minneapolis and nationwide.",
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
    serviceType: "Short Run Packaging",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Short Run Packaging Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/short-run-packaging#custom-boxes",
          itemOffered: {
            "@type": "Service",
            name: "Custom Boxes",
            description:
              "Tailored boxes and packaging for small batches and promotional campaigns.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/short-run-packaging#premium-packaging",
          itemOffered: {
            "@type": "Service",
            name: "Premium Packaging",
            description:
              "High-end materials and finishing options for exclusive product releases.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/short-run-packaging#seasonal-launches",
          itemOffered: {
            "@type": "Service",
            name: "Seasonal & Limited Edition Packaging",
            description:
              "Special packaging for holidays, launches, and limited runs.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/short-run-packaging",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Short Run Packaging",
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
const ShortRunPackaging = async () => {
  const data = await getCategoryPagesData("/short-run-packaging");
  const pageData = data.ShortRunPackagingPageData?.[0];

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

export default ShortRunPackaging;
