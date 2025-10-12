"use client";

import React from "react";
import Image from "next/image";

interface MenuBarPopupProps {
  category: string;
  content: {
    categories?: string[];
    items?: string[];
  };
  onClose: () => void;
}

const MenuBarPopup: React.FC<MenuBarPopupProps> = ({
  category,
  content,
  onClose,
}) => {
  return (
    <div className="absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Menu Items Section */}
          <div className="col-span-3">
            {content.categories && content.categories.length > 0 && (
              <div className="space-y-8">
                {content.categories.map((cat, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-sm mb-4 text-gray-900">
                      {cat}
                    </h3>
                    {content.items && (
                      <ul className="space-y-3">
                        {content.items
                          .slice(
                            index *
                              Math.ceil(
                                content.items.length /
                                  content.categories!.length
                              ),
                            (index + 1) *
                              Math.ceil(
                                content.items.length /
                                  content.categories!.length
                              )
                          )
                          .map((item) => (
                            <li key={item}>
                              <a
                                href="/collections"
                                className="text-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-colors block py-2 px-3 rounded-md"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {!content.categories && content.items && (
              <ul className="space-y-3">
                {content.items.map((item) => (
                  <li key={item}>
                    <a
                      href="/collections"
                      className="text-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-colors block py-2 px-3 rounded-md"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Description Section */}
          <div className="col-span-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              {category === "LATEST" &&
                "Latest at CCACHF. Where you can find the new curated products added everyday. Shop our latest accessories, apparel, components and more."}
              {category === "BIKES & FRAMES" &&
                "Discover our premium selection of bikes and frames from top brands. Whether you're looking for road, mountain, gravel, or e-bikes, we have the perfect ride for you."}
              {category === "WHEELS & TYRES" &&
                "Upgrade your ride with our extensive range of wheels and tyres. From lightweight carbon race wheels to durable training wheels, find the perfect setup for your cycling needs."}
              {category === "PARTS" &&
                "Keep your bike running smoothly with our comprehensive selection of parts. From drivetrains to brakes, we stock everything you need for maintenance and upgrades."}
              {category === "ACCESSORIES" &&
                "Complete your cycling setup with our range of essential accessories. From safety lights to performance tools, we have everything to enhance your ride."}
              {category === "APPAREL" &&
                "Ride in comfort and style with our cycling apparel collection. Technical fabrics, ergonomic designs, and premium brands for every cyclist."}
            </p>
          </div>

          {/* Featured Products Section */}
          <div className="col-span-5">
            <div className="grid grid-cols-2 gap-6">
              {/* Placeholder for featured product images */}
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop"
                  alt="Featured Product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=400&h=400&fit=crop"
                  alt="Featured Product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBarPopup;
