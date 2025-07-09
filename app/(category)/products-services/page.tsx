import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Products & Services | Full-Service Printing | MSE Printing",
  description:
    "Explore MSE Printing’s complete lineup of printing, signage, mailing, and marketing solutions. Offset, digital printing, direct mail, packaging, and more in Minneapolis & nationwide.",
  keywords: [
    "printing services Minneapolis",
    "products and services printing",
    "signage solutions Minnesota",
    "direct mail printing",
    "labels and packaging Minneapolis",
    "creative marketing support",
    "MSE Printing services",
    "digital printing Minneapolis",
    "full-service printing Minnesota",
    "offset printing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Products & Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/products-services",
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
    title: "Products & Services | Full-Service Printing | MSE Printing",
    description:
      "From offset and digital printing to direct mail, labels, packaging, and creative services—MSE Printing delivers full-service support for your brand.",
    url: "https://www.mseprinting.com/products-services",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/products-services-images/additional/products_services_right.webp",
        width: 1200,
        height: 630,
        alt: "Products and services offered by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Services | Full-Service Printing | MSE Printing",
    description:
      "Discover all printing, signage, and marketing solutions with MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/products-services-images/additional/products_services_right.webp",
        alt: "MSE Printing - Products & Services, Minneapolis",
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
    "@id": "https://www.mseprinting.com/products-services#service",
    name: "Products & Services",
    description:
      "Full-service printing, signage, mailing, packaging, and creative marketing solutions by MSE Printing in Minneapolis and nationwide.",
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
    serviceType: "Products & Services",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Products & Services Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/products-services#printing",
          itemOffered: {
            "@type": "Service",
            name: "Printing Solutions",
            description:
              "Offset, digital, and large format printing for any business or creative need.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/products-services#signage",
          itemOffered: {
            "@type": "Service",
            name: "Signage & Displays",
            description:
              "Indoor and outdoor signage, banners, and display graphics.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/products-services#direct-mail",
          itemOffered: {
            "@type": "Service",
            name: "Direct Mail & Marketing",
            description:
              "Direct mail, EDDM, and integrated marketing campaign support.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/products-services",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Products & Services",
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
const ProductsServices = async () => {
  const data = await getCategoryPagesData("/products-services");
  const pageData = data.ProductsServicesPageData?.[0];

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

export default ProductsServices;
