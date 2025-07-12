import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// Full, corrected Metadata for SEO & Sharing
export const metadata: Metadata = {
  title: "Now Open Signs & Graphics | MSE Printing",
  description:
    "Celebrate your grand opening with bold, professional Now Open signs, banners, and graphics from MSE Printing. Make a memorable first impression!",
  keywords: [
    "now open signs",
    "grand opening signage",
    "custom banners Minneapolis",
    "window clings Minneapolis",
    "grand opening graphics",
    "vibrant open signs",
    "business opening banners",
    "MSE Printing grand opening",
    "storefront signs Minneapolis",
    "business signage Minnesota",
  ],
  applicationName: "MSE Printing",
  category: "Signage Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/now-open-signs-graphics",
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
    title: "Now Open Signs & Graphics | MSE Printing",
    description:
      "Grab attention fast with vibrant Now Open banners, window clings, and signage designed to launch your business with impact. Professional signs from MSE Printing, Minneapolis.",
    url: "https://www.mseprinting.com/signs/now-open-signs-graphics",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/now_open_signs_graphics_right.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing - Grand Opening Now Open Signs and Banners in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Now Open Signs & Graphics | MSE Printing",
    description:
      "Make your grand opening unmissable! Shop custom Now Open signs, banners, and storefront graphics from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/now_open_signs_graphics_right.webp",
        alt: "Grand opening signage from MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/signs/now-open-signs-graphics#service",
    name: "Now Open Signs & Graphics",
    description:
      "Bold Now Open signage and grand opening graphics for businesses in Minneapolis and Minnesota. Get noticed on your first day with banners, window clings, and professional signs.",
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
    serviceType: "Signage & Graphics",
    category: "Grand Opening Signs",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Now Open Signage",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/now-open-signs-graphics#banners",
          itemOffered: {
            "@type": "Service",
            name: "Grand Opening Banners",
            description:
              "Custom Now Open banners for businesses and storefronts",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/now-open-signs-graphics#window-clings",
          itemOffered: {
            "@type": "Service",
            name: "Now Open Window Clings",
            description:
              "Attention-grabbing window clings for new business openings",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/now-open-signs-graphics#signs",
          itemOffered: {
            "@type": "Service",
            name: "Now Open Signs",
            description: "Professional indoor and outdoor Now Open signage",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/signs/now-open-signs-graphics",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Now Open Signs & Graphics",
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

const NowOpenSignsGraphics = async () => {
  const data = await getCategoryPagesData("/signs/now-open-signs-graphics");
  const pageData = data.NowOpenSignsGraphicsPageData?.[0];

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

export default NowOpenSignsGraphics;
