import React from "react";
import { Metadata } from "next";
import { getCategoryPagesData } from "db/getCategoryPagesData";
import PageStructure from "components/common/PageStructure";

export const metadata: Metadata = {
  title: "Book Printing | MSE Print",
  description:
    "Print high-quality books with MSE Printing—perfect for authors, educators, and businesses.",
  alternates: {
    canonical: "https://www.mseprinting.com/printing-copying/book-printing",
  },
  metadataBase: new URL(
    "https://www.mseprinting.com/printing-copying/book-printing"
  ),
  openGraph: {
    title: "Book Printing | MSE Print",
    description:
      "Custom bound books, manuals, and catalogs printed with care and quality at MSE Printing in Minneapolis.",
    url: "https://www.mseprinting.com/printing-copying/book-printing",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/printing-copying-images/additional/book_printing_right.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Book Printing",
      },
    ],
  },
};

const BookPrinting = async () => {
  const data = await getCategoryPagesData("/printing-copying/book-printing");
  const pageData = data.BookPrintingPageData?.[0];

  if (!pageData) {
    return <div>Data not available.</div>;
  }

  return <PageStructure pageData={pageData} />;
};

export default BookPrinting;
