export interface pagePathTypes {
  id: number;
  page: string;
  path?: string;
  content?: string;
}
interface GeoData {
  latitude: string;
  longitude: string;
  location: string;
  addressRegion?: string;
}

export interface SEOImageProps {
  src: string;
  alt: string;
  name: string;
  geoData?: GeoData;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
  width: number;
  height: number;
}
