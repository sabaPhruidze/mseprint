import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title:
    "Car Graphics & Wraps in Minneapolis MN | Vehicle Branding | MSE Printing",
  description:
    "High-impact car graphics and custom vehicle wraps in Minneapolis, MN. MSE Printing designs, prints, and installs full-color wraps, decals, and fleet branding so your vehicle becomes a moving billboard.",
  keywords: [
    "car graphics Minneapolis",
    "vehicle wraps Minneapolis MN",
    "custom car wraps Minneapolis",
    "fleet vehicle branding",
    "auto graphics Minnesota",
    "mobile advertising wraps",
    "car wrap design Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Car Graphics & Wraps",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/car-graphics-wraps",
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
    title: "Car Graphics & Wraps in Minneapolis MN | MSE Printing",
    description:
      "Custom vehicle wraps and graphics printed and installed locally in Minneapolis by MSE Printing.",
    url: "https://www.mseprinting.com/signs/car-graphics-wraps",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/car_graphics_wraps_right.webp",
        width: 1200,
        height: 630,
        alt: "Car graphics & wraps in Minneapolis MN by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Graphics & Wraps in Minneapolis MN | MSE Printing",
    description:
      "Get full-color custom car wraps and vehicle graphics printed and installed in Minneapolis by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/car_graphics_wraps_right.webp",
        alt: "Vehicle wrap printing in Minneapolis MN by MSE Printing",
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
      "@id": "https://www.mseprinting.com/signs/car-graphics-wraps#service",
      name: "Car Graphics & Wraps in Minneapolis MN",
      description:
        "Design, print, and installation of custom car wraps, vehicle decals, and fleet graphics in Minneapolis, Minnesota.",
      serviceType: "Vehicle Wrap Printing & Installation",
      provider: { "@id": "https://www.mseprinting.com/#localbusiness" },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vehicle Wrap & Graphics Services",
        itemListElement: [
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/car-graphics-wraps#vehicle-wraps",
            itemOffered: {
              "@type": "Service",
              name: "Full Vehicle Wraps",
              description:
                "Seamless, full-coverage wraps for cars, trucks, and vans.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/car-graphics-wraps#partial-wraps",
            itemOffered: {
              "@type": "Service",
              name: "Partial Wraps & Decals",
              description:
                "Cost-effective stripes, decals, and spot graphics to brand any vehicle.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/car-graphics-wraps#design-install",
            itemOffered: {
              "@type": "Service",
              name: "Design & Installation",
              description:
                "Professional creative design and certified installation for every wrap project.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url: "https://www.mseprinting.com/images/signs-images/additional/car_graphics_wraps_right.webp",
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

const CarGraphicsWraps = async () => {
  const data = await getCategoryPagesData("/car-graphics-wraps");
  const pageData = data.CarGraphicsWrapsPageData?.[0];

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

export default CarGraphicsWraps;
