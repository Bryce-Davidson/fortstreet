// Utility function to generate URL-friendly slugs from product names
export function generateSlug(brand: string, name: string): string {
  return `${brand} ${name}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
}

// Add slugs to products that don't have them
export function addSlugsToProducts<
  T extends { brand: string; name: string; slug?: string }
>(products: T[]): (Omit<T, "slug"> & { slug: string })[] {
  return products.map((product) => ({
    ...product,
    slug: product.slug || generateSlug(product.brand, product.name),
  }));
}
