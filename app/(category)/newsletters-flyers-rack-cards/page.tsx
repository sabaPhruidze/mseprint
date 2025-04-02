import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Newsletters, Flyers & Rack Cards | MSE Print",
  description:
    "Engage your audience with high-quality printed newsletters, flyers, and rack cards from MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/newsletters-flyers-rack-cards",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/newsletters-flyers-rack-cards"
  ),
  openGraph: {
    title: "Newsletters, Flyers & Rack Cards | MSE Print",
    description:
      "Print eye-catching flyers, informative newsletters, and handy rack cards that capture attention and promote your message effectively.",
    url: "https://www.mseprinting.com/newsletters-flyers-rack-cards",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/common-images/additional/newsletters_flyers_rack_cards_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Newsletters, Flyers & Rack Cards",
      },
    ],
  },
};

const NewslettersFlyersRackCards = async () => {
  const data = await getCategoryPagesData("/newsletters-flyers-rack-cards");
  const pageData = data.NewslettersFlyersRackCardsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default NewslettersFlyersRackCards;
