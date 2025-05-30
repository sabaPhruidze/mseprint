import React from "react";
import { homeSpecialityCardsTypes } from "../../types/Home/homeTypes";
import Specialities from "./Specialities";
import Card from "./Card";
import BelowAdditionalSpecialities from "./BelowAdditionalSpecialities";

// Ensure dark mode is enabled in your Tailwind config with `darkMode: 'class'`
const Cards: React.FC<homeSpecialityCardsTypes> = ({
  cardsData,
  homeSpecialities,
}) => {
  if (!cardsData || cardsData.length === 0) {
    return <p className="text-center dark:text-white">No cards available.</p>;
  }

  return (
    <section className="mx-auto flex flex-col items-center screen-size-18:max-w-[1850px] bg-white text-black dark:bg-black dark:text-white ">
      <div
        aria-labelledby="cards-section"
        className="flex flex-col xl:flex-row items-center gap-6 w-full"
      >
        <h2 id="cards-section" className="sr-only">
          Featured Products & Services
        </h2>

        <div className="xl:w-1/3 flex justify-center">
          <Specialities specialities={homeSpecialities} />
        </div>

        <div className="xl:w-2/3 flex md:justify-start justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 screen-size-15:grid-cols-3 xl:grid-cols-2 gap-6 p-4">
            {cardsData.map((card, index) => (
              <div
                key={card.alt}
                className="flex xl:justify-start justify-center mx-[10px]"
              >
                <Card card={card} priority={index < 2} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1850px] mx-auto">
        <BelowAdditionalSpecialities specialities={homeSpecialities} />
      </div>
    </section>
  );
};

export default Cards;
