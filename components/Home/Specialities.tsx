import React from "react";
import { TitleContentTypes } from "../../types/commonTypes";

interface SpecialitiesProps {
  specialities: TitleContentTypes[];
}

const Specialities: React.FC<SpecialitiesProps> = ({ specialities }) => {
  if (!specialities || specialities.length === 0) {
    return <p className="text-center">No specialities available.</p>;
  }

  return (
    <div className="p-6 flex flex-col items-start text-left">
      {specialities.map((speciality, index) => (
        <div key={index} className="w-full">
          <h1 className="text-3xl font-bold mb-4 text-center font-inter-extrabold">
            {speciality.title}
          </h1>
          <ul className="list-disc pl-5 text-center font-inter-medium">
            {speciality.contentUp?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Specialities;
