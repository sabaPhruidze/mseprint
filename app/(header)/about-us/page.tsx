// app/about-us/page.tsx   (must be .tsx)
import React, { ElementType } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getSpecialPagesData } from "db/GetSpecialPagesData";
import { AboutUsSection } from "types/commonTypes"; // ← your model

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

const phone = "763-542-8812";
const email = "info@mseprinting.com";

export default async function AboutUsPage() {
  const { aboutUsData: raw } = await getSpecialPagesData("/about-us");

  const aboutUsData: AboutUsSection[] = Array.isArray(raw)
    ? (raw as AboutUsSection[][]).flat() // ← one .flat() does the trick
    : [];

  const renderSection = (section: AboutUsSection) => {
    const HeadingTag = `h${section.heading_level}` as ElementType;

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

      {/* static call‑to‑action */}
      <section className="flex flex-col items-center gap-6 rounded-xl bg-blue-50 p-8 text-center dark:bg-blue-900/20">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200">
          Ready to Experience the MSE Printing Difference?
        </h2>
        <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Let’s bring your next project to life. Call us or send an email — we’d
          love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${phone.replace(/\D/g, "")}`}
            className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Call {phone}
          </a>
          <Link
            href={`mailto:${email}`}
            className="rounded-full bg-gray-200 px-6 py-3 text-gray-900 transition hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Email Us
          </Link>
        </div>
      </section>
    </div>
  );
}
