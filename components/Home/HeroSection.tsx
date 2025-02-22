import React from "react";
import Link from "next/link";
import { SEOImageProps } from "../../types/commonTypes";
import SEOImage from "../common/SEOImage";

interface HeroSectionProps {
  heroSection: SEOImageProps | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroSection }) => {
  if (!heroSection) return null;

  return (
    <section className="relative w-full h-[500px] flex items-center justify-start text-white overflow-hidden screen-size-18:pl-[50px] pl:[20px]">
      <div className="absolute inset-0">
        <SEOImage
          src={`/images/${heroSection.src}`}
          alt={heroSection.alt}
          name={heroSection.alt}
          geoData={heroSection.geoData}
          priority={heroSection.priority}
          loading={heroSection.priority ? undefined : "lazy"}
          sizes={heroSection.sizes}
          fill
        />
      </div>

      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-[1200px] px-6 text-center md:text-left">
        <h1 className="text-3xl font-extrabold md:text-5xl screen-size-5:text-4xl">
          {heroSection.alt}
        </h1>
        <p className="mt-4 max-w-[700px] text-sm screen-size-5:text-lg screen-size-18:text-xl">
          {heroSection.description}
        </p>

        {heroSection.path && (
          <Link
            href={heroSection.path}
            className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-black bg-white rounded-full transition-all hover:bg-opacity-90"
          >
            Learn More...
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
