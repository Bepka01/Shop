export const API_URLS = {
  products: '/products',
  categories: '/products/categories',
  productByCategory: (category: string) =>
    `/products/category/${encodeURIComponent(category)}`,
  productDetails: (id: number) => `/products/${id}`,
} as const
