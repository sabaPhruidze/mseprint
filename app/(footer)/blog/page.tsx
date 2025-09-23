// app/(marketing)/blog/page.tsx
import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { getFooterData } from "db/GetFooterData";
import { buildServiceBreadcrumbs } from "lib/breadcrumbs";

/* ────── data helpers & components ────── */
import { getSpecialPagesData } from "db/GetSpecialPagesData"; // direct DB call
import PageStructure from "components/common/PageStructure";
import FeaturedPosts from "components/blog/FeaturedPosts";

/* ────── types ────── */
import { BlogPost, PageStructureTypes } from "types/commonTypes";

/* ────── SEO metadata (unchanged) ────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mseprinting.com"),
  title: "MSE Printing Blog | Printing & Marketing Tips",
  description:
    "Explore expert articles from MSE Printing—printing tips, design inspiration, and marketing strategies to grow your business.",
  keywords: [
    "printing blog",
    "design tips",
    "marketing strategies",
    "business growth",
    "print industry news",
    "MSE Printing blog",
    "digital printing insights",
    "custom print ideas",
    "creative print marketing",
    "print shop Minneapolis",
  ],
  applicationName: "MSE Printing",
  category: "Blog",
  alternates: { canonical: "https://www.mseprinting.com/blog" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.mseprinting.com/blog",
    title: "MSE Printing Blog | Printing & Marketing Tips",
    description:
      "Expert articles on printing, design, and marketing from MSE Printing.",
    locale: "en_US",
    siteName: "MSE Printing",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/blog.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing Blog - Expert Printing & Marketing Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSE Printing Blog | Printing & Marketing Tips",
    description:
      "Expert articles on printing, design, and marketing from MSE Printing.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/footer-images/blog.webp",
        alt: "MSE Printing Blog Main Banner",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 Washington Ave N Ste. 103",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ────── Schema.org structured data ────── */
const BlogSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MSE Printing Blog",
    url: "https://www.mseprinting.com/blog",
    description:
      "Expert articles on printing, design, and marketing from MSE Printing.",
    publisher: {
      "@type": "Organization",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mseprinting.com/favicon.ico",
      },
    },
    image: ["https://www.mseprinting.com/images/footer-images/blog.webp"],
  };

  return (
    <Script
      id="blog-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

/* ────── Page Component ────── */
export default async function BlogPage() {
  /* ---------- fetch data ---------- */
  // The response is a heterogeneous object: we only care about two props.
  type BlogPageData = {
    BlogAdditionalPageData?: PageStructureTypes[];
    blogData?: BlogPost[][];
  };

  const data = (await getSpecialPagesData("/blog")) as BlogPageData;
  const { footerContentData } = await getFooterData();
  const breadcrumbs = buildServiceBreadcrumbs(
    "blog", // must match the DB `path`
    footerContentData
  );

  /* ---------- shape ---------- */
  const BlogAdditionalPageData = data.BlogAdditionalPageData ?? [];
  const blogData = data.blogData ?? [];

  /* ---- PageStructure payload ---- */
  const pageData = BlogAdditionalPageData[0];

  /* ---- Blog posts (flatten & sort newest→oldest) ---- */
  const posts: BlogPost[] = blogData
    .flat()
    .sort(
      (a, b) =>
        new Date(b.published_on).getTime() - new Date(a.published_on).getTime()
    )
    .map((p, idx) => ({ ...p, id: idx + 1 }));

  /* ---------- render ---------- */
  return (
    <>
      <BlogSchema />

      <main className="min-h-screen bg-white dark:bg-black py-16 px-6 md:px-20">
        <header className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">BLOG</h2>
          <p className="text-lg text-black dark:text-white max-w-3xl mx-auto">
            Our blog provides informative articles, practical tips, and expert
            insights to help your business thrive. Stay ahead with strategic
            guidance and industry news.
          </p>
        </header>

        {/* ─── featured posts ─── */}
        <section className="mt-12">
          <FeaturedPosts posts={posts} />
        </section>

        {/* ─── CMS-driven additional content ─── */}
      </main>
      {pageData && (
        <section className="mt-12">
          <PageStructure
            pageData={pageData}
            breadcrumbs={breadcrumbs}
            tokens={{
              city: "Minneapolis",
              state: "Minnesota",
              state_abbr: "MN",
              brand: "MSE Printing",
              phone: "763-542-8812",
            }}
          />
        </section>
      )}
    </>
  );
}
