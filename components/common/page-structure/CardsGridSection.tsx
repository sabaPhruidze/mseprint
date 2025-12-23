import Link from "next/link";
import SEOImage from "../SEOImage";
import { normalizeHref } from "src/helpers/urls";
type CardsGridData = {
  secondaryimages?: Array<{
    src: string;
    alt?: string;
    name?: string;
    description?: string;
    path?: string;
    priority?: boolean;
    sizes?: string;
  }>;
};

export default function CardsGridSection({
  pageData,
}: {
  pageData: CardsGridData;
}) {
  const list = pageData.secondaryimages || [];
  if (!list.length) return null;

  return (
    <section className="max-w-[1500px] mx-auto p-8">
      <div className="grid grid-cols-1 screen-size-5:grid-cols-2 screen-size-8:grid-cols-3 screen-size-10:grid-cols-4 gap-6">
        {list.map((img, i) => (
          <Link
            key={`${img.src}-${i}`}
            href={normalizeHref(img.path || "/")}
            aria-label={img.alt || "Card"}
            className="block overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-black"
          >
            <div className="h-[240px] w-full relative">
              <SEOImage
                src={`/images/${img.src}`}
                alt={img.alt || ""}
                name={img.name || img.alt || ""}
                geoData={{
                  latitude: 45.0229,
                  longitude: -93.2793,
                  location: "3839 Washington Ave N Ste. 103",
                  addressRegion: "Minneapolis",
                }}
                priority={Boolean(img.priority)}
                loading={img.priority ? undefined : "lazy"}
                sizes={img.sizes || "100vw"}
                className="object-cover w-full h-full"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-black dark:text-white mb-2">
                {img.alt || "Untitled"}
              </h3>
              <p className="text-black dark:text-white text-base">
                {img.description || "No description available."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
