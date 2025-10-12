import React from "react";
import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";
import { allProducts } from "@/data/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${product.brand}`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
