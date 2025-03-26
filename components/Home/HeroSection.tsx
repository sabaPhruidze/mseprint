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
    <section>
      <div
        aria-labelledby="hero-heading"
        className="relative w-full h-[500px] flex items-center justify-start text-white overflow-hidden screen-size-18:pl-[50px] pl-[20px]"
      >
        <div className="absolute inset-0">
          <SEOImage
            src={imageSrc}
            alt={heroSection.alt}
            name={heroSection.alt}
            geoData={heroSection.geoData}
            priority
            sizes={heroSection.sizes}
            fill
            className="w-full h-[500px]"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
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
              className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-black bg-white rounded-full transition-all hover:bg-opacity-90"
            >
              Learn More About Our {heroSection.alt}
            </Link>
          )}
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center screen-size-18:max-w-[1850px] pt-6 px-6">
        <ul className="px-5 text-gray-700 text-center font-inter-medium">
          {heroSection.below?.map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <li>{item}</li>
              <br />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
