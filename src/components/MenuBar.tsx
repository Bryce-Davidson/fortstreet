"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import MenuBarPopup from "./MenuBarPopup";

// Easily configurable menu items
const menuItems = [
  "LATEST",
  "BRANDS",
  "BIKES & FRAMES",
  "WHEELS & TYRES",
  "PARTS",
  "ACCESSORIES",
  "APPAREL",
  "NUTRITION",
  "SALE",
];

// Define submenu items for each category
export const submenuContent: Record<
  string,
  { categories?: string[]; items?: string[] }
> = {
  LATEST: {
    items: [
      "All Latest",
      "Latest Bikes & Frames",
      "Latest Wheels & Tyres",
      "Latest Parts",
      "Latest Accessories",
      "Latest Apparel",
    ],
  },
  "BIKES & FRAMES": {
    categories: ["Latest Bikes", "Latest Frames"],
    items: [
      "Latest Road Bikes",
      "Latest Mountain Bikes",
      "Latest Gravel Bikes",
      "Latest E-Bikes",
      "Latest Carbon Frames",
      "Latest Alloy Frames",
    ],
  },
  "WHEELS & TYRES": {
    categories: ["Latest Wheels", "Latest Tyres"],
    items: [
      "Latest Road Disc Brake Wheels",
      "Latest Gravel Disc Wheels",
      "Latest Road Tyres",
      "Latest Gravel Tyres",
      "Latest Mountain Bike Tyres",
    ],
  },
  PARTS: {
    items: [
      "Drivetrain",
      "Brakes",
      "Handlebars & Stems",
      "Saddles & Seatposts",
      "Pedals",
      "Bottom Brackets",
    ],
  },
  ACCESSORIES: {
    items: ["Lights", "Locks", "Pumps", "Tools", "Bags", "Bottles & Cages"],
  },
  APPAREL: {
    items: [
      "Jerseys",
      "Shorts & Bibs",
      "Jackets",
      "Base Layers",
      "Gloves",
      "Shoes",
    ],
  },
};

const MenuBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (item: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (submenuContent[item]) {
      setActiveMenu(item);
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow mouse to move to popup
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  const handlePopupMouseEnter = () => {
    // Clear timeout when mouse enters popup
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handlePopupMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <nav className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center h-16">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 py-5 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                    {item}
                    {submenuContent[item] && (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <span className="text-sm font-medium">MENU</span>
            <div className="w-12" /> {/* Spacer for centering */}
          </div>
        </div>

        {/* Desktop Popup Menu */}
        {activeMenu && (
          <div
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
          >
            <MenuBarPopup
              category={activeMenu}
              content={submenuContent[activeMenu]}
              onClose={() => {}}
            />
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <span className="text-lg font-medium">MENU</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-89px)]">
            <ul className="p-6">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button className="flex items-center justify-between w-full py-5 text-left text-base font-medium">
                    {item}
                    {submenuContent[item] && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBar;
