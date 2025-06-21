"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { SEOImageProps } from "../../types/commonTypes";
import { buildImagePath } from "components/common/buildImagePath";

import StaticCarouselFirstSlide from "./StaticCarouselFirstSlide";
import SEOImage from "../common/SEOImage";

interface ClientCarouselProps {
  carouselData: SEOImageProps[];
}

const ClientCarousel: React.FC<ClientCarouselProps> = ({ carouselData }) => {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(mq.matches);

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // --- GUARD CLAUSE ---
  if (!carouselData || carouselData.length === 0) {
    return null;
  }

  // --- RENDER LOGIC ---

  // On the server OR for the very first client render, show the fast static component.
  if (!isClient || isMobile === null) {
    return <StaticCarouselFirstSlide slideData={carouselData[0]} />;
  }

  // --- INTERACTIVE CAROUSEL LOGIC ---
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
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={carouselData[currentIndex].id}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SEOImage
              src={buildImagePath(carouselData[currentIndex].src, isMobile)}
              alt={carouselData[currentIndex].alt}
              name={carouselData[currentIndex].alt}
              geoData={carouselData[currentIndex].geoData}
              priority={false} // Priority is handled by the static slide
              height={400}
              width={isMobile ? 640 : 1920}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 1200px"
              fill={true}
              className="w-full h-[400px]"
              objectFit="cover"
              fetchPriority="low"
            />
          </motion.div>
        </AnimatePresence>

        {carouselData.map((item, index) => {
          const nextIndex = (currentIndex + 1) % carouselData.length;
          if (index !== currentIndex && index !== nextIndex) {
            return (
              <link
                key={index}
                rel="prefetch"
                as="image"
                href={buildImagePath(item.src, isMobile)}
              />
            );
          }
          return null;
        })}

        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center screen-size-13:items-start items-center screen-size-13:text-left text-center text-white z-10">
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-md border border-white hover:bg-black/80 transition-all duration-300 z-20"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-md border border-white hover:bg-black/80 transition-all duration-300 z-20"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default ClientCarousel;
