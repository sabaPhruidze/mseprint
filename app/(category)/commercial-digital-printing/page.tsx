// import React from "react";
// import { Metadata } from "next";
// import { getCategoryPagesData } from "db/getCategoryPagesData";
// import PageStructure from "components/common/PageStructure";

// export const metadata: Metadata = {
//   title: "Commercial Digital Printing | MSE Print",
//   description:
//     "Professional digital printing services from MSE Print. High-quality, fast, and cost-effective printing solutions for businesses.",
//   alternates: {
//     canonical: "https://www.mseprinting.com/commercial-digital-printing",
//   },
//   metadataBase: new URL(
//     "https://www.mseprinting.com/commercial-digital-printing"
//   ),
//   openGraph: {
//     title: "Commercial Digital Printing | MSE Print",
//     description:
//       "Digital printing revolutionizes the way businesses approach their printing needs, offering unmatched versatility, speed, and customization for small to medium-sized projects.",
//     url: "https://www.mseprinting.com/commercial-digital-printing",
//     siteName: "MSE Printing",
//     type: "website",
//     images: [
//       {
//         url: "/images/home-images/digital_printing.webp",
//         width: 1200,
//         height: 630,
//         alt: "MSE Printing - Commercial Digital Printing",
//       },
//     ],
//   },
// };

// const CommercialDigitalPrinting = async () => {
//   const data = await getCategoryPagesData("/commercial-digital-printing");
//   const pageData = data.CommercialDigitalPrintingPageData?.[0];

//   if (!pageData) {
//     return <div>Data not available.</div>;
//   }
//   return <PageStructure pageData={pageData} />;
// };

// export default CommercialDigitalPrinting;
import React from "react";

const CommercialDigitalPrinting = () => {
  return <div>CommercialDigitalPrinting</div>;
};

export default CommercialDigitalPrinting;
