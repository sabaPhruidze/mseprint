"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SEOImage from "../common/SEOImage";
import Link from "next/link";

import { SEOImageProps } from "../../types/commonTypes";

interface CarouselProps {
  carouselData: SEOImageProps[];
  pathname: string;
}

const Carousel: React.FC<CarouselProps> = ({ carouselData, pathname }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (pathname !== "/" || !carouselData || carouselData.length === 0)
    return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div
      className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg"
      style={{ height: "400px" }}
    >
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={carouselData[currentIndex].id}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SEOImage
              src={`/images/${carouselData[currentIndex].src}`}
              alt={carouselData[currentIndex].alt}
              name={carouselData[currentIndex].alt}
              geoData={carouselData[currentIndex].geoData}
              priority={carouselData[currentIndex].priority}
              loading={carouselData[currentIndex].priority ? undefined : "lazy"}
              sizes={carouselData[currentIndex].sizes}
              fill
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center screen-size-13:items-start items-center screen-size-13:text-left text-center text-white">
          <div className="screen-size-23:w-[1200px] screen-size-10:w-[800px] w-[280px] screen-size-13:ml-20 ml-0">
            <p className="screen-size-5:mt-4 mt-0 screen-size-23:text-2xl screen-size-10:text-xl screen-size-5:text-md text-sm screen-size-13:text-left text-center mb-2 leading-relaxed">
              {carouselData[currentIndex].description}
            </p>
            <Link href={carouselData[currentIndex].path || "/"}>
              <span className="font-inter-extrabold inline-block bg-white text-black px-6 py-3 mt-3 rounded-full font-medium hover:bg-gray-200 transition text-left w-fit">
                Learn more...
              </span>
            </Link>
            <h3 className="mt-6 screen-size-15:text-[50px] screen-size-10:text-[36px] text-[24px] font-extrabold screen-size-13:text-left text-center drop-shadow-md leading-tight">
              {carouselData[currentIndex].alt}
            </h3>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-md border border-white hover:bg-black/80 transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-md border border-white hover:bg-black/80 transition-all duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
