import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// Fully corrected Metadata for SEO & Social Sharing (title < 70 chars)
export const metadata: Metadata = {
  title: "Custom Gifts, Awards & Incentives | MSE Printing",
  description:
    "Celebrate milestones and inspire loyalty with personalized gifts, trophies, and awards by MSE Printing.",
  keywords: [
    "custom gifts Minneapolis",
    "corporate awards",
    "employee incentives Minnesota",
    "personalized trophies",
    "award plaques",
    "recognition gifts",
    "custom appreciation kits",
    "branded corporate gifts",
    "employee rewards",
    "MSE Printing awards",
    "employee recognition awards Minneapolis",
    "custom awards Minneapolis",
    "acrylic awards Minneapolis",
    "crystal awards Minneapolis",
    "trophy engraving Minneapolis",
    "plaque engraving Minneapolis",
    "personalized award plaques Minneapolis",
    "custom medals Minneapolis",
    "years of service awards",
    "retirement awards",
    "sales awards",
    "branded gift sets Minneapolis",
    "company swag boxes Minneapolis",
    "onboarding kits Minneapolis",
    "corporate holiday gifts Minneapolis",
    "eco-friendly corporate gifts Minneapolis",
    "rush trophies Minneapolis",
    "same day trophies Minneapolis",
    "name badges Minneapolis",
    "donor recognition plaques",
    "school sports trophies Minneapolis",
    "coach plaques",
    "gift kitting and fulfillment Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Gifts, Awards & Incentives",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives",
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
    google: "ABCD1234xyz", // Replace with your Search Console verification string
  },
  openGraph: {
    title: "Custom Gifts, Awards & Incentives | MSE Printing",
    description:
      "From custom trophies to employee appreciation kits, MSE Printing helps you deliver meaningful recognition through personalized gifts and awards.",
    url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/gifts_awards_incentives_right.webp",
        width: 800,
        height: 630,
        alt: "Custom trophies, awards, and corporate gifts by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Gifts, Awards & Incentives | MSE Printing",
    description:
      "Reward, recognize, and inspire with personalized gifts and awards from MSE Printing, Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/gifts_awards_incentives_right.webp",
        alt: "Personalized awards and gifts by MSE Printing",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// Service Schema for Google Rich Results & Local SEO
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#service",
    name: "Gifts, Awards & Incentives",
    description:
      "Personalized gifts, awards, trophies, and incentive kits for employee recognition, events, and branding by MSE Printing in Minneapolis, MN.",
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
      { "@type": "City", name: "Saint Paul" },
      { "@type": "City", name: "Bloomington" },
      { "@type": "City", name: "Edina" },
      { "@type": "City", name: "Maple Grove" },
      { "@type": "City", name: "Plymouth" },
      { "@type": "City", name: "Brooklyn Park" },
      { "@type": "City", name: "Minnetonka" },
      { "@type": "City", name: "Eagan" },
      { "@type": "City", name: "Burnsville" },
      { "@type": "State", name: "Minnesota" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: [
      "Custom Gifts and Awards",
      "Corporate Recognition",
      "Employee Incentives",
      "Gift Kitting & Fulfillment",
    ],
    category: "Recognition & Incentives",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gifts & Awards",
      itemListElement: [
        // არსებული 3 დატოვე და დაამატე ქვე-ელემენტები როგორც Offer/Service
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#trophies",
          itemOffered: { "@type": "Service", name: "Custom Trophies" },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#awards",
          itemOffered: { "@type": "Service", name: "Branded Awards" },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#incentive-kits",
          itemOffered: { "@type": "Service", name: "Incentive Kits" },
        },
        // ახალი თემური სერვისები (Top queries-ს ასახვა)
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#award-plaques",
          itemOffered: {
            "@type": "Service",
            name: "Award Plaques & Engraving",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#acrylic-crystal",
          itemOffered: { "@type": "Service", name: "Acrylic & Crystal Awards" },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#medals",
          itemOffered: { "@type": "Service", name: "Custom Medals" },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#name-badges",
          itemOffered: { "@type": "Service", name: "Name Badges" },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives#swag-boxes",
          itemOffered: {
            "@type": "Service",
            name: "Branded Swag Boxes / Gift Sets",
          },
        },
      ],
    },
    // დამატებითი სემანტიკა Google-სთვის
    hasPart: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "Service", name: "Employee recognition awards Minneapolis" },
        { "@type": "Service", name: "Trophy engraving Minneapolis" },
        { "@type": "Service", name: "Plaque engraving Minneapolis" },
        { "@type": "Service", name: "Onboarding kits Minneapolis" },
        {
          "@type": "Service",
          name: "Eco-friendly corporate gifts Minneapolis",
        },
        { "@type": "Service", name: "Rush trophies Minneapolis" },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/tradeshows-events/gifts-awards-incentives",
      availability: "https://schema.org/InStock",
      itemOffered: { "@type": "Service", name: "Gifts, Awards & Incentives" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const GiftsAwardsIncentives = async () => {
  const data = await getCategoryPagesData(
    "/tradeshows-events/gifts-awards-incentives"
  );
  const pageData = data.GiftsAwardsIncentivesPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "tradeshows-events/gifts-awards-incentives", // must match the DB `path`
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

export default GiftsAwardsIncentives;
