"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import HeroCarouselButtons from "./HeroCarouselButtons";

export interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  alignment?: "left" | "center" | "right";
}

// Sample carousel data - can be moved to props or external data source
const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/hero_image_001.webp",
    title: "NEW ARRIVALS",
    subtitle: "Discover the latest bikes and gear",
    buttonText: "SHOP NOW",
    buttonLink: "/latest",
    alignment: "left",
  },
  {
    id: 2,
    image: "/hero_image_002.webp",
    title: "ENGINEERED FOR SPEED",
    subtitle: "New race arrivals",
    buttonText: "SHOP ATTAQUER",
    buttonLink: "/brands/attaquer",
    alignment: "right",
  },
  {
    id: 3,
    image: "/hero_image_003.webp",
    title: "SUMMER SALE",
    subtitle: "Up to 50% off selected items",
    buttonText: "SHOP SALE",
    buttonLink: "/sale",
    alignment: "center",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false); // Pause when user manually navigates
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false); // Pause when user manually navigates
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false); // Pause when user selects specific slide
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const getAlignmentClasses = (alignment?: string) => {
    switch (alignment) {
      case "left":
        return "items-start text-left";
      case "right":
        return "items-end text-right";
      case "center":
      default:
        return "items-center text-center";
    }
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-100">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/20">
              <div className="container mx-auto px-4 sm:px-6 h-full">
                <div
                  className={`flex flex-col justify-center h-full ${getAlignmentClasses(
                    slide.alignment
                  )}`}
                >
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 hover:bg-gray-900 text-white items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900/80 hover:bg-gray-900 text-white items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Carousel Controls */}
      <HeroCarouselButtons
        totalSlides={slides.length}
        currentSlide={currentSlide}
        isPlaying={isPlaying}
        onDotClick={goToSlide}
        onPlayPauseClick={togglePlayPause}
      />
    </div>
  );
};

export default HeroCarousel;
