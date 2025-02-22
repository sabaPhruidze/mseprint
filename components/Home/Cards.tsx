import React from "react";
import { SEOImageProps } from "../../types/commonTypes";
import Link from "next/link";
import SEOImage from "../../components/common/SEOImage";

interface CardsProps {
  cardsData: SEOImageProps[];
}

const Cards: React.FC<CardsProps> = ({ cardsData }) => {
  if (!cardsData || cardsData.length === 0) {
    return <p className="text-center text-gray-500">No cards available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 cursor-pointer">
      {cardsData.map((card) => (
        <div
          key={card.alt}
          className="bg-white text-black rounded-lg shadow-lg overflow-hidden max-w-[400px] mx-auto border border-mediumGray transition-transform transform hover:scale-105"
        >
          <div className="relative w-full h-[250px]">
            <Link href={card.path || "/"} passHref>
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
            </Link>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold">{card.alt}</h2>
            <p className="text-gray-700">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
