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
