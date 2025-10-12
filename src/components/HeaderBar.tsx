"use client";

import React from "react";
import Image from "next/image";
import { Search, User, ShoppingBag } from "lucide-react";

const HeaderBar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Left Section - Search */}
          <div className="flex items-center flex-1">
            <button
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Center Section - Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="relative h-12 md:h-16">
              <Image
                src="/logo.svg"
                alt="Fort Street Cycle"
                width={0}
                height={0}
                className="h-full w-auto object-contain"
                style={{ width: "auto", height: "100%" }}
                priority
              />
            </div>
          </div>

          {/* Right Section - Account and Cart */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <button
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
              {/* Cart count badge */}
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
