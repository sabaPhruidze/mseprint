import type { Metadata } from "next";
import Script from "next/script";
import FeaturedPosts from "components/blog/FeaturedPosts";
import { localBlogPosts } from "components/blog/localBlogPosts";
import { BlogPost } from "types/commonTypes";

/* ───────────────────────────
   SEO / social metadata (App Router)
   ─────────────────────────── */
export const metadata: Metadata = {
  title: "MSE Printing Blog | Expert Tips, Design & Marketing Insights",
  description:
    "Explore the latest articles from MSE Printing—printing tips, design inspiration, and marketing strategies to grow your business.",
  keywords: [
    "printing tips",
    "design insights",
    "marketing strategies",
    "MSE Printing blog",
  ],
  alternates: {
    canonical: "https://www.mseprinting.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://www.mseprinting.com/blog",
    title: "MSE Printing Blog",
    description: "Expert articles on printing, design, and marketing.",
    images: [
      {
        url: "https://www.mseprinting.com/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "MSE Printing Blog Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSE Printing Blog",
    description: "Expert articles on printing, design, and marketing.",
    images: ["https://www.mseprinting.com/og-image-blog.jpg"],
  },
};

/* ───────────────────────────
   The page component itself
   (runs on the server by default)
   ─────────────────────────── */
export default async function BlogPage() {
  /* In a real project replace this import with
     await fetch('https://…/api/posts').then(r => r.json()) */
  const posts: BlogPost[] = localBlogPosts;

  /* JSON‑LD for richer SERP */
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
      {/* JSON‑LD needs to be in <head>.  
          In the App Router we can inject it with next/script */}
      <Script
        id="blog-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ------- page content ------- */}
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
