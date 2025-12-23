import React from "react";
import Link from "next/link";
import SEOImage from "./SEOImage";
import { PageStructureTypes } from "types/commonTypes";
import Breadcrumbs from "./page-structure/Breadcrumbs";
import type { BreadcrumbItem } from "./page-structure/Breadcrumbs";
import OnThisPageNav from "./page-structure/OnThisPageNav";
import WhyChooseSection from "./page-structure/WhyChooseSection";
import ServicesSection from "./page-structure/ServicesSection";
import OfferingsSection from "./page-structure/OfferingsSection";
import FaqSection from "./page-structure/FaqSection";
import GetStartedSection from "./page-structure/GetStartedSection";

const TOKEN_KEYS = ["city", "state", "state_abbr", "brand", "phone"] as const;
type TokenKey = (typeof TOKEN_KEYS)[number];

type LocationTokens = Partial<Record<TokenKey, string>>;

function isTokenKey(k: string): k is TokenKey {
  return (TOKEN_KEYS as readonly string[]).includes(k);
}

function applyTokens(input?: string, t?: LocationTokens) {
  if (!input) return input ?? "";
  if (!t) return input;

  return input.replace(
    /\{\{\s*(city|state|state_abbr|brand|phone)\s*\}\}/g,
    (_match: string, key: string) => {
      if (isTokenKey(key)) {
        const val = t[key];
        return typeof val === "string" ? val : _match;
      }
      return _match;
    }
  );
}

interface PageStructureProps {
  pageData: PageStructureTypes;
  tokens?: LocationTokens;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageStructure({
  pageData,
  tokens,
  breadcrumbs,
}: PageStructureProps) {
  return (
    <>
      <main className="text-lg" role="main">
        <section className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg">
          <div className="relative w-full screen-size-5:h-[400px] h-[800px]">
            <SEOImage
              src={
                pageData.mainimage?.src
                  ? `/images/${pageData.mainimage.src}`
                  : "/images/home-images/offset_printing.webp"
              }
              alt={
                pageData.mainimage.alt ||
                `${pageData.introsection.heading} - MSE Printing`
              }
              name={
                pageData.mainimage.alt || "Printing services in Minneapolis"
              }
              geoData={{
                latitude: 45.0229,
                longitude: -93.2793,
                location: "3839 Washington Ave N Ste. 103",
                addressRegion: "Minneapolis",
              }}
              priority={true}
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
              className="w-full h-[800px]  screen-size-5:h-[400px]"
              fill
              objectFit="cover"
            />

            <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center items-start text-white screen-size-15:text-left text-center">
              <div className="screen-size-15:w-[1200px] max-w-[1500px] screen-size-15:ml-20 ml-0">
                <Breadcrumbs breadcrumbs={breadcrumbs} />

                <h1 className="screen-size-10:text-[50px] text-[30px] font-extrabold leading-tight text-white max-w-full">
                  {applyTokens(pageData.introsection.heading, tokens) ||
                    "pageData.introSection.heading not written"}
                </h1>
                <p className="mb-2 leading-relaxed screen-size-15:my-8 my-0 screen-size-15:text-2xl text-xl">
                  {applyTokens(pageData.introsection.paragraph, tokens) ||
                    "pageData.introSection.paragraph not written"}
                </p>
                {/* write only request a quote and will be static for all  */}
                <Link
                  href="/request-quote"
                  aria-label={`Request a Quote`}
                  className="inline-block bg-[#ff0015] text-white font-bold border-none rounded-[10px] px-8 py-5 transition duration-300 ease-in-out hover:bg-[#ff0015] hover:text-white focus:scale-90"
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
        <OnThisPageNav pageData={pageData} />
        <div className="container mx-auto p-8 max-w-[1500px] text-left">
          <div className="container py-8 max-w-[1500px]">
            <WhyChooseSection pageData={pageData} />
            {/* SERVICES SECTION - No collapse */}
            <ServicesSection pageData={pageData} tokens={tokens} />
            {/* OFFERINGS SECTION - No collapse */}
            <OfferingsSection pageData={pageData} tokens={tokens} />
          </div>
          {pageData.advancedfeatures?.heading && (
            <>
              {/* ─────────── ADVANCED FEATURES ─────────── */}
              <h2
                id="advanced-features"
                className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
              >
                {pageData.advancedfeatures.heading}
              </h2>

              {/* ── Customisation & Finishing ── */}
              <h3
                id="customization-finishing"
                className="scroll-mt-24 text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4"
              >
                {pageData.advancedfeatures.customizationFinishing?.heading ||
                  "pageData.advancedFeatures.customizationFinishing.heading not written"}
              </h3>
              {(() => {
                const full =
                  pageData.advancedfeatures.customizationFinishing
                    ?.paragraph1 ||
                  "pageData.advancedFeatures.customizationFinishing.paragraph1 not written";
                const s = full.split(/(?<=[.!?])\s+/);
                const preview = s.slice(0, 3).join(" ");
                const rest = s.slice(3).join(" ");

                return (
                  <>
                    {/* mobile accordion */}
                    <details
                      className="w-full md:hidden group mt-2"
                      role="group"
                    >
                      <summary className="cursor-pointer marker:hidden">
                        {preview}
                        {rest && (
                          <>
                            <span className="ml-1 text-blue-600 group-open:hidden">
                              see more&nbsp;…
                            </span>
                            <span className="ml-1 text-blue-600 hidden group-open:inline">
                              see less
                            </span>
                          </>
                        )}
                      </summary>
                      {rest && <p className="mt-2 px-4">{rest}</p>}
                    </details>

                    {/* desktop full */}
                    <p className="hidden md:block mt-2">{full}</p>
                  </>
                );
              })()}

              {/* list */}
              {pageData.advancedfeatures.customizationFinishing?.list
                ?.length ? (
                <>
                  {/* mobile list accordion */}
                  <details className="w-full md:hidden group mt-2" role="group">
                    <summary className="cursor-pointer marker:hidden">
                      <strong>
                        {
                          pageData.advancedfeatures.customizationFinishing
                            .list[0].page
                        }
                      </strong>
                      <span>
                        {" "}
                        -{" "}
                        {
                          pageData.advancedfeatures.customizationFinishing
                            .list[0].content
                        }
                      </span>
                      <span className="ml-1 text-blue-600 group-open:hidden">
                        see more&nbsp;…
                      </span>
                      <span className="ml-1 text-blue-600 hidden group-open:inline">
                        see less
                      </span>
                    </summary>
                    <ul className="list-disc list-inside mt-2 space-y-2 px-4">
                      {pageData.advancedfeatures.customizationFinishing.list
                        .slice(1)
                        .map((item) => (
                          <li key={item.id}>
                            <strong>{item.page}</strong>
                            <span> - {item.content}</span>
                          </li>
                        ))}
                    </ul>
                  </details>

                  {/* desktop list */}
                  <ul className="hidden md:block list-disc list-inside mt-2 space-y-2">
                    {pageData.advancedfeatures.customizationFinishing.list.map(
                      (item) => (
                        <li key={item.id}>
                          <strong>{item.page}</strong>
                          <span> - {item.content}</span>
                        </li>
                      )
                    )}
                  </ul>
                </>
              ) : (
                "pageData.advancedFeatures.customizationFinishing.list not written"
              )}

              {/* ── Bulk Printing ── */}
              <h3
                id="bulk-printing"
                className="scroll-mt-24 text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4 screen-size-10:text-left"
              >
                {pageData.advancedfeatures.bulkPrinting?.heading ||
                  "pageData.advancedFeatures.bulkPrinting.heading not written"}
              </h3>
              {pageData.advancedfeatures.bulkPrinting?.list?.length
                ? (() => {
                    const first =
                      pageData.advancedfeatures.bulkPrinting.list[0];
                    const rest =
                      pageData.advancedfeatures.bulkPrinting.list.slice(1);

                    return (
                      <>
                        {/* mobile accordion */}
                        <details
                          className="w-full md:hidden group mt-2"
                          role="group"
                        >
                          <summary className="cursor-pointer marker:hidden">
                            <span>{first.content}</span>
                            <strong className="font-bold"> {first.page}</strong>
                            <span className="ml-1 text-blue-600 group-open:hidden">
                              see more&nbsp;…
                            </span>
                            <span className="ml-1 text-blue-600 hidden group-open:inline">
                              see less
                            </span>
                          </summary>
                          <p className="mt-2 px-4">
                            {rest.map((seg) => (
                              <span key={seg.id}>
                                {seg.content}
                                <strong className="font-bold">
                                  {" "}
                                  {seg.page}
                                </strong>{" "}
                              </span>
                            ))}
                          </p>
                        </details>

                        {/* desktop full */}
                        <p className="hidden md:block mt-2">
                          {pageData.advancedfeatures.bulkPrinting.list.map(
                            (seg) => (
                              <span key={seg.id}>
                                {seg.content}
                                <strong className="font-bold">
                                  {" "}
                                  {seg.page}
                                </strong>{" "}
                              </span>
                            )
                          )}
                        </p>
                      </>
                    );
                  })()
                : "pageData.advancedFeatures.bulkPrinting.list not written"}

              {/* ── Convenient Printing list ── */}
              <h3
                id="convenient-printing"
                className="text-xl sm:text-xl lg:text-2xl font-inter-bold mt-4 screen-size-10:text-left"
              >
                {pageData.advancedfeatures.convenientPrinting?.heading}
              </h3>
              {pageData.advancedfeatures.convenientPrinting?.list?.length ? (
                <>
                  {/* mobile accordion */}
                  <details className="w-full md:hidden group mt-2" role="group">
                    <summary className="cursor-pointer marker:hidden">
                      {pageData.advancedfeatures.convenientPrinting.list[0]
                        .page && (
                        <strong>
                          {
                            pageData.advancedfeatures.convenientPrinting.list[0]
                              .page
                          }
                          :{" "}
                        </strong>
                      )}
                      <span>
                        {
                          pageData.advancedfeatures.convenientPrinting.list[0]
                            .content
                        }
                      </span>
                      <span className="ml-1 text-blue-600 group-open:hidden">
                        see more&nbsp;…
                      </span>
                      <span className="ml-1 text-blue-600 hidden group-open:inline">
                        see less
                      </span>
                    </summary>
                    <ul className="list-disc list-inside mt-2 space-y-2 px-4">
                      {pageData.advancedfeatures.convenientPrinting.list
                        .slice(1)
                        .map((item) => (
                          <li key={item.id}>
                            {item.page && <strong>{item.page}: </strong>}
                            {item.content && <span>{item.content}</span>}
                          </li>
                        ))}
                    </ul>
                  </details>

                  {/* desktop list */}
                  <ul className="hidden md:block list-disc list-inside mt-2 space-y-2">
                    {pageData.advancedfeatures.convenientPrinting.list.map(
                      (item) => (
                        <li key={item.id}>
                          {item.page && <strong>{item.page}: </strong>}
                          {item.content && <span>{item.content}</span>}
                        </li>
                      )
                    )}
                  </ul>
                </>
              ) : (
                "pageData.advancedFeatures.convenientPrinting.list not written"
              )}
            </>
          )}

          {pageData.howtogetstarted?.heading && (
            <>
              <h2
                id="how-to-get-started"
                className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 screen-size-10:text-left"
              >
                {pageData.howtogetstarted.heading}
              </h2>
              {pageData.howtogetstarted?.list?.length ? (
                <>
                  {/* mobile accordion */}
                  <details className="w-full md:hidden group mt-2" role="group">
                    <summary className="cursor-pointer marker:hidden">
                      <strong>{pageData.howtogetstarted.list[0].page}: </strong>
                      <span>{pageData.howtogetstarted.list[0].content}</span>
                      <span className="ml-1 text-blue-600 group-open:hidden">
                        see more&nbsp;…
                      </span>
                      <span className="ml-1 text-blue-600 hidden group-open:inline">
                        see less
                      </span>
                    </summary>
                    <ol className="list-decimal list-inside mt-2 space-y-2 px-4">
                      {pageData.howtogetstarted.list.slice(1).map((step) => (
                        <li key={step.id}>
                          <strong>{step.page}: </strong>
                          <span>{step.content}</span>
                        </li>
                      ))}
                    </ol>
                  </details>

                  {/* desktop list */}
                  <ol className="hidden md:block list-decimal list-inside mt-2 space-y-2">
                    {pageData.howtogetstarted.list.map((step) => (
                      <li key={step.id}>
                        <strong>{step.page}: </strong>
                        <span>{step.content}</span>
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                "pageData.howToGetStarted.list not written"
              )}
            </>
          )}
          {/* ── Why Trust Us ── */}
          {pageData.whytrustus?.heading && (
            <>
              <h2
                id="why-trust-us"
                className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 screen-size-10:text-left"
              >
                {pageData.whytrustus.heading}
              </h2>
              {pageData.whytrustus?.list?.length ? (
                <>
                  {/* mobile accordion */}
                  <details className="w-full md:hidden group mt-2" role="group">
                    <summary className="cursor-pointer marker:hidden">
                      <strong>✅ {pageData.whytrustus.list[0].page}: </strong>
                      <span>{pageData.whytrustus.list[0].content}</span>
                      <span className="ml-1 text-blue-600 group-open:hidden">
                        see more&nbsp;…
                      </span>
                      <span className="ml-1 text-blue-600 hidden group-open:inline">
                        see less
                      </span>
                    </summary>
                    <ul className="list-disc list-inside mt-2 space-y-2 px-4">
                      {pageData.whytrustus.list.slice(1).map((item) => (
                        <li key={item.id}>
                          <strong>✅ {item.page}: </strong>
                          <span>{item.content}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  {/* desktop list */}
                  <ul className="hidden md:block list-disc list-inside mt-2 space-y-2">
                    {pageData.whytrustus.list.map((item) => (
                      <li key={item.id}>
                        <strong>✅ {item.page}: </strong>
                        <span>{item.content}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                "pageData.whyTrustUs.list not written"
              )}
            </>
          )}
          {/* FAQs */}
          <FaqSection pageData={pageData} tokens={tokens} />
          {/* FAQ */}
          <GetStartedSection pageData={pageData} />
        </div>
      </main>
    </>
  );
}
