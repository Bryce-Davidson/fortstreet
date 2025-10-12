"use client";

import React from "react";
import { Play, Pause } from "lucide-react";

interface HeroCarouselButtonsProps {
  totalSlides: number;
  currentSlide: number;
  isPlaying: boolean;
  onDotClick: (index: number) => void;
  onPlayPauseClick: () => void;
}

const HeroCarouselButtons: React.FC<HeroCarouselButtonsProps> = ({
  totalSlides,
  currentSlide,
  isPlaying,
  onDotClick,
  onPlayPauseClick,
}) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
      {/* Play/Pause Button */}
      <button
        onClick={onPlayPauseClick}
        className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
        aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" />
        )}
      </button>

      {/* Dot Indicators */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`transition-all duration-300 ${
              currentSlide === index
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/60 hover:bg-white/80"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarouselButtons;
