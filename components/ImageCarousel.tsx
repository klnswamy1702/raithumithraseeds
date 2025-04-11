'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Images, Titles, and Subtitles
const slides = [
  {
    src: "/images/agri-1.jpg",
    title: "Legacy of Raithu Mithra Seeds",
    subtitle: "Empowering farmers with trusted quality since inception"
  },
  {
    src: "/images/agri-2.jpg",
    title: "Best Agricultural Seeds",
    subtitle: "Delivering high-yield, disease-resistant seeds"
  },
  {
    src: "/images/allseeds_hd.jpg",
    title: "Best Products",
    subtitle: "Enriching agriculture with premium agri-inputs"
  }
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">

      {/* Image + Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={`Slide ${current + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Text Content */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 max-w-md space-y-2">
            <h2 className="text-white text-2xl sm:text-4xl font-bold">
              {slides[current].title}
            </h2>
            <p className="text-white text-sm sm:text-lg">
              {slides[current].subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${current === index ? 'bg-white' : 'bg-gray-400'} transition-colors`}
          ></button>
        ))}
      </div>
    </div>
  );
}
