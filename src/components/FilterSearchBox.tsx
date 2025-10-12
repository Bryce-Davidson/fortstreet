"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface FilterSearchBoxProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

const FilterSearchBox: React.FC<FilterSearchBoxProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search products...",
}) => {
  const handleClear = () => {
    onSearchChange("");
  };

  return (
    <div className="relative flex-1 max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-500 text-sm"
          placeholder={placeholder}
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSearchBox;
