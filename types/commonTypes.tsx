export interface PagePathTypes {
  id: number;
  page: string;
  path?: string;
  content?: string;
}

export interface GeoData {
  latitude: number;
  longitude: number;
  location: string;
  addressRegion?: string;
}

export interface SEOImageProps {
  src: string;
  alt: string;
  name: string;
  id?: number;
  path?: string;
  description?: string;
  geoData?: GeoData;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

export interface TitleContentTypes {
  id: number;
  title: string;
  content: string[];
}

export interface ServicesPathTypes {
  id: number;
  parent_id?: number;
  title: string;
  path: string;
}
export interface PageStructureTypes {
  id: number;
  hero_image_src: string;
  hero_image_alt: string;
  hero_image_name: string;
  hero_image_geodata: GeoData;
  hero_image_sizes: string;
  hero_image_height: string;
  hero_image_priority: boolean;
  second_image_src: string;
  second_image_alt: string;
  second_image_name: string;
  second_image_geodata: GeoData;
  second_image_sizes: string;
  second_image_priority: boolean;
  hero_section_heading: string;
  hero_section_paragraph: string;
  hero_section_cta_text: string;
  hero_section_cta_link: string;
  why_choose_offset_printing_heading: string;
  why_choose_offset_printing_paragraph_1: string;
  why_choose_offset_printing_paragraph_2: string;
  custom_offset_printing_services_heading: string;
  custom_offset_printing_services_paragraph: string;
  what_we_offer_heading: string;
  what_we_offer_list: PagePathTypes[];
  advanced_features_heading: string;
  customization_finishing_subheading: string;
  customization_finishing_paragraph: string;
  customization_finishing_list: PagePathTypes[];
  bulk_printing_subheading: string;
  bulk_printing_paragraph: PagePathTypes[];
  convenient_printing_heading: string;
  convenient_printing_list: string;
  how_to_get_started_heading: string;
  how_to_get_started_list: string;
  why_trust_us_heading: string;
  why_trust_us_list: string;
  faqs_heading: string;
  faq_1_question: string;
  faq_1_answer: string;
  faq_2_question: string;
  faq_2_answer: string;
  faq_3_question: string;
  faq_3_answer: string;
  faq_4_question: string;
  faq_4_answer: string;
  get_started_heading: string;
  get_started_paragraph_1: string;
  get_started_paragraph_2: string;
}
