"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductRowProps {
  children: React.ReactNode;
  className?: string;
}

const ProductRow: React.FC<ProductRowProps> = ({
  children,
  className = "",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Approximate card width + gap (300px + 24px gap)
      const scrollDirection =
        direction === "left" ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({
        left: scrollDirection,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Scroll Left Button */}
      <button
        onClick={() => scroll("left")}
        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Product Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll("right")}
        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductRow;
