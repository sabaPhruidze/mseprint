import Link from "next/link";
import { PageStructureTypes } from "types/commonTypes";
import { normalizeHref } from "src/helpers/urls";
import { LocationTokens, applyTokens, slugify } from "./utils";

type OfferingItem = {
  id: string | number;
  page: string;
  content: string;
  path: string;
};

export default function OfferingsSection({
  pageData,
  tokens,
}: {
  pageData: PageStructureTypes;
  tokens?: LocationTokens;
}) {
  const list = (pageData.offeringssection?.list || []) as OfferingItem[];
  if (!list.length) return <p>No offerings available</p>;

  return (
    <section className="text-left">
      <h2 id="offerings" className="font-semibold">
        Related services in {applyTokens("{{city}}, {{state_abbr}}", tokens)}
      </h2>

      {pageData.offeringssection?.paragraph1 && (
        <p className="mt-2">{pageData.offeringssection.paragraph1}</p>
      )}

      <details className="w-full md:hidden group mt-2" role="group">
        <summary className="cursor-pointer marker:hidden list-none p-0">
          <span className="font-bold">{list[0].page}</span> {" – "}
          <span>{list[0].content}</span>
          <span className="ml-1 text-blue-600 group-open:hidden">
            see more&nbsp;…
          </span>
          <span className="ml-1 text-blue-600 hidden group-open:inline">
            see less
          </span>
        </summary>
        <ul className="mt-2 space-y-2 pl-0 list-none">
          {list.map((it) => (
            <li key={it.id}>
              <Link
                href={normalizeHref(it.path)}
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                {it.page}
              </Link>{" "}
              – {it.content}
            </li>
          ))}
        </ul>
      </details>

      <ul className="hidden md:block mt-2 space-y-2 pl-0 list-none">
        {list.map((it) => (
          <li key={it.id} id={slugify(it.page)} className="scroll-mt-24">
            <Link
              href={normalizeHref(it.path)}
              className="font-bold text-blue-600 hover:text-blue-800"
            >
              {it.page}
            </Link>{" "}
            – {it.content}
          </li>
        ))}
      </ul>
    </section>
  );
}
