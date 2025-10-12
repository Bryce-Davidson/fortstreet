"use client";

import React from "react";

interface ProductSectionProps {
  title: string;
  viewAllLink?: string;
  children: React.ReactNode;
  className?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  viewAllLink = "#",
  children,
  className = "",
}) => {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            {title}
          </h2>
          <a
            href={viewAllLink}
            className="text-sm md:text-base text-gray-700 hover:text-black transition-colors underline"
          >
            View all
          </a>
        </div>

        {/* Product Content */}
        {children}
      </div>
    </section>
  );
};

export default ProductSection;
