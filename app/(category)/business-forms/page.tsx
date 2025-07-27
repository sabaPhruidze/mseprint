import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Business Forms Minneapolis | Custom Printing Services | MSE Print",
  description:
    "Professional business forms printing in Minneapolis, MN. Custom NCR forms, invoices, receipts, contracts & carbonless forms. Fast turnaround, quality guaranteed. Serving Twin Cities area businesses.",
  keywords: [
    "business forms Minneapolis",
    "business forms Minneapolis MN",
    "custom business forms Minneapolis",
    "NCR forms printing Minneapolis",
    "invoice printing Minneapolis",
    "receipt booklets Minneapolis",
    "contract forms Minneapolis",
    "carbonless form printing Minneapolis",
    "business form printer Minneapolis Minnesota",
    "Minneapolis printing services business forms",
    "Twin Cities business forms",
    "Minneapolis commercial printing forms",
    "professional business documentation Minneapolis",
    "custom forms Minneapolis MN",
    "business forms near me Minneapolis",
  ],
  applicationName: "MSE Printing Minneapolis",
  category: "Business Printing Minneapolis",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/business-forms",
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
    title: "Business Forms Minneapolis | Custom Printing Services | MSE Print",
    description:
      "Professional business forms printing in Minneapolis, MN. Custom NCR forms, invoices, receipts & contracts. Serving Twin Cities businesses with quality printing solutions.",
    url: "https://www.mseprinting.com/business-forms",
    siteName: "MSE Printing Minneapolis",
    locale: "en_US",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/card_business_forms.webp",
        width: 1200,
        height: 630,
        alt: "Professional business forms printing services in Minneapolis, MN - MSE Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Forms Minneapolis | Custom Printing | MSE Print",
    description:
      "Custom business forms printing in Minneapolis. NCR forms, invoices, contracts & more. Professional printing for Twin Cities businesses.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/home-images/card_business_forms.webp",
        alt: "Custom business forms printing in Minneapolis - MSE Printing",
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
    "business:hours:day": "monday tuesday wednesday thursday friday",
    "business:hours:start": "08:00",
    "business:hours:end": "17:00",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [
    { name: "MSE Printing Minneapolis", url: "https://www.mseprinting.com" },
  ],
  creator: "MSE Printing Minneapolis",
  publisher: "MSE Printing Minneapolis",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

const ServiceSchema = () => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.mseprinting.com/#business",
        name: "MSE Printing",
        legalName: "MSE Printing Company",
        url: "https://www.mseprinting.com",
        telephone: "763-542-8812",
        email: "info@mseprinting.com",
        priceRange: "$",
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
          latitude: 45.023,
          longitude: -93.279,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        image:
          "https://www.mseprinting.com/images/home-images/card_business_forms.webp",
      },
      {
        "@type": "Service",
        "@id": "https://www.mseprinting.com/business-forms#service",
        name: "Business Forms Printing Minneapolis",
        alternateName: [
          "Custom Business Forms Minneapolis",
          "NCR Forms Minneapolis",
          "Business Form Printing Minneapolis MN",
        ],
        description:
          "Professional business forms printing services in Minneapolis, MN. Custom NCR forms, carbonless forms, invoices, receipts, contracts and business documentation. Serving Minneapolis and Twin Cities area businesses with fast turnaround and quality guarantee.",
        provider: { "@id": "https://www.mseprinting.com/#business" },
        areaServed: [
          {
            "@type": "City",
            name: "Minneapolis",
            "@id": "https://en.wikipedia.org/wiki/Minneapolis",
          },
          {
            "@type": "City",
            name: "Saint Paul",
            "@id": "https://en.wikipedia.org/wiki/Saint_Paul,_Minnesota",
          },
          {
            "@type": "State",
            name: "Minnesota",
            "@id": "https://en.wikipedia.org/wiki/Minnesota",
          },
          {
            "@type": "Country",
            name: "United States",
            "@id": "https://en.wikipedia.org/wiki/United_States",
          },
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 45.023,
            longitude: -93.279,
          },
          geoRadius: 50000,
        },
        serviceType: [
          "Business Form Printing",
          "NCR Forms Printing",
          "Carbonless Forms Printing",
          "Custom Business Documentation",
        ],
        category: [
          "Business Forms Minneapolis",
          "Commercial Printing Minneapolis",
          "Custom Forms Printing",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Business Forms Printing Services Minneapolis",
          itemListElement: [
            {
              "@type": "Offer",
              url: "https://www.mseprinting.com/business-forms#ncr-forms",
              name: "NCR Forms Minneapolis",
              description:
                "Multi-part carbonless NCR forms for invoices, receipts, and duplicate records. Professional printing in Minneapolis.",
              itemOffered: {
                "@type": "Service",
                name: "Carbonless NCR Forms Printing Minneapolis",
                description:
                  "Professional NCR forms printing in Minneapolis - perfect for invoices, receipts, and business documentation requiring duplicate copies.",
              },
              areaServed: { "@type": "City", name: "Minneapolis" },
            },
            {
              "@type": "Offer",
              url: "https://www.mseprinting.com/business-forms#invoices",
              name: "Custom Invoice Forms Minneapolis",
              description:
                "Professional invoice forms and booklets printed in Minneapolis for local businesses.",
              itemOffered: {
                "@type": "Service",
                name: "Invoice Forms Printing Minneapolis",
                description:
                  "Custom invoice forms and booklets designed and printed for Minneapolis area businesses.",
              },
              areaServed: { "@type": "City", name: "Minneapolis" },
            },
            {
              "@type": "Offer",
              url: "https://www.mseprinting.com/business-forms#contracts",
              name: "Contract Forms Minneapolis",
              description:
                "Professional contract and agreement forms printed for Minneapolis businesses and organizations.",
              itemOffered: {
                "@type": "Service",
                name: "Contract & Agreement Forms Minneapolis",
                description:
                  "Custom printed contracts, agreements, and legal forms for Minneapolis businesses and organizations.",
              },
              areaServed: { "@type": "City", name: "Minneapolis" },
            },
          ],
        },
        offers: {
          "@type": "AggregateOffer",
          url: "https://www.mseprinting.com/business-forms",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          lowPrice: 25,
          highPrice: 500,
          offerCount: 50,
          areaServed: { "@type": "City", name: "Minneapolis" },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.mseprinting.com/business-forms",
        },
        potentialAction: {
          "@type": "ContactAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "tel:763-542-8812",
          },
          name: "Call for Business Forms Quote",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.mseprinting.com/business-forms#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of business forms can you print in Minneapolis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We print all types of business forms in Minneapolis including NCR carbonless forms, invoices, receipts, contracts, purchase orders, work orders, and custom business documentation for Twin Cities area businesses.",
            },
          },
          {
            "@type": "Question",
            name: "How long does business forms printing take in Minneapolis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most business forms orders in Minneapolis are completed within 2-5 business days. Rush printing services are available for urgent business forms needs in the Twin Cities area.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer delivery for business forms in Minneapolis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer delivery throughout Minneapolis and the Twin Cities area for business forms orders. Contact us for delivery options and scheduling.",
            },
          },
        ],
      },
    ],
  } as const;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
};

const BusinessForms = async () => {
  const data = await getCategoryPagesData("/business-forms");
  const pageData = data.BusinessFormsPageData?.[0];

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

export default BusinessForms;
