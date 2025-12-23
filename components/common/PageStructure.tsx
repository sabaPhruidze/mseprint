import { PageStructureTypes } from "types/commonTypes";
import type { BreadcrumbItem } from "./page-structure/Breadcrumbs";
import type { LocationTokens } from "./page-structure/utils";

import HeroSection from "./page-structure/HeroSection";
import OnThisPageNav from "./page-structure/OnThisPageNav";
import WhyChooseSection from "./page-structure/WhyChooseSection";
import ServicesSection from "./page-structure/ServicesSection";
import OfferingsSection from "./page-structure/OfferingsSection";
import AdvancedFeaturesSection from "./page-structure/AdvancedFeaturesSection";
import HowToGetStartedSection from "./page-structure/HowToGetStartedSection";
import WhyTrustUsSection from "./page-structure/WhyTrustUsSection";
import FaqSection from "./page-structure/FaqSection";
import GetStartedSection from "./page-structure/GetStartedSection";

export default function PageStructure({
  pageData,
  tokens,
  breadcrumbs,
}: {
  pageData: PageStructureTypes;
  tokens?: LocationTokens;
  breadcrumbs?: BreadcrumbItem[];
}) {
  return (
    <main className="text-lg" role="main">
      <HeroSection
        pageData={pageData}
        tokens={tokens}
        breadcrumbs={breadcrumbs}
      />
      <OnThisPageNav pageData={pageData} />
      <div className="container mx-auto p-8 max-w-[1500px] text-left">
        <WhyChooseSection pageData={pageData} />
        <ServicesSection pageData={pageData} tokens={tokens} />
        <OfferingsSection pageData={pageData} tokens={tokens} />
        <AdvancedFeaturesSection pageData={pageData} />
        <HowToGetStartedSection pageData={pageData} />
        <WhyTrustUsSection pageData={pageData} />
        <FaqSection pageData={pageData} tokens={tokens} />
        <GetStartedSection pageData={pageData} />
      </div>
    </main>
  );
}
