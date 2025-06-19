"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SEOImage from "../common/SEOImage";
import Link from "next/link";
import { SEOImageProps } from "../../types/commonTypes";

interface ClientCarouselProps {
  carouselData: SEOImageProps[];
}

const buildImagePath = (src: string | undefined, isMobile: boolean): string => {
  const fallback = "/images/home-images/additional/offset_printing_right.webp";
  const path = src ? `/images/${src}` : fallback;

  if (!isMobile) return path;

  // Insert _64 before the extension (e.g. image.webp -> image_64.webp)
  return path.replace(/(\.[a-zA-Z0-9]+)$/i, "_64$1");
};

const ClientCarousel: React.FC<ClientCarouselProps> = ({ carouselData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport < 640 px once on mount and on resize (client-only)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");

    // Properly typed listener
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    // Initialise state
    setIsMobile(mq.matches);

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  if (!carouselData || carouselData.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <section
      className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg"
      aria-labelledby="carousel-heading"
      aria-live="polite"
    >
      <h2 id="carousel-heading" className="sr-only">
        Featured Services and Products
      </h2>

      <div className="relative w-full h-[400px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={carouselData[currentIndex].id}
            className="absolute w-full h-full"
            initial={currentIndex === 0 ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SEOImage
              src={buildImagePath(carouselData[currentIndex].src, isMobile)}
              alt={carouselData[currentIndex].alt}
              name={carouselData[currentIndex].alt}
              geoData={carouselData[currentIndex].geoData}
              priority={currentIndex === 0}
              height={400}
              width={1920}
              loading={currentIndex === 0 ? "eager" : "lazy"}
              decoding={currentIndex === 0 ? "sync" : "async"}
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 1200px"
              fill={true}
              className="w-full h-[400px]"
              objectFit="cover"
              fetchPriority={currentIndex === 0 ? "high" : "low"}
            />
          </motion.div>
        </AnimatePresence>

        {/* Prefetch the next (and one more) image, using the same mobile logic */}
        {carouselData.map((item, index) => {
          if (
            index === currentIndex ||
            index === (currentIndex + 1) % carouselData.length
          )
            return null;
          return (
            <link
              key={index}
              rel="prefetch"
              as="image"
              href={buildImagePath(item.src, isMobile)}
            />
          );
        })}

        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center screen-size-13:items-start items-center screen-size-13:text-left text-center text-white">
          <div className="screen-size-23:w-[1200px] screen-size-10:w-[800px] w-[280px] screen-size-13:ml-20 ml-0">
            <p className="screen-size-5:mt-4 mt-0 screen-size-23:text-2xl screen-size-10:text-xl screen-size-5:text-md text-sm screen-size-13:text-left text-center mb-2 leading-relaxed">
              {carouselData[currentIndex].description}
            </p>

            <Link
              href={carouselData[currentIndex].path || "/"}
              aria-label={`Learn more about ${carouselData[currentIndex].alt}`}
            >
              <span className="font-inter-extrabold inline-block bg-white/70 text-black px-6 py-3 mt-3 rounded-full font-medium transition text-left w-fit hover:bg-white/85 active:bg-white text-center">
                Learn more about <br /> {carouselData[currentIndex].alt}
              </span>
            </Link>

            <h2 className="mt-6 screen-size-15:text-[50px] screen-size-10:text-[36px] text-[24px] font-extrabold screen-size-13:text-left text-center drop-shadow-md leading-tight">
              {carouselData[currentIndex].alt}
            </h2>
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
    </section>
  );
};

export default ClientCarousel;
