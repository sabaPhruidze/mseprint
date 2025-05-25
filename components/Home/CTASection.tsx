/* CTASection.tsx – Server Component (no "use client") */
import Link from "next/link";
import { PagePathTypes } from "../../types/commonTypes";

interface CTASectionProps {
  rqsafData: PagePathTypes[];
}

export default function CTASection({ rqsafData = [] }: CTASectionProps) {
  if (!rqsafData.length) return null;

  /* ── extract non-empty bullet lines ── */
  const bullets = rqsafData.reduce<string[]>((acc, { contentDown }) => {
    if (Array.isArray(contentDown)) {
      contentDown.forEach((t) => {
        const trimmed = t?.trim();
        if (trimmed) acc.push(trimmed);
      });
    }
    return acc;
  }, []);

  if (!bullets.length) return null;
  const [firstBullet, ...restBullets] = bullets;

  return (
    <section className="w-full mb-6" aria-label="Call To Action Section">
      {/* ── CTA navigation bar ─────────────────────── */}
      <nav
        className="flex h-20 items-center justify-center bg-gray-300 dark:bg-darkGray"
        role="navigation"
        aria-label="Primary Navigation"
      >
        <ul className="flex items-center justify-center">
          {rqsafData.map(({ id, path, page }) => (
            <li key={id}>
              <Link
                href={path || "/"}
                className="
                  mx-2 rounded-full border-2 border-red bg-red px-2 py-3
                  font-inter-extrabold text-white transition-all duration-300
                  hover:scale-105 hover:bg-red-700 hover:border-red-700
                  focus:scale-95 screen-size-4:px-6
                  dark:border-darkRed dark:bg-darkRed
                "
                aria-label={`Navigate to ${page}`}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Bullets: accordion on mobile, two-col on desktop ── */}
      <article className="mx-auto w-full max-w-[1850px] p-10">
        {/* Mobile (≤ md) collapsible list */}
        <details className="group block w-full md:hidden" role="group">
          <summary className="cursor-pointer list-none font-inter-medium text-left">
            <div className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black dark:bg-white" />
              <div>
                {firstBullet}
                <span className="ml-1 text-blue-600 group-open:hidden">
                  see more…
                </span>
                <span className="ml-1 hidden text-blue-600 group-open:inline">
                  see less
                </span>
              </div>
            </div>
          </summary>

          <div className="mt-2 space-y-2">
            {restBullets.map((text, idx) => (
              <div key={idx} className="flex items-start">
                <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                <span className="font-inter-medium">{text}</span>
              </div>
            ))}
          </div>
        </details>

        {/* Desktop (≥ md) two-column static list */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {bullets.map((text, idx) => (
              <div
                key={idx}
                className="flex w-full items-start break-inside-avoid"
              >
                <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                <span className="flex-1 text-left font-inter-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
