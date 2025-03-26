import React, { FC } from "react";
import Link from "next/link";
import { PagePathTypes } from "../../types/commonTypes";

interface CTASectionProps {
  rqsafData: PagePathTypes[];
}

const CTASection: FC<CTASectionProps> = ({ rqsafData = [] }) => {
  if (!rqsafData.length) return null;

  return (
    <section className=" w-full px-4" aria-label="Call To Action Section">
      <nav
        className="h-20 bg-gray-300 flex items-center justify-center"
        role="navigation"
        aria-label="Primary Navigation"
      >
        <ul className="flex items-center justify-center">
          {rqsafData.map(({ id, path, page }) => (
            <li key={id}>
              <Link
                href={path || "/"}
                className="
                bg-red
                text-white
                border-2
                border-red
                rounded-full
                px-2
                py-3
                mx-2
                font-inter-extrabold
                transition-all
                duration-300
                hover:bg-red-700
                hover:border-red-700
                focus:scale-95
                text-center
                hover:scale-105
                screen-size-4:px-6
              "
                aria-label={`Navigate to ${page}`}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <article className="mx-auto flex flex-col items-center screen-size-18:max-w-[1850px]">
        <ul className="pl-5 text-gray-700 text-center font-inter-medium pt-6">
          {rqsafData.map(({ id, contentDown }) => (
            <React.Fragment key={id}>
              {Array.isArray(contentDown) &&
                contentDown.map((text, index) => (
                  <React.Fragment key={`${text}-${index}`}>
                    <li>{text}</li>
                    <br />
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default CTASection;
