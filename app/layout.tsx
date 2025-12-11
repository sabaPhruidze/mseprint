// app/layout.tsx
import "../styles/globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SkipLink from "../components/common/skipLink";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { getHeaderData } from "../db/getHeaderData";
import { getFooterData } from "../db/GetFooterData";

const interBold = localFont({
  src: "../public/fonts/Inter_18pt-Bold.woff2",
  variable: "--font-inter-bold",
  display: "swap",
  preload: false,
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
  preload: true,
});

function SiteGraphSchema() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": "https://www.mseprinting.com/#website",
      url: "https://www.mseprinting.com",
      name: "MSE Printing",
      inLanguage: "en-US",
    },
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://www.mseprinting.com/#org",
      additionalType: "https://www.productontology.org/id/Printing",
      name: "MSE Printing",
      legalName: "MSE Printing LLC",
      alternateName: ["MSE Print", "MSE Printing Services", "MSEPrinting"],
      url: "https://www.mseprinting.com",
      description:
        "Professional printing services in Minneapolis specializing in custom booth graphics, trade show banners, business signs, and large-format printing.",
      telephone: "+1-763-542-8812",
      email: "info@mseprinting.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3839 Washington Ave N Ste. 103",
        addressLocality: "Minneapolis",
        addressRegion: "MN",
        postalCode: "55412",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 45.023, longitude: -93.279 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      sameAs: [
        "https://www.facebook.com/MSEGRAPHICS",
        "https://www.linkedin.com/company/highlight-printing/posts/?feedView=all",
        "https://www.google.com/maps/place/MSE+Graphics+LLC/@45.0252205,-93.2838849,17z/",
      ],
      logo: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/images/header-images/logo_64.webp",
        width: 486,
        height: 122,
      },
      image: [
        "https://www.mseprinting.com/images/home-images/offset_printing.webp",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-763-542-8812",
          contactType: "customer service",
          availableLanguage: ["en"],
          areaServed: "US",
        },
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
              provider: { "@id": "https://www.mseprinting.com/#org" },
            },
          },
          {
            "@type": "Offer",
            name: "Printing & Copying",
            url: "https://www.mseprinting.com/printing-copying",
            category: "Printing Services",
            itemOffered: {
              "@type": "Service",
              name: "Printing & Copying",
              serviceType: "Commercial Printing",
              provider: { "@id": "https://www.mseprinting.com/#org" },
            },
          },
          {
            "@type": "Offer",
            name: "Direct Mail & Mailing Services",
            url: "https://www.mseprinting.com/direct-mail",
            category: "Marketing Services",
            itemOffered: {
              "@type": "Service",
              name: "Direct Mail & Mailing Services",
              serviceType: "Direct Mail Marketing",
              provider: { "@id": "https://www.mseprinting.com/#org" },
            },
          },
          {
            "@type": "Offer",
            name: "Online Ordering Portals",
            url: "https://www.mseprinting.com/online-ordering-portals",
            category: "Digital Services",
            itemOffered: {
              "@type": "Service",
              name: "Online Ordering Portals",
              serviceType: "Web-to-Print Solutions",
              provider: { "@id": "https://www.mseprinting.com/#org" },
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
              provider: { "@id": "https://www.mseprinting.com/#org" },
            },
          },
          {
            "@type": "Offer",
            name: "Tradeshows & Events",
            url: "https://www.mseprinting.com/tradeshows-events",
            category: "Event Services",
            itemOffered: {
              "@type": "Service",
              name: "Tradeshows & Events",
              serviceType: "Trade Show Graphics",
              provider: { "@id": "https://www.mseprinting.com/#org" },
            },
          },
        ],
      },
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

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body
        className={`${interBold.variable} ${interExtraBold.variable} ${interMedium.variable} min-h-screen flex flex-col font-inter-medium`}
      >
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { page_path: window.location.pathname });
  `}
            </Script>
          </>
        ) : null}
        <SiteGraphSchema />
        <SkipLink />
        <Header {...headerData} servicesData={footerData.footerContentData} />
        <div className="flex-grow" id="main-content">
          {children}
        </div>
        <Footer {...footerData} />
        <SpeedInsights />
      </body>
    </html>
  );
}
