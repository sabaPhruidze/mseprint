"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { carouselTypes } from "@/types/Home/homeTypes";
import Head from "next/head";

interface CarouselProps {
  carouselData: carouselTypes[];
  pathname: string;
}

const Carousel: React.FC<CarouselProps> = ({ carouselData, pathname }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure it's only displayed on the homepage
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
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Best Printing Services | MSE Print</title>
        <meta
          name="description"
          content="Top-quality commercial printing, digital printing, signs, and mailing solutions. Stand out with MSE Print!"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div
        className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg"
        style={{ height: "400px" }}
      >
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselData[currentIndex].title}
              className="absolute w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={`/images/${carouselData[currentIndex].image_filename}`}
                alt={`Printing Service: ${carouselData[currentIndex].title}`}
                fill
                style={{ objectFit: "cover" }}
                priority={currentIndex === 0} // First image loads eagerly, others lazy-load
                loading={currentIndex === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>

          {/* Accessible Overlay Text */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-black/50 p-3 rounded-md">
            <h3 className="text-xl font-semibold">
              {carouselData[currentIndex].title}
            </h3>
            <p className="text-sm">{carouselData[currentIndex].description}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
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
    </>
  );
};

export default Carousel;
