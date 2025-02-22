import React from "react";
import ClientCarousel from "./ClientCarousel";
import { SEOImageProps } from "../../types/commonTypes";

interface CarouselProps {
  carouselData: SEOImageProps[];
}

const Carousel: React.FC<CarouselProps> = ({ carouselData }) => {
  if (!carouselData || carouselData.length === 0) return null;

  return <ClientCarousel carouselData={carouselData} />;
};

export default Carousel;
