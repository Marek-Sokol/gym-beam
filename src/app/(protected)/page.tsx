import { getProducts } from '../_lib/products.query';
import { ProductCard } from '@/components';

export const metadata = {
  title: 'Products',
  description: 'Browse our products',
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-4">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
}
