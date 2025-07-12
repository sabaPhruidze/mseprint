import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Book Printing | Custom Bound Books | MSE Printing",
  description:
    "Print high-quality books with MSE Printing—perfect for authors, educators, and businesses. Custom bound books, manuals, and catalogs printed in Minneapolis & nationwide.",
  keywords: [
    "book printing Minneapolis",
    "custom book printing Minnesota",
    "manual printing",
    "catalog printing",
    "bound book printing Minneapolis",
    "MSE Printing books",
    "self-publishing Minnesota",
    "softcover book printing",
    "hardcover printing Minneapolis",
    "education book printing",
  ],
  applicationName: "MSE Printing",
  category: "Book Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying/book-printing",
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
    title: "Book Printing | Custom Bound Books | MSE Printing",
    description:
      "Custom bound books, manuals, and catalogs printed with care and quality at MSE Printing in Minneapolis.",
    url: "https://www.mseprinting.com/printing-copying/book-printing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/book_printing_right.webp",
        width: 1200,
        height: 630,
        alt: "Book printing and binding by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Printing | Custom Bound Books | MSE Printing",
    description:
      "High-quality book printing and binding services for authors, educators, and businesses by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/book_printing_right.webp",
        alt: "Book printing services by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/printing-copying/book-printing#service",
    name: "Book Printing",
    description:
      "Custom book printing and binding by MSE Printing. Perfect for authors, businesses, and education—manuals, catalogs, and self-published books in Minneapolis and nationwide.",
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
    serviceType: "Book Printing",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Book Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/book-printing#bound-books",
          itemOffered: {
            "@type": "Service",
            name: "Bound Book Printing",
            description:
              "Custom printed and bound books—softcover, hardcover, spiral, and more.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/book-printing#manuals",
          itemOffered: {
            "@type": "Service",
            name: "Manual Printing",
            description:
              "Training manuals, educational workbooks, and instruction guides printed to order.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/book-printing#catalogs",
          itemOffered: {
            "@type": "Service",
            name: "Catalog Printing",
            description:
              "Professional product and service catalogs designed and printed for your business.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/book-printing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Book Printing",
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
const BookPrinting = async () => {
  const data = await getCategoryPagesData("/printing-copying/book-printing");
  const pageData = data.BookPrintingPageData?.[0];

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

export default BookPrinting;
