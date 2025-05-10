import type { Metadata } from "next";
import Script from "next/script";
import { getSpecialPagesData } from "db/GetSpecialPagesData"; // ← direct DB call
import FeaturedPosts from "components/blog/FeaturedPosts";
import { BlogPost } from "types/commonTypes";

/* ────── SEO metadata (unchanged) ────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mseprinting.com"),
  title: "MSE Printing Blog | Expert Tips, Design & Marketing Insights",
  description:
    "Explore the latest articles from MSE Printing—printing tips, design inspiration, and marketing strategies to grow your business.",
  alternates: { canonical: "https://www.mseprinting.com/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "MSE Printing Blog",
    description: "Expert articles on printing, design, and marketing.",
    images: [
      {
        url: "/images/blog/2.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing - Banners & Posters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSE Printing Blog",
    description: "Expert articles on printing, design, and marketing.",
  },
};

export default async function BlogPage() {
  /* ---------- fetch & shape ---------- */
  const { blogData } = await getSpecialPagesData("/blog");

  // BlogPost[][] ➜ BlogPost[]
  const posts: BlogPost[] = (blogData ?? [])
    .flat()
    // newest first feels more natural for a blog; flip if you prefer oldest→newest
    .sort(
      (a, b) =>
        new Date(b.published_on).getTime() - new Date(a.published_on).getTime()
    )
    .map((p, idx) => ({ ...p, id: idx + 1 }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MSE Printing Blog",
    url: "https://www.mseprinting.com/blog",
    description:
      "Expert articles on printing, design, and marketing from MSE Printing.",
  };

  return (
    <>
      <Script
        id="blog-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white py-16 px-6 md:px-20">
        <header className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">BLOG</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our blog provides informative articles, practical tips, and expert
            insights to help your business thrive. Stay ahead with strategic
            guidance and industry news.
          </p>
        </header>

        <section className="mt-12">
          <FeaturedPosts posts={posts} />
        </section>
      </main>
    </>
  );
}
