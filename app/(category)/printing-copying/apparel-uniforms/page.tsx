import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Apparel & Uniforms | Custom Branded Wear | MSE Printing",
  description:
    "Custom apparel and uniforms that elevate your brand’s identity and professionalism. T-shirts, polos, safety gear, and more in Minneapolis & nationwide.",
  keywords: [
    "custom apparel Minneapolis",
    "uniform printing Minnesota",
    "branded clothing Minneapolis",
    "work uniforms printing",
    "corporate apparel Minnesota",
    "MSE Printing uniforms",
    "safety gear Minneapolis",
    "embroidered shirts Minnesota",
    "custom t-shirts Minneapolis",
    "promotional apparel Minnesota",
  ],
  applicationName: "MSE Printing",
  category: "Apparel & Uniforms",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying/apparel-uniforms",
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
    title: "Apparel & Uniforms | Custom Branded Wear | MSE Printing",
    description:
      "From polos to safety gear, outfit your team with high-quality, branded apparel crafted by MSE Printing.",
    url: "https://www.mseprinting.com/printing-copying/apparel-uniforms",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/apparel_uniforms_right.webp",
        width: 800,
        height: 630,
        alt: "Branded apparel and uniforms by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apparel & Uniforms | Custom Branded Wear | MSE Printing",
    description:
      "Outfit your team with branded uniforms, shirts, and safety apparel from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/printing-copying-images/additional/apparel_uniforms_right.webp",
        alt: "Apparel and uniforms by MSE Printing, Minneapolis",
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
      "https://www.mseprinting.com/printing-copying/apparel-uniforms#service",
    name: "Apparel & Uniforms",
    description:
      "Custom apparel and uniform printing by MSE Printing. High-quality branded uniforms, shirts, safety gear, and more for businesses in Minneapolis and nationwide.",
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
    serviceType: "Apparel & Uniforms",
    category: "Branded Clothing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Apparel & Uniforms Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/apparel-uniforms#custom-apparel",
          itemOffered: {
            "@type": "Service",
            name: "Custom Apparel",
            description:
              "Branded t-shirts, polos, and outerwear to promote your business identity.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/apparel-uniforms#uniform-printing",
          itemOffered: {
            "@type": "Service",
            name: "Uniform Printing",
            description:
              "Professional uniform printing for teams, retail, and service staff.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/printing-copying/apparel-uniforms#safety-gear",
          itemOffered: {
            "@type": "Service",
            name: "Safety Gear",
            description:
              "High-visibility and branded safety gear to protect your workforce.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/printing-copying/apparel-uniforms",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Apparel & Uniforms",
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
const ApparelUniforms = async () => {
  const data = await getCategoryPagesData("/printing-copying/apparel-uniforms");
  const pageData = data.ApparelUniformsPageData?.[0];

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

export default ApparelUniforms;
