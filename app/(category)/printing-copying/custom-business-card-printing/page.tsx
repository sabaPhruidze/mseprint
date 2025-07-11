import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Business Card Printing | Custom Cards | MSE Printing",
  description:
    "Custom business card printing that makes a lasting impression—crafted by MSE Printing. Premium materials, fast turnaround, creative designs in Minneapolis & nationwide.",
  keywords: [
    "business card printing Minneapolis",
    "custom business cards Minnesota",
    "premium card printing",
    "creative business cards",
    "MSE Printing business cards",
    "thick card stock Minneapolis",
    "foil business cards",
    "personalized business cards",
    "networking cards Minnesota",
    "corporate cards printing",
  ],
  applicationName: "MSE Printing",
  category: "Business Card Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/printing-copying/custom-business-card-printing",
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
    title: "Business Card Printing | Custom Cards | MSE Printing",
    description:
      "High-quality business cards with premium materials and creative designs to elevate your networking impact.",
    url: "https://www.mseprinting.com/printing-copying/custom-business-card-printing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/business_annual_reports_right.webp",
        width: 800,
        height: 630,
        alt: "Business card printing by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Card Printing | Custom Cards | MSE Printing",
    description:
      "Order custom business cards with creative designs, premium materials, and fast turnaround from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/business_annual_reports_right.webp",
        alt: "Business card printing by MSE Printing, Minneapolis",
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
      "https://www.mseprinting.com/printing-copying/custom-business-card-printing#service",
    name: "Business Card Printing",
    description:
      "Custom business card printing by MSE Printing. Premium card stocks, creative designs, and fast turnaround in Minneapolis and nationwide.",
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
    serviceType: "Business Card Printing",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Card Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-business-card-printing#premium-cards",
          itemOffered: {
            "@type": "Service",
            name: "Premium Card Printing",
            description:
              "Thick card stocks, foil stamping, and creative finishes for standout cards.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-business-card-printing#custom-designs",
          itemOffered: {
            "@type": "Service",
            name: "Custom Card Designs",
            description:
              "Personalized business card designs for any industry and brand.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/custom-business-card-printing#fast-turnaround",
          itemOffered: {
            "@type": "Service",
            name: "Fast Turnaround Printing",
            description:
              "Quick, high-quality business card printing to meet your deadlines.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/custom-business-card-printing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Business Card Printing",
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
const CustomBusinessCardPrinting = async () => {
  const data = await getCategoryPagesData(
    "/printing-copying/custom-business-card-printing"
  );
  const pageData = data.CustomBusinessCardPrintingPageData?.[0];

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

export default CustomBusinessCardPrinting;
