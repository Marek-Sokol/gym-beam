import { getProduct } from '@/app/_lib/product.query';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return {
    title: `Product ${id}`,
    description: `Details for product ${id}`,
  };
}

export default async function ProductPage({
  params,
}: {
  params:  Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return <div className="margin-auto">Product not found</div>;
  }

  return (
    <main className="flex flex-col flex-1 w-full items-start justify-start mx-auto max-w-7xl gap-3 p-4 mt-4 md:flex-row">
      <div className="relative aspect-square w-full mb-2 w-full md:w-1/3">
        <Image
          className="object-contain"
          src={product.image}
          alt={product.title}
          fill
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full md:w-2/3 md:align-items-center gap-4">
        <h2 className="font-bold text-lg text-start">{product.title}</h2>
        <p>{product.description}</p>
        <p className="text-red-500 font-bold align-self-start mt-4">
          Cena: {product.price} €
        </p>
      </div>
    </main>
  );
}
