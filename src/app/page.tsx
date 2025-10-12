import NavigationWrapper from "@/components/NavigationWrapper";
import HeroCarousel from "@/components/HeroCarousel";
import ProductSection from "@/components/ProductSection";
import ProductRow from "@/components/ProductRow";
import ProductRowCard from "@/components/ProductRowCard";
import { latestProducts } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header and Navigation */}
      <NavigationWrapper />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Latest Products Section */}
      <ProductSection title="LATEST" viewAllLink="/latest">
        <ProductRow>
          {latestProducts.map((product) => (
            <ProductRowCard key={product.id} product={product} />
          ))}
        </ProductRow>
      </ProductSection>

      {/* Info Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">
                EST. 2017 - INDEPENDENTLY OWNED & OPERATED
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                70,000+ CUSTOMERS WORLDWIDE
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                OVER 200,000 ORDERS FULFILLED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
