import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Products & Services | MSE Print",
  description:
    "Explore MSE Printing’s complete lineup of printing, signage, mailing, and marketing solutions.",
  alternates: {
    canonical: "https://www.mseprinting.com/products-services",
  },
  metadataBase: new URL("https://www.mseprinting.com/products-services"),
  openGraph: {
    title: "Products & Services | MSE Print",
    description:
      "From offset and digital printing to direct mail, labels, packaging, and creative services—MSE Printing delivers full-service support for your brand.",
    url: "https://www.mseprinting.com/products-services",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/products-services-images/additional/products_services_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Products & Services",
      },
    ],
  },
};

const ProductsServices = async () => {
  const data = await getCategoryPagesData("/products-services");
  const pageData = data.ProductsServicesPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default ProductsServices;
