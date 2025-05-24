import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title:
    "Custom Packaging Minneapolis | Product Packaging Design & Printing | MSE Printing",
  description:
    "Elevate your product experience with branded custom packaging by MSE Printing. Premium materials, eye-catching designs, and secure packaging for every product.",
  keywords: [
    "custom packaging Minneapolis",
    "product packaging design",
    "packaging printing Minneapolis",
    "branded packaging Minnesota",
    "retail packaging solutions",
    "packaging boxes custom",
    "MSE Printing packaging",
    "Minnesota custom packaging",
    "luxury packaging Minneapolis",
    "packaging design Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Custom Packaging",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/labels-packaging/custom-packaging",
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
      "Custom Packaging Minneapolis | Product Packaging Design & Printing | MSE Printing",
    description:
      "Stylish, secure, and strategic—MSE Printing creates custom packaging that delivers more than just a product.",
    url: "https://www.mseprinting.com/labels-packaging/custom-packaging",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/labels-packaging-images/additional/custom_packaging_right.webp",
        width: 1200,
        height: 630,
        alt: "Branded custom packaging designed and printed by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Packaging Minneapolis | Product Packaging Design & Printing",
    description:
      "Premium custom packaging and design for retail, e-commerce, and product launches. Impress customers with every unboxing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/labels-packaging-images/additional/custom_packaging_right.webp",
        alt: "Premium custom packaging by MSE Printing in Minneapolis",
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
      "https://www.mseprinting.com/labels-packaging/custom-packaging#service",
    name: "Custom Packaging",
    description:
      "Premium custom packaging solutions by MSE Printing, including branded boxes, secure product packaging, and custom designs for retail and e-commerce businesses in Minneapolis.",
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
    serviceType: "Custom Packaging",
    category: "Packaging Solutions",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Packaging Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging/custom-packaging#design",
          itemOffered: {
            "@type": "Service",
            name: "Packaging Design",
            description:
              "Creative and functional packaging design services to reflect your brand and protect your products.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging/custom-packaging#manufacturing",
          itemOffered: {
            "@type": "Service",
            name: "Custom Packaging Manufacturing",
            description:
              "Production of high-quality custom boxes and packaging in various sizes and materials.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging/custom-packaging#branding",
          itemOffered: {
            "@type": "Service",
            name: "Branding & Print Finishing",
            description:
              "Branding, finishing, and embellishment options for eye-catching packaging that stands out.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/labels-packaging/custom-packaging",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Custom Packaging",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "27",
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
const CustomPackaging = async () => {
  const data = await getCategoryPagesData("/labels-packaging/custom-packaging");
  const pageData = data.CustomPackagingPageData?.[0];

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

export default CustomPackaging;
