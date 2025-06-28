import React from "react";
import Link from "next/link";
import { SEOImageProps } from "../../types/commonTypes";

interface StaticSlideProps {
  slideData: SEOImageProps;
}

/**
 * Renders a static, non-interactive version of the first carousel slide.
 * This component is optimized for the Largest Contentful Paint (LCP) by
 * being a Server Component and using responsive images without JavaScript.
 */
const StaticCarouselFirstSlide: React.FC<StaticSlideProps> = ({
  slideData,
}) => {
  // Return null if there's no data to prevent errors
  if (!slideData) {
    return null;
  }

  // Helper function to get the base filename without extension
  const getBaseFilename = (src: string) => {
    return src.replace(".webp", "");
  };

  const baseFilename = getBaseFilename(slideData.src);

  return (
    <section
      className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg"
      aria-labelledby="carousel-heading"
    >
      <h2 id="carousel-heading" className="sr-only">
        Featured Services and Products
      </h2>

      <div className="relative w-full h-[400px]">
        {/* Semi-transparent overlay to ensure text is readable */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>

        {/* Responsive image using picture element - No JavaScript needed */}
        <picture className="w-full h-full">
          {/* For screens 640px and larger, use the full-size image */}
          <source
            media="(min-width: 640px)"
            srcSet={`/images/${baseFilename}.webp`}
            type="image/webp"
            width="1920"
            height="400"
          />
          {/* For screens smaller than 640px, use the optimized small image */}
          <source
            media="(max-width: 639px)"
            srcSet={`/images/${baseFilename}_64.webp`}
            type="image/webp"
            width="640"
            height="400"
          />
          {/* Fallback image */}
          <img
            src={`/images/${baseFilename}.webp`}
            alt={slideData.alt}
            width="1920"
            height="400"
            className="w-full h-[400px] object-cover"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
            // --- LCP OPTIMIZATION ATTRIBUTES ---
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            // --- END OF OPTIMIZATIONS ---
          />
        </picture>

        {/* Text content and Call to Action */}
        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center screen-size-13:items-start items-center screen-size-13:text-left text-center text-white z-20">
          <div className="screen-size-23:w-[1200px] screen-size-10:w-[800px] w-[280px] screen-size-13:ml-20 ml-0">
            <p className="screen-size-5:mt-4 mt-0 screen-size-23:text-2xl screen-size-10:text-xl screen-size-5:text-md text-sm screen-size-13:text-left text-center mb-2 leading-relaxed">
              {slideData.description}
            </p>
            <Link
              href={slideData.path || "/"}
              aria-label={`Learn more about ${slideData.alt}`}
            >
              <span className="font-inter-extrabold inline-block bg-white/70 text-black px-6 py-3 mt-3 rounded-full font-medium transition text-left w-fit hover:bg-white/85 active:bg-white text-center">
                Learn more about <br /> {slideData.alt}
              </span>
            </Link>
            <h2 className="mt-6 screen-size-15:text-[50px] screen-size-10:text-[36px] text-[24px] font-extrabold screen-size-13:text-left text-center drop-shadow-md leading-tight">
              {slideData.alt}
            </h2>
          </div>
        </div>
      </div>

      {/* Note: There are no interactive buttons here, as it's a static component. */}
    </section>
  );
};

export default StaticCarouselFirstSlide;
