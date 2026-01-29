import React from "react";
import Link from "next/link";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ─────────────── SEO METADATA ─────────────── */
export const metadata: Metadata = {
  title: "Graphic Design | MSE Printing",
  description:
    "Creative and strategic graphic design services that bring your brand to life. From logos to layouts, we design to impress and convert.",
  keywords: [
    "graphic design Minneapolis",
    "professional logo design",
    "print design services",
    "custom brochures and flyers",
    "branding design USA",
    "visual identity creation",
    "design and layout services",
    "MSE Printing graphic designers",
    "creative brand design",
    "business marketing graphics",
  ],
  applicationName: "MSE Printing",
  category: "Graphic Design Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/graphic-design",
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
    title: "Graphic Design | MSE Printing",
    description:
      "From branding to brochures, our expert graphic designers craft visual assets that communicate and convert.",
    url: "https://www.mseprinting.com/graphic-design",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website", // ✅ was "article"
    images: [
      {
        url: "https://www.mseprinting.com/images/graphic-design-images/additional/graphic_design_right.webp",
        width: 1200,
        height: 630,
        alt: "Creative graphic design studio at MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design | MSE Printing",
    description:
      "Strategic graphic design services tailored to your brand—from concept to final print.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/graphic-design-images/additional/graphic_design_right.webp",
        alt: "Custom-designed marketing materials by MSE Printing",
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

/* ─────────────── VIEWPORT COLOR MODE ─────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

/* ─────────────── STRUCTURED DATA / SCHEMA.ORG ─────────────── */
const ServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mseprinting.com/graphic-design#service",
    name: "Graphic Design",
    description:
      "Professional graphic design services including branding, logos, flyers, and layout design. MSE Printing creates visuals that resonate and deliver results.",
    image:
      "https://www.mseprinting.com/images/graphic-design-images/additional/graphic_design_right.webp",
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
      sameAs: [
        "https://www.facebook.com/mseprinting",
        "https://www.instagram.com/mseprinting",
        "https://www.linkedin.com/company/mse-printing",
      ],
      priceRange: "$$",
    },
    areaServed: [
      { "@type": "City", name: "Minneapolis" },
      { "@type": "State", name: "Minnesota" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Graphic Design",
    category: "Creative Design Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Graphic Design Options",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/graphic-design#branding",
          itemOffered: {
            "@type": "Service",
            name: "Brand Identity & Logo Design",
            description:
              "Custom logo and branding packages for new and growing businesses.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/graphic-design#brochures",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Materials",
            description:
              "Brochures, flyers, rack cards and promotional pieces professionally designed.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/graphic-design",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Graphic Design",
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

/* ─────────────── MAIN PAGE COMPONENT ─────────────── */
const GraphicDesign = async () => {
  const data = await getCategoryPagesData("/graphic-design");
  const pageData = data.GraphicDesignPageData?.[0];

  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "graphic-design",
    footerContentData
  );
  if (!pageData) {
    return (
      <>
        <ServiceSchema />
        <main className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Graphic Design in Minneapolis
          </h1>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            MSE Printing provides professional graphic design for branding,
            print materials, and marketing campaigns. From logos to brochures,
            we help your business look consistent and credible across every
            touchpoint.
          </p>

          <div className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-950/30">
            <h2 className="text-xl font-semibold">
              Popular design requests
            </h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Logo & brand identity</li>
              <li>Brochures, flyers, rack cards</li>
              <li>Business cards & stationery</li>
              <li>Trade show graphics & signage layouts</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/request-quote"
              className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact-us"
              className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              Contact Us
            </Link>
          </div>
        </main>
      </>
    );
  }

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
};

export default GraphicDesign;
