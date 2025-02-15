import { headerEffectiveTextTypes } from "@/types/Header/HeaderTypes";
import React from "react";

const GetHeaderEffectiveText = ({
  effectiveTextData,
}: {
  effectiveTextData: headerEffectiveTextTypes[];
}) => {
  console.log(effectiveTextData);
  return (
    <div className="text-black font-bold text-2xl flex items-center justify-center skew-x-[-15deg] text-center">
      {effectiveTextData.map((item) => (
        <span key={item.id} className="px-2 skew-x-[15deg]">
          {item.text}
          <span className="px-2">{item.circle}</span>
        </span>
      ))}
    </div>
  );
};

export default GetHeaderEffectiveText;
