import React from "react";
import Link from "next/link";
import SEOImage from "../common/SEOImage";
import { SEOImageProps } from "../../types/commonTypes";

interface StaticSlideProps {
  slideData: SEOImageProps;
}

/**
 * Renders a static, non-interactive version of the first carousel slide.
 * This component is optimized for the Largest Contentful Paint (LCP) by
 * being a Server Component and using priority props for the Next/Image.
 */
const StaticCarouselFirstSlide: React.FC<StaticSlideProps> = ({
  slideData,
}) => {
  // Return null if there's no data to prevent errors
  if (!slideData) {
    return null;
  }

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

        <SEOImage
          src={`/images/${slideData.src}`}
          alt={slideData.alt}
          name={slideData.alt}
          geoData={slideData.geoData}
          // --- LCP OPTIMIZATION ATTRIBUTES ---
          priority={true} // Tells Next.js to preload this image.
          fetchPriority="high" // Tells the browser to fetch this resource with high priority.
          decoding="sync" // Decode the image synchronously for a faster initial paint.
          // --- END OF OPTIMIZATIONS ---
          height={400}
          width={1920} // Use the largest desktop image width for the initial render.
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 1200px"
          fill={true}
          className="w-full h-[400px]"
          objectFit="cover"
        />

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
