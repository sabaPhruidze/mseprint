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
  // ---- Hooks (always the same order, every render) ----
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

  // ---- Guards (no hooks below this point) ----
  if (!carouselData || carouselData.length === 0) return null;

  // First paint: show super-fast static slide; hook order above stays constant
  if (!isClient || isMobile === null) {
    return <StaticCarouselFirstSlide slideData={carouselData[0]} />;
  }

  const total = carouselData.length;
  const nextIndex = (currentIndex + 1) % total;

  const nextSlide = () => setCurrentIndex((i) => (i + 1) % total);
  const prevSlide = () => setCurrentIndex((i) => (i - 1 + total) % total);

  const current = carouselData[currentIndex];
  const slideKey = current.id ?? current.src ?? `slide-${currentIndex}`;

  return (
    <section
      className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg"
      aria-labelledby="carousel-heading"
      aria-live="polite"
      // Optional: arrow-key support when the section is focused
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }}
    >
      <h2 id="carousel-heading" className="sr-only">
        Featured Services and Products
      </h2>

      <div id="carousel-slides" className="relative w-full h-[400px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slideKey}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SEOImage
              src={buildImagePath(current.src, isMobile!)}
              alt={current.alt}
              name={current.alt}
              geoData={current.geoData}
              priority={false}
              fetchPriority="low"
              height={400}
              width={isMobile ? 640 : 1920}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 1200px"
              fill
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center screen-size-13:items-start items-center screen-size-13:text-left text-center text-white z-10">
          <div className="screen-size-23:w-[1200px] screen-size-10:w-[800px] w-[280px] screen-size-13:ml-20 ml-0">
            <p className="screen-size-5:mt-4 mt-0 screen-size-23:text-2xl screen-size-10:text-xl screen-size-5:text-md text-sm screen-size-13:text-left text-center mb-2 leading-relaxed">
              {current.description}
            </p>
            <Link
              href={current.path || "/"}
              aria-label={`Learn more about ${current.alt}`}
              className="focus:outline-none focus-visible:ring focus-visible:ring-white/70"
            >
              <span className="font-inter-extrabold inline-block bg-white/70 text-black px-6 py-3 mt-3 rounded-full font-medium transition text-left w-fit hover:bg-white/85 active:bg-white text-center">
                Learn more about <br /> {current.alt}
              </span>
            </Link>
            <h3 className="mt-6 screen-size-15:text-[50px] screen-size-10:text-[36px] text-[24px] font-extrabold screen-size-13:text-left text-center drop-shadow-md leading-tight">
              {current.alt}
            </h3>
          </div>
        </div>
      </div>

      {/* Controls — native buttons are keyboard accessible by default */}
      <button
        type="button"
        onClick={prevSlide}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter" || e.key === "ArrowLeft") {
            e.preventDefault();
            prevSlide();
          }
        }}
        aria-controls="carousel-slides"
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-md border border-white hover:bg-black/80 transition-all duration-300 z-20 focus:outline-none focus-visible:ring focus-visible:ring-white/70"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter" || e.key === "ArrowRight") {
            e.preventDefault();
            nextSlide();
          }
        }}
        aria-controls="carousel-slides"
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-md border border-white hover:bg-black/80 transition-all duration-300 z-20 focus:outline-none focus-visible:ring focus-visible:ring-white/70"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default ClientCarousel;
