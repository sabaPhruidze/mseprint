import React from "react";
import { Metadata, Viewport } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

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
            name: "What types of business forms are available for customization?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We specialize in a comprehensive array of custom business forms in Minneapolis, designed to meet the operational needs of any industry. Our printing services cover everything from multi-part carbonless NCR forms, detailed invoices, and purchase orders to professional work orders, bill of lading forms, and service agreements. Whether you need continuous forms for dot-matrix printers or padded individual forms, our Minneapolis printing solutions ensure your business documentation is clear, professional, and perfectly suited to your workflow.",
            },
          },
          {
            "@type": "Question",
            name: "Can I include specific fields and branding elements on my business forms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, absolutely. Every aspect of our business forms in Minneapolis is fully customizable. We can incorporate your company's logo, specific branding colors, and complete contact information. Our custom printing process allows for unique fields, legal disclaimers, terms and conditions, and specialized layouts. We also offer advanced features like sequential numbering for tracking, perforation for easy tear-offs, and hole punching for organized binder storage, ensuring your forms function exactly as you need them to.",
            },
          },
          {
            "@type": "Question",
            name: "Are carbonless (NCR) forms a good alternative to traditional receipt books?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "NCR (No Carbon Required) business forms are an excellent, modern alternative to messy carbon paper. These carbonless forms create clean, sharp duplicate (2-part), triplicate (3-part), or quadruplicate (4-part) copies with a single pen stroke. For businesses in Minneapolis, from HVAC technicians to legal consultants, NCR forms are essential for providing instant receipts, work order copies, or signed contracts. They streamline record-keeping and enhance professionalism by eliminating smudges and illegible copies.",
            },
          },
          {
            "@type": "Question",
            name: "What paper and format options are available for business forms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our printing services for business forms in Minneapolis offer a wide selection of paper stocks and formats. You can choose from various paper weights and colors to differentiate multi-part forms (e.g., white, canary, pink). Formats include individual cut-sheet forms, edge-glued sets, forms padded with a chipboard backer, and wrap-around booklet forms. Our team can help you select the most durable and cost-effective option for your specific application, whether for office use or on-the-go field service.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to print custom business forms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our standard turnaround time for printing custom business forms in Minneapolis is typically 5-7 business days after proof approval. However, this can vary based on the complexity and quantity of your order. We understand that businesses sometimes have urgent needs, which is why we offer rush printing services. If you have a tight deadline, please let us know, and we will work to expedite your order to ensure you get your forms when you need them.",
            },
          },
          {
            "@type": "Question",
            name: "Is it easy to reorder forms once I’ve placed my first order?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, reordering is incredibly simple and efficient. We securely archive all digital files from your past orders for business forms in Minneapolis. When you need a reprint, simply contact us with your previous order number or company name. We can quickly process an identical reorder or make any necessary updates to fields, contact information, or design elements. This ensures brand consistency and saves you the time and effort of starting from scratch.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer eco-friendly printing options for business forms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We are committed to offering sustainable printing solutions for businesses in Minneapolis. We provide a selection of eco-friendly options for your business forms, including paper stocks with high post-consumer recycled content and printing with environmentally friendly, soy-based inks. Choosing these options allows your company to maintain its commitment to sustainability without compromising on the quality or professionalism of your business documents.",
            },
          },
          {
            "@type": "Question",
            name: "Can I review a digital proof before printing my forms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We believe in getting it right the first time. For every new order of custom business forms in Minneapolis, we provide a complimentary digital proof in PDF format. This allows you to meticulously review every detail—including layout, text, branding, and field placement—before we proceed with the full printing run. Your approval ensures complete satisfaction and guarantees your final forms are accurate and error-free.",
            },
          },
          {
            "@type": "Question",
            name: "What is the minimum order quantity for custom business forms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer flexible minimum order quantities to accommodate businesses of all sizes in Minneapolis. While larger orders provide better per-unit pricing, we can produce smaller runs for startups, small businesses, or for those who need to test a new form design. Our goal is to provide cost-effective printing solutions that align with your budget and inventory needs, without requiring a massive upfront commitment.",
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
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "business-forms", // must match the DB `path`
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

export default BusinessForms;
