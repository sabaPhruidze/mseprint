import React from "react";
import { SEOImageProps } from "../../types/commonTypes";
import Link from "next/link";
import SEOImage from "../../components/common/SEOImage"; // Ensure you have this component

interface CardsProps {
  cardsData: SEOImageProps[];
}

const Cards: React.FC<CardsProps> = ({ cardsData }) => {
  if (!cardsData || cardsData.length === 0) {
    return <p className="text-center text-gray-500">No cards available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cardsData.map((card) => (
        <div
          key={card.alt}
          className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative w-full h-48">
            <Link href={card.path || "/"} passHref>
              <SEOImage
                src={`/images/${card.src}`}
                alt={card.alt}
                name={card.alt}
                geoData={card.geoData}
                priority={card.priority}
                loading={card.priority ? undefined : "lazy"}
                sizes={card.sizes}
                fill
              />
            </Link>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold">{card.alt}</h2>
            <p className="text-gray-300">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
