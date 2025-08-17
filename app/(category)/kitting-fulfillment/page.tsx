import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Kitting & Fulfillment Services Minneapolis | MSE Printing",
  description:
    "Streamline complex projects with MSE Printing’s kitting and fulfillment services—assembly, packaging, and delivery done right. Serving Minneapolis & USA. Get a free quote: 763-542-8812.",
  keywords: [
    "kitting services Minneapolis",
    "fulfillment Minneapolis",
    "assembly and packaging Minneapolis",
    "custom kitting Minnesota",
    "event kits Minneapolis",
    "marketing kits fulfillment",
    "corporate fulfillment services",
    "product distribution Minneapolis",
    "MSE Printing fulfillment",
    "Minnesota kitting services",
  ],
  applicationName: "MSE Printing",
  category: "Kitting & Fulfillment",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/kitting-fulfillment",
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
    title: "Kitting & Fulfillment Services Minneapolis | MSE Printing",
    description:
      "Customized kits professionally packed and shipped by MSE Printing. Perfect for events, marketing, onboarding, and more.",
    url: "https://www.mseprinting.com/kitting-fulfillment", // matches canonical
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/kitting_fulfillment_right.webp",
        width: 1200,
        height: 630,
        alt: "Team at MSE Printing preparing customized kitting and fulfillment packages in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitting & Fulfillment Services Minneapolis | MSE Printing",
    description:
      "Trusted partner for custom kitting, assembly, packaging & delivery. Fast service and nationwide shipping.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/kitting_fulfillment_right.webp",
        alt: "Kitting & Fulfillment by MSE Printing in Minneapolis",
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
    "@id": "https://www.mseprinting.com/kitting-fulfillment#service",
    name: "Kitting & Fulfillment Services",
    description:
      "Assembly, packaging, and delivery services for complex projects, marketing kits, onboarding packages, and more. Serving Minneapolis and nationwide clients.",
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
    serviceType: "Kitting & Fulfillment",
    category: "Business Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kitting & Fulfillment Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/kitting-fulfillment#assembly",
          itemOffered: {
            "@type": "Service",
            name: "Assembly Services",
            description:
              "Expert assembly of components and products into kits for marketing, training, or product launches.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/kitting-fulfillment#packaging",
          itemOffered: {
            "@type": "Service",
            name: "Packaging Services",
            description:
              "Professional packaging solutions for secure and presentable kit delivery.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/kitting-fulfillment#delivery",
          itemOffered: {
            "@type": "Service",
            name: "Delivery & Fulfillment",
            description:
              "Nationwide shipping, delivery, and fulfillment for business kits and marketing materials.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/kitting-fulfillment",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Custom Kitting & Fulfillment",
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
const KittingFulfillment = async () => {
  const data = await getCategoryPagesData("/kitting-fulfillment");
  const pageData = data.KittingFulfillmentPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "kitting-fulfillment", // must match the DB `path`
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

export default KittingFulfillment;
