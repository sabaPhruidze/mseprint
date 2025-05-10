import { getDataPattern } from "../lib/supabaseClient";
import { accessibilityTypes,privacyPolicyTypes, termsConditionsTypes,EoeDiversitySection} from "../types/commonTypes";

export const getSpecialPagesData = async (pathname: string) => {
  try {
    switch (pathname) {
        case "/accessibility": {
            const [accessibilityData] = await Promise.all([
              getDataPattern<accessibilityTypes>("accessibility_page"),
            ]);
          
            return {
              accessibilityData: accessibilityData ?? [],
            };
          }   
          case "/privacy-policy": {
            const [privacyPolicyData] = await Promise.all([
              getDataPattern<privacyPolicyTypes>("privacy_policy_page"),
            ]);
        
            return {
              privacyPolicyData: privacyPolicyData ?? [],
            };
          }
          case "/terms-conditions": {
            const [termsConditionsData] = await Promise.all([
              getDataPattern<termsConditionsTypes>("terms_conditions_page"),
            ]);
      
            return {
              termsConditionsData: termsConditionsData ?? [],
            };
          }
  
case "/eoe-diversity": {
  const [eoeDiversityData] = await Promise.all([
    getDataPattern<EoeDiversitySection[]>("eoe_diversity_page"),
  ]);

  return {
    eoeDiversityData: eoeDiversityData ?? [],
  };
}

      default:
        return {};
    }
    
  } catch (error) {
    console.error("Error fetching category pages data:", error);
    return {};
  }
};