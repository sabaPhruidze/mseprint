import { getDataPattern } from "../lib/supabaseClient";
import { accessibilityTypes,privacyPolicyTypes} from "../types/commonTypes";

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
      default:
        return {};
    }
    
  } catch (error) {
    console.error("Error fetching category pages data:", error);
    return {};
  }
};