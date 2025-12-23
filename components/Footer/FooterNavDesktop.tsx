"use client";

import Link from "next/link";
import { ServicesPathTypes } from "../../types/commonTypes";

type Props = {
  categories: ServicesPathTypes[];
  subMap: Map<number, ServicesPathTypes[]>;
};

export default function FooterNavDesktop({ categories, subMap }: Props) {
  return (
    <div
      className="
        grid grid-cols-2 screen-size-10:grid-cols-3 screen-size-13:grid-cols-4
        screen-size-15:grid-cols-5 screen-size-18:grid-cols-6 screen-size-20:grid-cols-7
        screen-size-23:grid-cols-8 divide-x divide-gray-300
      "
    >
      {categories.map((cat) => {
        const subs = subMap.get(cat.id) || [];
        const catHref = cat.path ? `/${cat.path}` : "/";

        return (
          <section key={cat.id} className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">
              <Link className="hover:underline" href={catHref}>
                {cat.title}
              </Link>
            </h3>

            {subs.length ? (
              <ul className="space-y-1">
                {subs.map((sub) => {
                  const subHref = sub.path ? `/${sub.path}` : "/";
                  return (
                    <li key={sub.id} className="hover:underline">
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
