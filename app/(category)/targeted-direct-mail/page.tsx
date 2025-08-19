import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Targeted Direct Mail Services in Minneapolis MN | MSE Printing",
  description:
    "Data-driven, targeted direct-mail campaigns printed and mailed from Minneapolis, MN. Segment lists, personalize every piece, and boost ROI with MSE Printing.",
  keywords: [
    "targeted direct mail Minneapolis",
    "direct mail services Minneapolis MN",
    "data driven direct mail",
    "custom mailing services Minneapolis",
    "direct mail marketing Minnesota",
    "personalized mailers Minneapolis",
    "mailing list segmentation",
  ],
  applicationName: "MSE Printing",
  category: "Direct Mail Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/targeted-direct-mail",
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
    google: "ABCD1234xyz",
  },
  openGraph: {
    title: "Targeted Direct Mail Services in Minneapolis MN | MSE Printing",
    description:
      "Reach the right audience at the right time with precision direct-mail campaigns from MSE Printing, Minneapolis.",
    url: "https://www.mseprinting.com/targeted-direct-mail",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/direct-mail-images/additional/targeted_direct_mail_right.webp",
        width: 800,
        height: 630,
        alt: "Targeted direct mail services in Minneapolis MN by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Targeted Direct Mail Services in Minneapolis MN | MSE Printing",
    description:
      "Smarter, data-driven direct-mail campaigns from MSE Printing in Minneapolis.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/direct-mail-images/additional/targeted_direct_mail_right.webp",
        alt: "Precision direct mail printed in Minneapolis MN by MSE Printing",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "44.97997;-93.26384",
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
      "@id": "https://www.mseprinting.com/targeted-direct-mail#service",
      name: "Targeted Direct Mail Services in Minneapolis MN",
      description:
        "Precision direct-mail campaigns with data segmentation, variable-data printing, and local delivery—serving Minneapolis and the Twin Cities.",
      serviceType: "Direct Mail Marketing",
      provider: { "@id": "https://www.mseprinting.com/#localbusiness" },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Targeted Mail Services",
        itemListElement: [
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/targeted-direct-mail#personalized-campaigns",
            itemOffered: {
              "@type": "Service",
              name: "Personalized Campaigns",
              description:
                "Data-driven mailers customized to each recipient for higher response rates.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/targeted-direct-mail#mailing-list-management",
            itemOffered: {
              "@type": "Service",
              name: "Mailing List Management",
              description:
                "Targeting, cleaning, and segmenting your audience lists for accurate delivery.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/targeted-direct-mail#variable-data-printing",
            itemOffered: {
              "@type": "Service",
              name: "Variable Data Printing",
              description:
                "Personalization at scale—unique text, offers, or images on every mail piece.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url: "https://www.mseprinting.com/targeted-direct-mail",
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

const TargetedDirectMail = async () => {
  const data = await getCategoryPagesData("/targeted-direct-mail");
  const pageData = data.TargetedDirectMailPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "targeted-direct-mail", // must match the DB `path`
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

export default TargetedDirectMail;
