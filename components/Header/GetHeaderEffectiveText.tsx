import { headerEffectiveTextTypes } from "@/types/Header/headerTypes";
import React from "react";

const GetHeaderEffectiveText = ({
  effectiveTextData,
}: {
  effectiveTextData: headerEffectiveTextTypes[];
}) => {
  return (
    <div className="font-inter-extrabold hidden screen-size-20:flex text-white font-bold items-center justify-center text-center screen-size-26:text-3xl text-2xl">
      {effectiveTextData.map((item, index) => (
        <React.Fragment key={item.id}>
          <span className="skew-x-[-15deg] italic">{item.text}</span>
          {index < effectiveTextData.length - 1 && (
            <span className="px-2 not-italic">{item.circle}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default GetHeaderEffectiveText;
