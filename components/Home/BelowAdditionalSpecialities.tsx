import React from "react";
import { TitleContentTypes } from "../../types/commonTypes";

interface SpecialitiesProps {
  specialities: TitleContentTypes[];
}

const BelowAdditionalSpecialities: React.FC<SpecialitiesProps> = ({
  specialities,
}) => {
  if (!specialities?.length) {
    return <p className="text-center">No specialities available.</p>;
  }

  return (
    <div className="pt-6 flex flex-col items-start text-left">
      {specialities.map((speciality, i) => (
        <div key={i} className="w-full mb-6">
          {/* — optional heading; remove if you don’t need titles here — */}
          <h2 className="text-3xl font-bold mb-4 text-center font-inter-extrabold">
            {speciality.title}
          </h2>

          {/* Mobile accordion (≤ md) */}
          <details className="group block w-full md:hidden" role="group">
            {/* First list item + toggle text */}
            <summary className="list-disc pl-5 text-center font-inter-medium marker:hidden cursor-pointer">
              {speciality.contentDown?.[0]}
              <span className="ml-1 text-blue-600 group-open:hidden">
                see more&nbsp;…
              </span>
              <span className="ml-1 text-blue-600 hidden group-open:inline">
                see less
              </span>
            </summary>

            {/* Remaining bullets – visible only when open */}
            <ul className="list-disc pl-5 text-center font-inter-medium mt-2">
              {speciality.contentDown
                ?.slice(1)
                .map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </details>

          {/* Desktop / ≥ md view – always expanded */}
          <ul className="hidden md:block list-disc pl-5 text-center font-inter-medium">
            {speciality.contentDown?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BelowAdditionalSpecialities;
