// app/about-us/page.tsx   (must be .tsx)
import React, { ElementType } from "react";
import { Metadata } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import { AboutUsSection } from "types/commonTypes"; // ← your model
import ContactUs from "components/common/ContactUs";

export const metadata: Metadata = {
  title: "About Us | MSE Printing",
  description: "Minneapolis’ trusted printing partner since 1985…",
  alternates: { canonical: "/about-us" },
  openGraph: {
    url: "https://mseprinting.com/about-us",
    title: "About Us | MSE Printing",
    description: "Minneapolis’ trusted printing partner since 1985…",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mseprinting.com/images/blog/3.webp",
        width: 1200,
        height: 630,
        alt: "Inside MSE Printing’s production floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MSEPrinting",
    title: "About Us | MSE Printing",
    description: "Minneapolis’ trusted printing partner since 1985…",
    images: ["https://mseprinting.com/images/blog/3.webp"],
  },
};

export default async function AboutUsPage() {
  const { aboutUsData: raw } = await getSpecialPagesData("/about-us");

  const aboutUsData: AboutUsSection[] = Array.isArray(raw)
    ? (raw as AboutUsSection[][]).flat() // ← one .flat() does the trick
    : [];

  const renderSection = (section: AboutUsSection) => {
    const HeadingTag = `h${section.heading_level + 1}` as ElementType;

    switch (section.type) {
      case "paragraph":
        return (
          <section key={section.id} className="space-y-4">
            <HeadingTag className="text-2xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </HeadingTag>
            <p className="text-lg leading-relaxed dark:text-gray-300">
              {section.content.text}
            </p>
          </section>
        );

      case "list":
        return (
          <section key={section.id} className="space-y-4">
            <HeadingTag className="text-2xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </HeadingTag>
            <ul className="list-disc space-y-2 pl-5 text-lg leading-relaxed dark:text-white">
              {section.content.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        );

      case "subsections":
        return (
          <section key={section.id} className="space-y-12">
            <HeadingTag className="text-2xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </HeadingTag>
            {section.content.items.map(({ title, text }) => (
              <div key={title} className="space-y-2">
                <h3 className="text-2xl font-semibold leading-relaxed dark:text-white">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed dark:text-white">
                  {text}
                </p>
              </div>
            ))}
          </section>
        );
    }
  };

  /* ── 3. JSX output ─────────────────────────────────────────────── */
  return (
    <div>
      <main className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-200">
          About MSE Printing
        </h1>
        {aboutUsData.map(renderSection)}
      </main>
      <ContactUs />
    </div>
  );
}
