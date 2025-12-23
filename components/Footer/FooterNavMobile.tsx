"use client";

import Link from "next/link";
import { ServicesPathTypes } from "../../types/commonTypes";

type Props = {
  categories: ServicesPathTypes[];
  subMap: Map<number, ServicesPathTypes[]>;
  expanded: Set<number>;
  onToggle: (id: number) => void;
};

export default function FooterNavMobile({
  categories,
  subMap,
  expanded,
  onToggle,
}: Props) {
  return (
    <div className="divide-y divide-gray-300">
      {categories.map((cat) => {
        const subs = subMap.get(cat.id) || [];
        const open = expanded.has(cat.id);
        const hasSubs = subs.length > 0;
        const catHref = cat.path ? `/${cat.path}` : "/";

        return (
          <section key={cat.id} className="p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-bold">
                <Link className="hover:underline" href={catHref}>
                  {cat.title}
                </Link>
              </h3>

              {hasSubs ? (
                <button
                  type="button"
                  onClick={() => onToggle(cat.id)}
                  aria-expanded={open}
                  aria-controls={`footer-sub-${cat.id}`}
                  className="text-xl font-bold px-2"
                >
                  {open ? "−" : "+"}
                </button>
              ) : null}
            </div>

            {hasSubs && open ? (
              <ul
                id={`footer-sub-${cat.id}`}
                className="mt-3 pl-4 border-l-2 border-gray-200 space-y-2"
              >
                {subs.map((sub) => {
                  const subHref = sub.path ? `/${sub.path}` : "/";
                  return (
                    <li key={sub.id} className="text-gray-700 hover:underline">
                      <Link href={subHref}>{sub.title}</Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
