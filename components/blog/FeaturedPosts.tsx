"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "types/commonTypes";

interface Props {
  posts: BlogPost[];
}

/**
 * Native‑scroll carousel:
 * – swipe / wheel / drag friendly
 * – arrow buttons for desktop
 * – responsive slide widths
 */
export default function FeaturedPosts({ posts }: Props) {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    if (!track.current) return;
    const { clientWidth } = track.current;
    track.current.scrollBy({
      left: dir === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* scroll track */}
      <div
        ref={track}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.slug ? `/blog/${post.slug}` : "#"}
            className="relative shrink-0 snap-start
                       w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-[25%]
                       h-64 rounded-2xl overflow-hidden
                       shadow hover:shadow-xl transition-shadow duration-300
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes="(min-width:1280px) 25vw,
                     (min-width:1024px) 30vw,
                     (min-width:640px) 45vw,
                     85vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold leading-snug line-clamp-2 drop-shadow">
                {post.title}
              </h3>
              <p className="text-sm opacity-85">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* nav arrows (hidden < md) */}
      <button
        aria-label="Previous"
        onClick={() => scrollBy("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
                   bg-white/80 hover:bg-white rounded-full p-2 shadow"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="rotate-180">
          <path
            d="M15 18l-6-6 6-6"
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
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
                   bg-white/80 hover:bg-white rounded-full p-2 shadow"
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
