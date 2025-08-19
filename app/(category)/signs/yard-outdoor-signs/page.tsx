import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// Fully corrected metadata for SEO and Social Sharing
export const metadata: Metadata = {
  title: "Yard Signs & Outdoor Signs Printing in Minneapolis MN | MSE Printing",
  description:
    "Weather-proof yard signs, A-frames, and outdoor displays printed in Minneapolis, MN. MSE Printing designs, prints, and installs durable signage for real-estate, events, and local businesses.",
  keywords: [
    "yard signs Minneapolis",
    "outdoor signs Minneapolis MN",
    "custom yard sign printing",
    "A-frame signs Minneapolis",
    "real estate signs Minnesota",
    "event yard signs Minneapolis",
    "weatherproof outdoor signage",
  ],
  applicationName: "MSE Printing",
  category: "Outdoor Signage",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/yard-outdoor-signs",
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
    title: "Yard & Outdoor Signs Printing in Minneapolis MN | MSE Printing",
    description:
      "Custom yard signs, A-frames, and outdoor displays built for Minnesota weather by MSE Printing.",
    url: "https://www.mseprinting.com/signs/yard-outdoor-signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/yard_outdoor_signs_right.webp",
        width: 1200,
        height: 630,
        alt: "Yard and outdoor signs printed in Minneapolis MN by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yard & Outdoor Signs Printing in Minneapolis MN | MSE Printing",
    description:
      "Promote your business with durable outdoor signs and yard displays from MSE Printing in Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/yard_outdoor_signs_right.webp",
        alt: "Outdoor yard sign printing in Minneapolis MN by MSE Printing",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "44.97997;-93.26384", // downtown coordinates :contentReference[oaicite:0]{index=0}
    ICBM: "44.97997, -93.26384",
    "business:contact_data:street_address": "3839 Washington Ave N Ste. 103",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// Service Schema for Local SEO & Google Rich Results
const ServiceSchema = () => {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.mseprinting.com/#localbusiness",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      telephone: "763-542-8812",
      email: "info@mseprinting.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 Washington Ave N Ste. 103",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        postalCode: "55412",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 44.97997,
        longitude: -93.26384,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.mseprinting.com/signs/yard-outdoor-signs#service",
      name: "Yard & Outdoor Signs Printing in Minneapolis MN",
      description:
        "Design, print, and installation of weatherproof yard signs, A-frames, and outdoor event signage in Minneapolis, Minnesota.",
      serviceType: "Outdoor Sign Printing & Installation",
      provider: { "@id": "https://www.mseprinting.com/#localbusiness" },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Outdoor Signage Services",
        itemListElement: [
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/yard-outdoor-signs#yard-signs",
            itemOffered: {
              "@type": "Service",
              name: "Custom Yard Signs",
              description:
                "Full-color, weather-resistant yard signs for businesses, events, and real-estate.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/yard-outdoor-signs#a-frame",
            itemOffered: {
              "@type": "Service",
              name: "A-Frame Signs",
              description:
                "Durable sidewalk A-frames perfect for outdoor advertising.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/yard-outdoor-signs#event-signage",
            itemOffered: {
              "@type": "Service",
              name: "Event & Directional Signage",
              description:
                "Weatherproof signage for races, festivals, and community events.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url: "https://www.mseprinting.com/signs/yard-outdoor-signs",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const YardOutdoorSigns = async () => {
  const data = await getCategoryPagesData("/signs/yard-outdoor-signs");
  const pageData = data.YardOutdoorSignsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "signs/yard-outdoor-signs", // must match the DB `path`
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
        breadcrumbs={breadcrumbs}
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

export default YardOutdoorSigns;
