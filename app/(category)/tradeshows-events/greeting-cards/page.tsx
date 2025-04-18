import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Greeting Cards | MSE Print",
  description:
    "Thoughtful, custom greeting cards that add a personal touch to every occasion.",
  alternates: {
    canonical: "https://www.mseprinting.com/tradeshows-events/greeting-cards",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/tradeshows-events/greeting-cards"
  ),
  openGraph: {
    title: "Greeting Cards | MSE Print",
    description:
      "Celebrate, appreciate, and connect with beautiful greeting cards designed and printed to make a lasting impression.",
    url: "https://www.mseprinting.com/tradeshows-events/greeting-cards",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/tradeshows-events-images/additional/greeting_cards_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Greeting Cards",
      },
    ],
  },
};

const GreetingCards = async () => {
  const data = await getCategoryPagesData("/tradeshows-events/greeting-cards");
  const pageData = data.GreetingCardsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default GreetingCards;
