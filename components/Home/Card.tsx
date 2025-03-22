import React from "react";
import Link from "next/link";
import { SEOImageProps } from "../../types/commonTypes";
import SEOImage from "../../components/common/SEOImage";

interface CardProps {
  card: SEOImageProps;
  priority?: boolean;
}

const Card: React.FC<CardProps> = ({ card, priority }) => {
  return (
    <Link href={card.path || "/"} passHref>
      <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden min-w-[300px] max-w-[400px] mx-auto border border-mediumGray transition-transform transform hover:scale-105 cursor-pointer flex flex-col h-full">
        <div className="relative w-full h-[350px]">
          <SEOImage
            src={
              `/images/${card.src}` ||
              "/images/home-images/additional/offset_printing_right.webp"
            }
            alt={card.alt}
            name={card.alt}
            geoData={card.geoData}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes={card.sizes}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between ">
          <div>
            <h2 className="text-lg font-semibold font-inter-extrabold">
              {card.alt}
            </h2>
            <p className="text-gray-700 font-inter-medium">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
