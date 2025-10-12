"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterSideBarSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

const FilterSideBarSection: React.FC<FilterSideBarSectionProps> = ({
  title,
  children,
  defaultExpanded = true,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`border-b border-gray-200 last:border-0 ${className}`}>
      {/* Section Header */}
      <button
        type="button"
        onClick={toggleExpanded}
        className="flex items-center justify-between w-full py-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isExpanded}
      >
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          {title}
        </h3>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Section Content */}
      {isExpanded && <div className="pb-4 space-y-1">{children}</div>}
    </div>
  );
};

export default FilterSideBarSection;
