import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "QR Codes & No-Touch Print Solutions Minneapolis | MSE Printing",
  description:
    "Connect smarter with QR codes and no-touch print solutions from MSE Printing. Fast, safe, and interactive print-to-digital technology for your business.",
  keywords: [
    "QR code printing Minneapolis",
    "no-touch print solutions",
    "contactless print Minneapolis",
    "digital print integration",
    "QR code signage Minnesota",
    "MSE Printing QR solutions",
    "smart print Minneapolis",
    "interactive print services",
    "custom QR codes for marketing",
    "touchless print technology",
  ],
  applicationName: "MSE Printing",
  category: "QR Codes & No-Touch Solutions",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options",
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
    title: "QR Codes & No-Touch Print Solutions Minneapolis | MSE Printing",
    description:
      "Safe, fast, and future-ready—MSE Printing bridges print and digital with QR code and no-touch print solutions. Boost engagement, convenience, and safety.",
    url: "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/labels-packaging-images/additional/qr_code_no_touch_options_right.webp",
        width: 1200,
        height: 630,
        alt: "Custom QR code and no-touch print solutions by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Codes & No-Touch Print Solutions Minneapolis | MSE Printing",
    description:
      "Smart, contactless print services with QR code integration for modern businesses. Print-to-digital made easy with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/labels-packaging-images/additional/qr_code_no_touch_options_right.webp",
        alt: "Contactless QR code print solution by MSE Printing in Minneapolis",
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
      "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options#service",
    name: "QR Codes & No-Touch Print Solutions",
    description:
      "Contactless print services and QR code integration by MSE Printing. Enhance customer safety, engagement, and accessibility for modern businesses in Minneapolis and nationwide.",
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
    serviceType: "QR Codes & No-Touch Solutions",
    category: "Print & Digital Integration",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "QR Codes & No-Touch Print Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options#qr-code-printing",
          itemOffered: {
            "@type": "Service",
            name: "QR Code Printing",
            description:
              "Custom QR codes for marketing materials, signage, product packaging, and print-to-digital engagement.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options#contactless-solutions",
          itemOffered: {
            "@type": "Service",
            name: "Contactless Print Solutions",
            description:
              "No-touch print options for menus, brochures, and more to promote safety and convenience.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options#interactive-print",
          itemOffered: {
            "@type": "Service",
            name: "Interactive Print Services",
            description:
              "Integrate interactive elements and smart print technology for customer engagement.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/labels-packaging/qr-codes-no-touch-options",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "QR Codes & No-Touch Print Solutions",
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
const QRCodesNoTouchOptions = async () => {
  const data = await getCategoryPagesData(
    "/labels-packaging/qr-codes-no-touch-options"
  );
  const pageData = data.QRCodesNoTouchOptionsPageData?.[0];

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

export default QRCodesNoTouchOptions;
