import { getDataPattern } from "@/lib/supabaseClient";
import { HeaderMenuTypes } from "@/types/Header/HeaderTypes";

export const getHeaderData = async () => {
  try {
    return await getDataPattern<HeaderMenuTypes>("header_menu");
  } catch (error) {
    console.error("Error fetching header menu data:", error);
    return []; // Return empty array to prevent breaking the UI
  }
};
