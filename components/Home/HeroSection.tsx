import React from "react";
import Head from "next/head";
import Link from "next/link";
import { SEOImageProps } from "../../types/commonTypes";
import SEOImage from "../common/SEOImage";
import { buildImagePath } from "components/common/buildImagePath";

interface HeroSectionProps {
  heroSection: SEOImageProps | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroSection }) => {
  if (!heroSection) return null;

  // false => desktop original; true => mobile “_64” variant
  const desktopImageSrc = buildImagePath(heroSection.src, false);
  const mobileImageSrc = buildImagePath(heroSection.src, true);

  return (
    <section className="mb-6">
      <div
        aria-labelledby="hero-heading"
        className="relative flex h-[600px] w-full items-center justify-start overflow-hidden pl-[20px] text-white screen-size-5:h-[500px] screen-size-18:pl-[50px]"
      >
        {/* Background images */}
        <div className="absolute inset-0">
          {/* Mobile image (visible ≤639px) */}
          <SEOImage
            src={mobileImageSrc}
            alt={heroSection.alt}
            name={heroSection.alt}
            geoData={heroSection.geoData}
            // Highest LCP benefit on mobile PSI
            priority
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 639px) 100vw, 100vw"
            fill
            className="object-cover h-[600px] w-full screen-size-5:h-[500px] block sm:hidden"
          />

          {/* Desktop image (hidden on mobile) */}
          <SEOImage
            src={desktopImageSrc}
            alt={heroSection.alt}
            name={heroSection.alt}
            geoData={heroSection.geoData}
            // Keep low so it doesn’t compete on mobile
            priority={false}
            fetchPriority="low"
            decoding="async"
            sizes="(min-width: 640px) 1200px"
            fill
            className="object-cover h-[600px] w-full screen-size-5:h-[500px] hidden sm:block"
            aria-hidden="true"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-[1200px] px-6 text-center md:text-left">
          {/* Single page-level H1 */}
          <h1
            id="hero-heading"
            className="text-3xl font-extrabold md:text-5xl screen-size-5:text-4xl"
          >
            {heroSection.alt}
          </h1>

          <p className="mt-4 max-w-[700px] text-sm screen-size-5:text-lg screen-size-18:text-xl">
            {heroSection.description}
          </p>

          {heroSection.path && (
            <Link
              href={heroSection.path}
              aria-label={`Learn more about ${heroSection.alt}`}
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-lg font-semibold text-black transition-all hover:bg-opacity-90 focus:outline-none focus-visible:ring focus-visible:ring-white/80"
            >
              Learn More About Our {heroSection.alt}
            </Link>
          )}
        </div>
      </div>

      {/* BELOW list */}
      {!!heroSection.below?.length && (
        <div className="mx-auto w-full max-w-[1850px] p-8">
          {/* Mobile accordion */}
          <details className="group block w-full md:hidden" role="group">
            <summary className="cursor-pointer list-none font-inter-medium text-left">
              <div className="flex items-start">
                <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                <div>
                  {heroSection.below[0]}
                  <span className="ml-1 text-blue-600 group-open:hidden">
                    see more…
                  </span>
                  <span className="ml-1 hidden text-blue-600 group-open:inline">
                    see less
                  </span>
                </div>
              </div>
            </summary>

            <div className="mt-2 space-y-2">
              {heroSection.below.slice(1).map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                  <span className="font-inter-medium">{item}</span>
                </div>
              ))}
            </div>
          </details>

          {/* Desktop two columns */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {heroSection.below.map((item, idx) => (
                <div
                  key={idx}
                  className="flex w-full items-start break-inside-avoid"
                >
                  <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                  <span className="flex-1 text-left font-inter-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
