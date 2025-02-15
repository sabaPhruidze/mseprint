"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import offset_printing_image from "@/public/images/header-images/offset_printing.avif";

const images = [
  {
    src: offset_printing_image,
    title: "First Slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    src: offset_printing_image,
    title: "Second Slide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: offset_printing_image,
    title: "Third Slide",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="relative w-full max-w-full mx-auto overflow-hidden rounded-lg shadow-lg"
      style={{ height: "300px" }}
    >
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex].title}
            src={images[currentIndex].src.src}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
          <h3 className="text-xl font-semibold">
            {images[currentIndex].title}
          </h3>
          <p className="text-sm">{images[currentIndex].description}</p>
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
