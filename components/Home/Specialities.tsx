import React from "react";
import { TitleContentTypes } from "../../types/commonTypes";

interface SpecialitiesProps {
  specialities: TitleContentTypes[];
}

const Specialities: React.FC<SpecialitiesProps> = ({ specialities }) => {
  if (!specialities || specialities.length === 0) {
    return (
      <p className="text-center text-gray-500">No specialities available.</p>
    );
  }

  return (
    <div className="p-6 shadow-lg flex flex-col items-start text-left">
      {specialities.map((speciality, index) => (
        <div key={index} className="w-full">
          <h2 className="text-xl font-bold mb-4 text-center">
            {speciality.title}
          </h2>
          <ul className="list-disc pl-5 text-gray-700 text-center">
            {speciality.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Specialities;
