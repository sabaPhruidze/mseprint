import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "ADA & Wayfinding Signs | Custom Signage | MSE Printing",
  description:
    "Create accessible and branded environments with ADA-compliant and wayfinding signage from MSE Printing. Ensure safety, accessibility, and a professional image with custom-designed signage tailored to your facility.",
  keywords: [
    "ADA signs Minneapolis",
    "wayfinding signage Minnesota",
    "accessible signs printing",
    "custom braille signs",
    "MSE Printing ADA signage",
    "directional signage Minneapolis",
    "facility wayfinding signs",
    "ADA compliant signage",
    "custom building signs Minnesota",
    "sign printing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "ADA & Wayfinding Signs",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/ada-wayfinding-signs",
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
    title: "ADA & Wayfinding Signs | Custom Signage | MSE Printing",
    description:
      "Ensure safety, accessibility, and a professional image with custom-designed ADA & wayfinding signage tailored to your facility.",
    url: "https://www.mseprinting.com/signs/ada-wayfinding-signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/ada_wayfinding_signs.webp",
        width: 800,
        height: 630,
        alt: "ADA & wayfinding signage by MSE Printing in Minneapolis",
      },
      {
        url: "https://www.mseprinting.com/images/home-images/ada-wayfinding-signs_sample.webp",
        width: 800,
        height: 600,
        alt: "Sample ADA and wayfinding signs by MSE Printing, Minnesota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADA & Wayfinding Signs | Custom Signage | MSE Printing",
    description:
      "Order ADA-compliant and custom wayfinding signage for accessibility and branding from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/ada-wayfinding-signs.webp",
        alt: "ADA & wayfinding signs by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/signs/ada-wayfinding-signs#service",
    name: "ADA & Wayfinding Signs",
    description:
      "Custom ADA and wayfinding signage by MSE Printing. Ensure accessibility, safety, and branded environments for your facility. Braille, tactile, and directional signs in Minneapolis and nationwide.",
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
    serviceType: "ADA & Wayfinding Signs",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ADA & Wayfinding Sign Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/ada-wayfinding-signs#ada-signs",
          itemOffered: {
            "@type": "Service",
            name: "ADA-Compliant Signs",
            description:
              "Accessible signs with braille and tactile features for public spaces.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/ada-wayfinding-signs#wayfinding-signs",
          itemOffered: {
            "@type": "Service",
            name: "Wayfinding & Directional Signs",
            description:
              "Custom wayfinding and directional signage for navigation and branding.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/ada-wayfinding-signs#design-services",
          itemOffered: {
            "@type": "Service",
            name: "Design & Installation Services",
            description:
              "Professional design and installation for ADA and wayfinding signage.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/signs/ada-wayfinding-signs",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "ADA & Wayfinding Signs",
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
const AdaWayFindingSigns = async () => {
  const data = await getCategoryPagesData("/signs/ada-wayfinding-signs");
  const pageData = data.AdaWayfindingSignsPageData?.[0];

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

export default AdaWayFindingSigns;
