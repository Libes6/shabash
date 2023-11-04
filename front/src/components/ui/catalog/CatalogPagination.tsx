import { useQuery } from '@tanstack/react-query';
import React, { FC, useEffect, useState } from 'react';

import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/button/Button';
import Pagination from '@/components/ui/catalog/Pagination';
import ProductItem from '@/components/ui/catalog/ProductItem';
import Search from '@/components/ui/catalog/Search';
import SortDropDawn from '@/components/ui/catalog/SortDropDawn';
import Loader from '@/components/ui/loader/Loader';

import { IProduct } from '@/types/product.interface';

import { EnumProductSort } from '@/services/product/product.interface';
import { ProductService } from '@/services/product/product.service';
import Image from 'next/image';

interface ICatalog {
  products: any;
  isLoading?: boolean;
  length?: number;
  title: string;
  isPagination?: boolean;
}
const Catalog: FC<ICatalog> = ({
  products,
  title,
  isPagination = true,
}) => {
  const [sortType, setSortType] = useState(
    EnumProductSort.NEWEST,
  );
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');

    const { data, isLoading } = useQuery(
      [sortType, page, search],
      () =>
        ProductService.getALL({
          sort: sortType,
          searchTerm: search,
          perPage,
          page,
        }),
      {
        initialData: products,
      },
    );


  if (isLoading) return <Loader />;
  return (
    <section className="mr-32 ml-32 mt-10">
      <Heading className="mb-4">
        {title && `${title}`}
      </Heading>

      {isPagination && (
        <div className="flex justify-end mb-4 ">
          <div className="flex gap-8 ">
            <Search setSearch={setSearch}  size='md' />
            <SortDropDawn setSortType={setSortType} />
          </div>
        </div>
      )}
      {/*{products.length}*/}
      {/*{data?.data?.product.length}*/}
      {data?.data?.product.length ? (
        <>
          <div className="grid grid-cols-3  gap-16 ">
            {data?.data?.product.map((item: IProduct) => (
              <ProductItem
                className=""
                key={item.id}
                product={item}
              />
            ))}
          </div>
          {isPagination && (
            <div className="text-center  mt-14 ">
              <Pagination
                setPage={setPage}
                page={page}
                length={products.length}
                perPage={perPage}
              />
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center py-14">
          <div>
            <Image
              width={150}
              height={100}
              src="/images/no-data.png"
              alt="no-data"
            />
            <h1 className="px-7">Не найдено</h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalog;
