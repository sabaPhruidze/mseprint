import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData"; // ← ADD
import { buildServiceBreadcrumbs } from "lib/breadcrumbs"; // ← ADD

export const metadata: Metadata = {
  title: "Interior Office & Lobby Décor in Minneapolis | MSE Printing",
  description:
    "Custom office & lobby décor in Minneapolis, MN. MSE Printing creates branded wall graphics, signage, and décor that enhance your workspace and impress clients.",
  keywords: [
    "interior office décor Minneapolis",
    "custom lobby signs Minneapolis",
    "office décor Minnesota",
    "branded interior graphics Minneapolis",
    "office lobby signage",
    "workspace branding Minneapolis",
    "custom wall graphics Minnesota",
    "corporate interior signage Minneapolis",
    "MSE Printing office décor",
  ],
  applicationName: "MSE Printing",
  category: "Interior Décor Services",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/signs/interior-office-lobby-decor",
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
    title: "Interior Office & Lobby Décor in Minneapolis | MSE Printing",
    description:
      "Enhance your workplace with custom wall graphics, branded signage, and office décor by MSE Printing in Minneapolis, MN.",
    url: "https://www.mseprinting.com/signs/interior-office-lobby-decor",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/interior_office_lobby_decor.webp",
        width: 1200,
        height: 630,
        alt: "Custom interior office and lobby décor in Minneapolis by MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Office & Lobby Décor in Minneapolis | MSE Printing",
    description:
      "Branded office décor, wall graphics, and signage from MSE Printing in Minneapolis. Impress clients & employees with professional interior décor.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/signs-images/interior_office_lobby_decor.webp",
        alt: "Office and lobby décor in Minneapolis by MSE Printing",
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

// ✅ Theme color & viewport
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

// ✅ Schema.org Structured Data (Service + LocalBusiness + FAQ + ImageObject)
const ServiceSchema = () => {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id":
        "https://www.mseprinting.com/signs/interior-office-lobby-decor#service",
      name: "Interior Office & Lobby Décor in Minneapolis",
      description:
        "Custom office and lobby décor services including wall graphics, branded signage, and interior design for workplaces. Enhance aesthetics and brand impact with MSE Printing in Minneapolis, MN.",
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
      serviceType: "Interior Décor & Signage Services",
      category: "Commercial Interior Décor",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Interior Décor Services",
        itemListElement: [
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/interior-office-lobby-decor#wall-graphics",
            itemOffered: {
              "@type": "Service",
              name: "Custom Wall Graphics Minneapolis",
              description:
                "Branded and decorative wall graphics for offices and lobbies in Minneapolis, MN.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/interior-office-lobby-decor#lobby-signage",
            itemOffered: {
              "@type": "Service",
              name: "Lobby Signage Minneapolis",
              description:
                "Professional, high-impact signage for business lobbies in Minneapolis.",
            },
          },
          {
            "@type": "Offer",
            url: "https://www.mseprinting.com/signs/interior-office-lobby-decor#branding",
            itemOffered: {
              "@type": "Service",
              name: "Workspace Branding Minneapolis",
              description:
                "Complete branding solutions for office interiors across Minnesota.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        url: "https://www.mseprinting.com/signs/interior-office-lobby-decor",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Interior Office & Lobby Décor Minneapolis",
        },
      },
    },
    {
      "@context": "https://schema.org",
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
      openingHours: "Mo-Fr 08:00-17:00",
      priceRange: "$$",
      sameAs: [
        "https://www.facebook.com/mseprinting",
        "https://www.linkedin.com/company/mseprinting",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id":
        "https://www.mseprinting.com/signs/interior-office-lobby-decor#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of office signage do you offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide a wide range of office décor solutions, including wall graphics, lobby signs, window decals, directional signage, and custom branding elements. Whether you’re looking to improve navigation, add decorative elements, or showcase your company mission, we offer tailored signage to meet your needs. Our signs are available in multiple materials, finishes, and styles to match your office aesthetics perfectly.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our experienced design team works closely with you to create visually appealing office graphics that align with your brand identity. Whether you have existing artwork or need a completely new design, we ensure that every element—from font choices to color schemes—matches your company’s vision. We also offer proofs before printing, so you can see how your signage will look before installation.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer installation services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Our professional installation team ensures that your office signage and décor are applied seamlessly, without air bubbles, misalignment, or damage to your walls. We handle everything from simple vinyl applications to complex 3D logo installations. Our team works efficiently to minimize disruptions to your office operations while ensuring a clean and professional final result.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the printing process take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most office décor printing projects are completed within a few business days, depending on complexity. For standard vinyl wall decals and window graphics, we offer fast turnaround times with expedited options available. Larger projects, such as full office rebrands, may take longer, but we work closely with you to meet your deadlines. If you need something urgent, let us know—we’re happy to accommodate rush orders whenever possible.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide custom lobby signs in Minneapolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we specialize in custom lobby signs for businesses across Minneapolis. From dimensional lettering to illuminated signs, we create pieces that leave a lasting impression on your clients and visitors. All signs are designed to reflect your company’s brand and installed with precision at your office or headquarters.",
          },
        },
        {
          "@type": "Question",
          name: "Can you produce eco-friendly signage materials?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a variety of eco-friendly signage solutions, including recyclable substrates, water-based inks, and sustainable vinyl options. If your business in Minneapolis or anywhere in the USA is looking to highlight green initiatives, our team can recommend materials that align with your sustainability goals while maintaining durability and visual appeal.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer nationwide shipping for office décor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! While we’re based at 3839 Washington Ave N Ste 103, Minneapolis, MN 55412, we serve clients across the USA. We carefully package and ship your custom signage and graphics so they arrive ready for installation at your office location nationwide.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      url: "https://www.mseprinting.com/images/signs-images/interior_office_lobby_decor.webp",
      width: 1200,
      height: 630,
      caption: "Custom interior office décor in Minneapolis by MSE Printing",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const InteriorOfficeLobbyDecor = async () => {
  const data = await getCategoryPagesData("/signs/interior-office-lobby-decor");
  const pageData = data.InteriorOfficeLobbyDecorPageData?.[0];

  // ← ADD: fetch sitemap hierarchy and build crumbs
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "signs/interior-office-lobby-decor", // must match the DB `path`
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

export default InteriorOfficeLobbyDecor;
