import React from "react";
import { SEOImageProps } from "../../types/commonTypes";
import Link from "next/link";
import SEOImage from "../../components/common/SEOImage";

interface CardProps {
  card: SEOImageProps;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <Link href={card.path || "/"} passHref>
      <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden min-w-[300px] max-w-[400px] mx-auto border border-mediumGray transition-transform transform hover:scale-105 cursor-pointer flex flex-col h-full">
        {/* Image Section */}
        <div className="relative w-full h-[250px]">
          <SEOImage
            src={`/images/${card.src}`}
            alt={card.alt}
            name={card.alt}
            geoData={card.geoData}
            priority={card.priority}
            loading={card.priority ? undefined : "lazy"}
            sizes="400px auto"
            fill
          />
        </div>

        {/* Card Content */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold">{card.alt}</h2>
            <p className="text-gray-700">{card.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
