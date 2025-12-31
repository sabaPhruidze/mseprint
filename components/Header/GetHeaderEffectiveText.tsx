import React from "react";

export interface headerEffectiveTextTypes {
  id: number;
  text: string;
  circle?: string;
}

const TEXT_CLASS =
  "font-inter-extrabold font-bold text-white items-center justify-center text-center " +
  "text-2xl screen-size-26:text-3xl";

export default function GetHeaderEffectiveText({
  effectiveTextData,
}: {
  effectiveTextData: headerEffectiveTextTypes[];
}) {
  if (!effectiveTextData?.length) return null;

  return (
    <div
      className={`hidden screen-size-20:flex ${TEXT_CLASS}`}
      aria-label="Key messages"
    >
      {effectiveTextData.map((item, index) => (
        <React.Fragment key={item.id}>
          <span className="skew-x-[-15deg] italic">{item.text}</span>
          {index < effectiveTextData.length - 1 && (
            <span className="px-2 not-italic" aria-hidden="true">
              {item.circle}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
