import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Delivery & Takeout Signs | Food Service | MSE Printing",
  description:
    "Boost visibility and efficiency with professional delivery and takeout signs from MSE Printing. Durable, branded signage that helps customers find you fast and enhances food service operations.",
  keywords: [
    "delivery signs printing",
    "takeout signage Minneapolis",
    "restaurant delivery signs",
    "MSE Printing food service signs",
    "custom takeout banners",
    "branded delivery signage",
    "outdoor takeout signs",
    "food pickup signage Minnesota",
    "fast food signs Minneapolis",
    "restaurant signs printing",
  ],
  applicationName: "MSE Printing",
  category: "Delivery & Takeout Signs",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/delivery-takeout-signs",
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
    title: "Delivery & Takeout Signs | Food Service | MSE Printing",
    description:
      "Durable and branded delivery and takeout signage that helps customers find you fast and boosts your food service operations.",
    url: "https://www.mseprinting.com/signs/delivery-takeout-signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/delivery_takeout_signs_right.webp",
        width: 800,
        height: 630,
        alt: "Delivery and takeout signs by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivery & Takeout Signs | Food Service | MSE Printing",
    description:
      "Order durable, branded delivery and takeout signs for food service from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/delivery_takeout_signs_right.webp",
        alt: "Delivery & Takeout Signs by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/signs/delivery-takeout-signs#service",
    name: "Delivery & Takeout Signs",
    description:
      "Professional delivery and takeout sign printing by MSE Printing. Durable, branded signage for restaurants and food service. Help customers find you and boost your business in Minneapolis and nationwide.",
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
    serviceType: "Delivery & Takeout Signs",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Delivery & Takeout Sign Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/delivery-takeout-signs#delivery-signs",
          itemOffered: {
            "@type": "Service",
            name: "Delivery Signs",
            description:
              "Custom signage for restaurants and food delivery operations.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/delivery-takeout-signs#takeout-signs",
          itemOffered: {
            "@type": "Service",
            name: "Takeout Signs",
            description:
              "Branded signs to guide customers to takeout and pickup areas.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/delivery-takeout-signs#branding",
          itemOffered: {
            "@type": "Service",
            name: "Branding & Custom Design",
            description:
              "Professional design services for branded food service signage.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/signs/delivery-takeout-signs",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Delivery & Takeout Signs",
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
const DeliveryTakeoutSigns = async () => {
  const data = await getCategoryPagesData("/signs/delivery-takeout-signs");
  const pageData = data.DeliveryTakeoutSignsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return (
    <>
      <ServiceSchema />
      <PageStructure
        pageData={pageData}
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

export default DeliveryTakeoutSigns;
