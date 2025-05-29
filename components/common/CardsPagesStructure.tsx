import React from "react";
import Link from "next/link";
import SEOImage from "./SEOImage";
import { CardsPagesStructureTypes } from "types/commonTypes";
import ContactUs from "./ContactUs";

interface PageStructureProps {
  pageData: CardsPagesStructureTypes;
}

export default function CardsPagesStructure({ pageData }: PageStructureProps) {
  return (
    <div className="text-lg">
      <section
        className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg"
        aria-labelledby="offset-printing-heading"
      >
        <div className="relative w-full screen-size-5:h-[400px] h-[800px]">
          <SEOImage
            src={
              `/images/${pageData.mainimage.src}` ||
              "/images/home-images/additional/offset_printing_right.webp"
            }
            alt={pageData.mainimage.alt || ""}
            name={pageData.mainimage.alt || ""}
            geoData={pageData.mainimage.geoData || undefined}
            priority={pageData.mainimage.priority || false}
            loading={pageData.mainimage.priority ? undefined : "lazy"}
            sizes={pageData.mainimage.sizes || ""}
            className="w-full h-[800px]  screen-size-5:h-[400px]"
            fill={true}
            objectFit="cover"
          />

          <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center items-start text-white screen-size-15:text-left text-center">
            <div className="screen-size-15:w-[1200px] max-w-[1200px] max-w-full screen-size-15:ml-20 ml-0">
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
      <div className="grid grid-cols-1 screen-size-5:grid-cols-2 screen-size-8:grid-cols-3 screen-size-10:grid-cols-4 gap-6 max-w-[1500px] mx-auto p-8">
        {pageData.secondaryimages?.map((img, index) => {
          const cardPath = img.path || "/";
          const cardTitle = img.alt || "Untitled";
          const cardParagraph = img.description || "No description available.";

          return (
            <Link
              key={index}
              href={cardPath}
              aria-label={cardTitle}
              className="block overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-black"
            >
              <div className="h-[240px] w-full relative">
                <SEOImage
                  src={`/images/${img.src}`}
                  alt={img.alt || ""}
                  name={img.name || img.alt || ""}
                  geoData={img.geoData}
                  priority={img.priority}
                  loading={img.priority ? undefined : "lazy"}
                  sizes={img.sizes || ""}
                  className="object-cover w-full h-full"
                  fill={true}
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-black dark:text-white mb-2">
                  {cardTitle}
                </h3>
                <p className="text-black dark:text-white text-base">
                  {cardParagraph}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="container mx-auto px-8 py-8 max-w-[1500px] screen-size-10:text-left text-center">
        <div className="container py-8 max-w-[1500px] screen-size-10:text-left text-center">
          {/* WHY CHOOSE SECTION -------------------------------------------------- */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6">
            {pageData.whychoosesection.heading ||
              "pageData.whyChooseSection.heading not written"}
          </h2>
          <div className="mt-4">
            {/* mobile accordion ------------------------------------------- */}
            <details className="w-full md:hidden group" role="group">
              <summary className="cursor-pointer marker:hidden">
                {pageData.whychoosesection.paragraph1 ||
                  "pageData.whyChooseSection.paragraph1 not written"}
                {pageData.whychoosesection.paragraph2 && (
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

              {pageData.whychoosesection.paragraph2 && (
                <p className="mt-2 px-4">
                  {pageData.whychoosesection.paragraph2}
                </p>
              )}
            </details>

            {/* desktop – always expanded ---------------------------------- */}
            <div className="hidden md:block">
              <p>
                {pageData.whychoosesection.paragraph1 ||
                  "pageData.whyChooseSection.paragraph1 not written"}
              </p>
              <p className="mt-2">{pageData.whychoosesection.paragraph2}</p>
            </div>
            {pageData.whychoosesection.list?.length ? (
              <>
                {/* mobile accordion */}
                <details className="w-full md:hidden group mt-2" role="group">
                  <summary className="font-inter-medium cursor-pointer marker:hidden">
                    <strong>{pageData.whychoosesection.list[0].page}</strong>
                    <span> - {pageData.whychoosesection.list[0].content}</span>
                    <span className="ml-1 text-blue-600 group-open:hidden">
                      see more&nbsp;…
                    </span>
                    <span className="ml-1 text-blue-600 hidden group-open:inline">
                      see less
                    </span>
                  </summary>

                  <ul className="list-disc list-inside mt-2 space-y-2 px-4">
                    {pageData.whychoosesection.list.slice(1).map((item) => (
                      <li key={item.id}>
                        <strong>{item.page}</strong>
                        <span> - {item.content}</span>
                      </li>
                    ))}
                  </ul>
                </details>

                {/* desktop expanded */}
                <ul className="hidden md:block list-disc list-inside mt-2 space-y-2">
                  {pageData.whychoosesection.list.map((item) => (
                    <li key={item.id}>
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
          {/* SERVICES SECTION ---------------------------------------------------- */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6">
            {pageData.servicessection?.heading ||
              "pageData.servicesSection.heading not written"}
          </h2>

          <p className="mt-4">
            {pageData.servicessection?.paragraph1 ||
              "pageData.servicesSection.paragraph1 not written"}
          </p>

          {/* OFFERINGS SECTION --------------------------------------------------- */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black dark:text-white mt-4 screen-size-10:text-left">
            {pageData.offeringssection?.heading ||
              "pageData.offeringsSection.heading not written"}
          </h3>
          <p className="mt-4">{pageData.offeringssection?.paragraph1 || ""}</p>
          {pageData.offeringssection?.list?.length ? (
            <>
              {/* mobile accordion */}
              <details className="w-full md:hidden group mt-2" role="group">
                <summary className="font-inter-medium cursor-pointer marker:hidden">
                  <Link
                    href={pageData.offeringssection.list[0].path || "/"}
                    className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    aria-label={`Learn more about ${pageData.offeringssection.list[0].page}`}
                  >
                    {pageData.offeringssection.list[0].page}
                  </Link>
                  <span> - {pageData.offeringssection.list[0].content}</span>
                  <span className="ml-1 text-blue-600 group-open:hidden">
                    see more&nbsp;…
                  </span>
                  <span className="ml-1 text-blue-600 hidden group-open:inline">
                    see less
                  </span>
                </summary>

                <ul className="list-disc list-inside mt-2 space-y-2 px-4">
                  {pageData.offeringssection.list.slice(1).map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path || "/"}
                        className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        aria-label={`Learn more about ${item.page}`}
                      >
                        {item.page}
                      </Link>
                      <span> - {item.content}</span>
                    </li>
                  ))}
                </ul>
              </details>

              {/* desktop expanded */}
              <ul className="hidden md:block list-disc list-inside mt-2 space-y-2">
                {pageData.offeringssection.list.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path || "/"}
                      className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      aria-label={`Learn more about ${item.page}`}
                    >
                      {item.page}
                    </Link>
                    <span> - {item.content}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            "pageData.offeringsSection?.list? not written"
          )}
        </div>

        {(pageData.advancedfeatures?.heading && (
          <>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 ">
              {pageData.advancedfeatures?.heading ||
                "pageData.advancedFeatures?.heading not written"}
            </h2>
            <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4 ">
              {pageData.advancedfeatures?.customizationFinishing?.heading ||
                "pageData.advancedFeatures?.customizationFinishing?.heading not written"}
            </h3>
            <p className="mt-2 ">
              {pageData.advancedfeatures?.customizationFinishing?.paragraph1 ||
                "pageData.advancedFeatures?.customizationFinishing?.paragraph1 not written"}
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ">
              {(pageData.advancedfeatures.customizationFinishing?.list &&
                pageData.advancedfeatures.customizationFinishing?.list.map(
                  (item) => (
                    <li key={item.id}>
                      <strong className="font-bold ">{item.page}</strong>
                      <span> - {item.content}</span>
                    </li>
                  )
                )) ||
                "pageData.advancedFeatures.customizationFinishing?.list not written"}
            </ul>

            <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4 screen-size-10:text-left">
              {pageData.advancedfeatures.bulkPrinting?.heading ||
                "pageData.advancedFeatures.bulkPrinting?.heading not written"}
            </h3>
            <p className="mt-2 ">
              {(pageData.advancedfeatures.bulkPrinting?.list &&
                pageData.advancedfeatures.bulkPrinting?.list.map((segment) => (
                  <span key={segment.id}>
                    {segment.content}
                    <strong className="font-bold ">{segment.page}</strong>
                  </span>
                ))) ||
                "pageData.advancedFeatures.bulkPrinting?.list not written"}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold mt-6 screen-size-10:text-left">
              {pageData.advancedfeatures.convenientPrinting?.heading}
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-2 ">
              {(pageData.advancedfeatures.convenientPrinting?.list &&
                pageData.advancedfeatures.convenientPrinting?.list.map(
                  (item) => (
                    <li key={item.id}>
                      {item.page && <strong>{item.page}: </strong>}
                      {item.content && <span>{item.content}</span>}
                    </li>
                  )
                )) ||
                "pageData.advancedFeatures.convenientPrinting?.list not written"}
            </ul>

            {/* How to Get Started */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 screen-size-10:text-left">
              {pageData.howtogetstarted?.heading ||
                "pageData.howToGetStarted?.heading not written"}
            </h2>
            <ol className="list-decimal list-inside mt-2 space-y-2 ">
              {(pageData.howtogetstarted?.list &&
                pageData.howtogetstarted?.list.map((step) => (
                  <li key={step.id}>
                    {<strong itemProp="name">{step.page}: </strong>}
                    {<span itemProp="text">{step.content}</span>}
                  </li>
                ))) ||
                "pageData.howToGetStarted?.list not written"}
            </ol>
            {/* Why Trust Us */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 screen-size-10:text-left">
              {pageData.whytrustus?.heading ||
                "pageData.whyTrustUs?.heading not written"}
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {(pageData.whytrustus?.list &&
                pageData.whytrustus?.list.map((item) => (
                  <li key={item.id}>
                    {item.page && (
                      <strong itemProp="name">✅ {item.page}: </strong>
                    )}
                    {item.content && (
                      <span itemProp="description">{item.content}</span>
                    )}
                  </li>
                ))) ||
                "pageData.whyTrustUs?.list not written"}
            </ul>
          </>
        )) ||
          ""}

        {/* FAQs */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 screen-size-10:text-left">
          {pageData.faqs?.heading || "pageData.faqs?.heading not written"}
        </h2>

        {pageData.faqs?.list?.length
          ? pageData.faqs.list.map((faqItem, index) => {
              const sentences = (faqItem.answer ?? "").split(/(?<=[.!?])\s+/);
              const preview = sentences.slice(0, 3).join(" ");
              const rest = sentences.slice(3).join(" ");

              return (
                <div className="mt-4" key={index}>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black dark:text-white mt-4 screen-size-10:text-left">
                    Q:&nbsp;{faqItem.question}
                  </h3>

                  {/* mobile accordion */}
                  <details className="w-full md:hidden group mt-2" role="group">
                    <summary className="cursor-pointer marker:hidden">
                      A:&nbsp;{preview}
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

                  {/* desktop – always expanded */}
                  <p className="hidden md:block mt-2">
                    A:&nbsp;{faqItem.answer}
                  </p>
                </div>
              );
            })
          : "pageData.faqs?.items not written"}

        {/* Get Started Section */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black dark:text-white mt-6 screen-size-10:text-left">
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
      <ContactUs />
    </div>
  );
}
