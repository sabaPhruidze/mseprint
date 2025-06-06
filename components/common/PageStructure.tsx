import React from "react";
import Link from "next/link";
import SEOImage from "./SEOImage";
import { PageStructureTypes } from "types/commonTypes";

interface PageStructureProps {
  pageData: PageStructureTypes;
}

export default function PageStructure({ pageData }: PageStructureProps) {
  return (
    <div className="text-lg">
      <section
        className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg"
        aria-labelledby="offset-printing-heading"
      >
        <div className="relative w-full screen-size-5:h-[400px] h-[700px]">
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
            name={pageData.mainimage.alt || "Printing services in Minneapolis"}
            geoData={
              pageData.mainimage.geoData || {
                latitude: 45.023,
                longitude: -93.279,
                location: "3839 N Washington Ave Ste. 101",
                addressRegion: "Minneapolis",
              }
            }
            priority={pageData.mainimage.priority || false}
            loading={pageData.mainimage.priority ? undefined : "lazy"}
            sizes={
              pageData.mainimage.sizes ||
              "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            }
            className="w-full h-[700px]  screen-size-5:h-[400px]"
            fill={true}
            objectFit="cover"
          />

          <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center items-start text-white screen-size-15:text-left text-center">
            <div className="screen-size-15:w-[1200px] max-w-[1500px] screen-size-15:ml-20 ml-0">
              <h1 className="screen-size-10:text-[50px] text-[30px] font-extrabold leading-tight text-white max-w-full">
                {pageData.introsection.heading ||
                  "pageData.introSection.heading not written"}
              </h1>
              <p className="mb-2 leading-relaxed screen-size-15:my-8 my-0 screen-size-15:text-2xl text-xl">
                {pageData.introsection.paragraph ||
                  "pageData.introSection.paragraph not written"}
              </p>
              {/* write only request a quote and will be static for all  */}
              <Link
                href="/request-quote"
                aria-label={`Request a Quote`}
                className="inline-block bg-[#ff0015] text-white font-bold border-none rounded-[10px] px-8 py-5 transition duration-300 ease-in-out hover:bg-[#ff0015] hover:text-white focus:scale-90"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-8 max-w-[1500px] text-left">
        <div className="container py-8 max-w-[1500px]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white my-6">
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
                  location: "3839 N Washington Ave Ste. 101",
                  addressRegion: "Minneapolis",
                }
              }
              priority={pageData.secondaryimage?.priority || false}
              loading={pageData.secondaryimage?.priority ? undefined : "lazy"}
              sizes={
                pageData.secondaryimage?.sizes ||
                "(min-width: 768px) 600px, 100vw"
              }
              className="w-full h-full"
              fill={true}
              objectFit="cover"
            />
          </div>
          <div className="mt-4 text-left">
            {/* WHY CHOOSE – paragraphs 1 & 2 with mobile toggle */}
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
                      <strong>{pageData.whychoosesection.list[0].page}</strong>
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6">
            {pageData.servicessection?.heading ||
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
            <h2 className="font-semibold">
              {pageData.offeringssection?.heading ||
                "pageData.offeringsSection.heading not written"}
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
                    {pageData.offeringssection.list.slice(1).map((item) => (
                      <li key={item.id}>
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
                    ))}
                  </ul>
                </details>

                {/* desktop – always expanded */}
                <ul className="hidden md:block mt-2 space-y-2 pl-0 list-none">
                  {pageData.offeringssection.list.map((item) => (
                    <li key={item.id}>
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
                  ))}
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6">
              {pageData.advancedfeatures.heading}
            </h2>

            {/* ── Customisation & Finishing ── */}
            <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4">
              {pageData.advancedfeatures.customizationFinishing?.heading ||
                "pageData.advancedFeatures.customizationFinishing.heading not written"}
            </h3>
            {(() => {
              const full =
                pageData.advancedfeatures.customizationFinishing?.paragraph1 ||
                "pageData.advancedFeatures.customizationFinishing.paragraph1 not written";
              const s = full.split(/(?<=[.!?])\s+/);
              const preview = s.slice(0, 3).join(" ");
              const rest = s.slice(3).join(" ");

              return (
                <>
                  {/* mobile accordion */}
                  <details className="w-full md:hidden group mt-2" role="group">
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
            {pageData.advancedfeatures.customizationFinishing?.list?.length ? (
              <>
                {/* mobile list accordion */}
                <details className="w-full md:hidden group mt-2" role="group">
                  <summary className="cursor-pointer marker:hidden">
                    <strong>
                      {
                        pageData.advancedfeatures.customizationFinishing.list[0]
                          .page
                      }
                    </strong>
                    <span>
                      {" "}
                      -{" "}
                      {
                        pageData.advancedfeatures.customizationFinishing.list[0]
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
            <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4 screen-size-10:text-left">
              {pageData.advancedfeatures.bulkPrinting?.heading ||
                "pageData.advancedFeatures.bulkPrinting.heading not written"}
            </h3>
            {pageData.advancedfeatures.bulkPrinting?.list?.length
              ? (() => {
                  const first = pageData.advancedfeatures.bulkPrinting.list[0];
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold mt-6 screen-size-10:text-left">
              {pageData.advancedfeatures.convenientPrinting?.heading}
            </h2>
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

            {/* ── How to Get Started ── */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 screen-size-10:text-left">
              {pageData.howtogetstarted?.heading ||
                "pageData.howToGetStarted.heading not written"}
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

            {/* ── Why Trust Us ── */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 screen-size-10:text-left">
              {pageData.whytrustus?.heading ||
                "pageData.whyTrustUs.heading not written"}
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
        <section className="text-left">
          {/* heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6">
            {pageData.faqs?.heading ?? "pageData.faqs?.heading not written"}
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
                    <h3 className="text-xl lg:text-2xl font-inter-bold text-black dark:text-white">
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
                    <h3 className="text-xl lg:text-2xl font-inter-bold text-black dark:text-white">
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
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 text-left">
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
    </div>
  );
}
