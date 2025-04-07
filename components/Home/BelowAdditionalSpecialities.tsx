import React from "react";
import { TitleContentTypes } from "../../types/commonTypes";

interface SpecialitiesProps {
  specialities: TitleContentTypes[];
}

const BelowAdditionalSpecialities: React.FC<SpecialitiesProps> = ({
  specialities,
}) => {
  if (!specialities || specialities.length === 0) {
    return <p className="text-center">No specialities available.</p>;
  }
  return (
    <div className="pt-6 flex flex-col items-start text-left">
      {specialities.map((speciality, index) => (
        <div key={index} className="w-full">
          {speciality.contentDown?.map((item) => (
            <ul className=" px-5 text-center font-inter-medium" key={item}>
              <li>{item}</li>
              <br />
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BelowAdditionalSpecialities;
