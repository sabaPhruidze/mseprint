// app/(marketing)/components/blog/FeaturedPosts.tsx      <-- or wherever it lives
"use client";

import { useRef } from "react";
import Link from "next/link"; // ➜ add
import SEOImage from "components/common/SEOImage";
import { BlogPost, SEOImageProps } from "types/commonTypes";

interface Props {
  posts: BlogPost[];
}

export default function FeaturedPosts({ posts }: Props) {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    if (!track.current) return;
    const offset =
      dir === "left" ? -track.current.clientWidth : track.current.clientWidth;
    track.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* scroll track */}
      <div
        ref={track}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {posts.map((post) => {
          const img: SEOImageProps = post.image ?? {
            src: "/images/home-images/additional/offset_printing_right.webp",
            alt: post.title,
          };

          /* ---------- choose URL ----------
             1. prefer explicit path (your new column)
             2. fall back to /blog/{slug} if path is undefined             */
          const href = post.path ?? `/blog/${post.slug}`;

          return (
            <Link /* wrapped in <Link /> now */
              key={post.id}
              href={href}
              className="relative shrink-0 snap-start
                         w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-[25%]
                         h-64 rounded-2xl overflow-hidden
                         shadow hover:shadow-xl transition-shadow duration-300
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <SEOImage
                {...img}
                loading={img.priority ? undefined : "lazy"}
                sizes={
                  img.sizes ??
                  "(min-width:1280px) 25vw, (min-width:1024px) 30vw, (min-width:640px) 45vw, 85vw"
                }
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                fill
                objectFit="cover"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* title & date */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold leading-snug line-clamp-2 drop-shadow">
                  {post.title}
                </h3>
                <p className="text-sm opacity-85">
                  {new Date(post.published_on).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* nav arrows (unchanged) */}
      <button
        aria-label="Previous"
        onClick={() => scrollBy("left")}
        className="flex absolute left-2.5 top-1/2 -translate-y-1/2
                   bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-2 shadow z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        aria-label="Next"
        onClick={() => scrollBy("right")}
        className="flex absolute right-2.5 top-1/2 -translate-y-1/2
                  bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black rounded-full p-2 shadow z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
