import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Standard Direct Mail in Minneapolis | MSE Printing",
  description:
    "Direct mail services in Minneapolis–Saint Paul: targeted postcards & letters, list sourcing, variable data, presort/USPS compliance, IMb tracking, and postage optimization by MSE Printing.",
  keywords: [
    "direct mail Minneapolis",
    "direct mail services Minneapolis",
    "standard direct mail",
    "mail house Minneapolis",
    "lettershop Minneapolis",
    "bulk mailing services Minneapolis",
    "USPS Marketing Mail Minneapolis",
    "first-class mail Minneapolis",
    "saturation mail Minneapolis",
    "presort standard mail Minneapolis",

    "targeted mailing services",
    "direct mail marketing",
    "postcard mailing Minneapolis",
    "letter mailing services Minnesota",
    "envelope addressing Minneapolis",
    "inserting and tabbing services",
    "permit imprint indicia Minneapolis",
    "nonprofit postage mailings",
    "political direct mail Minnesota",
    "fundraising direct mail Minneapolis",
    "real estate postcards Minneapolis",
    "healthcare patient mailings Minneapolis",

    "mailing lists Minneapolis",
    "audience list sourcing",
    "data cleansing CASS NCOA",
    "NCOA processing Minneapolis",
    "CASS certification Minneapolis",
    "variable data printing direct mail",
    "personalized direct mail Minneapolis",
    "IMb tracking Minneapolis",
    "USPS drop shipping SCF NDC",
    "postage optimization Minneapolis",
    "address verification Minneapolis",
    "postal logistics Minnesota",

    "custom postcards Minneapolis",
    "letter mailers Minnesota",
    "bulk mail Minneapolis",
    "mail marketing Minneapolis",
    "postal mail solutions",
    "MSE Printing direct mail",
    "EDDM planning Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Direct Mail Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: "https://www.mseprinting.com/standard-direct-mail" },
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
    title: "Standard Direct Mail in Minneapolis | MSE Printing",
    description:
      "Design, print, and deliver postcards & letters with list sourcing, variable data, presort/USPS compliance, and IMb tracking.",
    url: "https://www.mseprinting.com/standard-direct-mail",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/standard_direct_mail_right.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing - Standard Direct Mail Marketing Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Direct Mail in Minneapolis | MSE Printing",
    description:
      "Targeted direct mail with list sourcing, VDP, USPS compliance, and IMb tracking for Minneapolis–Saint Paul.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/standard_direct_mail_right.webp",
        alt: "Direct mail service from MSE Printing in Minneapolis",
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

// Service Schema for Google Rich Results & Local SEO
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/standard-direct-mail#service",
    name: "Standard Direct Mail",
    description:
      "Professional direct mail services from MSE Printing—design, print, and delivery of postcards, letters, and mailers for targeted marketing.",
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
    serviceType: "Direct Mail Marketing",
    category: "Direct Mail Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Direct Mail Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/standard-direct-mail#postcards",
          itemOffered: {
            "@type": "Service",
            name: "Postcard Mailing",
            description:
              "Design, print, and delivery of postcards for targeted marketing.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/standard-direct-mail#letters",
          itemOffered: {
            "@type": "Service",
            name: "Letter Mailing",
            description:
              "Personalized letters sent to customer lists for outreach.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/standard-direct-mail#bulk-mail",
          itemOffered: {
            "@type": "Service",
            name: "Bulk Mail Services",
            description:
              "Cost-effective bulk mail campaigns with postal discounts.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/standard-direct-mail",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Standard Direct Mail",
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

const StandardDirectMail = async () => {
  const data = await getCategoryPagesData("/standard-direct-mail");
  const pageData = data.StandardDirectMailPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "standard-direct-mail", // must match the DB `path`
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

export default StandardDirectMail;
