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

interface SectionContent {
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
