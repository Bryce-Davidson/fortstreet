"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Filter, SlidersHorizontal } from "lucide-react";
import NavigationWrapper from "@/components/NavigationWrapper";
import FilterSideBar from "@/components/FilterSideBar";
import FilterSearchBox from "@/components/FilterSearchBox";
import ProductGridCard from "@/components/ProductGridCard";
import { allProducts } from "@/data/products";
import { useFilters } from "@/hooks/useFilters";

// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

const CollectionsPageContent: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [shouldAutoFocus, setShouldAutoFocus] = useState(false);
  const searchParams = useSearchParams();
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

  // Check if we should auto-focus and clear filters when coming from header search
  useEffect(() => {
    const focusParam = searchParams.get("focus");
    if (focusParam === "search") {
      // Clear all filters when coming from header search
      clearAllFilters();
      setShouldAutoFocus(true);

      // Remove the focus parameter from URL after handling it
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("focus");
      window.history.replaceState({}, "", newUrl.pathname + newUrl.search);
    }
  }, [searchParams, clearAllFilters]);

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
          {/* Desktop Layout: All in one row */}
          <div className="hidden lg:flex items-center justify-between gap-4">
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
              autoFocus={shouldAutoFocus}
            />
          </div>

          {/* Mobile Layout: Stacked */}
          <div className="lg:hidden">
            {/* Title and Filter Button Row */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Collections
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  {totalResults} {totalResults === 1 ? "product" : "products"}
                  {hasActiveFilters && " found"}
                </p>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={handleMobileFiltersToggle}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
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

            {/* Full-width Search Box Row */}
            <div className="w-full mt-4">
              <FilterSearchBox
                searchQuery={searchQuery}
                onSearchChange={updateSearchQuery}
                placeholder="Search products..."
                autoFocus={shouldAutoFocus}
                fullWidth={true}
              />
            </div>
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

// Loading component for Suspense fallback
const CollectionsPageLoading: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 border-b border-gray-200">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Collections</h1>
              <p className="mt-2 text-sm text-gray-600">Loading products...</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 lg:pl-8">
            <div className="py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                {/* Loading skeleton */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollectionsPage: React.FC = () => {
  return (
    <Suspense fallback={<CollectionsPageLoading />}>
      <CollectionsPageContent />
    </Suspense>
  );
};

export default CollectionsPage;
