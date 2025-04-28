import { getProduct } from "@/api/product.query";
import { ProductCard } from '@/components';

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Product ${params.id}`,
    description: `Details for product ${params.id}`,
  };
}

export default async function ProductPage({params}: {params: { id: string }}) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductCard product={product} />;
}