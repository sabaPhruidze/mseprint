import React from "react";
import Link from "next/link";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import type {
  termsConditionsTypes,
  termsSection,
} from "../../../types/commonTypes";

/* ---------- SEO metadata ---------- */
export const metadata = {
  title: "Terms & Conditions | MSE Printing",
  description:
    "Read the terms and conditions that govern your use of the MSE Printing website, including limitations of liability, copyright, and dispute resolution.",
  alternates: { canonical: "https://www.mseprinting.com/terms-conditions" },
  openGraph: {
    title: "Terms & Conditions | MSE Printing",
    description:
      "Review the legal terms that apply to visitors of the MSE Printing website, our franchise relationships, and your privacy rights.",
    url: "https://www.mseprinting.com/terms-conditions",
    siteName: "MSE Printing",
    type: "article",
  },
};

/* ---------- helper to inject links ---------- */
function paragraphToNode(text: string, key: React.Key) {
  if (text.includes("MSE Printing website")) {
    return (
      <p key={key} className="mb-4">
        Welcome to the{" "}
        <Link href="/" className="font-semibold text-blue-600">
          MSE Printing website
        </Link>
        , accessible at <strong>www.mseprinting.com</strong> and the related
        pages of our MSE Printing locations. In these terms and conditions,
        “you,” “your,” or “user” refers to the person using the site.
      </p>
    );
  }
  if (text.includes("Privacy Policy")) {
    return (
      <p key={key} className="mb-4">
        Please see our{" "}
        <Link href="/privacy-policy" className="font-semibold text-blue-600">
          privacy policy
        </Link>{" "}
        for information on how we collect, use, and protect your personal
        information.
      </p>
    );
  }
  return (
    <p key={key} className="mb-4">
      {text}
    </p>
  );
}

/* ---------- page component ---------- */
export default async function TermsConditions() {
  const { termsConditionsData = [] } =
    await getSpecialPagesData("/terms-conditions");
  const row = termsConditionsData[0] as termsConditionsTypes | undefined;

  if (!row) {
    return (
      <main className="max-w-xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p>Content is not yet available.</p>
      </main>
    );
  }

  const { title, intro, sections } = row;

  return (
    <main className="mx-auto max-w-[800px] px-8 text-center lg:text-left">
      <h1 className="text-4xl font-bold my-10">{title}</h1>

      {/* intro */}
      {intro.map((t, i) => paragraphToNode(t, `intro-${i}`))}

      {/* sections */}
      {sections.map(({ id, heading, paragraphs }: termsSection) => (
        <section key={`sec-${id}`} className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            {id}. {heading}
          </h2>
          {paragraphs.map((t, i) => paragraphToNode(t, `p-${id}-${i}`))}
        </section>
      ))}

      <p className="my-12">
        By using this site, you acknowledge that you have read, understood, and
        agree to be bound by these terms and conditions.
      </p>
    </main>
  );
}
