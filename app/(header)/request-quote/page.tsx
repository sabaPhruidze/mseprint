import type { Metadata } from "next";
import React from "react";
import RequestQuoteForm from "components/RQSF/RQ/RequestQuoteForm";

// 1) SEO config with metadata
export const metadata: Metadata = {
  title: "Request a Quote | MSE Printing",
  description:
    "Submit a quote request for custom printing and marketing services with MSE Printing. Our team will provide a tailored solution for your business needs.",
  alternates: {
    canonical: "https://www.mseprinting.com/request-quote",
  },
};

// 2) Simple page wrapper
export default function RequestQuotePage() {
  return (
    <main className="bg-gray-50 screen-size-6:p-10 p-0">
      <RequestQuoteForm />
    </main>
  );
}
