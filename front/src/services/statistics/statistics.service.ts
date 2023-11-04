import { IReview } from '@/types/review.interface';

import { instance } from '@/api/api.interceptor';

const STATISTICS = '/statistics';
export type TypeStatistics = {
  name: string;
  value: number;
}[];
export const StatisticsService = {
  async getStatistics() {
    return instance<TypeStatistics[]>({
      url: `${STATISTICS}`,
      method: 'GET',
    });
  },
};
