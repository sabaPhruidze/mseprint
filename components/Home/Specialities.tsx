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
    <div className="p-8 flex flex-col items-start text-left">
      {specialities.map((speciality, i) => (
        <div key={i} className="w-full mb-6">
          <h2 className="text-3xl font-bold mb-4 text-center font-inter-extrabold">
            {speciality.title}
          </h2>

          {/* mobile accordion */}
          <details
            className="group block w-full md:hidden" /* only ≤ md (mobile) */
            role="group"
          >
            {/* first list item + toggle text */}
            <summary className="cursor-pointer list-none font-inter-medium text-left">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  {speciality.contentUp?.[0]}
                  {/* toggle wording */}
                  <span className="ml-1 text-blue-600 group-open:hidden">
                    see more&nbsp;…
                  </span>
                  <span className="ml-1 text-blue-600 hidden group-open:inline">
                    see less
                  </span>
                </div>
              </div>
            </summary>

            {/* remaining bullets appear only when open */}
            <div className="mt-2 space-y-2">
              {speciality.contentUp?.slice(1).map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-inter-medium">{item}</span>
                </div>
              ))}
            </div>
          </details>

          {/* desktop / tablet view: 2-column layout (md to xl) */}
          <div className="hidden md:block xl:hidden">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {speciality.contentUp?.map((item, idx) => (
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

          {/* larger desktop view: single column (xl and above) */}
          <div className="hidden xl:block">
            <div className="space-y-2">
              {speciality.contentUp?.map((item, idx) => (
                <div key={idx} className="flex items-start w-full">
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
}
