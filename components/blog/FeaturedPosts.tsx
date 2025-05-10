"use client";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "types/commonTypes";

interface Props {
  posts: BlogPost[];
}

const FeaturedPosts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={post.slug ? `/blog/${post.slug}` : "#"}
          className="group relative h-64 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {/* background image */}
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={post.image.sizes}
            priority={post.image.priority}
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* text block */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-lg font-semibold leading-snug line-clamp-2 drop-shadow">
              {post.title}
            </h3>
            <p className="text-sm opacity-85">{post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedPosts;
