import React from "react";
import { homeSpecialityCardsTypes } from "../../types/Home/homeTypes";
import Specialities from "./Specialities";
import Card from "./Card";

const Cards: React.FC<homeSpecialityCardsTypes> = ({
  cardsData,
  homeSpecialities,
}) => {
  if (!cardsData || cardsData.length === 0) {
    return <p className="text-center text-gray-500">No cards available.</p>;
  }

  return (
    <section
      aria-labelledby="cards-section"
      className="flex flex-col lg:flex-row gap-6 items-center screen-size-18:max-w-[1850px] mx-auto"
    >
      <h1 id="cards-section" className="sr-only">
        Featured Products & Services
      </h1>
      <div className="lg:w-1/3 flex justify-center">
        <Specialities specialities={homeSpecialities} />
      </div>
      <div className="lg:w-2/3 flex md:justify-start justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 screen-size-15:grid-cols-3 xl:grid-cols-2 gap-6 p-4">
          {cardsData.map((card, index) => (
            <div
              key={card.alt}
              className="flex xl:justify-start justify-center"
            >
              <Card card={card} priority={index < 2} />
            </div>
          ))}
        </div>
      </div>
      <div className="clear-both" />
    </section>
  );
};

export default Cards;
