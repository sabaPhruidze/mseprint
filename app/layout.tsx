import "../styles/globals.css";
import localFont from "next/font/local";
import Script from "next/script";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getHeaderData } from "../db/getHeaderData";
import { getFooterData } from "../db/GetFooterData";

/* ────────────  Local fonts  ──────────── */
const interBold = localFont({
  src: "../public/fonts/Inter_18pt-Bold.woff2",
  variable: "--font-inter-bold",
  display: "swap",
  preload: true,
});

const interExtraBold = localFont({
  src: "../public/fonts/Inter_18pt-ExtraBold.woff2",
  variable: "--font-inter-extrabold",
  display: "swap",
  preload: false,
});

const interMedium = localFont({
  src: "../public/fonts/Inter_18pt-Medium.woff2",
  variable: "--font-inter-medium",
  display: "swap",
  preload: false,
});

/* ────────────  LocalBusiness JSON-LD  ──────────── */
/* app/layout.tsx */
function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.mseprinting.com/#business",
    additionalType: "https://www.productontology.org/id/Printing",
    name: "MSE Printing",
    legalName: "MSE Printing LLC",
    alternateName: [
      "MSE Print",
      "MSE Printing Services",
      "MSE Printing",
      "MSEPrinting",
    ],
    url: "https://www.mseprinting.com",
    description:
      "Professional printing services in Minneapolis specializing in custom booth graphics, trade show banners, business signs, and large‑format printing with fast turnaround and nationwide shipping.",
    telephone: "+1-763-542-8812",
    email: "info@mseprinting.com",
    foundingDate: "2002",
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
    hasMap:
      "https://www.google.com/maps/place/MSE+Graphics+LLC/@45.0252205,-93.2838849,17z/data=!3m1!4b1!4m6!3m5!1s0x52b334387bfcac35:0x69d1a3a0b8d6daf8!8m2!3d45.0252205!4d-93.2838849!16s%2Fg%2F1tf5pwpz?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: ["Cash", "Credit Card", "Check", "PayPal"],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 45.023,
        longitude: -93.279,
      },
      geoRadius: 50000,
    },
    areaServed: [
      { "@type": "City", name: "Minneapolis" },
      { "@type": "City", name: "St. Paul" },
      { "@type": "State", name: "Minnesota" },
      { "@type": "Country", name: "United States" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Professional Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Custom Business Signs",
          url: "https://www.mseprinting.com/signs",
          category: "Signs",
          itemOffered: {
            "@type": "Service",
            name: "Signs",
            serviceType: "Custom Signage",
            description:
              "Custom indoor and outdoor signage for businesses, events, and promotions including vinyl banners, yard signs, and storefront displays.",
            provider: { "@id": "https://www.mseprinting.com/#business" },
          },
          areaServed: { "@id": "https://www.mseprinting.com/#serviceArea" },
        },
        {
          "@type": "Offer",
          name: "Digital & Offset Printing",
          url: "https://www.mseprinting.com/printing-copying",
          category: "Printing Services",
          itemOffered: {
            "@type": "Service",
            name: "Printing & Copying",
            serviceType: "Commercial Printing",
            description:
              "High‑quality digital and offset printing, copying, and duplicating services for business cards, brochures, flyers, and marketing materials.",
            provider: { "@id": "https://www.mseprinting.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "Direct Mail Campaigns",
          url: "https://www.mseprinting.com/direct-mail",
          category: "Marketing Services",
          itemOffered: {
            "@type": "Service",
            name: "Direct Mail & Mailing Services",
            serviceType: "Direct Mail Marketing",
            description:
              "End‑to‑end direct mail campaigns including printing, addressing, and postal delivery with USPS bulk mail discounts.",
            provider: { "@id": "https://www.mseprinting.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "Web‑to‑Print Portals",
          url: "https://www.mseprinting.com/online-ordering-portals",
          category: "Digital Services",
          itemOffered: {
            "@type": "Service",
            name: "Online Ordering Portals",
            serviceType: "Web‑to‑Print Solutions",
            description:
              "Custom web‑to‑print portals for easy ordering of branded materials with real‑time pricing and proofing.",
            provider: { "@id": "https://www.mseprinting.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "Graphic Design",
          url: "https://www.mseprinting.com/graphic-design",
          category: "Design Services",
          itemOffered: {
            "@type": "Service",
            name: "Graphic Design",
            serviceType: "Commercial Design",
            description:
              "Professional design services for print materials, logos, branding, and marketing assets.",
            provider: { "@id": "https://www.mseprinting.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "Trade Show Materials",
          url: "https://www.mseprinting.com/tradeshows-events",
          category: "Event Services",
          itemOffered: {
            "@type": "Service",
            name: "Tradeshows & Events",
            serviceType: "Trade Show Graphics",
            description:
              "Complete trade show materials including booth graphics, retractable banners, table throws, and branded promotional items.",
            provider: { "@id": "https://www.mseprinting.com/#business" },
          },
        },
      ],
    },

    image: [
      "https://www.mseprinting.com/images/home-images/offset_printing.webp",
    ],
    logo: {
      "@type": "ImageObject",
      url: "https://www.mseprinting.com/favicon.ico",
      width: 32,
      height: 32,
    },

    sameAs: [
      "https://www.facebook.com/MSEGRAPHICS",
      "https://www.linkedin.com/company/highlight-printing/posts/?feedView=all",
      "https://www.google.com/maps/place/MSE+Graphics+LLC/@45.0252205,-93.2838849,17z/data=!3m1!4b1!4m6!3m5!1s0x52b334387bfcac35:0x69d1a3a0b8d6daf8!8m2!3d45.0252205!4d-93.2838849!16s%2Fg%2F1tf5pwpz?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
    ],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-763-542-8812",
        contactType: "Customer Service",
        availableLanguage: ["en"],
        areaServed: "US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerData, footerData] = await Promise.all([
    getHeaderData(),
    getFooterData(),
  ]);

  return (
    <html lang="en">
      <body
        className={`${interBold.variable} ${interExtraBold.variable} ${interMedium.variable}
        min-h-screen flex flex-col font-inter-medium`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname
            });
          `}
        </Script>

        <LocalBusinessSchema />

        <Header {...headerData} servicesData={footerData.footerContentData} />
        <main className="flex-grow">{children}</main>
        <Footer {...footerData} />
      </body>
    </html>
  );
}
