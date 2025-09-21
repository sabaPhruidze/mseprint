import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Presentation & Training Materials | Print Services | MSE Printing",
  description:
    "Deliver your message with clarity and confidence using custom presentation and training materials by MSE Printing. Manuals, handouts, folders, and more in Minneapolis & nationwide.",
  keywords: [
    "presentation materials Minneapolis",
    "training materials printing",
    "manual printing Minnesota",
    "custom folders Minneapolis",
    "training handouts",
    "MSE Printing presentation",
    "workshop materials",
    "custom binders Minneapolis",
    "booklet printing Minnesota",
    "instructional materials",
  ],
  applicationName: "MSE Printing",
  category: "Presentation & Training Materials",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/presentation-training-materials",
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
    title: "Presentation & Training Materials | Print Services | MSE Printing",
    description:
      "Create impactful, branded training and presentation materials—manuals, handouts, folders, and more—tailored to your audience.",
    url: "https://www.mseprinting.com/presentation-training-materials",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/presentation_training_materials_right.webp",
        width: 800,
        height: 630,
        alt: "Branded presentation and training materials by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presentation & Training Materials | Print Services | MSE Printing",
    description:
      "Custom printed training materials, manuals, handouts, and folders for effective presentations by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/additional/presentation_training_materials_right.webp",
        alt: "Custom training and presentation printing by MSE Printing, Minneapolis",
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
      "https://www.mseprinting.com/presentation-training-materials#service",
    name: "Presentation & Training Materials",
    description:
      "Custom presentation and training materials by MSE Printing: manuals, handouts, folders, binders, and booklets for businesses and educators in Minneapolis and nationwide.",
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
    serviceType: "Presentation & Training Materials",
    category: "Print Materials",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Presentation & Training Materials Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/presentation-training-materials#manuals",
          itemOffered: {
            "@type": "Service",
            name: "Manuals & Booklets",
            description:
              "Custom-printed training manuals and booklets for workshops, seminars, and internal documentation.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/presentation-training-materials#handouts",
          itemOffered: {
            "@type": "Service",
            name: "Handouts & Worksheets",
            description:
              "Branded handouts and worksheets to support your training sessions and presentations.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/presentation-training-materials#folders",
          itemOffered: {
            "@type": "Service",
            name: "Folders & Binders",
            description:
              "Custom folders and binders for organizing and distributing your materials.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/presentation-training-materials",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Presentation & Training Materials",
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
const PresentationTrainingMaterials = async () => {
  const data = await getCategoryPagesData("/presentation-training-materials");
  const pageData = data.PresentationTrainingMaterialsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "presentation-training-materials", // must match the DB `path`
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

export default PresentationTrainingMaterials;
