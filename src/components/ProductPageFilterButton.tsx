"use client";

import React from "react";
import { ProductVariant } from "./ProductRowCard";

interface ProductPageFilterButtonProps {
  variant: ProductVariant;
  isSelected: boolean;
  onSelect: (variant: ProductVariant) => void;
  disabled?: boolean;
  className?: string;
}

const ProductPageFilterButton: React.FC<ProductPageFilterButtonProps> = ({
  variant,
  isSelected,
  onSelect,
  disabled = false,
  className = "",
}) => {
  const handleClick = () => {
    if (!disabled && variant.available) {
      onSelect(variant);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || !variant.available}
      className={`
        relative px-4 py-2 text-sm font-medium border rounded-lg transition-all duration-200
        ${
          isSelected
            ? "border-black bg-black text-white"
            : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
        }
        ${
          !variant.available
            ? "opacity-50 cursor-not-allowed line-through"
            : "cursor-pointer"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      aria-pressed={isSelected}
      aria-disabled={disabled || !variant.available}
    >
      {variant.value}
      {variant.priceModifier && variant.priceModifier > 0 && (
        <span className="ml-1 text-xs">
          (+${variant.priceModifier.toFixed(2)})
        </span>
      )}
      {!variant.available && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-red-500 font-medium">Out of Stock</span>
        </span>
      )}
    </button>
  );
};

export default ProductPageFilterButton;
