import React, { FC } from 'react';

import Button from '@/components/ui/button/Button';

import { EnumProductSort } from '@/services/product/product.interface';

interface IPagination {
  page: number;
  setPage: (value: number) => any;
  length: number;
  perPage: number;
}
const Pagination: FC<IPagination> = ({
  page,
  setPage,
  length,
  perPage,
}) => {

  const paginationPage = Array.from(
    Array(Math.ceil(length / perPage)),
    (_, x) => x,
  );

  return (
    <div className="flex gap-4 justify-center ">
      <Button
        onClick={() => setPage(page > 1 ? page - 1 : 1)}
        variant={'light'}
      >
        Назад{' '}
      </Button>
      {paginationPage.map((i) => (
        <Button
            key={i}
          size={'sm'}
          onClick={() => setPage(i + 1)}
          variant={page===i+1?'dark':'light'}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        onClick={() =>
          setPage(
            page < length / perPage - 1
              ? page + 1
              : Math.ceil(length / perPage),
          )
        }
        variant={'light'}
      >
        Вперед{' '}
      </Button>
    </div>
  );
};

export default Pagination;
