import Link from "next/link";
import SEOImage from "../SEOImage";
import { PageStructureTypes } from "types/commonTypes";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import { LocationTokens, applyTokens } from "./utils";

export default function HeroSection({
  pageData,
  tokens,
  breadcrumbs,
}: {
  pageData: PageStructureTypes;
  tokens?: LocationTokens;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const src = pageData.mainimage?.src
    ? `/images/${pageData.mainimage.src}`
    : "/images/home-images/offset_printing.webp";

  const alt =
    pageData.mainimage?.alt ||
    `${pageData.introsection.heading} - MSE Printing`;

  return (
    <section className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg">
      <div className="relative w-full screen-size-5:h-[400px] h-[800px]">
        <SEOImage
          src={src}
          alt={alt}
          name={pageData.mainimage?.alt || "Printing services in Minneapolis"}
          geoData={{
            latitude: 45.0229,
            longitude: -93.2793,
            location: "3839 Washington Ave N Ste. 103",
            addressRegion: "Minneapolis",
          }}
          priority
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="w-full h-[800px] screen-size-5:h-[400px]"
          fill
          objectFit="cover"
        />

        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center items-start text-white screen-size-15:text-left text-center">
          <div className="screen-size-15:w-[1200px] max-w-[1500px] screen-size-15:ml-20 ml-0">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <h1 className="screen-size-10:text-[50px] text-[30px] font-extrabold leading-tight max-w-full">
              {applyTokens(pageData.introsection.heading || "", tokens) ||
                "heading not written"}
            </h1>
            <p className="mb-2 leading-relaxed screen-size-15:my-8 my-0 screen-size-15:text-2xl text-xl">
              {applyTokens(pageData.introsection.paragraph || "", tokens) ||
                "paragraph not written"}
            </p>
            <Link
              href="/request-quote"
              aria-label="Request a Quote"
              className="inline-block bg-[#ff0015] text-white font-bold rounded-[10px] px-8 py-5 transition duration-300 hover:bg-[#ff0015] focus:scale-90"
            >
              {applyTokens(
                "Request a Quote in {{city}}, {{state_abbr}}",
                tokens
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
