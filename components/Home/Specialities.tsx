import React from "react";
import { TitleContentTypes } from "../../types/commonTypes";

interface SpecialitiesProps {
  specialities: TitleContentTypes[];
}

export default function Specialities({ specialities }: SpecialitiesProps) {
  if (!specialities?.length) {
    return <p className="text-center">No specialities available.</p>;
  }

  return (
    <div className="p-6 flex flex-col items-start text-left">
      {specialities.map((speciality, i) => (
        <div key={i} className="w-full mb-6">
          <h1 className="text-3xl font-bold mb-4 text-center font-inter-extrabold">
            {speciality.title}
          </h1>

          {/* mobile accordion */}
          <details
            className="group block w-full md:hidden" /* only ≤ 550 px (≈ md:hidden) */
            role="group"
          >
            {/* first list item + toggle text */}
            <summary className="list-disc pl-5 text-center font-inter-medium marker:hidden cursor-pointer">
              {/* first bullet */}
              {speciality.contentUp?.[0]}

              {/* toggle wording */}
              <span className="ml-1 text-blue-600 underline group-open:hidden">
                see more&nbsp;…
              </span>
              <span className="ml-1 text-blue-600 underline hidden group-open:inline">
                see less
              </span>
            </summary>

            {/* remaining bullets appear only when open */}
            <ul className="list-disc pl-5 text-center font-inter-medium mt-2">
              {speciality.contentUp
                ?.slice(1)
                .map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </details>

          {/* desktop / larger-than-mobile view: never collapses */}
          <ul className="hidden md:block list-disc pl-5 text-center font-inter-medium">
            {speciality.contentUp?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
