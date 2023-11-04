import { IReview } from '@/types/review.interface';

import { instance } from '@/api/api.interceptor';

const REVIEW = '/review';
interface IReviewLeave {
  rating: number;
  text: string;
}
export const ReviewService = {
  async getALL() {
    return instance<IReview[]>({
      url: `${REVIEW}`,
      method: 'GET',
    });
  },

  async leave(id: string, data: IReviewLeave) {
    return instance<IReview>({
      url: `${REVIEW}/leave/${id}`,
      method: 'POST',
      data,
    });
  },
  async average(id: string|number) {
    return instance<number>({
      url: `${REVIEW}/average/${id}`,
      method: 'GET',
    });
  },
};
