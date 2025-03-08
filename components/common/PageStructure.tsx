import React from "react";
import Link from "next/link";
import SEOImage from "./SEOImage";
import { PageStructureTypes } from "types/commonTypes";

interface PageStructureProps {
  pageData: PageStructureTypes;
}

export default function PageStructure({ pageData }: PageStructureProps) {
  return (
    <div>
      {/* Hero Section */}
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
                className="inline-block bg-[#ff0015] text-white text-lg font-bold border-none rounded-[10px] px-8 py-5 transition duration-300 ease-in-out hover:bg-[#ff0015] hover:text-white focus:scale-90"
              >
                {pageData.hero_section_cta_text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 max-w-[1500px] screen-size-15:text-left text-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 max-w-[1500px] screen-size-15:text-left text-center">
          {/* Why Choose Offset Printing */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
            {pageData.why_choose_offset_printing_heading}
          </h2>
          <div className="md:float-right w-full md:max-w-[600px] md:ml-4 mb-4">
            <SEOImage
              src={`/images/${pageData.second_image_src}`}
              alt={pageData.second_image_alt}
              name={pageData.second_image_name}
              geoData={pageData.second_image_geodata}
              priority={pageData.second_image_priority}
              loading={pageData.second_image_priority ? undefined : "lazy"}
              sizes="(max-width: 768px) 100vw, 600px"
              width={500}
              height={500}
            />
          </div>
          {/* FLOATING IMAGE + TEXT WRAP */}
          <div className="text-darkGray mt-4 ">
            <p>{pageData.why_choose_offset_printing_paragraph_1}</p>
            <p className="mt-2">
              {pageData.why_choose_offset_printing_paragraph_2}
            </p>
          </div>
          {/* END FLOATING IMAGE + TEXT WRAP */}

          {/* Custom Offset Printing Services */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 ">
            {pageData.custom_offset_printing_services_heading}
          </h2>
          <p className="mt-4 text-darkGray">
            {pageData.custom_offset_printing_services_paragraph}
          </p>

          {/* What We Offer */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black mt-4 screen-size-15:text-left">
            {pageData.what_we_offer_heading}
          </h3>
          <ul
            className="list-disc list-inside mt-2 space-y-2 text-darkGray"
            dangerouslySetInnerHTML={{ __html: pageData.what_we_offer_list }}
          />
        </div>

        {/* Advanced Features */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.advanced_features_heading}
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black mt-4 screen-size-15:text-left">
          {pageData.customization_finishing_subheading}
        </h3>
        <p className="mt-2 text-darkGray">
          {pageData.customization_finishing_paragraph}
        </p>
        <ul
          className="list-disc list-inside mt-2 space-y-2 text-darkGray"
          dangerouslySetInnerHTML={{
            __html: pageData.customization_finishing_list,
          }}
        />

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black mt-4 screen-size-15:text-left">
          {pageData.bulk_printing_subheading}
        </h3>
        <p className="mt-2 text-darkGray">{pageData.bulk_printing_paragraph}</p>

        {/* Convenient Printing Services */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.convenient_printing_heading}
        </h2>
        <ul
          className="list-disc list-inside mt-2 space-y-2 text-darkGray"
          dangerouslySetInnerHTML={{
            __html: pageData.convenient_printing_list,
          }}
        />

        {/* How to Get Started */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.how_to_get_started_heading}
        </h2>
        <ol
          className="list-decimal list-inside mt-2 space-y-2 text-darkGray"
          dangerouslySetInnerHTML={{ __html: pageData.how_to_get_started_list }}
        />

        {/* Why Trust Us */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.why_trust_us_heading}
        </h2>
        <ul
          className="list-disc list-inside mt-2 space-y-2 text-darkGray"
          dangerouslySetInnerHTML={{ __html: pageData.why_trust_us_list }}
        />

        {/* FAQs */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.faqs_heading}
        </h2>
        {/* FAQ #1 */}
        <div className="mt-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black screen-size-15:text-left">
            {pageData.faq_1_question}
          </h3>
          <p className="mt-2 text-darkGray">{pageData.faq_1_answer}</p>
        </div>

        {/* FAQ #2 */}
        <div className="mt-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black screen-size-15:text-left">
            {pageData.faq_2_question}
          </h3>
          <p className="mt-2 text-darkGray">{pageData.faq_2_answer}</p>
        </div>

        {/* FAQ #3 */}
        <div className="mt-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black screen-size-15:text-left">
            {pageData.faq_3_question}
          </h3>
          <p className="mt-2 text-darkGray">{pageData.faq_3_answer}</p>
        </div>

        {/* FAQ #4 */}
        <div className="mt-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-inter-medium text-black screen-size-15:text-left">
            {pageData.faq_4_question}
          </h3>
          <p className="mt-2 text-darkGray">{pageData.faq_4_answer}</p>
        </div>

        {/* Get Started */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold text-black mt-6 screen-size-15:text-left">
          {pageData.get_started_heading}
        </h2>
        <p className="mt-4 text-darkGray">{pageData.get_started_paragraph_1}</p>
        <p className="mt-2 text-darkGray">{pageData.get_started_paragraph_2}</p>
      </div>
    </div>
  );
}
