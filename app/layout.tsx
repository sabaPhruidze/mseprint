export const dynamic = "force-static";
export const revalidate = 3600;

import "../styles/globals.css";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import { getHeaderData } from "../db/getHeaderData";
import { getFooterData } from "../db/GetFooterData";
import Footer from "../components/Footer/Footer";
import { cache } from "react";

const interBold = localFont({
  src: "../public/fonts/Inter_18pt-Bold.woff2",
  variable: "--font-inter-bold",
});

const interExtraBold = localFont({
  src: "../public/fonts/Inter_18pt-ExtraBold.woff2",
  variable: "--font-inter-extrabold",
});

const interMedium = localFont({
  src: "../public/fonts/Inter_18pt-Medium.woff2",
  variable: "--font-inter-medium",
});

const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mseprinting.com/#business",
    name: "MSE Printing",
    alternateName: ["MSE Print", "MSE Printing Services"],
    description:
      "Professional printing services in Minneapolis specializing in custom booth graphics, trade show banners, business signs, and large-format printing with fast turnaround and nationwide shipping.",
    url: "https://www.mseprinting.com",
    telephone: "763-542-8812",
    email: "info@mseprinting.com",
    foundingDate: "2002",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3839 N Washington Ave Ste. 101",
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
        closes: "18:00",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 45.023,
        longitude: -93.279,
      },
      geoRadius: "50000",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Minneapolis",
      },
      {
        "@type": "City",
        name: "St. Paul",
      },
      {
        "@type": "State",
        name: "Minnesota",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Signs",
            description:
              "Custom indoor and outdoor signage for businesses, events, and promotions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Printing & Copying",
            description:
              "High-quality digital and offset printing, copying, and duplicating services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Direct Mail & Mailing Services",
            description:
              "End-to-end direct mail campaigns including printing, addressing, and postal delivery.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Ordering Portals",
            description:
              "Custom web-to-print portals for easy ordering of branded materials.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Graphic Design",
            description:
              "Professional design services for print materials, logos, and marketing assets.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Services",
            description:
              "Targeted marketing solutions including strategy, design, and print execution.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tradeshows & Events",
            description:
              "Event materials including booths, banners, backdrops, and branded giveaways.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Labels & Packaging",
            description:
              "Custom product labels and printed packaging for retail and business use.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fulfillment Services",
            description:
              "Storage, assembly, and shipping of printed materials and kits for your business.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industry Specific",
            description:
              "Printing and marketing services tailored for industries like healthcare, education, legal, and more.",
          },
        },
      ],
    },
    image: [
      "https://www.mseprinting.com/images/home-images/offset_printing.webp",
    ],
    logo: "https://www.mseprinting.com/favicon.ico",
    sameAs: [
      "https://www.facebook.com/MSEGRAPHICS",
      "https://www.linkedin.com/company/highlight-printing/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

const getHeaderDataCached = cache(getHeaderData);
const getFooterDataCached = cache(getFooterData);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerData, footerData] = await Promise.all([
    getHeaderDataCached(),
    getFooterDataCached(),
  ]);

  return (
    <html lang="en">
      <body
        className={` ${interBold.variable}
          ${interExtraBold.variable}
          ${interMedium.variable} 
          min-h-screen flex flex-col font-inter-medium`}
      >
        <LocalBusinessSchema />
        <Header {...headerData} servicesData={footerData.footerContentData} />
        <main className="flex-grow">{children}</main>
        <Footer {...footerData} />
      </body>
    </html>
  );
}
