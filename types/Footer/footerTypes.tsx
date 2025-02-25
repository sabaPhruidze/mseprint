import { SEOImageProps, PagePathTypes } from "../commonTypes";

export interface footerTopTypes {
  first: string;
  second: SEOImageProps[];
}
export interface footerBottomTypes {
  footer_bottom: {
    address: PagePathTypes;
    pages: PagePathTypes[];
  };
}
