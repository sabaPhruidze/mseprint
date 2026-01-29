// app/marketing-services/social-media/page.tsx
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const revalidate = 86400;

const BASE_URL = "https://www.mseprinting.com";
const PAGE_PATH = "/marketing-services/social-media";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${BASE_URL}/images/marketing-services-images/additional/social_media_right.webp`;

/* ───────── SEO & Social Metadata ───────── */
export const metadata: Metadata = {
  title: "Social Media Marketing in Minneapolis | MSE Printing",
  description:
    "Boost your online presence with expert social media marketing and management from MSE Printing. Content, ads, and community growth for Minneapolis & nationwide.",
  keywords: [
    "social media marketing Minneapolis",
    "social media management Minneapolis",
    "content creation services",
    "social media advertising",
    "Facebook Instagram marketing",
    "LinkedIn marketing services",
    "community management",
    "digital marketing Minneapolis",
    "brand awareness campaigns",
    "MSE Printing social media",
  ],
  applicationName: "MSE Printing",
  category: "Social Media Marketing",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: PAGE_URL,
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
    title: "Social Media Marketing in Minneapolis | MSE Printing",
    description:
      "From content creation to ad campaigns, we help your business grow with strategic social media solutions tailored for success.",
    url: PAGE_URL,
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Social media marketing and management by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing in Minneapolis | MSE Printing",
    description:
      "Grow your business with expert social media marketing and management by MSE Printing. Strategy, content, ads, and more.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: OG_IMAGE,
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
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: BASE_URL }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ───────── Viewport Theme Colors ───────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ───────── Service Schema Structured Data ───────── */
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Social Media Marketing & Management",
    description:
      "Expert social media marketing and management services by MSE Printing, including content creation, ad campaigns, and audience engagement for Minneapolis businesses and beyond.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "MSE Printing",
      url: BASE_URL,
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
          url: `${PAGE_URL}#content-creation`,
          itemOffered: {
            "@type": "Service",
            name: "Content Creation",
            description:
              "Branded content for Facebook, Instagram, LinkedIn, and more to grow your audience.",
          },
        },
        {
          "@type": "Offer",
          url: `${PAGE_URL}#ad-campaigns`,
          itemOffered: {
            "@type": "Service",
            name: "Social Media Advertising",
            description:
              "Targeted ad campaigns to increase reach, engagement, and conversions.",
          },
        },
        {
          "@type": "Offer",
          url: `${PAGE_URL}#community-management`,
          itemOffered: {
            "@type": "Service",
            name: "Community Management",
            description:
              "Managing engagement, responses, and reputation across major social channels.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: PAGE_URL,
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

/* ───────── Main Page Component ───────── */
export default async function SocialMedia() {
  const data = await getCategoryPagesData(PAGE_PATH);
  const pageData = data.SocialMediaPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "marketing-services/social-media",
    footerContentData
  );

  if (!pageData) notFound();

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
}
