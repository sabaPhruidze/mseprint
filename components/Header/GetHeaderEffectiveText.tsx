import { headerEffectiveTextTypes } from "@/types/Header/headerTypes";
import React from "react";

const GetHeaderEffectiveText = ({
  effectiveTextData,
}: {
  effectiveTextData: headerEffectiveTextTypes[];
}) => {
  return (
    <div className="text-white font-bold text-3xl flex items-center justify-center text-center">
      {effectiveTextData.map((item, index) => (
        <React.Fragment key={item.id}>
          {/* Skew only the text */}
          <span className="skew-x-[-15deg] italic">{item.text}</span>
          {/* Show the circle except for the last item */}
          {index < effectiveTextData.length - 1 && (
            <span className="px-2 not-italic">{item.circle}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default GetHeaderEffectiveText;
