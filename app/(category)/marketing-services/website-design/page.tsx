import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Website Design Minneapolis | Web Design | MSE Printing",
  description:
    "Modern, mobile-friendly websites that reflect your brand and convert visitors into customers. Responsive, SEO-optimized, and stunning web design in Minneapolis & nationwide.",
  keywords: [
    "website design Minneapolis",
    "mobile-friendly web design Minnesota",
    "responsive website Minneapolis",
    "SEO web design Minneapolis",
    "custom web design Minnesota",
    "MSE Printing websites",
    "business website design Minneapolis",
    "branding web design",
    "professional web development Minnesota",
    "website redesign Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Website Design",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/marketing-services/website-design",
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
    title: "Website Design Minneapolis | Web Design | MSE Printing",
    description:
      "We design responsive, SEO-optimized websites that look stunning and perform flawlessly across all devices.",
    url: "https://www.mseprinting.com/marketing-services/website-design",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/website_design_right.webp",
        width: 1200,
        height: 630,
        alt: "Modern, mobile-friendly website design by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Minneapolis | Web Design | MSE Printing",
    description:
      "Grow your business with modern, SEO-focused, mobile-friendly website design by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/marketing-services-images/additional/website_design_right.webp",
        alt: "Website design & development by MSE Printing, Minneapolis",
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
      "https://www.mseprinting.com/marketing-services/website-design#service",
    name: "Website Design",
    description:
      "Professional website design services by MSE Printing. Responsive, SEO-optimized websites for businesses in Minneapolis and nationwide.",
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
    serviceType: "Website Design",
    category: "Web Development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/website-design#responsive-design",
          itemOffered: {
            "@type": "Service",
            name: "Responsive Design",
            description:
              "Mobile-friendly, fast-loading websites that look great on every device.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/website-design#seo",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description:
              "Websites built for search visibility with optimized content, structure, and tags.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/marketing-services/website-design#branding",
          itemOffered: {
            "@type": "Service",
            name: "Brand Integration",
            description:
              "Custom website branding and visuals that reflect your company's identity.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/marketing-services/website-design",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Website Design",
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
const WebsiteDesign = async () => {
  const data = await getCategoryPagesData("/marketing-services/website-design");
  const pageData = data.WebsiteDesignPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "marketing-services/website-design", // must match the DB `path`
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

export default WebsiteDesign;
