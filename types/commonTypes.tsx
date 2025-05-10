export interface PagePathTypes {
  id: number;
  page: string;
  path?: string;
  content?: string;
  contentDown?: string[];
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
  name?: string;
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
  below?: string[];
}

export interface TitleContentTypes {
  id: number;
  title: string;
  content?: string[];
  contentUp?: string[];
  contentDown?: string[];
}

export interface ServicesPathTypes {
  id: number;
  parent_id?: number;
  title: string;
  path: string;
}

export interface SectionContent {
  heading: string;
  paragraph1?: string;
  paragraph2?: string;
  list?: PagePathTypes[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export interface PageStructureTypes {
  id: number;
  mainimage: SEOImageProps;
  secondaryimage?: SEOImageProps;
  introsection: {
    heading: string;
    paragraph: string;
  };
  whychoosesection: SectionContent;
  servicessection?: SectionContent;
  offeringssection?: SectionContent;
  advancedfeatures?: {
    heading: string;
    customizationFinishing?: SectionContent;
    bulkPrinting?: SectionContent;
    convenientPrinting?: SectionContent;
  };
  howtogetstarted?: SectionContent;
  whytrustus?: SectionContent;
  faqs?: {
    heading: string;
    list: FAQItem[];
  };
  getstartedsection?: {
    heading: string;
    steps: PagePathTypes[];
    finalParagraph?: string;
  };
}

export type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  emailVerification: string;
  phone: string; // single phone field

  // 3 new optional fields
  jobTitle?: string;
  company?: string;
  extension?: string;

  projectName: string;
  quantity: number;
  description: string;
  dueDate: string;
  terms: boolean;
  representative: string;
};

export interface ReceivingPriceType {
  begin_jurney: SectionContent;
  services: SectionContent;
  why_us: SectionContent;
  get_started: TitleContentTypes;
}
// footer pages, about us , service and products and one more
export interface accessibilityTypes {
  first: string;
  second: TitleContentTypes;
  third: TitleContentTypes;
  fourth: SectionContent;
  fifth: SectionContent;
  sixth: SectionContent;
  seventh: TitleContentTypes;
}
export interface privacyPolicyTypes {
  first: string;
  second: TitleContentTypes;
  third: SectionContent;
  fourth: SectionContent;
  fifth: SectionContent;
  sixth: SectionContent;
  seventh: TitleContentTypes;
}
//
export interface termsSection {
  id: number;
  heading: string;
  paragraphs: string[];
}

/** Row shape in the `terms_conditions_page` table. */
export interface termsConditionsTypes {
  id?: number; // SERIAL primary key (optional on insert)
  title: string; // “MSE Printing — Terms & Conditions”
  intro: string[]; // the two intro paragraphs
  sections: termsSection[]; // array of 16 sections
  created_at?: string; // auto‑timestamp from the DB
}
export interface EoeDiversitySection {
  id: string;
  heading: string;
  content: string[]; // Markdown/HTML‑safe strings
}

export interface EnvironmentalSection {
  id: string;
  heading: string | null; // null for intro
  content: string[];
  list?: string[]; // optional unordered list (already contains <strong> markup)
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: SEOImageProps;
  slug?: string;
}
