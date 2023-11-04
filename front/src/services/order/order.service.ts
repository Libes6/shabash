import { IOrder } from '@/types/order.interface';
import { IReview } from '@/types/review.interface';

import { instance } from '@/api/api.interceptor';
type TypeData ={
  status?:any
  items:any
}
const ORDER = '/orders';
export const OrderService = {
  async getALL() {
    return instance<IOrder[]>({
      url: `${ORDER}`,
      method: 'GET',
    });
  },

  async placeOrder(data:TypeData) {
    return instance<{
      confirmation: {
        confirmation_url: string;
      };
    }>({
      url: `${ORDER}`,
      method: 'POST',
      data
    });
  },
};
