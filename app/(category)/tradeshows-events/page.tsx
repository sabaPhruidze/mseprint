import React from "react";
import { Metadata } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import CardsPagesStructure from "components/common/CardsPagesStructure";

export const metadata: Metadata = {
  title: "Tradeshows & Events | MSE Print",
  description:
    "Captivate your audience with impactful tradeshow and event printing solutions from MSE Printing—on time, on brand, and stress-free.",
  alternates: {
    canonical: "https://www.mseprinting.com/tradeshows-events",
  },
  metadataBase: new URL("https://www.mseprinting.com/tradeshows-events"),
  openGraph: {
    title: "Tradeshows & Events | MSE Print",
    description:
      "Elevate your event presence with booths, signage, direct mail, and logistics support from MSE Printing.",
    url: "https://www.mseprinting.com/tradeshows-events",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/tradeshows-events-images/table_counter_kiosk_displays.webp",
        width: 500,
        height: 500,
        alt: "Table Counter Kiosk Displays",
      },
    ],
  },
};

const TradeshowsEvents = async () => {
  const data = await getSpecialPagesData("/tradeshows-events");
  const pageData = data.TradeshowsEventsPageCardPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <CardsPagesStructure pageData={pageData} />;
};

export default TradeshowsEvents;
