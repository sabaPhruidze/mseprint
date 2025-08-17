import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title:
    "Video Production Minneapolis | Brand Storytelling & Content | MSE Printing",
  description:
    "Engage your audience with high-quality video content tailored to your brand and message. Scriptwriting, filming, editing, and animation for Minneapolis & nationwide.",
  keywords: [
    "video production Minneapolis",
    "brand video services Minnesota",
    "corporate video Minneapolis",
    "video editing services",
    "commercial video production",
    "MSE Printing video",
    "social media video production",
    "marketing video Minneapolis",
    "video storytelling Minnesota",
    "product video production",
  ],
  applicationName: "MSE Printing",
  category: "Video Production",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical:
      "https://www.mseprinting.com/marketing-services/video-production",
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
    title:
      "Video Production Minneapolis | Brand Storytelling & Content | MSE Printing",
    description:
      "From concept to final cut, our video production services help you tell your story and drive results through compelling visuals.",
    url: "https://www.mseprinting.com/marketing-services/video-production",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/video_production_right.webp",
        width: 1200,
        height: 630,
        alt: "Professional video production services by MSE Printing in Minneapolis",
      },
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/video_production_sample.webp",
        width: 800,
        height: 600,
        alt: "Branded video content sample produced by MSE Printing, Minnesota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Video Production Minneapolis | Brand Storytelling & Content | MSE Printing",
    description:
      "Scriptwriting, filming, editing, and animation services. Tell your brand story with compelling video by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/video_production_right.webp",
        alt: "Video production for business by MSE Printing, Minneapolis",
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
      "https://www.mseprinting.com/marketing-services/video-production#service",
    name: "Video Production",
    description:
      "Professional video production by MSE Printing. Scriptwriting, filming, editing, and animation services for businesses in Minneapolis and nationwide.",
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
    serviceType: "Video Production",
    category: "Media & Content Creation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Video Production Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/video-production#scriptwriting",
          itemOffered: {
            "@type": "Service",
            name: "Scriptwriting & Storyboarding",
            description:
              "Crafting engaging scripts and storyboards to ensure your video tells a compelling story.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/video-production#filming",
          itemOffered: {
            "@type": "Service",
            name: "Filming & Production",
            description:
              "On-location or studio filming with professional equipment and experienced crew.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/video-production#editing",
          itemOffered: {
            "@type": "Service",
            name: "Video Editing & Animation",
            description:
              "Post-production editing, animation, and effects to deliver polished, dynamic content.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/marketing-services/video-production",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Video Production",
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
const VideoProduction = async () => {
  const data = await getCategoryPagesData(
    "/marketing-services/video-production"
  );
  const pageData = data.VideoProductionPageData?.[0];

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

export default VideoProduction;
