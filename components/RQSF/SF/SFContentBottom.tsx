import React from "react";
import { SectionContent, TitleContentTypes } from "../../../types/commonTypes";

interface RQContentBottomProps {
  data: {
    get_started?: TitleContentTypes;
    services?: SectionContent;
    why_us?: SectionContent;
  } | null;
}

const SFContentBottom: React.FC<RQContentBottomProps> = ({ data }) => {
  if (!data) return null;
  const { get_started, services, why_us } = data;

  return (
    <div>
      <section className="mx-auto max-w-[1500px] px-4 pt-12 screen-size-12:text-left text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
          {services?.heading}
        </h2>
        <p className="mb-6 leading-relaxed text-gray-700 dark:text-white">
          {services?.paragraph1}
        </p>

        {services?.list && (
          <div className="grid screen-size-10:grid-cols-2 gap-8 text-center">
            {services?.list.map(({ id, page, content }) => (
              <div key={id}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {page}
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  {content}
                </p>
              </div>
            ))}
          </div>
        )}
        <p className="my-12 leading-relaxed dark:text-white text-gray-700">
          {services?.paragraph2}
        </p>
      </section>
      <section className="mx-auto max-w-[1500px] px-4 pt-2 screen-size-12:text-left text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
          {why_us?.heading}
        </h2>
        <p className="mb-6 leading-relaxed text-gray-700 dark:text-white">
          {why_us?.paragraph1}
        </p>

        {why_us?.list && (
          <div className="grid screen-size-10:grid-cols-2 gap-8 text-center">
            {why_us?.list.map(({ id, page, content }) => (
              <div key={id}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {page}
                </h3>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  {content}
                </p>
              </div>
            ))}
          </div>
        )}
        <p className="my-12 leading-relaxed text-gray-700 dark:text-white">
          {services?.paragraph2}
        </p>
      </section>
      <section className="mx-auto max-w-[1500px] px-4 pt-2 pb-10 screen-size-12:text-left text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-blue-800 sm:text-4xl mb-6 dark:text-white">
          {get_started?.title}
        </h2>
        <div className="space-y-6 max-w-[1500px] mx-auto text-gray-700 leading-relaxed dark:text-white">
          {get_started?.content?.map((data, idx) => <p key={idx}>{data}</p>)}
        </div>
      </section>
    </div>
  );
};

export default SFContentBottom;
