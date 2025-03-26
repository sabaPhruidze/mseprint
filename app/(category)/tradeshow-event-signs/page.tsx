import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Tradeshow & Event Signs | MSE Print",
  description:
    "Stand out at tradeshows and events with eye-catching signage by MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/tradeshow-event-signs",
  },
  metadataBase: new URL("https://www.mseprinting.com/tradeshow-event-signs"),
  openGraph: {
    title: "Tradeshow & Event Signs | MSE Print",
    description:
      "Custom tradeshow and event signs designed to attract attention and enhance your brand visibility.",
    url: "https://www.mseprinting.com/tradeshow-event-signs",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/tradeshow-event-signs.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Tradeshow & Event Signs",
      },
    ],
  },
};

const TradeshowEventSigns = async () => {
  const data = await getCategoryPagesData("/tradeshow-event-signs");
  const pageData = data.TradeshowEventSignsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default TradeshowEventSigns;
