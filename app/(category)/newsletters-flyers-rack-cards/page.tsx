import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Newsletters, Flyers & Rack Cards Minneapolis | MSE Printing",
  description:
    "Engage your audience with high-quality printed newsletters, flyers, and rack cards from MSE Printing. Custom design and fast turnaround for businesses in Minneapolis & nationwide.",
  keywords: [
    "newsletters printing Minneapolis",
    "flyers printing Minnesota",
    "rack cards Minneapolis",
    "marketing flyers Minnesota",
    "printed newsletters Minneapolis",
    "MSE Printing rack cards",
    "custom flyers design",
    "business newsletters Minneapolis",
    "promotional rack cards",
    "print marketing materials Minnesota",
  ],
  applicationName: "MSE Printing",
  category: "Newsletters, Flyers & Rack Cards",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/newsletters-flyers-rack-cards",
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
    title: "Newsletters, Flyers & Rack Cards Minneapolis | MSE Printing",
    description:
      "Print eye-catching flyers, informative newsletters, and handy rack cards that capture attention and promote your message effectively.",
    url: "https://www.mseprinting.com/newsletters-flyers-rack-cards",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/newsletters_flyers_rack_cards_right.webp",
        width: 1200,
        height: 630,
        alt: "Printed newsletters, flyers, and rack cards by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletters, Flyers & Rack Cards Minneapolis | MSE Printing",
    description:
      "Attract attention and promote your business with custom newsletters, flyers, and rack cards printed by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/newsletters_flyers_rack_cards_right.webp",
        alt: "Printed newsletters, flyers, and rack cards by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/newsletters-flyers-rack-cards#service",
    name: "Newsletters, Flyers & Rack Cards",
    description:
      "Custom newsletters, flyers, and rack cards by MSE Printing. Professionally designed, printed, and finished for effective business marketing in Minneapolis and nationwide.",
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
    serviceType: "Newsletters, Flyers & Rack Cards",
    category: "Print Marketing Materials",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Newsletters, Flyers & Rack Cards Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/newsletters-flyers-rack-cards#newsletters",
          itemOffered: {
            "@type": "Service",
            name: "Newsletter Printing",
            description:
              "Custom newsletter design and printing for business updates, promotions, and community news.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/newsletters-flyers-rack-cards#flyers",
          itemOffered: {
            "@type": "Service",
            name: "Flyer Printing",
            description:
              "High-impact flyer printing for marketing, events, and special offers. Multiple sizes and finishes.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/newsletters-flyers-rack-cards#rack-cards",
          itemOffered: {
            "@type": "Service",
            name: "Rack Card Printing",
            description:
              "Custom rack cards for point-of-sale, tourism, and promotional displays.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/newsletters-flyers-rack-cards",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Newsletters, Flyers & Rack Cards",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "25",
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
const NewslettersFlyersRackCards = async () => {
  const data = await getCategoryPagesData("/newsletters-flyers-rack-cards");
  const pageData = data.NewslettersFlyersRackCardsPageData?.[0];

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

export default NewslettersFlyersRackCards;
