import React, { FC } from "react";
import Link from "next/link";
import { PagePathTypes } from "../../types/commonTypes";

interface CTASectionProps {
  rqsafData: PagePathTypes[];
}

const CTASection: FC<CTASectionProps> = ({ rqsafData = [] }) => {
  if (!rqsafData.length) return null;

  /* ─────────── filter out empty lines ─────────── */
  const bullets = rqsafData.reduce<string[]>((acc, { contentDown }) => {
    if (Array.isArray(contentDown)) {
      contentDown.forEach((t) => {
        const trimmed = t?.trim();
        if (trimmed) acc.push(trimmed); // keep only non-blank text
      });
    }
    return acc;
  }, []);

  if (!bullets.length) return null;

  const [firstBullet, ...restBullets] = bullets;

  return (
    <section className="w-full px-4 mb-6" aria-label="Call To Action Section">
      {/* ── CTA nav ───────────────────────────────── */}
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

      {/* ── bullets with ONE accordion ────────────── */}
      <article className="mx-auto flex flex-col items-center screen-size-18:max-w-[1850px] pt-6">
        {/* mobile (≤ md) collapsible */}
        <details className="group block w-full md:hidden" role="group">
          <summary className="list-disc pl-5 text-center font-inter-medium marker:hidden cursor-pointer">
            {firstBullet}
            <span className="ml-1 text-blue-600 group-open:hidden">
              see more&nbsp;…
            </span>
            <span className="ml-1 text-blue-600 hidden group-open:inline">
              see less
            </span>
          </summary>

          <ul className="list-disc pl-5 text-center font-inter-medium mt-2">
            {restBullets.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
        </details>

        {/* desktop (≥ md) always expanded */}
        <ul className="hidden md:block list-disc pl-5 text-center font-inter-medium">
          {bullets.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default CTASection;
