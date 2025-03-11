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
            src={`/images/${pageData.hero_image_src}`}
            alt={pageData.hero_image_alt}
            name={pageData.hero_image_name}
            geoData={pageData.hero_image_geodata}
            priority={pageData.hero_image_priority}
            loading={pageData.hero_image_priority ? undefined : "lazy"}
            sizes={pageData.hero_image_sizes}
            width={700}
            height={200}
            fill={true}
            objectFit="cover"
          />

          <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center items-start text-white screen-size-15:text-left text-center">
            <div className="screen-size-15:w-[1200px] max-w-[1200px] max-w-full screen-size-15:ml-20 ml-0">
              <h1 className="screen-size-10:text-[50px] text-[30px] font-extrabold leading-tight text-white max-w-full">
                {pageData.hero_section_heading}
              </h1>
              <p className="mb-2 leading-relaxed screen-size-15:my-8 my-0 screen-size-15:text-2xl text-xl">
                {pageData.hero_section_paragraph}
              </p>
              <Link
                href={pageData.hero_section_cta_link}
                aria-label={`Request a Quote: ${pageData.hero_section_cta_text}`}
                className="inline-block bg-[#ff0015] text-white font-bold border-none rounded-[10px] px-8 py-5 transition duration-300 ease-in-out hover:bg-[#ff0015] hover:text-white focus:scale-90"
              >
                {pageData.hero_section_cta_text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto sm:px-6 md:px-8 py-8 max-w-[1500px] screen-size-15:text-left text-center">
        <div className="container py-8 max-w-[1500px] screen-size-15:text-left text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 ">
            {pageData.why_choose_offset_printing_heading}
          </h2>
          <div className="md:float-right md:max-w-[600px] md:ml-2 ml-0">
            <SEOImage
              src={`/images/${pageData.second_image_src}`}
              alt={pageData.second_image_alt}
              name={pageData.second_image_name}
              geoData={pageData.second_image_geodata}
              priority={pageData.second_image_priority}
              loading={pageData.second_image_priority ? undefined : "lazy"}
              sizes={pageData.second_image_sizes}
              width={600}
              height={400}
            />
          </div>
          <div className="text-darkGray mt-4 ">
            <p>{pageData.why_choose_offset_printing_paragraph_1}</p>
            <p className="mt-2">
              {pageData.why_choose_offset_printing_paragraph_2}
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 ">
            {pageData.custom_offset_printing_services_heading}
          </h2>
          <p className="mt-4 text-darkGray">
            {pageData.custom_offset_printing_services_paragraph}
          </p>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black mt-4 screen-size-15:text-left">
            {pageData.what_we_offer_heading}
          </h3>
          <ul className="list-disc list-inside mt-2 space-y-2 text-darkGray">
            {pageData.what_we_offer_list.map((item) => (
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
            ))}
          </ul>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 ">
          {pageData.advanced_features_heading}
        </h2>
        <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 ">
          {pageData.customization_finishing_subheading}
        </h3>
        <p className="mt-2 text-darkGray">
          {pageData.customization_finishing_paragraph}
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-darkGray">
          {pageData.customization_finishing_list.map((item) => (
            <li key={item.id} className="text-darkGray">
              <strong className="font-bold text-darkGray">{item.page}</strong>
              <span className="text-darkGray"> - {item.content}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 screen-size-15:text-left">
          {pageData.bulk_printing_subheading}
        </h3>
        <p className="mt-2 text-darkGray">
          {pageData.bulk_printing_paragraph.map((segment) => (
            <span key={segment.id}>
              {segment.content}
              <strong className="font-bold text-darkGray">
                {segment.page}
              </strong>
            </span>
          ))}
        </p>

        {/* Convenient Printing Services */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold mt-6 screen-size-15:text-left">
          {pageData.convenient_printing_heading}
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          {pageData.convenient_printing_list.map((item, index) => (
            <li key={item.id} className="text-darkGray">
              {item.page && <strong>{item.page}: </strong>}
              {item.content && <span>{item.content}</span>}
            </li>
          ))}
        </ul>

        {/* How to Get Started */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.how_to_get_started_heading}
        </h2>
        <ol className="list-decimal list-inside mt-2 space-y-2 text-darkGray">
          {pageData.how_to_get_started_list.map((step) => (
            <li key={step.id}>
              {<strong itemProp="name">{step.page}: </strong>}
              {<span itemProp="text">{step.content}</span>}
            </li>
          ))}
        </ol>
        {/* Why Trust Us */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.why_trust_us_heading}
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-2 text-darkGray">
          {pageData.why_trust_us_list.map((item) => (
            <li key={item.id}>
              {item.page && <strong itemProp="name">✅ {item.page}: </strong>}
              {item.content && (
                <span itemProp="description">{item.content}</span>
              )}
            </li>
          ))}
        </ul>

        {/* FAQs */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.faqs_heading}
        </h2>
        {/* FAQ #1 */}
        <div className="mt-4">
          <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 screen-size-15:text-left">
            {pageData.faq_1_question}
          </h3>
          <p className="mt-2 text-darkGray">{pageData.faq_1_answer}</p>
        </div>

        {/* FAQ #2 */}
        <div className="mt-4">
          <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 screen-size-15:text-left">
            {pageData.faq_2_question}
          </h3>
          <p className="mt-2 text-darkGray">{pageData.faq_2_answer}</p>
        </div>

        {/* FAQ #3 */}
        <div className="mt-4">
          <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 screen-size-15:text-left">
            {pageData.faq_3_question}
          </h3>
          <p className="mt-2 text-darkGray">{pageData.faq_3_answer}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl sm:text-xl lg:text-2xl font-inter-bold text-black mt-4 screen-size-15:text-left">
            {pageData.faq_4_question}
          </h3>
          <p className="mt-2 text-darkGray">{pageData.faq_4_answer}</p>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.get_started_heading}
        </h2>
        <p className="mt-4 text-darkGray">
          {pageData.get_started_paragraph_1.map((item) => (
            <span key={item.id}>
              {item.page && <span className="text-black"> {item.page} </span>}
              {item.content && (
                <span className="text-blue-600 font-semibold">
                  {item.content}
                </span>
              )}
            </span>
          ))}
        </p>

        <p className="mt-2 text-darkGray">{pageData.get_started_paragraph_2}</p>
      </div>
    </div>
  );
}
