import type { Metadata } from "next";
import Script from "next/script";
import { getSpecialPagesData } from "db/GetSpecialPagesData"; // ← direct DB call
import FeaturedPosts from "components/blog/FeaturedPosts";
import { BlogPost } from "types/commonTypes";

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
  verification: {
    google: "ABCD1234xyz", // Replace with your Search Console code
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
    "business:contact_data:street_address": "3839 N Washington Ave Ste. 101",
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

/* — Schema.org Blog structured data for SEO — */
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
      <BlogSchema />

      <main className="min-h-screen bg-white dark:bg-black py-16 px-6 md:px-20">
        <header className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">BLOG</h1>
          <p className="text-lg text-black dark:text-white max-w-3xl mx-auto">
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
