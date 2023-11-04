import { ICategory } from '@/types/category.interface';

import { instance } from '@/api/api.interceptor';

const CATEGORY = '/categories';
export const CategoryService = {
  async getALL() {
    return instance<ICategory[]>({
      url: `${CATEGORY}`,
      method: 'GET',
    });
  },

  async getById(id: string | number) {
    return instance<ICategory>({
      url: `${CATEGORY}/${id}`,
      method: 'GET',
    });
  },
  async getBySlug(slug: string) {
    return instance<ICategory>({
      url: `${CATEGORY}/slug/${slug}`,
      method: 'GET',
    });
  },

  async create() {
    return instance<ICategory>({
      url: `${CATEGORY}`,
      method: 'POST',
    });
  },

  async update(categoryId: string, name: string) {
    return instance<ICategory>({
      url: `${CATEGORY}/${categoryId}`,
      method: 'PUT',
      data: { name },
    });
  },

  async delete(categoryId: string) {
    return instance<ICategory>({
      url: `${CATEGORY}/${categoryId}`,
      method: 'DELETE',
    });
  },
};
