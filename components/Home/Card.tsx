import React from "react";
import Link from "next/link";
import { SEOImageProps } from "../../types/commonTypes";
import SEOImage from "../../components/common/SEOImage";
import { buildImagePath } from "../../components/common/buildImagePath";

interface CardProps {
  card: SEOImageProps;
  priority?: boolean;
}

const Card: React.FC<CardProps> = ({ card, priority }) => {
  const desktopImageSrc = buildImagePath(card.src, false);
  const mobileImageSrc = buildImagePath(card.src, true);

  return (
    <Link href={card.path || "/"} passHref>
      <div
        className="
          bg-white text-black dark:bg-black dark:text-white
          rounded-lg shadow-lg overflow-hidden
          min-w-[300px] max-w-[400px] mx-auto
          border border-mediumGray dark:border-darkGray
          transition-transform transform hover:scale-105 cursor-pointer
          flex flex-col h-full
        "
      >
        <div className="relative w-full h-[350px]">
          {/* Mobile image */}
          <SEOImage
            src={mobileImageSrc}
            alt={card.alt}
            name={card.alt}
            geoData={card.geoData}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes={card.sizes}
            fill
            className="object-cover w-full h-full block sm:hidden"
          />
          {/* Desktop image */}
          <SEOImage
            src={desktopImageSrc}
            alt={card.alt}
            name={card.alt}
            geoData={card.geoData}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes={card.sizes}
            fill
            className="object-cover w-full h-full hidden sm:block"
          />
        </div>

        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold font-inter-extrabold dark:text-white">
              {card.alt}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-inter-medium">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
