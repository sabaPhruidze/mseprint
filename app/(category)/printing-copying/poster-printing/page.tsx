import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Poster Printing | Custom Posters Minneapolis | MSE Printing",
  description:
    "Capture attention with high-quality poster printing from MSE Printing—perfect for promotions, events, and décor. Vivid color, professional finishes, fast turnaround in Minneapolis & nationwide.",
  keywords: [
    "poster printing Minneapolis",
    "custom posters Minnesota",
    "large format poster printing",
    "color poster printing",
    "event poster printing",
    "MSE Printing posters",
    "advertising poster printing",
    "display poster printing",
    "promotional posters Minneapolis",
    "professional poster printing",
  ],
  applicationName: "MSE Printing",
  category: "Poster Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying/poster-printing",
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
    title: "Poster Printing | Custom Posters Minneapolis | MSE Printing",
    description:
      "Custom poster printing in vivid color and professional finishes. Great for advertising, announcements, and displays.",
    url: "https://www.mseprinting.com/printing-copying/poster-printing",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/poster_printing_right.webp",
        width: 800,
        height: 630,
        alt: "Custom poster printing by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poster Printing | Custom Posters Minneapolis | MSE Printing",
    description:
      "Order vivid, high-quality posters for your events, promotions, or décor from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/poster_printing_right.webp",
        alt: "Poster printing by MSE Printing, Minneapolis",
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
      "https://www.mseprinting.com/printing-copying/poster-printing#service",
    name: "Poster Printing",
    description:
      "Custom poster printing by MSE Printing. Vivid color, professional finishes, and fast turnaround for advertising, events, and décor in Minneapolis and nationwide.",
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
    serviceType: "Poster Printing",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Poster Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/poster-printing#custom-posters",
          itemOffered: {
            "@type": "Service",
            name: "Custom Poster Printing",
            description:
              "Personalized posters for events, promotions, and displays in any size.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/poster-printing#large-format",
          itemOffered: {
            "@type": "Service",
            name: "Large Format Posters",
            description:
              "High-impact, large-format posters with bold colors and finishes.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/poster-printing#professional-finishes",
          itemOffered: {
            "@type": "Service",
            name: "Professional Finishes",
            description:
              "Lamination, mounting, and other finishing options for a lasting impression.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/poster-printing",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Poster Printing",
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
const PosterPrinting = async () => {
  const data = await getCategoryPagesData("/printing-copying/poster-printing");
  const pageData = data.PosterPrintingPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "printing-copying/poster-printing", // must match the DB `path`
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
        breadcrumbs={breadcrumbs} // ← ADD
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

export default PosterPrinting;
