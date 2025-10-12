"use client";

import React, { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import NavigationWrapper from "@/components/NavigationWrapper";
import FilterSideBar from "@/components/FilterSideBar";
import FilterSearchBox from "@/components/FilterSearchBox";
import ProductGridCard from "@/components/ProductGridCard";
import { allProducts } from "@/data/products";
import { useFilters } from "@/hooks/useFilters";

const CollectionsPage: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const {
    filters,
    searchQuery,
    filteredProducts,
    productCounts,
    updateFilters,
    updateSearchQuery,
    clearAllFilters,
    totalResults,
    hasActiveFilters,
  } = useFilters(allProducts);

  const handleMobileFiltersToggle = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  const handleMobileFiltersClose = () => {
    setMobileFiltersOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header and Navigation */}
      <NavigationWrapper />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="py-8 border-b border-gray-200">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Collections</h1>
              <p className="mt-2 text-sm text-gray-600">
                {totalResults} {totalResults === 1 ? "product" : "products"}
                {hasActiveFilters && " found"}
              </p>
            </div>

            {/* Search Box */}
            <FilterSearchBox
              searchQuery={searchQuery}
              onSearchChange={updateSearchQuery}
              placeholder="Search products..."
            />

            {/* Mobile Filter Toggle */}
            <button
              onClick={handleMobileFiltersToggle}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
              {hasActiveFilters && (
                <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
                  {filters.availability.length +
                    filters.brands.length +
                    filters.categories.length +
                    filters.priceRanges.length +
                    (searchQuery.trim() ? 1 : 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex">
          {/* Desktop Filter Sidebar */}
          <FilterSideBar
            filters={filters}
            onFiltersChange={updateFilters}
            onClearAll={clearAllFilters}
            productCounts={productCounts}
          />

          {/* Mobile Filter Sidebar */}
          <FilterSideBar
            filters={filters}
            onFiltersChange={updateFilters}
            onClearAll={clearAllFilters}
            productCounts={productCounts}
            isMobile
            isOpen={mobileFiltersOpen}
            onClose={handleMobileFiltersClose}
          />

          {/* Product Grid */}
          <div className="flex-1 lg:pl-8">
            <div className="py-8">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                  {filteredProducts.map((product) => (
                    <ProductGridCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="text-center py-16">
                  <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters to see more results.
                  </p>
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
