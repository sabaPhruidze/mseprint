import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Social Media Marketing Minneapolis | MSE Printing",
  description:
    "Boost your online presence with expert social media marketing and management services from MSE Printing. Content creation, ads, and community growth for Minneapolis & nationwide.",
  keywords: [
    "social media marketing Minneapolis",
    "social media management Minnesota",
    "content creation services Minneapolis",
    "social media ads Minneapolis",
    "brand awareness marketing",
    "MSE Printing social media",
    "Instagram marketing Minneapolis",
    "Facebook advertising Minnesota",
    "social media campaigns",
    "digital marketing Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Social Media Marketing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-services/social-media",
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
    title: "Social Media Marketing Minneapolis | MSE Printing",
    description:
      "From content creation to ad campaigns, we help your business grow with strategic social media solutions tailored for success.",
    url: "https://www.mseprinting.com/marketing-services/social-media",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/social_media_right.webp",
        width: 1200,
        height: 630,
        alt: "Social media marketing and management by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Minneapolis | MSE Printing",
    description:
      "Grow your business with expert social media marketing and management by MSE Printing. Strategy, content, ads, and more.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/social_media_right.webp",
        alt: "Social media management services by MSE Printing, Minneapolis",
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
      "https://www.mseprinting.com/marketing-services/social-media#service",
    name: "Social Media Marketing & Management",
    description:
      "Expert social media marketing and management services by MSE Printing, including content creation, ad campaigns, and audience engagement for Minneapolis businesses and beyond.",
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
    serviceType: "Social Media Marketing & Management",
    category: "Digital Marketing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Social Media Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/social-media#content-creation",
          itemOffered: {
            "@type": "Service",
            name: "Content Creation",
            description:
              "Branded content for Facebook, Instagram, LinkedIn, and more to grow your audience.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/social-media#ad-campaigns",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Advertising",
            description:
              "Targeted ad campaigns to increase reach, engagement, and conversions.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/social-media#community-management",
          itemOffered: {
            "@type": "Service",
            name: "Community Management",
            description:
              "Managing engagement, responses, and reputation across all major social channels.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/marketing-services/social-media",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Social Media Marketing & Management",
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
const SocialMedia = async () => {
  const data = await getCategoryPagesData("/marketing-services/social-media");
  const pageData = data.SocialMediaPageData?.[0];

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

export default SocialMedia;
