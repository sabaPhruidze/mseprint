import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Event Literature & Signs | MSE Print",
  description:
    "Make a bold impression at your next event with custom signage and printed materials by MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/event-literature-signs",
  },
  metadataBase: new URL("https://www.mseprinting.com/event-literature-signs"),
  openGraph: {
    title: "Event Literature & Signs | MSE Print",
    description:
      "Trade show signs, brochures, banners, and more—professionally printed and ready to represent your brand at any event.",
    url: "https://www.mseprinting.com/event-literature-signs",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/common-images/additional/event_literature_signs_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Event Literature & Signs",
      },
    ],
  },
};

const EventLiteratureSigns = async () => {
  const data = await getCategoryPagesData("/event-literature-signs");
  const pageData = data.EventLiteratureSignsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default EventLiteratureSigns;
