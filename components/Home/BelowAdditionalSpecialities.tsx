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
    <div className="p-8 space-y-12">
      {specialities.map((speciality, i) => (
        <div key={i} className="w-full">
          {/* Section Title */}
          <h2 className="mb-6 text-3xl font-inter-extrabold text-center">
            {speciality.title}
          </h2>

          {/* Mobile accordion (≤ md) */}
          <details className="group block w-full md:hidden" role="group">
            <summary className="cursor-pointer list-none font-inter-medium text-left">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  {speciality.contentDown?.[0]}
                  <span className="text-blue-600 group-open:hidden ml-1">
                    see more…
                  </span>
                  <span className="text-blue-600 hidden group-open:inline ml-1">
                    see less
                  </span>
                </div>
              </div>
            </summary>

            <div className="mt-2 space-y-2">
              {speciality.contentDown?.slice(1).map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-inter-medium">{item}</span>
                </div>
              ))}
            </div>
          </details>

          {/* Desktop view (≥ md) – 2 column layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {speciality.contentDown?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start break-inside-avoid w-full"
                >
                  <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-inter-medium text-left flex-1">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BelowAdditionalSpecialities;
