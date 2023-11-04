import React, { FC } from 'react';
import { IReview } from '@/types/review.interface';
import ProductRating from '@/components/ui/catalog/ProductRating';
import { Rating } from 'react-simple-star-rating';
import { getDataRu } from '@/services/dataHelper';

interface IReviewsCard {
  review: IReview;
}
const ReviewsCard: FC<IReviewsCard> = ({ review }) => {
  return (
    <div className="mt-4 flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          <div className="rounded-full bg-gray-100 px-4 py-2">
            {review.user.username[0]}
          </div>
          <div className="px-4 py-2">
            {' '}
            {review.user.username}
          </div>
        </div>
        <div className="px-4 py-2   flex justify-center items-end gap-2">
          <span >{getDataRu(review.createdAt)}</span>
          <Rating
            readonly
            initialValue={review.rating ? review.rating : 0}
            SVGstyle={{ display: 'inline-block' }}
            size={22}
            allowFraction
            transition
          />
        </div>
      </div>

      <div className="px-16 text-secondary"> {review.text}</div>
    </div>
  );
};

export default ReviewsCard;
