import React from "react";
import Link from "next/link";
import SEOImage from "./SEOImage";
import { PageStructureTypes } from "types/commonTypes";
import ContactUs from "./ContactUs";

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

type FAQListItem = { question: string; answer: string };

function stripTags(s: string) {
  return (s || "").replace(/<[^>]*>/g, "").trim();
}

function buildFaqJsonLd(list: FAQListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((it) => ({
      "@type": "Question",
      name: stripTags(it.question).slice(0, 200),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripTags(it.answer).slice(0, 5000),
      },
    })),
  };
}

type BreadcrumbItem = { href: string; label: string };

interface PageStructureProps {
  pageData: PageStructureTypes;
  tokens?: LocationTokens;
  breadcrumbs?: BreadcrumbItem[];
}

function slugify(s: string) {
  return (s || "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function PageStructure({
  pageData,
  tokens,
  breadcrumbs,
}: PageStructureProps) {
  const rawFaqs = (pageData.faqs?.list ?? []) as Array<Partial<FAQListItem>>;
  const faqListForSchema: FAQListItem[] = rawFaqs
    .map(({ question, answer }) => ({
      question: typeof question === "string" ? question : "",
      answer: typeof answer === "string" ? answer : "",
    }))
    .filter((f) => f.question && f.answer);

  const faqJsonLd = faqListForSchema.length
    ? buildFaqJsonLd(faqListForSchema)
    : null;

  return (
    <>
      <a
        href="#main-content"
        className="
    hidden screen-size-13:inline-flex items-center
    absolute top-[158px] left-6 z-50
    text-white border border-white rounded-lg
    no-underline
    px-2 py-3 screen-size-5:px-4 screen-size-5:py-2
    hover:bg-white hover:text-black  hover:border-0
            focus:scale-95
            transition-all
            duration-500
    font-inter-extrabold text-[12px] screen-size-5:text-[18px]
  "
      >
        Skip to content
      </a>
      <main id="main-content" className="text-lg" role="main">
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
              geoData={
                pageData.mainimage.geoData || {
                  latitude: 45.023,
                  longitude: -93.279,
                  location: "3839 Washington Ave N Ste. 103",
                  addressRegion: "Minneapolis",
                }
              }
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
                {/* Breadcrumbs (UI + JSON-LD) */}
                {breadcrumbs?.length ? (
                  <nav
                    aria-label="Breadcrumb"
                    className="absolute top-[0px] left-[2px] z-20 px-2 py-1 rounded bg-black/30 backdrop-blur-sm"
                  >
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": "BreadcrumbList",
                          itemListElement: breadcrumbs.map((bc, i) => ({
                            "@type": "ListItem",
                            position: i + 1,
                            name: bc.label,
                            item: bc.href.startsWith("http")
                              ? bc.href
                              : `https://www.mseprinting.com${bc.href.startsWith("/") ? "" : "/"}${bc.href}`,
                          })),
                        }),
                      }}
                    />
                    <ol className="flex flex-wrap gap-1 text-[12px] sm:text-sm text-white/90">
                      {breadcrumbs.map((bc, i) => {
                        const isLast = i === breadcrumbs.length - 1;
                        return (
                          <li key={bc.href} className="flex items-center">
                            {i > 0 && <span className="mx-1">›</span>}
                            {isLast ? (
                              <span
                                aria-current="page"
                                className="font-semibold"
                              >
                                {bc.label}
                              </span>
                            ) : (
                              <Link
                                href={bc.href}
                                className="underline-offset-2 hover:underline"
                              >
                                {bc.label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </nav>
                ) : null}

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
        <nav
          aria-label="On this page"
          className="hidden md:block container mx-auto px-8 max-w-[1500px] mt-4"
        >
          <h2 className="sr-only">On this page</h2>
          <ul className="flex flex-wrap gap-3 text-sm text-blue-600">
            {[
              {
                id: "why-choose",
                label: "Why choose",
                exists: Boolean(pageData.whychoosesection?.heading),
              },
              {
                id: "services",
                label: "Services",
                exists: Boolean(pageData.servicessection?.heading),
              },
              {
                id: "offerings",
                label: "Related services",
                exists: Boolean(pageData.offeringssection?.list?.length),
              },
              {
                id: "advanced-features",
                label: "Advanced features",
                exists: Boolean(pageData.advancedfeatures?.heading),
              },
              {
                id: "customization-finishing",
                label: "Customization & finishing",
                exists: Boolean(
                  pageData.advancedfeatures?.customizationFinishing?.heading
                ),
              },
              {
                id: "bulk-printing",
                label: "Bulk printing",
                exists: Boolean(
                  pageData.advancedfeatures?.bulkPrinting?.heading
                ),
              },
              {
                id: "convenient-printing",
                label: "Convenient printing",
                exists: Boolean(
                  pageData.advancedfeatures?.convenientPrinting?.heading
                ),
              },
              {
                id: "how-to-get-started",
                label: "Get started",
                exists: Boolean(pageData.howtogetstarted?.heading),
              },
              {
                id: "why-trust-us",
                label: "Why trust us",
                exists: Boolean(pageData.whytrustus?.heading),
              },
              {
                id: "faqs",
                label: "FAQs",
                exists: Boolean(pageData.faqs?.list?.length),
              },
              {
                id: "get-started",
                label: "Contact / CTA",
                exists: Boolean(pageData.getstartedsection?.heading),
              },
            ]
              .filter((x) => x.exists)
              .map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="underline-offset-2 hover:underline"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div className="container mx-auto p-8 max-w-[1500px] text-left">
          <div className="container py-8 max-w-[1500px]">
            <h2
              id="why-choose"
              className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white my-6"
            >
              {pageData.whychoosesection.heading ||
                "pageData.whyChooseSection.heading not written"}
            </h2>
            <div className="w-full screen-size-5:w-[400px] screen-size-10:w-[500px] h-[400px] mx-auto md:float-right md:ml-2 md:mr-0">
              <SEOImage
                src={
                  pageData.secondaryimage?.src
                    ? `/images/${pageData.secondaryimage.src}`
                    : "/images/home-images/additional/offset_printing_right.webp"
                }
                alt={
                  pageData.secondaryimage?.alt ||
                  `${pageData.introsection.heading} - MSE Printing`
                }
                name={
                  pageData.secondaryimage?.alt ||
                  "MSE Printing | print your product here"
                }
                geoData={
                  pageData.secondaryimage?.geoData || {
                    latitude: 45.023,
                    longitude: -93.279,
                    location: "3839 Washington Ave N Ste. 103",
                    addressRegion: "Minneapolis",
                  }
                }
                priority={pageData.secondaryimage?.priority || false}
                fetchPriority="high"
                decoding="async"
                loading={pageData.secondaryimage?.priority ? undefined : "lazy"}
                sizes="(min-width: 768px) 500px, 100vw"
                className="w-full h-full"
                fill
                objectFit="cover"
              />
            </div>
            <div className="mt-4 text-left">
              {(() => {
                const p1 =
                  pageData.whychoosesection.paragraph1 ??
                  "pageData.whyChooseSection.paragraph1 not written";
                const p2 = pageData.whychoosesection.paragraph2 ?? "";
                const full = `${p1}${p2 ? " " + p2 : ""}`;
                const sentences = full.split(/(?<=[.!?])\s+/);
                const preview = sentences.slice(0, 3).join(" ");
                const rest = sentences.slice(3).join(" ");

                return (
                  <>
                    {/* mobile accordion */}
                    <details
                      className="w-full md:hidden group text-left"
                      role="group"
                    >
                      <summary className="cursor-pointer marker:hidden list-none text-left">
                        <span>{preview}</span>
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
                      {rest && <div className="mt-2 text-left">{rest}</div>}
                    </details>

                    {/* desktop – always expanded */}
                    <div className="hidden md:block text-left">
                      <p className="text-left">{p1}</p>
                      {p2 && <p className="mt-2 text-left">{p2}</p>}
                    </div>
                  </>
                );
              })()}

              {/* WHY-CHOOSE list with mobile toggle ---------------------------------- */}
              {pageData.whychoosesection.list?.length ? (
                <>
                  {/* mobile accordion */}
                  <details
                    className="w-full md:hidden group mt-2 text-left"
                    role="group"
                  >
                    <summary className="cursor-pointer marker:hidden list-none text-left">
                      <div className="text-left">
                        <strong>
                          {pageData.whychoosesection.list[0].page}
                        </strong>
                        <span>
                          {" "}
                          - {pageData.whychoosesection.list[0].content}
                        </span>
                        <span className="ml-1 text-blue-600 group-open:hidden">
                          see more&nbsp;…
                        </span>
                        <span className="ml-1 text-blue-600 hidden group-open:inline">
                          see less
                        </span>
                      </div>
                    </summary>

                    <ul className="list-disc list-inside mt-2 space-y-2 text-left">
                      {pageData.whychoosesection.list.slice(1).map((item) => (
                        <li key={item.id} className="text-left">
                          <strong>{item.page}</strong>
                          <span> - {item.content}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  {/* desktop – always expanded */}
                  <ul className="hidden md:block list-disc list-inside mt-2 space-y-2 text-left">
                    {pageData.whychoosesection.list.map((item) => (
                      <li key={item.id} className="text-left">
                        <strong>{item.page}</strong>
                        <span> - {item.content}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                ""
              )}
            </div>

            {/* SERVICES SECTION - No collapse */}
            <h2
              id="services"
              className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
            >
              {applyTokens(pageData.servicessection?.heading, tokens) ||
                "pageData.servicesSection.heading not written"}
            </h2>
            <p className="mt-4 text-left">
              {pageData.servicessection?.paragraph1 ||
                "pageData.servicesSection.paragraph1 not written"}
            </p>

            {/* OFFERINGS SECTION - No collapse */}
            {/* ── Offerings section ─────────────────────────────────────── */}
            <div className="text-left">
              {/* heading */}
              <h2 id="offerings" className="font-semibold">
                Related services in{" "}
                {applyTokens("{{city}}, {{state_abbr}}", tokens)}
              </h2>

              {/* paragraph */}
              {pageData.offeringssection?.paragraph1 && (
                <p className="mt-2">{pageData.offeringssection.paragraph1}</p>
              )}

              {/* OFFERINGS list ------------------------------------------- */}
              {pageData.offeringssection?.list?.length ? (
                <>
                  {/* mobile accordion */}
                  <details className="w-full md:hidden group mt-2" role="group">
                    <summary className="cursor-pointer marker:hidden list-none p-0">
                      <Link
                        href={pageData.offeringssection.list[0].path || "/"}
                        className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        aria-label={`Learn more about ${pageData.offeringssection.list[0].page}`}
                      >
                        {pageData.offeringssection.list[0].page}
                      </Link>
                      {" – "}
                      {pageData.offeringssection.list[0].content}
                      <span className="ml-1 text-blue-600 group-open:hidden">
                        see more&nbsp;…
                      </span>
                      <span className="ml-1 text-blue-600 hidden group-open:inline">
                        see less
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-2 pl-0 list-none">
                      {pageData.offeringssection.list.slice(1).map((item) => {
                        const anchorId = slugify(item.page);
                        return (
                          <li id={anchorId} key={item.id}>
                            <Link
                              href={item.path || "/"}
                              className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                              aria-label={`Learn more about ${item.page}`}
                            >
                              {item.page}
                            </Link>
                            {item.content}
                          </li>
                        );
                      })}
                    </ul>
                  </details>

                  {/* desktop – always expanded */}
                  <ul className="hidden md:block mt-2 space-y-2 pl-0 list-none">
                    {pageData.offeringssection.list.map((item) => {
                      const anchorId = slugify(item.page);
                      return (
                        <li
                          id={anchorId}
                          key={item.id}
                          className="scroll-mt-24"
                        >
                          <Link
                            href={item.path || "/"}
                            className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            aria-label={`Learn more about ${item.page}`}
                          >
                            {item.page}
                          </Link>
                          {" – "}
                          {item.content}
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <p>No offerings available</p>
              )}
            </div>
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
          {/* FAQs + synced JSON-LD */}
          {faqJsonLd && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
          )}
          <section className="text-left">
            {/* heading */}
            <h2
              id="faqs"
              className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6"
            >
              {applyTokens(pageData.faqs?.heading, tokens) ??
                "pageData.faqs?.heading not written"}
            </h2>

            {pageData.faqs?.list?.length ? (
              <>
                {/* ─── mobile: show first FAQ, toggle the rest ─── */}
                <details className="w-full md:hidden group mt-2" role="group">
                  <summary className="cursor-pointer marker:hidden list-none p-0">
                    <span className="block font-inter-bold">
                      Q:&nbsp;{pageData.faqs.list[0].question}
                    </span>
                    <span className="block">
                      A:&nbsp;{pageData.faqs.list[0].answer}
                    </span>

                    <span className="ml-1 text-blue-600 group-open:hidden">
                      see more&nbsp;…
                    </span>
                    <span className="ml-1 text-blue-600 hidden group-open:inline">
                      see less
                    </span>
                  </summary>

                  {/* remaining FAQs */}
                  {pageData.faqs.list.slice(1).map((faqItem, idx) => (
                    <div className="mt-4" key={idx}>
                      <h3
                        id={`faq-${slugify(faqItem.question)}`}
                        className="scroll-mt-24 text-xl lg:text-2xl font-inter-bold text-black dark:text-white"
                      >
                        Q:&nbsp;{faqItem.question}
                      </h3>
                      <p className="mt-2">A:&nbsp;{faqItem.answer}</p>
                    </div>
                  ))}
                </details>

                {/* ─── desktop: all FAQs visible ─── */}
                <div className="hidden md:block">
                  {pageData.faqs.list.map((faqItem, idx) => (
                    <div className="mt-4" key={idx}>
                      <h3
                        id={`faq-${slugify(faqItem.question)}`}
                        className="scroll-mt-24 text-xl lg:text-2xl font-inter-bold text-black dark:text-white"
                      >
                        Q:&nbsp;{faqItem.question}
                      </h3>
                      <p className="mt-2">A:&nbsp;{faqItem.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              "pageData.faqs?.list not written"
            )}
          </section>
          {/* FAQ */}
          {/* Get Started Section */}
          <h2
            id="get-started"
            className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 text-left"
          >
            {pageData.getstartedsection?.heading ??
              "pageData.getStartedSection?.heading not written"}
          </h2>
          <p className="mt-4">
            {pageData.getstartedsection?.steps?.map((item) => {
              // Normalise whitespace for cleaner matching
              const content = item.content?.trim() ?? "";

              // Decide how to render the “content” part
              let renderedContent: React.ReactNode = null;

              if (content.includes("@")) {
                // E‑mail
                renderedContent = (
                  <a
                    href={`mailto:${content}`}
                    className="text-blue-600 font-semibold "
                  >
                    {content}
                  </a>
                );
              } else if (/^\d{3}-\d{3}-\d{4}$/.test(content)) {
                // Phone in 763‑542‑8812 format
                renderedContent = (
                  <a
                    href={`tel:${content.replace(/-/g, "")}`}
                    className="text-blue-600 font-semibold "
                  >
                    {content}
                  </a>
                );
              } else {
                // Anything else, including the “MSE Printing” text
                renderedContent = (
                  <span className="text-blue-600 font-semibold">{content}</span>
                );
              }
              return (
                <span key={item.id}>
                  {item.page && <span>{` ${item.page} `}</span>}
                  {renderedContent}
                </span>
              );
            }) ?? "pageData.getStartedSection?.steps not written"}
          </p>
          <p className="mt-2">
            {pageData.getstartedsection?.finalParagraph ??
              "pageData.getStartedSection?.finalParagraph not written"}
          </p>
        </div>
      </main>
      <ContactUs />
    </>
  );
}
