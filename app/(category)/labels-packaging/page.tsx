import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title:
    "Custom Labels & Packaging Minneapolis | Product Branding | MSE Printing",
  description:
    "Enhance product appeal with custom labels and packaging by MSE Printing. Professional design, printing, and branding for all industries in Minneapolis and nationwide.",
  keywords: [
    "custom labels Minneapolis",
    "product packaging Minneapolis",
    "label printing Minnesota",
    "packaging design Minneapolis",
    "branded packaging Minnesota",
    "MSE Printing labels",
    "retail packaging solutions",
    "food label printing Minneapolis",
    "luxury packaging Minnesota",
    "custom sticker printing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Labels & Packaging",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/labels-packaging",
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
      "Custom Labels & Packaging Minneapolis | Product Branding | MSE Printing",
    description:
      "Custom label and packaging solutions designed to elevate your product presentation and brand identity.",
    url: "https://www.mseprinting.com/labels-packaging",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/card_labels_packaging.webp",
        width: 1200,
        height: 630,
        alt: "Custom labels and packaging for product branding by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Labels & Packaging Minneapolis | Product Branding | MSE Printing",
    description:
      "Professional labels and packaging design for retail, food, and consumer goods. Boost your brand image with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/labels-packaging.webp",
        alt: "High quality labels and packaging by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/labels-packaging#service",
    name: "Custom Labels & Packaging",
    description:
      "Custom label and packaging solutions by MSE Printing, including design, printing, and finishing for all product types and industries in Minneapolis.",
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
    serviceType: "Custom Labels & Packaging",
    category: "Branding & Packaging",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Labels & Packaging Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging#label-printing",
          itemOffered: {
            "@type": "Service",
            name: "Label Printing",
            description:
              "Custom label printing for products, bottles, jars, and retail items. Wide range of materials and finishes.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging#packaging-design",
          itemOffered: {
            "@type": "Service",
            name: "Packaging Design",
            description:
              "Creative and functional packaging design to enhance your product’s appeal and protect contents.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging#branding",
          itemOffered: {
            "@type": "Service",
            name: "Branding & Print Finishing",
            description:
              "Branding, print finishing, and embellishments to ensure your packaging stands out.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/labels-packaging",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Custom Labels & Packaging",
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
const LabelsPackaging = async () => {
  const data = await getCategoryPagesData("/labels-packaging");
  const pageData = data.LabelsPackagingPageData?.[0];

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

export default LabelsPackaging;
