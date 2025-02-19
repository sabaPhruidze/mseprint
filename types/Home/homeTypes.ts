import { GeoData } from "../commonTypes";

export interface carouselTypes {
  id: number;
  title: string;
  description: string;
  path: string;
  image_filename: string;
  priority: number;
  loading: "lazy" | "eager";
  sizes: string;
  src: string;
  alt: string;
  name: string;
  geoData?: GeoData;
}
