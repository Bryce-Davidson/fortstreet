"use client";

import { useState, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/components/ProductRowCard";
import { FilterState } from "@/components/FilterSideBar";

// Helper function to get price range for a product
const getPriceRange = (price: number): string => {
  if (price < 100) return "under-100";
  if (price < 500) return "100-500";
  if (price < 1000) return "500-1000";
  if (price < 2500) return "1000-2500";
  if (price < 5000) return "2500-5000";
  return "over-5000";
};

// Helper function to normalize brand names for filtering
const normalizeBrand = (brand: string): string => {
  return brand.toLowerCase().replace(/\s+/g, "-").replace(/é/g, "e");
};

export const useFilters = (products: Product[]) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize filters from URL search params
  const initializeFilters = useCallback((): FilterState => {
    return {
      availability: searchParams.getAll("availability"),
      brands: searchParams.getAll("brand"),
      categories: searchParams.getAll("category"),
      priceRanges: searchParams.getAll("price"),
    };
  }, [searchParams]);

  const [filters, setFilters] = useState<FilterState>(initializeFilters);
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("search") || ""
  );

  // Update URL when filters change
  const updateFilters = useCallback(
    (newFilters: FilterState) => {
      setFilters(newFilters);

      // Create new URLSearchParams
      const params = new URLSearchParams();

      // Add each filter type to params
      newFilters.availability.forEach((value) =>
        params.append("availability", value)
      );
      newFilters.brands.forEach((value) => params.append("brand", value));
      newFilters.categories.forEach((value) =>
        params.append("category", value)
      );
      newFilters.priceRanges.forEach((value) => params.append("price", value));

      // Add search query to params if it exists
      if (searchQuery.trim()) {
        params.set("search", searchQuery.trim());
      }

      // Update URL without page reload
      const newUrl = params.toString()
        ? `/collections?${params.toString()}`
        : "/collections";
      router.push(newUrl, { scroll: false });
    },
    [router, searchQuery]
  );

  // Update search query and URL
  const updateSearchQuery = useCallback(
    (query: string) => {
      setSearchQuery(query);

      // Create new URLSearchParams
      const params = new URLSearchParams();

      // Add current filters to params
      filters.availability.forEach((value) =>
        params.append("availability", value)
      );
      filters.brands.forEach((value) => params.append("brand", value));
      filters.categories.forEach((value) => params.append("category", value));
      filters.priceRanges.forEach((value) => params.append("price", value));

      // Add search query to params if it exists
      if (query.trim()) {
        params.set("search", query.trim());
      }

      // Update URL without page reload
      const newUrl = params.toString()
        ? `/collections?${params.toString()}`
        : "/collections";
      router.push(newUrl, { scroll: false });
    },
    [router, filters]
  );

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    const emptyFilters: FilterState = {
      availability: [],
      brands: [],
      categories: [],
      priceRanges: [],
    };
    setSearchQuery("");
    updateFilters(emptyFilters);
  }, [updateFilters]);

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const searchableText = [
          product.name,
          product.brand,
          product.description,
          product.category,
          ...(product.tags || []),
        ]
          .join(" ")
          .toLowerCase();

        if (!searchableText.includes(query)) {
          return false;
        }
      }

      // Availability filter
      if (
        filters.availability.length > 0 &&
        !filters.availability.includes(product.availability)
      ) {
        return false;
      }

      // Brand filter
      if (
        filters.brands.length > 0 &&
        !filters.brands.includes(normalizeBrand(product.brand))
      ) {
        return false;
      }

      // Category filter
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(product.category)
      ) {
        return false;
      }

      // Price range filter
      if (filters.priceRanges.length > 0) {
        const productPriceRange = getPriceRange(product.price);
        if (!filters.priceRanges.includes(productPriceRange)) {
          return false;
        }
      }

      return true;
    });
  }, [products, filters, searchQuery]);

  // Calculate product counts for each filter option
  const productCounts = useMemo(() => {
    const counts = {
      availability: {} as Record<string, number>,
      brands: {} as Record<string, number>,
      categories: {} as Record<string, number>,
      priceRanges: {} as Record<string, number>,
    };

    products.forEach((product) => {
      // Availability counts
      counts.availability[product.availability] =
        (counts.availability[product.availability] || 0) + 1;

      // Brand counts
      const normalizedBrand = normalizeBrand(product.brand);
      counts.brands[normalizedBrand] =
        (counts.brands[normalizedBrand] || 0) + 1;

      // Category counts
      counts.categories[product.category] =
        (counts.categories[product.category] || 0) + 1;

      // Price range counts
      const priceRange = getPriceRange(product.price);
      counts.priceRanges[priceRange] =
        (counts.priceRanges[priceRange] || 0) + 1;
    });

    return counts;
  }, [products]);

  return {
    filters,
    searchQuery,
    filteredProducts,
    productCounts,
    updateFilters,
    updateSearchQuery,
    clearAllFilters,
    totalResults: filteredProducts.length,
    hasActiveFilters:
      filters.availability.length > 0 ||
      filters.brands.length > 0 ||
      filters.categories.length > 0 ||
      filters.priceRanges.length > 0 ||
      searchQuery.trim().length > 0,
  };
};
