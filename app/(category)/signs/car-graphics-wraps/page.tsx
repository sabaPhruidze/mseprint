import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Car Graphics & Wraps | Vehicle Branding | MSE Printing",
  description:
    "Transform your vehicle into a moving advertisement with custom car graphics and wraps from MSE Printing. High-quality, full-color designs to boost brand visibility on the road.",
  keywords: [
    "car graphics Minneapolis",
    "custom vehicle wraps",
    "car wrap printing Minnesota",
    "fleet branding wraps",
    "auto graphics Minneapolis",
    "MSE Printing car wraps",
    "mobile advertising graphics",
    "vehicle signage Minnesota",
    "car decal printing",
    "vehicle branding wraps",
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
  verification: {
    google: "ABCD1234xyz", // ← replace with your Search Console verification code
  },
  openGraph: {
    title: "Car Graphics & Wraps | Vehicle Branding | MSE Printing",
    description:
      "High-quality custom vehicle wraps and graphics designed to boost brand visibility on the road.",
    url: "https://www.mseprinting.com/signs/car-graphics-wraps",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/car_graphics_wraps_right.webp",
        width: 800,
        height: 630,
        alt: "Custom car graphics and vehicle wraps by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Graphics & Wraps | Vehicle Branding | MSE Printing",
    description:
      "Get full-color custom car wraps and vehicle graphics for mobile advertising from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/car_graphics_wraps_right.webp",
        alt: "Car graphics and wraps by MSE Printing, Minneapolis",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 N Washington Ave Ste. 101",
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
    "@id": "https://www.mseprinting.com/signs/car-graphics-wraps#service",
    name: "Car Graphics & Wraps",
    description:
      "Custom vehicle wraps and car graphics by MSE Printing. Turn your car into a mobile billboard with full-color, durable designs in Minneapolis and nationwide.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.mseprinting.com/#business",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      telephone: "763-542-8812",
      email: "info@mseprinting.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 N Washington Ave Ste. 101",
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
    serviceType: "Car Graphics & Wraps",
    category: "Print Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicle Wrap & Graphics Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/car-graphics-wraps#vehicle-wraps",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle Wraps",
            description:
              "Full-coverage wraps for cars, trucks, and vans to boost branding on the road.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/car-graphics-wraps#car-decals",
          itemOffered: {
            "@type": "Service",
            name: "Car Decals & Graphics",
            description:
              "Custom car decals, partial wraps, and vinyl graphics for mobile advertising.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/signs/car-graphics-wraps#design-install",
          itemOffered: {
            "@type": "Service",
            name: "Design & Installation Services",
            description:
              "Professional design and installation for all vehicle graphics and wraps.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/signs/car-graphics-wraps",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Car Graphics & Wraps",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "14",
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
const CarGraphicsWraps = async () => {
  const data = await getCategoryPagesData("/car-graphics-wraps");
  const pageData = data.CarGraphicsWrapsPageData?.[0];

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

export default CarGraphicsWraps;
