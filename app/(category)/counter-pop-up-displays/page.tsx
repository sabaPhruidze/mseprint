import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Counter & Pop-up Displays | MSE Print",
  description:
    "Create instant impact with portable counter and pop-up displays from MSE Print.",
  alternates: {
    canonical: "https://www.mseprinting.com/counter-pop-up-displays",
  },
  metadataBase: new URL("https://www.mseprinting.com/counter-pop-up-displays"),
  openGraph: {
    title: "Counter & Pop-up Displays | MSE Print",
    description:
      "Custom-designed counter and pop-up displays to make your brand shine at events, trade shows, or in-store promotions.",
    url: "https://www.mseprinting.com/counter-pop-up-displays",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/counter-pop-up-displays.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Counter and Pop-up Displays",
      },
    ],
  },
};

const CounterPopUpDisplays = async () => {
  const data = await getCategoryPagesData("/counter-pop-up-displays");
  const pageData = data.CounterPopUpDisplaysPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default CounterPopUpDisplays;
