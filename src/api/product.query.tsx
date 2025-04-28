import type { Product } from '@/types';

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
  );
  const data = await response.json();

  return data as Product;
}
