"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
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

interface MenuBarProps {
  mobileMenuOpen?: boolean;
  onMobileMenuClose?: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({
  mobileMenuOpen = false,
  onMobileMenuClose,
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<Set<string>>(
    new Set()
  );
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

  const toggleMobileSubmenu = (item: string) => {
    const newExpanded = new Set(expandedMobileItems);
    if (newExpanded.has(item)) {
      newExpanded.delete(item);
    } else {
      newExpanded.add(item);
    }
    setExpandedMobileItems(newExpanded);
  };

  // Reset expanded mobile items when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setExpandedMobileItems(new Set());
    }
  }, [mobileMenuOpen]);

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
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <span className="text-lg font-medium">MENU</span>
            <button
              onClick={onMobileMenuClose}
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="overflow-y-auto h-[calc(100vh-89px)]">
            <ul className="p-6">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-gray-100 last:border-0"
                >
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-5 text-left text-base font-medium"
                      onClick={() =>
                        submenuContent[item]
                          ? toggleMobileSubmenu(item)
                          : undefined
                      }
                    >
                      {item}
                      {submenuContent[item] && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedMobileItems.has(item) ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Expandable Submenu */}
                    {submenuContent[item] && expandedMobileItems.has(item) && (
                      <div className="pb-4 pl-4 pr-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          {submenuContent[item].categories ? (
                            <div className="space-y-6">
                              {submenuContent[item].categories!.map(
                                (category, categoryIndex) => (
                                  <div key={category}>
                                    <h4 className="font-semibold text-sm mb-3 text-gray-900">
                                      {category}
                                    </h4>
                                    <ul className="space-y-2">
                                      {submenuContent[item]
                                        .items!.slice(
                                          categoryIndex *
                                            Math.ceil(
                                              submenuContent[item].items!
                                                .length /
                                                submenuContent[item].categories!
                                                  .length
                                            ),
                                          (categoryIndex + 1) *
                                            Math.ceil(
                                              submenuContent[item].items!
                                                .length /
                                                submenuContent[item].categories!
                                                  .length
                                            )
                                        )
                                        .map((subItem) => (
                                          <li key={subItem}>
                                            <a
                                              href="#"
                                              className="text-sm text-gray-600 hover:text-black transition-colors block py-1"
                                            >
                                              {subItem}
                                            </a>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            <ul className="space-y-2">
                              {submenuContent[item].items!.map((subItem) => (
                                <li key={subItem}>
                                  <a
                                    href="#"
                                    className="text-sm text-gray-600 hover:text-black transition-colors block py-1"
                                  >
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
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
