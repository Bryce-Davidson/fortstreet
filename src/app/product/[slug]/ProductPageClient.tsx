"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import NavigationWrapper from "@/components/NavigationWrapper";
import Breadcrumb from "@/components/Breadcrumb";
import ProductPageFilterButton from "@/components/ProductPageFilterButton";
import { Product, ProductVariant } from "@/components/ProductRowCard";

interface ProductPageClientProps {
  product: Product;
}

const ProductPageClient: React.FC<ProductPageClientProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, ProductVariant>
  >({});
  const [quantity, setQuantity] = useState(1);

  // Category mapping for breadcrumbs
  const categoryLabels: Record<string, string> = {
    "road-bikes": "Road Bikes",
    "mountain-bikes": "Mountain Bikes",
    "gravel-bikes": "Gravel Bikes",
    "wheels-tyres": "Wheels & Tyres",
    parts: "Parts",
    accessories: "Accessories",
    apparel: "Apparel",
    nutrition: "Nutrition",
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: categoryLabels[product.category] || product.category,
      href: `/collections?category=${product.category}`,
    },
    {
      label: product.brand,
      href: `/collections?brand=${product.brand
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    },
    { label: product.name },
  ];

  const handleImageNavigation = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleVariantSelect = (
    variantType: string,
    variant: ProductVariant
  ) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variantType]: variant,
    }));
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const calculateTotalPrice = () => {
    let total = product.price;
    Object.values(selectedVariants).forEach((variant) => {
      if (variant.priceModifier) {
        total += variant.priceModifier;
      }
    });
    return total * quantity;
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const isAddToCartDisabled = () => {
    // Check if all required variants are selected and available
    if (product.variants) {
      for (const [variantType, variants] of Object.entries(product.variants)) {
        if (variants && variants.length > 0) {
          const selected = selectedVariants[variantType];
          if (!selected || !selected.available) {
            return true;
          }
        }
      }
    }
    return product.availability === "out-of-stock";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header and Navigation */}
      <NavigationWrapper />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[currentImageIndex]}
                alt={`${product.brand} ${product.name}`}
                fill
                className="object-cover"
                priority
              />

              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => handleImageNavigation("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleImageNavigation("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-6"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details & Checkout */}
          <div className="space-y-6">
            {/* Product Info */}
            <div>
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(calculateTotalPrice())}
              </span>
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice * quantity)}
                  </span>
                )}
            </div>

            {/* Availability Status */}
            <div>
              {product.availability === "in-stock" ? (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Product Variants */}
            {product.variants &&
              Object.entries(product.variants).map(
                ([variantType, variants]) =>
                  variants &&
                  variants.length > 0 && (
                    <div key={variantType}>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                        {variantType}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {variants.map((variant) => (
                          <ProductPageFilterButton
                            key={variant.id}
                            variant={variant}
                            isSelected={
                              selectedVariants[variantType]?.id === variant.id
                            }
                            onSelect={(v) =>
                              handleVariantSelect(variantType, v)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  )
              )}

            {/* Quantity Selector */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Quantity
              </h3>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3 text-center min-w-[60px] font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              disabled={isAddToCartDisabled()}
              className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {isAddToCartDisabled() ? "Unavailable" : "Add to Cart"}
            </button>

            {/* Product Tags */}
            {product.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag.replace(/-/g, " ")}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageClient;
