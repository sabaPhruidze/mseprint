import React from "react";
import Link from "next/link";
import { SEOImageProps } from "../../types/commonTypes";
import SEOImage from "../common/SEOImage";

interface HeroSectionProps {
  heroSection: SEOImageProps | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroSection }) => {
  if (!heroSection) return null;

  const imageSrc = heroSection.src
    ? `/images/${heroSection.src}`
    : "/images/home-images/additional/offset_printing_right.webp";

  return (
    <section className="mb-6">
      {/* ───────────── HERO IMAGE + HEADING ───────────── */}
      <div
        aria-labelledby="hero-heading"
        className="relative flex h-[600px] w-full items-center justify-start overflow-hidden pl-[20px] text-white screen-size-5:h-[500px] screen-size-18:pl-[50px]"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <SEOImage
            src={imageSrc}
            alt={heroSection.alt}
            name={heroSection.alt}
            geoData={heroSection.geoData}
            priority
            sizes={heroSection.sizes}
            fill
            className="object-cover h-[600px] w-full screen-size-5:h-[500px]"
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-[1200px] px-6 text-center md:text-left">
          <h2
            id="hero-heading"
            className="text-3xl font-extrabold md:text-5xl screen-size-5:text-4xl"
          >
            {heroSection.alt}
          </h2>
          <p className="mt-4 max-w-[700px] text-sm screen-size-5:text-lg screen-size-18:text-xl">
            {heroSection.description}
          </p>

          {heroSection.path && (
            <Link
              href={heroSection.path}
              aria-label={`Learn more about ${heroSection.alt}`}
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-lg font-semibold text-black transition-all hover:bg-opacity-90"
            >
              Learn More About Our {heroSection.alt}
            </Link>
          )}
        </div>
      </div>

      {/* ───────────── “BELOW” LIST ───────────── */}
      {!!heroSection.below?.length && (
        <div className="mx-auto w-full max-w-[1850px] p-8">
          {/* Mobile accordion (≤ md) */}
          <details className="block w-full md:hidden group" role="group">
            <summary className="cursor-pointer list-none font-inter-medium text-left">
              <div className="flex items-start">
                {/* custom bullet */}
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

          {/* Desktop view (≥ md) – two columns, always expanded */}
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
