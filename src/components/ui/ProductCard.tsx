import type { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: Product;
}

export function ProductCard({product}: ProductProps) {
  return (
    <Link href={`/${product.id}`}>
      <div className="flex flex-col flex-1">
        <div className="relative aspect-square w-full mb-2">
          <Image
            className="object-contain"
            src={product.image}
            alt={product.title}
            fill
          />
        </div>
        <h2 className="font-bold text-lg text-start truncate">
          {product.title}
        </h2>
        <p className="text-red-500">
          Cena: {product.price} €
        </p>
      </div>
    </Link>
  );
}