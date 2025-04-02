import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Presentation & Training Materials | MSE Print",
  description:
    "Deliver your message with clarity and confidence using custom presentation and training materials by MSE Printing.",
  alternates: {
    canonical: "https://www.mseprinting.com/presentation-training-materials",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/presentation-training-materials"
  ),
  openGraph: {
    title: "Presentation & Training Materials | MSE Print",
    description:
      "Create impactful, branded training and presentation materials—manuals, handouts, folders, and more—tailored to your audience.",
    url: "https://www.mseprinting.com/presentation-training-materials",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/common-images/additional/presentation_training_materials_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Presentation & Training Materials",
      },
    ],
  },
};

const PresentationTrainingMaterials = async () => {
  const data = await getCategoryPagesData("/presentation-training-materials");
  const pageData = data.PresentationTrainingMaterialsPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default PresentationTrainingMaterials;
