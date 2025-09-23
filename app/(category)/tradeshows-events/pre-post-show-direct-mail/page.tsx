import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// Fully corrected Metadata for SEO & Social Sharing (title < 70 chars)
export const metadata: Metadata = {
  title: "Pre & Post-Show Direct Mail Services | MSE Printing",
  description:
    "Drive booth traffic, create engagement, and maximize event ROI with pre- and post-show direct mail services from MSE Printing.",
  keywords: [
    "pre-show direct mail",
    "post-show direct mail",
    "event marketing mail",
    "trade show invitations",
    "follow-up postcards",
    "custom event mailers",
    "MSE Printing event mail",
    "Minneapolis direct mail services",
    "tradeshow mail campaigns",
    "event engagement printing",
  ],
  applicationName: "MSE Printing",
  category: "Event Direct Mail Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail",
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
    title: "Pre & Post-Show Direct Mail Services | MSE Printing",
    description:
      "From pre-show invitations to post-event thank-yous, MSE Printing helps extend your reach and maximize event ROI through effective direct mail campaigns.",
    url: "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/pre_post_show_direct_mail_right.webp",
        width: 1200,
        height: 630,
        alt: "Pre-show and post-show direct mail for events by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre & Post-Show Direct Mail Services | MSE Printing",
    description:
      "Boost event results with pre-show invitations and post-show follow-up mailers from MSE Printing, Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/tradeshows-events-images/additional/pre_post_show_direct_mail_right.webp",
        alt: "Direct mail for events by MSE Printing",
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
      "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail#service",
    name: "Pre & Post-Show Direct Mail",
    description:
      "Pre-show invitations, post-show follow-up postcards, and event engagement mailers by MSE Printing in Minneapolis, MN.",
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
    serviceType: "Event Direct Mail",
    category: "Tradeshow & Event Marketing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Direct Mail Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail#pre-show-invitations",
          itemOffered: {
            "@type": "Service",
            name: "Pre-Show Invitations",
            description:
              "Custom invitations mailed to attendees before your event.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail#post-event-followup",
          itemOffered: {
            "@type": "Service",
            name: "Post-Event Follow-up",
            description:
              "Thank-you notes and follow-up mailers for event engagement.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail#event-mailers",
          itemOffered: {
            "@type": "Service",
            name: "Event Mailers",
            description:
              "Engagement and promotional mailers to drive traffic to your booth.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/tradeshows-events/pre-post-show-direct-mail",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Pre & Post-Show Direct Mail",
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

const PrePostShowDirectMail = async () => {
  const data = await getCategoryPagesData(
    "/tradeshows-events/pre-post-show-direct-mail"
  );
  const pageData = data.PrePostShowDirectMailPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "tradeshows-events/pre-post-show-direct-mail", // must match the DB `path`
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

export default PrePostShowDirectMail;
