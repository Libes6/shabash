import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import ProductRating from '@/components/ui/catalog/ProductRating';

import { IProduct } from '@/types/product.interface';

const ProductItem: FC<{
  product: IProduct;
  className?: string;
}> = ({ product, className }) => {
  return (
    <div className={clsx(className, 'animate-opacity')}>
      <div className="relative bg-white    ">
        <div className="absolute top-2 right-2 z-10"></div>

        <Link href={`/product/${product.slug}`}>
          <Image
            className="rounded-xl overflow-hidden shadow"
            loading={'lazy'}
            width={300}
            height={300}
            src={product?.images[0]}
            alt={product.name}
          />
        </Link>
      </div>
      <Link href={`/product/${product.slug}`}>
        <h3 className="overflow-ellipsis text-1.5xl  overflow-hidden w-5/6 mb-0.5 whitespace-nowrap">
          {product.name}
        </h3>
      </Link>

      <Link href={`/catalog/${product.category.slug}`}>
        <h4 className="text-aqua text-xs mb-1">
          {product.category.name}
        </h4>
      </Link>

      <ProductRating product={product} />
      <div className="font-semibold text-1.5xl mt-1">
        {product.price} ₽
      </div>
    </div>
  );
};

export default ProductItem;
