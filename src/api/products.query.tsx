import type { Product } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  const data = await response.json();

  return data as Product[];
}