import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

// ---------- SEO & Social Metadata ----------
export const metadata: Metadata = {
  title: "Premium & Private Labels Minneapolis | Print |  MSE Printing",
  description:
    "Stand out with high-end, customizable premium and private labels from MSE Printing. Distinctive branding and exceptional print quality for Minneapolis & nationwide.",
  keywords: [
    "premium labels Minneapolis",
    "premium label printing Minneapolis MN",
    "private label printing Minneapolis",
    "luxury label printing Minnesota",
    "custom high-end labels Minneapolis",
    "foil stamped labels Minneapolis",
    "embossed label printing Minneapolis",
    "spot UV labels Minnesota",
    "metallic foil labels Twin Cities",
    "soft-touch laminate labels",
    "clear labels printing Minneapolis",
    "white ink label printing",
    "waterproof labels Minneapolis",
    "oil-resistant labels food & beverage",
    "pressure-sensitive labels Minnesota",
    "roll labels Minneapolis",
    "sheet labels Minneapolis",
    "short-run label printing Minneapolis",
    "variable data labels Minneapolis",
    "UPC barcode labels printing",
    "tamper-evident labels Minnesota",
    "security labels printing",
    "wine labels Minneapolis",
    "craft beer can labels Minnesota",
    "spirit bottle labels Minneapolis",
    "cosmetic labels Minneapolis",
    "skincare labels Minnesota",
    "candle labels Minneapolis",
    "food packaging labels Minneapolis",
    "nutrition facts labels printing",
    "FDA compliant labels Minnesota",
    "supplement labels Minneapolis",
    "vitamin labels Minnesota",
    "gourmet product labels Minneapolis",
    "bakery labels Minnesota",
    "coffee bag labels Minneapolis",
    "tea tin labels Minnesota",
    "jar & bottle labels Minneapolis",
    "beverage labels Twin Cities",
    "private brand labels Minneapolis",
    "private label branding Minnesota",
    "premium product branding labels",
    "luxury packaging labels Minneapolis",
    "textured paper labels Minnesota",
    "kraft label printing Minneapolis",
    "holographic labels Minnesota",
    "silver metallic labels Minneapolis",
    "gold foil labels Minneapolis",
    "durable outdoor labels Minnesota",
    "industrial labels Minneapolis",
    "chemical-resistant labels",
    "freezer-grade labels Minnesota",
    "removable labels Minneapolis",
    "permanent adhesive labels",
    "high-tack labels Minnesota",
    "die-cut labels Minneapolis",
    "custom shape labels Minnesota",
    "large format labels Minneapolis",
    "small batch labels Minneapolis",
    "prototype label printing",
    "label design services Minneapolis",
    "brand label printers Minneapolis",
    "Twin Cities premium label printer",
    "Minneapolis private label solutions",
    "Minnesota custom label company",
    "Edina MN label printing",
    "St. Paul premium labels",
    "Bloomington MN label printer",
    "Maple Grove label printing",
    "Plymouth MN label printing",
    "Eagan MN custom labels",
    "Brooklyn Park MN labels",
    "St. Louis Park label printing",
    "nationwide premium label printing",
    "MSE Printing premium labels",
    "MSE Printing private labels",
  ],
  applicationName: "MSE Printing",
  category: "Premium & Private Labels",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/premium-private-labels",
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
    title: "Premium & Private Labels Minneapolis | Print |  MSE Printing",
    description:
      "Custom premium and private labels crafted to reflect your brand’s uniqueness and quality with precision and elegance.",
    url: "https://www.mseprinting.com/premium-private-labels",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/premium_private_labels.webp",
        width: 1200,
        height: 630,
        alt: "Custom premium and private labels by MSE Printing in Minneapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium & Private Labels Minneapolis | Print |  MSE Printing",
    description:
      "Custom, high-end premium and private label printing for luxury brands, products, and retail by MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/common-images/premium_private_labels.webp",
        alt: "Premium & private label printing by MSE Printing, Minneapolis",
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
    "@id": "https://www.mseprinting.com/premium-private-labels#service",
    name: "Premium & Private Labels",
    description:
      "High-end, custom premium and private label printing by MSE Printing. Luxury labels with foil, embossing, and custom finishes for Minneapolis and nationwide brands.",
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
    serviceType: "Premium & Private Labels",
    category: "Luxury Product Labels",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Premium & Private Labels Services",
      itemListElement: [
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/premium-private-labels#premium-labels",
          itemOffered: {
            "@type": "Service",
            name: "Premium Label Printing",
            description:
              "Custom high-end labels with specialty materials, foil, and embossing for luxury brands.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/premium-private-labels#private-labels",
          itemOffered: {
            "@type": "Service",
            name: "Private Label Printing",
            description:
              "Custom private labels for branding, product launches, and exclusive retail items.",
          },
        },
        {
          "@type": "Offer",
          url: "https://www.mseprinting.com/premium-private-labels#customization",
          itemOffered: {
            "@type": "Service",
            name: "Label Customization",
            description:
              "Personalized shapes, sizes, materials, and finishes to match your unique vision.",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      url: "https://www.mseprinting.com/premium-private-labels",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: "Premium & Private Labels",
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
const PremiumPrivateLabels = async () => {
  const data = await getCategoryPagesData("/premium-private-labels");
  const pageData = data.PremiumPrivateLabelsPageData?.[0];
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "premium-private-labels", // must match the DB `path`
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

export default PremiumPrivateLabels;
