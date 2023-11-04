import React, { FC } from 'react';
import { useRouter } from 'next/router';
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next';
import {
  IProduct,
  TypePaginationProducts,
} from '@/types/product.interface';
import { ProductService } from '@/services/product/product.service';
import { CategoryService } from '@/services/category/category.service';
interface IProductId {
  product: IProduct;
}
const ProductId: NextPage<IProductId> = ({ product }) => {
  const router = useRouter();
  console.log(product)
  return (
      <></>
    // <ProductItem
    //   product={product}
    // ></ProductItem>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const product = await ProductService.getALL();
//   const paths = product.data.product.map(
//     (category: any) => {
//       return { params: { slug: category.slug } };
//     },
//   );
//   console.log(paths)
//   return { paths, fallback: 'blocking' };
// };
// export const getStaticProps: GetStaticProps = async ({
//   params,
// }) => {
//   console.log(params)
//   const { data } = await ProductService.getBySlug(
//     params?.slug as string,
//   );
//
//   console.log(data.slug)
//   return {
//     props: {product: data},
//   };
// };

export default ProductId;
