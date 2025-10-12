"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "./ProductRowCard";

interface ProductGridCardProps {
  product: Product;
  className?: string;
}

const ProductGridCard: React.FC<ProductGridCardProps> = ({
  product,
  className = "",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className={`w-full max-w-sm mx-auto ${className}`}>
      <a href={`/product/${product.slug}`} className="group block">
        {/* Image Container */}
        <div className="relative aspect-square bg-gray-100 mb-4 overflow-hidden rounded-lg">
          <Image
            src={product.images[currentImageIndex]}
            alt={`${product.brand} ${product.name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Out of Stock Overlay */}
          {product.availability === "out-of-stock" && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-20">
              <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                Out of Stock
              </span>
            </div>
          )}

          {/* Image Navigation Arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 text-white hover:text-white/80 active:text-white/60 flex items-center justify-center transition-all z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 text-white hover:text-white/80 active:text-white/60 flex items-center justify-center transition-all z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Brand */}
          <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            {product.brand}
          </p>

          {/* Product Name */}
          <h3 className="text-base font-medium text-gray-900 line-clamp-2 min-h-[3rem] leading-tight">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-lg font-semibold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Availability Badge */}
          {product.availability === "in-stock" && (
            <div className="pt-1">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                In Stock
              </span>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default ProductGridCard;
