"use client";

import React from "react";
import { X } from "lucide-react";
import FilterSideBarSection from "./FilterSideBarSection";
import FilterButton from "./FilterButton";

export interface FilterState {
  availability: string[];
  brands: string[];
  categories: string[];
  priceRanges: string[];
}

interface FilterSideBarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearAll: () => void;
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  productCounts?: {
    availability: Record<string, number>;
    brands: Record<string, number>;
    categories: Record<string, number>;
    priceRanges: Record<string, number>;
  };
}

// Filter options configuration
const filterOptions = {
  availability: [
    { value: "in-stock", label: "In Stock" },
    { value: "out-of-stock", label: "Out of Stock" },
  ],
  brands: [
    { value: "specialized", label: "Specialized" },
    { value: "trek", label: "Trek" },
    { value: "cannondale", label: "Cannondale" },
    { value: "pinarello", label: "Pinarello" },
    { value: "cervélo", label: "Cervélo" },
    { value: "santa-cruz", label: "Santa Cruz" },
    { value: "yeti", label: "Yeti" },
    { value: "pivot", label: "Pivot" },
    { value: "canyon", label: "Canyon" },
    { value: "salsa", label: "Salsa" },
    { value: "zipp", label: "Zipp" },
    { value: "enve", label: "ENVE" },
    { value: "continental", label: "Continental" },
    { value: "schwalbe", label: "Schwalbe" },
    { value: "shimano", label: "Shimano" },
    { value: "sram", label: "SRAM" },
    { value: "campagnolo", label: "Campagnolo" },
    { value: "chris-king", label: "Chris King" },
    { value: "garmin", label: "Garmin" },
    { value: "hammerhead", label: "Hammerhead" },
    { value: "lezyne", label: "Lezyne" },
    { value: "wahoo", label: "Wahoo" },
    { value: "rapha", label: "Rapha" },
    { value: "castelli", label: "Castelli" },
    { value: "assos", label: "Assos" },
    { value: "poc", label: "POC" },
    { value: "giro", label: "Giro" },
    { value: "maurten", label: "Maurten" },
    { value: "skratch-labs", label: "Skratch Labs" },
    { value: "science-in-sport", label: "Science in Sport" },
    { value: "precision-hydration", label: "Precision Hydration" },
  ],
  categories: [
    { value: "road-bikes", label: "Road Bikes" },
    { value: "mountain-bikes", label: "Mountain Bikes" },
    { value: "gravel-bikes", label: "Gravel Bikes" },
    { value: "wheels-tyres", label: "Wheels & Tyres" },
    { value: "parts", label: "Parts" },
    { value: "accessories", label: "Accessories" },
    { value: "apparel", label: "Apparel" },
    { value: "nutrition", label: "Nutrition" },
  ],
  priceRanges: [
    { value: "under-100", label: "Under $100" },
    { value: "100-500", label: "$100 - $500" },
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000-2500", label: "$1,000 - $2,500" },
    { value: "2500-5000", label: "$2,500 - $5,000" },
    { value: "over-5000", label: "Over $5,000" },
  ],
};

const FilterSideBar: React.FC<FilterSideBarProps> = ({
  filters,
  onFiltersChange,
  onClearAll,
  isMobile = false,
  isOpen = true,
  onClose,
  productCounts,
}) => {
  const handleFilterChange = (
    filterType: keyof FilterState,
    value: string,
    checked: boolean
  ) => {
    const currentValues = filters[filterType];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);

    onFiltersChange({
      ...filters,
      [filterType]: newValues,
    });
  };

  const getTotalActiveFilters = () => {
    return (
      filters.availability.length +
      filters.brands.length +
      filters.categories.length +
      filters.priceRanges.length
    );
  };

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          {getTotalActiveFilters() > 0 && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
              {getTotalActiveFilters()}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {getTotalActiveFilters() > 0 && (
            <button
              onClick={onClearAll}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Clear all
            </button>
          )}
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Sections */}
      <div className="flex-1 overflow-y-auto p-6 space-y-0">
        {/* Availability */}
        <FilterSideBarSection title="Availability">
          {filterOptions.availability.map((option) => (
            <FilterButton
              key={option.value}
              label={option.label}
              checked={filters.availability.includes(option.value)}
              onChange={(checked) =>
                handleFilterChange("availability", option.value, checked)
              }
              count={productCounts?.availability[option.value]}
            />
          ))}
        </FilterSideBarSection>

        {/* Categories */}
        <FilterSideBarSection title="Product Type">
          {filterOptions.categories.map((option) => (
            <FilterButton
              key={option.value}
              label={option.label}
              checked={filters.categories.includes(option.value)}
              onChange={(checked) =>
                handleFilterChange("categories", option.value, checked)
              }
              count={productCounts?.categories[option.value]}
            />
          ))}
        </FilterSideBarSection>

        {/* Brands */}
        <FilterSideBarSection title="Brand">
          {filterOptions.brands.map((option) => (
            <FilterButton
              key={option.value}
              label={option.label}
              checked={filters.brands.includes(option.value)}
              onChange={(checked) =>
                handleFilterChange("brands", option.value, checked)
              }
              count={productCounts?.brands[option.value]}
            />
          ))}
        </FilterSideBarSection>

        {/* Price Range */}
        <FilterSideBarSection title="Price Range">
          {filterOptions.priceRanges.map((option) => (
            <FilterButton
              key={option.value}
              label={option.label}
              checked={filters.priceRanges.includes(option.value)}
              onChange={(checked) =>
                handleFilterChange("priceRanges", option.value, checked)
              }
              count={productCounts?.priceRanges[option.value]}
            />
          ))}
        </FilterSideBarSection>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
              {sidebarContent}
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop sidebar
  return (
    <div className="hidden lg:block w-80 bg-white border-r border-gray-200">
      {sidebarContent}
    </div>
  );
};

export default FilterSideBar;
