"use client";

import React from "react";

interface FilterButtonProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  count?: number;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  checked,
  onChange,
  count,
  className = "",
}) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-between w-full py-2 px-3 text-left text-sm hover:bg-gray-50 transition-colors rounded-md group ${className}`}
      aria-pressed={checked}
    >
      <div className="flex items-center gap-3">
        {/* Custom Checkbox */}
        <div
          className={`w-4 h-4 border border-gray-300 rounded flex items-center justify-center transition-all ${
            checked
              ? "bg-black border-black"
              : "bg-white group-hover:border-gray-400"
          }`}
        >
          {checked && (
            <svg
              className="w-2.5 h-2.5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        {/* Label */}
        <span
          className={`transition-colors ${
            checked ? "text-gray-900 font-medium" : "text-gray-700"
          }`}
        >
          {label}
        </span>
      </div>

      {/* Count Badge */}
      {count !== undefined && (
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {count}
        </span>
      )}
    </button>
  );
};

export default FilterButton;
