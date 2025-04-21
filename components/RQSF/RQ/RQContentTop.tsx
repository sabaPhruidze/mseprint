import React from "react";

// ── Types --------------------------------------------------------
interface BeginJourney {
  heading?: string;
  paragraph1?: string;
  paragraph2?: string;
}

interface RQContentTopProps {
  data: {
    begin_jurney?: BeginJourney;
  } | null;
}

// ── Component ----------------------------------------------------
const RQContentTop: React.FC<RQContentTopProps> = ({ data }) => {
  if (!data?.begin_jurney) return null;
  const { heading, paragraph1, paragraph2 } = data.begin_jurney;

  return (
    <section className="mx-auto max-w-[1500px] px-4 py-12 screen-size-12:text-left text-center">
      {heading && (
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
          {heading}
        </h2>
      )}
      {paragraph1 && (
        <p className="mb-6 leading-relaxed text-gray-700">{paragraph1}</p>
      )}
      {paragraph2 && (
        <p className="leading-relaxed text-gray-700">{paragraph2}</p>
      )}
    </section>
  );
};

export default RQContentTop;
