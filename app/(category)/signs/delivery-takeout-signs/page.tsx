// app/signs/delivery-takeout-signs/page.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { unstable_cache } from "next/cache";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Delivery & Takeout Signs — Minneapolis, MN | MSE Printing",
  description:
    "Curbside pickup & delivery signs in Minneapolis–St. Paul. Reflective/illuminated options, QR codes, fast turnaround. Durable, brand-matched signage by MSE Printing.",
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
  openGraph: {
    title: "Delivery & Takeout Signs in Minneapolis | MSE Printing",
    description:
      "Durable, branded delivery & takeout signage that helps customers find you fast and streamlines operations.",
    url: "https://www.mseprinting.com/signs/delivery-takeout-signs",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/additional/delivery_takeout_signs_right.webp",
        width: 1200,
        height: 630,
        alt: "Delivery and curbside pickup signs in Minneapolis by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivery & Takeout Signs in Minneapolis | MSE Printing",
    description:
      "Order durable, branded delivery and takeout signs—curbside, reflective, illuminated, and QR-ready.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      "https://www.mseprinting.com/images/signs-images/additional/delivery_takeout_signs_right.webp",
    ],
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ───────── Viewport ───────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

const getPageDataCached = unstable_cache(
  () => getCategoryPagesData("/signs/delivery-takeout-signs"),
  ["delivery-takeout-signs"],
  { revalidate: 86400 }
);

const getFooterDataCached = unstable_cache(
  () => getFooterData(),
  ["footer-data"],
  { revalidate: 86400 }
);

const ServiceSchema = () => {
  const url = "https://www.mseprinting.com/signs/delivery-takeout-signs";
  const businessId = "https://www.mseprinting.com/#business";
  const image =
    "https://www.mseprinting.com/images/signs-images/additional/delivery_takeout_signs_right.webp";

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: "Delivery & Takeout Signs in Minneapolis | MSE Printing",
      description:
        "Delivery & takeout signs in Minneapolis—curbside pickup, reflective/illuminated options, QR codes, fast turnaround. Durable, brand-matched signage by MSE Printing.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.mseprinting.com/#website",
      },
      primaryImageOfPage: { "@type": "ImageObject", url: image },
      inLanguage: "en-US",
      breadcrumb: { "@id": `${url}#breadcrumbs` },
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Delivery & Takeout Signs",
      image,
      description:
        "Professional delivery and takeout sign printing by MSE Printing. Durable, branded signage for restaurants and food service in Minneapolis and nationwide.",
      provider: {
        "@type": "LocalBusiness",
        "@id": businessId,
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
        { "@type": "City", name: "Saint Paul" },
        { "@type": "State", name: "Minnesota" },
        { "@type": "Country", name: "United States" },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 45.030471,
          longitude: -93.305678,
        },
        geoRadius: 50000,
      },
      serviceType: "Delivery & Takeout Signs",
      category: "Print Services",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Delivery & Takeout Sign Services",
        itemListElement: [
          {
            "@type": "Offer",
            url: `${url}#delivery-signs`,
            itemOffered: {
              "@type": "Service",
              name: "Delivery Signs",
              description:
                "Custom signage for restaurants and delivery operations.",
            },
          },
          {
            "@type": "Offer",
            url: `${url}#takeout-signs`,
            itemOffered: {
              "@type": "Service",
              name: "Takeout Signs",
              description:
                "Branded signs to guide customers to takeout and pickup areas.",
            },
          },
          {
            "@type": "Offer",
            url: `${url}#branding`,
            itemOffered: {
              "@type": "Service",
              name: "Branding & Custom Design",
              description:
                "Professional design services for food service signage.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url,
        availability: "https://schema.org/InStock",
        itemOffered: { "@type": "Service", name: "Delivery & Takeout Signs" },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Signs",
          item: "https://www.mseprinting.com/signs",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Delivery & Takeout Signs",
          item: url,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
};

const FAQSchema = () => {
  const url = "https://www.mseprinting.com/signs/delivery-takeout-signs";
  const faqs = [
    {
      q: "What materials do you use for outdoor delivery signs?",
      a: "Aluminum/ACM for long-term durability, coroplast for lightweight installs, and PVC for a rigid look—printed with UV-resistant inks and protected by laminates. Reflective and anti-graffiti options available.",
    },
    {
      q: "Can I customize signs for specific promotions or meal deals?",
      a: "Yes—snap-in A-frame panels, magnetic menus, dry-erase boards, and removable overlays let you update offers quickly while staying on brand.",
    },
    {
      q: "Are there local regulations for placing delivery and takeout signs?",
      a: "Rules vary by city. We provide scaled renderings and specs for permit applications and design within common Minneapolis guidelines.",
    },
    {
      q: "Can I incorporate QR codes for quick menu access?",
      a: "Definitely—on curbside panels, tabletop signs, window decals, and banners. We size and test codes for easy scanning and can provide trackable links.",
    },
    {
      q: "What sizes and letter heights work best for drive-by readability?",
      a: "Roughly 1″ letter height per 10′ of viewing distance. For 25–35′, use 3–4″; road-facing pieces often need 6–10″.",
    },
    {
      q: "Do you offer illuminated or reflective options for night visibility?",
      a: "Yes—engineer-grade or high-intensity reflective films, edge-lit acrylic, LED cabinets, and solar-assisted lighting options.",
    },
    {
      q: "What mounting and hardware options are available?",
      a: "U-channel posts, stanchions, weighted bases, wall/fence mounts, suction cups, grommets, and pole pockets. Windy sites benefit from spring-loaded posts or mesh banners.",
    },
    {
      q: "How fast is turnaround, and do you offer rush service?",
      a: "Common formats ship in 2–4 business days after proof; illuminated or complex programs take longer. Rush and partial shipments available.",
    },
    {
      q: "Can you match my exact brand colors and fonts?",
      a: "Yes—Pantone® or calibrated CMYK across aluminum, coroplast, PVC, vinyl, and acrylic. We maintain templates for repeat accuracy.",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
          url,
        }),
      }}
    />
  );
};

export default async function DeliveryTakeoutSigns() {
  const data = await getPageDataCached();
  const pageData = data?.DeliveryTakeoutSignsPageData?.[0];

  const { footerContentData } = await getFooterDataCached();
  const breadcrumbs = buildServiceBreadcrumbs(
    "signs/delivery-takeout-signs",
    footerContentData
  );

  if (pageData) {
    return (
      <>
        <ServiceSchema />
        <FAQSchema />
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

  return (
    <>
      <ServiceSchema />
    </>
  );
}
