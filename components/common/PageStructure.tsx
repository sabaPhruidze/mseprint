import { PageStructureTypes } from "types/commonTypes";
import type { BreadcrumbItem } from "./page-structure/Breadcrumbs";
import OnThisPageNav from "./page-structure/OnThisPageNav";
import WhyChooseSection from "./page-structure/WhyChooseSection";
import ServicesSection from "./page-structure/ServicesSection";
import OfferingsSection from "./page-structure/OfferingsSection";
import FaqSection from "./page-structure/FaqSection";
import GetStartedSection from "./page-structure/GetStartedSection";
import AdvancedFeaturesSection from "./page-structure/AdvancedFeaturesSection";
import HowToGetStartedSection from "./page-structure/HowToGetStartedSection";
import WhyTrustUsSection from "./page-structure/WhyTrustUsSection";
import HeroSection from "./page-structure/HeroSection";
import { LocationTokens } from "./page-structure/utils";

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
        <HeroSection
          pageData={pageData}
          tokens={tokens}
          breadcrumbs={breadcrumbs}
        />
        <OnThisPageNav pageData={pageData} />
        <div className="container mx-auto p-8 max-w-[1500px] text-left">
          <div className="container py-8 max-w-[1500px]">
            <WhyChooseSection pageData={pageData} />
            {/* SERVICES SECTION - No collapse */}
            <ServicesSection pageData={pageData} tokens={tokens} />
            {/* OFFERINGS SECTION - No collapse */}
            <OfferingsSection pageData={pageData} tokens={tokens} />
          </div>
          <AdvancedFeaturesSection pageData={pageData} />

          <HowToGetStartedSection pageData={pageData} />
          {/* ── Why Trust Us ── */}
          <WhyTrustUsSection pageData={pageData} />
          {/* FAQs */}
          <FaqSection pageData={pageData} tokens={tokens} />
          {/* FAQ */}
          <GetStartedSection pageData={pageData} />
        </div>
      </main>
    </>
  );
}
