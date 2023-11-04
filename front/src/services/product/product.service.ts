import { ICategory } from '@/types/category.interface';

import { instance } from '@/api/api.interceptor';
import {IProductDataType, TypeProductFilters} from "@/services/product/product.interface";
import {IProduct, TypePaginationProducts} from "@/types/product.interface";

const PRODUCT = '/products';


export const ProductService = {
  async getALL(queryData={} as TypeProductFilters) {
    return instance<TypePaginationProducts>({
      url: `${PRODUCT}`,
      method: 'GET',
      params:queryData
    });
  },

  async getById(id: string | number) {
    return instance<IProduct>({
      url: `${PRODUCT}/${id}`,
      method: 'GET',
    });
  },
  async getBySlug(slug: string) {
    return instance<IProduct>({
      url: `${PRODUCT}/slug/${slug}`,
      method: 'GET',
    });
  },
  async getSimilar(id: string) {
    return instance<IProduct[]>({
      url: `${PRODUCT}/similar/${id}`,
      method: 'GET',
    });
  },
  async getSlugCategory(slugCategory: string) {
    return instance<IProduct[]>({
      url: `${PRODUCT}/category/${slugCategory}`,
      method: 'GET',
    });
  },

  async create() {
    return instance<IProduct>({
      url: `${PRODUCT}`,
      method: 'POST',
    });
  },

  async update(productId: string, data: IProductDataType) {
    return instance<IProduct>({
      url: `${PRODUCT}/${productId}`,
      method: 'PUT',
      data,
    });
  },

  async delete(productId: string) {
    return instance<IProduct>({
      url: `${PRODUCT}/${productId}`,
      method: 'DELETE',
    });
  },
};
