"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
}

interface ProductRowCardProps {
  product: Product;
}

const ProductRowCard: React.FC<ProductRowCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="flex-shrink-0 w-[280px] md:w-[300px] snap-start">
      <a href={`/product/${product.id}`} className="group block">
        {/* Image Container */}
        <div
          className="relative aspect-square bg-gray-100 mb-6 overflow-hidden rounded-lg"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Image
            src={product.images[currentImageIndex]}
            alt={`${product.brand} ${product.name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Image Navigation Arrows - Always visible and subtle */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-6 md:h-6 text-white hover:text-white/80 active:text-white/60 flex items-center justify-center transition-all z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 md:w-4 md:h-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-6 md:h-6 text-white hover:text-white/80 active:text-white/60 flex items-center justify-center transition-all z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-black w-4" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Brand */}
          <p className="text-xs md:text-sm font-semibold text-gray-900 uppercase">
            {product.brand}
          </p>

          {/* Product Name */}
          <p className="text-sm md:text-base text-gray-700 line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-base md:text-lg font-semibold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductRowCard;
