import React from "react";
import { SEOImageProps, TitleContentTypes } from "../../types/commonTypes";
import Specialities from "./Specialities";
import Card from "./Card";

interface CardsProps {
  cardsData: SEOImageProps[];
  homeSpecialities: TitleContentTypes[];
}

const Cards: React.FC<CardsProps> = ({ cardsData, homeSpecialities }) => {
  if (!cardsData || cardsData.length === 0) {
    return <p className="text-center text-gray-500">No cards available.</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      {/* Specialities Section - Now Centered Vertically */}
      <div className="lg:w-1/3 flex justify-center self-center">
        <Specialities specialities={homeSpecialities} />
      </div>

      {/* Cards Grid - Aligned at the Top */}
      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {cardsData.map((card) => (
          <div key={card.alt} className="h-full">
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
