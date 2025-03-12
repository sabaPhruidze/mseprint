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
        <div className="relative w-full screen-size-5:h-[400px] h-[600px]">
          <SEOImage
            src={
              `/images/${pageData.mainImage.src}` ||
              "/images/home-images/additional/offset_printing_right.webp"
            }
            alt={pageData.mainImage.alt || ""}
            name={pageData.mainImage.name || ""}
            geoData={pageData.mainImage.geoData || undefined}
            priority={pageData.mainImage.priority || false}
            loading={pageData.mainImage.priority ? undefined : "lazy"}
            sizes={pageData.mainImage.sizes || ""}
            width={700} //must be removed width changes
            height={200} // must be removed because height chnages
            fill={true}
            objectFit="cover"
          />

          <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center items-start text-white screen-size-15:text-left text-center">
            <div className="screen-size-15:w-[1200px] max-w-[1200px] max-w-full screen-size-15:ml-20 ml-0">
              <h1 className="screen-size-10:text-[50px] text-[30px] font-extrabold leading-tight text-white max-w-full">
                {pageData.introSection.heading ||
                  "pageData.introSection.heading not written"}
              </h1>
              <p className="mb-2 leading-relaxed screen-size-15:my-8 my-0 screen-size-15:text-2xl text-xl">
                {pageData.introSection.paragraph ||
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

      <div className="container mx-auto sm:px-6 md:px-8 py-8 max-w-[1500px] screen-size-15:text-left text-center">
        <div className="container py-8 max-w-[1500px] screen-size-15:text-left text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 ">
            {pageData.whyChooseSection.heading ||
              "pageData.whyChooseSection.heading not written"}
          </h2>
          <div className="md:float-right md:max-w-[600px] md:ml-2 ml-0">
            <SEOImage
              src={
                `/images/${pageData.secondaryImage?.src}` ||
                "/images/home-images/additional/offset_printing_right.webp"
              }
              alt={pageData.secondaryImage?.alt || ""}
              name={pageData.secondaryImage?.name || ""}
              geoData={pageData.secondaryImage?.geoData || undefined}
              priority={pageData.secondaryImage?.priority || false}
              loading={pageData.secondaryImage?.priority ? undefined : "lazy"}
              sizes={pageData.secondaryImage?.sizes || ""}
              width={600} //must be removed
              height={400} //must be removed
            />
          </div>
          <div className="text-darkGray mt-4 ">
            <p>
              {pageData.whyChooseSection.paragraph1 ||
                "pageData.whyChooseSection.paragraph1 not written"}
            </p>
            <p className="mt-2">{pageData.whyChooseSection.paragraph2}</p>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 ">
            {pageData.servicesSection?.heading ||
              "pageData.servicesSection.heading not written"}
          </h2>
          <p className="mt-4 text-darkGray">
            {pageData.servicesSection?.paragraph1 ||
              "pageData.servicesSection.paragraph1 not written"}
          </p>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black mt-4 screen-size-15:text-left">
            {pageData.offeringsSection?.heading ||
              "pageData.offeringsSection.heading not written"}
          </h3>
          <ul className="list-disc list-inside mt-2 space-y-2 text-darkGray">
            {pageData.offeringsSection?.list?.map((item) => (
              <li key={item.id} className="text-darkGray">
                <Link
                  href={item.path || "/"}
                  className="font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  aria-label={`Learn more about ${item.page}`}
                >
                  {item.page}
                </Link>
                <span className="text-darkGray"> - {item.content}</span>
              </li>
            )) || "pageData.offeringsSection?.list? not written"}
          </ul>
        </div>

        {(pageData.advancedFeatures?.heading && (
          <>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 ">
              {pageData.advancedFeatures?.heading ||
                "pageData.advancedFeatures?.heading not written"}
            </h2>
            <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 ">
              {pageData.advancedFeatures?.customizationFinishing?.heading ||
                "pageData.advancedFeatures?.customizationFinishing?.heading not written"}
            </h3>
            <p className="mt-2 text-darkGray">
              {pageData.advancedFeatures?.customizationFinishing?.paragraph1 ||
                "pageData.advancedFeatures?.customizationFinishing?.paragraph1 not written"}
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-darkGray">
              {(pageData.advancedFeatures.customizationFinishing?.list &&
                pageData.advancedFeatures.customizationFinishing?.list.map(
                  (item) => (
                    <li key={item.id} className="text-darkGray">
                      <strong className="font-bold text-darkGray">
                        {item.page}
                      </strong>
                      <span className="text-darkGray"> - {item.content}</span>
                    </li>
                  )
                )) ||
                "pageData.advancedFeatures.customizationFinishing?.list not written"}
            </ul>

            <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 screen-size-15:text-left">
              {pageData.advancedFeatures.bulkPrinting?.heading ||
                "pageData.advancedFeatures.bulkPrinting?.heading not written"}
            </h3>
            <p className="mt-2 text-darkGray">
              {(pageData.advancedFeatures.bulkPrinting?.list &&
                pageData.advancedFeatures.bulkPrinting?.list.map((segment) => (
                  <span key={segment.id}>
                    {segment.content}
                    <strong className="font-bold text-darkGray">
                      {segment.page}
                    </strong>
                  </span>
                ))) ||
                "pageData.advancedFeatures.bulkPrinting?.list not written"}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold mt-6 screen-size-15:text-left">
              {pageData.advancedFeatures.convenientPrinting?.heading}
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-darkGray">
              {(pageData.advancedFeatures.convenientPrinting?.list &&
                pageData.advancedFeatures.convenientPrinting?.list.map(
                  (item) => (
                    <li key={item.id} className="text-darkGray">
                      {item.page && <strong>{item.page}: </strong>}
                      {item.content && <span>{item.content}</span>}
                    </li>
                  )
                )) ||
                "pageData.advancedFeatures.convenientPrinting?.list not written"}
            </ul>

            {/* How to Get Started */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
              {pageData.howToGetStarted?.heading ||
                "pageData.howToGetStarted?.heading not written"}
            </h2>
            <ol className="list-decimal list-inside mt-2 space-y-2 text-darkGray">
              {(pageData.howToGetStarted?.list &&
                pageData.howToGetStarted?.list.map((step) => (
                  <li key={step.id}>
                    {<strong itemProp="name">{step.page}: </strong>}
                    {<span itemProp="text">{step.content}</span>}
                  </li>
                ))) ||
                "pageData.howToGetStarted?.list not written"}
            </ol>
            {/* Why Trust Us */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
              {pageData.whyTrustUs?.heading ||
                "pageData.whyTrustUs?.heading not written"}
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-darkGray">
              {(pageData.whyTrustUs?.list &&
                pageData.whyTrustUs?.list.map((item) => (
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
          "pageData.advancedFeatures?.heading not written"}

        {/* FAQs */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.faqs?.heading || "pageData.faqs?.heading not written"}
        </h2>
        {(pageData.faqs?.list &&
          pageData.faqs.list?.map((faqItem, index) => (
            <div className="mt-4" key={index}>
              <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 screen-size-15:text-left">
                {faqItem.question}
              </h3>
              <p className="mt-2 text-darkGray">{faqItem.answer}</p>
            </div>
          ))) ||
          "pageData.faqs?.items not written"}

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.getStartedSection?.heading ||
            "pageData.getStartedSection?.heading not written"}
        </h2>
        <p className="mt-4 text-darkGray">
          {(pageData.getStartedSection?.steps &&
            pageData.getStartedSection?.steps?.map((item) => (
              <span key={item.id}>
                {item.page && <span> {item.page} </span>}
                {item.content && (
                  <span className="text-blue-600 font-semibold">
                    {item.content}
                  </span>
                )}
              </span>
            ))) ||
            "pageData.getStartedSection?.steps not written"}
        </p>

        <p className="mt-2 text-darkGray">
          {pageData.getStartedSection?.finalParagraph ||
            "pageData.getStartedSection?.finalParagraph not written"}
        </p>
      </div>
    </div>
  );
}
