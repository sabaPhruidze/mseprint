import { PageStructureTypes } from "types/commonTypes";

type Seg = { id: string | number; page?: string; content?: string };

export default function BulkPrinting({
  pageData,
}: {
  pageData: PageStructureTypes;
}) {
  const b = pageData.advancedfeatures?.bulkPrinting;
  const h =
    b?.heading || "pageData.advancedFeatures.bulkPrinting.heading not written";
  const list = (b?.list || []) as Seg[];
  if (!b?.heading) return null;

  const first = list[0];
  const rest = list.slice(1);

  const renderSeg = (seg: Seg) => (
    <span key={seg.id}>
      {seg.content}
      {seg.page ? (
        <strong className="font-bold"> {seg.page}</strong>
      ) : null}{" "}
    </span>
  );

  return (
    <>
      <h3
        id="bulk-printing"
        className="scroll-mt-24 text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4"
      >
        {h}
      </h3>

      {!list.length ? (
        "pageData.advancedFeatures.bulkPrinting.list not written"
      ) : (
        <>
          <details className="w-full md:hidden group mt-2" role="group">
            <summary className="cursor-pointer marker:hidden">
              {first?.content}{" "}
              {first?.page ? (
                <strong className="font-bold">{first.page}</strong>
              ) : null}
              <span className="ml-1 text-blue-600 group-open:hidden">
                see more&nbsp;…
              </span>
              <span className="ml-1 text-blue-600 hidden group-open:inline">
                see less
              </span>
            </summary>
            <p className="mt-2 px-4">{rest.map(renderSeg)}</p>
          </details>

          <p className="hidden md:block mt-2">{list.map(renderSeg)}</p>
        </>
      )}
    </>
  );
}
