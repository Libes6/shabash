import React, { FC } from 'react';

import { EnumProductSort } from '@/services/product/product.interface';

interface ISortDropDawn {
  sortType?: EnumProductSort;
  setSortType: (value:EnumProductSort) => unknown;
}
const SortDropDawn: FC<ISortDropDawn> = ({setSortType}) => {

    const setType =(value:any)=>{
       setSortType(value)
    }
  return (
    <div className="text-right ">
      <select
          onChange={(event)=>setType(event.target.value)}
        defaultValue={'newest'}
        className="w-48 m-1 bg-white text-secondary border border-aqua  px-1 py-1 rounded-xl focus:outline-aqua hover:border-primary"
      >
        <option value="high-prise">Сначала дорогие</option>
        <option value="low-prise">Сначала дешевые</option>
        <option value="newest">Новые</option>
        <option value="oldest">Старые</option>
      </select>
    </div>
  );
};

export default SortDropDawn;
